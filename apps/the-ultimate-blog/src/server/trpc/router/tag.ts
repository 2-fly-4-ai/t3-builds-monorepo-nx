import { TRPCError } from '@trpc/server';
import slugify from 'slugify';
import { z } from 'zod';
import { tagCreateSchema } from '../../../components/TagForm';

import { protectedProcedure, router } from '../trpc';

export const tagRouter = router({
  createTag: protectedProcedure
    .input(tagCreateSchema)
    .mutation(async ({ ctx: { prisma }, input }) => {
      const tag = await prisma.tag.findUnique({
        where: {
          name: input.name,
        },
      });

      if (tag) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'tag already exists!',
        });
      }

      await prisma.tag.create({
        data: {
          ...input,
          slug: slugify(input.name),
        },
      });
    }),

  getTags: protectedProcedure.query(async ({ ctx: { prisma } }) => {
    return await prisma.tag.findMany();
  }),

  createTechTag: protectedProcedure
    .input(tagCreateSchema)
    .mutation(async ({ ctx: { prisma }, input }) => {
      const tag = await prisma.techTag.findUnique({
        where: {
          name: input.name,
        },
      });

      if (tag) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'tag already exists!',
        });
      }

      await prisma.techTag.create({
        data: {
          ...input,
          slug: slugify(input.name),
        },
      });
    }),

  getTechTags: protectedProcedure.query(async ({ ctx: { prisma } }) => {
    return await prisma.techTag.findMany();
  }),

  createCourseTag: protectedProcedure
    .input(tagCreateSchema)
    .mutation(async ({ ctx: { prisma }, input }) => {
      const tag = await prisma.courseTag.findUnique({
        where: {
          name: input.name,
        },
      });

      if (tag) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'tag already exists!',
        });
      }

      await prisma.courseTag.create({
        data: {
          ...input,
          slug: slugify(input.name),
        },
      });
    }),

  getCourseTags: protectedProcedure.query(async ({ ctx: { prisma } }) => {
    return await prisma.courseTag.findMany();
  }),

  createProductTag: protectedProcedure
    .input(tagCreateSchema)
    .mutation(async ({ ctx: { prisma }, input }) => {
      const tag = await prisma.productTag.findUnique({
        where: {
          name: input.name,
        },
      });

      if (tag) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'tag already exists!',
        });
      }

      await prisma.productTag.create({
        data: {
          ...input,
          slug: slugify(input.name),
        },
      });
    }),

  getProductTags: protectedProcedure.query(async ({ ctx: { prisma } }) => {
    return await prisma.productTag.findMany();
  }),

  createLinkTag: protectedProcedure
    .input(tagCreateSchema)
    .mutation(async ({ ctx: { prisma }, input }) => {
      const tag = await prisma.linkTag.findUnique({
        where: {
          name: input.name,
        },
      });

      if (tag) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'tag already exists!',
        });
      }

      await prisma.linkTag.create({
        data: {
          ...input,
          slug: slugify(input.name),
        },
      });
    }),

  getLinkTags: protectedProcedure.query(async ({ ctx: { prisma } }) => {
    return await prisma.linkTag.findMany();
  }),
});
