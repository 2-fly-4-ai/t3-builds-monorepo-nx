import Image from 'next/image';
import Link from 'next/link';
import BiBookmarkPlus from '../../icons/BiBookMark';
import BiBookmarkMinus from '../../icons/BiBookmarkMinus';
import { useCallback, useState } from 'react';
/* eslint-disable-next-line */
export interface PostCardProps {
  post: {
    author: {
      image: string;
      name: string;
    };
    createdAt: Date;
    bookmarks: string;
    slug: string;
    title: string;
    description: string;
    id: string;
    bookmarkPost: string;
    removeBookmarkt: string;
  };
}

export function PostCard(props: PostCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(
    Boolean(props.post.bookmarks.length > 0)
  );

  const dayjs = require('dayjs');

  return (
    <div className="group  grid min-h-[10rem] w-full grid-cols-12 gap-x-8 gap-y-2 border-b-2 p-6 py-4 hover:bg-gray-100">
      <div className="col-span-full flex items-center gap-3  py-1">
        <div className="h-10 w-10 rounded-full bg-gray-300 ">
          <Image
            src={props.post.author.image ?? ''}
            width={50}
            height={50}
            className="rounded-full"
            alt={props.post.author.name ?? ''}
          />
        </div>
        <div className="">
          <div className="flex items-center gap-2 ">
            <div className="text-lg font-medium capitalize">
              {props.post.author.name}
            </div>
            | <div>{dayjs(props.post.createdAt).format('DD/MM/YY')}</div>
          </div>
          <div className="text-sm underline">Teacher & Developer</div>
        </div>
      </div>

      <div className="col-span-8  space-y-2 border border-transparent">
        <Link href={`/${props.post.slug}`}>
          <h3 className="cursor-pointer text-2xl font-bold decoration-indigo-400 decoration-2 group-hover:underline">
            {props.post.title}
          </h3>
        </Link>
        <div className="break-words text-md  text-gray-500">
          {props.post.description}
        </div>
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
            className="ml-auto"
            alt={props.post.author.name ?? ''}
          />
        </div>
      </div>
      <div className="flex items-center col-span-12">
        <div className="flex mr-auto space-x-3 ">
          {/* post.tags */}
          {Array.from({ length: 4 }).map((tag) => (
            <div
              // key={tag.id}
              onClick={() => {
                // redirect the user to specific tag page, where all the post related to that tag should be shown
              }}
              className="flex items-center rounded-lg border-2  border-gray-300 bg-white p-2 px-4 py-1 font-medium shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition  hover:border-black hover:text-gray-900 hover:shadow-black cursor-pointer"
            >
              TEST
              {/* {tag.name} */}
            </div>
          ))}
        </div>
        <div className="text-gray-400 hover:text-black">
          {isBookmarked ? (
            <BiBookmarkMinus
              onClick={() => {
                props.removeBookmark.mutate({
                  postId: props.post.id,
                });
                // create a new state object with the opposite value of isBookmarked
                setIsBookmarked((prevState) => !prevState);
              }}
              className="cursor-pointer"
            />
          ) : (
            <BiBookmarkPlus
              onClick={() => {
                props.bookmarkPost.mutate({
                  postId: props.post.id,
                });
                // create a new state object with the opposite value of isBookmarked
                setIsBookmarked((prevState) => !prevState);
              }}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* add the rest of the code here */}
    </div>
  );
}

export default PostCard;
