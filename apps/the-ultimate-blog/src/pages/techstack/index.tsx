import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import WriteFormModalTech from '../../components/WriteformTech';
import MainSection from '../../components/MainSectionTech';
import SideSection from '../../components/SideSection';
import Sidebar from '../../components/SidebarNav/side-bar';
import { useNavStore } from '@front-end-nx/shared/ui';
import { trpc } from '../../utils/trpc';

export default function TechStackPage() {
  const { showNavSidebar } = useNavStore();
  const getPosts = trpc.post.getTechPosts.useQuery();
  const readingList = trpc.post.getReadingList.useQuery({
    itemType: 'tech',
  });

  return (
    <MainLayout>
      <section
        className={`${showNavSidebar ? 'col-span-3' : 'col-span-0'} flex `}
      >
        <Sidebar />
        <section className="grid h-full w-full grid-cols-12  ">
          <MainSection getPosts={getPosts} />
        </section>
        <SideSection readingList={readingList} />
      </section>
      <WriteFormModalTech />
    </MainLayout>
  );
}
