import { router, protectedProcedure, publicProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { WriteFormSchema } from '../../../components/Writeform';
import slugify from 'slugify';
import { z } from 'zod';
import { commentFormSchema } from 'apps/the-ultimate-blog/src/components/CommentSidebar';

export const postRouter = router({
  createPost: protectedProcedure
    .input(WriteFormSchema)
    .mutation(
      async ({
        ctx: { prisma, session },
        input: { title, description, text, html },
      }) => {
        await prisma.post.create({
          data: {
            title,
            description,
            text,
            slug: slugify(title),
            author: {
              connect: {
                id: session.user.id,
              },
            },
          },
        });
      }
    ),

  getPosts: publicProcedure.query(async ({ ctx: { prisma, session } }) => {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        createdAt: true,
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
        likes: true, // include likes count
      },
    });
    return posts;
  }),

  getPost: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input: { slug } }) => {
      const post = await prisma.post.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
          description: true,
          title: true,
          text: true,
          html: true,
          authorId: true,
          slug: true,
          featuredImage: true,
          likes: session?.user?.id
            ? {
                where: {
                  userId: session?.user?.id,
                },
              }
            : false,
        },
      });

      return post;
    }),

  likePost: protectedProcedure
    .input(
      z.object({
        postId: z.string(),
      })
    )
    .mutation(async ({ ctx: { prisma, session }, input: { postId } }) => {
      await prisma.like.create({
        data: {
          userId: session.user.id,
          postId,
        },
      });
    }),

  disLikePost: protectedProcedure
    .input(
      z.object({
        postId: z.string(),
      })
    )
    .mutation(async ({ ctx: { prisma, session }, input: { postId } }) => {
      await prisma.like.delete({
        where: {
          userId_postId: {
            postId: postId,
            userId: session.user.id,
          },
        },
      });
    }),

  likeComment: protectedProcedure
    .input(
      z.object({
        // Add postId as a required field
        commentId: z.string(),
      })
    )
    .mutation(
      async ({ ctx: { prisma, session }, input: { postId, commentId } }) => {
        await prisma.like.create({
          data: {
            userId: session.user.id,
            // postId, // Use postId instead of commentId
            commentId,
          },
        });
      }
    ),

  dislikeComment: protectedProcedure
    .input(
      z.object({
        commentId: z.string(),
      })
    )
    .mutation(async ({ ctx: { prisma, session }, input: { commentId } }) => {
      await prisma.like.deleteMany({
        where: {
          AND: [
            { commentId: { equals: commentId } },
            { userId: { equals: session.user.id } },
          ],
        },
      });
    }),
  bookmarkPost: protectedProcedure
    .input(
      z.object({
        postId: z.string(),
      })
    )

    .mutation(async ({ ctx: { prisma, session }, input: { postId } }) => {
      await prisma.bookMark.create({
        data: {
          userId: session.user.id,
          postId,
        },
      });
    }),

  removeBookmark: protectedProcedure
    .input(
      z.object({
        postId: z.string(),
      })
    )
    .mutation(async ({ ctx: { prisma, session }, input: { postId } }) => {
      await prisma.bookMark.delete({
        where: {
          userId_postId: {
            postId: postId,
            userId: session.user.id,
          },
        },
      });
    }),

  submitComment: protectedProcedure
    .input(
      z.object({
        text: z.string().min(3),
        postId: z.string(),
      })
    )
    .mutation(async ({ ctx: { prisma, session }, input: { text, postId } }) => {
      await prisma.comment.create({
        data: {
          text,
          user: {
            connect: {
              id: session.user.id,
            },
          },
          post: {
            connect: {
              id: postId,
            },
          },
        },
      });
    }),

  removeComment: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      })
    )
    .mutation(async ({ ctx: { prisma, session }, input: { id } }) => {
      const comment = await prisma.comment.findUnique({
        where: { id },
        select: { userId: true },
      });
      if (!comment) {
        throw new Error('Comment not found');
      }
      if (comment.userId !== session.user.id) {
        throw new Error('Not authorized to delete comment');
      }
      await prisma.comment.delete({ where: { id } });
    }),

  getComments: publicProcedure
    .input(
      z.object({
        postId: z.string(),
      })
    )
    .query(async ({ ctx: { prisma }, input: { postId } }) => {
      const comments = await prisma.comment.findMany({
        where: {
          postId,
        },
        select: {
          text: true,
          userId: true,
          postId: true,
          post: true,
          id: true,
          likes: true,

          user: {
            select: {
              name: true,
              image: true,
            },
          },
          createdAt: true,
        },
      });

      return comments;
    }),

  updatePostFeaturedImage: protectedProcedure
    .input(
      z.object({
        imageUrl: z.string().url(),
        postId: z.string(),
      })
    )
    .mutation(
      async ({ ctx: { prisma, session }, input: { imageUrl, postId } }) => {
        // we have to check if the user is owner of the given post

        const postData = await prisma.post.findUnique({
          where: {
            id: postId,
          },
        });

        if (postData?.authorId !== session.user.id) {
          throw new TRPCError({
            code: 'FORBIDDEN',
            message: 'you are not owner of this post',
          });
        }

        await prisma.post.update({
          where: {
            id: postId,
          },
          data: {
            featuredImage: imageUrl,
          },
        });
      }
    ),

  getReadingList: protectedProcedure.query(
    async ({ ctx: { prisma, session } }) => {
      const allBookmarks = await prisma.bookMark.findMany({
        where: {
          userId: session.user.id,
        },
        take: 10,
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          post: {
            select: {
              id: true,
              title: true,
              featuredImage: true,
              description: true,
              author: {
                select: {
                  name: true,
                  image: true,
                },
              },
              createdAt: true,
              slug: true,
            },
          },
        },
      });

      return allBookmarks;
    }
  ),
});
