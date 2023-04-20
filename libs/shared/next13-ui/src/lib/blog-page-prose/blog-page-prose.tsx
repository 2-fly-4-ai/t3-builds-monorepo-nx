import { Interweave } from 'interweave';
import Image from 'next/image';

export interface BlogPageProseProps {
  title: string;
  description: string;
  html: string;
  featuredImage: string;
}

export default function BlogPageProse(props: BlogPageProseProps) {
  const { title, description, html, featuredImage } = props;
  return (
    <div className="flex w-full items-center justify-center p-10">
      <div className="w-full max-w-screen-md space-y-8">
        <div className="relative flex h-[60vh] w-full items-center justify-center rounded-xl bg-gray-300 shadow-lg">
          {/* this is the featured image */}
          {/* <Image src={featuredImage} alt={title} width={400} height={400} /> */}
          <div className="mx-10 rounded-xl bg-gray-500 bg-opacity-50 px-4 pt-4 pb-6 text-5xl font-medium text-gray-50">
            {title}
          </div>
        </div>
        <div className="prose max-w-none border-l-4 border-gray-800 bg-gray-100 py-4 px-4 pl-6 text-lg ">
          {description}
        </div>
        <div className="prose-li:list-style prose prose-lg max-w-none marker:text-black prose-a:font-bold prose-li:text-black prose-table:border-2 prose-table:shadow-lg prose-th:border prose-th:bg-gray-300 prose-th:p-3 prose-td:border prose-td:p-3 prose-img:mx-auto prose-img:my-12 prose-img:max-h-custom prose-img:w-auto prose-img:border-2 prose-img:border-black prose-img:py-12 prose-img:px-52 prose-img:shadow-[5px_5px_0px_0px_rgba(109,40,217)] prose-img:shadow-black">
          <Interweave content={html} />
        </div>
      </div>
    </div>
  );
}
