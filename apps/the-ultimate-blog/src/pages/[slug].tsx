import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { trpc } from '../utils/trpc';
import BlogPageProse from 'libs/shared/ui/src/lib/blog-page-prose/blog-page-prose';
import LikePost from 'libs/shared/ui/src/lib/like-post/like-post';
import LoadingSpinner from 'libs/shared/ui/src/lib/loading-spinner/loading-spinner';

export default function PostPage() {
  const router = useRouter();
  const postRoute = trpc.useContext().post;

  const getPost = trpc.post.getPost.useQuery(
    {
      slug: router.query.slug as string,
    },
    {
      enabled: Boolean(router.query.slug),
    }
  );
  // const [isLiked, setIsLiked] = useState(getPost.data?.likes?.length > 0);

  const invalidateCurrentPostPage = useCallback(() => {
    postRoute.getPost.invalidate({ slug: router.query.slug as string });
  }, [postRoute.getPost, router.query.slug]);

  const likePost = trpc.post.likePost.useMutation({
    onSuccess: () => {
      invalidateCurrentPostPage();
    },
  });

  const dislikePost = trpc.post.disLikePost.useMutation({
    onSuccess: () => {
      invalidateCurrentPostPage();
    },
  });

  return (
    <MainLayout>
      {getPost.isLoading && <LoadingSpinner />}

      {getPost.isSuccess && (
        <LikePost
          id={getPost.data.id}
          countLikes={getPost.data.likes}
          onLike={(postId) => likePost.mutate({ postId })}
          onDislike={(postId) => dislikePost.mutate({ postId })}
          onComment={(postId) => console.log('comment on post', postId)}
          // you can replace this with your own logic for commenting
        />
      )}

      <BlogPageProse
        title={getPost?.data?.title}
        description={getPost?.data?.description}
        html={
          getPost?.data?.html.replaceAll(
            'href=',
            'target="_blank" rel="nofollow noreferrer" href='
          ) ?? null
        }
        featuredImage="https://images.unsplash.com/photo-1679678691005-3815eb29bc61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
      />
    </MainLayout>
  );
}
