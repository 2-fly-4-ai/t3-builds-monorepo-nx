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

export function PostCard(props: PostCardProps) {
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
    <div className="group grid grid-cols-10  gap-2 gap-x-8 rounded-xl border-2 p-4  py-4 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] transition duration-200 hover:shadow-[0px_0px_5px_7px_rgb(231,229,228)]">
      <div className="relative col-span-full  rounded-none ">
        <div className="group absolute flex h-full w-full transition duration-200 group-hover:bg-black group-hover:bg-opacity-20">
          <Link href={`/${props.post.slug}`} className="mx-auto my-auto mt-4">
            <button className="mx-auto hidden items-center justify-center  gap-2  rounded-lg border-4 px-2 py-1 text-sm font-medium antialiased backdrop-blur transition duration-500  group-hover:flex group-hover:bg-white group-hover:bg-opacity-80">
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
              className="f-full h-56 object-cover"
              alt={'' ?? ''}
            />
          </div>
        </Link>
      </div>
      <div className="group col-span-full items-center gap-3 py-1 transition-all duration-500  hover:bg-gray-200 ">
        <Link href={`/user/${props.post.author.username}` ?? null}>
          <div
            className=" flex cursor-pointer items-center gap-2   border-b-2  border-gray-200 p-1 shadow-sm
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
                <div className="text-lg font-medium capitalize underline">
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

      <div className="col-span-full   h-28">
        <Link href={`/${props.post.slug}`}>
          <div className="col-span-4 "></div>
          <h3 className=" line-clamp-4  cursor-pointer  text-xl font-bold decoration-gray-300 ">
            {props.post.title}
          </h3>
        </Link>
        {/* <div className="break-words line-clamp-3  text-md line text-gray-500">
          {props.post.description}
        </div> */}
      </div>

      <div className="col-span-full flex items-center">
        <div className="mr-auto flex space-x-3 ">
          {/* post.tags */}
          {Array.from({ length: 0 }).map((tag) => (
            <div
              // key={tag.id}
              onClick={() => {
                // redirect the user to specific tag page, where all the post related to that tag should be shown
              }}
              className="flex cursor-pointer items-center rounded-lg  border-2  border-gray-300 bg-gradient-to-tr from-gray-300 via-gray-200 to-white p-2 px-4 py-1 font-medium shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300  transition hover:border-black hover:text-gray-900 hover:shadow-black"
            >
              TEST
              {/* {tag.name} */}
            </div>
          ))}
        </div>
      </div>

      <div className=" col-span-full flex w-full">
        <div className="mx-1 flex border-2 border-gray-400 bg-gray-200 px-2 font-medium">
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

export default PostCard;
