import Modal from '../RouterModal';

import { useGlobalContextTechStore } from '@front-end-nx/shared/ui';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { trpc } from '../../utils/trpc';
import toast, { Toaster } from 'react-hot-toast';
import { ImSpinner8 } from '../../icons';
import React, { useEffect, useState, useRef, useContext } from 'react';
import { z } from 'zod';
import dynamic from 'next/dynamic';
export type TAG = { id: string; name: string };
import TagForm from '../TagFormTech';
import { FaTimes } from 'react-icons/fa';
import TagsAutocompletion from '../TagsAutocompletionTech';
import { useGlobalContextTechModalStore } from '@front-end-nx/shared/ui';
import { Interweave } from 'interweave';
import Image from 'next/image';
import dayjs from 'dayjs';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'libs/shared/ui/src/shadnui/ui/tabs';

import UnsplashGallery from '../UnsplashGallery/index-creation';

type TechFormModalProps = {
  post: {
    id: string;
    title: string;
    description: string;
    text: string;
    html: string;
    slug: string;
    featuredImage: any;
    tags: any;
    s;
    tagsIds?: { id?: string }[];
  };
};

export const WriteFormSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(10).optional(),
  text: z.string().min(100).optional(),
  html: z.string().min(100).optional(),
  featuredImage: z.string().optional(),
});

export default function TechModal({ post }: TechFormModalProps) {
  console.warn({ post });

  const postsByTag = trpc.post.getTechPostsByTag.useQuery({
    tag: post?.tags[0]?.name,
  });

  // State
  const [isUnsplashModalOpen, setIsUnsplashModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTags, setSelectedTags] = useState<TAG[]>([]);
  const [isTagCreateModalOpen, setIsTagCreateModalOpen] = useState(false);

  // Hooks
  const { posts, togglePosts } = useGlobalContextTechModalStore();
  const postRoute = trpc.useContext().post;
  // const getTags = trpc?.tag?.getTechTags?.useQuery();
  const editPost = trpc.post.editTechpost.useMutation({
    onSuccess: () => {
      toast.success('post created successfully');
      reset();
      postRoute.getTechPosts.invalidate();
    },
    onError: () => {
      toast.error('You done fucked up');
    },
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<TechFormModalProps>({
    resolver: zodResolver(WriteFormSchema),
  });

  // Variables
  const { id, title, description, text, html, slug, featuredImage } = post;
  const isPostModalOpen = posts.includes(id);
  const Editor = dynamic(() => import('../Ckeditor/index'), {
    ssr: false,
    loading: () => <div>Loading editor...</div>,
  });

  // Functions
  const onSubmit = async (data: TechFormModalProps) => {
    try {
      setSelectedImage(null);
      await editPost.mutateAsync(
        selectedTags.length > 0 ? { ...data, tagsIds: selectedTags } : data
      );
      reset(); // This clears the input fields
    } catch (error) {
      console.error(error);
    }
  };

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => togglePosts(id);

  /////TESTDATA

  const softwareLinks = {
    website: 'https://www.example.com',
    github: 'https://github.com/example',
    documentation: 'https://docs.example.com',
  };

  return (
    <Modal id={id} isOpen={isPostModalOpen} onClose={handleClose}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex min-h-[90vh] flex-col  space-y-5 pt-4"
      >
        <div className="grid  w-full grid-cols-12 border">
          <div className="col-span-8 min-h-[90vh] ">
            <Tabs defaultValue="Description" className="w-full">
              <TabsList className="gap-2">
                <TabsTrigger value="Description">Description</TabsTrigger>
                <TabsTrigger value="Article">Article</TabsTrigger>
                <TabsTrigger value="Comments">Comments</TabsTrigger>
              </TabsList>
              <TabsContent value="Description">
                <div className="flex flex-col gap-8 px-8 py-4">
                  <h1 className=" font-mono text-5xl dark:text-gray-200">
                    {title}
                  </h1>
                  <div className="prose">
                    <blockquote className="line-clamp-5 max-h-min overflow-hidden  text-lg dark:text-gray-200">
                      {description}
                    </blockquote>
                  </div>
                  <div className="flex w-full justify-center border bg-white">
                    <Image
                      src={featuredImage ?? ''}
                      width={400}
                      height={400}
                      alt="test"
                    />
                  </div>
                  <div>
                    <ul>
                      {post?.tags.map((tag) => {
                        return <li>{tag.name}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="border bg-red-500">
                    {post?.tags[0]?.name ?? 'NOT SHOWING'}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Article">
                <div className="py- px-8">
                  <div className="prose-p:font-sans prose-li:list-style dark:prose-pre:bg-black prose-pre:bg-black dark:prose-pre:border-2 prose-pre:border-2 prose-pre:border-t-[30px] dark:prose-pre:border-t-[30px] prose prose-lg  prose-a:font-bold prose-li:text-black prose-table:border-2 prose-table:shadow-lg prose-th:border prose-th:bg-gray-300 dark:prose-th:bg-opacity-0 prose-th:p-3 prose-td:border prose-td:p-3 prose-img:mx-auto prose-img:my-12 prose-img:max-h-custom prose-img:w-auto prose-img:border-2 dark:prose-headings:text-gray-300 prose-img:border-black prose-img:py-12 prose-img:px-52 prose-img:shadow-[5px_5px_0px_0px_rgba(109,40,217)] dark:prose-p:text-gray-400 prose-li:font-sans dark:prose-li:text-gray-400 prose-img:shadow-black dark:prose-strong:text-red-400 dark:prose-code:text-white prose-table:text-gray-400 max-w-none pb-8 marker:text-black dark:text-gray-400 dark:text-opacity-80 dark:marker:text-gray-400">
                    <Interweave
                      content={
                        html?.replaceAll(
                          'href=',
                          'target="_blank" rel="nofollow noreferrer" href='
                        ) ?? null
                      }
                      q
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>{' '}
            {/* <Image src={featuredImage} fill /> */}
          </div>
          <div className="col-span-4 border-l p-2">
            <div className="flex flex-col gap-6">
              <div className="col-span-2 flex flex-col gap-4 p-2">
                {' '}
                <h3 className="font-mono text-xl font-bold">Resources:</h3>
                <ul className="flex items-center gap-5 text-center font-mono">
                  {softwareLinks.website && (
                    <li>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="2.5em"
                        width="2.5em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z"></path>
                      </svg>
                      <a href={softwareLinks.website}>Website</a>
                    </li>
                  )}
                  {softwareLinks.github && (
                    <li>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 1024 1024"
                        height="2.5em"
                        width="2.5em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                      </svg>
                      <a href={softwareLinks.github}>GitHub</a>
                    </li>
                  )}
                  {softwareLinks.documentation && (
                    <li>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 16 16"
                        height="2.5em"
                        width="2.5em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"
                        ></path>
                      </svg>
                      <a href={softwareLinks.documentation}>Docs</a>
                    </li>
                  )}
                  {softwareLinks.documentation && (
                    <li>
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 24 24"
                        height="2.5em"
                        width="2.5em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="none"
                          d="M12,4c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S16.411,4,12,4z M13,16.915V18h-2v-1.08 C8.661,16.553,8,14.918,8,14h2c0.011,0.143,0.159,1,2,1c1.38,0,2-0.585,2-1c0-0.324,0-1-2-1c-3.48,0-4-1.88-4-3 c0-1.288,1.029-2.584,3-2.915V6.012h2v1.109c1.734,0.41,2.4,1.853,2.4,2.879h-1l-1,0.018C13.386,9.638,13.185,9,12,9 c-1.299,0-2,0.516-2,1c0,0.374,0,1,2,1c3.48,0,4,1.88,4,3C16,15.288,14.971,16.584,13,16.915z"
                        ></path>
                        <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
                        <path d="M12,11c-2,0-2-0.626-2-1c0-0.484,0.701-1,2-1c1.185,0,1.386,0.638,1.4,1.018l1-0.018h1c0-1.026-0.666-2.469-2.4-2.879 V6.012h-2v1.073C9.029,7.416,8,8.712,8,10c0,1.12,0.52,3,4,3c2,0,2,0.676,2,1c0,0.415-0.62,1-2,1c-1.841,0-1.989-0.857-2-1H8 c0,0.918,0.661,2.553,3,2.92V18h2v-1.085c1.971-0.331,3-1.627,3-2.915C16,12.88,15.48,11,12,11z"></path>
                      </svg>
                      <a href={softwareLinks.documentation}>Pricing</a>
                    </li>
                  )}
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="px-2 font-mono text-xl font-bold">
                  Related Tech
                </h3>
                <ul>
                  {postsByTag?.data?.map((post) => {
                    return (
                      <div className="group flex items-center space-x-5 px-3  py-2  hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10">
                        <div className="flex  aspect-video w-20  justify-center bg-gray-300 dark:bg-black dark:bg-white ">
                          {post?.featuredImage ? (
                            <Image
                              src={post?.featuredImage ?? null}
                              width={220}
                              height={220}
                              className="w-auto"
                            />
                          ) : (
                            <Image
                              src="https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/GitHub.jpeg"
                              width={200}
                              height={200}
                            />
                          )}
                        </div>
                        <div className="flex w-3/5 flex-col space-y-2">
                          <div className=" line-clamp-2 font-mono font-semibold decoration-gray-300 decoration-2 group-hover:underline ">
                            {post.title}
                          </div>
                          {/* <div className="text-sm line-clamp-2">
                      {bookmark.post.description}
                    </div> */}
                        </div>
                      </div>
                    );
                  })}
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          id="this button isn't clickable"
          onClick={() => setIsUnsplashModalOpen(true)}
          className="left-3  z-10  cursor-pointer rounded-lg bg-gray-400 p-1 transition duration-200 hover:bg-gray-50 "
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 24 24"
            height="1.5em"
            width="1.5em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4,5h13v7h2V5c0-1.103-0.897-2-2-2H4C2.897,3,2,3.897,2,5v12c0,1.103,0.897,2,2,2h8v-2H4V5z"></path>
            <path d="M8 11L5 15 16 15 12 9 9 13z"></path>
            <path d="M19 14L17 14 17 17 14 17 14 19 17 19 17 22 19 22 19 19 22 19 22 17 19 17z"></path>
          </svg>
        </div> */}

        {/* <div className="border">
          {' '}
          <Controller
            name="featuredImage"
            control={control}
            render={({ field }) => (
              <>
                <UnsplashGallery
                  isUnsplashModalOpen={isUnsplashModalOpen}
                  setIsUnsplashModalOpen={setIsUnsplashModalOpen}
                  handleImageSelect={(url) => {
                    field.onChange(url);
                    setSelectedImage(url); // Update selectedImage state with the selected URL
                  }}
                />
                {selectedImage && <img src={selectedImage} alt="Selected" />}
              </>
            )}
          />
        </div> */}
        {/* 
        {getTags.isSuccess && (
          <>
            <TagForm
              isOpen={isTagCreateModalOpen}
              onClose={() => setIsTagCreateModalOpen(false)}
            />
            <div className="my-4 flex w-full items-center space-x-4 ">
              <div className="z-10 w-4/5 border">
                <TagsAutocompletion
                  tags={getTags.data}
                  setSelectedTags={setSelectedTags}
                  selectedTags={selectedTags}
                />
              </div>
              <button
                onClick={() => setIsTagCreateModalOpen(true)}
                className="space-x-3 whitespace-nowrap rounded border border-gray-200 px-4 py-2 text-sm transition hover:border-gray-900 hover:text-gray-900"
              >
                Create Tag
              </button>
            </div>

            <div className="my-4 flex w-full flex-wrap items-center">
              {selectedTags.map((tag) => (
                <div
                  key={tag.id}
                  className="m-2 flex items-center justify-center space-x-2 whitespace-nowrap rounded-2xl bg-gray-200/50 px-5 py-3"
                >
                  <div>{tag.name}</div>
                  <div
                    onClick={() =>
                      setSelectedTags((prev) =>
                        prev.filter((currTag) => currTag.id !== tag.id)
                      )
                    }
                    className="cursor-pointer"
                  >
                    <FaTimes />
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {createPost.isLoading && (
          <div className="absolute bottom-2 flex items-center justify-center space-x-4">
            <div>
              <ImSpinner8 className="animate-spin" />
            </div>
            <div>Loading...</div>
          </div>
        )}

        <input
          type="text"
          id="title"
          className="h-full w-full border border-gray-300 p-4 outline-none focus:border-gray-600 dark:bg-black dark:bg-opacity-60"
          placeholder="Title of the Tech"
          {...register('title')}
        />
        <p>{errors.title?.message ?? 'Hello'}</p>
        <input
          type="text"
          id="shortDescription"
          className="h-full w-full  border border-gray-300 p-4 outline-none focus:border-gray-600 dark:bg-black dark:bg-opacity-60"
          placeholder="Short Description...."
          {...register('description')}
        />

        <p>{errors.description?.message}</p>

        <div className="modal-container">
          <Controller
            name="html"
            control={control}
            render={({ field }) => (
              <div className="prose-li:list-style prose prose-lg prose-a:font-bold prose-li:text-black prose-table:table-auto  prose-table:border-2 prose-tr:border-r  prose-th:border prose-th:p-2 prose-td:border prose-td:p-2 prose-img:mx-auto prose-img:my-12  prose-img:max-h-custom prose-img:w-auto prose-img:border-2 prose-img:border-black prose-img:py-12 prose-img:px-52 prose-img:shadow-[5px_5px_0px_0px_rgba(109,40,217)] prose-img:shadow-black prose-p:font-sans prose-li:list-style  prose-table:shadow-lg prose-th:bg-gray-300 dark:prose-th:bg-opacity-0 prose-img:max-h-custom  dark:prose-headings:text-gray-300 dark:prose-p:text-gray-400 prose-li:font-sans  dark:prose-li:text-gray-400 dark:prose-strong:text-red-400  dark:prose-code:text-white  min-h-[40vh]  w-full max-w-none    border   shadow-2xl marker:text-black focus-within:border-black    dark:bg-black dark:bg-opacity-60 dark:text-gray-400  dark:text-opacity-80 dark:marker:text-gray-400">
                <Editor
                  {...field}
                  onChange={(data: string) => field && field.onChange(data)}
                  value={field.value}
                />
              </div>
            )}
          />
        </div>

        <p>{errors.text?.message}</p>
        <div className="flex w-full justify-end">
          <button
            type="submit"
            className="flex items-center justify-center gap-1 rounded-lg border-2 p-1 px-3 transition hover:border-gray-700 hover:text-gray-700"
          >
            Publish
          </button>
        </div> */}
      </form>
    </Modal>
  );
}
