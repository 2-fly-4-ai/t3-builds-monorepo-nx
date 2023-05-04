import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import WriteFormModal from '../components/Writeform';
import { trpc } from '../utils/trpc';
import MainSection from '../components/MainSection';
import SideSection from '../components/SideSection';
import WriteFormModalTech from '../components/WriteformTech';

function HomePage() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <MainLayout>
      <section className="grid h-full w-full grid-cols-12  ">
        {/* This is the main section */}
        <MainSection showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        {/* This is the sidebar */}
        <SideSection showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        {/* This is the button to toggle the sidebar */}
      </section>
      <WriteFormModal />
      <WriteFormModalTech />
    </MainLayout>
  );
}

export default HomePage;
