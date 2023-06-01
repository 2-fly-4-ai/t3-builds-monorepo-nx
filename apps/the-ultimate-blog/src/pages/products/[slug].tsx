import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { trpc } from '../../utils/trpc';
import { serialize } from 'next-mdx-remote/serialize';

import LikePost from 'libs/shared/ui/src/lib/like-post/like-post';
import LoadingSpinner from 'libs/shared/ui/src/lib/loading-spinner/loading-spinner';
import CommentSidebar from '../../components/CommentSidebar';
import TextareaAutosize from 'react-textarea-autosize';
import { Transition } from '@headlessui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import Modal from '../../components/Modal';
import UnsplashGallery from '../../components/UnsplashGallery';
import toast, { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useEffect } from 'react';
import Image from 'next/image';
import { Interweave } from 'interweave';
import { useSession } from 'next-auth/react';
import { prisma } from '../../utils/prisma';
import { useLikeStore } from '@front-end-nx/shared/ui';
import { getTableOfContentsHTML } from '@front-end-nx/shared/ui';
import { DashboardTableOfContents } from '@front-end-nx/shared/ui';
import NewsletterSubscribe from '../../components/NewsLetter/NewsletterSubscribe';
import Link from 'next/link';

import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { createServerSideHelpers } from '@trpc/react-query/server';
import { appRouter } from '../../server/trpc/router/_app';
import superjson from 'superjson';

//Dynamic Imports
const Editor = dynamic(() => import('../../components/Ckeditor'), {
  ssr: false,
  loading: () => <div>Loading editor...</div>,
});
const dayjs = require('dayjs');

//Typings
type WriteFormModalProps = {
  id: string;
  title: string;
  description: string;
  text: string;
  html: string;
  postId: string;
  slug: string;
  createdAt: Date;
};

//Zod Schema
export const WriteFormSchema = z.object({
  title: z.string().min(20),
  description: z.string().min(60).optional(),
  html: z.string().min(100).optional(),
});

//Functional compontne
export default function PostPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { tableOfContentsResult, postsByTag, slug } = props;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<WriteFormModalProps>({
    resolver: zodResolver(WriteFormSchema),
  });

  const router = useRouter();
  const currentUser = useSession();

  //state Management
  const { likedPosts, addLikedPost, removeLikedPost } = useLikeStore();
  const [showCommentSidebar, setShowCommentSidebar] = useState(false);
  const [isUnsplashModalOpen, setIsUnsplashModalOpen] = useState(false);
  const [isTitleEditorOpen, setTitleEditorOpen] = useState(false);
  const [isDescriptionEditorOpen, setDescriptionEditorOpen] = useState(false);
  const [isHTMLEditorOpen, setHTMLEditorOpen] = useState(false);
  const [isMASTEREditorOpen, setMASTEREditorOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const postRoute = trpc.useContext().post;
  const getPost = trpc.post.getCoursePost.useQuery({ slug: slug.toString() });
  // console.warn(getPost.data);
  // const postsByTag = trpc.post.getCoursePostsWithTag.useQuery({
  //   tags: getPost?.data?.tags.map((tag) => tag.name),
  // });

  // props?.tags?.[0]?.name,
  interface Item {
    title: string;
    url: string;
    items?: Item[];
  }

  interface Items {
    items?: Item[];
  }

  interface DefaultValues {
    title?: string;
    description?: string;
    html?: string;
  }

  const handleEditPost = trpc.post.editPost.useMutation({
    onSuccess: () => {
      toast.success('Post updated successfully');
      invalidateCurrentPostPage();
      // getPost.revalidate();
    },
  });

  const invalidateCurrentPostPage = useCallback(() => {
    postRoute.getPost.invalidate({ slug: router.query.slug as string });
  }, [postRoute.getPost, router.query.slug]);

  const onSubmit = async (formData) => {
    try {
      const _result = await handleEditPost.mutateAsync({
        title: formData.title,
        description: formData.description,
        html: formData.html,
      });

      // Invalidate the getPost query so that it is re-fetched with the latest data
      invalidateCurrentPostPage();

      // Return the result explicitly
      return _result;

      // Do something else after the post is updated successfully, e.g. redirect to the updated post page
    } catch (error) {
      console.error('Failed to update post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    let defaultValues: DefaultValues = {};
    defaultValues.title = getPost.data?.title;
    defaultValues.description = getPost.data?.description;
    defaultValues.html = getPost.data?.html;
    reset({ ...defaultValues });
  }, [getPost.data]);

  return (
    <MainLayout>
      <section className="flex justify-center">
        <section>
          {getPost.isSuccess && getPost.data && (
            <UnsplashGallery
              isUnsplashModalOpen={isUnsplashModalOpen}
              setIsUnsplashModalOpen={setIsUnsplashModalOpen}
              postId={getPost.data?.id}
              slug={getPost.data?.slug}
            />
          )}

          {getPost.isLoading && <LoadingSpinner />}
          {getPost.data?.id && (
            <Transition.Root show={showCommentSidebar} as={Fragment}>
              <Dialog
                as="div"
                onClose={() => setShowCommentSidebar(false)}
                static
              >
                <CommentSidebar
                  showCommentSidebar={showCommentSidebar}
                  setShowCommentSidebar={setShowCommentSidebar}
                  postId={getPost.data?.id}
                />
              </Dialog>
            </Transition.Root>
          )}

          {getPost.isSuccess && (
            <LikePost
              id={getPost.data?.id}
              setShowSidebar={() => setShowCommentSidebar(true)}
              showSidebar={showCommentSidebar}
              // you can replace this with your own logic for commenting
            />
          )}

          {isTitleEditorOpen || isDescriptionEditorOpen || isHTMLEditorOpen ? (
            <div className=" sticky z-10 mx-auto mt-5 flex max-w-5xl items-center justify-center rounded-lg   text-2xl">
              <p className=" rounded-l-lg border bg-gray-400 px-4">
                MASTER EDITOR
              </p>
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

          <div>
            <div className="relative  flex w-full items-center justify-center ">
              <div className="mt-10 w-full max-w-screen-md space-y-8">
                <div className="relative flex min-h-[60vh] w-auto items-center justify-center overflow-hidden rounded-lg bg-gray-300  shadow-lg dark:bg-black">
                  {getPost.data?.featuredImage && (
                    <Image
                      src={getPost.data?.featuredImage ?? 'null'}
                      alt={getPost.data?.title}
                      priority //FUCKSAKE DONT FORGET THIS
                      fill
                      className="object-cover"
                    />
                  )}

                  {getPost.data?.authorId === currentUser?.data?.user?.id && (
                    <div
                      id="this button isn't clickable"
                      onClick={() => setIsUnsplashModalOpen(true)}
                      className="absolute left-3 top-3 z-10 cursor-pointer rounded-lg bg-gray-500 p-1 transition duration-200 hover:bg-gray-400 "
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="text-white"
                        height="1.5em"
                        width="1.5em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4,5h13v7h2V5c0-1.103-0.897-2-2-2H4C2.897,3,2,3.897,2,5v12c0,1.103,0.897,2,2,2h8v-2H4V5z"></path>
                        <path d="M8 11L5 15 16 15 12 9 9 13z"></path>
                        <path d="M19 14L17 14 17 17 14 17 14 19 17 19 17 22 19 22 19 19 22 19 22 17 19 17z"></path>
                      </svg>
                    </div>
                  )}

                  {/* this is the featured image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative mx-10 w-full rounded-xl bg-gray-500 bg-opacity-50 px-4  pb-6 pt-4  font-medium text-gray-50 dark:bg-black dark:bg-opacity-80 ">
                      {getPost.data?.authorId ===
                      currentUser?.data?.user?.id ? (
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
                            className="text-white"
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
                        <h3 className="text-4xl">{getPost.data?.title}</h3>
                      ) : (
                        <div className="h-auto">
                          <TextareaAutosize
                            id="title"
                            rows={5}
                            className="min-h-full w-full resize-none overflow-visible  border-gray-300  text-4xl outline-none focus:border-gray-600 "
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
                    </div>
                  </div>
                </div>

                <div className="prose relative max-w-none  rounded-lg border-2 border-gray-800 bg-gray-100 px-4 py-4 pl-6 font-mono  text-lg dark:border-none dark:border-white dark:bg-black dark:bg-opacity-90 dark:text-white">
                  {!isDescriptionEditorOpen ? (
                    getPost.data?.description
                  ) : (
                    <div>
                      <TextareaAutosize
                        rows={5}
                        id="shortDescription"
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

                  {getPost.data?.authorId === currentUser?.data?.user?.id ? (
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
                        className="text-white"
                        viewBox="0 0 1024 1024"
                        height="1.3em"
                        width="1.3em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                      </svg>
                    </button>
                  ) : null}
                </div>

                {isHTMLEditorOpen ? (
                  <div className="modal-container">
                    <div className="modal-container">
                      <Controller
                        name="html"
                        control={control}
                        render={({ field }) => (
                          <div className="prose-p:font-sans prose-li:list-style dark:prose-pre:bg-black prose-pre:bg-black dark:prose-pre:border-2 prose-pre:border-2 prose-pre:border-t-[30px] dark:prose-pre:border-t-[30px] prose  prose-lg prose-a:font-bold prose-li:text-black prose-table:border-2 prose-table:shadow-lg prose-th:border prose-th:bg-gray-300 dark:prose-th:bg-opacity-0 prose-th:p-3 prose-td:border prose-td:p-3 prose-img:mx-auto prose-img:my-12 prose-img:max-h-custom prose-img:w-auto prose-img:border-2 dark:prose-headings:text-gray-300 prose-img:border-black prose-img:py-12 dark:prose-img:bg-black prose-img:shadow-[5px_5px_0px_0px_rgba(109,40,217)] dark:prose-p:text-gray-400 prose-li:font-sans dark:prose-li:text-gray-400 prose-img:shadow-black dark:prose-strong:text-red-400 dark:prose-code:text-white prose-table:text-gray-400 max-w-none pb-8 marker:text-black dark:text-gray-400 dark:text-opacity-80 dark:marker:text-gray-400">
                            <Editor
                              {...field}
                              onChange={(data: string) =>
                                field && field.onChange(data)
                              }
                              value={getPost.data?.html}
                            />
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
                    {errors.description && <p>{errors.description.message}</p>}
                  </div>
                ) : (
                  <div className="relative">
                    <div className="prose-p:font-sans prose-li:list-style dark:prose-pre:bg-black prose-pre:bg-black dark:prose-pre:border-2 prose-pre:border-2 prose-pre:border-t-[30px] dark:prose-pre:border-t-[30px] prose  prose-lg prose-a:font-bold prose-li:text-black prose-table:border-2 prose-table:shadow-lg prose-th:border prose-th:bg-gray-300 dark:prose-th:bg-opacity-0 prose-th:p-3 prose-td:border prose-td:p-3 prose-img:mx-auto prose-img:my-12 prose-img:max-h-custom prose-img:w-auto prose-img:border-2 dark:prose-headings:text-gray-300 prose-img:border-black prose-img:py-12 dark:prose-img:bg-black prose-img:shadow-[5px_5px_0px_0px_rgba(109,40,217)] dark:prose-p:text-gray-400 prose-li:font-sans dark:prose-li:text-gray-400 prose-img:shadow-black dark:prose-strong:text-red-400 dark:prose-code:text-white prose-table:text-gray-400 max-w-none pb-8 marker:text-black dark:text-gray-400 dark:text-opacity-80 dark:marker:text-gray-400">
                      {/* <Interweave
                  content={
                    html.replaceAll(
                      'href=',
                      'target="_blank" rel="nofollow noreferrer" href='
                    ) ?? null
                  }
                /> */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: tableOfContentsResult.html,
                        }}
                      ></div>
                    </div>

                    {getPost.data?.authorId === currentUser?.data?.user?.id ? (
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
                          className="text-white"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
                        </svg>
                      </button>
                    ) : null}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <div className="my-6 mb-10 flex items-center justify-start gap-4 rounded-lg bg-black p-4">
              {getPost?.data?.tags.map((tag) => (
                <div className="flex flex-col gap-2 py-2">
                  <Link href="">
                    <button class="whitespace-no-wrap flex items-center justify-center rounded-full border-2 bg-opacity-90 px-4 py-2 text-base font-medium leading-6 text-gray-500 shadow-sm hover:border-white  hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none dark:bg-black">
                      {tag?.name}
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SideSection */}
        <div className="sticky top-0 my-10  w-96 px-6 ">
          {/* Author Box */}
          <div className="flex  h-max max-w-[300px] items-center justify-start gap-4 rounded-lg bg-black  p-6  py-3 ">
            <div className="flex aspect-square h-16 w-16  ">
              <Image
                src={getPost?.data?.author?.image}
                width={400}
                height={400}
                alt="test"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold">An Article By: </span>
              <Link href={'test'} className="underline">
                {getPost?.data?.author?.name}
              </Link>
              <span className="text-sm">
                {dayjs(getPost?.data?.createdAt).format('DD/MM/YY')}
              </span>
            </div>
          </div>

          {/* TOC */}
          <div className="sticky top-6 ">
            <div className="mt-6 h-min  max-w-[300px]  rounded-lg  bg-black p-6">
              <DashboardTableOfContents toc={tableOfContentsResult.toc} />
            </div>

            {/* Newsletter Subscribe */}
            <div className=" mt-6 h-min max-w-[300px] rounded-lg   bg-black p-6 py-4   ">
              <NewsletterSubscribe />
            </div>

            {/* Related Posts */}
            <div className="sticky top-0 mt-6 flex  h-min max-w-[300px] flex-col gap-4 rounded-lg bg-black p-6    ">
              <span className="text-lg font-bold">Related Posts</span>
              <div className="flex flex-col gap-4">
                {postsByTag.map((post) => (
                  <div className="flex flex-col gap-2 border-b py-2">
                    <Link href="test flex flex-col">
                      <span className="font-bold">{post?.title}</span>
                    </Link>
                    {/* <span className="text-sm">{post?.description}</span> */}
                    <Link href={`/post/${post?.slug}`}>
                      <button className="border-l-4  border-red-500 px-2 ">
                        Read More
                      </button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string[] }>
) {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: { prisma },
    transformer: superjson,
  });

  const slug = context.params?.slug; // Access the first element of the slug array

  const postData = await helpers.post.getCoursePost.fetch({ slug });
  const tagData = await helpers.post.getCoursePostsWithTag.fetch({
    tags: postData?.tags.map((tag) => tag.name),
  });

  // Check if the post has HTML content, if so generate the table of contents
  let tableOfContentsResult: TableOfContentsHTML | null = null;
  if (postData?.html) {
    tableOfContentsResult = await getTableOfContentsHTML(postData.html);
  }

  // Convert createdAt to a serializable format
  const postsByTag = tagData.map((post) => ({
    ...post,
    createdAt: post.createdAt.toISOString(),
  }));

  // console.warn(postsByTag);

  return {
    props: {
      trpcState: helpers.dehydrate(),
      slug,
      tableOfContentsResult,
      postsByTag,
    },
    revalidate: 1,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pathsData = [];

  return {
    paths: pathsData,
    fallback: 'blocking',
  };
};
