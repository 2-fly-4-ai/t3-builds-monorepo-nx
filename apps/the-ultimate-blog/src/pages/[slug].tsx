import { useRouter } from 'next/router';
import React, { useCallback, useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { trpc } from '../utils/trpc';
import BlogPageProse from 'libs/shared/ui/src/lib/blog-page-prose/blog-page-prose';
import LikePost from 'libs/shared/ui/src/lib/like-post/like-post';
import LoadingSpinner from 'libs/shared/ui/src/lib/loading-spinner/loading-spinner';
import CommentSidebar from '../components/CommentSidebar';
import { Transition } from '@headlessui/react';
import { Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import Modal from '../components/Modal';
import UnsplashGallery from '../components/UnsplashGallery';

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

  const [showCommentSidebar, setShowCommentSidebar] = useState(false);
  const [isUnsplashModalOpen, setIsUnsplashModalOpen] = useState(false);
  return (
    <MainLayout>
      {getPost.isSuccess && getPost.data && (
        <UnsplashGallery
          isUnsplashModalOpen={isUnsplashModalOpen}
          setIsUnsplashModalOpen={setIsUnsplashModalOpen}
          postId={getPost.data?.id}
          slug={getPost.data.slug}
        />
      )}

      {getPost.isLoading && <LoadingSpinner />}
      {getPost.data?.id && (
        <Transition.Root show={showCommentSidebar} as={Fragment}>
          <Dialog as="div" onClose={() => setShowCommentSidebar(false)} static>
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
          id={getPost.data.id}
          countLikes={getPost?.data?.likes?.length ?? 0}
          onLike={(postId) => likePost.mutate({ postId })}
          onDislike={(postId) => dislikePost.mutate({ postId })}
          setShowSidebar={() => setShowCommentSidebar(true)}
          showSidebar={showCommentSidebar}

          // you can replace this with your own logic for commenting
        />
      )}

      <BlogPageProse
        title={getPost?.data?.title}
        description={getPost?.data?.description}
        setIsUnsplashModalOpen={() => setIsUnsplashModalOpen(true)}
        html={
          getPost?.data?.html?.replaceAll(
            'href=',
            'target="_blank" rel="nofollow noreferrer" href='
          ) ?? null
        }
        featuredImage={getPost?.data?.featuredImage}
      />
    </MainLayout>
  );
}
