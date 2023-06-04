import Image from 'next/image';
import Link from 'next/link';
import BiBookmarkPlus from '../../icons/BiBookMark';
import BiBookmarkMinus from '../../icons/BiBookmarkMinus';
import BiUpvote from '../../icons/BiUpvote';
import { useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';
import { trpc } from '../../utils/trpc';
import toast, { Toaster } from 'react-hot-toast';
const dayjs = require('dayjs');

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
    featuredImage: string;
  };
}

export function PostCardList(props: PostCardProps) {
  const { data: sessionData, status } = useSession();
  const postRoute = trpc.useContext().post;

  //state Handlers
  const { bookmarks, toggleBookmark } = useBookmarkStore();
  const isBookmarked = bookmarks.includes(props.post.id);

  const bookmarkPost = trpc.post.bookmarkItem.useMutation({
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

  return (
    <div className="grid min-h-[10rem] w-full grid-cols-12 gap-x-8 gap-y-2 rounded-xl p-6 py-4  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition duration-200 hover:shadow-[0px_0px_5px_5px_rgb(231,229,228)] dark:bg-white dark:bg-opacity-10">
      <div className="col-span-full flex items-center gap-3  py-1 ">
        <Link href={`/user/${props.post.author?.username}` ?? null}>
          <div
            className=" flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-200 p-2 shadow-sm hover:border-gray-400 hover:bg-gray-200 dark:hover:bg-white dark:hover:bg-opacity-40
        "
          >
            <div className="h-10 w-10 rounded-full bg-gray-300 ">
              {props.post.author?.image && props.post.author?.image ? (
                <Image
                  src={props.post.author?.image ?? ''}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt={props.post.author?.name ?? ''}
                />
              ) : null}
            </div>
            <div className="">
              <div className="flex items-center gap-2 ">
                <div className="text-lg  font-bold capitalize dark:text-orange-400">
                  {props.post.author?.name}
                </div>
                |{' '}
                <div className="text-sm">
                  {dayjs(props.post.createdAt).format('DD/MM/YY')}
                </div>
              </div>
              <div className="text-sm underline">Teacher & Developer</div>
            </div>
          </div>
        </Link>
      </div>

      <div className="col-span-8  space-y-4 border border-transparent">
        <Link href={`/courses/${props.post.slug}`}>
          <h3 className="cursor-pointer overflow-hidden text-2xl font-bold decoration-gray-300 decoration-4 transition duration-200 hover:underline">
            {props.post.title}
          </h3>
        </Link>
        <div className="text-md line-clamp-8 line-clamp-6 break-words font-sans text-gray-500 dark:text-gray-400 dark:text-opacity-70">
          {props.post.description}
        </div>
      </div>
      <div className="relative col-span-4">
        <div className="group absolute flex h-60 w-full transition duration-200 hover:bg-black hover:bg-opacity-20">
          <Link
            href={`/courses/${props.post.slug}`}
            className="mx-auto my-auto mt-4"
          >
            <button className="mx-auto hidden items-center justify-center  gap-2  rounded-lg border-4  px-2 py-1 text-base font-bold antialiased backdrop-blur transition duration-200 group-hover:flex group-hover:bg-white  group-hover:bg-opacity-80 dark:group-hover:bg-black dark:group-hover:bg-opacity-50">
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

        <Link href={`/courses/${props.post.slug}`} className="">
          <div className="h-60">
            <Image
              src={
                props.post.featuredImage ??
                'https://images.unsplash.com/photo-1679678691328-54929d271c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80s'
              }
              width={400}
              height={400}
              className="f-full h-60 w-full object-cover"
              alt={'' ?? ''}
            />
          </div>
        </Link>
      </div>
      <div className="col-span-12 my-4 flex items-center">
        <div className="mr-auto flex space-x-3 ">
          {/* post.tags */}
          {Array.from({ length: 4 }).map((tag) => (
            <div
              // key={tag.id}
              onClick={() => {
                // redirect the user to specific tag page, where all the post related to that tag should be shown
              }}
              className="flex cursor-pointer items-center rounded-lg  border-2  border-gray-300   bg-gray-200 to-white px-4 py-0  font-medium shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition hover:border-black hover:text-gray-900  hover:shadow-black dark:border-white dark:bg-black dark:bg-opacity-50 dark:hover:bg-white dark:hover:bg-opacity-60 dark:hover:text-white"
            >
              TEST
              {/* {tag.name} */}
            </div>
          ))}
        </div>
        <div className="mx-1 flex bg-gray-200 px-2 py-1 font-medium dark:bg-white  dark:bg-opacity-10">
          <BiUpvote /> {props.post.likes.length}
        </div>
        {sessionData ? (
          <div className="text-gray-400 hover:text-black">
            {isBookmarked ? (
              <BiBookmarkMinus
                onClick={() => {
                  removeBookmark.mutate({
                    postId: props.post.id,
                  });
                  // create a new state object with the opposite value of isBookmarked
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
                  // create a new state object with the opposite value of isBookmarked
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
