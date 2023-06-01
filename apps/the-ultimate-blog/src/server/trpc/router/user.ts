import { z } from 'zod';
import { router, publicProcedure, protectedProcedure } from '../trpc';
import isDataURI from 'validator/lib/isDataURI';
import { decode } from 'base64-arraybuffer';
import { createClient } from '@supabase/supabase-js';
import { env } from '../../../env/server.mjs';
import { TRPCError } from '@trpc/server';

const sharp = require('sharp');
const supabase = createClient(env.SUPABASE_PUBLIC_URL, env.SUPABASE_SECRET_KEY);

export const userRouter = router({
  getUserProfile: publicProcedure
    .input(
      z.object({
        username: z.string().optional(),
        id: z.string().optional(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input: { username, id } }) => {
      const targetUserId =
        id ||
        (username &&
          (await prisma.user.findUnique({ where: { username } }))?.id) ||
        session?.user?.id;

      if (!targetUserId) {
        throw new Error('No username or id provided.');
      }

      return await prisma.user.findUnique({
        where: {
          id: targetUserId,
        },
        select: {
          name: true,
          image: true,
          shortDescription: true,
          bio: true,
          portfolioUrl: true,
          LinkedInUrl: true,

          githubUrl: true,
          id: true,
          username: true,
          _count: {
            select: {
              posts: true,
              followedBy: true,
              followings: true,
            },
          },
          followedBy: session?.user?.id
            ? {
                where: {
                  id: session.user.id,
                },
              }
            : false,
        },
      });
    }),

  getUserPosts: publicProcedure
    .input(
      z.object({
        username: z.string(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input: { username } }) => {
      return await prisma.user.findUnique({
        where: {
          username,
        },
        select: {
          posts: {
            select: {
              id: true,
              slug: true,
              title: true,
              description: true,
              createdAt: true,
              likes: true,
              featuredImage: true,
              author: {
                select: {
                  name: true,
                  image: true,
                  username: true,
                },
              },
              bookmarks: session?.user?.id
                ? {
                    where: {
                      userId: session?.user?.id,
                    },
                  }
                : false,
              tags: {
                select: {
                  name: true,
                  id: true,
                  slug: true,
                },
              },
            },
          },
        },
      });
    }),

  updateUserProfile: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        name: z.string().optional(),
        image: z.string().optional(),
        shortDescription: z.string().optional(),
        bio: z.string().optional(),
        portfolioUrl: z.string().optional(),
        githubUrl: z.string().optional(),
        LinkedInUrl: z.string().optional(),
      })
    )
    .mutation(
      async ({
        ctx: { prisma },
        input: {
          userId,
          name,
          image,
          shortDescription,
          bio,
          portfolioUrl,
          githubUrl,
          LinkedInUrl,
        },
      }) => {
        const updatedData = {
          name,
          image,
          shortDescription,
          bio,
          portfolioUrl,
          githubUrl,
          LinkedInUrl,
        };

        // Remove undefined fields from the updatedData object
        const filteredData = Object.fromEntries(
          Object.entries(updatedData).filter(
            ([_, value]) => value !== undefined
          )
        );

        // Update the user's profile
        await prisma.user.update({
          where: {
            id: userId,
          },
          data: filteredData,
        });
      }
    ),

  uploadAvatar: protectedProcedure
    .input(
      z.object({
        imageAsDataUrl: z.string().refine((val) => isDataURI(val)),
        username: z.string(),
      })
    )
    .mutation(async ({ ctx: { prisma, session }, input }) => {
      // make a function which grabs the user from the db using the username and checks if its id is equal to the session user id

      const imageBase64Str = input.imageAsDataUrl.replace(/^.+,/, '');

      // Define the maximum dimension for the resized image
      const MAX_DIMENSION = 400;

      // Decode the base64 string and resize the image
      const imageBuffer = Buffer.from(imageBase64Str, 'base64');
      const image = sharp(imageBuffer);
      const metadata = await image.metadata();

      const { width, height } = metadata;
      let resizedImage;

      if (width > height) {
        resizedImage = image.resize({ width: MAX_DIMENSION });
      } else {
        resizedImage = image.resize({ height: MAX_DIMENSION });
      }

      const resizedImageBuffer = await resizedImage.jpeg().toBuffer();

      const { data, error } = await supabase.storage
        .from('public')
        .upload(`avatars/${input.username}.jpg`, resizedImageBuffer, {
          contentType: 'image/jpeg',
          upsert: true,
        });

      if (error) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'upload failed to supabase',
        });
      }
      const {
        data: { publicUrl },
      } = supabase.storage.from('public').getPublicUrl(data?.path);

      await prisma.user.update({
        where: {
          id: session.user.id,
        },
        data: {
          image: publicUrl,
        },
      });
    }),

  getSuggestions: protectedProcedure.query(
    async ({ ctx: { prisma, session } }) => {
      // we need an array of users, those users should liked or bookmarked the same posts, that the current user did

      // get likes and bookmarks from current user -> extract tags -> find people who liked or bookmarked those posts which are having the extracted tags

      const tagsQuery = {
        where: {
          userId: session.user.id,
        },
        select: {
          post: {
            select: {
              tags: {
                select: {
                  name: true,
                },
              },
            },
          },
        },
        take: 10,
      };

      const likedPostTags = await prisma.like.findMany(tagsQuery);
      const bookmarkedPostTags = await prisma.bookMark.findMany(tagsQuery);

      const interestedTags: string[] = [];

      likedPostTags.forEach((like) => {
        interestedTags.push(...like.post.tags.map((tag) => tag.name));
      });

      bookmarkedPostTags.forEach((bookmark) => {
        interestedTags.push(...bookmark.post.tags.map((tag) => tag.name));
      });

      const suggestions = await prisma.user.findMany({
        where: {
          OR: [
            {
              likes: {
                some: {
                  post: {
                    tags: {
                      some: {
                        name: {
                          in: interestedTags,
                        },
                      },
                    },
                  },
                },
              },
            },
            {
              bookmarks: {
                some: {
                  post: {
                    tags: {
                      some: {
                        name: {
                          in: interestedTags,
                        },
                      },
                    },
                  },
                },
              },
            },
          ],
          NOT: {
            id: session.user.id,
          },
        },
        select: {
          id: true,
          name: true,
          image: true,
          username: true,
        },
        take: 4,
      });

      return suggestions;
    }
  ),

  followUser: protectedProcedure
    .input(
      z.object({
        followingUserId: z.string(),
      })
    )
    .mutation(
      async ({ ctx: { prisma, session }, input: { followingUserId } }) => {
        if (followingUserId === session.user.id) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: "you can't follow yourself",
          });
        }

        await prisma.user.update({
          where: {
            id: session.user.id,
          },
          data: {
            followings: {
              connect: {
                id: followingUserId,
              },
            },
          },
        });
      }
    ),

  unfollowUser: protectedProcedure
    .input(
      z.object({
        followingUserId: z.string(),
      })
    )
    .mutation(
      async ({ ctx: { prisma, session }, input: { followingUserId } }) => {
        await prisma.user.update({
          where: {
            id: session.user.id,
          },
          data: {
            followings: {
              disconnect: {
                id: followingUserId,
              },
            },
          },
        });
      }
    ),

  getAllFollowers: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input: { userId } }) => {
      return await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          followedBy: {
            select: {
              name: true,
              username: true,
              id: true,
              image: true,
              followedBy: {
                where: {
                  id: session.user.id,
                },
              },
            },
          },
        },
      });
    }),
  getAllFollowing: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input: { userId } }) => {
      return await prisma.user.findUnique({
        where: {
          id: userId,
        },
        select: {
          followings: {
            select: {
              name: true,
              username: true,
              id: true,
              image: true,
            },
          },
        },
      });
    }),

  isUserEmailRegistered: publicProcedure
    .input(
      z.object({
        email: z.string(),
      })
    )
    .output(z.boolean())
    .query(async ({ ctx: { prisma }, input: { email } }) => {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      return !!user; // return true if user exists, false otherwise
    }),
});
