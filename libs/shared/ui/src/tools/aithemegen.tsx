import React from 'react';
import MainLayout from '../../../../../apps/the-ultimate-blog/src/layouts/MainLayout';
import Link from 'next/link';
function test() {
  return (
    <>
      <MainLayout>
        <nav className="border-pink-500 bg-pink-100 px-4 py-4 dark:border-pink-400 dark:bg-pink-700 lg:px-6">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
            <a href="#" className="flex items-center">
              <img
                src="https://e7.pngegg.com/pngimages/829/632/png-clipart-pink-stiletto-logo-high-heeled-footwear-shoe-stiletto-heel-logo-high-heels-fashion-court-shoe.png"
                className="mr-3 h-6 bg-white p-1 sm:h-10"
                alt="Flowbite Logo"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold text-pink-800 dark:text-white">
                Legally Blonde
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="#"
                className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-pink-800 hover:bg-pink-50 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:text-white dark:hover:bg-pink-500 dark:focus:ring-pink-800 lg:px-5 lg:py-2.5"
              >
                Log in
              </a>
              <a
                href="#"
                className="mr-2 rounded-lg bg-pink-800 px-4 py-2 text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-800 lg:px-5 lg:py-2.5"
              >
                Get started
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="ml-1 inline-flex items-center rounded-lg p-2 text-sm  text-pink-600 hover:bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-200 dark:text-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-600 lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
              id="mobile-menu-2"
            >
              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                <li>
                  <a
                    href="#"
                    className="block rounded bg-pink-800 py-2 pl-3 pr-4 text-lg font-medium text-white dark:text-white lg:bg-transparent lg:p-0 lg:text-pink-700"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block border-b border-pink-100 py-2 pl-3 pr-4 text-lg font-medium text-pink-800 hover:bg-pink-50 dark:border-pink-700 dark:text-pink-400 dark:hover:bg-pink-500 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-pink-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block border-b border-pink-100 py-2 pl-3 pr-4 text-lg font-medium text-pink-800 hover:bg-pink-50 dark:border-pink-700 dark:text-pink-400 dark:hover:bg-pink-500 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-pink-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block border-b border-pink-100 py-2 pl-3 pr-4 text-lg font-medium text-pink-800 hover:bg-pink-50 dark:border-pink-700 dark:text-pink-400 dark:hover:bg-pink-500 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-pink-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block border-b border-pink-100 py-2 pl-3 pr-4 text-lg font-medium text-pink-800 hover:bg-pink-50 dark:border-pink-700 dark:text-pink-400 dark:hover:bg-pink-500 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-pink-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block border-b border-pink-100 py-2 pl-3 pr-4 text-lg font-medium text-pink-800 hover:bg-pink-50 dark:border-pink-700 dark:text-pink-400 dark:hover:bg-pink-500 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-pink-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="flex min-h-screen w-full  snap-start flex-col items-center justify-center bg-pink-100 dark:bg-gray-900">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-pink-500 bg-white p-4 px-6 py-3 font-bold  text-pink-600  transition duration-300 ease-out dark:bg-gray-900 dark:text-pink-500"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center  text-pink-600 duration-300 group-hover:translate-x-0 dark:text-pink-500">
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
                <span className="ease absolute flex h-full w-full transform items-center justify-center transition-all duration-300 group-hover:translate-x-full">
                  Follow Us To Legally Blonde
                </span>
                <span className="invisible relative">
                  Follow Us To Legally Blonde
                </span>
              </a>
              <h3 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-pink-800 dark:text-white sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into the Legally Blonde: Fullstack Development Fun Zone
              </h3>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-pink-800 dark:text-white sm:text-xl sm:leading-8">
                Be part of our pink and beautiful community of tech enthusiasts.
                Enhance your skills, boost your brand,&nbsp;
                <span className="text-pink-600 dark:text-pink-500">
                  and enjoy the journey with style.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4 ">
                <Link
                  href="/login"
                  className="rounded-md border border-pink-500 bg-white px-8 py-3 text-base font-medium  text-pink-600 hover:bg-pink-500 hover:text-white dark:bg-gray-900 dark:text-pink-500 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Legally Blonde Squad
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-pink-800 px-8 py-3 text-base font-medium text-white hover:bg-pink-500 dark:bg-pink-800 dark:text-white dark:hover:bg-pink-500 md:px-10 md:py-4 md:text-lg"
                >
                  Explore Secrets on GitHub
                </Link>
              </div>
            </div>
            <div className=" dark:bg-gray-900">
              <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-8">
                <dl className="mx-auto grid max-w-screen-md gap-8 text-pink-800 dark:text-white sm:grid-cols-3">
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-medium md:text-4xl">
                      73M+
                    </dt>
                    <dd className="font-light text-pink-800 dark:text-pink-500">
                      developers
                    </dd>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-medium md:text-4xl">
                      1B+
                    </dt>
                    <dd className="font-light text-pink-800 dark:text-pink-500">
                      contributors
                    </dd>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-3xl font-medium md:text-4xl">
                      4M+
                    </dt>
                    <dd className="font-light text-pink-800 dark:text-pink-500">
                      organizations
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </section>

        <div className=" flex  w-full flex-wrap gap-4   gap-y-8 p-16 font-sans">
          <div className="flex flex-col gap-4">
            <div className="flex h-min w-min cursor-pointer items-center justify-between rounded-lg border border-pink-500 bg-pink-100 p-4  hover:border-pink-500 active:bg-gray-50 dark:bg-pink-700">
              <div className="flex items-center">
                <input id="input1" type="checkbox" className="mr-4" />
                <div className="mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5  text-pink-600 dark:text-pink-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                  </svg>
                </div>
                <p className="select-none text-lg font-medium text-pink-800 dark:text-white">
                  Folder
                </p>
              </div>
              <button className="text-pink-500 hover:text-pink-700 dark:text-pink-100 dark:hover:text-pink-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>

            <button className="flex h-min w-64 items-center rounded-lg border  border-b-4  border-pink-500 bg-pink-100 p-4 hover:border-b-4 hover:border-b-pink-500 hover:bg-pink-200 active:bg-pink-100 dark:bg-pink-700">
              <div className="mr-4 flex items-center justify-center  text-pink-600 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-pink-800 dark:text-white">
                Content page
              </h3>
            </button>

            <div className="items-top relative flex h-min justify-start space-x-6 rounded-lg border border-b-4 border-pink-500 bg-pink-100 p-4 hover:border-b-4 hover:border-pink-500 hover:bg-pink-200 active:bg-pink-100 dark:bg-pink-700">
              <svg
                className="h-8 w-8 text-pink-800 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="font-medium text-pink-800 dark:text-white">
                  Learn how to make a glowing gradient background!
                </p>
                <a
                  href="https://braydoncoyer.dev/blog/tailwind-gradients-how-to-make-a-glowing-gradient-background"
                  className="font-base block text-pink-600 transition duration-200 dark:text-pink-300"
                  target="_blank"
                >
                  Read Article →
                </a>
              </div>
            </div>
          </div>
          {/* PEOPLE */}
          <div className="flex flex-wrap gap-4">
            <div className="h-min max-w-sm items-center rounded-lg border border-pink-500 bg-pink-100 px-6 dark:bg-pink-700 sm:flex">
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="Jese Avatar"
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-pink-800 dark:text-white">
                  <a href="#">Jese Leos</a>
                </h3>
                <span className="text-pink-600 dark:text-pink-200">CTO</span>
                <p className="mb-4 mt-3 font-light text-pink-600 dark:text-pink-200">
                  Jese drives the technical strategy of the flowbite platform
                  and brand.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href="#"
                      className="text-pink-600 hover:text-pink-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-pink-600 hover:text-pink-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-pink-600 hover:text-pink-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* ROBERT */}

            <div className="fkex h-min w-80 cursor-pointer flex-col rounded-lg border border-pink-500 bg-pink-100  dark:bg-pink-700">
              <div className="checker-bg flex h-48 w-full items-center justify-center p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20 w-20  text-pink-600 dark:text-pink-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="border-t border-pink-500 p-4 dark:border-pink-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-pink-800 dark:text-white">
                    Helen Smith
                  </h3>
                  <button className="text-pink-600  dark:text-pink-100 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="my-1 text-sm   text-pink-600  dark:text-pink-200">
                  Active
                </p>
              </div>
            </div>

            <div className="flex h-min w-80 cursor-pointer flex-col rounded-lg border border-pink-500 bg-pink-100  dark:bg-pink-700">
              <div className="checker-bg flex h-48 w-full items-center justify-center p-4 text-blue-500">
                <div className="h-32 w-32 rounded-full bg-gray-100 bg-[url('https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center dark:bg-gray-800"></div>
              </div>
              <div className="border-t border-pink-500 p-4 dark:border-pink-200">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium  text-pink-800  dark:text-white">
                    Helen Smith
                  </h3>
                  <button className="text-pink-500 hover:text-pink-700 dark:text-pink-100 dark:hover:text-pink-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
                <p className="my-1 text-sm   text-pink-600  dark:text-pink-200">
                  Active
                </p>
              </div>
            </div>

            <div className="h-min w-full max-w-sm rounded-lg border border-pink-500 bg-pink-100  dark:border-pink-400 dark:bg-pink-700">
              <div className="flex justify-end px-4 pt-4">
                <button
                  id="dropdownButton"
                  data-dropdown-toggle="dropdown"
                  className="inline-block rounded-lg p-1.5 text-sm text-pink-800 hover:bg-pink-200 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:text-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-600"
                  type="button"
                >
                  <span className="sr-only">Open dropdown</span>
                  <svg
                    className="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  </svg>
                </button>

                <div
                  id="dropdown"
                  className="z-10 hidden w-44 list-none divide-y divide-pink-500 rounded-lg bg-pink-100 text-base  dark:bg-pink-700"
                >
                  <ul className="py-2" aria-labelledby="dropdownButton">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-pink-800 hover:bg-pink-200 dark:text-pink-400 dark:hover:bg-pink-500 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-pink-800 hover:bg-pink-200 dark:text-pink-400 dark:hover:bg-pink-500 dark:hover:text-white"
                      >
                        Export Data
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-pink-200 dark:text-pink-400 dark:hover:bg-pink-500 dark:hover:text-white"
                      >
                        Delete
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-center pb-10">
                <img
                  className="mb-3 h-24 w-24 rounded-full bg-cover object-cover "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_eeiyO4Lulwmr0gHH365C2acJyyB_bEzHQ&usqp=CAU"
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-2xl font-medium  text-pink-800 dark:text-white">
                  Elle Woods
                </h5>
                <span className="text-sm font-semibold text-pink-600 dark:text-pink-200 ">
                  Visual Designer
                </span>
                <div className="mt-4 flex space-x-3  md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center rounded-lg bg-pink-800 px-4 py-2 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300    dark:bg-pink-400   dark:hover:bg-pink-500 dark:focus:ring-pink-800"
                  >
                    Add friend
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-lg border border-gray-300 border-pink-500 bg-white px-4 py-2 text-center text-sm font-medium text-pink-800 hover:bg-gray-100 hover:bg-pink-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-pink-500  dark:bg-inherit dark:text-white dark:hover:bg-pink-500 dark:focus:ring-pink-500"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>

            <div className="h-min max-w-xs rounded-lg border border-pink-500 bg-pink-100 p-6 text-center font-semibold  dark:bg-pink-700 dark:text-white">
              <img
                className="mx-auto mb-3 h-32 w-32 rounded-full "
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="product designer"
              />
              <h3 className="text-lg text-pink-800 dark:text-white">
                {' '}
                John Doe{' '}
              </h3>
              <h3 className="text-sm text-pink-600 dark:text-pink-200">
                {' '}
                Creative Director{' '}
              </h3>
              <p className="mt-4 text-xs text-pink-800 dark:text-pink-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                className="mt-8 rounded-lg bg-pink-800 px-5 py-2 font-semibold uppercase tracking-wider text-white  hover:bg-pink-600 dark:bg-pink-400 dark:hover:bg-pink-800"
                type="button"
                aria-label="Hire Me"
              >
                Hire Me
              </button>
            </div>

            <div className="  h-min max-w-sm rounded-lg border border-pink-500 bg-pink-100 p-5  dark:border-pink-400 dark:bg-pink-700">
              <img
                className="mx-auto h-32 w-32 rounded-full"
                src="https://picsum.photos/200"
                alt="Profile picture"
              />
              <h2 className="mt-3 text-center text-2xl font-semibold text-pink-800 dark:text-white">
                John Doe
              </h2>
              <p className="mt-1 text-center font-semibold text-pink-600 dark:text-pink-200">
                Software Engineer
              </p>
              <div className="mt-5 flex justify-center">
                <a
                  href="#"
                  className="mx-3 rounded-full bg-pink-800 px-4  py-1.5 text-white hover:text-pink-600 dark:bg-pink-400 dark:text-white"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="mx-3 rounded-full bg-pink-800 px-4 py-1.5 text-white hover:text-pink-600 dark:bg-pink-400 dark:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="mx-3 rounded-full bg-pink-800 px-4 py-1.5 text-white  hover:text-pink-600 dark:bg-pink-400 dark:text-white"
                >
                  GitHub
                </a>
              </div>
              <div className="mt-5">
                <h3 className="text-xl font-semibold text-pink-800  dark:text-white">
                  Bio
                </h3>
                <p className="mt-2 text-slate-700 dark:text-pink-200">
                  John is a software engineer with over 10 years of experience
                  in developing web and mobile applications. He is skilled in
                  JavaScript, React, and Node.js.
                </p>
              </div>
            </div>

            <div className="h-min max-w-xs rounded-lg border border-pink-500 bg-pink-100 text-center font-semibold  dark:bg-pink-700 dark:text-white">
              <div className="group relative overflow-hidden ">
                <img
                  className="h-[320px] w-full scale-100 object-cover duration-300 ease-in group-hover:scale-125 lg:h-auto"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/team/member-1.png"
                  alt=""
                />
                <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
                  <div className="text-center">
                    <p className="text-xl font-bold text-white">Robert Brown</p>
                    <p className="text-base font-medium text-gray-300">
                      CEO & Co-Founder
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6 ">
                <span className=" text-base font-normal text-slate-700 dark:text-pink-200">
                  John is a software engineer with over 10 years of experience
                  in developing web and mobile applications.
                </span>
              </div>
            </div>

            <div className="h-min max-w-sm overflow-hidden rounded-lg border border-pink-500 bg-pink-100  dark:border-gray-700 dark:bg-pink-800">
              <div className="overflow-hidden">
                <img
                  className="w-full "
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                  alt="Bonnie Green"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold tracking-tight text-pink-800 dark:text-white">
                  <a href="#">Bonnie Green</a>
                </h3>
                <span className="text-pink-600 dark:text-pink-200">
                  CTO & Co Founder
                </span>
                <p className="mb-4 mt-3 font-light text-slate-700 dark:text-pink-200 ">
                  Bonnie drives the technical strategy of the themesberg
                  platform and brand.
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* JUST TEXT */}
          <div className="flex flex-wrap gap-4">
            <div className="h-min w-full max-w-sm rounded-lg border border-pink-500 bg-pink-100 p-6  dark:border-pink-400  dark:bg-pink-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-pink-800 dark:text-white">
                  Introducing the legally blond theme 2023
                </h5>
              </a>
              <p className="font-base mb-3  text-slate-700  dark:text-pink-200 ">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-pink-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-600"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="h-min w-full max-w-sm rounded-lg border border-pink-500 bg-pink-100 p-6  dark:border-pink-400 dark:bg-pink-700">
              <a href="#">
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-16 w-16 text-pink-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2zm2 0a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7z"
                    ></path>
                  </svg>
                  <h5 className="ml-3 text-2xl font-medium tracking-tight text-pink-800 dark:text-white">
                    Introducing the legally blond theme 2023
                  </h5>
                </div>
              </a>
              <p className="font-base mb-3 mt-2  text-slate-700  dark:text-pink-200">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-pink-800 px-4 py-2 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-600"
              >
                Read more
              </a>
            </div>

            <div className=" h-min   rounded-lg   border border-pink-500 bg-pink-100 text-center  dark:bg-pink-700">
              <div className="border-b-2 border-pink-500 px-6 py-3 text-pink-800 dark:border-pink-400 dark:text-white">
                Featured
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-2xl font-medium leading-tight text-pink-800 dark:text-white dark:hover:bg-pink-500">
                  Special title treatment
                </h5>
                <p className="mb-4 text-base  text-slate-700  dark:text-pink-200">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <button
                  type="button"
                  className="inline-block rounded bg-pink-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-pink-600 "
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Button
                </button>
              </div>
              <div className="border-t-2 border-pink-500 px-6 py-3 text-pink-800 dark:border-pink-400 dark:text-white">
                2 days ago
              </div>
            </div>

            <div className="h-min w-full max-w-sm rounded-lg border border-pink-500 bg-pink-100 p-6  dark:border-pink-400 dark:bg-pink-700">
              <a href="#" className="block text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-pink-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-12 w-12 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-pink-800 dark:text-white">
                  Introducing the legally blond theme 2023
                </h5>
              </a>
              <p className="font-base mb-3 text-center font-sans  text-slate-700  dark:text-pink-300">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href="#"
                className="mt-4 block w-full rounded-lg bg-pink-800 py-2 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-600"
              >
                Read more
              </a>
            </div>
          </div>

          {/* NAV CARDS */}
          <div className="flex flex-wrap gap-4">
            <button className="h-min w-64 rounded-lg border border-b-4 border-pink-500 bg-pink-100 p-8 hover:border-b-4 hover:border-b-pink-500 hover:bg-pink-200 active:bg-pink-100 dark:bg-pink-700">
              <div className="flex items-center justify-center  text-pink-600 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-pink-800  dark:text-white">
                  Content page
                </h3>
                <p className="mt-4 text-sm  text-pink-600 dark:text-pink-200">
                  Get in touch with us
                </p>
              </div>
            </button>

            <button className="h-min w-64 rounded-lg border border-b-4 border-pink-500 bg-pink-100 p-8 hover:border-b-4 hover:border-b-pink-500 hover:bg-pink-200 active:bg-pink-100 dark:bg-pink-700">
              <div className="flex items-center justify-center  text-pink-600 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9a2 2 0 100-4 2 2 0 000 4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14a2 2 0 100-4 2 2 0 000 4z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-pink-800 dark:text-white">
                  Contact Page
                </h3>
                <p className="mt-4 text-sm  text-pink-600 dark:text-pink-200">
                  Get in touch with us
                </p>
              </div>
            </button>

            <button className="h-min w-64 rounded-lg border border-b-4 border-pink-500 bg-pink-100 p-8 hover:border-b-4 hover:border-b-pink-500 hover:bg-pink-200 active:bg-pink-100 dark:bg-pink-700">
              <div className="flex items-center justify-center  text-pink-600 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-pink-800 dark:text-white">
                  About Page
                </h3>
                <p className="mt-4 text-sm  text-pink-600 dark:text-pink-200">
                  Learn more about us
                </p>
              </div>
            </button>

            <button className="h-min w-64 rounded-lg border border-b-4 border-pink-500 bg-pink-100 p-8 hover:border-b-4 hover:border-b-pink-500 hover:bg-pink-200 active:bg-pink-100 dark:bg-pink-700">
              <div className="flex items-center justify-center  text-pink-600 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h18v18H3V3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 9h6m-3 0v6"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-pink-800 dark:text-white">
                  Legal Page
                </h3>
                <p className="mt-4 text-sm  text-pink-600 dark:text-pink-200">
                  Read our legal policies
                </p>
              </div>
            </button>

            <button className="h-min w-64 rounded-lg border border-b-4 border-pink-500 bg-pink-100 p-8 hover:border-b-4 hover:border-b-pink-500 hover:bg-pink-200 active:bg-pink-100 dark:bg-pink-700">
              <div className="flex items-center justify-center  text-pink-600 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6a3 3 0 100-6 3 3 0 000 6zM17.697 19.21C16.949 17.892 15.657 17 14.071 17H9.929C8.343 17 7.05 17.892 6.303 19.21A7.945 7.945 0 014 20c0-1.605.474-3.118 1.292-4.39C5.566 14.932 7.652 14 9.929 14h4.142c2.277 0 4.363.932 5.637 1.61A7.945 7.945 0 0120 20c0-1.605-.474-3.118-1.292-4.39zM12 14a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-pink-800 dark:text-white">
                  Profile Page
                </h3>
                <p className="mt-4 text-sm  text-pink-600 dark:text-pink-200">
                  View your profile information
                </p>
              </div>
            </button>

            <button className="h-min w-64 rounded-lg border border-b-4 border-pink-500 bg-pink-100 p-8 hover:border-b-4 hover:border-b-pink-500 hover:bg-pink-200 active:bg-pink-100 dark:bg-pink-700">
              <div className="flex items-center justify-center  text-pink-600 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-pink-800 dark:text-white">
                  Posts Page
                </h3>
                <p className="mt-4 text-sm  text-pink-600 dark:text-pink-200">
                  Discover the latest posts
                </p>
              </div>
            </button>

            <button className="h-min w-64 rounded-lg border border-b-4 border-pink-500 bg-pink-100 p-8 hover:border-b-4 hover:border-b-pink-500 hover:bg-pink-200 active:bg-pink-100 dark:bg-pink-700">
              <div className="flex items-center justify-center  text-pink-600 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-pink-800 dark:text-white">
                  Documentation
                </h3>
                <p className="mt-4 text-sm  text-pink-600 dark:text-pink-200">
                  Access the documentation
                </p>
              </div>
            </button>

            <button className="h-min w-64 rounded-lg border border-b-4 border-pink-500 bg-pink-100 p-8 hover:border-b-4 hover:border-b-pink-500 hover:bg-pink-200 active:bg-pink-100 dark:bg-pink-700">
              <div className="flex items-center justify-center  text-pink-600 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-pink-800 dark:text-white">
                  Privacy Policy
                </h3>
                <p className="mt-4 text-sm  text-pink-600 dark:text-pink-200">
                  Read our privacy policy
                </p>
              </div>
            </button>

            <button className="h-min w-64 rounded-lg border border-b-4 border-pink-500 bg-pink-100 p-8 hover:border-b-4 hover:border-b-pink-500 hover:bg-pink-200 active:bg-pink-100 dark:bg-pink-700">
              <div className="flex items-center justify-center  text-pink-600 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-pink-800 dark:text-white">
                  Privacy Policy
                </h3>
                <p className="mt-4 text-sm  text-pink-600 dark:text-pink-200">
                  Read our privacy policy
                </p>
              </div>
            </button>
            <button className="h-min w-64 rounded-lg border border-b-4 border-pink-500 bg-pink-100 p-8 hover:border-b-4 hover:border-b-pink-500 hover:bg-pink-200 active:bg-pink-100 dark:bg-pink-700">
              <div className="flex items-center justify-center  text-pink-600 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-pink-800 dark:text-white">
                  Privacy Policy
                </h3>
                <p className="mt-4 text-sm  text-pink-600 dark:text-pink-200">
                  Read our privacy policy
                </p>
              </div>
            </button>
            <button className="h-min w-64 rounded-lg border border-b-4 border-pink-500 bg-pink-100 p-8 hover:border-b-4 hover:border-b-pink-500 hover:bg-pink-200 active:bg-pink-100 dark:bg-pink-700">
              <div className="flex items-center justify-center  text-pink-600 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-pink-800 dark:text-white">
                  Privacy Policy
                </h3>
                <p className="mt-4 text-sm  text-pink-600 dark:text-pink-200">
                  Read our privacy policy
                </p>
              </div>
            </button>
            <button className="h-min w-64 rounded-lg border border-b-4 border-pink-500 bg-pink-100 p-8 hover:border-b-4 hover:border-b-pink-500 hover:bg-pink-200 active:bg-pink-100 dark:bg-pink-700">
              <div className="flex items-center justify-center  text-pink-600 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-24 w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-medium text-pink-800 dark:text-white">
                  Privacy Policy
                </h3>
                <p className="mt-4 text-sm  text-pink-600 dark:text-pink-200">
                  Read our privacy policy
                </p>
              </div>
            </button>
          </div>

          {/* POST CARDS */}

          <div className=" h-min max-w-xs overflow-hidden rounded-lg border border-pink-500  bg-pink-100  dark:bg-pink-700">
            <div className="relative ">
              <img
                className="h-40 w-full  object-cover  dark:bg-pink-700"
                src="https://images.unsplash.com/photo-1553702446-4a0cfb5781f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Product Image"
              />
            </div>
            <div className="p-3">
              <a
                href="#"
                className="text-sm font-medium text-pink-800 dark:text-white"
              >
                Beautiful Summer
              </a>
              <p className="mt-1 text-xs text-slate-700 dark:text-pink-200">
                UV protection and trendy design.
              </p>
              <div className="mt-3 flex justify-start">
                <button className="rounded bg-pink-800 px-3 py-1 text-xs font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-800">
                  Read post
                </button>
              </div>
            </div>
          </div>

          <div className="h-min max-w-sm overflow-hidden rounded-lg border border-pink-500  dark:bg-pink-700  lg:flex lg:max-w-full">
            <div
              className="h-48 flex-none overflow-hidden rounded-t   bg-[url('https://images.unsplash.com/photo-1553702446-4a0cfb5781f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80')] bg-cover text-center lg:h-auto lg:w-48 lg:rounded-l lg:rounded-t-none"
              title="Sunset in the mountains"
            ></div>
            <div className="flex max-w-sm  flex-col justify-between rounded bg-pink-100  p-4 leading-normal dark:bg-pink-700   ">
              <div className="mb-8">
                <p className="flex items-center text-sm font-semibold  text-pink-600 dark:text-pink-300">
                  <svg
                    className="mr-2 h-3 w-3 fill-current text-gray-500 dark:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div className="mb-2 text-2xl font-medium text-pink-800  dark:text-white">
                  Can coffee make you a better developer?
                </div>
                <p className="font-base  text-slate-700  dark:text-pink-300 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="flex items-center">
                <img
                  className="mr-4 h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1553702446-4a0cfb5781f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  alt="Avatar of Jonathan Reinink"
                />
                <div className="text-sm">
                  <p className="leading-none text-pink-800 dark:text-pink-300">
                    Jonathan Reinink
                  </p>
                  <p className="text-pink-700 dark:text-white">Aug 18</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-min max-w-sm overflow-hidden rounded-lg border border-pink-500 bg-pink-100  dark:bg-pink-700">
            <img
              className="w-full"
              src="https://images.unsplash.com/photo-1553702446-4a0cfb5781f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-medium text-pink-800 dark:text-white">
                The Coldest Sunset
              </div>
              <p className="font-base  text-slate-700   dark:text-pink-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pb-2 pt-4">
              <a href="">
                <span className="dark:text-pink- mb-2 mr-2 inline-block rounded-full bg-pink-800 px-3 py-1 text-sm font-semibold  text-white dark:bg-pink-400 dark:hover:bg-pink-500">
                  #winter
                </span>
              </a>
              <a href="">
                <span className="dark:text-pink- mb-2 mr-2 inline-block rounded-full bg-pink-800 px-3 py-1 text-sm font-semibold text-white dark:bg-pink-400 dark:hover:bg-pink-500">
                  #winter
                </span>
              </a>
              <a href="">
                <span className="dark:text-pink- mb-2 mr-2 inline-block rounded-full bg-pink-800 px-3 py-1 text-sm font-semibold text-white dark:bg-pink-400 dark:hover:bg-pink-500">
                  #winter
                </span>
              </a>
            </div>
          </div>

          <div className="h-min max-w-sm  rounded-lg border border-pink-500 bg-white  dark:border-pink-500 dark:bg-pink-700">
            <a
              href="#"
              className="flex rounded-lg bg-pink-100  dark:bg-pink-700"
            >
              <img
                className="mx-auto rounded-t-lg"
                src="https://images.unsplash.com/photo-1553702446-4a0cfb5781f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt=""
              />
            </a>
            <div className="rounded-b-lg bg-pink-100 p-5 dark:bg-pink-700">
              <a href="#">
                <h5 className="mb-2 text-2xl font-medium tracking-tight text-pink-800 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="font-base mb-3  text-slate-700  dark:text-pink-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
              <a
                href="#"
                className="inline-flex items-center rounded-lg bg-pink-800 px-3 py-2 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300  dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-800"
              >
                Read more
                <svg
                  aria-hidden="true"
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          {/*  */}

          {/* START PRODUCTS */}
          <div className="flex flex-wrap gap-4">
            <div className="flex gap-4">
              <div className="h-min ">
                <div className="flex max-w-md overflow-hidden rounded-lg border border-pink-500 bg-white  dark:border-pink-500 dark:bg-pink-700">
                  <div className="w-2/5 bg-white bg-[url('https://m.media-amazon.com/images/I/81OlgDF1wqL._AC_UY695_.jpg')] bg-contain bg-center bg-no-repeat"></div>
                  <div className="w-3/5 bg-pink-100 p-4 dark:bg-pink-700">
                    <h3 className="text-2xl font-medium text-pink-800 dark:text-white">
                      Backpack
                    </h3>
                    <p className="mt-2 text-sm text-slate-700 dark:text-pink-200">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit In
                      odit exercitationem fuga id nam quia
                    </p>
                    <div className="item-center mt-2 flex">
                      <svg
                        className="h-5 w-5 fill-current text-pink-800 dark:text-pink-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                      <svg
                        className="h-5 w-5 fill-current text-pink-800 dark:text-pink-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                      <svg
                        className="h-5 w-5 fill-current text-pink-800 dark:text-pink-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                      <svg
                        className="h-5 w-5 fill-current text-pink-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                      <svg
                        className="h-5 w-5 fill-current text-pink-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    </div>
                    <div className="item-center mt-3 flex justify-between ">
                      <h3 className="text-2xl font-medium text-pink-800  dark:text-white ">
                        $220
                      </h3>
                      <button className="rounded bg-pink-800 px-3 py-2 text-xs font-medium text-white dark:bg-pink-400 dark:hover:bg-pink-500">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" h-min max-w-xs overflow-hidden rounded-lg border border-pink-500  bg-pink-100  dark:bg-pink-700">
                <div className="relative">
                  <img
                    className="h-40 w-full bg-white object-cover p-2"
                    src="https://m.media-amazon.com/images/I/81OlgDF1wqL._AC_UY695_.jpg"
                    alt="Product Image"
                  />
                  <div className="absolute right-0 top-0 m-2 rounded-full bg-pink-800 px-2 py-1 text-xs font-medium text-white">
                    Limited Stock
                  </div>
                </div>
                <div className="p-3">
                  <a
                    href="#"
                    className="text-sm font-medium text-pink-800 dark:text-white"
                  >
                    Stylish Sunglasses
                  </a>
                  <p className="mt-1 text-xs text-pink-800 dark:text-pink-200">
                    UV protection and trendy design.
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-sm font-medium text-pink-800 dark:text-white">
                      $49
                    </p>
                    <button className="rounded bg-pink-800 px-3 py-1 text-xs font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-800">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-min w-80 overflow-hidden rounded-lg border border-pink-500 bg-pink-100  dark:bg-pink-700">
              <div className="flex h-48 w-full flex-col justify-between bg-pink-200 bg-[url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] bg-cover bg-center p-4 dark:bg-pink-700">
                <div className="flex justify-between">
                  <input type="checkbox" />
                  <button className="text-white hover:text-blue-500 dark:text-white dark:hover:text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <span className="select-none rounded border border-pink-500 bg-pink-800 p-0.5 text-xs font-medium uppercase text-white">
                    available
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center p-4">
                <p className="font-base text-center text-xs  font-semibold  text-pink-600 dark:text-pink-100">
                  Hammond robotics
                </p>
                <h3 className="mt-1 text-center text-lg font-medium text-pink-800 dark:text-white">
                  Item name
                </h3>
                <p className="mt-1 text-center text-pink-800 dark:text-pink-200">
                  €1299
                </p>
                <div className="mt-2 inline-flex items-center">
                  <button className="inline-flex items-center rounded-l border border-r border-gray-200 bg-white px-2 py-1 text-pink-800 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
                    <svg
                      className="h-5 w-5 fill-current text-pink-800 dark:text-pink-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="h-5 w-5 fill-current text-pink-800 dark:text-pink-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="h-5 w-5 fill-current text-pink-800 dark:text-pink-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="h-5 w-5 fill-current text-pink-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="h-5 w-5 fill-current text-pink-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  </button>
                </div>
                <button className="mt-4 flex w-full items-center justify-center rounded bg-pink-800 px-4 py-2 text-white hover:bg-pink-500 dark:bg-pink-400 dark:hover:bg-pink-500">
                  Add to order
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="w-80 overflow-hidden rounded-lg border border-pink-500 bg-pink-100  dark:bg-pink-700">
              <div className="flex h-48 w-full flex-col justify-between bg-gray-200 bg-[url('https://images.pexels.com/photos/7989741/pexels-photo-7989741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')] bg-cover bg-center p-4 dark:bg-pink-700">
                <div className="flex justify-between">
                  <button className="text-white hover:text-blue-500 dark:text-white dark:hover:text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
                <div>
                  <span className="select-none rounded border border-pink-500 bg-pink-800 p-0.5 text-xs font-medium uppercase text-white">
                    available
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center p-4">
                <p className="font-base text-center text-xs font-semibold  text-pink-600 dark:text-pink-200">
                  Hammond robotics
                </p>
                <h3 className="mt-1 text-center text-lg font-medium text-pink-800 dark:text-white">
                  Item name
                </h3>
                <p className="mt-1 text-center text-pink-800 dark:text-pink-200">
                  €1299
                </p>
                <div className="mt-2 inline-flex items-center">
                  <button className="inline-flex items-center rounded-l border border-r border-gray-200 bg-white px-2 py-1 text-pink-800 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 12H4"
                      />
                    </svg>
                  </button>
                  <div className="inline-flex select-none items-center border-b border-t border-gray-100 bg-gray-100 px-4 py-1 text-pink-800 hover:bg-gray-100">
                    2
                  </div>
                  <button className="inline-flex items-center rounded-r border border-r border-gray-200 bg-white px-2 py-1 text-pink-800 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
                <button className="mt-4 flex w-full items-center justify-center rounded bg-pink-800 px-4 py-2 text-white hover:bg-pink-700 dark:bg-pink-400  dark:hover:bg-pink-500">
                  Add to order
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
                <div className="mt-4 flex w-full justify-between ">
                  <div className="flex items-center dark:text-pink-200 ">
                    <input
                      id="input1"
                      type="checkbox"
                      className="mr-2 dark:text-pink-200"
                    />
                    <label
                      for="input1"
                      className=" dark:text-white-200 cursor-pointer select-none"
                    >
                      Compare
                    </label>
                  </div>
                  <div>
                    <button className="inline-flex items-center rounded bg-white px-4 py-1 text-pink-800 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">
                      Add to List
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative  flex h-min w-full max-w-xs flex-col overflow-hidden rounded-lg border border-pink-500 bg-pink-100  dark:border-pink-500 dark:bg-pink-700">
              <a
                className="relative  flex h-60 overflow-hidden  bg-white p-6"
                href="#"
              >
                <img
                  className=" object-contain"
                  src="https://m.media-amazon.com/images/I/81OlgDF1wqL._AC_UY695_.jpg"
                  alt="product image"
                />
                <span className="absolute left-0 top-0 m-2 rounded-full bg-pink-800 px-2 text-center text-sm font-medium text-white">
                  39% OFF
                </span>
              </a>
              <div className="mt-4 bg-pink-100 px-5 pb-5 dark:bg-pink-700">
                <a href="#">
                  <h5 className="text-2xl font-medium tracking-tight text-pink-800 dark:text-white">
                    Nike Air MX Super 2500 - Red
                  </h5>
                </a>
                <div className="mb-5 mt-2 flex items-center justify-between">
                  <p>
                    <span className="text-3xl font-medium text-pink-800 dark:text-white">
                      $449
                    </span>
                    <span className="text-sm text-pink-800 line-through dark:text-white">
                      $699
                    </span>
                  </p>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 fill-current text-pink-800 dark:text-pink-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="h-5 w-5 fill-current text-pink-800 dark:text-pink-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="h-5 w-5 fill-current text-pink-800 dark:text-pink-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="h-5 w-5 fill-current text-pink-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <svg
                      className="h-5 w-5 fill-current text-pink-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                    <span className="ml-3 mr-2 rounded px-2.5 py-0.5 text-xs font-semibold text-pink-800  dark:text-white">
                      5.0
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-md bg-pink-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to cart
                </a>
              </div>
            </div>
            <div className=" h-min max-w-md overflow-hidden rounded-lg border border-pink-500 bg-pink-100   dark:bg-pink-700">
              <div className="relative bg-white p-6 ">
                <img
                  className="h-56 w-full object-cover"
                  src="https://m.media-amazon.com/images/I/81OlgDF1wqL._AC_UY695_.jpg"
                  alt="Product Image"
                />
                <div className="absolute right-0 top-0 m-2 rounded-full bg-pink-800 px-2 py-1 text-sm font-medium text-white">
                  New Arrival
                </div>
              </div>
              <div className="p-4">
                <a
                  href="#"
                  className="text-lg font-medium text-pink-800 dark:text-white"
                >
                  Premium Leather Jacket
                </a>
                <p className="text-slate-700 dark:text-pink-200">
                  High-quality leather jacket for a stylish look.
                </p>
                <div className="mt-4 flex flex-row-reverse items-center justify-between">
                  <div>
                    <p className="text-2xl font-medium text-pink-800 dark:text-white">
                      $199
                    </p>
                    <p className="text-sm text-pink-800 line-through dark:text-pink-200">
                      $249
                    </p>
                  </div>
                  <button className="rounded bg-pink-800 px-4 py-2 text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className=" h-min max-w-md overflow-hidden rounded-lg border border-pink-500 bg-pink-100  dark:bg-pink-700">
              <div className="relative bg-white p-6">
                <img
                  className="h-56 w-full object-cover"
                  src="https://m.media-amazon.com/images/I/81OlgDF1wqL._AC_UY695_.jpg"
                  alt="Product Image"
                />
                <div className="absolute left-0 top-0 m-2 rounded-full bg-pink-800 px-2 py-1 text-sm font-medium text-white">
                  Bestseller
                </div>
              </div>
              <div className="p-4">
                <a
                  href="#"
                  className="text-lg font-medium text-pink-800 dark:text-white"
                >
                  Smart Fitness Watch
                </a>
                <p className="text-base  text-slate-700  dark:text-pink-200">
                  Track your fitness goals and stay connected.
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-medium text-pink-800 dark:text-white">
                      $129
                    </p>
                    <div className="mt-1 flex items-center">
                      <svg
                        className="h-5 w-5 fill-current text-pink-500"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 17.27L16.18 21L14.54 13.97L20 9.24L12.81 8.63L10 2L7.19 8.63L0 9.24L5.46 13.97L3.82 21L10 17.27Z" />
                      </svg>
                      <svg
                        className="h-5 w-5 fill-current text-pink-500"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 17.27L16.18 21L14.54 13.97L20 9.24L12.81 8.63L10 2L7.19 8.63L0 9.24L5.46 13.97L3.82 21L10 17.27Z" />
                      </svg>
                      <svg
                        className="h-5 w-5 fill-current text-pink-500"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 17.27L16.18 21L14.54 13.97L20 9.24L12.81 8.63L10 2L7.19 8.63L0 9.24L5.46 13.97L3.82 21L10 17.27Z" />
                      </svg>
                      <svg
                        className="h-5 w-5 fill-current text-pink-500"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 17.27L16.18 21L14.54 13.97L20 9.24L12.81 8.63L10 2L7.19 8.63L0 9.24L5.46 13.97L3.82 21L10 17.27Z" />
                      </svg>
                      <svg
                        className="h-5 w-5 fill-current text-pink-500"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 17.27L16.18 21L14.54 13.97L20 9.24L12.81 8.63L10 2L7.19 8.63L0 9.24L5.46 13.97L3.82 21L10 17.27Z" />
                      </svg>
                    </div>
                  </div>
                  <button className="rounded bg-pink-800 px-4 py-2 text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="h-min w-full max-w-sm rounded-lg border border-pink-500 bg-pink-100  dark:border-pink-400 dark:bg-pink-700">
              <a href="#" className="flex w-full rounded-t-lg bg-white p-6">
                <img
                  className="max-h-60 rounded-t-lg"
                  src="https://m.media-amazon.com/images/I/71Bmmd0-WvL._AC_UX575_.jpg"
                  alt="product image"
                />
              </a>
              <div className="px-5 py-5">
                <a href="#">
                  <h5 className="text-2xl font-medium tracking-tight text-pink-800 dark:text-white">
                    Strappy Heels for Women Chunky Heels High Heeled Sandals
                    with Lace
                  </h5>
                </a>
                <div className="mb-5 mt-2.5 flex items-center">
                  <span className=" mr-2 rounded bg-pink-800 px-2.5 py-0.5 text-xs font-semibold text-white dark:bg-pink-200 dark:text-pink-700">
                    5.0
                  </span>
                  <svg
                    className="h-5 w-5 fill-current text-pink-800 dark:text-pink-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current text-pink-800 dark:text-pink-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current text-pink-800 dark:text-pink-400"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="h-5 w-5 fill-current text-pink-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-medium text-pink-800 dark:text-white">
                    $599
                  </span>
                  <a
                    href="#"
                    className="rounded bg-pink-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-600"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            <div className="relative flex  h-min max-w-lg flex-wrap justify-center overflow-hidden rounded-lg border border-pink-500 bg-pink-100 dark:bg-pink-700">
              <div className="group flex  flex-col">
                <div className="relative flex h-48 w-full items-center justify-center overflow-hidden  bg-pink-100 text-base text-pink-800  dark:bg-pink-700 dark:text-white  md:h-56 lg:h-[24rem]">
                  <img
                    src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"
                    className="duration-400 h-full w-full scale-100 object-cover transition-all group-hover:scale-110"
                    alt=""
                  />
                  <div className="invisible absolute z-10 h-[95%] w-[95%] border-4 border-pink-500 opacity-0 transition-all duration-500 group-hover:visible group-hover:scale-90 group-hover:opacity-100"></div>
                </div>

                <div className="p-6">
                  <a
                    href="./single_post.html"
                    className="mb-1 block text-center text-lg text-pink-800 transition-colors duration-150 hover:text-pink-500 dark:text-white md:text-xl"
                  >
                    Wild West Hoodie
                  </a>
                  <p className="mb-4 text-center text-sm font-medium text-pink-600 dark:text-pink-300 md:text-sm">
                    A awesome pair of pink shoes for you to wear.
                  </p>
                  <div className="flex justify-center gap-x-3">
                    <a
                      href="/track_order.html"
                      className="rounded-lg  bg-white px-4 py-2 text-sm tracking-wider text-pink-800  hover:bg-gray-100 dark:bg-pink-400 dark:text-white"
                      type="button"
                      aria-label="Add"
                    >
                      Add
                    </a>
                    <a
                      href="/track_order.html"
                      className="rounded-lg border bg-pink-800 px-4 py-2 text-sm  tracking-wider text-white  hover:bg-pink-600 dark:border-pink-200 dark:bg-pink-700 dark:hover:bg-pink-800"
                      type="button"
                      aria-label="View"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-min w-full max-w-sm overflow-hidden rounded-lg border border-pink-500 bg-pink-100   dark:border-pink-400 dark:bg-pink-700 ">
              <div className="flex w-full items-center bg-white">
                <img
                  alt="Unpretentious Baker"
                  className="h-60 w-auto object-scale-down"
                  src="https://m.media-amazon.com/images/I/819CSxjb+AL._SL1500_.jpg"
                />
              </div>
              <div className="space-y-4 p-6">
                <h5 className="text-2xl font-medium text-pink-800 dark:text-white">
                  Everything Bagel Seasoning
                </h5>
                <p className="text-base font-normal leading-tight text-slate-700 dark:text-pink-200">
                  Everything Bagel Seasoning, 2 cup Shaker Jar, Add Texture &
                  Flavor to Any Recipe, Mix of Sesame Seeds, Poppy Seeds,
                  Garlic, Onion & Salt, Convenient Shaker Jar
                </p>
                <div className="flex items-center   text-pink-800 dark:text-white">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-medium tracking-tight">
                    300
                  </span>
                  <span className="font-base ml-1 text-2xl  text-slate-700  dark:text-pink-200">
                    56
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    className=" inline-flex w-full justify-center rounded-lg bg-pink-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-400 dark:focus:ring-pink-600"
                  >
                    Subscribe & Save
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-lg bg-pink-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-400 dark:focus:ring-pink-600"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
            <div className="flex h-min w-full max-w-md flex-col  overflow-hidden rounded-lg border border-pink-500 bg-pink-100  dark:border-pink-400 dark:bg-pink-700 ">
              <div className="flex">
                <img src="https://img.freepik.com/free-photo/pasta-spaghetti-with-shrimps-sauce_1220-5072.jpg?w=2000&t=st=1678041911~exp=1678042511~hmac=e4aa55e70f8c231d4d23832a611004f86eeb3b6ca067b3fa0c374ac78fe7aba6" />
              </div>

              <div className="space-y-4 p-6">
                <h5 className="text-2xl font-medium text-pink-800 dark:text-white">
                  Spagetti with shrimp sauce
                </h5>
                <div className="flex items-baseline text-pink-800 dark:text-white">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-medium tracking-tight">
                    700
                  </span>
                  <span className="font-base ml-1 text-2xl  text-slate-700  dark:text-pink-200">
                    MVR
                  </span>
                </div>
                <p className="my-6q text-base font-normal leading-tight text-slate-700 dark:text-pink-200">
                  Our shrimp sauce is made with mozzarella, a creamy taste of
                  shrimp with an extra kick of spices.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    target="_blank"
                    href="foodiesapp://food/1001"
                    className="inline-flex w-full justify-center rounded-lg bg-pink-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-400 dark:focus:ring-pink-600"
                  >
                    View on foodies
                  </a>
                  <a
                    target="_blank"
                    href="https://apps.apple.com/us/app/id1493631471"
                    className="mt-1.5 inline-flex w-full justify-center rounded-lg bg-pink-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-400 dark:focus:ring-pink-600"
                  >
                    Download app
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* You here */}

          {/* Just Text card */}

          <div className="flex flex-wrap gap-4 ">
            <div className="flex h-min w-96 max-w-lg flex-col rounded-lg border border-pink-500 bg-pink-100 p-4  dark:border-pink-400 dark:bg-pink-700 sm:p-8">
              <h5 className="mb-4 text-2xl font-medium text-pink-800 dark:text-white">
                Standard plan
              </h5>
              <div className="flex items-baseline text-pink-800 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-medium tracking-tight">49</span>
                <span className="font-base ml-1 text-2xl  text-pink-800  dark:text-pink-200">
                  /month
                </span>
              </div>

              <ul role="list" className="my-7 space-y-5 ">
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0  text-pink-600 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight  text-slate-700 dark:text-pink-200">
                    2 team members
                  </span>
                </li>

                <li className="flex space-x-3 line-through decoration-pink-500">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-pink-300 dark:text-pink-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight  text-slate-700 dark:text-pink-200">
                    Sketch Files
                  </span>
                </li>
              </ul>
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-lg bg-pink-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-400 dark:focus:ring-pink-600"
              >
                Choose plan
              </button>
            </div>
            <div className="flex h-min w-96 max-w-lg flex-col rounded-lg border border-pink-500 bg-pink-100 p-4  dark:border-pink-400 dark:bg-pink-700 sm:p-8">
              <div id="starter-plan" className=" w-full self-center">
                <div className="mb-4 text-2xl font-medium text-pink-800 dark:text-white">
                  Starter plan
                </div>
                <div className="  font-medium text-pink-600 dark:text-pink-200">
                  Starts at
                </div>
                <div className="mb-4 text-5xl font-medium text-pink-800 dark:text-white">
                  $49
                </div>
                <a
                  href="#"
                  className="mb-4 flex justify-center rounded-lg bg-pink-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-600"
                >
                  Buy now
                </a>
                <a
                  href="#"
                  className="mb-4 flex items-center font-medium text-pink-800 hover:text-pink-700 dark:text-pink-200"
                >
                  View team pricing
                  <svg
                    className="ml-2 h-5 w-5 text-pink-800 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
                <p className="00 text-sm text-slate-700 dark:text-pink-200">
                  *To see the monthly email send limit included with your
                  specific plan, click Calculate my price. If your plan's
                  contact or email send limit is exceeded, you will be charged
                  for overages.
                </p>
              </div>
            </div>

            <div className="flex h-min w-96 max-w-lg flex-col rounded-lg border border-pink-500 bg-pink-100 p-4  dark:border-pink-400 dark:bg-pink-700 sm:p-8">
              <div className="items-center justify-between md:flex">
                <div>
                  <div className="mb-2 flex justify-between">
                    <h3 className="text-2xl font-bold text-pink-800 dark:text-white">
                      Pro Plan
                    </h3>
                    <div className="flex items-center md:hidden">
                      <div className="mr-1 text-xl font-medium text-pink-800 dark:text-white lg:text-5xl">
                        $599
                      </div>
                      <span className="text-pink-500 dark:text-pink-400">
                        /month
                      </span>
                    </div>
                  </div>
                  <p className="text-lg   text-slate-700 dark:text-pink-200 md:mr-2">
                    Best for large scale uses and extended redistribution
                    rights.
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="text-2xl font-medium text-pink-800 dark:text-white lg:text-5xl">
                    $599
                  </div>
                  <span className="font-medium text-pink-600 dark:text-pink-200">
                    per month
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="my-5 rounded-lg bg-pink-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-600 lg:my-8"
              >
                Upgrade now
              </a>
              <div className="justify-between space-y-4 sm:flex sm:space-y-0">
                <ul role="list" className="space-y-4">
                  <li className="flex space-x-2.5">
                    <svg
                      className="h-5 w-5 flex-shrink-0  text-pink-600 dark:text-pink-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className=" leading-tight  text-slate-700 dark:text-pink-200">
                      A/B Testing
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="h-5 w-5 flex-shrink-0  text-pink-600 dark:text-pink-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className=" leading-tight  text-slate-700 dark:text-pink-200">
                      Accepts Payments
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="h-5 w-5 flex-shrink-0  text-pink-600 dark:text-pink-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className=" leading-tight  text-slate-700 dark:text-pink-200">
                      Content Management
                    </span>
                  </li>
                  <li className="flex space-x-2.5">
                    <svg
                      className="h-5 w-5 flex-shrink-0  text-pink-600 dark:text-pink-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className=" leading-tight  text-slate-700 dark:text-pink-200">
                      Analytics
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex h-min w-96 max-w-lg flex-col rounded-lg border border-pink-500 bg-pink-100 p-4  dark:border-pink-400 dark:bg-pink-700 sm:p-8">
              <h3 className="mb-4 text-2xl font-medium text-pink-800 dark:text-white">
                Starter
              </h3>
              <p className="  text-slate-700 dark:text-pink-200 sm:text-lg">
                Best option for personal use & for your next project.
              </p>
              <div className="flex items-baseline text-pink-800 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-medium tracking-tight">29</span>
                <span className="font-base ml-1 text-2xl text-pink-800 dark:text-pink-200">
                  /month
                </span>
              </div>
              <ul role="list" className="my-7 space-y-5 ">
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0  text-pink-600 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight  text-slate-700 dark:text-pink-200">
                    Put your list item here{' '}
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0  text-pink-600 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight  text-slate-700 dark:text-pink-200">
                    Put your list item here{' '}
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0  text-pink-600 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight  text-slate-700 dark:text-pink-200">
                    Put your list item here{' '}
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0  text-pink-600 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight  text-slate-700 dark:text-pink-200">
                    Put your list item here{' '}
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0  text-pink-600 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-normal leading-tight  text-slate-700 dark:text-pink-200">
                    Put your list item here{' '}
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-flex w-full justify-center rounded-lg bg-pink-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-400 dark:focus:ring-pink-600"
              >
                Get started
              </a>
            </div>

            <div className=" flex max-w-xl flex-col rounded-lg border border-pink-500 bg-pink-100 p-6 text-center  dark:border-pink-400 dark:bg-pink-700 xl:max-w-lg xl:p-8">
              <h3 className="mb-4 text-2xl font-medium text-pink-800 dark:text-white">
                Starter
              </h3>
              <span className="text-5xl font-medium text-pink-800 dark:text-white">
                $29
              </span>
              <p className="mb-1 mt-4 text-slate-700 dark:text-pink-200">
                $19 USD per month, paid annually
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center font-medium text-pink-800 hover:text-pink-900 dark:text-pink-200 dark:hover:text-pink-300"
              >
                Go to annual plan
                <svg
                  className="ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 011.414-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="my-8 rounded-lg bg-pink-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-600 focus:ring-4 focus:ring-pink-300 dark:bg-pink-400 dark:focus:ring-pink-600"
              >
                Get started
              </a>

              <ul
                role="list"
                className="space-y-4 text-left text-slate-700 dark:text-pink-200"
              >
                <li className="flex items-center space-x-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-pink-600 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>All tools you need to manage payments</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-pink-600 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>No setup, monthly, or hidden fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-pink-600 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Comprehensive security</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-pink-600 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Get hundreds of feature updates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-pink-600 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Payouts to your bank account</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-pink-600 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Financial reconciliation and reporting</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-pink-600 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>24×7 phone, chat, and email support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 flex-shrink-0 text-pink-600 dark:text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Check icon</title>
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Robust developer platform</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CRUD */}
          <div className="flex gap-4">
            <div className="w-sm h-min rounded-lg border border-pink-500 bg-pink-100 px-8 py-8 dark:border-pink-400 dark:bg-pink-700">
              <form action="#" className="space-y-8">
                <div>
                  <label
                    for="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="dark:-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-pink-500 focus:ring-pink-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-pink-500 dark:focus:ring-pink-500"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="dark:-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900  focus:border-pink-500 focus:ring-pink-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-pink-500 dark:focus:ring-pink-500"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    for="message"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-pink-500 focus:ring-pink-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-pink-500 dark:focus:ring-pink-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="rounded-lg border bg-pink-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 sm:w-fit"
                >
                  Send message
                </button>
              </form>
            </div>

            <div className="h-min max-w-md rounded-lg border border-pink-500 bg-pink-100 px-8 py-8 dark:border-pink-400 dark:bg-pink-700">
              <form
                action="#"
                className="mx-auto grid max-w-screen-md grid-cols-1 gap-8 sm:grid-cols-2"
              >
                <div>
                  <label
                    for="first-name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Bonnie"
                    required
                  />
                </div>
                <div>
                  <label
                    for="last-name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Green"
                    required
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="phone-number"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="phone-number"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="+12 345 6789"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    for="message"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Leave a comment..."
                  ></textarea>
                  <p className="mt-4 text-sm text-gray-500 dark:text-pink-200">
                    By submitting this form you agree to our{' '}
                    <a
                      href="#"
                      className="text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      terms and conditions
                    </a>{' '}
                    and our{' '}
                    <a
                      href="#"
                      className="text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      privacy policy
                    </a>{' '}
                    which explains how we may collect, use and disclose your
                    personal information including to third parties.
                  </p>
                </div>
                <button
                  type="submit"
                  className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg px-5 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit"
                >
                  Send message
                </button>
              </form>
            </div>

            <div className="max-md h-min rounded-lg border border-pink-500 bg-pink-100 px-8 py-8 dark:border-pink-400 dark:bg-pink-700">
              <form
                action="#"
                className="mx-auto grid max-w-screen-md grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
              >
                <div>
                  <label
                    for="first-name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Bonnie"
                    required
                  />
                </div>

                <div>
                  <label
                    for="last-name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="Green"
                    required
                  />
                </div>

                <div>
                  <label
                    for="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>

                <div>
                  <label
                    for="phone-number"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    id="phone-number"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder="+(12) 345 6789"
                    required
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-1.5">
                    <label
                      for="country"
                      className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Country
                    </label>
                    <button
                      type="button"
                      data-popover-target="country-description"
                      className="h-4 w-4"
                    >
                      <svg
                        aria-hidden="true"
                        className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Show information</span>
                    </button>
                    <div
                      data-popover
                      id="country-description"
                      role="tooltip"
                      className="invisible absolute z-10 inline-block w-72 rounded-lg border border-gray-200 bg-white text-sm font-light text-gray-500 opacity-0  transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    >
                      <div className="space-y-2 p-3">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Country based on fiscal residency
                        </h3>
                        <p>
                          Report helps navigate cumulative growth of community
                          activities. Ideally, the chart should have a growing
                          trend, as stagnating chart signifies a significant
                          decrease of community activity.
                        </p>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Double citizenship
                        </h3>
                        <p>
                          For each date bucket, the all-time volume of
                          activities is calculated. This means that activities
                          in period n contain all activities up to period n,
                          plus the activities generated by your community in
                          period.
                        </p>
                        <a
                          href="#"
                          className="text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700 flex items-center font-medium"
                        >
                          Read more{' '}
                          <svg
                            className="ml-1 h-4 w-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                      <div data-popper-arrow></div>
                    </div>
                  </div>
                  <select
                    id="country"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  >
                    <option>Select a country</option>
                    <option value="US" selected>
                      United States
                    </option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="GB">United Kingdom</option>
                    <option value="ES">Spain</option>
                    <option value="CA">Canada</option>
                    <option value="JP">Japan</option>
                    <option value="CN">People's Republic of China</option>
                  </select>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-1.5">
                    <label
                      for="language"
                      className="block text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Language
                    </label>
                    <button
                      type="button"
                      data-popover-target="language-description"
                      className="h-4 w-4"
                    >
                      <svg
                        aria-hidden="true"
                        className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span className="sr-only">Show information</span>
                    </button>
                    <div
                      data-popover
                      id="language-description"
                      role="tooltip"
                      className="invisible absolute z-10 inline-block w-72 rounded-lg border border-gray-200 bg-white text-sm font-light text-gray-500 opacity-0  transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    >
                      <div className="space-y-2 p-3">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Choosing an international language
                        </h3>
                        <p>
                          Report helps navigate cumulative growth of community
                          activities. Ideally, the chart should have a growing
                          trend, as stagnating chart signifies a significant
                          decrease of community activity.
                        </p>
                        <a
                          href="#"
                          className="text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700 flex items-center font-medium"
                        >
                          Read more{' '}
                          <svg
                            className="ml-1 h-4 w-4"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                      <div data-popper-arrow></div>
                    </div>
                  </div>
                  <select
                    id="language"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  >
                    <option>Select a language</option>
                    <option value="US" selected>
                      English (US)
                    </option>
                    <option value="DE">German</option>
                    <option value="FR">French</option>
                    <option value="ES">Spanish</option>
                    <option value="JP">Japanese</option>
                    <option value="NL">Dutch</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    for="message"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                    placeholder=""
                  ></textarea>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="terms"
                      value=""
                      className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                    />
                    <label
                      for="terms"
                      className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400"
                    >
                      I confirm that you have read and agreed to
                      <a
                        href="#"
                        title=""
                        className="font-medium text-gray-900 underline hover:no-underline dark:text-white"
                      >
                        Flowbite's Terms of Service
                      </a>
                      and
                      <a
                        href="#"
                        title=""
                        className="font-medium text-gray-900 underline hover:no-underline dark:text-white"
                      >
                        Privacy Statement
                      </a>
                      .
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg px-5 py-3 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 sm:w-fit"
                >
                  Send message
                </button>
              </form>
            </div>

            <div className="h-min max-w-sm rounded-lg border border-pink-500 bg-pink-100 px-8 py-8 dark:border-pink-400 dark:bg-pink-700">
              <h2 className="mb-4 text-center text-2xl font-medium tracking-tight text-pink-800 dark:text-white">
                Contact Us
              </h2>
              <p className="font-base mb-4 text-center text-slate-700 dark:text-gray-400 dark:text-pink-200 sm:text-lg ">
                Got a technical issue? Want to send feedback about a beta
                feature? Need details about our Business plan? Let us know.
              </p>
              <form action="#" className="space-y-8">
                <div>
                  <label
                    for="email"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="dark:-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-pink-500 focus:ring-pink-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-pink-500 dark:focus:ring-pink-500"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="dark:-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900  focus:border-pink-500 focus:ring-pink-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-pink-500 dark:focus:ring-pink-500"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    for="message"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-pink-500 focus:ring-pink-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-pink-500 dark:focus:ring-pink-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="rounded-lg border bg-pink-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 sm:w-fit"
                >
                  Send message
                </button>
              </form>
            </div>
          </div>

          <div className="h-min w-full rounded-lg border border-pink-500 bg-pink-100 p-4 text-center  dark:border-pink-500 dark:bg-pink-700 sm:p-8">
            <h5 className="mb-2 text-3xl font-medium text-pink-800 dark:text-white">
              Work fast from anywhere
            </h5>
            <p className="font-base mb-5  text-slate-700  dark:text-pink-200 sm:text-lg">
              Stay up to date and move work forward with Flowbite on iOS &
              Android. Download the app today.
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-lg bg-pink-800 px-4 py-2.5 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-800 sm:w-auto"
              >
                <svg
                  className="mr-3 h-7 w-7"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="apple"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
                <div className="text-left">
                  <div className="mb-1 text-xs text-white">Download on the</div>
                  <div className="-mt-1 font-sans text-sm font-semibold text-white">
                    Mac App Store
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-lg bg-pink-800 px-4 py-2.5 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-800 sm:w-auto"
              >
                <svg
                  className="mr-3 h-7 w-7"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google-play"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                  ></path>
                </svg>
                <div className="text-left">
                  <div className="mb-1 text-xs text-white">Get in on</div>
                  <div className="-mt-1 font-sans text-sm font-semibold text-white">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="grid overflow-hidden rounded-lg border border-pink-500 bg-pink-100  dark:border-pink-500 dark:bg-pink-700 md:mb-12 md:grid-cols-2">
            <figure className="flex flex-col items-center justify-center rounded-t-lg border-b border-pink-500 bg-pink-100 p-8 text-center dark:border-pink-500 dark:bg-pink-700 md:rounded-t-none md:rounded-tl-lg md:border-r">
              <blockquote className="mx-auto mb-4 max-w-2xl space-y-4  text-pink-800 dark:text-white lg:mb-8">
                <h3 className="text-lg font-semibold text-pink-800 dark:text-white">
                  Very easy this was to integrate
                </h3>
                <p className="mx-auto my-auto w-4/5  text-xl italic text-slate-700  dark:text-pink-200">
                  If you care for your time, I hands down would go with this."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center space-x-3">
                <img
                  className="h-9 w-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 text-left font-medium dark:text-white">
                  <div className="text-pink-800 dark:text-white">
                    Bonnie Green
                  </div>
                  <div className="text-sm  text-pink-600 dark:text-white">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center rounded-t-lg border-b border-pink-500 bg-pink-100 p-8 text-center dark:border-pink-500 dark:bg-pink-700 md:rounded-t-none md:rounded-tl-lg ">
              <blockquote className="mx-auto mb-4 max-w-2xl space-y-4 text-pink-800 dark:text-white lg:mb-8">
                <h3 className="text-lg font-semibold text-pink-800 dark:text-white">
                  Very easy this was to integrate
                </h3>
                <p className="mx-auto my-auto w-4/5  text-xl italic text-slate-700  dark:text-pink-200">
                  If you care for your time, I hands down would go with this."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center space-x-3">
                <img
                  className="h-9 w-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 text-left font-medium dark:text-white">
                  <div className="text-pink-800 dark:text-white">
                    Bonnie Green
                  </div>
                  <div className="text-sm  text-pink-600 dark:text-white">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center rounded-t-lg  border-pink-500 bg-pink-100 p-8 text-center dark:border-pink-500 dark:bg-pink-700 md:rounded-t-none md:rounded-tl-lg md:border-r">
              <blockquote className="mx-auto mb-4 max-w-2xl space-y-4 text-pink-800 dark:text-white lg:mb-8">
                <h3 className="text-lg font-semibold text-pink-800 dark:text-white">
                  Very easy this was to integrate
                </h3>
                <p className="mx-auto my-auto w-4/5  text-xl italic text-slate-700  dark:text-pink-200">
                  If you care for your time, I hands down would go with this."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center space-x-3">
                <img
                  className="h-9 w-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 text-left font-medium dark:text-white">
                  <div className="text-pink-800 dark:text-white">
                    Bonnie Green
                  </div>
                  <div className="text-sm  text-pink-600 dark:text-white">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center justify-center rounded-t-lg  border-pink-500 bg-pink-100 p-8 text-center dark:border-pink-500 dark:bg-pink-700 md:rounded-t-none md:rounded-tl-lg ">
              <blockquote className="mx-auto mb-4 max-w-2xl space-y-4 text-pink-800 dark:text-white lg:mb-8">
                <h3 className="text-lg font-semibold text-pink-800 dark:text-white">
                  Very easy this was to integrate
                </h3>
                <p className="mx-auto my-auto w-4/5  text-xl italic text-slate-700  dark:text-pink-200">
                  If you care for your time, I hands down would go with this."
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center space-x-3">
                <img
                  className="h-9 w-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 text-left font-medium dark:text-white">
                  <div className="text-pink-800 dark:text-white">
                    Bonnie Green
                  </div>
                  <div className="text-sm  text-pink-600 dark:text-white">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="mx-3 h-min w-full overflow-hidden rounded-lg border border-pink-500 bg-pink-100 dark:border-pink-400 dark:bg-pink-700 md:mx-0 md:w-6/12 lg:mx-0 lg:w-6/12">
            <div className="flex w-full justify-between p-3">
              <div className="flex">
                <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-500">
                  <img
                    src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                    alt="profilepic"
                  />
                </div>
                <span className="ml-2 pt-1 text-sm font-bold text-pink-800 dark:text-white">
                  braydoncoyer
                </span>
              </div>
              <span className="cursor-pointer rounded px-2 hover:bg-gray-300">
                <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
              </span>
            </div>
            <img
              className="w-full bg-cover"
              src="https://3.bp.blogspot.com/-Chu20FDi9Ek/WoOD-ehQ29I/AAAAAAAAK7U/mc4CAiTYOY8VzOFzBKdR52aLRiyjqu0MwCLcBGAs/s1600/DSC04596%2B%25282%2529.JPG"
            />
            <div className="px-3 pb-2">
              <div className="pt-2">
                <i className="far fa-heart cursor-pointer text-pink-800 dark:text-white"></i>
                <span className="text-sm font-medium text-gray-400">
                  12 likes
                </span>
              </div>
              <div className="pt-1">
                <div className="mb-2 text-sm">
                  <span className="mr-2 font-medium text-pink-800 dark:text-white">
                    braydoncoyer
                  </span>{' '}
                  Lord of the Rings is my favorite film-series. One day I'll
                  make my way to New Zealand to visit the Hobbiton set!
                </div>
              </div>
              <div className="mb-2 cursor-pointer text-sm font-medium text-gray-400">
                View all 14 comments
              </div>
              <div className="mb-2">
                <div className="mb-2 text-sm">
                  <span className="mr-2 font-medium text-pink-800 dark:text-white">
                    razzle_dazzle
                  </span>{' '}
                  Dude! How cool! I went to New Zealand last summer and had a
                  blast taking the tour! So much to see! Make sure you bring a
                  good camera when you go!
                </div>
              </div>
            </div>
          </div>

          <div className="h-min rounded-lg border border-pink-500 bg-pink-100 p-4  dark:border-pink-400 dark:bg-pink-700">
            <div className="flex-none lg:flex">
              <div className="mb-3 h-full w-full lg:mb-0 lg:h-48 lg:w-48">
                <img
                  src="https://images.unsplash.com/photo-1622180203374-9524a54b734d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
                  alt="Just a flower"
                  className="w-full rounded-2xl object-scale-down lg:h-48 lg:object-cover"
                />
              </div>
              <div className="ml-3 flex-auto justify-evenly py-2">
                <div className="flex flex-wrap">
                  <div className="w-full flex-none text-xs font-medium font-semibold text-pink-600 dark:text-pink-200">
                    Shop
                  </div>
                  <h2 className="flex-auto text-lg font-medium text-pink-800 dark:text-white">
                    Massive Dynamic
                  </h2>
                </div>
                <p className="mt-3"></p>
                <div className="flex py-4 text-sm text-gray-500">
                  <div className="inline-flex flex-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-3 h-5 w-5 text-gray-400"
                      fill="none"
                      viewbox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <p className="text-pink-700 dark:text-white">Cochin, KL</p>
                  </div>
                  <div className="inline-flex flex-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-5 w-5 text-gray-400"
                      fill="none"
                      viewbox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <p className="text-pink-700 dark:text-white">05-25-2021</p>
                  </div>
                </div>
                <div className="flex space-x-3 text-sm font-medium">
                  <div className="flex flex-auto space-x-3">
                    <button className="mb-2 inline-flex items-center space-x-2 rounded-lg border border-pink-500 bg-white px-4 py-2 tracking-wider text-pink-800  hover:bg-gray-100 hover:bg-pink-500 hover:text-white dark:bg-inherit dark:text-white md:mb-0">
                      <span>62 Products</span>
                    </button>
                  </div>
                  <button
                    className="inline-flex items-center rounded-lg bg-pink-800 px-4 py-2 text-center text-sm font-medium text-white hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-800"
                    type="button"
                    aria-label="like"
                  >
                    Edit Shop
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default test;
