import { router, protectedProcedure, publicProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { WriteFormSchema } from '../../../components/Writeform';
import { WriteTechFormSchema } from 'apps/the-ultimate-blog/src/components/WriteformTech';
import slugify from 'slugify';
import { createClient } from '@supabase/supabase-js';
import { env } from '../../../env/server.mjs';
const supabase = createClient(env.SUPABASE_PUBLIC_URL, env.SUPABASE_SECRET_KEY);
import { commentFormSchema } from 'apps/the-ultimate-blog/src/components/CommentSidebar';
import { z } from 'zod';
const sharp = require('sharp');

export const postRouter = router({
  uploadImage: protectedProcedure
    .input(
      z.object({
        file: z.any(),
        // Modify the type of 'file' based on your requirements
      })
    )
    .mutation(async ({ input: { file } }) => {
      // Check if supabase is ready
      if (!supabase) {
        throw new Error('Supabase is not ready.');
      }

      // Read the uploaded file using sharp
      const image = sharp(file);

      // Define the maximum dimension for the resized image
      const MAX_DIMENSION = 800; // Adjust the maximum dimension as desired

      // Resize the image while maintaining the aspect ratio
      const resizedImage = image.resize(MAX_DIMENSION, MAX_DIMENSION, {
        fit: 'inside',
        withoutEnlargement: true,
      });

      const resizedImageBuffer = await resizedImage.toBuffer();

      const { data, error } = await supabase.storage
        .from('public')
        .upload(`postImages/${file.name}`, resizedImageBuffer, {
          contentType: 'image/jpeg',
          upsert: true,
        });

      if (error) {
        console.log('Error uploading image:', error, file);
        return '';
      }
      console.warn(data.path);
      return data?.path || '';
    }),

  createPost: protectedProcedure
    .input(
      WriteFormSchema.and(
        z.object({
          tagsIds: z
            .array(
              z.object({
                id: z.string(),
              })
            )
            .optional(),
          featuredImage: z.string().url().optional(),
        })
      )
    )
    .mutation(
      async ({
        ctx: { prisma, session },
        input: { title, description, text, tagsIds, html, featuredImage },
      }) => {
        // create a function that checks whether the post with this title exists

        const post = await prisma.post.create({
          data: {
            title,
            description,
            text,
            html,
            slug: slugify(title, { lower: true }),
            author: {
              connect: {
                id: session.user.id,
              },
            },
            tags: {
              connect: tagsIds,
            },
            featuredImage: featuredImage,
          },
          select: {
            id: true,
          },
        });

        return post;
      }
    ),

  editPost: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().optional(),
        description: z.string().optional(),
        html: z.string().optional(),
        tagsIds: z
          .array(
            z.object({
              id: z.string(),
            })
          )
          .optional(),
      })
    )
    .mutation(
      async ({
        ctx: { prisma },
        input: { id, title, description, tagsIds, html },
      }) => {
        const post = await prisma.post.findUnique({ where: { id } });

        if (!post) {
          throw new Error('Post not found');
        }

        // check if slug is already set for the post
        const slug = post.slug || slugify(title);

        const updatedPost = await prisma.post.update({
          where: {
            id,
          },
          data: {
            title,
            description,
            html,
            tags: {
              set: tagsIds,
            },
            slug, // use existing slug or new slug based on title
          },
          select: {
            id: true,
          },
        });

        return updatedPost;
      }
    ),

  createTechPost: protectedProcedure
    .input(
      WriteTechFormSchema.and(
        z.object({
          tagsIds: z
            .array(
              z.object({
                id: z.string(),
              })
            )
            .optional(),
          featuredImage: z.string().url().optional(),
        })
      )
    )
    .mutation(
      async ({
        ctx: { prisma, session },
        input: {
          title,
          techDescription,
          shortDescription,
          text,
          tagsIds,
          html,
          featuredImage,
          docsUrl,
          webUrl,
          githubUrl,
          pricingUrl,
        },
      }) => {
        // create a function that checks whether the post with this title exists

        const post = await prisma.tech.create({
          data: {
            title,
            techDescription,
            shortDescription,
            docsUrl,
            webUrl,
            githubUrl,
            pricingUrl,
            text,
            html,

            slug: slugify(title, { lower: true }),
            author: {
              connect: {
                id: session.user.id,
              },
            },
            tags: {
              connect: tagsIds,
            },
            featuredImage: featuredImage,
          },
          select: {
            id: true,
          },
        });

        return post;
      }
    ),

  editTechpost: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        title: z.string().optional(),
        shortDescription: z.string().optional(),
        techDescription: z.string().optional(),
        docsUrl: z.string().optional(),
        webUrl: z.string().optional(),
        githubUrl: z.string().optional(),
        pricingUrl: z.string().optional(),
        html: z.string().optional(),
        tagsIds: z
          .array(
            z.object({
              id: z.string(),
            })
          )
          .optional(),
      })
    )
    .mutation(
      async ({
        ctx: { prisma },
        input: {
          id,
          title,
          techDescription,
          shortDescription,
          docsUrl,
          webUrl,
          githubUrl,
          pricingUrl,
          tagsIds,
          html,
        },
      }) => {
        const tech = await prisma.tech.findUnique({ where: { id } });

        if (!tech) {
          throw new Error('Post not found');
        }

        // check if slug is already set for the post
        const slug = tech.slug || slugify(title);

        const updatedPost = await prisma.tech.update({
          where: {
            id,
          },
          data: {
            title,
            techDescription,
            shortDescription,
            docsUrl,
            webUrl,
            githubUrl,
            pricingUrl,
            html,
            tags: {
              set: tagsIds,
            },
            slug, // use existing slug or new slug based on title
          },
          select: {
            id: true,
          },
        });

        return updatedPost;
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
        tags: {
          select: {
            name: true,
            id: true,
            slug: true,
          },
        },
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

  getTechPosts: publicProcedure.query(async ({ ctx: { prisma, session } }) => {
    const posts = await prisma.tech.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        slug: true,
        title: true,
        shortDescription: true,
        techDescription: true,
        docsUrl: true,
        webUrl: true,
        githubUrl: true,
        pricingUrl: true,
        createdAt: true,
        html: true,
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
        likes: true, // include likes count
      },
    });
    return posts;
  }),

  getTechPostsByTag: publicProcedure
    .input(
      z.object({
        tag: z.string().optional(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input }) => {
      const { tag } = input;

      const where = tag
        ? {
            tags: {
              some: {
                name: tag,
              },
            },
          }
        : {};

      const posts = await prisma.tech.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          slug: true,
          title: true,
          shortDescription: true,
          techDescription: true,
          docsUrl: true,
          webUrl: true,
          githubUrl: true,
          pricingUrl: true,
          createdAt: true,
          html: true,
          featuredImage: true,
          author: {
            select: {
              name: true,
              image: true,
              username: true,
            },
          },
          tags: {
            select: {
              name: true,
              id: true,
              slug: true,
            },
          },
          likes: true,
        },
        where,
      });
      return posts;
    }),

  getTechPost: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input: { slug } }) => {
      const post = await prisma.tech.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
          shortDescription: true,
          techDescription: true,
          docsUrl: true,
          webUrl: true,
          githubUrl: true,
          pricingUrl: true,
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
        postId: z.string().optional(),
        techId: z.string().optional(),
      })
    )
    .mutation(async ({ ctx: { prisma, session }, input }) => {
      const { postId, techId } = input;
      if (!postId && !techId) {
        throw new Error('Either postId or techId must be provided.');
      }

      const data = {
        userId: session.user.id,
        ...(postId && { postId }),
        ...(techId && { techId }),
      };

      await prisma.like.create({ data });
    }),

  disLikePost: protectedProcedure
    .input(
      z.object({
        postId: z.string().optional(),
        techId: z.string().optional(),
      })
    )
    .mutation(async ({ ctx: { prisma, session }, input }) => {
      const { postId, techId } = input;
      if (!postId && !techId) {
        throw new Error('Either postId or techId must be provided.');
      }

      const where = {
        userId: session.user.id,
        ...(postId && { postId }),
        ...(techId && { techId }),
      };

      await prisma.like.deleteMany({ where });
    }),
  likeComment: protectedProcedure
    .input(
      z.object({
        // Add postId as a required field
        commentId: z.string(),
      })
    )
    .mutation(async ({ ctx: { prisma, session }, input: { commentId } }) => {
      await prisma.like.create({
        data: {
          userId: session.user.id,
          // postId, // Use postId instead of commentId
          commentId,
        },
      });
    }),

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

  bookmarkTech: protectedProcedure
    .input(
      z.object({
        techId: z.string(),
      })
    )

    .mutation(async ({ ctx: { prisma, session }, input: { techId } }) => {
      await prisma.techBookMark.create({
        data: {
          userId: session.user.id,
          techId,
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

  removeBookmarkTech: protectedProcedure
    .input(
      z.object({
        techId: z.string(),
      })
    )
    .mutation(async ({ ctx: { prisma, session }, input: { techId } }) => {
      const bookmark = await prisma.techBookMark.findFirst({
        where: {
          techId: techId,
          userId: session.user.id,
        },
      });

      if (bookmark) {
        await prisma.techBookMark.delete({
          where: {
            id: bookmark.id,
          },
        });
      }
    }),

  submitComment: protectedProcedure
    .input(
      z
        .object({
          text: z.string().min(3),
          postId: z.string().optional(),
          techId: z.string().optional(),
        })
        .refine((input) => input.postId || input.techId, {
          message:
            "Either 'postId' or 'techId' must be provided, but not both.",
        })
    )
    .mutation(
      async ({ ctx: { prisma, session }, input: { text, postId, techId } }) => {
        const data = {
          text,
          user: {
            connect: {
              id: session.user.id,
            },
          },
          ...(postId && { post: { connect: { id: postId } } }),
          ...(techId && { tech: { connect: { id: techId } } }),
        };

        await prisma.comment.create({
          data,
        });
      }
    ),

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
      z
        .object({
          postId: z.string().optional(),
          techId: z.string().optional(),
        })
        .refine((input) => {
          if (!input.postId && !input.techId) {
            throw new Error(
              "Either 'postId' or 'techId' must be provided, but not both."
            );
          }
          return true;
        })
    )
    .query(async ({ ctx: { prisma }, input }) => {
      const { postId, techId } = input;
      const where = postId ? { postId } : techId ? { techId } : undefined;

      const comments = await prisma.comment.findMany({
        where,
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
        imageUrl: z.string(),
        postId: z.string(),
      })
    )
    .mutation(
      async ({ ctx: { prisma, session }, input: { imageUrl, postId } }) => {
        const getModelType = async () => {
          const techData = await prisma.tech.findUnique({
            where: { id: postId },
          });
          const postData = await prisma.post.findUnique({
            where: { id: postId },
          });
          return techData ? 'tech' : postData ? 'post' : null;
        };

        const modelType = await getModelType();

        if (!modelType) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Invalid post ID',
          });
        }

        const modelData = await prisma[modelType].findUnique({
          where: { id: postId },
        });

        if (modelData.authorId !== session.user.id) {
          throw new TRPCError({
            code: 'FORBIDDEN',
            message: 'You are not the owner of this post',
          });
        }

        let publicUrl;

        if (imageUrl.startsWith('data:image')) {
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 800;

          const imageBuffer = Buffer.from(
            imageUrl.replace(/^data:image\/\w+;base64,/, ''),
            'base64'
          );
          const image = sharp(imageBuffer);
          const metadata = await image.metadata();

          const { width, height } = metadata;

          let resizedImage;

          if (width > MAX_WIDTH || height > MAX_HEIGHT) {
            resizedImage = image.resize(MAX_WIDTH, MAX_HEIGHT, {
              fit: 'inside',
            });
          } else {
            resizedImage = image;
          }

          const resizedImageBuffer = await resizedImage.toBuffer();

          const timestamp = Date.now(); // Generate a unique timestamp
          const randomString = Math.random().toString(36).substring(7); // Generate a random string
          const uniqueFilename = `${postId}_${timestamp}_${randomString}.jpeg`;

          const { data, error } = await supabase.storage
            .from('public')
            .upload(`featuredImages/${uniqueFilename}`, resizedImageBuffer, {
              contentType: 'image/jpeg',
              upsert: true,
            });

          if (error) {
            throw new TRPCError({
              code: 'INTERNAL_SERVER_ERROR',
              message: 'Upload failed to Supabase',
            });
          }

          const {
            data: { publicUrl: uploadedUrl },
          } = await supabase.storage.from('public').getPublicUrl(data?.path);

          publicUrl = uploadedUrl;
        } else {
          publicUrl = imageUrl;
        }

        await prisma[modelType].update({
          where: { id: postId },
          data: {
            featuredImage: publicUrl,
          },
        });
      }
    ),

  // updatePostFeaturedImage: protectedProcedure
  //   .input(
  //     z.object({
  //       imageUrl: z.string(),
  //       postId: z.string(),
  //     })
  //   )
  //   .mutation(
  //     async ({ ctx: { prisma, session }, input: { imageUrl, postId } }) => {
  //       const getModelType = async () => {
  //         const techData = await prisma.tech.findUnique({
  //           where: { id: postId },
  //         });
  //         const postData = await prisma.post.findUnique({
  //           where: { id: postId },
  //         });
  //         return techData ? 'tech' : postData ? 'post' : null;
  //       };

  //       const modelType = await getModelType();

  //       if (!modelType) {
  //         throw new TRPCError({
  //           code: 'INVALID_REQUEST',
  //           message: 'Invalid post ID',
  //         });
  //       }

  //       const modelData = await prisma[modelType].findUnique({
  //         where: { id: postId },
  //       });

  //       if (modelData.authorId !== session.user.id) {
  //         throw new TRPCError({
  //           code: 'FORBIDDEN',
  //           message: 'You are not the owner of this post',
  //         });
  //       }

  //       let publicUrl;

  //       if (imageUrl.startsWith('data:image')) {
  //         const MAX_WIDTH = 400;
  //         const MAX_HEIGHT = 500;

  //         const imageBuffer = Buffer.from(
  //           imageUrl.replace(/^data:image\/\w+;base64,/, ''),
  //           'base64'
  //         );
  //         const image = sharp(imageBuffer);
  //         const metadata = await image.metadata();

  //         const { width, height } = metadata;

  //         let resizedImage;

  //         if (width > MAX_WIDTH || height > MAX_HEIGHT) {
  //           resizedImage = image.resize(MAX_WIDTH, MAX_HEIGHT, {
  //             fit: 'inside',
  //           });
  //         } else {
  //           resizedImage = image;
  //         }

  //         const resizedImageBuffer = await resizedImage.toBuffer();

  //         const { data, error } = await supabase.storage
  //           .from('public')
  //           .upload(`featuredImages/${postId}.webp`, resizedImageBuffer, {
  //             contentType: 'image/webp',
  //             upsert: true,
  //           });

  //         if (error) {
  //           throw new TRPCError({
  //             code: 'INTERNAL_SERVER_ERROR',
  //             message: 'Upload failed to Supabase',
  //           });
  //         }

  //         const {
  //           data: { publicUrl: uploadedUrl },
  //         } = await supabase.storage.from('public').getPublicUrl(data?.path);

  //         publicUrl = uploadedUrl;
  //       } else {
  //         publicUrl = imageUrl;
  //       }

  //       await prisma[modelType].update({
  //         where: { id: postId },
  //         data: {
  //           featuredImage: publicUrl,
  //         },
  //       });
  //     }
  //   ),

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

  getTechReadingList: protectedProcedure.query(
    async ({ ctx: { prisma, session } }) => {
      const allTechBookmarks = await prisma.techBookMark.findMany({
        where: {
          userId: session.user.id,
        },
        take: 10,
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          tech: {
            select: {
              id: true,
              title: true,
              featuredImage: true,
              techDescription: true,
              githubUrl: true,
              webUrl: true,
              docsUrl: true,
              pricingUrl: true,
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

      return allTechBookmarks;
    }
  ),
});
