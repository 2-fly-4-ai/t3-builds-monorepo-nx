import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import NewsletterSubscribe from '../NewsLetter/NewsletterSubscribe';
import { DashboardTableOfContents } from '@front-end-nx/shared/ui';

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

interface Props {
  getPost: {
    data: {
      author: {
        image: string;
        name: string;
      };
      createdAt: Date;
    };
  };
  tableOfContentsResult: TableOfContentsResult;

  postsByTag: {
    slug: string;
    title: string;
  }[];
}

export default function BlogPostSideBar({
  getPost,
  tableOfContentsResult,
  postsByTag,
}: Props) {
  return (
    <div className="my-10 flex w-[270px] shrink-0">
      {/* Author Box */}
      {/* TOC */}
      <div className="h-full">
        <div className="flex h-max max-w-[300px] items-center justify-start gap-4 rounded-lg border-2 bg-gray-100 p-6 py-3 dark:bg-white dark:bg-opacity-10">
          <div className="flex aspect-square h-16 w-16">
            <Image
              src={getPost?.data?.author?.image}
              width={400}
              height={400}
              alt="test"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold">An Article By: </span>
            <Link href={'test'} className="underline">
              {getPost?.data?.author?.name}
            </Link>
            <span className="text-sm">
              {dayjs(getPost?.data?.createdAt).format('DD/MM/YY')}
            </span>
          </div>
        </div>

        <div className="mt-6 h-min max-w-[300px] rounded-lg border-2 bg-gray-100 p-6 py-4 dark:bg-white dark:bg-opacity-10">
          <NewsletterSubscribe />
        </div>

        <div className="sticky top-6">
          <div className="mt-6 h-min max-w-[300px] rounded-lg border-2 bg-gray-100 p-6 dark:bg-white dark:bg-opacity-10">
            <DashboardTableOfContents toc={tableOfContentsResult.toc} />
          </div>

          <div className="sticky mt-6 flex h-min max-w-[300px] flex-col gap-4 rounded-lg border-2 bg-gray-100 p-6 dark:bg-white dark:bg-opacity-10">
            <span className="text-base font-medium">Related Posts</span>
            <div className="flex flex-col gap-4">
              {postsByTag.map((post) => (
                <div
                  key={post?.slug}
                  className="flex flex-col gap-2 border-b py-2"
                >
                  <Link href="test flex flex-col">
                    <span className="font-medium">{post?.title}</span>
                  </Link>
                  {/* <span className="text-sm">{post?.description}</span> */}
                  <Link href={`/post/${post?.slug}`}>
                    <button className="border-l-4  border-red-500 px-2">
                      Read More
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Newsletter Subscribe */}
        {/* Related Posts */}
      </div>
    </div>
  );
}
