import { AppProps } from 'next/app';
import Head from 'next/head';
import createHeader from '../components/fc/createHeader';
import './../styles/globals.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to daft-fm!</title>
      </Head>

      <Component {...pageProps} header={() => createHeader()} />
    </>
  );
}

export default CustomApp;
