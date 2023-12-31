import { router, protectedProcedure, publicProcedure } from '../trpc';
import { TRPCError } from '@trpc/server';
import { WriteFormSchema } from '../../../components/Writeform';
import { WriteFormSchemaLink } from 'apps/the-ultimate-blog/src/components/WriteformDiscuss';
import { WriteTechFormSchema } from 'apps/the-ultimate-blog/src/components/WriteformTech';
import slugify from 'slugify';
import { createClient } from '@supabase/supabase-js';
import { env } from '../../../env/server.mjs';
const supabase = createClient(env.SUPABASE_PUBLIC_URL, env.SUPABASE_SECRET_KEY);
import { commentFormSchema } from 'apps/the-ultimate-blog/src/components/CommentSidebar';
import { z } from 'zod';
const sharp = require('sharp');

export const postRouter = router({
  // Posts

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
        input: { title, description, tagsIds, html, featuredImage },
      }) => {
        // create a function that checks whether the post with this title exists

        const post = await prisma.post.create({
          data: {
            title,
            description,
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

          html: true,
          tags: true,
          createdAt: true,
          authorId: true,
          author: {
            select: {
              name: true,
              image: true,
              username: true,
            },
          },
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

  getPostsWithTag: publicProcedure
    .input(
      z.object({
        tags: z.array(z.string()).optional(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input }) => {
      const { tags } = input;

      const where = tags
        ? {
            tags: {
              some: {
                name: {
                  in: tags,
                },
              },
            },
          }
        : {};

      const posts = await prisma.post.findMany({
        orderBy: [
          {
            likes: {
              _count: 'desc', // use _count to order by the number of likes
            },
          },
        ],
        take: 20,
        select: {
          id: true,
          slug: true,
          title: true,
          description: true,
          createdAt: true,
          featuredImage: true,
          likes: true,
        },
        where,
      });

      return posts;
    }),

  //

  //Course Posts

  createCoursePost: protectedProcedure
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
        input: { title, description, tagsIds, html, featuredImage },
      }) => {
        // create a function that checks whether the post with this title exists

        const post = await prisma.course.create({
          data: {
            title,
            description,
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

  editCoursePost: protectedProcedure
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
        const post = await prisma.course.findUnique({ where: { id } });

        if (!post) {
          throw new Error('Post not found');
        }

        // check if slug is already set for the post
        const slug = post.slug || slugify(title);

        const updatedPost = await prisma.course.update({
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

  getCoursePosts: publicProcedure.query(
    async ({ ctx: { prisma, session } }) => {
      const posts = await prisma.course.findMany({
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
    }
  ),

  getCoursePost: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input: { slug } }) => {
      const post = await prisma.course.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
          description: true,
          title: true,

          html: true,
          tags: true,
          createdAt: true,
          authorId: true,
          author: {
            select: {
              name: true,
              image: true,
              username: true,
            },
          },
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

  getCoursePostsWithTag: publicProcedure
    .input(
      z.object({
        tags: z.array(z.string()).optional(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input }) => {
      const { tags } = input;

      const where = tags
        ? {
            tags: {
              some: {
                name: {
                  in: tags,
                },
              },
            },
          }
        : {};

      const posts = await prisma.course.findMany({
        orderBy: [
          {
            likes: {
              _count: 'desc', // use _count to order by the number of likes
            },
          },
        ],
        take: 20,
        select: {
          id: true,
          slug: true,
          title: true,
          description: true,
          createdAt: true,
          featuredImage: true,
          likes: true,
        },
        where,
      });

      return posts;
    }),

  //Tech Posts

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
          description,
          shortDescription,
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
            description,
            shortDescription,
            docsUrl,
            webUrl,
            githubUrl,
            pricingUrl,

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
        description: z.string().optional(),
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
          description,
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
            description,
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
        description: true,
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
          description: true,
          docsUrl: true,
          webUrl: true,
          githubUrl: true,
          pricingUrl: true,
          title: true,
          tags: true,
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

  getTechPostsByTag: publicProcedure
    .input(
      z.object({
        tags: z.array(z.string()).optional(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input }) => {
      const { tags } = input;

      const where = tags
        ? {
            tags: {
              some: {
                name: {
                  in: tags,
                },
              },
            },
          }
        : {};

      const posts = await prisma.tech.findMany({
        orderBy: [
          {
            likes: {
              _count: 'desc', // use _count to order by the number of likes
            },
          },
        ],
        take: 20,
        select: {
          id: true,
          slug: true,
          title: true,
          description: true,
          createdAt: true,
          featuredImage: true,
          likes: true,
        },
        where,
      });

      return posts;
    }),

  //Product Posts
  createProductPost: protectedProcedure
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
        input: { title, description, tagsIds, html, featuredImage },
      }) => {
        // create a function that checks whether the post with this title exists

        const post = await prisma.product.create({
          data: {
            title,
            description,
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

  editProductPost: protectedProcedure
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
        const post = await prisma.product.findUnique({ where: { id } });

        if (!post) {
          throw new Error('Post not found');
        }

        // check if slug is already set for the post
        const slug = post.slug || slugify(title);

        const updatedPost = await prisma.course.update({
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

  getProductPosts: publicProcedure.query(
    async ({ ctx: { prisma, session } }) => {
      const posts = await prisma.product.findMany({
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
    }
  ),

  getProductPost: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input: { slug } }) => {
      const post = await prisma.product.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
          description: true,
          title: true,

          html: true,
          tags: true,
          createdAt: true,
          authorId: true,
          author: {
            select: {
              name: true,
              image: true,
              username: true,
            },
          },
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

  getProductPostsWithTag: publicProcedure
    .input(
      z.object({
        tags: z.array(z.string()).optional(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input }) => {
      const { tags } = input;

      const where = tags
        ? {
            tags: {
              some: {
                name: {
                  in: tags,
                },
              },
            },
          }
        : {};

      const posts = await prisma.product.findMany({
        orderBy: [
          {
            likes: {
              _count: 'desc', // use _count to order by the number of likes
            },
          },
        ],
        take: 20,
        select: {
          id: true,
          slug: true,
          title: true,
          description: true,
          createdAt: true,
          featuredImage: true,
          likes: true,
        },
        where,
      });

      return posts;
    }),

  //Dicuss Posts

  createLinkPost: protectedProcedure
    .input(
      WriteFormSchemaLink.and(
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
        input: { title, description, tagsIds, link, featuredImage },
      }) => {
        // create a function that checks whether the post with this title exists

        const post = await prisma.link.create({
          data: {
            title,
            description,
            link,
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

  editLinkPost: protectedProcedure
    .input(
      WriteFormSchemaLink.and(
        z.object({
          id: z.string(),
          title: z.string().optional(),
          description: z.string().optional(),
          link: z.string().optional(),
          tagsIds: z
            .array(
              z.object({
                id: z.string(),
              })
            )
            .optional(),
        })
      )
    )
    .mutation(
      async ({
        ctx: { prisma },
        input: { id, title, description, tagsIds, link },
      }) => {
        const post = await prisma.link.findUnique({ where: { id } });

        if (!post) {
          throw new Error('Post not found');
        }

        // check if slug is already set for the post
        const slug = post.slug || slugify(title);

        const updatedPost = await prisma.link.update({
          where: {
            id,
          },
          data: {
            title,
            description,
            link,
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

  getLinkPosts: publicProcedure.query(async ({ ctx: { prisma, session } }) => {
    const posts = await prisma.link.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        slug: true,
        title: true,
        description: true,
        createdAt: true,
        link: true,
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

  getLinkPost: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input: { slug } }) => {
      const post = await prisma.link.findUnique({
        where: {
          slug,
        },
        select: {
          id: true,
          description: true,
          title: true,
          link: true,
          tags: true,
          createdAt: true,
          authorId: true,
          author: {
            select: {
              name: true,
              image: true,
              username: true,
            },
          },
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

  getLinkPostsWithTag: publicProcedure
    .input(
      z.object({
        tags: z.array(z.string()).optional(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input }) => {
      const { tags } = input;

      const where = tags
        ? {
            tags: {
              some: {
                name: {
                  in: tags,
                },
              },
            },
          }
        : {};

      const posts = await prisma.link.findMany({
        orderBy: [
          {
            likes: {
              _count: 'desc', // use _count to order by the number of likes
            },
          },
        ],
        take: 20,
        select: {
          id: true,
          slug: true,
          title: true,
          description: true,
          createdAt: true,
          featuredImage: true,
          likes: true,
        },
        where,
      });

      return posts;
    }),

  //Globals

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

  bookmarkItem: protectedProcedure
    .input(
      z.object({
        itemId: z.string(),
        itemType: z
          .string()
          .refine(
            (value) =>
              ['post', 'tech', 'course', 'product', 'discussion'].includes(
                value
              ),
            {
              message:
                "Item type must be either 'post', 'tech', or 'course', or 'discussion",
            }
          ),
      })
    )
    .mutation(
      async ({ ctx: { prisma, session }, input: { itemId, itemType } }) => {
        switch (itemType) {
          case 'post':
            await prisma.postBookMark.create({
              data: {
                userId: session.user.id,
                postId: itemId,
              },
            });
            break;
          case 'tech':
            await prisma.techBookMark.create({
              data: {
                userId: session.user.id,
                techId: itemId,
              },
            });
            break;
          case 'course':
            await prisma.courseBookMark.create({
              data: {
                userId: session.user.id,
                courseId: itemId,
              },
            });
            break;
          case 'product':
            await prisma.productBookMark.create({
              data: {
                userId: session.user.id,
                productId: itemId,
              },
            });
            break;
          case 'discussion':
            await prisma.linkBookMark.create({
              data: {
                linkId: itemId,
                userId: session.user.id,
              },
            });
            break;
          default:
            throw new Error('Invalid item type');
        }
      }
    ),

  removeBookmark: protectedProcedure
    .input(
      z.object({
        itemId: z.string(),
        itemType: z
          .string()
          .refine(
            (value) =>
              ['post', 'tech', 'course', 'product', 'discussion'].includes(
                value
              ),
            {
              message:
                "Item type must be either 'post', 'tech', or 'course', or 'discussion'",
            }
          ),
      })
    )
    .mutation(
      async ({ ctx: { prisma, session }, input: { itemId, itemType } }) => {
        switch (itemType) {
          case 'post':
            await prisma.postBookMark.delete({
              where: {
                userId_postId: {
                  postId: itemId,
                  userId: session.user.id,
                },
              },
            });
            break;
          case 'tech':
            await prisma.techBookMark.delete({
              where: {
                userId_techId: {
                  techId: itemId,
                  userId: session.user.id,
                },
              },
            });
            break;
          case 'course':
            await prisma.courseBookMark.delete({
              where: {
                userId_courseId: {
                  courseId: itemId,
                  userId: session.user.id,
                },
              },
            });
            break;
          case 'product':
            await prisma.productBookMark.delete({
              where: {
                userId_productId: {
                  productId: itemId,
                  userId: session.user.id,
                },
              },
            });
            break;
          case 'discussion':
            await prisma.linkBookMark.delete({
              where: {
                userId_linkId: {
                  linkId: itemId,
                  userId: session.user.id,
                },
              },
            });
            break;
          default:
            throw new Error('Invalid item type');
        }
      }
    ),

  //   .input(
  //     z.object({
  //       postId: z.string(),
  //     })
  //   )

  //   .mutation(async ({ ctx: { prisma, session }, input: { postId } }) => {
  //     await prisma.bookMark.create({
  //       data: {
  //         userId: session.user.id,
  //         postId,
  //       },
  //     });
  //   }),

  // bookmarkTech: protectedProcedure
  //   .input(
  //     z.object({
  //       techId: z.string(),
  //     })
  //   )

  //   .mutation(async ({ ctx: { prisma, session }, input: { techId } }) => {
  //     await prisma.techBookMark.create({
  //       data: {
  //         userId: session.user.id,
  //         techId,
  //       },
  //     });
  //   }),

  // bookmarkCourse: protectedProcedure
  //   .input(
  //     z.object({
  //       courseId: z.string(),
  //     })
  //   )

  //   .mutation(async ({ ctx: { prisma, session }, input: { courseId } }) => {
  //     await prisma.courseBookMark.create({
  //       data: {
  //         userId: session.user.id,
  //         courseId,
  //       },
  //     });
  //   }),

  // removeBookmark: protectedProcedure
  //   .input(
  //     z.object({
  //       postId: z.string(),
  //     })
  //   )
  //   .mutation(async ({ ctx: { prisma, session }, input: { postId } }) => {
  //     await prisma.bookMark.delete({
  //       where: {
  //         userId_postId: {
  //           postId: postId,
  //           userId: session.user.id,
  //         },
  //       },
  //     });
  //   }),

  // removeBookmarkCourse: protectedProcedure
  //   .input(
  //     z.object({
  //       courseId: z.string(),
  //     })
  //   )
  //   .mutation(async ({ ctx: { prisma, session }, input: { courseId } }) => {
  //     await prisma.courseBookMark.delete({
  //       where: {
  //         userId_courseId: {
  //           courseId: courseId,
  //           userId: session.user.id,
  //         },
  //       },
  //     });
  //   }),

  // removeBookmarkTech: protectedProcedure
  //   .input(
  //     z.object({
  //       techId: z.string(),
  //     })
  //   )
  //   .mutation(async ({ ctx: { prisma, session }, input: { techId } }) => {
  //     const bookmark = await prisma.techBookMark.findFirst({
  //       where: {
  //         techId: techId,
  //         userId: session.user.id,
  //       },
  //     });

  //     if (bookmark) {
  //       await prisma.techBookMark.delete({
  //         where: {
  //           id: bookmark.id,
  //         },
  //       });
  //     }
  //   }),

  submitComment: protectedProcedure
    .input(
      z
        .object({
          text: z.string().min(3),
          postId: z.string().optional(),
          techId: z.string().optional(),
          courseId: z.string().optional(),
          linkId: z.string().optional(), // 1. Add linkId as optional input
        })
        .refine(
          (input) => {
            const { postId, techId, courseId, linkId } = input;
            return (
              (postId && !techId && !courseId && !linkId) ||
              (!postId && techId && !courseId && !linkId) ||
              (!postId && !techId && courseId && !linkId) ||
              (!postId && !techId && !courseId && linkId) // 2. Update the refinement logic
            );
          },
          {
            message:
              "Only one out of 'postId', 'techId', 'courseId', or 'linkId' must be provided.",
          }
        )
    )
    .mutation(
      async ({
        ctx: { prisma, session },
        input: { text, postId, techId, courseId, linkId }, // Add linkId
      }) => {
        const data = {
          text,
          user: {
            connect: {
              id: session.user.id,
            },
          },
          ...(postId && { post: { connect: { id: postId } } }),
          ...(techId && { tech: { connect: { id: techId } } }),
          ...(courseId && { course: { connect: { id: courseId } } }),
          ...(linkId && { link: { connect: { id: linkId } } }), // 3. Update mutation for linkId
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
          courseId: z.string().optional(),
          linkId: z.string().optional(),
        })
        .refine((input) => {
          const { postId, techId, courseId, linkId } = input;
          const count = [postId, techId, courseId, linkId].filter(
            Boolean
          ).length;

          if (count !== 1) {
            throw new Error(
              "Only one of 'postId', 'techId', 'courseId', or 'linkId' must be provided."
            );
          }

          return true;
        })
    )
    .query(async ({ ctx: { prisma }, input }) => {
      const { postId, techId, courseId, linkId } = input;

      let where;

      if (postId) where = { postId };
      else if (techId) where = { techId };
      else if (courseId) where = { courseId };
      else if (linkId) where = { linkId };

      const comments = await prisma.comment.findMany({
        where,
        select: {
          text: true,
          userId: true,
          postId: true,
          techId: true, // Added for completeness
          courseId: true, // Added for completeness
          linkId: true, // Added for completeness
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

  uploadImage: protectedProcedure
    .input(
      z.object({
        file: z.string(), // The file is a base64 string
      })
    )
    .mutation(async ({ input: { file } }) => {
      // Check if supabase is ready
      if (!supabase) {
        throw new Error('Supabase is not ready.');
      }

      if (file.startsWith('data:image')) {
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;

        const imageBuffer = Buffer.from(
          file.replace(/^data:image\/\w+;base64,/, ''),
          'base64'
        );
        const image = sharp(imageBuffer);
        const metadata = await image.metadata();

        const { width, height } = metadata;

        let resizedImage = image;

        if (width > MAX_WIDTH || height > MAX_HEIGHT) {
          resizedImage = image.resize(MAX_WIDTH, MAX_HEIGHT, {
            fit: 'inside',
          });
        }

        resizedImage = resizedImage.jpeg({
          quality: 80,
          progressive: true,
          strip: true,
        }); // Optimize for JPEG with quality, progressive rendering, and strip metadata

        const resizedImageBuffer = await resizedImage.toBuffer();

        const timestamp = Date.now(); // Generate a unique timestamp
        const randomString = Math.random().toString(36).substring(7); // Generate a random string
        const uniqueFilename = `postImages_${timestamp}_${randomString}.jpeg`;

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
            data: { error },
          });
        }

        const {
          data: { publicUrl },
        } = await supabase.storage.from('public').getPublicUrl(data?.path);

        return publicUrl;
      }
    }),

  updatePostFeaturedImage: protectedProcedure
    .input(
      z.object({
        imageUrl: z.string(),
        postId: z.string(),
        itemType: z
          .string()
          .refine(
            (value) =>
              ['post', 'tech', 'course', 'product', 'discussion'].includes(
                value
              ),
            {
              message:
                "Item type must be either 'post', 'tech', or 'course', or 'discussion',or 'product'",
            }
          ),
      })
    )
    .mutation(
      async ({
        ctx: { prisma, session },
        input: { imageUrl, postId, itemType },
      }) => {
        const modelData = await prisma[itemType].findUnique({
          where: { id: postId },
        });

        if (!modelData) {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Invalid post ID',
          });
        }

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

        await prisma[itemType].update({
          where: { id: postId },
          data: {
            featuredImage: publicUrl,
          },
        });
      }
    ),

  getReadingList: protectedProcedure
    .input(
      z.object({
        itemType: z
          .string()
          .refine(
            (value) =>
              ['post', 'tech', 'course', 'product', 'link'].includes(value),
            {
              message:
                "Item type must be either 'post', 'tech', 'course', or 'product', or 'link'",
            }
          )
          .optional(),
      })
    )
    .query(async ({ ctx: { prisma, session }, input }) => {
      const { itemType } = input ?? {};

      const itemTypes = ['post', 'tech', 'course', 'product', 'link'];

      if (!itemTypes.includes(itemType)) {
        throw new Error('Invalid item type provided.');
      }

      const bookmarkType =
        itemType.charAt(0).toUpperCase() + itemType.slice(1) + 'BookMark';

      const results = await prisma[bookmarkType].findMany({
        where: {
          userId: session.user.id,
        },
        take: 10,
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          [itemType + 'Id']: true,
          [itemType]: {
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

      const allBookmarks = results.map((result) => {
        return {
          id: result.id,
          postId: result[itemType + 'Id'],
          post: result[itemType],
        };
      });

      return allBookmarks;
    }),
});
