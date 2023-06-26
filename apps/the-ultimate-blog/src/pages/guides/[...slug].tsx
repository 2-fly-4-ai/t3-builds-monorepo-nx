import Link from 'next/link';
import { notFound } from 'next/navigation';
import { allGuides, Guide } from '../../../../../.contentlayer/generated';

import { getTableOfContents } from '@front-end-nx/shared/ui';
import { Icons } from '@front-end-nx/shared/ui';
import { Mdx } from '@front-end-nx/shared/ui';
import { DocsPageHeader } from '@front-end-nx/shared/ui';
import { DashboardTableOfContents } from '@front-end-nx/shared/ui';
import DocsLayout from '../../utils/layout/layout';
import MainLayout from '../../layouts/MainLayout';
// import "@/styles/mdx.css"
// import { Metadata } from "next"

import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';

interface GuidePageProps {
  params: {
    slug: string[];
  };
}

export default function GuidePage({ guide, toc }) {
  return (
    <MainLayout>
      <main className="relative px-16 py-6 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10 lg:py-10 xl:gap-20">
        <div>
          <DocsPageHeader heading={guide.title} text={guide.description} />
          <Mdx code={guide.body.code} />
          <hr className="my-4 border-slate-200" />
          <div className="flex justify-center py-6 lg:py-10">
            <Link
              href="/guides"
              className="mb-4 inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900"
            >
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              See all guides
            </Link>
          </div>
        </div>
        <div className="hidden text-sm lg:block">
          <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
            <DashboardTableOfContents toc={toc} />
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

export async function getStaticProps({ params }) {
  let slug = '/guides';
  if (params?.slug) {
    slug += `/${params.slug}`;
  }

  const joinedSlug = slug.replaceAll(',', '/');
  const guide = allGuides.find((guide) => guide.slug === joinedSlug);
  allGuides.map((post) => {});

  // if (!doc) {
  //   return { notFound: true };
  // }

  const toc = await getTableOfContents(guide.body.raw);

  const props = {
    guide,
    toc,
  };

  return {
    props,
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
