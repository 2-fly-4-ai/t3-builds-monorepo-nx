import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';
import Providers from '../components/Providers/providers';
import RouterProgressBar from 'libs/shared/ui/src/t3-blog/components/RouterProgressBar';
import { useEffect } from 'react';

import { trpc } from '../utils/trpc';

import '../styles/globals.css';
import '../styles/mdx.css';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Toaster />
      <Providers>
        {/* <Head>
          <title>T3 Blog</title>
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
        </Head>
        <RouterProgressBar /> */}
        {/* <GlobalContextProvider> */}
        <Component {...pageProps} />
        {/* </GlobalContextProvider> */}
      </Providers>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
