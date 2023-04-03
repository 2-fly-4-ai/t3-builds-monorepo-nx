import Image from 'next/image';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface PostCardProps {
  post: {
    author: {
      image: string;
      name: string;
    };
    createdAt: Date;
    slug: string;
    title: string;
    description: string;
  };
}

export function PostCard(props: PostCardProps) {
  const dayjs = require('dayjs');
  return (
    <div className="group  grid min-h-[10rem] w-full grid-cols-12 gap-x-8 gap-y-4 border-b-2 p-6 py-4 hover:bg-gray-100">
      <div className="col-span-full flex items-center gap-3  py-2">
        <div className="h-10 w-10 rounded-full bg-gray-300 ">
          <Image
            src={props.post.author.image ?? ''}
            width={50}
            height={50}
            className="rounded-full"
            alt={props.post.author.name ?? ''}
          />
        </div>
        <div className="">
          <div className="flex items-center gap-2 ">
            <div className="text-lg font-medium capitalize">
              {props.post.author.name}
            </div>
            | <div>{dayjs(props.post.createdAt).format('DD/MM/YY')}</div>
          </div>
          <div className="text-sm underline">Teacher & Developer</div>
        </div>
      </div>
      <div className="col-span-8 space-y-2">
        <Link href={`/${props.post.slug}`}>
          <h3 className="cursor-pointer text-2xl font-bold decoration-indigo-400 decoration-2 group-hover:underline">
            {props.post.title}
          </h3>
        </Link>
        <div className="break-words text-md  text-gray-500">
          {props.post.description}
        </div>
      </div>
      <div className="col-span-4">
        <div className="aspect-video rounded-xl bg-gray-200"></div>
      </div>

      {/* add the rest of the code here */}
    </div>
  );
}

export default PostCard;
