import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import WriteFormModalTech from '../../components/WriteformTech';
import MainSection from '../../components/MainSectionTech';
import SideSection from '../../components/SideSectionTech';
import { Metadata } from 'next';
import Sidebar from '../../components/SidebarNav/side-bar';
import { useNavStore } from '@front-end-nx/shared/ui';

export default function techStackPage() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { showNavSidebar, setShowNavSidebar } = useNavStore();

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
            showSidebar={showSidebar}
            toggleSidebar={toggleSidebar}
            showNavSidebar={showNavSidebar}
          />
          {/* This is the sidebar */}

          {/* This is the button to toggle the sidebar */}
        </section>
        <SideSection showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      </section>

      <WriteFormModalTech />
    </MainLayout>
  );
}
