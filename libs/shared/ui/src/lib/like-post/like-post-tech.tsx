import { BiLike } from './../../icons/BiLike';
import { BiLikeFilled } from './../../icons/BiLikeFilled';
import { FaRegCommentDots } from './../../icons/FaRegCommentDots';
import { useState } from 'react';
import { trpc } from '../../../../../../apps/the-ultimate-blog/src/utils/trpc';
import { Toast, toast } from 'react-hot-toast';
import { useLikeStore } from '../../zustand/store';
import { useTabStore } from '../../zustand/store';

export interface LikePostProps {
  post: {
    id: string;
  };
}

export function LikePost({ post }: LikePostProps) {
  const { likedPosts, addLikedPost, removeLikedPost } = useLikeStore();
  const { id } = post;
  const postRoute = trpc.useContext().post;

  const likePost = trpc.post.likePost.useMutation({
    onSuccess: () => {
      postRoute.getTechPosts.invalidate();
      toast.success('Successfully liked post');
    },
  });

  const { value, setValue } = useTabStore();

  const dislikePost = trpc.post.disLikePost.useMutation({
    onSuccess: () => {
      postRoute.getTechPosts.invalidate();
      toast.success('Successfully disliked post');
    },
  });

  const handleLike = () => {
    if (!likedPosts.includes(id)) {
      addLikedPost(id);
      likePost.mutate({ techId: id });
    }
  };

  const handleDislike = () => {
    if (likedPosts.includes(id)) {
      removeLikedPost(id);
      dislikePost.mutate({ techId: id });
    }
  };

  return (
    <div className="fixed bottom-0 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 justify-center overflow-auto">
      <div className="flex items-center gap-3 rounded-xl border-2 border-gray-400 bg-white p-2 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-200 backdrop-blur transition duration-300 hover:border-black hover:shadow-black dark:bg-black dark:bg-opacity-60 dark:hover:border-white">
        {likedPosts.includes(id) ? (
          <BiLikeFilled onClick={handleDislike} />
        ) : (
          <BiLike onClick={handleLike} />
        )}
        | <FaRegCommentDots onClick={() => setValue('Comments')} />
      </div>
    </div>
  );
}

export default LikePost;
