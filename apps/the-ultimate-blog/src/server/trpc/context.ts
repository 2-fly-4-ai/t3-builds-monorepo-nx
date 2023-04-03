import { type inferAsyncReturnType } from "@trpc/server";
import { type CreateNextContextOptions } from "@trpc/server/adapters/next";
import { type Session } from "next-auth";

import { getServerAuthSession } from "../common/get-server-auth-session";
import { prisma } from "../db/client";

type CreateContextOptions = {
  session: Session | null;
};

/** Use this helper for:
 * - testing, so we dont have to mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 * @see https://create.t3.gg/en/usage/trpc#-servertrpccontextts
 **/
export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma,
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  // Get the session from the server using the unstable_getServerSession wrapper function
  const session = await getServerAuthSession({ req, res });

  return await createContextInner({
    session,
  });
};

export type Context = inferAsyncReturnType<typeof createContext>;

// This code imports several types and functions from various libraries, including inferAsyncReturnType from the @trpc/server library, CreateNextContextOptions from @trpc/server/adapters/next, and Session from the next-auth library. The code defines two functions, createContextInner and createContext, both of which take options objects as input. The createContextInner function creates a context object with a session property that contains the session data passed in the input options, as well as a prisma property that is set to the prisma client imported from ../db/client.

//The createContext function calls the getServerAuthSession function, which retrieves the session data from the server using the input req and res objects. The createContext function then calls createContextInner with the retrieved session data, returning the resulting context object.Lastly, the code exports a type definition Context that is inferred from the return type of the createContext function using the inferAsyncReturnType helper function. This Context type represents the shape of the context object that will be used in a router, as defined by the createContext function.
