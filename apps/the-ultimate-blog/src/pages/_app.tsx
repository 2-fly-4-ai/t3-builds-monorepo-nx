import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import Providers from '../components/Providers/providers';

import { trpc } from '../utils/trpc';

import '../styles/globals.css';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Toaster />
      <Providers>
        {/* <GlobalContextProvider> */}
        <Component {...pageProps} />
        {/* </GlobalContextProvider> */}
      </Providers>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
