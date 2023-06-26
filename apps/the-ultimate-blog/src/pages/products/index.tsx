import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { trpc } from '../../utils/trpc';
import MainSection from '../../components/MainSectionProduct';
import SideSection from '../../components/SideSection';
import WriteFormModal from '../../components/WriteformProducts';

import Sidebar from '../../components/SidebarNav/side-bar';
import { useNavStore } from '@front-end-nx/shared/ui';

function CoursesIndex() {
  const getPosts = trpc.post.getProductPosts.useQuery();
  const [showSidebar, setShowSidebar] = useState(false);
  const { showNavSidebar, setShowNavSidebar } = useNavStore();
  const readingList = trpc.post.getReadingList.useQuery({
    itemType: 'product',
  });
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleSideNavbar = () => {
    setShowNavSidebar(!showNavSidebar);
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

        <WriteFormModal />
      </section>
    </MainLayout>
  );
}

export default CoursesIndex;
