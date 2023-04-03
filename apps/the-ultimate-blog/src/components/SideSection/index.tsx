import React from 'react';
import Link from 'next/link';

export default function SideSection() {
  return (
    <aside className="space-between  col-span-4 flex h-[90vh] w-full flex-col space-y-4 p-6">
      <div className="">
        <h3 className="mb-6 font-medium">People you might be interested in:</h3>
        <div className="flex flex-col space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <Link href="" key={i}>
              <div className="flex w-full flex-row items-center space-x-4 p-2 py-3 hover:bg-gray-100">
                <div className="h-10 w-10 flex-none rounded-full bg-gray-500"></div>
                <div>
                  <div className="text-sm font-bold text-gray-500">
                    lorem ipsum
                  </div>
                  <div className="text-xs">
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum
                  </div>
                </div>
                <div>
                  <button className="flex items-center space-x-3 rounded border-2  border-gray-300 bg-white p-2 px-4 py-2 font-medium shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition hover:border-gray-700 hover:border-black hover:text-gray-900 hover:shadow-black">
                    Follow
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="my-6 font-medium">Your reading list:</h3>
        <div className="flex flex-col space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Link href="/" key={i}>
              <div className="group flex items-center space-x-5 p-2 hover:bg-gray-100">
                <div className="aspect-square  w-2/5 rounded-xl border bg-gray-300"></div>
                <div className="flex w-3/5 flex-col space-y-2">
                  <div className=" font-semibold decoration-indigo-400 decoration-2 group-hover:underline">
                    Lorem ipsum dolar site amet{' '}
                  </div>
                  <div className="text-xs">
                    Lorem ipsum dolar site amet consectuturLorem ipsum dolar
                    site amet consectutur Lorem ipsum dolar site amet
                    consectutur
                  </div>
                  <div>
                    <div className="flex w-full items-center space-x-1">
                      <div className="h-5 w-5 flex-none rounded-full bg-gray-300"></div>
                      <div className="text-sm font-bold text-gray-900">
                        Brian Farley
                      </div>
                      <div className="text-xs">Dec 22,2022</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
