import React from 'react';
import { useNavStore } from '@front-end-nx/shared/ui';
import { useState } from 'react';
import { useSidebarStore } from '@front-end-nx/shared/ui';
import { useListStore } from '@front-end-nx/shared/ui';

export default function MainSectionLayout({ children }) {
  const { showSidebar, setShowSidebar } = useSidebarStore();
  const { showNavSidebar, setShowNavSidebar } = useNavStore();
  const [animationSwitch, setAnimationSwitch] = useState(false);
  const { showListView, setListView } = useListStore();
  return (
    <div
      className={`
${animationSwitch ? 'custom-animation-switch' : ''}
mx-auto my-8 grid   ${
        showListView ? '' : 'w-full'
      } overflow-none gap-8   px-6 2xl:px-10
${
  showListView
    ? 'grid-cols-1 2xl:grid-cols-1'
    : showNavSidebar && showSidebar
    ? '2xl:grid-cols-3'
    : showNavSidebar || showSidebar
    ? 'xl:grid-cols-2 2xl:grid-cols-4'
    : 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'
}
gap-4
${
  showListView
    ? '2xl:grid-cols-1'
    : showNavSidebar || showSidebar
    ? 'shrink-0 grid-cols-2  gap-4 xl:grid-cols-2 2xl:grid-cols-3'
    : 'xl:grid-cols-3 2xl:grid-cols-5'
}
`}
    >
      {children}
    </div>
  );
}
