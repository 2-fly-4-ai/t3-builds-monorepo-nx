import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Image from 'next/image';
import { buttonVariants } from 'libs/shared/ui/src/shadnui/ui/button';
import { cn } from 'libs/shared/ui/src/utils/utils';
import Link from 'next/link';

function index() {
  return (
    <MainLayout>
      <section className="flex h-[93vh] w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] to-white dark:from-gray-900 dark:via-gray-900 dark:to-black">
        <section className="container grid  items-center justify-center gap-6  pb-8 pt-6 md:pb-12 md:pt-10 lg:pb-24 lg:pt-16">
          {/* <Image
            src="https://tx.shadcn.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.2e703faf.png&w=256&q=75"
            width={250}
            height={250}
            alt="Hero image"
            priority
          /> */}
          <div className="mx-auto flex flex-col items-center gap-4 border-red-500 text-center lg:w-[60rem]">
            <a
              href="#_"
              class="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2  p-4 px-6 py-3 font-medium  shadow-md transition duration-300 ease-out"
            >
              <span class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center  text-white duration-300 group-hover:translate-x-0">
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="ease absolute flex h-full w-full transform items-center justify-center font-bold transition-all duration-300 group-hover:translate-x-full">
                Follow Us On Twitter
              </span>
              <span class="invisible relative">Follow Us On Twitter</span>
            </a>
            <h1 className=" text-3xl font-bold leading-[1.1] tracking-tighter text-slate-700 dark:text-slate-200 sm:text-5xl md:text-6xl 2xl:text-[90px]">
              Unveiling the Power of Fullstack Development in the Digital Era
            </h1>
            <p className="mx-auto max-w-[42rem] leading-normal text-slate-700 dark:text-slate-400 sm:text-xl sm:leading-8">
              Join Our Thriving Community of Cutting-Edge Tech Enthusiasts and
              Dive into the Future of Fullstack Development. Build your brand,
              Promote Yourself,{' '}
              <span className="text-orange-400">get paid.</span>
            </p>
          </div>
          <div className="mx-auto flex gap-4">
            <Link href="/login" className={cn(buttonVariants({ size: 'lg' }))}>
              Get Started
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
            >
              GitHub
            </Link>
          </div>
        </section>
      </section>
    </MainLayout>
  );
}

export default index;
