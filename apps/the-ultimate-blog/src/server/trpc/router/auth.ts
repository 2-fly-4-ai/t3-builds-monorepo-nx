import { router, publicProcedure, protectedProcedure } from "../trpc";

export const authRouter = router({
  getSession: publicProcedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: protectedProcedure.query(() => {
    return "Welcome to the  matrix";
  }),
});

// The code imports a router, a publicProcedure, and a protectedProcedure from a "../trpc" module. It then creates an authRouter using the imported router. The authRouter has two functions: getSession and getSecretMessage.The getSession function is a publicProcedure that returns the session data stored in the context object. The getSecretMessage function is a protectedProcedure that returns the string "Welcome to the matrix".This code can be used to create a router with two procedures, one public and one protected, for an authentication system. The getSession procedure can be used to get the current user's session data, while the getSecretMessage procedure can only be accessed by authenticated users.
