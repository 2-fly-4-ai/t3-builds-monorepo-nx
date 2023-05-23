import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Image from 'next/image';
import { buttonVariants } from 'libs/shared/ui/src/shadnui/ui/button';
import { cn } from 'libs/shared/ui/src/utils/utils';
import Link from 'next/link';
import { SiteFooter } from '@front-end-nx/shared/ui';
import { siteConfig } from 'libs/shared/ui/src/shadnui/config/site';

function index() {
  const stars = '';
  return (
    <MainLayout>
      <section className="flex h-[93vh] w-full items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] to-white dark:from-gray-900 dark:via-gray-900 dark:to-[rgb(18,18,18)]">
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="ease absolute flex h-full w-full transform items-center justify-center font-bold transition-all duration-300 group-hover:translate-x-full">
                Follow Us On Twitter
              </span>
              <span className="invisible relative">Follow Us On Twitter</span>
            </a>
            <h1 className=" text-3xl font-bold leading-[1.1] tracking-tighter text-slate-700 dark:text-slate-200 sm:text-5xl md:text-6xl 2xl:text-[85px]">
              Unleash the Power of Fullstack Development in the Digital Era
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
      <section className="container mx-auto grid justify-center gap-6 bg-gray-100 py-8 text-center dark:bg-inherit md:py-12 lg:py-24">
        <div className="mx-auto flex flex-col items-center gap-4  md:max-w-[52rem]">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-slate-700 dark:text-slate-200 sm:text-lg sm:leading-7">
            DevSpace is a community website built for devs by devs. It's a place
            where you can connect with other developers, share your projects,
            learn new skills, and get feedback. Whether you're a beginner or an
            expert, you'll find something for you here.
          </p>
        </div>
        <div className="grid justify-center gap-4 sm:grid-cols-2 md:max-w-[56rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Tech Discussions</h3>
                <p className="text-sm text-slate-100">
                  Discussing the latest trends in technology with fellow devs.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a23.476 23.476 0 0 0-3.107-.534A23.892 23.892 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.73 22.73 0 0 0-3.113.538 15.02 15.02 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a25.64 25.64 0 0 1-4.412.005 26.64 26.64 0 0 1-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946a25.17 25.17 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25.245 25.245 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933a25.952 25.952 0 0 0-1.345-2.32zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493a23.966 23.966 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23.142 23.142 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39a25.819 25.819 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143a22.005 22.005 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a1.185 1.185 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Create Posts</h3>
                <p className="text-sm text-slate-100">
                  Demonstrate your expertise, document your learning journey and
                  achievements.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">TechStack</h3>
                <p className="text-sm text-slate-100">
                  Choose your stack and have a quick reference to all your docs
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Boilerplate</h3>
                <p className="text-sm text-slate-100">
                  Get the best starter templates for modern web development
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="h-12 w-12 fill-current"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Profiles</h3>
                <p className="text-sm text-slate-100">
                  Build up your profile and create authority for prospective
                  employers
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-2 shadow-2xl">
            <div className="flex h-[180px] flex-col justify-between rounded-md bg-[#000000] p-6 text-slate-200">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-100">Subscriptions</h3>
                <p className="text-sm text-slate-100">
                  Free and paid subscriptions using Stripe.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col items-center gap-4 md:max-w-[52rem]">
          <p className="max-w-[85%] leading-normal text-slate-700 dark:text-slate-200 sm:text-lg sm:leading-7">
            Taxonomy also includes a blog and a full-featured documentation site
            built using Contentlayer and MDX.
          </p>
        </div>
      </section>
      <section className="container mx-auto grid items-center justify-center gap-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex flex-col gap-4 md:max-w-[52rem]">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>
          <p className="max-w-[85%] leading-normal text-slate-700 sm:text-lg sm:leading-7">
            Taxonomy is open source and powered by open source software. The
            code is available on{' '}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{' '}
            <Link href="/docs" className="underline underline-offset-4">
              I&apos;m also documenting everything here
            </Link>
            .
          </p>
        </div>
        {stars && (
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex"
          >
            <div className="flex h-10 w-10 items-center justify-center space-x-2 rounded-md border border-slate-600 bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="h-5 w-5 text-white"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </div>
            <div className="flex items-center">
              <div className="h-4 w-4 border-y-8 border-l-0 border-r-8 border-solid border-y-transparent border-r-slate-800"></div>
              <div className="flex h-10 items-center rounded-md border border-slate-800 bg-slate-800 px-4  font-medium text-slate-200">
                {stars} stars on GitHub
              </div>
            </div>
          </Link>
        )}
      </section>

      <footer className="bg-black text-gray-400">
        <div
          id="footer-content"
          className="relative pb-6 pt-8 xl:pb-12 xl:pt-16"
        >
          <div className="mx-auto overflow-hidden px-3 xl:container sm:px-4 xl:px-2">
            <div className="-mx-3 flex flex-row flex-wrap lg:justify-between">
              <div className="w-full max-w-full flex-shrink px-3 lg:w-2/5 lg:pr-16">
                <div className="mb-2 flex items-center">
                  <span className="mb-2 mt-2 text-3xl font-bold leading-normal text-gray-100">
                    SERP.DEV
                  </span>
                  {/* <img src="../src/img-min/logo.png" alt="LOGO">  */}
                </div>
                <p>
                  Tailwind News Template for build great newspapper, magazine
                  and news portal.
                </p>
                <ul className="Lg:mb-0 mb-6 mt-6 space-x-3">
                  <li className="inline-block">
                    <a
                      target="_blank"
                      className="hover:text-gray-100"
                      rel="noopener noreferrer"
                      href="https://facebook.com"
                      title="Facebook"
                    >
                      <i className="fab fa-facebook fa-2x"></i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"
                        ></path>
                      </svg>
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      target="_blank"
                      className="hover:text-gray-100"
                      rel="noopener noreferrer"
                      href="https://twitter.com"
                      title="Twitter"
                    >
                      <i className="fab fa-twitter fa-2x"></i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                        ></path>
                      </svg>
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      target="_blank"
                      className="hover:text-gray-100"
                      rel="noopener noreferrer"
                      href="https://youtube.com"
                      title="Youtube"
                    >
                      <i className="fab fa-youtube fa-2x"></i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z"
                        ></path>
                      </svg>
                    </a>
                  </li>

                  <li className="inline-block">
                    <a
                      target="_blank"
                      className="hover:text-gray-100"
                      rel="noopener noreferrer"
                      href="https://instagram.com"
                      title="Instagram"
                    >
                      <i className="fab fa-instagram fa-2x"></i>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2rem"
                        height="2rem"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"
                        ></path>
                        <path
                          fill="currentColor"
                          d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full max-w-full flex-shrink px-3 lg:w-3/5">
                <div className="flex flex-row flex-wrap">
                  <div className="mb-6 w-1/2 max-w-full flex-shrink md:w-1/4 lg:mb-0">
                    <h4 className="mb-3 text-base uppercase leading-normal text-gray-100">
                      Product
                    </h4>
                    <ul>
                      <li className="py-1 hover:text-white">
                        <a href="#">Landing</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Pages</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Sections</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Sign Up</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Login</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-6 w-1/2 max-w-full flex-shrink md:w-1/4 lg:mb-0">
                    <h4 className="mb-3 text-base uppercase leading-normal text-gray-100">
                      Support
                    </h4>
                    <ul>
                      <li className="py-1 hover:text-white">
                        <a href="#">Documentation</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Changelog</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Tools</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Icons</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-6 w-1/2 max-w-full flex-shrink md:w-1/4 lg:mb-0">
                    <h4 className="mb-3 text-base uppercase leading-normal text-gray-100">
                      Includes
                    </h4>
                    <ul>
                      <li className="py-1 hover:text-white">
                        <a href="#">Utilities</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Components</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Example code</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Updates</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-6 w-1/2 max-w-full flex-shrink md:w-1/4 lg:mb-0">
                    <h4 className="mb-3 text-base uppercase leading-normal text-gray-100">
                      Legal
                    </h4>
                    <ul>
                      <li className="py-1 hover:text-white hover:text-white">
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">Terms of Use</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">License</a>
                      </li>
                      <li className="py-1 hover:text-white">
                        <a href="#">GDPR</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-dark">
          <div className="container border-t border-gray-200 border-opacity-10 py-4">
            <div className="row">
              <div className="col-12 col-md text-center">
                <p className="d-block my-3">
                  Copyright © Your Company | All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </MainLayout>
  );
}

export default index;
