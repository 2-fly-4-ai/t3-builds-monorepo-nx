import React, { useState } from 'react';
import Header from '../../components/Header';
import Head from 'next/head';
import Providers from '../../components/Providers/providers';

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="h-content flex w-full flex-col  font-mono">
      <Head>
        <title>My page title</title>
      </Head>
      <Header />

      {children}
    </div>
  );
}
