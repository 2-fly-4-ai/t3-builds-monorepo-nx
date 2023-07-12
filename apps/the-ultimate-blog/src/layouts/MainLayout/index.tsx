import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';


export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex min-h-[95vh] w-full flex-col ">
      <Head>
        <title>My page title</title>
      </Head>
      <Header />

      {children}
      {/* <Footer /> */}
    </div>
  );
}
