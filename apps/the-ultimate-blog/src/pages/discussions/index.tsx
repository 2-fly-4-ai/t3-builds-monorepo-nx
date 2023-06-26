import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import WriteFormModal from '../../components/WriteformDiscuss';
import MainSection from '../../components/MainSectionDiscuss';
import SideSection from '../../components/SideSection';
import { Metadata } from 'next';
import Sidebar from '../../components/SidebarNav/side-bar';
import { useNavStore } from '@front-end-nx/shared/ui';
import { trpc } from '../../utils/trpc';

export default function DiscussPage() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { showNavSidebar, setShowNavSidebar } = useNavStore();
  const getPosts = trpc.post.getLinkPosts.useQuery();
  const readingList = trpc.post.getReadingList.useQuery({
    itemType: 'link',
  });

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <MainLayout>
      <section
        className={`${showNavSidebar ? 'col-span-3' : 'col-span-0'}  flex`}
      >
        <Sidebar />
        <section className="grid h-full w-full grid-cols-12  ">
          {/* This is the main section */}
          <MainSection
            getPosts={getPosts}
            showSidebar={showSidebar}
            toggleSidebar={toggleSidebar}
            showNavSidebar={showNavSidebar}
          />
          {/* This is the sidebar */}

          {/* This is the button to toggle the sidebar */}
        </section>
        <SideSection
          readingList={readingList}
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
        />
      </section>

      <WriteFormModal />
    </MainLayout>
  );
}
