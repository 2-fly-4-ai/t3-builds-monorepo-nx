import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { trpc } from '../../utils/trpc';
import MainSection from '../../components/MainSectionProduct';
import SideSection from '../../components/SideSection';
import WriteFormModal from '../../components/WriteformProducts';
import Sidebar from '../../components/SidebarNav/side-bar';
import { useNavStore } from '@front-end-nx/shared/ui';

export default function ProductPage() {
  const getPosts = trpc.post.getProductPosts.useQuery();
  const { showNavSidebar } = useNavStore();
  const readingList = trpc.post.getReadingList.useQuery({
    itemType: 'product',
  });

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
      </section>
    </MainLayout>
  );
}
