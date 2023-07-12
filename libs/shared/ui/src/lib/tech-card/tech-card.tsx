import Image from 'next/image';
import Link from 'next/link';
import BiBookmarkPlus from '../../icons/BiBookMark';
import BiBookmarkMinus from '../../icons/BiBookmarkMinus';
import BiUpvote from '../../icons/BiUpvote';
import { useCallback, useState } from 'react';
import { useSession } from 'next-auth/react';
import { trpc } from '../../utils/trpc';
import toast, { Toaster } from 'react-hot-toast';
//lets use our zustand import here
import { useBookmarkStore } from '../../zustand/store';
import { useGlobalContextTechModalStore } from '../../zustand/store';
import { HiMagnifyingGlass } from 'react-icons/hi2';

/* eslint-disable-next-line */
export interface TechCardProps {
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
    shortDescription: string;
    techDescription: string;
    featuredImage: any;
    webUrl: string;
    techUrl: string;
    docsUrl: string;
    pricingUrl: string;
    id: string;
    likes: string;
    githubUrl: string;
  };
  bookmarkPost: UseMutationResult;
  removeBookmark: UseMutationResult;
}

export function TechCard({ post }: TechCardProps) {
  const {
    author: { image, name, username },
    createdAt,
    slug,
    title,
    shortDescription,
    techDescription,
    featuredImage,
    webUrl,
    techUrl,
    docsUrl,
    githubUrl,
    pricingUrl,
    id,
    likes,
  } = post;

  const { data: sessionData, status } = useSession();
  const postRoute = trpc.useContext().post;

  //state Handlers
  const { bookmarks, toggleBookmark } = useBookmarkStore();
  const { togglePosts } = useGlobalContextTechModalStore();
  const isBookmarked = bookmarks?.includes(id);

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
    toggleBookmark(id);
  }, [id, isBookmarked, toggleBookmark]);

  const handlePostsModalToggle = () => {
    togglePosts(id);
  };

  return (
    <div className="group grid w-[340px] grid-cols-10 gap-2 gap-x-8 overflow-hidden rounded-xl border-2 border-gray-300 bg-white    transition duration-200 hover:border-gray-800  dark:border-gray-300  dark:bg-opacity-10    ">
      <div className="relative col-span-full flex items-center rounded-none  ">
        <div onClick={handlePostsModalToggle}>
          <div className="group absolute flex h-full w-full transition duration-200 group-hover:bg-black  group-hover:bg-opacity-20">
            <Link
              href={`/techstack/articleURL`}
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
            <button className="absolute bottom-2 right-2 mx-auto hidden items-center justify-center  gap-2  rounded-lg border-2  px-2 py-1 text-base font-bold text-white antialiased backdrop-blur transition duration-200 group-hover:flex group-hover:bg-black  group-hover:bg-opacity-80 dark:group-hover:bg-black dark:group-hover:bg-opacity-50">
              <HiMagnifyingGlass />
            </button>
          </div>

          <div className=" flex h-60 w-full overflow-hidden ">
            <Image
              src={
                featuredImage ??
                'https://images.unsplash.com/photo-1679678691328-54929d271c3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80s'
              }
              width={400}
              height={400}
              className="h-full  object-cover"
              alt={'' ?? ''}
            />
          </div>
          {/* </Link> */}
        </div>
      </div>
      <div className="col-span-full grid p-4 pt-0">
        <div className="col-span-full   h-24">
          <Link href={`/${slug}`}>
            <h3 className=" line-clamp-2  cursor-pointer  text-xl font-bold decoration-gray-300 ">
              {title}
            </h3>
            <p className="line-clamp-2">{shortDescription}</p>
          </Link>
          {/* <div className="break-words line-clamp-3  text-md line text-gray-500">
          {description}
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

        <div className=" col-span-full flex w-full items-center ">
          <div className=" flex items-center border-gray-400 bg-slate-100 px-2  font-medium dark:bg-white dark:bg-opacity-10">
            <BiUpvote /> {likes.length}
          </div>
          {sessionData ? (
            <div className="text-gray-400 hover:text-black dark:hover:text-white">
              {isBookmarked ? (
                <BiBookmarkMinus
                  onClick={() => {
                    removeBookmark.mutate({
                      itemId: id,
                      itemType: 'tech',
                    });
                    // use the toggleBookmark function from the store and pass the post id
                    handleBookmarkToggle();
                  }}
                  className="cursor-pointer"
                />
              ) : (
                <BiBookmarkPlus
                  // countLikes={countlikes?.length()}
                  onClick={() => {
                    bookmarkPost.mutate({
                      itemId: id,
                      itemType: 'tech',
                    });
                    // use the toggleBookmark function from the store and pass the post id
                    handleBookmarkToggle();
                  }}
                  className="cursor-pointer"
                />
              )}
            </div>
          ) : null}

          <ul className="ml-auto mr-auto flex flex-wrap items-center gap-2 text-center font-mono font-bold">
            {webUrl && (
              <li className="">
                <a
                  href={webUrl}
                  className="flex items-center justify-center gap-1 rounded-lg  p-0 text-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1.6em"
                    width="1.6em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z"></path>
                  </svg>
                </a>
              </li>
            )}
            {githubUrl && (
              <li>
                <a
                  href={githubUrl}
                  className="flex items-center justify-center gap-2 rounded-lg p-0 text-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1.6em"
                    width="1.6em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                  </svg>
                </a>
              </li>
            )}
            {docsUrl && (
              <li>
                <a
                  href={docsUrl}
                  className="flex items-center justify-center gap-2 rounded-lg p-0 text-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1.6em"
                    width="1.6em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"
                    ></path>
                  </svg>
                </a>
              </li>
            )}
            {pricingUrl && (
              <li>
                <a
                  href={docsUrl}
                  className="flex items-center justify-center gap-2 rounded-lg p-0 text-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="1.6em"
                    width="1.6em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      d="M12,4c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S16.411,4,12,4z M13,16.915V18h-2v-1.08 C8.661,16.553,8,14.918,8,14h2c0.011,0.143,0.159,1,2,1c1.38,0,2-0.585,2-1c0-0.324,0-1-2-1c-3.48,0-4-1.88-4-3 c0-1.288,1.029-2.584,3-2.915V6.012h2v1.109c1.734,0.41,2.4,1.853,2.4,2.879h-1l-1,0.018C13.386,9.638,13.185,9,12,9 c-1.299,0-2,0.516-2,1c0,0.374,0,1,2,1c3.48,0,4,1.88,4,3C16,15.288,14.971,16.584,13,16.915z"
                    ></path>
                    <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
                    <path d="M12,11c-2,0-2-0.626-2-1c0-0.484,0.701-1,2-1c1.185,0,1.386,0.638,1.4,1.018l1-0.018h1c0-1.026-0.666-2.469-2.4-2.879 V6.012h-2v1.073C9.029,7.416,8,8.712,8,10c0,1.12,0.52,3,4,3c2,0,2,0.676,2,1c0,0.415-0.62,1-2,1c-1.841,0-1.989-0.857-2-1H8 c0,0.918,0.661,2.553,3,2.92V18h2v-1.085c1.971-0.331,3-1.627,3-2.915C16,12.88,15.48,11,12,11z"></path>
                  </svg>
                </a>
              </li>
            )}
          </ul>
          <div className="group col-span-full ml-auto items-center gap-3 break-words   transition-all duration-500  hover:bg-gray-200 ">
            <Link href={`/user/${post.author?.username}` ?? null}>
              <div
                className=" ml-auto flex cursor-pointer items-center gap-2   border-gray-200  shadow-sm
        "
              >
                <div className=" h-8 w-8 rounded-full bg-gray-300 ">
                  {post.author?.image && post.author?.image ? (
                    <Image
                      src={post.author?.image ?? ''}
                      width={50}
                      height={50}
                      className="ml-auto rounded-full"
                      alt={post.author?.name ?? ''}
                    />
                  ) : null}
                </div>
                {/* <div className="">
                  <div className="flex items-center gap-2 ">
                    <div className="text-lg font-bold capitalize underline dark:text-orange-400">
                      {post.author?.name}
                    </div>
                    |{' '}
                    <div className="text-sm font-medium">
                      {dayjs(post.createdAt).format('DD/MM/YY')}
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

export default TechCard;

{
  /* <div className="group col-span-full items-center gap-3 py-1 transition-all duration-500  hover:bg-gray-200 ">
        <Link href={`/user/${author.username}` ?? null}>
          <div
            className=" flex cursor-pointer items-center gap-2   border-b-2  border-gray-200 p-1 shadow-sm
        "
          >
            <div className="h-7 w-7 rounded-full bg-gray-300 ">
              {author.image && author.image ? (
                <Image
                  src={author.image ?? ''}
                  width={50}
                  height={50}
                  className="rounded-full"
                  alt={author.name ?? ''}
                />
              ) : null}
            </div>
            <div className="">
              <div className="flex items-center gap-2 ">
                <div className="text-lg font-bold capitalize underline dark:text-orange-400">
                  {author.name}
                </div>
                |{' '}
                <div className="text-sm font-medium">
                  {dayjs(createdAt).format('DD/MM/YY')}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div> */
}
