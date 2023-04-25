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
    <div className="group grid gap-3 grid-cols-10 gap-x-8  border-b-2 p-4 py-4 hover:bg-gray-100 ">
      <div className="rounded-none bg-gray-200 col-span-10">
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
      </div>
      <div className="col-span-full items-center gap-3  py-1 ">
        <Link href={`/user/${props.post.author.username}` ?? null}>
          <div
            className=" flex gap-2 items-center p-1 hover:bg-gray-200 hover:border-gray-400 cursor-pointer rounded-lg shadow-sm border-2 border-gray-200
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

      <div className="col-span-10  border  h-40">
        <Link href={`/${props.post.slug}`}>
          <div className="col-span-4 "></div>
          <h3 className="cursor-pointer text-2xl  line-clamp-3 font-bold decoration-indigo-400 decoration-2 group-hover:underline">
            {props.post.title}
          </h3>
        </Link>
        <div className="break-words line-clamp-2  text-md line text-gray-500">
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
      </div>

      <div className="border flex w-full">
        <div className="flex border-2 px-2 font-medium bg-gray-200 border-gray-400 mx-1">
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
