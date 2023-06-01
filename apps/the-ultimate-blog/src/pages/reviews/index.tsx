import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import WriteFormModal from '../../components/Writeform';
import { trpc } from '../../utils/trpc';
import MainSection from '../../components/MainSection';
import SideSection from '../../components/SideSection';
import WriteFormModalTech from '../../components/WriteformTech';

import Sidebar from '../../components/SidebarNav/side-bar';
import { useNavStore } from '@front-end-nx/shared/ui';

function ReviewsIndex() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { showNavSidebar, setShowNavSidebar } = useNavStore();

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
            showSidebar={showSidebar}
            toggleSidebar={toggleSidebar}
            showNavSidebar={showNavSidebar}
          />
          {/* This is the sidebar */}

          {/* This is the button to toggle the sidebar */}
        </section>
        <SideSection showSidebar={showSidebar} toggleSidebar={toggleSidebar} />

        <WriteFormModal />
        <WriteFormModalTech />
      </section>
    </MainLayout>
  );
}

export default ReviewsIndex;
