import React from 'react';
import { trpc } from '../../utils/trpc';
import { AiOutlineSearch } from '../../icons';
import { BsChevronDown } from '../../icons';
import { ImSpinner8 } from '../../icons';
import PostCard from 'libs/shared/ui/src/lib/post-card/post-card';
import PostCardList from 'libs/shared/ui/src/lib/post-card/post-card-list';
import LoadingSpinner from 'libs/shared/ui/src/lib/loading-spinner/loading-spinner';
import { RouterOutputs } from '../../utils/trpc';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function MainSection({ showSidebar, toggleSidebar }) {
  const getPosts = trpc.post.getPosts.useQuery();
  console.warn('TESTER', getPosts.data);

  const [showListView, setListView] = useState(false);
  const handleListViewToggle = () => setListView((prev) => !prev);

  // console.warn('TestMainPage', getPost.data.likes);\

  return (
    <main
      className={`${
        showSidebar ? 'col-span-9' : 'col-span-12'
      } border-gray   xl:px-8 2xl:px-6 min-h-screen  px-8  w-full border-r  border-gray-200  transition-all duration-500 ease-in-out `}
    >
      <div className=" mb-4 flex flex-col items-center border-b-2 py-4">
        <div className="flex w-full items-center justify-between space-x-4  py-2 ">
          <label
            htmlFor="search"
            className="group flex w-96 items-center justify-center rounded-full border-2 border-gray-300  p-1 px-2 font-medium  "
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
            <div className="my-auto mx-2 text-lg font-bold">Topics:</div>
            <div>
              <ul className=" flex items-center justify-center space-x-2 text-sm">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li
                    key={i}
                    className="flex cursor-pointer items-center space-x-2   rounded-md border-2 dark:hover:bg-white dark:hover:bg-opacity-60 dark:hover:border-white  border-gray-300 p-2 px-3 py-1 font-medium shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)]  shadow-gray-300 hover:border-black hover:shadow-black"
                  >
                    Design
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between py-2">
          <div className="text-2xl font-bold">Articles</div>
          <div className="flex gap-2">
            <button className="flex items-center space-x-2 rounded-full border-2  border-gray-300 dark:border-white dark:hover:bg-white dark:hover:text-white dark:hover:bg-opacity-60 px-3 py-1 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300  hover:border-black hover:shadow-black">
              <div className="text-sm font-semibold ">Following</div>
              <div>
                <BsChevronDown />
              </div>
            </button>
            <div className=" flex justify-center px-1 gap-2">
              {!showListView ? (
                <button onClick={() => setListView(true)}>
                  {/* I need this button to set List view true when clicked */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 20 20"
                    height="2em"
                    width="2em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
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
                    stroke-width="0"
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
            {!showSidebar ? (
              <button
                className=" border-gray-400 dark:border-white border-2 w-8 h-8 dark:hover:bg-white dark:hover:bg-opacity-60  text-lg font-bold right-72 mr-2 hover:animate-pulse  top-60"
                onClick={toggleSidebar}
              >
                {showSidebar ? '-' : '+'}
              </button>
            ) : (
              <button
                className=" border-gray-400 border-2 w-8 h-8 dark:border-white dark:hover:bg-white dark:hover:bg-opacity-60  text-lg font-bold right-72 mr-2 hover:animate-pulse  top-60"
                onClick={toggleSidebar}
              >
                {showSidebar ? '-' : '+'}
              </button>
            )}
          </div>
        </div>
      </div>
      {/* 
      <div className="mx-12 space-y-4">
        {getPosts.isLoading && <LoadingSpinner />}
        {getPosts.isSuccess &&
          getPosts.data.map((post) => {
            console.warn('TESTXXX', post);
            return (
              <div key={post.id}>
                <PostCard post={post} />
              </div>
            );
          })}
      </div> */}

      <div
        className={`
  my-8 grid gap-6 
  ${
    showListView
      ? 'grid-cols-1'
      : showSidebar
      ? ''
      : 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5'
  } gap-4 justify-center
  ${showSidebar && !showListView ? 'xl:grid-cols-2 2xl:grid-cols-4' : ''} 
`}
      >
        {getPosts.isLoading && <LoadingSpinner />}
        {getPosts.isSuccess &&
          getPosts.data.map((post) => {
            console.warn('TESTXXX', post);
            return (
              <div key={post.id} className=" h-full">
                {showListView ? (
                  <PostCardList post={post} />
                ) : (
                  <PostCard post={post} />
                )}
              </div>
            );
          })}
      </div>
    </main>
  );
}
