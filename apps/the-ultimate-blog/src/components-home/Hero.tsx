import React from 'react';
import heros from '../../../../libs/shared/ui/src/tools/heros';
import Link from 'next/link';
import { cn } from 'libs/shared/ui/src/utils/utils';
import { buttonVariants } from 'libs/shared/ui/src/shadnui/ui/button';

function Hero() {
  return (
    <section className="dark:via-trueGray flex min-h-[93vh] w-full items-center justify-center  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] to-white dark:from-gray-900 dark:to-[rgb(18,18,18)]">
      <section className="container grid max-w-7xl items-center  justify-center gap-6   px-8  md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
        <div className="mx-auto my-auto flex flex-col  items-center justify-center gap-3 space-y-3 text-center first-letter:flex">
          <a
            href="#_"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2  p-4 px-6 py-3 font-medium  shadow-md transition duration-300 ease-out"
          >
            <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center  text-white duration-300 group-hover:translate-x-0">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="ease absolute flex h-full w-full transform items-center justify-center font-bold transition-all duration-300 group-hover:translate-x-full">
              Follow Us On Twitter
            </span>

            <span className="invisible relative">Follow Us On Twitter</span>
          </a>
          <h1 className=" max-w-6xl space-y-4 text-4xl font-bold leading-[1.1] tracking-tighter text-slate-700 dark:text-slate-200 sm:text-5xl md:text-6xl 2xl:text-[90px]">
            Unleash the Power of Fullstack Development in the Digital Era
          </h1>
          <p className="mx-auto max-w-3xl leading-normal text-slate-700 dark:text-slate-400 sm:text-xl sm:leading-8">
            Join Our Thriving Community of Cutting-Edge Tech Enthusiasts and
            Dive into the Future of Fullstack Development. Build your brand,
            Promote Yourself, <span className="text-orange-400">get paid.</span>
          </p>
          <div className="mx-auto flex justify-center gap-4">
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
        </div>
        <div className="mx-auto mt-6 flex max-w-5xl items-center justify-center  px-6 lg:px-8">
          <div className="mx-auto  grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain  brightness-0 invert lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain brightness-0 invert lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain brightness-0 invert lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain brightness-0 invert sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain brightness-0 invert sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
