import Image from 'next/image';
import Link from 'next/link';
import BiBookmarkPlus from '../../icons/BiBookMark';
import BiBookmarkMinus from '../../icons/BiBookmarkMinus';
import BiUpvote from '../../icons/BiUpvote';
import { useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';
import { trpc } from '../../utils/trpc';
import toast, { Toaster } from 'react-hot-toast';
import { useBookmarkStore } from '../../zustand/store';

/* eslint-disable-next-line */
export interface PostCardProps {
  countlikes: React.ReactNode;
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
  };
}

export function PostCardUserProfile(props: PostCardProps) {
  const { bookmarks, toggleBookmark } = useBookmarkStore();
  const isBookmarked = bookmarks.includes(props.post.id);
  const postRoute = trpc.useContext().post;
  const { data: sessionData, status } = useSession();

  const bookmarkPost = trpc.post.bookmarkPost.useMutation({
    onSuccess: () => {
      toast.success('Bookmark Added');
      postRoute.getReadingList.invalidate();
    },
  });

  const removeBookmark = trpc.post.removeBookmark.useMutation({
    onSuccess: () => {
      toast.success('Bookmark Removed');
      postRoute.getReadingList.invalidate();
    },
  });

  const handleBookmarkToggle = useCallback(() => {
    toggleBookmark(props.post.id);
  }, [props.post.id, isBookmarked, toggleBookmark]);

  const dayjs = require('dayjs');

  return (
    <div className="group grid  grid-cols-10 gap-4 gap-x-8 rounded-xl border-2  p-4  py-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition duration-500 hover:shadow-[0px_0px_5px_5px_rgb(231,229,228)]  dark:border-gray-300 dark:bg-white dark:bg-opacity-10">
      <div className="relative col-span-full  rounded-none">
        <div className="group absolute flex h-full w-full transition duration-500 group-hover:bg-black group-hover:bg-opacity-20">
          <Link href={`/${props.post.slug}`} className="mx-auto my-auto mt-4">
            <button className="mx-auto  hidden items-center justify-center  gap-2 rounded-lg border-4 px-2 py-1 text-base font-bold antialiased backdrop-blur transition duration-500 group-hover:flex  group-hover:bg-white group-hover:bg-opacity-80 group-hover:dark:bg-black dark:group-hover:bg-opacity-50">
              VIEW ARTICLE
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"></path>
              </svg>
            </button>
          </Link>
        </div>
        <Link href={`/${props.post.slug}`} className="">
          <div className="h-56">
            <Image
              src={
                props?.post?.featuredImage ??
                'https://images.unsplash.com/photo-1679678691328-54929d271c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80s'
              }
              width={400}
              height={400}
              className="f-full h-56 object-cover"
              alt={'' ?? ''}
            />
          </div>
        </Link>
      </div>

      <div className="col-span-10   h-28">
        <Link href={`/${props.post.slug}`}>
          <div className="col-span-4 "></div>
          <h3 className="line-clamp-4 cursor-pointer  text-xl font-bold   ">
            {props.post.title}
          </h3>
        </Link>
        {/* <div className="break-words line-clamp-3  text-md line text-gray-500">
          {props.post.description}
        </div> */}
      </div>

      <div className="col-span-10  flex items-center">
        <div className=" flex w-full">
          <div className="flex  gap-1 bg-gray-200 p-1 px-2 font-medium dark:bg-white dark:bg-opacity-10 ">
            <BiUpvote /> {props?.post?.likes?.length}
          </div>
          {sessionData ? (
            <div className="text-gray-400 hover:text-black dark:hover:text-white">
              {isBookmarked ? (
                <BiBookmarkMinus
                  onClick={() => {
                    removeBookmark.mutate({
                      postId: props.post.id,
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
                      postId: props.post.id,
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
      </div>

      {/* add the rest of the code here */}
    </div>
  );
}

export default PostCardUserProfile;
