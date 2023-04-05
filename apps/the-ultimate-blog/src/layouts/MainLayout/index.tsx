import React, { useState } from 'react';
import Header from '../../components/Header';

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-content w-full flex-col">
      <Header />
      {children}
    </div>
  );
}
