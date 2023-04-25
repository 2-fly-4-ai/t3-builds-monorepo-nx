import React, { useState } from 'react';
import Header from '../../components/Header';
import Head from 'next/head';
import Providers from '../../components/Providers/providers';

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <Providers>
      <div className="font-mono flex h-content w-full flex-col scroll-smooth">
        {/* <Head>
       
      </Head> */}
        <Header />

        {children}
      </div>
    </Providers>
  );
}
