import { Interweave } from 'interweave';
import Image from 'next/image';
import { useState } from 'react';

export interface BlogPageProseProps {
  title: string;
  description: string;
  html: string;
  featuredImage: string;
  setIsUnsplashModalOpen: (isUnsplashModalOpen: boolean) => void;
}

export default function BlogPageProse(props: BlogPageProseProps) {
  const { title, description, html, featuredImage } = props;
  return (
    <div className=" flex w-full items-center justify-center p-10">
      <div className="w-full max-w-screen-md space-y-8">
        <div className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden rounded-lg bg-gray-300  shadow-lg dark:bg-black">
          {featuredImage && (
            <>
              <Image
                src={featuredImage}
                alt={title}
                fill
                className="absolute rounded-lg object-cover lg:h-auto lg:w-full xl:h-auto xl:w-full 2xl:h-auto 2xl:w-auto"
              />
            </>
          )}
          <div
            id="this button isn't clickable"
            onClick={() => props.setIsUnsplashModalOpen(true)}
            className="absolute left-3 top-3 z-10 cursor-pointer rounded-lg bg-gray-400 p-1 transition duration-200 hover:bg-gray-50 "
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1.5em"
              width="1.5em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4,5h13v7h2V5c0-1.103-0.897-2-2-2H4C2.897,3,2,3.897,2,5v12c0,1.103,0.897,2,2,2h8v-2H4V5z"></path>
              <path d="M8 11L5 15 16 15 12 9 9 13z"></path>
              <path d="M19 14L17 14 17 17 14 17 14 19 17 19 17 22 19 22 19 19 22 19 22 17 19 17z"></path>
            </svg>
          </div>
          {/* this is the featured image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="mx-10 rounded-xl bg-gray-500 bg-opacity-50 px-4  pb-6 pt-4 text-5xl font-medium text-gray-50 dark:bg-black dark:bg-opacity-80">
              {title}
            </div>
          </div>
        </div>
        <div className="prose max-w-none  rounded-lg border-gray-800 bg-gray-100 px-4 py-4 pl-6 font-sans text-lg dark:bg-black dark:bg-opacity-90 dark:text-gray-400 dark:text-opacity-80">
          {description}
        </div>
        <div className="prose-p:font-sans prose-li:list-style dark:prose-pre:bg-black prose-pre:bg-black dark:prose-pre:border-2 prose-pre:border-2 prose-pre:border-t-[30px] dark:prose-pre:border-t-[30px] prose  prose-lg prose-a:font-bold prose-li:text-black prose-table:border-2 prose-table:shadow-lg prose-th:border prose-th:bg-gray-300 dark:prose-th:bg-opacity-0 prose-th:p-3 prose-td:border prose-td:p-3 prose-img:mx-auto prose-img:my-12 prose-img:max-h-custom prose-img:w-auto prose-img:border-2 dark:prose-headings:text-gray-300 prose-img:border-black prose-img:py-12 prose-img:px-52 prose-img:shadow-[5px_5px_0px_0px_rgba(109,40,217)] dark:prose-p:text-gray-400 prose-li:font-sans dark:prose-li:text-gray-400 prose-img:shadow-black dark:prose-strong:text-red-400 dark:prose-code:text-white max-w-none pb-8 marker:text-black dark:text-gray-400 dark:text-opacity-80 dark:marker:text-gray-400">
          <Interweave content={html} />
        </div>
      </div>
    </div>
  );
}
