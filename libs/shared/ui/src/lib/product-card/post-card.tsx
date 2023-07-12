import Image from 'next/image';
import Link from 'next/link';
import BiBookmarkPlus from '../../icons/BiBookMark';
import BiBookmarkMinus from '../../icons/BiBookmarkMinus';
import BiUpvote from '../../icons/BiUpvote';
import { useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';
import { trpc } from '../../utils/trpc';
import toast, { Toaster } from 'react-hot-toast';
import { UseMutationResult } from 'react-query';
//lets use our zustand import here
import { useBookmarkStore } from '../../zustand/store';
import { useGlobalContextTechModalStore } from '../../zustand/store';
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
  };
  bookmarkPost: UseMutationResult;
  removeBookmark: UseMutationResult;
}
export function PostCard(props: PostCardProps) {
  const { data: sessionData, status } = useSession();
  const { bookmarkPost, removeBookmark } = props;

  const { togglePosts } = useGlobalContextTechModalStore();
  //use the zustand store and get the bookmark status for the current post
  // Use Zustand to manage the state of the bookmark button
  const { bookmarks, toggleBookmark } = useBookmarkStore();
  const isBookmarked = bookmarks.includes(props.post.id);

  const handleBookmarkToggle = useCallback(() => {
    toggleBookmark(props.post.id);
  }, [props.post.id, isBookmarked, toggleBookmark]);

  const handlePostsModalToggle = () => {
    togglePosts(props.post.id);
  };

  const dayjs = require('dayjs');

  return (
    <div className="group grid w-[340px] grid-cols-10 gap-2 gap-x-8 overflow-hidden rounded-xl border-2 border-gray-300 bg-white    transition duration-200 hover:border-gray-800  dark:border-gray-300  dark:bg-opacity-10 ">
      <div className="relative col-span-full  rounded-none">
        <div onClick={handlePostsModalToggle}>
          <div className="group absolute flex h-60 w-full transition duration-200 group-hover:bg-black  group-hover:bg-opacity-20">
            <Link
              href={`/posts/${props.post?.slug}`}
              className="mx-auto mt-4 flex h-min "
            >
              <button
                onClick={(event) => {
                  event.stopPropagation();
                }}
                className="mx-auto my-auto  hidden items-center justify-center gap-2 rounded-lg border-2 px-2 py-1 text-sm  font-bold text-white antialiased backdrop-blur transition duration-500 group-hover:flex group-hover:bg-black  group-hover:bg-opacity-80 dark:group-hover:bg-black dark:group-hover:bg-opacity-50"
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
            <button className="absolute bottom-2 right-2 mx-auto hidden items-center justify-center  gap-2  rounded-lg border-2  px-2 py-1 text-base font-bold text-white antialiased backdrop-blur transition duration-200 group-hover:flex group-hover:bg-black  group-hover:bg-opacity-80 dark:group-hover:bg-black dark:group-hover:bg-opacity-50">
              <HiMagnifyingGlass />
            </button>
          </div>

          <div className=" flex h-60 w-full  overflow-hidden">
            <Image
              src={
                props.post.featuredImage ??
                'https://images.unsplash.com/photo-1679678691328-54929d271c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80s'
              }
              width={400}
              height={400}
              className="h-full  object-cover"
              alt={'' ?? ''}
            />
          </div>
        </div>
      </div>

      <div className="col-span-full grid p-4 pt-0">
        <div className="col-span-full   h-24  overflow-hidden  break-words">
          <Link href={`/courses/${props.post.slug}`}>
            <h3 className="  line-clamp-3 cursor-pointer break-words text-xl font-bold decoration-gray-300">
              {props.post.title}
            </h3>
          </Link>
        </div>

        <div className=" col-span-full flex w-full items-center ">
          <div className=" flex items-center border-gray-400 bg-slate-100 px-2  font-medium dark:bg-white dark:bg-opacity-10">
            <BiUpvote /> {props.post.likes.length}
          </div>

          {sessionData ? (
            <div className="text-gray-400 hover:text-black dark:hover:text-white">
              {isBookmarked ? (
                <BiBookmarkMinus
                  onClick={() => {
                    removeBookmark.mutate({
                      itemId: props.post.id,
                      itemType: 'course',
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
                      itemId: props.post.id,
                      itemType: 'course',
                    });
                    // use the toggleBookmark function from the store and pass the post id
                    handleBookmarkToggle();
                  }}
                  className="cursor-pointer"
                />
              )}
            </div>
          ) : null}

          <div className="group col-span-full ml-auto items-center gap-3 break-words    transition-all duration-500  hover:bg-gray-200 ">
            <Link href={`/user/${props.post.author?.username}` ?? null}>
              <div
                className=" ml-auto flex cursor-pointer items-center gap-2   border-gray-200  shadow-sm
        "
              >
                <div className=" h-8 w-8 rounded-full bg-gray-300 ">
                  {props.post.author?.image && props.post.author?.image ? (
                    <Image
                      src={props.post.author?.image ?? ''}
                      width={50}
                      height={50}
                      className="ml-auto rounded-full"
                      alt={props.post.author?.name ?? ''}
                    />
                  ) : null}
                </div>
                {/* <div className="">
                  <div className="flex items-center gap-2 ">
                    <div className="text-lg font-bold capitalize underline dark:text-orange-400">
                      {props.post.author?.name}
                    </div>
                    |{' '}
                    <div className="text-sm font-medium">
                      {dayjs(props.post.createdAt).format('DD/MM/YY')}
                    </div>
                  </div>
                </div> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* add the rest of the code here */}
    </div>
  );
}

export default PostCard;
