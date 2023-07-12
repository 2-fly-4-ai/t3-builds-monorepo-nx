import { useEffect, useState } from 'react';
import { trpc } from '../../utils/trpc';
import { useGlobalContextTechModalStore } from '@front-end-nx/shared/ui';
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

  const { resetIsPostModalOpen, togglePosts, posts } =
    useGlobalContextTechModalStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data?.id) {
      resetIsPostModalOpen();
      togglePosts(data.id);
      setLoading(false);
    }
  }, [data?.id]);

  return (
    <MainLayout>
      <section className="h-screen">
        {slug && data && posts[data.id] && <TechModal post={data} />}
      </section>
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

  const slug = context.params?.slug[0];
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
  const pathsData = [];
  return {
    paths: pathsData,
    fallback: 'blocking',
  };
};
