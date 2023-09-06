import React from 'react';
import { LoadingSpinner } from '@front-end-nx/shared/ui';
import CommentSidebar from '../../components/CommentsDiscuss';
import Link from 'next/link';

export default function TagsPost({ getPost }) {
  return (
    <div>
      <div className="my-6 flex items-center justify-start gap-4 rounded-lg border bg-inherit p-4 dark:bg-white dark:bg-opacity-10">
        {getPost?.data?.tags.map((tag) => (
          <div className="flex flex-col gap-2 py-2">
            <Link href="">
              <button className="whitespace-no-wrap flex items-center justify-center rounded-full border-2 bg-opacity-90 px-4 py-2 text-base font-medium leading-6 text-gray-500 shadow-sm hover:border-white  hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none dark:bg-black">
                {tag?.name}
              </button>
            </Link>
          </div>
        ))}
      </div>

      <div className="mb-10 ">
        {getPost.isLoading && <LoadingSpinner />}
        {getPost.data?.id && <CommentSidebar postId={getPost.data?.id} />}
      </div>
    </div>
  );
}
