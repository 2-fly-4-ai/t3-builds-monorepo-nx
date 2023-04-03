import { router, protectedProcedure, publicProcedure } from '../trpc';
import { WriteFormSchema } from '../../../components/Writeform';
import slugify from 'slugify';
import { z } from 'zod';

export const postRouter = router({
  //   getSession: publicProcedure.query(({ ctx }) => {
  //     return ctx.session;
  //   }),
  createPost: protectedProcedure
    .input(WriteFormSchema)
    .mutation(
      async ({
        ctx: { prisma, session },
        input: { title, description, text, html },
      }) => {
        //create a function that checks whether the post with this tile exists

        await prisma.post.create({
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
          },
        });
      }
    ),

  getPosts: publicProcedure.query(async ({ ctx: { prisma } }) => {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        author: {
          select: {
            name: true,
            image: true,
          },
        },
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
});
