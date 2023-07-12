import Image from 'next/image';
import Link from 'next/link';
import { type inferReactQueryMutationOptions } from '@trpc/react-query';
import { type UseTRPCMutationResult } from '@trpc/react-query/shared';
import { type TRPCClientErrorLike } from '@trpc/react-query';
import BiBookmarkPlus from '../../icons/BiBookMark';
import BiBookmarkMinus from '../../icons/BiBookmarkMinus';
import BiUpvote from '../../icons/BiUpvote';
import { useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';
import { trpc } from '../../utils/trpc';
import toast, { Toaster } from 'react-hot-toast';
const dayjs = require('dayjs');
import { useGlobalContextTechModalStore } from '../../zustand/store';
import { useBookmarkStore } from '../../zustand/store';
import { UseMutationResult } from 'react-query';
import { HiMagnifyingGlass } from 'react-icons/hi2';
/* eslint-disable-next-line */
export interface PostCardProps {
  post: {
    author: {
      image: string;
      name: string;
      username: string;
    };
    createdAt: Date;
    bookmarks: string;
    slug: string;
    title: string;
    description: string;
    id: string;
    likes: string;
    featuredImage: string;
    tags: any;
  };
  bookmarkPost: any;
  removeBookmark: any;
}

export function PostCardList(props: PostCardProps) {
  const { data: sessionData, status } = useSession();
  const { bookmarkPost, removeBookmark, post } = props;

  const {
    author,
    createdAt,
    slug,
    title,
    description,
    id,
    likes,
    featuredImage,
    tags,
  } = post;

  //use the zustand store and get the bookmark status for the current post
  // Use Zustand to manage the state of the bookmark button
  const { bookmarks, toggleBookmark } = useBookmarkStore();
  const isBookmarked = bookmarks.includes(id);
  const { togglePosts } = useGlobalContextTechModalStore();

  const handleBookmarkToggle = useCallback(() => {
    toggleBookmark(id);
  }, [id, isBookmarked, toggleBookmark]);

  const handlePostsModalToggle = () => {
    togglePosts(id);
  };

  return (
    <div className="grid min-h-[10rem] w-full  grid-cols-12 gap-x-8 gap-y-2 rounded-xl  bg-white p-8 py-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition duration-500 dark:bg-white dark:bg-opacity-10">
      <div className="col-span-full flex items-center gap-3  py-1 ">
        <Link href={`/user/${author?.username}` ?? null}>
          <div
            className=" breakwords flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-200 p-2 shadow-sm hover:border-gray-400 hover:bg-gray-200 dark:hover:bg-white dark:hover:bg-opacity-40
        "
          >
            <div className="h-10 w-10 rounded-full bg-gray-300 ">
              {author?.image && author?.image ? (
                <Image
                  src={author?.image ?? ''}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt={author?.name ?? ''}
                />
              ) : null}
            </div>
            <div className="">
              <div className="flex items-center gap-2 ">
                <div className="text-lg  font-bold capitalize dark:text-orange-400">
                  {author?.name}
                </div>
                |{' '}
                <div className="text-sm">
                  {dayjs(createdAt).format('DD/MM/YY')}
                </div>
              </div>
              <div className="text-sm underline">Teacher & Developer</div>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-span-8  space-y-4 border border-transparent">
        <Link href={`/posts/${slug}`}>
          <h3 className="cursor-pointer text-2xl font-bold decoration-gray-300 decoration-4 transition duration-500 hover:underline">
            {title}
          </h3>
        </Link>
        <div className="text-md line-clamp-8 w-full break-words font-sans text-gray-500 dark:text-gray-400 dark:text-opacity-70">
          {description}
        </div>
      </div>

      <div className="col-span-4 mx-auto mt-4">
        <div className="relative col-span-4 ">
          <div
            onClick={handlePostsModalToggle}
            className="group absolute flex h-60 w-full transition duration-500 hover:bg-black hover:bg-opacity-20"
          >
            <Link
              href={`/posts/${slug}`}
              className="mx-auto my-auto  mt-4 w-full "
            >
              <button
                onClick={(event) => {
                  event.stopPropagation();
                }}
                className=" mx-auto my-auto  hidden items-center justify-center gap-2 rounded-lg border-2 px-2 py-1 text-sm  font-bold text-white antialiased backdrop-blur transition duration-500 group-hover:flex group-hover:bg-black  group-hover:bg-opacity-80 dark:group-hover:bg-black dark:group-hover:bg-opacity-50"
              >
                VIEW ARTICLE
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
                </svg>
              </button>
            </Link>
            <div className="absolute bottom-2 right-2 mx-auto hidden items-center justify-center  gap-2  rounded-lg border-2  px-2 py-1 text-base font-bold text-white antialiased backdrop-blur transition duration-200 group-hover:flex group-hover:bg-black  group-hover:bg-opacity-80 dark:group-hover:bg-black dark:group-hover:bg-opacity-50">
              <HiMagnifyingGlass />
            </div>
          </div>

          <Link href={`/posts/${slug}`}>
            <div className=" h-60 ">
              <Image
                src={
                  featuredImage ??
                  'https://images.unsplash.com/photo-1679678691328-54929d271c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80s'
                }
                width={400}
                height={400}
                className="max-h-60  w-full object-cover"
                alt={'' ?? ''}
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="col-span-12 my-4 flex items-center">
        <div className="mr-auto flex space-x-3 ">
          {/* post.tags */}
          {tags.map((tag, index) => (
            <Link
              href="#_"
              key={index}
              className="gap-1 rounded bg-gray-300 px-2 py-1 font-medium hover:bg-gray-400 dark:bg-white dark:bg-opacity-10 dark:hover:bg-gray-500"
              // className="focus:shadow-xs inline-flex  cursor-pointer select-none items-center justify-center rounded-full border-2 border-solid border-gray-600 bg-transparent px-4 py-1 text-center align-middle text-base font-semibold no-underline transition-all duration-300 ease-in-out focus:no-underline dark:text-gray-200 dark:hover:border-white dark:hover:text-white"
            >
              #{tag?.name}
            </Link>
          ))}
        </div>
        <div className="mx-1 flex bg-gray-200 px-2 py-1 font-medium dark:bg-white  dark:bg-opacity-10">
          <BiUpvote /> {likes.length}
        </div>
        {sessionData ? (
          <div className="text-gray-400 hover:text-black">
            {isBookmarked ? (
              <BiBookmarkMinus
                onClick={() => {
                  removeBookmark.mutate({
                    itemId: id,
                    itemType: 'post',
                  });
                  // use the toggleBookmark function from the store and pass the post id
                  handleBookmarkToggle();
                }}
                className="cursor-pointer"
              />
            ) : (
              <BiBookmarkPlus
                // countLikes={props.countlikes?.length()}
                onClick={() => {
                  bookmarkPost.mutate({
                    itemId: id,
                    itemType: 'post',
                  });
                  // use the toggleBookmark function from the store and pass the post id
                  handleBookmarkToggle();
                }}
                className="cursor-pointer"
              />
            )}
          </div>
        ) : null}
      </div>

      {/* add the rest of the code here */}
    </div>
  );
}

export default PostCardList;
