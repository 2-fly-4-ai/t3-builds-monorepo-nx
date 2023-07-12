import React from 'react';
import Link from 'next/link';
import { trpc } from '../../utils/trpc';
import Image from 'next/image';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useSidebarStore } from '@front-end-nx/shared/ui';

export default function SideSection({ readingList }) {
  const { showSidebar, setShowSidebar } = useSidebarStore();
  const suggestions = trpc.user.getSuggestions.useQuery();
  const user = useSession();
  const [mainClass, setMainClass] = useState('');

  return (
    <aside
      className={`${mainClass} ${
        showSidebar ? 'w-80 ' : '    w-0'
      }  space-between  transition-width overflow-none relative flex flex-col space-y-4 border-l border-gray-300 bg-gray-200  py-6   duration-1000 dark:bg-inherit `}
    >
      <div className={`${showSidebar ? 'w-max' : 'w-0'}   overflow-hidden`}>
        <div className="flex flex-col ">
          <h3 className="mb-2 px-4 py-1 text-lg   font-bold">
            People you might be interested in:
          </h3>
          {suggestions.isSuccess &&
            suggestions.data.map((user) => (
              <Link href="/" key={10}>
                <div className="flex w-80 flex-row  items-center space-x-4 overflow-hidden p-4 py-3 hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10">
                  <div className="h-12 w-12 flex-none rounded-full bg-gray-500"></div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 dark:text-orange-400">
                      {user?.name}
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
      <button
        className="absolute -left-5 top-96 mr-2  rounded-full border-2  border-gray-400 bg-gray-100 font-bold text-gray-500 transition-transform duration-500 ease-out  hover:animate-pulse hover:bg-gray-200 dark:border-white  dark:bg-black  dark:text-white dark:hover:bg-white dark:hover:bg-opacity-60"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        -
      </button>
      <div className={`${showSidebar ? 'w-max' : 'hidden'} `}>
        <h3 className="my-4 w-max overflow-hidden px-4 text-lg font-bold">
          Your reading list:
        </h3>
        <div className="flex w-80 flex-col gap-2 px-4">
          {readingList.data &&
            readingList.data.map((bookmark, i) => (
              <Link href="/" key={i}>
                <div className="overflow-hidde group flex w-auto items-center space-x-5 rounded-lg border-2 border-gray-300 bg-white p-4  hover:border-2 hover:border-gray-800 dark:bg-inherit dark:bg-white dark:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10">
                  <div className="flex  aspect-video  w-40  justify-center bg-gray-300 dark:bg-black dark:bg-opacity-50">
                    {bookmark?.post?.featuredImage ? (
                      <Image
                        src={bookmark?.post?.featuredImage ?? null}
                        width={220}
                        height={220}
                        className=" aspect-video max-h-28 w-auto"
                        alt={bookmark?.post?.title}
                      />
                    ) : (
                      <Image
                        src="https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/GitHub.jpeg"
                        width={200}
                        height={200}
                        className="aspect-video max-h-28 w-auto"
                        alt={bookmark?.post?.title}
                      />
                    )}
                  </div>
                  <div className="flex w-3/5 flex-col space-y-2">
                    <div className=" line-clamp-3 font-semibold decoration-gray-300 decoration-2 group-hover:underline ">
                      {bookmark.post?.title}
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
