import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';
import { toast } from 'react-hot-toast';
import { useSession } from 'next-auth/react';
import { useCommentStore } from 'libs/shared/ui/src/zustand/store';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
dayjs.extend(relativeTime);

//Typings
type CommentSidebarProps = {
  postId: string;
};
type CommentFormType = { text: string };

//Zod Schema
export const commentFormSchema = z.object({
  text: z.string().min(3),
});

//Functional Component
export default function CommentSidebar({ postId }: CommentSidebarProps) {
  //Form
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

  //State Handlers
  const { commentLikes, toggleLikeComment } = useCommentStore();
  const isCommentLiked = (commentId: string) => commentLikes[commentId];

  //Trpc
  const getComments = trpc.post.getComments.useQuery({
    postId,
  });
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
  const removeCommentMutation = trpc.post.removeComment.useMutation({
    onSuccess: () => {
      toast.success('Comment deleted successfully');
      getComments.refetch();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const likeComment = trpc.post.likeComment.useMutation({
    onSuccess: () => {
      toast.success('post liked successfully');
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

  //Async Handlers
  const handleRemoveComment = async (id: string) => {
    try {
      await removeCommentMutation.mutate({ id });
    } catch (error) {
      console.error(error);
    }
  };
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

  return (
    <div className=" relative w-full  rounded-lg border py-6">
      <div className=" z-10 flex h-full w-full flex-col  px-6">
        <div className="  flex items-center justify-between  text-xl">
          <h2 className=" font-medium">
            Responses ({getComments.data?.length})
          </h2>
        </div>

        <form className="my-6 flex flex-col items-end space-y-5">
          <textarea
            id="comment"
            rows={4}
            className="w-full rounded-xl border border-gray-300 p-4 shadow-lg outline-none focus:border-gray-600"
            placeholder="What are your thoughts?"
            {...register('text')}
          />
        </form>
        {isValid && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleSubmit((data) => {
                submitComment.mutate({
                  ...data,
                  postId,
                });
              })();
            }}
            type="submit"
            className="flex items-center space-x-3 rounded  border-2 border-gray-300 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900 dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60 dark:hover:text-white"
          >
            Comment
          </button>
        )}

        <div className="flex flex-col items-center justify-center space-y-6">
          {getComments.isSuccess &&
            getComments.data.map((comment) => (
              <div
                className="flex w-full flex-col space-y-2 border-b border-b-gray-300 pb-4 last:border-none"
                key={comment.id}
              >
                <div className="flex w-full items-center space-x-2 space-y-2 text-xs">
                  <div className="relative h-8 w-8 rounded-full bg-gray-400">
                    <Image src="" alt="" />
                  </div>
                  <div>
                    <p className="font-mono text-base font-bold dark:text-orange-400">
                      {comment.user.name}
                    </p>
                    <p>{dayjs(comment.createdAt).fromNow()}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-white dark:text-opacity-80">
                  {comment.text}
                </div>
                <div className="flex gap-2">
                  <div className="flex  items-center">
                    {!isCommentLiked(comment.id) ? (
                      <button
                        className="rounded-lg bg-gray-500 px-2 font-bold text-white"
                        onClick={() => handleLikeComment(comment.id)}
                      >
                        Like
                      </button>
                    ) : (
                      <button
                        className="rounded-lg bg-gray-500 px-2 font-bold text-white"
                        onClick={() => handleDislikeComment(comment.id)}
                      >
                        Dislike
                      </button>
                    )}
                  </div>

                  {sessionData && sessionData.user.id === comment.userId && (
                    <button
                      className="flex items-center rounded-lg bg-gray-400 px-2 font-bold  text-white hover:bg-red-500 hover:font-bold hover:text-white"
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

                  <div className="flex items-center gap-2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="1.5em"
                      width="1.5em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20,8h-5.612l1.123-3.367c0.202-0.608,0.1-1.282-0.275-1.802S14.253,2,13.612,2H12c-0.297,0-0.578,0.132-0.769,0.36 L6.531,8H4c-1.103,0-2,0.897-2,2v9c0,1.103,0.897,2,2,2h3h10.307c0.829,0,1.581-0.521,1.873-1.298l2.757-7.351 C21.979,12.239,22,12.12,22,12v-2C22,8.897,21.103,8,20,8z M4,10h2v9H4V10z M20,11.819L17.307,19H8V9.362L12.468,4l1.146,0 l-1.562,4.683c-0.103,0.305-0.051,0.64,0.137,0.901C12.377,9.846,12.679,10,13,10h7V11.819z"></path>
                    </svg>
                    {`${comment.likes.length}`}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};


