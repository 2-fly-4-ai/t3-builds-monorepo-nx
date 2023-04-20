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
    <div className="transition duration-500   hover:shadow-[0px_0px_5px_10px_rgb(231,229,228)]  grid gap-3 grid-cols-10 gap-x-8   p-4 py-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <div className="rounded-none bg-gray-200 col-span-10">
        <Link href={props.post.slug} className="">
          <Image
            src={
              'https://images.unsplash.com/photo-1679678691328-54929d271c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80s' ??
              props.post.author.image
            }
            width={300}
            height={300}
            className=""
            alt={'' ?? ''}
          />
        </Link>
      </div>

      <div className="col-span-full items-center gap-3  py-1 ">
        <Link href={`/user/${props.post.author.username}` ?? null}>
          <div
            className=" flex gap-2 items-center p-1 hover:border-gray-400 cursor-pointer rounded-lg shadow-sm border-2 border-gray-200
        "
          >
            <div className="h-7 w-7 rounded-full bg-gray-300 ">
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
                <div className="text-sm font-medium">
                  {dayjs(props.post.createdAt).format('DD/MM/YY')}
                </div>
              </div>
              {/* <div className="text-sm underline">Teacher & Developer</div> */}
            </div>
          </div>
        </Link>
      </div>

      <div className="col-span-10   h-40">
        <Link href={`/${props.post.slug}`}>
          <div className="col-span-4 "></div>
          <h3 className="cursor-pointer text-2xl  line-clamp-3 font-bold  hover:underline decoration-gray-300 decoration-4">
            {props.post.title}
          </h3>
        </Link>
        <div className="break-words line-clamp-3  text-md line text-gray-500">
          {props.post.description}
        </div>
      </div>

      <div className="flex items-center col-span-10">
        <div className="flex mr-auto space-x-3 ">
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
          <div className="flex border-2 px-2 font-medium bg-gray-200 border-gray-400 ">
            <BiUpvote /> {props.post.likes.length}
          </div>
        </div>
      </div>

      {/* add the rest of the code here */}
    </div>
  );
}

export default PostCardUserProfile;
