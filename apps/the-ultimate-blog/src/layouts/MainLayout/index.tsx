import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';
import Providers from '../../components/Providers/providers';

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex w-full flex-col  ">
      <Head>
        <title>My page title</title>
      </Head>
      <Header />

      {children}
      <Footer />
    </div>
  );
}
