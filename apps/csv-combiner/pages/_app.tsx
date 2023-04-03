import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to csv-combiner!</title>
      </Head>
      <main className="app theme-forest">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
