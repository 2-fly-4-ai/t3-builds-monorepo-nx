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
  const getTags = trpc?.tag?.getTechTags?.useQuery();
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
        <div className="grid h-full w-full grid-cols-8 border">
          <div className="col-span-5 h-full ">
            <Tabs defaultValue="Description" className="w-full">
              <TabsList>
                <TabsTrigger value="Description">Account</TabsTrigger>
                <TabsTrigger value="Comments">Password</TabsTrigger>
              </TabsList>
              <TabsContent value="Description">
                <div className="px-8 py-8">
                  <h1 className=" font-mono text-7xl dark:text-gray-200">
                    {title}
                  </h1>
                  <p className=" py-6 text-2xl dark:text-gray-200">
                    {description}
                  </p>
                  <div className="flex w-full justify-center border bg-white">
                    <Image
                      src={featuredImage ?? ''}
                      width={400}
                      height={400}
                      alt="test"
                    />
                  </div>
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
              <TabsContent value="Comments">
                <div></div>
                Change your password here.
              </TabsContent>
            </Tabs>{' '}
            {/* <Image src={featuredImage} fill /> */}
          </div>
          <div className="col-span-3 border-l p-2">
            <div className="col-span-2 ">
              <div className="col-span-2 border">
                {' '}
                <h3 className="font-mono text-lg font-bold">Related Tech</h3>
                <ul>
                  {softwareLinks.website && (
                    <li>
                      <a href={softwareLinks.website}>Website</a>
                    </li>
                  )}
                  {softwareLinks.github && (
                    <li>
                      <a href={softwareLinks.github}>GitHub</a>
                    </li>
                  )}
                  {softwareLinks.documentation && (
                    <li>
                      <a href={softwareLinks.documentation}>Documentation</a>
                    </li>
                  )}
                </ul>
              </div>
              <h3 className="font-mono text-lg font-bold">Related Tech</h3>
              <ul>
                {postsByTag?.data?.map((post) => {
                  return (
                    <div className="group flex items-center space-x-5 p-4 hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10">
                      <div className="flex  aspect-video w-24  justify-center bg-gray-300 dark:bg-black dark:bg-white ">
                        {post?.featuredImage ? (
                          <Image
                            src={post?.featuredImage ?? null}
                            width={220}
                            height={220}
                            className="max-h-20 w-auto"
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
                        <div className=" line-clamp-3 font-mono font-semibold decoration-gray-300 decoration-2 group-hover:underline ">
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
            <div className="col-span-2 border">Related Articles</div>
            <div className="col-span-2 border">Related Tags</div>
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
