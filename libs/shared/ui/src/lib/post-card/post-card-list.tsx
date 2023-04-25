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

export function PostCardList(props: PostCardProps) {
  const postRoute = trpc.useContext().post;

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
  const { data: sessionData, status } = useSession();
  const [isBookmarked, setIsBookmarked] = useState(
    Boolean(props?.post?.bookmarks?.length > 0)
  );

  const dayjs = require('dayjs');

  return (
    <div className="rounded-xl grid min-h-[10rem] w-full grid-cols-12 dark:bg-white dark:bg-opacity-10 gap-x-8 gap-y-2  p-6 py-4 transition duration-500 hover:shadow-[0px_0px_5px_5px_rgb(231,229,228)] shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <div className="col-span-full flex items-center gap-3  py-1 ">
        <Link href={`/user/${props.post.author.username}` ?? null}>
          <div
            className=" flex gap-2 items-center p-2 hover:bg-gray-200 dark:hover:bg-white dark:hover:bg-opacity-40 hover:border-gray-400 cursor-pointer rounded-lg shadow-sm border-2 border-gray-200
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
                <div className="text-lg  capitalize dark:text-orange-400 font-bold">
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
        </Link>
      </div>

      <div className="col-span-8  space-y-4 border border-transparent">
        <Link href={`/${props.post.slug}`}>
          <h3 className="cursor-pointer text-2xl font-bold decoration-gray-300 decoration-4 hover:underline transition duration-500">
            {props.post.title}
          </h3>
        </Link>
        <div className="break-words text-md dark:text-gray-400 dark:text-opacity-70 font-sans line-clamp-6 text-gray-500 line-clamp-8">
          {props.post.description}
        </div>
      </div>
      <div className="col-span-4 relative">
        <div className="group absolute flex w-full hover:bg-black hover:bg-opacity-20 transition duration-500 h-60">
          <Link href={`/${props.post.slug}`} className="my-auto mt-4 mx-auto">
            <button className="mx-auto font-bold text-base antialiased  border-4  group-hover:bg-opacity-80 dark:group-hover:bg-opacity-50  backdrop-blur duration-500 transition py-1 px-2 hidden rounded-lg group-hover:bg-white dark:group-hover:bg-black group-hover:flex  justify-center items-center gap-2">
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
          <div className="h-60">
            <Image
              src={
                props.post.featuredImage ??
                'https://images.unsplash.com/photo-1679678691328-54929d271c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80s'
              }
              width={400}
              height={400}
              className="f-full object-cover h-60 w-full"
              alt={'' ?? ''}
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center col-span-12 my-4">
        <div className="flex mr-auto space-x-3 ">
          {/* post.tags */}
          {Array.from({ length: 4 }).map((tag) => (
            <div
              // key={tag.id}
              onClick={() => {
                // redirect the user to specific tag page, where all the post related to that tag should be shown
              }}
              className="flex items-center rounded-lg border-2  border-gray-300  dark:hover:text-white   dark:bg-opacity-50 bg-gray-200 dark:bg-black to-white  px-4 py-0 font-medium shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition  hover:border-black dark:border-white hover:text-gray-900 hover:shadow-black cursor-pointer dark:hover:bg-white dark:hover:bg-opacity-60"
            >
              TEST
              {/* {tag.name} */}
            </div>
          ))}
        </div>
        <div className="flex py-1 px-2 font-medium bg-gray-200 dark:bg-white dark:bg-opacity-10  mx-1">
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
                  setIsBookmarked((prevState) => !prevState);
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
                  setIsBookmarked((prevState) => !prevState);
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
