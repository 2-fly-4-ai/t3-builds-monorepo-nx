import { allDocs, Doc } from '../../../../../.contentlayer/generated';
import { useLiveReload } from 'next-contentlayer/hooks';
import { getTableOfContents } from '@front-end-nx/shared/ui';
import { Mdx } from '@front-end-nx/shared/ui';
import { DocsPageHeader } from '@front-end-nx/shared/ui';
import { DocsPager } from '@front-end-nx/shared/ui';
import { DashboardTableOfContents } from '@front-end-nx/shared/ui';
import DocsLayout from '../../utils/layout/layout';
import MainLayout from '../../layouts/MainLayout';

import {
  GetStaticPaths,
  GetStaticPathsResult,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next';

// type Props = {
//   doc: Doc;
// };

export default function DocPage({ doc, toc }) {
  // if (!doc) {
  //   return null;
  // }
  // const toc = getTableOfContents(doc.body.raw);
  useLiveReload();

  // const toc = getTableOfContents(doc.body.raw); //please make this use aync await

  return (
    <MainLayout>
      <DocsLayout>
        <main className="relative px-8 py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <DocsPageHeader heading={doc.title} text={doc.description} />
            <Mdx code={doc.body.code} />
            <hr className="my-4 border-slate-200 md:my-6" />
            <DocsPager doc={doc} />
          </div>
          <div className="hidden text-sm xl:block">
            <div className="sticky top-0 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
              <DashboardTableOfContents toc={toc} />
            </div>
          </div>
        </main>
      </DocsLayout>
    </MainLayout>
  );
}

export async function getStaticProps({ params }) {
  let slug = '/docs';
  if (params?.slug) {
    slug += `/${params.slug}`;
  }

  const joinedSlug = slug.replaceAll(',', '/');
  const doc = allDocs.find((post) => post.slug === joinedSlug);

  // if (!doc) {
  //   return { notFound: true };
  // }

  const toc = await getTableOfContents(doc.body.raw);

  const props = {
    doc,
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
