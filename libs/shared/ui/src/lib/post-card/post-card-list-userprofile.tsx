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
    slug: string;
    title: string;
    description: string;
    id: string;
    likes: string;
  };
}

export function PostCardListUserProfile(props: PostCardProps) {
  const dayjs = require('dayjs');

  return (
    <div className="hover:shadow-[0px_0px_5px_10px_rgb(231,229,228)] transition duration-500  grid min-h-[10rem] w-full grid-cols-12 gap-x-8 gap-y-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]  p-6 py-4 ">
      <div className="col-span-full flex items-center gap-3  py-1 ">
        <div
          className=" flex gap-2 items-center p-2  cursor-pointer rounded-lg shadow-sm border-2 border-gray-200
        "
        >
          <div className="h-10 w-10 rounded-full bg-gray-300 ">
            {props.post.author.image && props.post.author.image ? (
              <Image
                src={props.post.author.image ?? ''}
                width={50}
                height={50}
                className="rounded-full"
                alt={props.post.author.name ?? ''}
              />
            ) : null}
          </div>
          <div className="">
            <div className="flex items-center gap-2 ">
              <div className="text-lg font-medium capitalize">
                {props.post.author.name}
              </div>
              |{' '}
              <div className="text-sm">
                {dayjs(props.post.createdAt).format('DD/MM/YY')}
              </div>
            </div>
            <div className="text-sm underline">Teacher & Developer</div>
          </div>
        </div>
      </div>

      <div className="col-span-8  space-y-4 border border-transparent">
        <Link href={`/${props.post.slug}`}>
          <h3 className="cursor-pointer text-2xl font-bold decoration-indigo-400 decoration-2 hover:underline decoration-gray-300 decoration-4">
            {props.post.title}
          </h3>
        </Link>
        <div className="break-words text-md  text-gray-500 line-clamp-4">
          {props.post.description}
        </div>
        <button className="text-xl font-medium border px-4 py-1 flex items-center gap-2 rounded-lg bg-gray-100">
          <p className="pb-1">Read More</p>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
          </svg>
        </button>
      </div>
      <div className="col-span-4 ">
        <div className="rounded-none bg-gray-200">
          <Image
            src={
              'https://images.unsplash.com/photo-1679678691328-54929d271c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80s' ??
              props.post.author.image
            }
            width={300}
            height={300}
            alt={props.post.author.name ?? ''}
          />
        </div>
      </div>
      <div className="flex items-center col-span-12 my-2">
        <div className="flex mr-auto space-x-3 ">
          {/* post.tags */}
          {Array.from({ length: 4 }).map((tag) => (
            <div
              // key={tag.id}
              onClick={() => {
                // redirect the user to specific tag page, where all the post related to that tag should be shown
              }}
              className="flex items-center rounded-lg border-2  border-gray-300  bg-gradient-to-tr from-gray-300 via-gray-200 to-white p-2 px-4 py-1 font-medium shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition  hover:border-black hover:text-gray-900 hover:shadow-black cursor-pointer"
            >
              Fuck
              {/* {tag.name} */}
            </div>
          ))}
        </div>
        <div className="flex border-2 px-2 font-medium bg-gray-200 border-gray-400 mx-1">
          <BiUpvote /> {props.post.likes.length}
        </div>
      </div>

      {/* add the rest of the code here */}
    </div>
  );
}

export default PostCardListUserProfile;
