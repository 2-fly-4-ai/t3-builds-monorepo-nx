import React, {
  useEffect,
  useState,
  useRef,
  useContext,
  useCallback,
} from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { FaTimes } from 'react-icons/fa';
import { ImSpinner8 } from '../../icons';
import dayjs from 'dayjs';
import toast, { Toaster } from 'react-hot-toast';
import { Interweave } from 'interweave';
import { z } from 'zod';
import Modal from '../RouterModal';
import TagForm from '../TagFormTech';
import CommentSidebar from '../CommentsTech';
import UnsplashGallery from '../../components/UnsplashGallery';
import { useGlobalContextTechStore } from '@front-end-nx/shared/ui';
import { useGlobalContextTechModalStore } from '@front-end-nx/shared/ui';
import TagsAutocompletion from '../TagsAutocompletionTech';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { trpc } from '../../utils/trpc';
import Link from 'next/link';
import LikePost from 'libs/shared/ui/src/lib/like-post/like-post-tech';
import { useTabStore } from '@front-end-nx/shared/ui';
import { Switch } from '@front-end-nx/shared/ui';
import { Label } from '@radix-ui/react-label';
import { Bookmarkpost } from '@front-end-nx/shared/ui';
import { useSession } from 'next-auth/react';
import TextareaAutosize from 'react-textarea-autosize';

export type TAG = { id: string; name: string };

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'libs/shared/ui/src/shadnui/ui/tabs';
import {
  BiBook,
  BiBookBookmark,
  BiCloset,
  BiComment,
  BiLink,
  BiShare,
  BiUpvote,
} from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { FcReading } from 'react-icons/fc';

const Editor = dynamic(() => import('../../components/Ckeditor'), {
  ssr: false,
  loading: () => <div>Loading editor...</div>,
});

type ModalProps = {
  title: string;
  description: string;
  html: string;
  post: any; // Replace 'any' with the appropriate type for 'post'
};

type TechFormModalProps = {
  id: string;
  shortDescription: string;
  tile: string;
  text: string;
  slug: string;
  featuredImage: any;
  tags: any;
  docsUrl: string;
  githubUrl: string;
  webUrl: string;
  pricingUrl: string;
  tagsIds?: { id?: string }[];
  likes: string;
} & ModalProps;

export const WriteFormSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(10).optional(),
  text: z.string().min(100).optional(),
  html: z.string().min(100).optional(),
  featuredImage: z.string().optional(),
});

export default function TechModal({ post }: TechFormModalProps) {
  const router = useRouter();
  const [shouldReload, setShouldReload] = useState(false);
  // generateMetadata({ post });
  //Form Logic
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
  const {
    id,
    title,
    text,
    html,
    slug,
    tags,
    featuredImage,
    webUrl,
    githubUrl,
    docsUrl,
    pricingUrl,
    description,
  } = post;

  const test = true;
  const { value, setValue } = useTabStore();
  const postUser = id;
  const currentUser = useSession();

  // const getTags = trpc?.tag?.getTechTags?.useQuery();

  // State Initializers

  const [isOpenComments, setIsOpenComments] = useState(false);

  const [isUnsplashModalOpen, setIsUnsplashModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedTags, setSelectedTags] = useState<TAG[]>([]);
  const [isTagCreateModalOpen, setIsTagCreateModalOpen] = useState(false);

  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
  const { togglePosts, posts, resetIsPostModalOpen } =
    useGlobalContextTechModalStore();
  const postRoute = trpc.useContext().post;
  const isPostModalOpen = posts[id];

  const [isTitleEditorOpen, setTitleEditorOpen] = useState(false);
  const [isDescriptionEditorOpen, setDescriptionEditorOpen] = useState(false);
  const [isHTMLEditorOpen, setHTMLEditorOpen] = useState(false);
  const [isUrlBoxEditorOpen, setIsUrlBoxEditorOpen] = useState(false);
  const [isMASTEREditorOpen, setMASTEREditorOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEditor, setShowEditor] = useState<boolean>(false);

  const postsByTag = trpc.post?.getTechPostsByTag.useQuery({
    tags: post?.tags?.map((tag) => tag.name),
  });

  const handleEditPost = trpc.post.editTechpost.useMutation({
    onSuccess: () => {
      toast.success('post created successfully');
      reset();
      postRoute.getTechPosts.invalidate();
    },
    onError: () => {
      toast.error('post creation failed');
    },
  });

  const onSubmit = async (formData) => {
    try {
      const _result = await handleEditPost.mutateAsync({
        id: id,
        title: formData.title,
        description: formData.description,
        html: formData.html,
      });

      return _result;
    } catch (error) {
      console.error('Failed to update post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    // if (router.pathname.includes('/techstack')) {
    //   router.push('/techstack', undefined, { shallow: true });
    // }
    resetIsPostModalOpen();
    setValue;
  };

  useEffect(() => {
    let defaultValues = {} as ModalProps;
    defaultValues.title = title; // Replace 'Example Title' with your actual title value
    defaultValues.description = description; // Replace 'Example Tech Description' with your actual tech description value
    defaultValues.html = html; // Replace 'Example HTML' with your actual HTML value
    reset({ ...defaultValues });

    const handlePopstate = () => {
      // Reload the page
      window.location.reload();
    };

    const handleBeforeUnload = () => {
      handleClose();
    };

    // Listen for the popstate event
    window.addEventListener('popstate', handlePopstate);
    window.addEventListener('beforeunload', handleBeforeUnload);
    setShowEditor(true);

    // Clean up the event listeners
    return () => {
      window.removeEventListener('popstate', handlePopstate);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <Modal isOpen={isPostModalOpen} onClose={handleClose}>
      {isTitleEditorOpen || isDescriptionEditorOpen || isHTMLEditorOpen ? (
        <div className="z-10 mx-auto my-2 flex max-w-5xl items-center justify-center rounded-lg    text-2xl">
          <p className=" rounded-l-lg bg-gray-400 px-4">MASTER EDITOR</p>
          <div className=" flex ">
            <button
              onClick={handleSubmit((formData) => {
                setIsSubmitting(true);
                onSubmit(formData);
                setTitleEditorOpen(false);
                setDescriptionEditorOpen(false);
                setHTMLEditorOpen(false);
              })}
              className="flex items-center justify-center gap-1  border  px-3 transition hover:border-gray-700  dark:hover:border-white dark:hover:bg-green-400"
            >
              PUBLISH
            </button>
            <button
              onClick={handleSubmit(() => {
                setIsSubmitting(false);
                setTitleEditorOpen(false);
                setDescriptionEditorOpen(false);
                setHTMLEditorOpen(false);
              })}
              className="rounded-r-lg border px-4 hover:bg-red-400"
            >
              CANCEL
            </button>
          </div>
        </div>
      ) : null}
      <div
        // onSubmit={handleSubmit(onSubmit)}
        className="relative flex  flex-col  space-y-5   p-1"
      >
        {' '}
        <div className="grid  w-full grid-cols-12 rounded-xl border bg-white dark:bg-inherit">
          <div className="col-span-8  p-6">
            <div className="relative ">
              <div className="flex w-full flex-col gap-6 ">
                {test ? (
                  <button
                    className={`${
                      isTitleEditorOpen ? 'hidden' : 'absolute'
                    }  right-4 rounded-lg bg-gray-500 p-1 hover:bg-gray-400`}
                    onClick={() => setTitleEditorOpen(true)}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="1.5em"
                      width="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                    </svg>
                  </button>
                ) : null}
                {!isTitleEditorOpen ? (
                  <h3 className=" py-1 text-4xl">{title}</h3>
                ) : (
                  <div className="h-auto">
                    <TextareaAutosize
                      id="title"
                      rows={5}
                      className="min-h-full w-full resize-none overflow-visible  border-gray-300  text-4xl outline-none focus:border-gray-600 dark:bg-black dark:bg-opacity-60"
                      {...register('title', { required: true })}
                    />
                    {errors.title && (
                      <p className="text-red-500">Title is required</p>
                    )}
                    {!isSubmitting && (
                      <div className="flex gap-2 py-2">
                        <button
                          onClick={handleSubmit((formData) => {
                            setIsSubmitting(true);
                            setTitleEditorOpen(false);
                            onSubmit(formData);
                          })}
                          className="flex items-center justify-center gap-1 rounded-lg border-2 p-1 px-3 transition hover:border-gray-700 hover:text-gray-700 dark:hover:border-white dark:hover:bg-gray-200"
                        >
                          Publish
                        </button>
                        <button
                          onClick={() => setTitleEditorOpen(false)}
                          className="flex items-center justify-center gap-1 rounded-lg border-2 p-1 px-3 transition hover:border-gray-700 hover:bg-red-400 hover:text-gray-700 dark:hover:border-white"
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                )}
                <div className="prose max-w-none ">
                  <blockquote
                    className={`${
                      isReadMoreOpen ? '' : 'line-clamp-3'
                    }   relative overflow-hidden  py-1 text-base transition-all  duration-500 dark:text-gray-200`}
                  >
                    {!isDescriptionEditorOpen ? (
                      description
                    ) : (
                      <div>
                        <TextareaAutosize
                          rows={8}
                          id="description"
                          className="h-full w-full  border-gray-300 outline-none focus:border-gray-600 dark:bg-black dark:bg-opacity-60"
                          // defaultValue={description}
                          {...register('description')}
                        />
                        {!isSubmitting && (
                          <div className="flex gap-2 py-2">
                            <button
                              onClick={handleSubmit((formData) => {
                                setIsSubmitting(true);
                                setDescriptionEditorOpen(false);
                                onSubmit(formData);
                              })}
                              className="flex items-center justify-center gap-1 rounded-lg border-2 p-1 px-3 transition hover:border-gray-700 hover:text-gray-700 dark:hover:border-white dark:hover:bg-gray-200"
                            >
                              Publish
                            </button>
                            <button
                              onClick={() => setDescriptionEditorOpen(false)}
                              className="flex items-center justify-center gap-1 rounded-lg border-2 p-1 px-3 transition hover:border-gray-700 hover:bg-red-400 hover:text-gray-700 dark:hover:border-white"
                            >
                              Cancel
                            </button>
                          </div>
                        )}
                        {errors.description && (
                          <p>{errors.description.message}</p>
                        )}
                      </div>
                    )}

                    {test ? (
                      <button
                        className={`${
                          isDescriptionEditorOpen ? 'hidden' : 'absolute'
                        }  right-4 top-4 rounded-lg bg-gray-500 p-1 hover:bg-gray-400`}
                        onClick={() => setDescriptionEditorOpen(true)}
                      >
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 1024 1024"
                          height="1.5em"
                          width="1.5em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                        </svg>
                      </button>
                    ) : null}
                  </blockquote>

                  {!isReadMoreOpen ? (
                    <button
                      onClick={() => setIsReadMoreOpen(true)}
                      className="group relative  inline-flex items-center justify-start overflow-hidden rounded-full border px-5 py-1 font-bold"
                    >
                      <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-white opacity-[3%]"></span>
                      <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                        Read More
                      </span>
                      <span className="absolute inset-0 rounded-full border-2 border-white"></span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsReadMoreOpen(false)}
                      className="group relative inline-flex items-center justify-start overflow-hidden rounded-full px-5 py-1 font-bold"
                    >
                      <span className="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-white opacity-[3%]"></span>
                      <span className="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-white opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                        Read Less
                      </span>
                      <span className="absolute inset-0 rounded-full border-2 border-white"></span>
                    </button>
                  )}
                </div>
                <div className="">
                  <ul className="flex list-outside gap-2  p-0 px-4">
                    {tags?.map((tag) => {
                      return (
                        <li className="m-0 list-outside list-none ">
                          #{tag.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="relative flex   justify-start ">
                  <Image
                    src={featuredImage ?? ''}
                    width={400}
                    height={400}
                    alt="test"
                    className="max-h-80 w-3/4 overflow-hidden bg-white object-contain "
                  />
                  <div className="border">
                    {' '}
                    <UnsplashGallery
                      isUnsplashModalOpen={isUnsplashModalOpen}
                      setIsUnsplashModalOpen={setIsUnsplashModalOpen}
                      postId={id}
                      slug={slug}
                    />
                  </div>
                  <button
                    id="this button isn't clickable"
                    onClick={() => setIsUnsplashModalOpen(true)}
                    className="absolute right-5 top-5 z-10  cursor-pointer rounded-lg bg-gray-400 p-1 transition duration-200 hover:bg-gray-50 "
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
                  </button>
                </div>
                <div className="mb-4 w-full rounded-xl border p-8 ">
                  <div className="flex w-full justify-between">
                    <button className=" flex items-center  gap-2 text-lg font-medium">
                      <BiUpvote />
                      Upvote
                    </button>

                    <button
                      onClick={() => setIsOpenComments(true)}
                      className="flex items-center  gap-2 text-lg font-medium"
                    >
                      <BiComment />
                      Comment
                    </button>
                    <button className="flex items-center  gap-2 text-lg font-medium">
                      <BiBookBookmark />
                      BookMark
                    </button>
                    <button className="flex items-center  gap-2 text-lg font-medium">
                      <BiShare />
                      Share
                    </button>
                  </div>
                </div>
              </div>
              <div className={`${isOpenComments ? '' : 'hidden'} relative`}>
                <button
                  onClick={() => setIsOpenComments(false)}
                  className="absolute right-5 top-5 z-10 border bg-red-400 p-2"
                >
                  <CgClose />
                </button>
                <CommentSidebar techId={id} />{' '}
              </div>
            </div>
          </div>
          <div className="col-span-4 border-l p-6">
            <div className="flex flex-col gap-6 p-2">
              <div className="col-span-2 flex flex-col gap-4 space-y-2 ">
                <button className="flex items-center gap-2 rounded-lg border px-4 py-2">
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
                  Read Post
                </button>
                <Bookmarkpost post={post} />
                {/* <<div className="flex items-center gap-2 space-x-2 font-mono text-xl">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Add to Stack</Label>
                </div>> */}

                <div className="relative flex flex-col gap-4">
                  {test ? (
                    <button
                      className={`${
                        isUrlBoxEditorOpen ? 'hidden' : 'absolute'
                      }  right-4 rounded-lg bg-gray-500 p-1 hover:bg-gray-400`}
                      onClick={() => setIsUrlBoxEditorOpen(true)}
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 1024 1024"
                        height="1.5em"
                        width="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                      </svg>
                    </button>
                  ) : null}

                  {isUrlBoxEditorOpen && !isSubmitting && (
                    <div className="flex gap-2 py-2">
                      <button
                        onClick={handleSubmit((formData) => {
                          setIsSubmitting(true);
                          setIsUrlBoxEditorOpen(false);
                          onSubmit(formData);
                        })}
                        className="flex items-center justify-center gap-1 rounded-lg border-2 p-1 px-3 transition hover:border-gray-700 hover:text-gray-700 dark:hover:border-white dark:hover:bg-gray-200"
                      >
                        Publish
                      </button>
                      <button
                        onClick={() => setIsUrlBoxEditorOpen(false)}
                        className="flex items-center justify-center gap-1 rounded-lg border-2 p-1 px-3 transition hover:border-gray-700 hover:bg-red-400 hover:text-gray-700 dark:hover:border-white"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                  {isUrlBoxEditorOpen ? (
                    <div className="grid grid-cols-2 gap-4 ">
                      <div className="">
                        <label
                          htmlFor="webUrl"
                          className="block font-medium text-gray-700 dark:text-gray-200"
                        >
                          Website URL
                        </label>
                        <input
                          type="text"
                          id="webUrl"
                          className="h-10 w-full border border-gray-300 px-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black  dark:bg-opacity-60 dark:focus:border-white"
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
                          className="h-10 w-full border border-gray-300 px-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
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
                          className="h-10 w-full border border-gray-300 px-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
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
                          className="h-10 w-full border border-gray-300 px-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                          placeholder="https://example.com/docs"
                          {...register('docsUrl')}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-lg border px-4 py-2">
                      <h3 className="font-mono text-xl font-bold">
                        Resources:
                      </h3>
                      <ul className="flex flex-wrap items-center gap-4 text-center font-mono font-bold">
                        {webUrl && (
                          <li className="">
                            <a
                              href={webUrl}
                              className="flex items-center justify-center gap-1 rounded-lg border  p-2 text-center"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 1024 1024"
                                height="2em"
                                width="2em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z"></path>
                              </svg>
                              Website
                            </a>
                          </li>
                        )}
                        {githubUrl && (
                          <li>
                            <a
                              href={githubUrl}
                              className="flex items-center justify-center gap-2 rounded-lg border p-2 text-center"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 1024 1024"
                                height="2em"
                                width="2em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                              </svg>
                              GitHub
                            </a>
                          </li>
                        )}
                        {docsUrl && (
                          <li>
                            <a
                              href={docsUrl}
                              className="flex items-center justify-center gap-2 rounded-lg border p-2 text-center"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 16 16"
                                height="2em"
                                width="2em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"
                                ></path>
                              </svg>
                              Docs
                            </a>
                          </li>
                        )}
                        {pricingUrl && (
                          <li>
                            <a
                              href={docsUrl}
                              className="flex items-center justify-center gap-2 rounded-lg border p-2 text-center"
                            >
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="2em"
                                width="2em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill="none"
                                  d="M12,4c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S16.411,4,12,4z M13,16.915V18h-2v-1.08 C8.661,16.553,8,14.918,8,14h2c0.011,0.143,0.159,1,2,1c1.38,0,2-0.585,2-1c0-0.324,0-1-2-1c-3.48,0-4-1.88-4-3 c0-1.288,1.029-2.584,3-2.915V6.012h2v1.109c1.734,0.41,2.4,1.853,2.4,2.879h-1l-1,0.018C13.386,9.638,13.185,9,12,9 c-1.299,0-2,0.516-2,1c0,0.374,0,1,2,1c3.48,0,4,1.88,4,3C16,15.288,14.971,16.584,13,16.915z"
                                ></path>
                                <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
                                <path d="M12,11c-2,0-2-0.626-2-1c0-0.484,0.701-1,2-1c1.185,0,1.386,0.638,1.4,1.018l1-0.018h1c0-1.026-0.666-2.469-2.4-2.879 V6.012h-2v1.073C9.029,7.416,8,8.712,8,10c0,1.12,0.52,3,4,3c2,0,2,0.676,2,1c0,0.415-0.62,1-2,1c-1.841,0-1.989-0.857-2-1H8 c0,0.918,0.661,2.553,3,2.92V18h2v-1.085c1.971-0.331,3-1.627,3-2.915C16,12.88,15.48,11,12,11z"></path>
                              </svg>
                              Pricing
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 rounded-lg border ">
                <h3 className="rounded-t-lg border-b p-2 px-4 font-mono text-xl font-bold">
                  Related Tech
                </h3>
                <ul>
                  {postsByTag?.data?.slice(0, 5).map((post) => {
                    if (slug === post.slug) {
                      return null; // Exclude the post from mapping
                    }
                    return (
                      <Link
                        key={post?.id}
                        href="/techstack"
                        as={`/techstack/${post?.slug}`}
                        onClick={() => {
                          // resetIsPostModalOpen();
                          togglePosts(post?.id);
                        }}
                      >
                        <div className="group flex items-center space-x-5 px-4  py-2  hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10">
                          <div className="flex  aspect-video w-[88px]  justify-center bg-gray-300 dark:bg-white  ">
                            {post?.featuredImage ? (
                              <Image
                                src={post?.featuredImage}
                                width={220}
                                height={220}
                                className=" object-cover"
                                alt={title}
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
                              {post?.title}
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  <li></li>
                </ul>
                <div className="rounded-b-lg border-t p-2 px-4">
                  See All Posts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
