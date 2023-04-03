import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";

import { type Context } from "./context";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const router = t.router;

/**
 * Unprotected procedure
 **/
export const publicProcedure = t.procedure;

/**
 * Reusable middleware to ensure
 * users are logged in
 */
const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session || !ctx.session.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: {
      // infers the `session` as non-nullable
      session: { ...ctx.session, user: ctx.session.user },
    },
  });
});

/**
 * Protected procedure
 **/
export const protectedProcedure = t.procedure.use(isAuthed);

//This code imports various functions and libraries, including initTRPC and TRPCError from @trpc/server, and superjson.The code defines a TRPC instance using initTRPC.context<Context>().create(). The Context type is imported from the ./context file. This instance is configured with superjson as the data transformer and a custom error formatter that simply returns the error object's shape property. The code exports three objects: 1.router which is the router object from the TRPC instance. 2.publicProcedure which is an unprotected procedure. 3.protectedProcedure which is a protected procedure that uses the isAuthed middleware.
