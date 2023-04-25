import React from 'react';
import Link from 'next/link';
import { trpc } from '../../utils/trpc';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';

export default function SideSection({ showSidebar, toggleSidebar }) {
  const readingList = trpc.post.getReadingList.useQuery();
  const suggestions = trpc.user.getSuggestions.useQuery();
  const [mainClass, setMainClass] = useState('');

  // useEffect(() => {
  //   setMainClass(showSidebar ? 'slide-right ' : 'slide-left translate-x-1/2');
  // }, [showSidebar]);

  // if (!showSidebar) {
  //   return null;
  // }

  return (
    <aside
      className={`${mainClass} ${
        showSidebar ? 'col-span-3 ' : '   hidden'
      } space-between flex h-full w-full flex-col space-y-4 py-6 px-2 transition-transform duration-500 ease-out relative `}
    >
      <div className="">
        <div className="flex flex-col ">
          <h3 className="mb-2 px-4 py-1 text-lg   font-bold">
            People you might be interested in:
          </h3>
          {Array.from({ length: 4 }).map((_, i) => (
            <Link href="/" key={i}>
              <div className="flex w-full flex-row items-center space-x-4 p-4 py-3 hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10">
                <div className="h-12 w-12 flex-none rounded-full bg-gray-500"></div>
                <div>
                  <div className="text-sm font-bold text-gray-500 dark:text-orange-400">
                    lorem ipsum
                  </div>
                  <div className="text-sm line-clamp-2">
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum
                  </div>
                </div>
                <div>
                  <button className="flex items-center space-x-3 rounded border-2  border-gray-300 hover:bg-gray-600  p-2 text-sm px-4 py-2 font-medium shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)]  dark:hover:border-white dark dark:hover:bg-white dark:hover:bg-opacity-50 shadow-gray-300 transition  hover:border-black hover:text-gray-900  duration-200 dark:hover:text-white  hover:shadow-black ease-in-out">
                    Follow
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <button
          className="bg-gray-100 hover:animate-pulse font-bold dark:bg-black dark:hover:bg-white dark:hover:bg-opacity-60 dark:text-white  border-gray-400 dark:border-white border-2 absolute w-10 h-10 rounded-full  -left-5 mr-2 top-96  text-gray-500  transition-transform duration-500 ease-out"
          onClick={toggleSidebar}
        >
          -
        </button>
        <h3 className="my-4 font-bold px-4 text-lg">Your reading list:</h3>
        <div className="flex flex-col ">
          {readingList.data &&
            readingList.data.map((bookmark, i) => (
              <Link href="/" key={i}>
                <div className="group flex items-center space-x-5 p-4 hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10">
                  <div className="   bg-gray-300">
                    {bookmark?.post?.featuredImage ? (
                      <Image
                        src={bookmark?.post?.featuredImage ?? null}
                        width={220}
                        height={220}
                      />
                    ) : (
                      <Image
                        src="https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/GitHub.jpeg"
                        width={200}
                        height={200}
                      />
                    )}
                  </div>
                  <div className="flex w-3/5 flex-col space-y-2">
                    <div className=" font-semibold decoration-gray-300 line-clamp-3 decoration-2 group-hover:underline ">
                      {bookmark.post.title}
                    </div>
                    {/* <div className="text-sm line-clamp-2">
                      {bookmark.post.description}
                    </div> */}
                    <div>
                      <div className="flex w-full items-center space-x-1">
                        <div className="h-5 w-5 flex-none rounded-full bg-gray-300"></div>
                        <div className="text-sm font-bold text-black dark:text-gray-500 dark:text-white">
                          {bookmark.post.author.name}
                        </div>
                        <div className="text-xs">
                          {dayjs(bookmark.post.createdAt).format('DD/MM/YYYY')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </aside>
  );
}
