import React from 'react';
import { TechCard, TechCardList } from '@front-end-nx/shared/ui';
import LoadingSpinner from 'libs/shared/ui/src/lib/loading-spinner/loading-spinner';
import TechModal from '../TechModal';
import { useGlobalContextTechModalStore } from '@front-end-nx/shared/ui';
import MainTopTagSearch from '../MainTopTagSearch/MainTopTagSearch';
import { useListStore } from '@front-end-nx/shared/ui';
import MainSectionLayout from '../../layouts/MainSectionLayout';
import { useNavStore } from '@front-end-nx/shared/ui';
import { useSidebarStore } from '@front-end-nx/shared/ui';

export default function MainSection({ getPosts }) {
  const { showSidebar } = useSidebarStore();
  const { showNavSidebar } = useNavStore();
  const { showListView } = useListStore();
  const { togglePosts, posts, resetIsPostModalOpen } =
    useGlobalContextTechModalStore();

  return (
    <main
      className={`${
        showSidebar ? 'col-span-full' : 'col-span-full'
      }   w-full   border  transition-all duration-200 ease-in-out dark:bg-inherit  ${
        showNavSidebar || showSidebar ? 'w-full ' : ' '
      } `}
    >
      <MainTopTagSearch />
      <MainSectionLayout>
        {getPosts.isLoading && <LoadingSpinner />}
        {getPosts.isSuccess &&
          getPosts.data.map((post) => {
            return (
              <div key={post.id} className="h-full ">
                {showListView ? (
                  <TechCardList post={post} />
                ) : (
                  <TechCard post={post} />
                )}
                {posts[post.id] && <TechModal post={post} />}
              </div>
            );
          })}
      </MainSectionLayout>
    </main>
  );
}
