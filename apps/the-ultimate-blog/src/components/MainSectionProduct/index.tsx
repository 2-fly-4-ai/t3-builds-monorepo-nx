import React from 'react';
import { trpc } from '../../utils/trpc';
import PostCard from 'libs/shared/ui/src/lib/product-card/post-card';
import PostCardList from 'libs/shared/ui/src/lib/product-card/post-card-list';
import LoadingSpinner from 'libs/shared/ui/src/lib/loading-spinner/loading-spinner';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useGlobalContextTechModalStore } from '@front-end-nx/shared/ui';
import PreviewModal from '../PostModal';
import { useListStore } from '@front-end-nx/shared/ui';
import MainTopTagSearch from '../MainTopTagSearch/MainTopTagSearch';
import MainSectionLayout from '../../layouts/MainSectionLayout';
import { useNavStore } from '@front-end-nx/shared/ui';
import { useSidebarStore } from '@front-end-nx/shared/ui';

export default function MainSection({ getPosts }) {
  const { showListView } = useListStore();
  const { showSidebar, setShowSidebar } = useSidebarStore();
  const { showNavSidebar } = useNavStore();

  const [animationSwitch, setAnimationSwitch] = useState(false);
  const { posts } = useGlobalContextTechModalStore();
  const postRoute = trpc.useContext().post;

  const bookmarkPost = trpc.post.bookmarkItem.useMutation({
    onSuccess: () => {
      toast.success('Bookmark Added');
      postRoute.getReadingList.invalidate();
    },
  });

  const removeBookmark = trpc.post.removeBookmark.useMutation({
    onSuccess: () => {
      toast.success('Bookmark Removed');
      postRoute.getReadingList.invalidate();
    },
  });

  return (
    <main
      className={`${
        showSidebar ? 'col-span-12' : 'col-span-12'
      } border-gray bg-gray w-full  border-gray-200  transition-all   duration-500  ease-in-out  dark:bg-inherit  ${
        showNavSidebar || showSidebar ? 'w-full' : ' '
      } `}
    >
      <MainTopTagSearch />
      <MainSectionLayout>
        {getPosts.isLoading && <LoadingSpinner />}
        {getPosts.isSuccess &&
          getPosts.data.map((post) => {
            return (
              <>
                <div key={post.id} className=" h-full">
                  {showListView ? (
                    <PostCardList
                      post={post}
                      bookmarkPost={bookmarkPost}
                      removeBookMark={removeBookmark}
                    />
                  ) : (
                    <PostCard
                      post={post}
                      bookmarkPost={bookmarkPost}
                      removeBookMark={removeBookmark}
                    />
                  )}
                  {posts[post.id] && <PreviewModal post={post} />}
                </div>
              </>
            );
          })}
      </MainSectionLayout>
    </main>
  );
}
