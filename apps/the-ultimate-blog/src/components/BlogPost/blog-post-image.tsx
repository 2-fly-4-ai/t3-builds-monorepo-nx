import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useUnsplashState } from '@front-end-nx/shared/ui';
import { useTitleEditorState } from '@front-end-nx/shared/ui';
import TextareaAutosize from 'react-textarea-autosize';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useSubmittingState } from '@front-end-nx/shared/ui';
import { trpc } from '../../utils/trpc';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useHTMLEditorState } from '@front-end-nx/shared/ui';
import { useDescriptionEditorState } from '@front-end-nx/shared/ui';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Editor = dynamic(() => import('../../components/Ckeditor'), {
  ssr: false,
  loading: () => <div>Loading editor...</div>,
});

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

interface DefaultValues {
  title?: string;
  description?: string;
  html?: string;
}

export const WriteFormSchema = z.object({
  title: z.string().min(20),
  description: z.string().min(60).optional(),
  html: z.string().min(100).optional(),
});

export default function BlogPostImage({
  getPost,
  slug,
  tableOfContentsResult,
}) {
  const { setIsUnsplashModalOpen } = useUnsplashState();
  const { isTitleEditorOpen, setTitleEditorOpen } = useTitleEditorState();
  const { isSubmitting, setIsSubmitting } = useSubmittingState();
  const { isDescriptionEditorOpen, setDescriptionEditorOpen } =
    useDescriptionEditorState();
  const { isHTMLEditorOpen, setHTMLEditorOpen } = useHTMLEditorState();

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
  const postRoute = trpc.useContext().post;

  function invalidateCurrentPostPage(postRoute, router) {
    postRoute.getPost.invalidate({ slug: slug });
  }

  const handleEditPost = trpc.post.editPost.useMutation({
    onSuccess: () => {
      toast.success('Post updated successfully');
      invalidateCurrentPostPage(postRoute, router);
      // getPost.revalidate();
    },
    onError: () => {
      toast.error('post creation failed');
    },
  });

  const onSubmit = async (formData) => {
    try {
      const _result = await handleEditPost.mutateAsync({
        id: getPost.data.id,
        title: formData.title,
        description: formData.description,
        html: formData.html,
      });

      // Invalidate the getPost query so that it is re-fetched with the latest data
      invalidateCurrentPostPage(postRoute, router);
      router.replace(`/posts/${slug}`, undefined, { scroll: false });
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
    <>
      {isTitleEditorOpen || isDescriptionEditorOpen || isHTMLEditorOpen ? (
        <div className=" sticky top-10 z-10 mx-auto mt-5 flex max-w-5xl items-center justify-center rounded-lg text-2xl   ">
          <p className=" rounded-l-lg border bg-gray-400 px-4 dark:bg-black">
            MASTER EDITOR
          </p>
          <div className="flex backdrop-blur">
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

      <div className="relative  flex w-full items-center justify-center  ">
        <div className="w-screen-lg mt-10 w-full space-y-8">
          <div className="relative flex aspect-video  w-auto items-center justify-center overflow-hidden rounded-lg border-2 bg-gray-300  shadow-lg dark:bg-black">
            {getPost.data?.featuredImage && (
              <Image
                src={getPost.data?.featuredImage ?? 'null'}
                alt={getPost.data?.title}
                priority //VERY IMPORTANT STOPS IMAGE RESIZING
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
              <div className="relative mx-10 w-full rounded-xl bg-gray-200 bg-opacity-90 px-4 pb-6  pt-4 font-medium    dark:bg-black dark:bg-opacity-80 ">
                {getPost.data?.authorId === currentUser?.data?.user?.id ? (
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
                  <h3 className="break-words text-4xl">
                    {getPost.data?.title}
                  </h3>
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

          <div className="prose relative max-w-none break-words rounded-lg border-2  bg-gray-100 px-4 py-4 pl-6  text-lg  text-slate-600 dark:border-white  dark:bg-white dark:bg-opacity-10  dark:text-gray-300">
            {!isDescriptionEditorOpen ? (
              getPost.data?.description
            ) : (
              <div>
                <TextareaAutosize
                  rows={5}
                  id="shortDescription"
                  className="h-full w-full  border-gray-300 outline-none focus:border-gray-600 dark:bg-black dark:bg-opacity-60 "
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
                {errors.description && <p>{errors.description.message}</p>}
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
                    <div className="prose-p:font-sans prose-table:rounded-lg  dark:prose-table:bg-white dark:prose-table:bg-opacity-10 prose-li:list-style dark:prose-pre:bg-black prose-pre:bg-black dark:prose-pre:border-2 prose-pre:border-2 prose-pre:border-t-[30px] dark:prose-pre:border-t-[30px] prose  prose-lg prose-a:font-bold prose-p:text-slate-600   prose-th:border prose-td:border-gray-400 prose-th:border-gray-400 prose-th:bg-gray-300 dark:prose-th:bg-opacity-0 prose-th:p-3 prose-td:border   prose-td:p-3  prose-img:my-12 prose-img:max-h-custom prose-img:border-2  dark:prose-headings:text-gray-300 prose-img:bg-inherit prose-img:py-12 dark:prose-img:bg-black  dark:prose-p:text-gray-400 prose-li:font-sans dark:prose-li:text-gray-400 prose-img:rounded-lg dark:prose-strong:text-red-400 dark:prose-code:text-white    prose-table:font-sans dark:prose-table:text-gray-300 prose-table:border-white dark:prose-table:shadow-lg prose-table:overflow-hidden prose-tr:bg-gray-100 prose-table:shadow-lg prose-figure:rounded-lg dark:prose-table:border-gray-400 prose-table:border-2 dark:prose-figure:bg-inherit dark:prose-table:bg-inherit dark:prose-tr:bg-white dark:prose-tr:bg-opacity-10 dark:prose-a:text-blue-500 prose-li:text-slate-600 max-w-none pb-8 marker:text-black dark:text-gray-400 dark:text-opacity-80 dark:marker:text-gray-400">
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
              <div className="prose-p:font-sans dark:prose-table:bg-white dark:prose-table:bg-opacity-10 prose-li:list-style dark:prose-pre:bg-black prose-pre:bg-black dark:prose-pre:border-2 prose-pre:border-2 prose-pre:border-t-[30px] dark:prose-pre:border-t-[30px] prose  prose-lg prose-a:font-bold prose-p:text-slate-600 prose-headings:font-semibold  prose-th:border prose-td:border-gray-400 prose-th:border-gray-400 prose-th:bg-gray-300 dark:prose-th:bg-opacity-0 prose-th:p-3 prose-td:border   prose-td:p-3  prose-img:my-12 prose-img:max-h-custom prose-img:border-2  dark:prose-headings:text-gray-300 prose-headings:text-slate-800 prose-img:bg-inherit prose-img:py-12 dark:prose-img:bg-black  dark:prose-p:text-gray-400 prose-li:font-sans dark:prose-li:text-gray-400 prose-img:rounded-lg dark:prose-strong:text-red-400 dark:prose-code:text-white    prose-table:font-sans dark:prose-table:text-gray-300 prose-table:border-gray-300  sdark:prose-table:shadow-lg prose-table:overflow-hidden prose-tr:bg-gray-100 prose-table:shadow-lg prose-figure:rounded-lg dark:prose-table:border-gray-400 prose-table:border-2 dark:prose-figure:bg-inherit dark:prose-table:bg-inherit dark:prose-tr:bg-white dark:prose-tr:bg-opacity-10 dark:prose-a:text-blue-500 prose-li:text-slate-600 max-w-none pb-8 marker:text-black dark:text-gray-400 dark:text-opacity-80 dark:marker:text-gray-400 ">
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
    </>
  );
}
