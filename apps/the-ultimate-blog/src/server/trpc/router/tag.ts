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
});
