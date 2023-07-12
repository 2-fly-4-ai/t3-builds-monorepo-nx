import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import WriteFormModal from '../../components/Writeform';
import { trpc } from '../../utils/trpc';
import MainSection from '../../components/MainSectionPost';
import SideSection from '../../components/SideSection';
import WriteFormModalTech from '../../components/WriteformTech';
import Sidebar from '../../components/SidebarNav/side-bar';
import { useNavStore } from '@front-end-nx/shared/ui';

export default function ProductPage() {
  const { showNavSidebar } = useNavStore();
  const readingList = trpc.post.getReadingList.useQuery({
    itemType: 'product',
  });
  const getPosts = trpc.post.getPosts.useQuery();

  return (
    <MainLayout>
      <section
        className={`${showNavSidebar ? 'col-span-3' : 'col-span-0'}  flex`}
      >
        <Sidebar />
        <section className="grid h-full w-full grid-cols-12  ">
          <MainSection getPosts={getPosts} />
        </section>
        <SideSection readingList={readingList} />
        <WriteFormModal />
        <WriteFormModalTech />
      </section>
    </MainLayout>
  );
}


