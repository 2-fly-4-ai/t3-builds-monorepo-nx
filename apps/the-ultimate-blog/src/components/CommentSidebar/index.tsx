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

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

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

  const [likedComments, setLikedComments] = useState<string[]>([]);

  const isCommentLiked = (commentId: string) =>
    likedComments.includes(commentId);

  const likeComment = trpc.post.likeComment.useMutation();
  const dislikeComment = trpc.post.dislikeComment.useMutation();

  const handleLikeComment = async (commentId: string) => {
    try {
      await likeComment.mutate({
        postId,
        commentId,
      });
      setLikedComments([...likedComments, commentId]);
      toast.success('Comment liked successfully');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDislikeComment = async (commentId: string) => {
    try {
      await dislikeComment.mutate({
        postId,
        commentId,
      });
      setLikedComments(likedComments.filter((id) => id !== commentId));
      toast.success('Comment disliked successfully');
    } catch (error) {
      console.error(error);
    }
  };

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
                <div className="mt-24 mb-5 flex items-center justify-between  text-xl">
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
                        {sessionData &&
                          sessionData.user.id === comment.userId && (
                            <button
                              className="bg-red-500 p-2"
                              onClick={() => handleRemoveComment(comment.id)}
                            >
                              REMOVE COMMENT
                            </button>
                          )}

                        <div className="flex items-center">
                          {!isCommentLiked(comment.id) ? (
                            <button
                              className="bg-black p-4 text-white mr-2"
                              onClick={() => handleLikeComment(comment.id)}
                            >
                              Like
                            </button>
                          ) : (
                            <button
                              className="bg-red-500 p-4 text-white"
                              onClick={() => handleDislikeComment(comment.id)}
                            >
                              Dislike
                            </button>
                          )}
                        </div>

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
