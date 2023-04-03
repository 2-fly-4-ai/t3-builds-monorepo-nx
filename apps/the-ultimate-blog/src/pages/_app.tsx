import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { GlobalContextProvider } from "../context/GlobalContext";
import { Toaster } from "react-hot-toast";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Toaster />
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
