import { router, protectedProcedure, publicProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { WriteFormSchema } from '../../../components/Writeform';
import { WriteTechFormSchema } from 'apps/the-ultimate-blog/src/components/WriteformTech';
import slugify from 'slugify';
import { z } from 'zod';
import { commentFormSchema } from 'apps/the-ultimate-blog/src/components/CommentSidebar';

export const postRouter = router({
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
            slug: slugify(title),
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

            slug: slugify(title),
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
        imageUrl: z.string(),
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
