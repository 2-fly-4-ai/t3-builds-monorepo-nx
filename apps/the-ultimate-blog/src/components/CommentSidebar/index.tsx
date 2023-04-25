import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HiXMark } from 'react-icons/hi2';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';
import { toast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useCommentStore } from 'libs/shared/ui/src/zustand/store';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
// import { useCounterStore } from 'libs/shared/ui/src/zustand/store';

type CommentSidebarProps = {
  showCommentSidebar: boolean;
  setShowCommentSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  postId: string;
};

type CommentFormType = { text: string };

export const commentFormSchema = z.object({
  text: z.string().min(3),
});

const CommentSidebar = ({
  showCommentSidebar,
  setShowCommentSidebar,
  postId,
}: CommentSidebarProps) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<CommentFormType>({
    resolver: zodResolver(commentFormSchema),
  });

  const { data: sessionData, status } = useSession();
  const postRoute = trpc.useContext().post;

  const submitComment = trpc.post.submitComment.useMutation({
    onSuccess: () => {
      toast.success('🥳');
      postRoute.getComments.invalidate({
        postId,
      });
      reset();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  // const { count, increment, decrement } = useCounterStore((state) => ({
  //   count: state[comment.id] || 0,
  //   increment: () => state[comment.id]++,
  //   decrement: () => state[comment.id]--,
  // }));

  const removeCommentMutation = trpc.post.removeComment.useMutation({
    onSuccess: () => {
      toast.success('Comment deleted successfully');
      getComments.refetch();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleRemoveComment = async (id: string) => {
    try {
      await removeCommentMutation.mutate({ id });
    } catch (error) {
      console.error(error);
    }
  };

  const getComments = trpc.post.getComments.useQuery({
    postId,
  });
  // /////////////////////////////////////////////
  const likeComment = trpc.post.likeComment.useMutation({
    onSuccess: () => {
      toast.success('post created successfully');
      postRoute.getComments.invalidate();
    },
    onError: () => {
      toast.error('You done fucked up');
    },
  });

  const dislikeComment = trpc.post.dislikeComment.useMutation({
    onSuccess: () => {
      toast.success('comment dislked successfully');
      postRoute.getComments.invalidate();
    },
    onError: () => {
      toast.error('You done fucked up');
    },
  });

  const { commentLikes, toggleLikeComment } = useCommentStore();
  const isCommentLiked = (commentId: string) => commentLikes[commentId];

  const handleLikeComment = async (commentId: string) => {
    await likeComment.mutate({
      commentId,
    });
    toggleLikeComment(commentId);
  };

  const handleDislikeComment = async (commentId: string) => {
    await dislikeComment.mutate({
      commentId,
    });
    toggleLikeComment(commentId);
  };

  // const isCommentLiked = (commentId: string) => {
  //   // You can replace this with your own logic for checking if the comment is liked by the current user
  //   return false;
  // };

  ///////////////////////////////////////////////

  return (
    <Transition.Root show={showCommentSidebar} as={Fragment}>
      <Dialog
        as="div"
        onClose={() => setShowCommentSidebar((show) => show)}
        static
      >
        <div className="fixed  right-0 top-0">
          <Transition.Child
            enter="transition duration-1000"
            leave="transition duration-1000"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative h-screen w-[200px] bg-white shadow-md sm:w-[400px]">
              <div className=" flex h-full w-full flex-col overflow-y-scroll px-6 z-10">
                <div className="mt-24  flex items-center justify-between  text-xl">
                  <h2 className=" font-medium">Responses (4)</h2>
                  <div>
                    <HiXMark
                      className="cursor-pointer"
                      onClick={() => setShowCommentSidebar(false)}
                    />
                  </div>
                </div>

                <form
                  onSubmit={handleSubmit((data) => {
                    submitComment.mutate({
                      ...data,
                      postId,
                    });
                  })}
                  className="my-6 flex flex-col items-end space-y-5"
                >
                  <textarea
                    id="comment"
                    rows={3}
                    className="w-full rounded-xl border border-gray-300 p-4 shadow-lg outline-none focus:border-gray-600"
                    placeholder="What are your thoughts?"
                    {...register('text')}
                  />
                  {isValid && (
                    <button
                      type="submit"
                      className="flex items-center space-x-3 rounded border border-gray-300 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
                    >
                      Comment
                    </button>
                  )}
                </form>

                <div className="flex flex-col items-center justify-center space-y-6">
                  {getComments.isSuccess &&
                    getComments.data.map((comment) => (
                      <div
                        className="flex w-full flex-col space-y-2 border-b border-b-gray-300 pb-4 last:border-none"
                        key={comment.id}
                      >
                        <div className="flex w-full items-center space-x-2 text-xs">
                          <div className="relative h-8 w-8 rounded-full bg-gray-400"></div>
                          <div>
                            <p className="font-semibold">{comment.user.name}</p>
                            <p>{dayjs(comment.createdAt).fromNow()}</p>
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          {comment.text}
                        </div>
                        <div className="flex gap-2">
                          <div className="flex  items-center">
                            {!isCommentLiked(comment.id) ? (
                              <button
                                className="bg-gray-500 px-2 font-bold text-white rounded-lg"
                                onClick={() => handleLikeComment(comment.id)}
                              >
                                Like
                              </button>
                            ) : (
                              <button
                                className="bg-gray-500 px-2 font-bold text-white rounded-lg"
                                onClick={() => handleDislikeComment(comment.id)}
                              >
                                Dislike
                              </button>
                            )}
                          </div>

                          {sessionData &&
                            sessionData.user.id === comment.userId && (
                              <button
                                className="bg-gray-400 font-bold hover:bg-red-500 hover:text-white hover:font-bold text-white  px-2 flex items-center rounded-lg"
                                onClick={() => handleRemoveComment(comment.id)}
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 1024 1024"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M292.7 840h438.6l24.2-512h-487z"></path>
                                  <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z"></path>
                                </svg>
                                Delete Comment
                              </button>
                            )}

                          <div>{`COUNT: ${comment.likes.length}`}</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CommentSidebar;
