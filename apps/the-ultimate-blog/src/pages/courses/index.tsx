import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { trpc } from '../../utils/trpc';
import MainSection from '../../components/MainSectionCourse';
import SideSection from '../../components/SideSection';
import WriteFormModal from '../../components/WriteformCourse';
import Sidebar from '../../components/SidebarNav/side-bar';
import { useNavStore } from '@front-end-nx/shared/ui';

export default function CoursePage() {
  const getPosts = trpc.post.getCoursePosts.useQuery();
  const readingList = trpc.post.getReadingList.useQuery({ itemType: 'course' });
  const [showSidebar, setShowSidebar] = useState(false);
  const { showNavSidebar, setShowNavSidebar } = useNavStore();

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

