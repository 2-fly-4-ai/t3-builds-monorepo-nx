import React from 'react';
import Link from 'next/link';
import { trpc } from '../../utils/trpc';
import dayjs from 'dayjs';
import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function SideSection({ showSidebar, toggleSidebar }) {
  const readingList = trpc.post.getReadingList.useQuery();
  const suggestions = trpc.user.getSuggestions.useQuery();
  const user = useSession();
  const [mainClass, setMainClass] = useState('');

  return (
    <aside
      className={`${mainClass} ${
        showSidebar ? 'col-span-3 ' : '   hidden'
      } space-between relative flex h-full w-full flex-col space-y-4 px-2 py-6 transition-transform duration-500 ease-out `}
    >
      <div className=" w-full px-4 py-1 text-xl ">
        <div>
          Welcome Back{' '}
          <span className="font-bold text-orange-400">
            {user?.data?.user?.name}{' '}
          </span>
        </div>
        {/* <Link href={user?.data?.user?.name}>PROFILE</Link> */}
        {/* |<Link href={user?.data?.user?.id ?? ''}>BOOKMARKS</Link> */}
        TECH-STACK
      </div>
      <div className="">
        <div className="flex flex-col ">
          <h3 className="mb-2 px-4 py-1 text-lg   font-bold">
            People you might be interested in:
          </h3>
          {suggestions.isSuccess &&
            suggestions.data.map((user) => (
              <Link href="/" key={10}>
                <div className="flex w-full flex-row items-center space-x-4 p-4 py-3 hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10">
                  <div className="h-12 w-12 flex-none rounded-full bg-gray-500"></div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 dark:text-orange-400">
                      {user.name}
                    </div>
                    <div className="line-clamp-2 text-sm">
                      lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                      ipsum lorem ipsum lorem ipsum lorem ipsum
                    </div>
                  </div>
                  <div>
                    <button
                      // onClick={() =>
                      //     followUser.mutate({
                      //       followingUserId: user.id,
                      //     })
                      //   }
                      className="dark flex items-center space-x-3 rounded  border-2 border-gray-300  p-2 px-4 py-2 text-sm font-medium shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)]  shadow-gray-300 transition duration-200 ease-in-out hover:border-black hover:bg-gray-200  hover:text-gray-900 hover:shadow-black  dark:hover:border-white dark:hover:bg-white  dark:hover:bg-opacity-50 dark:hover:text-white"
                    >
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
          className="absolute -left-5 top-96 mr-2 h-10 w-10 rounded-full border-2  border-gray-400 bg-gray-100 font-bold text-gray-500 transition-transform duration-500 ease-out  hover:animate-pulse hover:bg-gray-200 dark:border-white  dark:bg-black  dark:text-white dark:hover:bg-white dark:hover:bg-opacity-60"
          onClick={toggleSidebar}
        >
          -
        </button>
        <h3 className="my-4 px-4 text-lg font-bold">Your reading list:</h3>
        <div className="flex flex-col ">
          {readingList.data &&
            readingList.data.map((bookmark, i) => (
              <Link href="/" key={i}>
                <div className="group flex items-center space-x-5 p-4 hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10">
                  <div className="flex  aspect-video  w-40  justify-center bg-gray-300 dark:bg-black dark:bg-opacity-50">
                    {bookmark?.post?.featuredImage ? (
                      <Image
                        src={bookmark?.post?.featuredImage ?? null}
                        width={220}
                        height={220}
                        className=" object-cover 2xl:max-h-40"
                      />
                    ) : (
                      <Image
                        src="https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/GitHub.jpeg"
                        width={200}
                        height={200}
                        className="aspect-video max-h-28 w-auto"
                      />
                    )}
                  </div>
                  <div className="flex w-3/5 flex-col space-y-2">
                    <div className=" line-clamp-3 font-semibold decoration-gray-300 decoration-2 group-hover:underline ">
                      {bookmark.post.title}
                    </div>
                    {/* <div className="text-sm line-clamp-2">
                      {bookmark.post.description}
                    </div> */}
                    <div>
                      <div className="hidden w-full items-center space-x-1  2xl:flex">
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
