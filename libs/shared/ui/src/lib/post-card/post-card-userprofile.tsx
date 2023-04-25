import Image from 'next/image';
import Link from 'next/link';
import BiBookmarkPlus from '../../icons/BiBookMark';
import BiBookmarkMinus from '../../icons/BiBookmarkMinus';
import BiUpvote from '../../icons/BiUpvote';
import { useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';
import { trpc } from '../../utils/trpc';
import toast, { Toaster } from 'react-hot-toast';

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
  const postRoute = trpc.useContext().post;
  const { data: sessionData, status } = useSession();

  const dayjs = require('dayjs');

  return (
    <div className="group border-2 rounded-xl transition duration-500 dark:bg-white dark:bg-opacity-10   hover:shadow-[0px_0px_5px_5px_rgb(231,229,228)]  grid gap-4 grid-cols-10 gap-x-8 dark:border-gray-300  p-4 py-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <div className="relative rounded-none  col-span-full">
        <div className="group absolute flex h-full w-full group-hover:bg-black group-hover:bg-opacity-20 transition duration-500">
          <Link href={`/${props.post.slug}`} className="my-auto mt-4 mx-auto">
            <button className="mx-auto  text-base font-bold antialiased  border-4 group-hover:dark:bg-black group-hover:bg-opacity-80 backdrop-blur duration-500 transition py-1 px-2 hidden rounded-lg group-hover:bg-white group-hover:flex  justify-center items-center gap-2 dark:group-hover:bg-opacity-50">
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
                props.post.featuredImage ??
                'https://images.unsplash.com/photo-1679678691328-54929d271c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80s'
              }
              width={400}
              height={400}
              className="f-full object-cover h-56"
              alt={'' ?? ''}
            />
          </div>
        </Link>
      </div>

      <div className="col-span-10   h-28">
        <Link href={`/${props.post.slug}`}>
          <div className="col-span-4 "></div>
          <h3 className="cursor-pointer text-xl  line-clamp-4 font-bold   ">
            {props.post.title}
          </h3>
        </Link>
        {/* <div className="break-words line-clamp-3  text-md line text-gray-500">
          {props.post.description}
        </div> */}
      </div>

      <div className="flex  items-center col-span-10">
        <div className="flex  mr-auto space-x-3 ">
          {/* post.tags */}
          {Array.from({ length: 0 }).map((tag) => (
            <div
              // key={tag.id}
              onClick={() => {
                // redirect the user to specific tag page, where all the post related to that tag should be shown
              }}
              className="flex items-center rounded-lg border-2  border-gray-300  bg-gradient-to-tr from-gray-300 via-gray-200 to-white p-2 px-4 py-1 font-medium shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition  hover:border-black hover:text-gray-900 hover:shadow-black cursor-pointer"
            >
              TEST
              {/* {tag.name} */}
            </div>
          ))}
        </div>
        <div className=" flex w-full">
          <div className="flex  px-2 font-medium bg-gray-200 dark:bg-white dark:bg-opacity-10 gap-1 p-1 ">
            <BiUpvote /> {props.post.likes.length}
          </div>
        </div>
      </div>

      {/* add the rest of the code here */}
    </div>
  );
}

export default PostCardUserProfile;
