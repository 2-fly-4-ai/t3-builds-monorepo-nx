import { useEffect, useState } from 'react';
import { trpc } from '../../utils/trpc';
import { useGlobalContextTechModalStore } from '@front-end-nx/shared/ui';
import { useRouter } from 'next/router';
import TechModal from '../../components/TechModal';
import { createServerSideHelpers } from '@trpc/react-query/server';
import MainLayout from '../../layouts/MainLayout';

import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';

import { appRouter } from '../../server/trpc/router/_app';
import superjson from 'superjson';

const TechStackPage = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { slug } = props;

  const { data } = trpc.post.getTechPost.useQuery({ slug });

  // const {
  //   trpcState: {
  //     json: {
  //       queries: [
  //         {
  //           state: { data },
  //         },
  //       ],
  //     },
  //   },
  //   slug,
  // } = props;

  /// I MEAN HERE I WANT TO ACCESS THE DATA INSIDE OF THE TRPC STATE
  const router = useRouter();

  const normalizedSlug = Array.isArray(slug) ? slug[0] : slug; // Extract the slug from the array if it's an array

  // const getPost = trpc.post.getTechPost.useQuery({ slug: normalizedSlug });
  const { resetIsPostModalOpen, togglePosts, posts } =
    useGlobalContextTechModalStore();
  const [loading, setLoading] = useState(true);

  // const postQuery = getPost;

  useEffect(() => {
    if (data?.id) {
      resetIsPostModalOpen();
      togglePosts(data.id);
      setLoading(false);
    }
  }, [data?.id]);

  // Rest of your component code

  // if (loading) {
  //   return (
  //     <div className="flex h-screen w-screen items-center justify-center bg-[#363636] bg-opacity-70">
  //       <em className="animate-pulse text-6xl text-opacity-60">Loading...</em>
  //     </div>
  //   ); // or show a loading spinner or skeleton screen
  // }

  return (
    <MainLayout>
      {slug && data && posts[data.id] && <TechModal post={data} />}
    </MainLayout>
  );
};

export default TechStackPage;

export async function getStaticProps(
  context: GetStaticPropsContext<{ slug: string[] }>
) {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: { prisma },
    transformer: superjson,
  });

  const slug = context.params?.slug[0]; // Access the first element of the slug array

  // prefetch `post.getTechPost`

  await helpers.post.getTechPost.prefetch({ slug });

  return {
    props: {
      trpcState: helpers.dehydrate(),
      slug,
    },
    revalidate: 1,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const posts = await prisma.tech.findMany({
  //   select: {
  //     slug: true,
  //   },
  // });

  const pathsData = [];

  // posts.forEach((post) => {
  //   if (post.slug) {
  //     pathsData.push({ params: { slug: post.slug } });
  //   }
  // });

  return {
    paths: pathsData,
    fallback: 'blocking',
  };
};
