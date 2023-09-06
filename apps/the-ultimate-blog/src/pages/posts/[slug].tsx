import React, { useCallback, useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { trpc } from '../../utils/trpc';
import LikePost from 'libs/shared/ui/src/lib/like-post/like-post';
import UnsplashGallery from '../../components/UnsplashGallery';
import { prisma } from '../../utils/prisma';
import { getTableOfContentsHTML } from '@front-end-nx/shared/ui';
import BlogPostSideBar from '../../components/BlogPost/blog-post-side';
import { useUnsplashState } from '@front-end-nx/shared/ui';
import BlogPostImage from '../../components/BlogPost/blog-post-image';
import TagsPost from '../../components/BlogPost/tags-post';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { createServerSideHelpers } from '@trpc/react-query/server';
import { appRouter } from '../../server/trpc/router/_app';
import superjson from 'superjson';

//Typings

interface TableOfContentsItem {
  title: string;
  url: string;
}

interface TableOfContentsResult {
  toc: {
    items: TableOfContentsItem[];
  };
  html: string;
}

//Zod Schema

//Functional compontne
export default function PostPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { tableOfContentsResult, slug, postsByTag } = props;
  const [showCommentSidebar, setShowCommentSidebar] = useState(false);
  const { isUnsplashModalOpen, setIsUnsplashModalOpen } = useUnsplashState();

  const getPost = trpc.post.getPost.useQuery({ slug: slug.toString() });

  return (
    <MainLayout>
      <section className=" mx-auto flex max-w-[1150px] gap-10  px-8">
        <section>
          {getPost.isSuccess && getPost.data && (
            <UnsplashGallery
              isUnsplashModalOpen={isUnsplashModalOpen}
              setIsUnsplashModalOpen={setIsUnsplashModalOpen}
              postId={getPost.data?.id}
              slug={getPost.data?.slug}
            />
          )}

          {getPost.isSuccess && (
            <LikePost
              id={getPost.data?.id}
              setShowSidebar={() => setShowCommentSidebar(true)}
              showSidebar={showCommentSidebar}
              // you can replace this with your own logic for commenting
            />
          )}

          <BlogPostImage
            getPost={getPost}
            slug={slug}
            tableOfContentsResult={tableOfContentsResult}
          />

          <TagsPost getPost={getPost} />
        </section>

        {/* SideSection */}
        <BlogPostSideBar
          getPost={getPost}
          tableOfContentsResult={tableOfContentsResult}
          postsByTag={postsByTag}
        />
      </section>
    </MainLayout>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string }>
) {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: { prisma },
    transformer: superjson,
  });

  const slug = context.params?.slug; // Access the first element of the slug array

  const postData = await helpers.post.getPost.fetch({ slug });

  const tagData = await helpers.post.getPostsWithTag.fetch({
    tags: postData?.tags.map((tag) => tag.name),
  });

  // Check if the post has HTML content, if so generate the table of contents
  let tableOfContentsResult: TableOfContentsResult | null = null;

  if (postData.html) {
    const tocData = await getTableOfContentsHTML(postData.html);
    const items: TableOfContentsItem[] = tocData.toc.items.map((item: any) => ({
      title: item.title,
      url: item.url,
    }));
    tableOfContentsResult = { toc: { items }, html: tocData.html };
  }

  console.warn(tableOfContentsResult.toc);

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
