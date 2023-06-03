import Modal from '../../components/Modal';

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
import TagsAutocompletion from '../TagsAutocompletion';
import UnsplashGallery from '../UnsplashGallery/index-creation';

// Dynamic import for the editor component
const Editor = dynamic(() => import('../Ckeditor/index'), {
  ssr: false,
  loading: () => <div>Loading editor...</div>,
});

// Props for the TechFormModal
type TechFormModalProps = {
  title: string;
  shortDescription: string;
  html: string;
  postId: string;
  slug: string;
  setIsUnsplashModalOpen: (isUnsplashModalOpen: boolean) => void;
  featuredImage: any;
  webUrl: string;
  githubUrl: string;
  pricingUrl: string;
  docsUrl: string;
  description: string;
};

// Validation schema for the WriteTechFormModal
export const WriteTechFormSchema = z.object({
  title: z.string().min(1).max(40).optional(),
  shortDescription: z.string().min(10).optional(),
  html: z.string().min(100).optional(),
  featuredImage: z.string().optional(),
  webUrl: z.string().optional(),
  githubUrl: z.string().url().optional(),
  pricingUrl: z.string().url().optional(),
  docsUrl: z.string().url().optional(),
  description: z.string().min(10).optional(),
});

export default function WriteFormModalTech() {
  // State and context hooks
  const { isWriteTechModalOpen, setIsWriteTechModalOpen } =
    useGlobalContextTechStore();
  const [isUnsplashModalOpen, setIsUnsplashModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTags, setSelectedTags] = useState<TAG[]>([]);
  const [isTagCreateModalOpen, setIsTagCreateModalOpen] = useState(false);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<TechFormModalProps>({
    resolver: zodResolver(WriteTechFormSchema),
  });

  // trpc routes and mutations
  const postRoute = trpc.useContext().post;
  const getTags = trpc?.tag?.getTechTags?.useQuery();

  const createPost = trpc.post.createTechPost.useMutation({
    onSuccess: () => {
      toast.success('Post created successfully');
      reset();
      setIsWriteTechModalOpen(false);
      postRoute.getTechPosts.invalidate();
      // Beautiful implementation of Toast
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });

  // Form submit handler
  const onSubmit = async (data: TechFormModalProps) => {
    try {
      setSelectedImage(null);
      await createPost.mutateAsync(
        selectedTags.length > 0 ? { ...data, tagsIds: selectedTags } : data
      );
      reset(); // This clears the input fields
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal
      isOpen={isWriteTechModalOpen}
      onClose={() => {
        setIsWriteTechModalOpen(false);
        setIsTagCreateModalOpen(false);
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col  gap-4 pt-4"
      >
        <label
          htmlFor="pricingUrl"
          className="block font-medium text-gray-700 dark:text-gray-200"
        >
          Featured Image
        </label>
        <div
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
        </div>

        <div className="border">
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
        </div>

        {getTags.isSuccess && (
          <>
            <TagForm
              isOpen={isTagCreateModalOpen}
              onClose={() => setIsTagCreateModalOpen(false)}
            />
            <div>
              <label
                htmlFor="webUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                Select Tag
              </label>
              <div className=" flex w-full items-center space-x-4 ">
                <div className="z-10 w-4/5 border dark:border-gray-600 dark:focus:border-white">
                  <TagsAutocompletion
                    tags={getTags.data}
                    setSelectedTags={setSelectedTags}
                    selectedTags={selectedTags}
                  />
                </div>
                <button
                  onClick={() => setIsTagCreateModalOpen(true)}
                  className="space-x-3 whitespace-nowrap rounded border border-gray-200 px-4 py-2 text-sm transition hover:border-gray-900 hover:text-gray-900 dark:border-gray-600 dark:focus:border-white"
                >
                  Create Tag
                </button>
              </div>
              <div className="flex w-full flex-wrap items-center">
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

        <div className="flex flex-col gap-6 space-y-2 ">
          <div>
            <label
              htmlFor="webUrl"
              className="block font-medium text-gray-700 dark:text-gray-200"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              className="h-full w-full border border-gray-300 p-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
              placeholder="Title of the Tech"
              {...register('title')}
            />
            <p>{errors.title?.message ?? ''}</p>
          </div>
          {/* Resources Link Box */}
          <div className="grid grid-cols-2 gap-6 gap-y-8">
            <div>
              <label
                htmlFor="webUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                Website URL
              </label>
              <input
                type="text"
                id="webUrl"
                className="h-full w-full border border-gray-300 px-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black  dark:bg-opacity-60 dark:focus:border-white"
                placeholder="https://example.com"
                {...register('webUrl')}
              />
            </div>
            <div>
              <label
                htmlFor="githubUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                GitHub URL
              </label>
              <input
                type="text"
                id="githubUrl"
                className="h-full w-full border border-gray-300 px-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                placeholder="https://github.com/username/repo"
                {...register('githubUrl')}
              />
            </div>
            <div>
              <label
                htmlFor="pricingUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                Pricing URL
              </label>
              <input
                type="text"
                id="pricingUrl"
                className="h-full w-full border border-gray-300 px-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                placeholder="https://example.com/pricing"
                {...register('pricingUrl')}
              />
            </div>
            <div>
              <label
                htmlFor="docsUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                Documentation URL
              </label>
              <input
                type="text"
                id="docsUrl"
                className="h-full w-full border border-gray-300 px-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                placeholder="https://example.com/docs"
                {...register('docsUrl')}
              />
            </div>
          </div>

          {/* SHort Description */}

          {/* Main Html Editor */}
          <div className="modal-container">
            <div>
              <label
                htmlFor="docsUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                Short Description
              </label>
              <textarea
                rows={1}
                id="shortDescription"
                className="h-full w-full  border border-gray-300 p-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                placeholder="Short Description < 10 words...."
                {...register('shortDescription')}
              />
              <p>{errors.shortDescription?.message}</p>
            </div>
            <div>
              <label
                htmlFor="docsUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                Tech Description
              </label>
              <textarea
                rows={3}
                id="description"
                className="h-full w-full  border border-gray-300 p-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                placeholder="Description of the tech...."
                {...register('description')}
              />
              <p>{errors.description?.message}</p>
            </div>
            <label
              htmlFor="docsUrl"
              className="block font-medium text-gray-700 dark:text-gray-200"
            >
              Article
            </label>
            {Editor ? (
              <Controller
                name="html"
                control={control}
                render={({ field }) => (
                  <div className="prose-li:list-style prose prose-lg prose-a:font-bold prose-li:text-black prose-table:table-auto  prose-table:border-2 prose-tr:border-r  prose-th:border prose-th:p-2 prose-td:border prose-td:p-2 prose-img:mx-auto prose-img:my-12  prose-img:max-h-custom prose-img:w-full prose-img:border-2 prose-img:border-black prose-img:py-12  prose-img:shadow-[5px_5px_0px_0px_rgba(109,40,217)] prose-img:shadow-black prose-p:font-sans prose-li:list-style  prose-table:shadow-lg prose-th:bg-gray-300 dark:prose-th:bg-opacity-0 prose-img:max-h-custom  dark:prose-headings:text-gray-300 dark:prose-p:text-gray-400 prose-li:font-sans  dark:prose-li:text-gray-400 dark:prose-strong:text-red-400  dark:prose-code:text-white  min-h-[40vh]  w-full max-w-none    border   shadow-2xl marker:text-black focus-within:border-black    dark:border-gray-600 dark:bg-black dark:bg-opacity-60  dark:text-gray-400 dark:text-opacity-80 dark:marker:text-gray-400 dark:focus:border-white ">
                    <Editor
                      {...field}
                      onChange={(data: string) => field && field.onChange(data)}
                      value={field.value}
                    />
                  </div>
                )}
              />
            ) : null}
            <p>{errors.html?.message}</p>
          </div>
        </div>

        <div className="flex w-full justify-end">
          <button
            type="submit"
            className="my-2 flex items-center justify-center gap-1 rounded-lg border-2 p-1 px-3 transition hover:border-gray-700 hover:text-gray-700"
          >
            Publish
          </button>
        </div>
      </form>
    </Modal>
  );
}
