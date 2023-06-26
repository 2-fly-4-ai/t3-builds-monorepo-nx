import React from 'react';
import { trpc } from '../../utils/trpc';
import { AiOutlineSearch } from '../../icons';
import { BsChevronDown } from '../../icons';
import { ImSpinner8 } from '../../icons';
import { TechCard, TechCardList } from '@front-end-nx/shared/ui';
import PostCardList from 'libs/shared/ui/src/lib/post-card/post-card-list';
import LoadingSpinner from 'libs/shared/ui/src/lib/loading-spinner/loading-spinner';
import { RouterOutputs } from '../../utils/trpc';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import TechModal from '../TechModal';
import { useGlobalContextTechModalStore } from '@front-end-nx/shared/ui';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function MainSection({
  showNavSidebar,
  showSidebar,
  toggleSidebar,
}) {
  const [animationSwitch, setAnimationSwitch] = useState(false);

  const getPosts = trpc.post.getTechPosts.useQuery();
  const [showListView, setListView] = useState(false);
  const handleListViewToggle = () => setListView((prev) => !prev);
  const { togglePosts, posts, resetIsPostModalOpen } =
    useGlobalContextTechModalStore();
  const router = useRouter();

  useEffect(() => {
    setAnimationSwitch(true);

    const timer = setTimeout(() => {
      setAnimationSwitch(false);
    }, 1500); // Adjust the delay duration (in milliseconds) as needed

    // No clearTimeout call in the cleanup function
  }, [showListView, showNavSidebar, showSidebar]);

  const [shouldReload, setShouldReload] = useState(false);

  return (
    <main
      className={`${
        showSidebar ? 'col-span-12' : 'col-span-12'
      }  min-h-screen w-full    bg-gray-200  transition-all duration-500 ease-in-out dark:bg-inherit  ${
        showNavSidebar || showSidebar ? ' ' : ' '
      } `}
    >
      <div className=" mb-4 flex flex-col items-center border-b-2 border-gray-300 bg-gray-200 px-6 py-4 dark:bg-inherit 2xl:px-10">
        <div className="flex w-full items-center justify-between space-x-4   py-2 ">
          <label
            htmlFor="search"
            className="group flex w-96 items-center justify-center rounded-full border-2 border-gray-400 bg-white p-1  px-2 font-medium dark:bg-black  "
          >
            <AiOutlineSearch />
            <input
              type="text"
              name="search"
              id="search"
              className="w-full px-2 outline-none dark:bg-black"
              placeholder="Search...."
            />
          </label>
          <div className="ml-auto flex gap-2 ">
            <div className="mx-2 my-auto text-lg font-bold">Topics:</div>
            <div>
              <ul className=" flex items-center justify-center space-x-2 text-sm">
                {Array.from({ length: 4 }).map((_, i) => (
                  <button
                    key={i}
                    className="flex cursor-pointer items-center space-x-2  rounded-md  border-2 border-gray-400 bg-white p-2 px-3 py-1  font-medium shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 hover:border-gray-500  hover:shadow-gray-500 dark:bg-opacity-10 dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60"
                  >
                    Design
                  </button>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between py-2">
          <div className="flex items-center gap-2 rounded-lg border-2 border-white bg-gray-400  px-4 py-1 pb-1.5 text-xl font-bold text-white backdrop-blur">
            Resources{' '}
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              className="mt-1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
          <div className="flex gap-2">
            <button className="flex cursor-pointer items-center space-x-2  rounded-md  border-2 border-gray-400 bg-white p-2 px-3 py-1  font-medium shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 hover:border-gray-500  hover:shadow-gray-500 dark:bg-opacity-10 dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60">
              <div className="text-sm font-semibold ">Following</div>
              <div>
                <BsChevronDown />
              </div>
            </button>

            {!showSidebar ? (
              <button
                className="flex min-w-[32px]  cursor-pointer items-center space-x-2  rounded-md  border-gray-400 bg-white p-2 px-3 py-1  font-medium   hover:border-gray-500  hover:shadow-gray-500 dark:bg-opacity-10 dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60"
                onClick={toggleSidebar}
              >
                {showSidebar ? '-' : '+'}
              </button>
            ) : (
              <button
                className="flex min-w-[36px] cursor-pointer items-center justify-center space-x-2  rounded-md  border-gray-400 bg-white p-2 px-3 py-1  font-medium   hover:border-gray-500  hover:shadow-gray-500 dark:bg-opacity-10 dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60"
                onClick={toggleSidebar}
              >
                {showSidebar ? '-' : '+'}
              </button>
            )}
            <div className="flex flex-shrink-0 justify-center gap-2 px-1">
              {!showListView ? (
                <button onClick={() => setListView(true)}>
                  {/* I need this button to set List view true when clicked */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              ) : (
                <button onClick={() => setListView(false)}>
                  {/* I need this button to set List view false when clicked */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 20 20"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`
    ${animationSwitch ? 'custom-animation-switch' : ''}
    mx-auto my-8 grid  ${showListView ? '' : 'w-max'} gap-6 px-6 2xl:px-10
    ${
      showListView
        ? 'grid-cols-1 2xl:grid-cols-1'
        : showNavSidebar && showSidebar
        ? '2xl:grid-cols-3'
        : showNavSidebar || showSidebar
        ? 'xl:grid-cols-2 2xl:grid-cols-4'
        : 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3'
    }
    justify-center gap-4
    ${
      showListView
        ? '2xl:grid-cols-1'
        : showNavSidebar || showSidebar
        ? 'grid-cols-2 place-items-center items-center justify-center gap-4 xl:grid-cols-2 2xl:grid-cols-3'
        : 'xl:grid-cols-3 2xl:grid-cols-5'
    }
  `}
      >
        {getPosts.isLoading && <LoadingSpinner />}
        {getPosts.isSuccess &&
          getPosts.data.map((post) => {
            return (
              <div key={post.id} className="h-full ">
                {showListView ? (
                  <TechCardList post={post} />
                ) : (
                  <>
                    <TechCard post={post} />
                  </>
                )}
                {posts[post.id] && <TechModal post={post} />}
              </div>
            );
          })}
      </div>
    </main>
  );
}
