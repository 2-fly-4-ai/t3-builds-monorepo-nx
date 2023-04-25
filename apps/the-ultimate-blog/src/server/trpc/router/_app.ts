import { router } from '../trpc';
import { authRouter } from './auth';
import { postRouter } from './post';
import { userRouter } from './user';
import { tagRouter } from './tag';
import { unsplashRouter } from './unsplash';

export const appRouter = router({
  auth: authRouter,
  post: postRouter,
  user: userRouter,
  tag: tagRouter,
  unsplash: unsplashRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

// This code defines an appRouter using the router function imported from the "../trpc" module, along with two other routers imported from separate files: authRouter and exampleRouter. The appRouter is created by calling the router function with an object containing two properties: example and auth. The value of example is the exampleRouter object, and the value of auth is the authRouter object. This creates a new router object that combines the two routers. Additionally, the code exports a type definition AppRouter that represents the type of the appRouter object. This allows other parts of the code to use the AppRouter type to ensure that they are using the correct type when passing the appRouter around. Overall, this code sets up a single router (appRouter) that includes two other routers (authRouter and exampleRouter) and exports a type definition for the appRouter.
