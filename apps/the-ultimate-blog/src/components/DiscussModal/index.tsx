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
import CommentSidebar from '../CommentsDiscuss';
import UnsplashGallery from '../UnsplashGallery';
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
import { BookmarkTech } from '@front-end-nx/shared/ui';
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

const Editor = dynamic(() => import('../Ckeditor'), {
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
  post: {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    text: string;
    html: string;
    slug: string;
    featuredImage: any;
    tags: any;
    docsUrl: string;
    githubUrl: string;
    webUrl: string;
    pricingUrl: string;
    tagsIds?: { id?: string }[];
    likes: string;
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
      postRoute.getLinkPosts.invalidate();
    },
    onError: () => {
      toast.error('You done fucked up');
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
    if (router.pathname.includes('/discussions')) {
      router.push('/discussions', undefined, { shallow: true });
    }
    resetIsPostModalOpen();
    setValue();
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
    <Modal id={id} isOpen={isPostModalOpen} onClose={handleClose}>
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
        className="relative flex min-h-[90vh] flex-col  space-y-5 "
      >
        {' '}
        <div className="grid  w-full grid-cols-12 border">
          <div className="col-span-8 min-h-[90vh] px-4 py-4">
            <Tabs
              defaultValue="Description"
              value={value ?? 'Description'}
              onValueChange={setValue}
              className="w-full"
            >
              <TabsList className="gap-2">
                <TabsTrigger value="Description">Description</TabsTrigger>

                <TabsTrigger value="Comments">Put Something here</TabsTrigger>
              </TabsList>
              <TabsContent value="Description">
                <div className="relative ">
                  <div className="flex w-full flex-col gap-8 ">
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
                      <h3 className="text-4xl">{title}</h3>
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
                    <div className="prose h-40 max-w-none">
                      <blockquote
                        className={`${
                          isReadMoreOpen ? '' : 'line-clamp-3'
                        }  min-h  relative  overflow-hidden  text-base dark:text-gray-200`}
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
                                  onClick={() =>
                                    setDescriptionEditorOpen(false)
                                  }
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
                    <div className="border">
                      <ul className="flex list-outside gap-2  p-0 px-4">
                        {tags?.map((tag) => {
                          return (
                            <li className="m-0 list-outside list-none ">
                              #{tag.name} Test
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
                        className="max-h-72 w-3/4 overflow-hidden bg-white object-contain "
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
                    <div className="w-full  rounded-xl border p-8 ">
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
                    {/* <div>
                      <LikePost
                        post={post}

                        // setShowSidebar={() => setShowCommentSidebar(true)}
                        // showSidebar={showCommentSidebar}

                        // you can replace this with your own logic for commenting
                      />
                    </div> */}
                    {/* <div className="border bg-red-500">
                    {post?.tags[0]?.name ?? 'NOT SHOWING'}
                  </div> */}
                  </div>
                  <div
                    className={`${
                      isOpenComments ? '' : 'hidden'
                    } relative mt-6`}
                  >
                    <button
                      onClick={() => setIsOpenComments(false)}
                      className="absolute right-5 top-5 z-10 border p-2"
                    >
                      <CgClose />
                    </button>
                    <CommentSidebar techId={id} />{' '}
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="Article">
                <div className="py- px-8">
                  {isHTMLEditorOpen ? (
                    <div className="modal-container">
                      <div className="modal-container">
                        <Controller
                          name="html"
                          control={control}
                          render={({ field }) => (
                            <div className="prose-p:font-sans prose-li:list-style dark:prose-pre:bg-black prose-pre:bg-black dark:prose-pre:border-2 prose-pre:border-2 prose-pre:border-t-[30px] dark:prose-pre:border-t-[30px] prose  prose-lg prose-a:font-bold prose-li:text-black prose-table:border-2 prose-table:shadow-lg prose-th:border prose-th:bg-gray-300 dark:prose-th:bg-opacity-0 prose-th:p-3 prose-td:border prose-td:p-3 prose-img:mx-auto prose-img:my-12 prose-img:max-h-custom prose-img:w-auto prose-img:border-2 dark:prose-headings:text-gray-300 prose-img:border-black prose-img:py-12 dark:prose-img:bg-black prose-img:shadow-[5px_5px_0px_0px_rgba(109,40,217)] dark:prose-p:text-gray-400 prose-li:font-sans dark:prose-li:text-gray-400 prose-img:shadow-black dark:prose-strong:text-red-400 dark:prose-code:text-white prose-table:text-gray-400 max-w-none pb-8 marker:text-black dark:text-gray-400 dark:text-opacity-80 dark:marker:text-gray-400">
                              {showEditor && (
                                <Editor
                                  {...field}
                                  onChange={(data: string) =>
                                    field && field.onChange(data)
                                  }
                                  value={html}
                                />
                              )}
                            </div>
                          )}
                        />
                      </div>
                      {!isSubmitting && (
                        <div className="flex gap-2 py-2">
                          <button
                            onClick={handleSubmit((formData) => {
                              setIsSubmitting(true);
                              setHTMLEditorOpen(false);
                              onSubmit(formData);
                            })}
                            className="flex items-center justify-center gap-1 rounded-lg border-2 p-1 px-3 transition hover:border-gray-700 hover:text-gray-700 dark:hover:border-white dark:hover:bg-gray-200"
                          >
                            Publish
                          </button>
                          <button
                            onClick={() => setHTMLEditorOpen(false)}
                            className="flex items-center justify-center gap-1 rounded-lg border-2 p-1 px-3 transition hover:border-gray-700 hover:text-gray-700 dark:hover:border-white dark:hover:bg-gray-200"
                          >
                            Cancel
                          </button>
                        </div>
                      )}
                      {errors.description && (
                        <p>{errors.description.message}</p>
                      )}
                    </div>
                  ) : (
                    <div className="relative">
                      <div className="prose-p:font-sans prose-li:list-style dark:prose-pre:bg-black prose-pre:bg-black dark:prose-pre:border-2 prose-pre:border-2 prose-pre:border-t-[30px] dark:prose-pre:border-t-[30px] prose  prose-lg prose-a:font-bold prose-li:text-black prose-table:border-2 prose-table:shadow-lg prose-th:border prose-th:bg-gray-300 dark:prose-th:bg-opacity-0 prose-th:p-3 prose-td:border prose-td:p-3 prose-img:mx-auto prose-img:my-12 prose-img:max-h-custom prose-img:w-auto prose-img:border-2 dark:prose-headings:text-gray-300 prose-img:border-black prose-img:py-12 dark:prose-img:bg-black prose-img:shadow-[5px_5px_0px_0px_rgba(109,40,217)] dark:prose-p:text-gray-400 prose-li:font-sans dark:prose-li:text-gray-400 prose-img:shadow-black dark:prose-strong:text-red-400 dark:prose-code:text-white prose-table:text-gray-400 max-w-none pb-8 marker:text-black dark:text-gray-400 dark:text-opacity-80 dark:marker:text-gray-400">
                        <Interweave
                          content={
                            html?.replaceAll(
                              'href=',
                              'target="_blank" rel="nofollow noreferrer" href='
                            ) ?? null
                          }
                        />
                        {/* <div
                          dangerouslySetInnerHTML={{
                            __html: html,
                          }}
                        ></div> */}
                      </div>

                      {test ? (
                        <button
                          className={`${
                            isHTMLEditorOpen ? 'hidden' : 'absolute'
                          }  right-4 top-5 rounded-lg bg-gray-500 p-1 hover:bg-gray-400`}
                          onClick={() => setHTMLEditorOpen(true)}
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
                    </div>
                  )}

                  {/* <div className="prose-p:font-sans prose-li:list-style dark:prose-pre:bg-black prose-pre:bg-black dark:prose-pre:border-2 prose-pre:border-2 prose-pre:border-t-[30px] dark:prose-pre:border-t-[30px] prose prose-lg  prose-a:font-bold prose-li:text-black prose-table:border-2 prose-table:shadow-lg prose-th:border prose-th:bg-gray-300 dark:prose-th:bg-opacity-0 prose-th:p-3 prose-td:border prose-td:p-3 prose-img:mx-auto prose-img:my-12 prose-img:max-h-custom prose-img:w-auto prose-img:border-2 dark:prose-headings:text-gray-300 prose-img:border-black prose-img:py-12 prose-img:px-52 prose-img:shadow-[5px_5px_0px_0px_rgba(109,40,217)] dark:prose-p:text-gray-400 prose-li:font-sans dark:prose-li:text-gray-400 prose-img:shadow-black dark:prose-strong:text-red-400 dark:prose-code:text-white prose-table:text-gray-400 max-w-none pb-8 marker:text-black dark:text-gray-400 dark:text-opacity-80 dark:marker:text-gray-400">
                    <Interweave
                      content={
                        html?.replaceAll(
                          'href=',
                          'target="_blank" rel="nofollow noreferrer" href='
                        ) ?? ''
                      }
                    />
                  </div> */}
                </div>
              </TabsContent>
              <TabsContent value="Comments"></TabsContent>
            </Tabs>{' '}
            {/* <Image src={featuredImage} fill /> */}
          </div>
          <div className="col-span-4 border-l p-2 px-4">
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
                <BookmarkTech post={post} />
                {/* <<div className="flex items-center gap-2 space-x-2 font-mono text-xl">
                  <Switch id="airplane-mode" />
                  <Label htmlFor="airplane-mode">Add to Stack</Label>
                </div>> */}
              </div>
              <div className="flex flex-col gap-2 rounded-lg border ">
                <h3 className="rounded-t-lg border-b p-2 px-4 font-mono text-xl font-bold">
                  Related Discussions
                </h3>
                <ul>
                  {postsByTag?.data?.slice(0, 7).map((post) => {
                    if (slug === post.slug) {
                      return null; // Exclude the post from mapping
                    }
                    return (
                      // Rest of your code for rendering each post
                      <Link
                        key={post?.id}
                        href="/techstack"
                        as={`/techstack/${post?.slug}`}
                        onClick={() => {
                          // resetIsPostModalOpen();
                          togglePosts(post?.id);
                        }}
                      >
                        {/* Rest of your code for rendering each post */}
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
