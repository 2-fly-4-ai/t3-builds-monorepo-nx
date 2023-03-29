import { AppProps } from 'next/app';
import Head from 'next/head';
import './../styles/globals.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to daft-fm!</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
