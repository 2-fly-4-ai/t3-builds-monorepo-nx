import React from 'react';
import { trpc } from '../../utils/trpc';
import { AiOutlineSearch } from '../../icons';
import { BsChevronDown } from '../../icons';
import { ImSpinner8 } from '../../icons';
import PostCard from 'libs/shared/ui/src/lib/post-card/post-card';
import LoadingSpinner from 'libs/shared/ui/src/lib/loading-spinner/loading-spinner';
import { RouterOutputs } from '../../utils/trpc';
import { useState } from 'react';

export default function MainSection() {
  const getPosts = trpc.post.getPosts.useQuery();
  console.warn('TESTER', getPosts.data);

  // console.warn('TestMainPage', getPost.data.likes);
  const bookmarkPost = trpc.post.bookmarkPost.useMutation();
  const removeBookmark = trpc.post.removeBookmark.useMutation();

  return (
    <main className="border-gray col-span-8 h-full  w-full border-r border-gray-300">
      <div className="mx-12 mb-4 flex flex-col items-center border-b-2 py-4">
        <div className="flex w-full items-center justify-between space-x-4  py-2 ">
          <label
            htmlFor="search"
            className="group flex w-96 items-center justify-center rounded-full border-2 border-gray-300 bg-white p-1 px-2 font-medium  "
          >
            <AiOutlineSearch />
            <input
              type="text"
              name="search"
              id="search"
              className="w-full px-2 outline-none "
              placeholder="Search...."
            />
          </label>
          <div className="ml-auto flex gap-2 ">
            <div className="my-auto mx-2">Topics:</div>
            <div>
              <ul className=" flex items-center justify-center space-x-2 text-sm">
                {Array.from({ length: 4 }).map((_, i) => (
                  <li
                    key={i}
                    className="flex cursor-pointer items-center space-x-2 rounded-md border-2  border-gray-300 bg-white p-2 px-3 py-1 font-medium shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)]  shadow-gray-300 hover:border-black hover:shadow-black"
                  >
                    Design
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between py-2">
          <div className="text-lg font-medium">Articles</div>
          <div>
            <button className="flex items-center space-x-2 rounded border-2  border-gray-300 bg-white p-2 px-3 py-1 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300  hover:border-black hover:shadow-black">
              <div className="text-sm font-semibold ">Following</div>
              <div>
                <BsChevronDown />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-12 space-y-4">
        {getPosts.isLoading && <LoadingSpinner />}
        {getPosts.isSuccess &&
          getPosts.data.map((post) => {
            console.warn('TESTXXX', post);
            return (
              <div key={post.id}>
                <PostCard
                  post={post}
                  bookmarkPost={bookmarkPost}
                  removeBookmark={removeBookmark}
                />
              </div>
            );
          })}
      </div>
    </main>
  );
}
