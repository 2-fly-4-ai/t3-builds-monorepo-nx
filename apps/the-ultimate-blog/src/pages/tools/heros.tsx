import React from 'react';
import Link from 'next/link';
import { cn } from 'libs/shared/ui/src/utils/utils';
import MainLayout from '../../layouts/MainLayout';

function heros() {
  return (
    <MainLayout>
      <div className="  h-screen snap-y  snap-mandatory overflow-y-scroll">
        {' '}
        <section className="flex h-[100vh] w-full snap-start items-center justify-center bg-yellow-200 dark:bg-gray-900">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-blue-700 bg-yellow-300 p-4 px-6 py-3 font-bold text-blue-700 shadow-md transition duration-300 ease-out dark:border-blue-700 dark:bg-gray-700  dark:text-blue-200"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-blue-700 duration-300 group-hover:translate-x-0 dark:text-blue-200">
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
                <span className="ease absolute flex h-full w-full transform items-center justify-center transition-all duration-300 group-hover:translate-x-full dark:border-blue-700">
                  Follow Us To Minion Land
                </span>
                <span className="invisible relative">
                  Follow Us To Minion Land
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-blue-700 dark:text-blue-200 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into the Minion Dominion: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-blue-700 dark:text-blue-200 sm:text-xl sm:leading-8">
                Be part of our cheery community of tech enthusiasts. Enhance
                your skills, Boost your brand, &nbsp;
                <span className="text-yellow-400">Benefit galore.</span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-yellow-400 px-8 py-3 text-base font-medium text-blue-700 hover:bg-yellow-500 dark:border-yellow-400 dark:bg-gray-900 dark:text-blue-200 dark:text-yellow-400 dark:hover:bg-yellow-600 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Minion Squad
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-blue-700 px-8 py-3 text-base font-medium text-yellow-300 hover:bg-blue-800 dark:text-yellow-200 dark:hover:bg-blue-900 md:px-10 md:py-4 md:text-lg"
                >
                  Our Tricks on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="snap flex h-full w-full snap-start items-center justify-center bg-gradient-to-r from-pink-600 via-red-500 to-red-600 dark:from-gray-900 dark:to-gray-900">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white bg-red-500 p-4 px-6 py-3 font-bold text-white shadow-md transition duration-300 ease-out dark:border-red-400 dark:bg-red-700 dark:text-red-200"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-white duration-300 group-hover:translate-x-0">
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
                  Connect With Us on Social Media
                </span>
                <span className="invisible relative">
                  Connect With Us on Social Media
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-white dark:text-gray-200 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Ignite Your Creativity with Strawberry Pop Design
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-white dark:text-gray-300 sm:text-xl sm:leading-8">
                Engage in the Strawberry Pop Design Community. Unleash your
                creativity, Establish your brand,&nbsp;
                <span className="text-yellow-300">Earn while you learn.</span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 dark:border-red-400 dark:bg-red-700 dark:text-red-200 dark:hover:bg-red-800 md:px-10 md:py-4 md:text-lg"
                >
                  Join the Revolution
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-red-700 hover:bg-gray-100 dark:border-red-500 dark:bg-gray-800 dark:text-red-200 dark:hover:bg-gray-100 md:px-10 md:py-4 md:text-lg"
                >
                  Source Code on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-[100vh] w-full snap-start items-center justify-center bg-gradient-to-r from-green-500 via-green-600 to-green-700 dark:from-gray-900 ">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white bg-green-700 p-4 px-6 py-3 font-bold text-white shadow-md transition duration-300 ease-out dark:border-green-400 dark:bg-green-800 dark:text-green-200"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-white duration-300 group-hover:translate-x-0">
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
                  Engage With Us on Social Media
                </span>
                <span className="invisible relative">
                  Engage With Us on Social Media
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-white dark:text-gray-200 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Discover the Freshness of Crisp Green Apple Design
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-white dark:text-gray-300 sm:text-xl sm:leading-8">
                Experience the Crisp Green Apple Design Community. Boost your
                creativity, Manifest your brand, &nbsp;
                <span className="text-yellow-300">Earn while you evolve.</span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-green-800 px-8 py-3 text-base font-medium text-white hover:bg-green-900 dark:border-green-400 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800 md:px-10 md:py-4 md:text-lg"
                >
                  Begin Your Journey
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-green-700 hover:bg-gray-100 dark:border-green-500 dark:bg-gray-800 dark:text-green-200 dark:hover:bg-gray-100 md:px-10 md:py-4 md:text-lg"
                >
                  Code Repository on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"></div>
              </div>
            </div>
          </section>
        </section>
        <section className=" flex h-[100vh] w-full snap-start items-center justify-center bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500">
          <section className="container grid max-w-6xl items-center  justify-center gap-6 px-8  md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col  items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-white bg-purple-700 p-4 px-6 py-3 font-bold text-white shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-white duration-300 group-hover:translate-x-0">
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
                <span className="ease absolute flex h-full w-full transform items-center justify-center transition-all duration-300 group-hover:translate-x-full">
                  Connect With Us in the Digital Jungle
                </span>
                <span className="invisible relative">
                  Connect With Us in the Digital Jungle
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-white sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Step into the Vibrant World of Hippy Potamus
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-white sm:text-xl sm:leading-8">
                Join our Colorful Hippy Potamus Tribe. Amplify your impact,
                Express yourself, &nbsp;
                <span className="text-green-400">Bloom with us.</span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-purple-800 px-8 py-3 text-base font-medium text-white hover:bg-purple-900 md:px-10 md:py-4 md:text-lg"
                >
                  Join the Tribe
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-purple-700 hover:bg-gray-100 md:px-10 md:py-4 md:text-lg"
                >
                  See Our Code on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"></div>
              </div>
            </div>
          </section>
        </section>
        <section className=" flex h-[100vh] w-full snap-start items-center justify-center bg-gradient-to-r from-gray-800 via-gray-700 to-black">
          <section className="container grid max-w-6xl items-center  justify-center gap-6 px-8  md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col  items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-gray-300 bg-gray-900 p-4 px-6 py-3 font-bold text-gray-300 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-gray-300 duration-300 group-hover:translate-x-0">
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
                <span className="ease absolute flex h-full w-full transform items-center justify-center transition-all duration-300 group-hover:translate-x-full">
                  Follow Us Through The Night
                </span>
                <span className="invisible relative">
                  Follow Us Through The Night
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-gray-100 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Welcome to Gotham: Unmask Your Fullstack Potential
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-gray-200 sm:text-xl sm:leading-8">
                Be part of our covert community of tech vigilantes. Upgrade your
                skills, Boost your persona, &nbsp;
                <span className="text-yellow-500">Reap the benefits.</span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-yellow-500 px-8 py-3 text-base font-medium text-gray-700 hover:bg-yellow-600 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Gotham Squad
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-gray-900 px-8 py-3 text-base font-medium text-gray-200 hover:bg-gray-800 md:px-10 md:py-4 md:text-lg"
                >
                  Our Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"></div>
              </div>
            </div>
          </section>
        </section>
        <section className=" flex h-[100vh] w-full snap-start items-center justify-center bg-yellow-200">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-blue-700 bg-yellow-300 p-4 px-6 py-3 font-bold text-blue-700 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-blue-700 duration-300 group-hover:translate-x-0">
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
                <span className="ease absolute flex h-full w-full transform items-center justify-center transition-all duration-300 group-hover:translate-x-full">
                  Follow Us To Minion Land
                </span>
                <span className="invisible relative">
                  Follow Us To Minion Land
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-blue-700 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into the Minion Dominion: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-blue-700 sm:text-xl sm:leading-8">
                Be part of our cheery community of tech enthusiasts. Enhance
                your skills, Boost your brand, &nbsp;
                <span className="text-yellow-400">Benefit galore.</span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-yellow-400 px-8 py-3 text-base font-medium text-blue-700 hover:bg-yellow-500 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Minion Squad
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-blue-700 px-8 py-3 text-base font-medium text-yellow-300 hover:bg-blue-800 md:px-10 md:py-4 md:text-lg"
                >
                  Our Tricks on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"></div>
              </div>
            </div>
          </section>
        </section>
        <section className=" flex h-[100vh] w-full snap-start items-center justify-center bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-orange-800 bg-yellow-200 p-4 px-6 py-3 font-bold text-orange-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-orange-800 duration-300 group-hover:translate-x-0">
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
                <span className="ease absolute flex h-full w-full transform items-center justify-center transition-all duration-300 group-hover:translate-x-full">
                  Follow Us To Agent Orange
                </span>
                <span className="invisible relative">
                  Follow Us To Agent Orange
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-yellow-100 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into the Agent Orange: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-orange-800 sm:text-xl sm:leading-8">
                Be part of our vibrant community of tech enthusiasts. Enhance
                your skills, boost your brand, &nbsp;
                <span className="text-yellow-400">
                  and enjoy a fruitful journey.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-yellow-400 px-8 py-3 text-base font-medium text-orange-800 hover:bg-yellow-500 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Agent Orange Squad
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-orange-800 px-8 py-3 text-base font-medium text-yellow-200 hover:bg-orange-900 md:px-10 md:py-4 md:text-lg"
                >
                  Our Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"></div>
              </div>
            </div>
          </section>
        </section>
        <section className=" flex h-[100vh] w-full snap-start items-center justify-center bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-purple-800 bg-white p-4 px-6 py-3 font-bold text-purple-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-purple-800 duration-300 group-hover:translate-x-0">
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
                <span className="ease absolute flex h-full w-full transform items-center justify-center transition-all duration-300 group-hover:translate-x-full">
                  Follow Us To the Purple Power Ranger
                </span>
                <span className="invisible relative">
                  Follow Us To the Purple Power Ranger
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-purple-50 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into the Purple Power Ranger: Fullstack Development Fun
                Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-purple-800 sm:text-xl sm:leading-8">
                Be part of our powerful community of tech enthusiasts. Unleash
                your skills, empower your brand, &nbsp;
                <span className="text-white">and conquer new horizons.</span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-purple-600 px-8 py-3 text-base font-medium text-purple-50 hover:bg-purple-700 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Purple Power Ranger Squad
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-purple-500 hover:bg-gray-200 md:px-10 md:py-4 md:text-lg"
                >
                  Explore our Codebase on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"></div>
              </div>
            </div>
          </section>
        </section>
        <section className=" flex h-[100vh] w-full snap-start items-center justify-center bg-gray-900">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-gray-900 bg-pink-500 p-4 px-6 py-3 font-bold text-white shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-white duration-300 group-hover:translate-x-0">
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
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </span>
                <span className="ease absolute flex h-full w-full transform items-center justify-center transition-all duration-300 group-hover:translate-x-full">
                  Follow Us To Next.js Theme
                </span>
                <span className="invisible relative">
                  Follow Us To Next.js Theme
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-white sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into the Next.js Theme: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-white sm:text-xl sm:leading-8">
                Be part of our vibrant community of tech enthusiasts. Embrace
                the power of Next.js, unleash your creativity, &nbsp;
                <span className="text-pink-300">
                  and build amazing web applications.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-pink-500 hover:bg-gray-100 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Next.js Theme Squad
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-blue-500 px-8 py-3 text-base font-medium text-white hover:bg-blue-600 md:px-10 md:py-4 md:text-lg"
                >
                  Explore the Code on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="from-lightBlue-400 via-lightBlue-500 flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-blue-500 bg-white p-4 px-6 py-3 font-bold text-blue-500 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-blue-500 duration-300 group-hover:translate-x-0">
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
                  Follow Us To Blue Whale
                </span>
                <span className="invisible relative">
                  Follow Us To Blue Whale
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-white sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into the Blue Whale: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-white sm:text-xl sm:leading-8">
                Be part of our vibrant community of tech enthusiasts. Enhance
                your skills, boost your brand, &nbsp;
                <span className="text-blue-300">
                  and have a whale of a time.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-blue-500 bg-white px-8 py-3 text-base font-medium text-blue-500 hover:bg-blue-500 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Agent Orange Squad
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-blue-800 px-8 py-3 text-base font-medium text-white hover:bg-blue-900 md:px-10 md:py-4 md:text-lg"
                >
                  Our Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-[100vh] w-full snap-start items-center justify-center bg-yellow-500">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-yellow-800 bg-yellow-500 p-4 px-6 py-3 font-bold text-yellow-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-yellow-800 duration-300 group-hover:translate-x-0">
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
                  Follow Us To the Yellow Bee
                </span>
                <span className="invisible relative">
                  Follow Us To the Yellow Bee
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-yellow-900 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into the Bee Hive: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-yellow-800 sm:text-xl sm:leading-8">
                Be part of our mighty community of tech enthusiasts. Roar with
                confidence, embrace the wilderness, &nbsp;
                <span className="text-white">
                  and create powerful applications.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-yellow-400 px-8 py-3 text-base font-medium text-yellow-800 hover:bg-yellow-600 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Yellow Bee Squad
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-yellow-800 px-8 py-3 text-base font-medium text-yellow-400 hover:bg-yellow-900 md:px-10 md:py-4 md:text-lg"
                >
                  Explore our Hive on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-[100vh] w-full snap-start items-center justify-center bg-white">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="border-brown-800 group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 bg-orange-500 p-4 px-6 py-3 font-bold text-gray-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-gray-800 duration-300 group-hover:translate-x-0">
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
                  Follow Us To Tidy town
                </span>
                <span className="invisible relative">Follow Us Tidy town</span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-gray-800 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                <span className="text-gray-800">Dive Into the</span> Design land
                with these fun templates
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-gray-800 sm:text-xl sm:leading-8">
                Be part of our wild community of tech enthusiasts. Roar with
                confidence, embrace the adventure, &nbsp;
                <span className="text-orange-400">
                  and create amazing applications.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-orange-400 px-8 py-3 text-base font-medium text-gray-800 hover:bg-orange-500 md:px-10 md:py-4 md:text-lg"
                >
                  Explore the Jungle
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brown-800 rounded-md border border-orange-400 px-8 py-3 text-base font-medium text-orange-400 hover:bg-orange-200 md:px-10 md:py-4 md:text-lg"
                >
                  Get Inspired on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gray-900">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-gray-500 bg-white p-4 px-6 py-3 font-bold text-gray-500 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-gray-500 duration-300 group-hover:translate-x-0">
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
                  Follow Us To Gray Skies
                </span>
                <span className="invisible relative">
                  Follow Us To Gray Skies
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-white sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into the Gray Skies: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-white sm:text-xl sm:leading-8">
                Be part of our dark and gritty community of tech enthusiasts.
                Enhance your skills, boost your brand,&nbsp;
                <span className="text-gray-300">
                  and embrace the gloomy journey.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md   bg-white px-8 py-3 text-base font-medium text-gray-500 hover:bg-gray-700 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Gray Skies Squad
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-gray-600 px-8 py-3 text-base font-medium text-white hover:bg-gray-400 md:px-10 md:py-4 md:text-lg"
                >
                  Explore Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-pink-100 dark:bg-gray-900">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-3 space-y-3 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-pink-500 bg-white p-4 px-6 py-3 font-bold text-pink-500 shadow-md transition duration-300 ease-out dark:bg-gray-900 dark:text-pink-500"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-pink-500 duration-300 group-hover:translate-x-0 dark:text-pink-500">
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
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-pink-800 dark:text-white sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into the Legally Blonde: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-pink-800 dark:text-white sm:text-xl sm:leading-8">
                Be part of our pink and beautiful community of tech enthusiasts.
                Enhance your skills, boost your brand,&nbsp;
                <span className="text-pink-600 dark:text-pink-500">
                  and enjoy the journey with style.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-pink-500 bg-white px-8 py-3 text-base font-medium text-pink-500 hover:bg-pink-500 hover:text-white dark:bg-gray-900 dark:text-pink-500 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Legally Blonde Squad
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-pink-800 px-8 py-3 text-base font-medium text-white hover:bg-pink-900 dark:bg-pink-800 dark:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Explore Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-4 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-red-500">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-red-700 bg-white p-4 px-6 py-3 font-bold text-red-700 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-red-700 duration-300 group-hover:translate-x-0">
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
                  Follow Us To Sexy Lipstick
                </span>
                <span className="invisible relative">
                  Follow Us To Sexy Lipstick
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-white sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into the Sexy Lipstick: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-white sm:text-xl sm:leading-8">
                Be part of our vibrant and bold community of tech enthusiasts.
                Enhance your skills, boost your brand,&nbsp;
                <span className="text-red-300">
                  and make a powerful statement.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-red-700 bg-white px-8 py-3 text-base font-medium text-red-700 hover:bg-red-700 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Sexy Lipstick Squad
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-red-900 px-8 py-3 text-base font-medium text-white hover:bg-red-800 md:px-10 md:py-4 md:text-lg"
                >
                  Explore Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-lime-400 via-lime-500 to-lime-300">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-lime-800 bg-yellow-200 p-4 px-6 py-3 font-bold text-lime-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-lime-800 duration-300 group-hover:translate-x-0">
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
                  Follow Us To Lemon Lime
                </span>
                <span className="invisible relative">
                  Follow Us To Lemon Lime
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-lime-900 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into the Lemon Lime: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-lime-800 sm:text-xl sm:leading-8">
                Be part of our vibrant and refreshing community of tech
                enthusiasts. Enhance your skills, boost your brand,&nbsp;
                <span className="font-boldd text-lime-900">
                  and experience a zesty journey.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md   border-lime-900  bg-yellow-200 px-8 py-3 text-base font-medium text-lime-800 hover:bg-lime-600 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Lemon Lime Squad
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-lime-800 px-8 py-3 text-base font-medium text-yellow-200 hover:bg-lime-900 md:px-10 md:py-4 md:text-lg"
                >
                  Explore Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-300">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-emerald-800 bg-white p-4 px-6 py-3 font-bold text-emerald-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-emerald-800 duration-300 group-hover:translate-x-0">
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
                  Follow Us To Emerald Empress
                </span>
                <span className="invisible relative">
                  Follow Us To Emerald Empress
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-emerald-50 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into the Emerald Empress: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-emerald-800 sm:text-xl sm:leading-8">
                Be part of our magnificent and powerful community of tech
                enthusiasts. Enhance your skills, elevate your brand,&nbsp;
                <span className="font-semibold text-emerald-800">
                  and shine with brilliance.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-emerald-800 hover:bg-emerald-500 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Emerald Empress Squad
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-emerald-800 px-8 py-3 text-base font-medium text-white hover:bg-emerald-900 md:px-10 md:py-4 md:text-lg"
                >
                  Explore Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-rose-400 via-rose-500 to-rose-400">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-rose-800 bg-white p-4 px-6 py-3 font-bold text-rose-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-rose-800 duration-300 group-hover:translate-x-0">
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
                  Follow Us To The Rose
                </span>
                <span className="invisible relative">
                  Follow Us To The Rose
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-rose-50 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into The Rose: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-rose-100 sm:text-xl sm:leading-8">
                Be part of our enchanting community of tech enthusiasts. Embrace
                the beauty, nurture your skills,&nbsp;
                <span className="font-semibold text-rose-800">
                  and let your creativity bloom.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-rose-800 hover:bg-rose-500 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Rose Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-rose-800 px-8 py-3 text-base font-medium text-white hover:bg-rose-900 md:px-10 md:py-4 md:text-lg"
                >
                  Discover Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-fuchsia-400 via-fuchsia-500 to-fuchsia-300">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-fuchsia-800 bg-white p-4 px-6 py-3 font-bold text-fuchsia-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-fuchsia-800 duration-300 group-hover:translate-x-0">
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
                  Follow Us To Fuchsia Forever
                </span>
                <span className="invisible relative">
                  Follow Us To Fuchsia Forever
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-fuchsia-900 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into Fuchsia Forever: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-fuchsia-800 sm:text-xl sm:leading-8">
                Be part of our vibrant community of tech enthusiasts. Embrace
                the energy, unleash your creativity,&nbsp;
                <span className="font-semibold text-fuchsia-800">
                  and let your passion thrive.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-fuchsia-800 hover:bg-fuchsia-600 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Fuchsia Forever Club
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-fuchsia-900 px-8 py-3 text-base font-medium text-white hover:bg-fuchsia-900 md:px-10 md:py-4 md:text-lg"
                >
                  Explore Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-amber-800 bg-white p-4 px-6 py-3 font-bold text-amber-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-amber-800 duration-300 group-hover:translate-x-0">
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
                  Follow Us To Amberjack
                </span>
                <span className="invisible relative">
                  Follow Us To Amberjack
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-amber-800 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into Amberjack: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-amber-800 sm:text-xl sm:leading-8">
                Be part of our vibrant community of tech enthusiasts. Embrace
                the warmth, ignite your skills,&nbsp;
                <span className="font-semibold text-amber-800">
                  and let your creativity shine.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-amber-800 hover:bg-amber-500 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Amberjack Club
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-amber-800 px-8 py-3 text-base font-medium text-white hover:bg-amber-900 md:px-10 md:py-4 md:text-lg"
                >
                  Explore Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-purple-500 via-purple-600">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-purple-800 bg-white p-4 px-6 py-3 font-bold text-purple-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-purple-800 duration-300 group-hover:translate-x-0">
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
                  Follow Us To Purple Haze
                </span>
                <span className="invisible relative">
                  Follow Us To Purple Haze
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-white sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into Purple Haze: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-white sm:text-xl sm:leading-8">
                Be part of our vibrant community of tech enthusiasts. Embrace
                the haze, unleash your creativity,&nbsp;
                <span className="font-semibold text-white">
                  and let your ideas come alive.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-purple-800 hover:bg-purple-500 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Purple Haze Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-purple-900 px-8 py-3 text-base font-medium text-white hover:bg-purple-900 md:px-10 md:py-4 md:text-lg"
                >
                  Explore Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-indigo-800 bg-white p-4 px-6 py-3 font-bold text-indigo-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-indigo-800 duration-300 group-hover:translate-x-0">
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
                  Follow Us To Violent Violet
                </span>
                <span className="invisible relative">
                  Follow Us To Violent Violet
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-white sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into Violent Violet: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-white sm:text-xl sm:leading-8">
                Be part of our dynamic community of tech enthusiasts. Embrace
                the vibrancy, ignite your imagination,&nbsp;
                <span className="font-semibold text-white">
                  and let your creativity shine.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-800 hover:bg-indigo-500 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Violent Violet Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-indigo-800 px-8 py-3 text-base font-medium text-white hover:bg-indigo-900 md:px-10 md:py-4 md:text-lg"
                >
                  Explore Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-indigo-100 bg-white p-4 px-6 py-3 font-bold text-indigo-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-indigo-800 duration-300 group-hover:translate-x-0">
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
                  Follow Us To Indigo Inklings
                </span>
                <span className="invisible relative">
                  Follow Us To Indigo Inklings
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-white sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into Indigo Inklings: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-white sm:text-xl sm:leading-8">
                Be part of our mysterious community of tech enthusiasts. Delve
                into the depths of innovation, uncover hidden talents,&nbsp;
                <span className="font-semibold text-white">
                  and let your ideas flow like indigo ink.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-800 hover:bg-indigo-400 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Indigo Inklings Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-indigo-800 px-8 py-3 text-base font-medium text-white hover:bg-indigo-900 md:px-10 md:py-4 md:text-lg"
                >
                  Unleash Your Creativity on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gray-900">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-gray-100 bg-gray-800 p-4 px-6 py-3 font-bold text-gray-100 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-gray-100 duration-300 group-hover:translate-x-0">
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
                  Follow Us To The Skyline
                </span>
                <span className="invisible relative">
                  Follow Us To The Skyline
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-gray-100 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into The Skyline: Fullstack Development Adventure
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-gray-100 sm:text-xl sm:leading-8">
                Be part of our urban community of tech enthusiasts. Embrace the
                raw energy of the skyline, unlock new horizons,&nbsp;
                <span className="font-semibold text-gray-100">
                  and unleash your limitless potential.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-gray-100 px-8 py-3 text-base font-medium text-gray-800 hover:bg-gray-800 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Skyline Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-gray-100 hover:bg-gray-700 md:px-10 md:py-4 md:text-lg"
                >
                  Explore the Skyline on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-blue-100">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-blue-600 bg-white p-4 px-6 py-3 font-bold text-blue-600 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-blue-600 duration-300 group-hover:translate-x-0">
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
                  Follow Us To The Skylight
                </span>
                <span className="invisible relative">
                  Follow Us To The Skylight
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-blue-800 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into The Skylight: Fullstack Development Adventure
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-blue-800 sm:text-xl sm:leading-8">
                Be part of our serene community of tech enthusiasts. Embrace the
                tranquility of the skylight, explore new heights,&nbsp;
                <span className="font-semibold text-blue-800">
                  and let your creativity soar.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Skylight Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-gray-100 md:px-10 md:py-4 md:text-lg"
                >
                  Explore the Skylight on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-cyan-900 to-cyan-700">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-cyan-300 bg-white p-4 px-6 py-3 font-bold text-cyan-900 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-cyan-900 duration-300 group-hover:translate-x-0">
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
                  Follow Us To The Cyan Skies
                </span>
                <span className="invisible relative">
                  Follow Us To The Cyan Skies
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-cyan-300 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into The Cyan Skies: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-cyan-300 sm:text-xl sm:leading-8">
                Be part of our vibrant community of tech enthusiasts. Soar to
                new heights, embrace innovation,&nbsp;
                <span className="font-semibold text-cyan-300">
                  and let your ideas take flight.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-cyan-300 bg-cyan-300 px-8 py-3 text-base font-medium text-cyan-900 hover:bg-cyan-500 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Cyan Skies Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-cyan-900 hover:bg-cyan-500 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Discover Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-teal-100 bg-white p-4 px-6 py-3 font-bold text-teal-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-teal-800 duration-300 group-hover:translate-x-0">
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
                  Follow Us To The Teal Oasis
                </span>
                <span className="invisible relative">
                  Follow Us To The Teal Oasis
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-teal-200 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into The Teal Oasis: Fullstack Development Fun Zone
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-teal-200 sm:text-xl sm:leading-8">
                Be part of our refreshing community of tech enthusiasts. Immerse
                yourself in innovation, explore new horizons,&nbsp;
                <span className="font-semibold text-teal-200">
                  and let your creativity flow like a serene oasis.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-teal-100 bg-teal-100 px-8 py-3 text-base font-medium text-teal-800 hover:bg-teal-300 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Teal Oasis Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-teal-800 hover:bg-teal-300 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Discover Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-lime-800 via-lime-600 to-lime-500">
          <section className="container grid max-w-6xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-lime-200 bg-lime-200 p-4 px-6 py-3 font-bold text-lime-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-lime-800 duration-300 group-hover:translate-x-0">
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
                  Follow Us To The Lime Burst
                </span>
                <span className="invisible relative">
                  Follow Us To The Lime Burst
                </span>
              </a>
              <h1 className="text-darklime max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-lime-100 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into The Lime Burst: Fullstack Development Fun Zone
              </h1>
              <p className="text-darklime mx-auto max-w-3xl text-lg leading-normal sm:text-xl sm:leading-8">
                Be part of our refreshing community of tech enthusiasts.
                Experience the zest of innovation, embrace vibrant
                possibilities,&nbsp;
                <span className="text-darklime font-semibold">
                  and let your creativity burst with lime brilliance.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="text-darklime rounded-md border border-transparent bg-lime-700 px-8 py-3 text-base font-medium hover:bg-lime-500 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Lime Burst Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="text-darklime rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-lime-800 hover:bg-lime-600 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Discover Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-100">
          <section className="container grid max-w-7xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-zinc-800 bg-zinc-800 p-4 px-6 py-3 font-bold text-zinc-100 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-zinc-100 duration-300 group-hover:translate-x-0">
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
                  Follow Us To The Zinc Burst
                </span>
                <span className="invisible relative">
                  Follow Us To The Zinc Burst
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-zinc-800 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into The Zinc Burst: Fullstack Development Fun
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-zinc-800 sm:text-xl sm:leading-8">
                Be part of our refreshing community of tech enthusiasts.
                Experience the zest of innovation, embrace vibrant
                possibilities,&nbsp;
                <span className="font-semibold text-zinc-800">
                  and let your creativity burst with zinc brilliance.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-zinc-800 px-8 py-3 text-base font-medium text-zinc-100 hover:bg-zinc-800 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Zinc Burst Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-zinc-800 hover:bg-zinc-800 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Discover Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-600">
          <section className="container grid max-w-7xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-zinc-200 bg-zinc-200 p-4 px-6 py-3 font-bold text-zinc-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-zinc-800 duration-300 group-hover:translate-x-0">
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
                  Follow Us To The Zinc Burst
                </span>
                <span className="invisible relative">
                  Follow Us To The Zinc Burst
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-zinc-200 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into The Zinc Burst: Fullstack Development Fun
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-zinc-200 sm:text-xl sm:leading-8">
                Be part of our refreshing community of tech enthusiasts.
                Experience the zest of innovation, embrace vibrant
                possibilities,&nbsp;
                <span className="font-semibold text-zinc-200">
                  and let your creativity burst with zinc brilliance.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-zinc-200 px-8 py-3 text-base font-medium text-zinc-800 hover:bg-zinc-200 hover:text-zinc-800 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Zinc Burst Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-zinc-800 px-8 py-3 text-base font-medium text-zinc-200 hover:bg-zinc-200 hover:text-zinc-800 md:px-10 md:py-4 md:text-lg"
                >
                  Discover Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gradient-to-r from-zinc-800 via-orange-700 to-orange-600">
          <section className="container grid max-w-7xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-zinc-200 bg-zinc-200 p-4 px-6 py-3 font-bold text-orange-800 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-orange-800 duration-300 group-hover:translate-x-0">
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
                  Follow Us To The Gritty Burst
                </span>
                <span className="invisible relative">
                  Follow Us To The Gritty Burst
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-orange-200 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into The Gritty Burst: Fullstack Development Fun
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-orange-200 sm:text-xl sm:leading-8">
                Be part of our refreshing community of tech enthusiasts.
                Experience the zest of innovation, embrace vibrant
                possibilities,&nbsp;
                <span className="font-semibold text-orange-200">
                  and let your creativity burst with gritty brilliance.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-zinc-200 px-8 py-3 text-base font-medium text-orange-800 hover:bg-zinc-200 hover:text-orange-800 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Gritty Burst Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-orange-800 px-8 py-3 text-base font-medium text-zinc-200 hover:bg-zinc-200 hover:text-orange-800 md:px-10 md:py-4 md:text-lg"
                >
                  Discover Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gray-200">
          <section className="container grid max-w-7xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-gray-800 bg-gray-800 p-4 px-6 py-3 font-bold text-gray-200 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-gray-200 duration-300 group-hover:translate-x-0">
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
                  Follow Us To The Grey Delight
                </span>
                <span className="invisible relative">
                  Follow Us To The Grey Delight
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-gray-800 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into The Grey Delight: Fullstack Development Fun
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-gray-800 sm:text-xl sm:leading-8">
                Be part of our refreshing community of tech enthusiasts.
                Experience the elegance of gray, embrace the possibilities,
                <span className="font-semibold text-gray-800">
                  and let your creativity shine in shades of dark gray.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-gray-800 px-8 py-3 text-base font-medium text-gray-200 hover:bg-gray-800 hover:text-gray-200 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Grey Delight Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-gray-200 px-8 py-3 text-base font-medium text-gray-800 hover:bg-gray-800 hover:text-gray-200 md:px-10 md:py-4 md:text-lg"
                >
                  Discover Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-gray-500">
          <section className="container grid max-w-7xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-gray-700 bg-gray-700 p-4 px-6 py-3 font-bold text-gray-200 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-gray-200 duration-300 group-hover:translate-x-0">
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
                  Follow Us To The Mid-Grey Delight
                </span>
                <span className="invisible relative">
                  Follow Us To The Mid-Grey Delight
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-gray-200 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into The Mid-Grey Delight: Fullstack Development Fun
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-gray-200 sm:text-xl sm:leading-8">
                Be part of our refreshing community of tech enthusiasts.
                Experience the elegance of mid-gray, embrace the possibilities,
                <span className="font-semibold text-gray-200">
                  and let your creativity shine in shades of dark gray.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-gray-700 px-8 py-3 text-base font-medium text-gray-200 hover:bg-gray-700 hover:text-gray-200 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Mid-Grey Delight Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-gray-200 px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-gray-200 md:px-10 md:py-4 md:text-lg"
                >
                  Discover Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-orange-400">
          <section className="container grid max-w-7xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-orange-600 bg-orange-200 p-4 px-6 py-3 font-bold text-gray-700 shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-gray-700 duration-300 group-hover:translate-x-0">
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
                <span className="ease absolute flex h-full w-full transform items-center justify-center bg-gray-200 transition-all duration-300 group-hover:translate-x-full">
                  Follow Us To The Gray Orange Delight
                </span>
                <span className="invisible relative">
                  Follow Us To The Gray Orange Delight
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-gray-200 sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into The Gray Orange Delight: Fullstack Development Fun
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-gray-200 sm:text-xl sm:leading-8">
                Be part of our refreshing community of tech enthusiasts.
                Experience the elegance of mid-gray, embrace the possibilities,
                <span className="font-semibold text-gray-200">
                  and let your creativity shine in shades of orange.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-gray-200 px-8 py-3 text-base font-medium text-gray-700 hover:bg-orange-300 hover:text-gray-700 md:px-10 md:py-4 md:text-lg"
                >
                  Join The Gray Orange Delight Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-gray-700 px-8 py-3 text-base font-medium text-orange-200 hover:bg-orange-300 hover:text-gray-700 md:px-10 md:py-4 md:text-lg"
                >
                  Discover Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section className="flex h-screen w-full snap-start items-center justify-center bg-pink-400">
          <section className="container grid max-w-7xl items-center justify-center gap-6 px-8 md:pb-12 md:pt-10 lg:pb-16 lg:pt-16">
            <div className="mx-auto my-auto flex flex-col items-center justify-center gap-6 text-center">
              <a
                href="#_"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 border-pink-600 bg-pink-200 p-4 px-6 py-3 font-bold  shadow-md transition duration-300 ease-out"
              >
                <span className="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-pink-400 duration-300 group-hover:translate-x-0">
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
                <span className="ease absolute flex h-full w-full transform items-center justify-center bg-white text-pink-500 transition-all duration-300 group-hover:translate-x-full">
                  Follow Us To The Barbie Girl Delight
                </span>
                <span className="invisible relative">
                  Follow Us To The Barbie Girl Delight
                </span>
              </a>
              <h1 className="max-w-6xl space-y-4 text-5xl font-bold leading-[1.1] tracking-tighter text-white sm:text-6xl md:text-7xl 2xl:text-[100px]">
                Dive Into The Barbie Girl Delight: Fullstack Development Fun
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-normal text-white sm:text-xl sm:leading-8">
                Be part of our vibrant community of tech enthusiasts. Experience
                the joy of coding, embrace limitless possibilities,
                <span className="font-semibold text-white">
                  and let your creativity shine in shades of pink.
                </span>
              </p>
              <div className="mx-auto flex justify-center gap-4">
                <Link
                  href="/login"
                  className="rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-pink-600 hover:bg-pink-200 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Join The Barbie Girl Delight Community
                </Link>
                <Link
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-transparent bg-pink-600 px-8 py-3 text-base font-medium text-white hover:bg-pink-200 hover:text-white md:px-10 md:py-4 md:text-lg"
                >
                  Discover Secrets on GitHub
                </Link>
              </div>
              <div className="mx-auto max-w-5xl px-6 lg:px-8">
                <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10"></div>
              </div>
            </div>
          </section>
        </section>
        <section></section>
        {/* <section className="bg-strawberry-50 mx-auto grid min-h-screen max-w-7xl justify-center gap-6 bg-gradient-to-r from-pink-600 via-red-500 to-red-600 px-8 py-8 text-center  md:py-12 lg:py-24">
          <div className="mx-auto flex flex-col items-center gap-4">
            <h2 className="text-strawberry-800 text-3xl font-bold leading-[1.1] tracking-tighter sm:text-3xl md:text-6xl">
              Features
            </h2>
            <p className="text-strawberry-700 dark:text-strawberry-200 max-w-[85%] leading-normal sm:text-lg sm:leading-7">
              DevSpace is a community website built for devs by devs. It's a
              place where you can connect with other developers, share your
              projects, learn new skills, and get feedback. Whether you're a
              beginner or an expert, you'll find something for you here.
            </p>
          </div>
          <div className="grid justify-center gap-4 sm:grid-cols-2  md:grid-cols-4">
            <div className="border-strawberry-200 relative overflow-hidden rounded-lg border bg-white p-2 shadow-2xl">
              <div className="bg-strawberry-800 text-strawberry-200 flex h-[180px] flex-col justify-between rounded-md p-6">
                <span className="text-5xl font-bold">123</span>
                <div className="space-y-2">
                  <h3 className="text-strawberry-100 font-bold">
                    Tech Discussions
                  </h3>
                  <p className="text-strawberry-100 text-sm">
                    Discussing the latest trends in technology with fellow devs.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-strawberry-200 relative overflow-hidden rounded-lg border bg-white p-2 shadow-2xl">
              <div className="bg-strawberry-800 text-strawberry-200 flex h-[180px] flex-col justify-between rounded-md p-6">
                <span className="text-5xl font-bold">456</span>
                <div className="space-y-2">
                  <h3 className="text-strawberry-100 font-bold">
                    Create Posts
                  </h3>
                  <p className="text-strawberry-100 text-sm">
                    Demonstrate your expertise, document your learning journey
                    and achievements.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-strawberry-200 relative overflow-hidden rounded-lg border bg-white p-2 shadow-2xl">
              <div className="bg-strawberry-800 text-strawberry-200 flex h-[180px] flex-col justify-between rounded-md p-6">
                <span className="text-5xl font-bold">789</span>
                <div className="space-y-2">
                  <h3 className="text-strawberry-100 font-bold">TechStack</h3>
                  <p className="text-strawberry-100 text-sm">
                    Choose your stack and have a quick reference to all your
                    docs
                  </p>
                </div>
              </div>
            </div>
            <div className="border-strawberry-200 relative overflow-hidden rounded-lg border bg-white p-2 shadow-2xl">
              <div className="bg-strawberry-800 text-strawberry-200 flex h-[180px] flex-col justify-between rounded-md p-6">
                <span className="text-5xl font-bold">987</span>
                <div className="space-y-2">
                  <h3 className="text-strawberry-100 font-bold">Boilerplate</h3>
                  <p className="text-strawberry-100 text-sm">
                    Get the best starter templates for modern web development
                  </p>
                </div>
              </div>
            </div>
            <div className="border-strawberry-200 relative overflow-hidden rounded-lg border bg-white p-2 shadow-2xl">
              <div className="bg-strawberry-800 text-strawberry-200 flex h-[180px] flex-col justify-between rounded-md p-6">
                <span className="text-5xl font-bold">654</span>
                <div className="space-y-2">
                  <h3 className="text-strawberry-100 font-bold">Profiles</h3>
                  <p className="text-strawberry-100 text-sm">
                    Build up your profile and create authority for prospective
                    employers
                  </p>
                </div>
              </div>
            </div>
            <div className="border-strawberry-200 relative overflow-hidden rounded-lg border bg-white p-2 shadow-2xl">
              <div className="bg-strawberry-800 text-strawberry-200 flex h-[180px] flex-col justify-between rounded-md p-6">
                <span className="text-5xl font-bold">321</span>
                <div className="space-y-2">
                  <h3 className="text-strawberry-100 font-bold">
                    Subscriptions
                  </h3>
                  <p className="text-strawberry-100 text-sm">
                    Free and paid subscriptions using Stripe.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-strawberry-200 relative overflow-hidden rounded-lg border bg-white p-2 shadow-2xl">
              <div className="bg-strawberry-800 text-strawberry-200 flex h-[180px] flex-col justify-between rounded-md p-6">
                <span className="text-5xl font-bold">654</span>
                <div className="space-y-2">
                  <h3 className="text-strawberry-100 font-bold">
                    Subscriptions
                  </h3>
                  <p className="text-strawberry-100 text-sm">
                    Free and paid subscriptions using Stripe.
                  </p>
                </div>
              </div>
            </div>
            <div className="border-strawberry-200 relative overflow-hidden rounded-lg border bg-white p-2 shadow-2xl">
              <div className="bg-strawberry-800 text-strawberry-200 flex h-[180px] flex-col justify-between rounded-md p-6">
                <span className="text-5xl font-bold">987</span>
                <div className="space-y-2">
                  <h3 className="text-strawberry-100 font-bold">
                    Subscriptions
                  </h3>
                  <p className="text-strawberry-100 text-sm">
                    Free and paid subscriptions using Stripe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center gap-4 md:max-w-[52rem]">
            <p className="text-strawberry-700 dark:text-strawberry-200 max-w-[85%] leading-normal sm:text-lg sm:leading-7">
              Taxonomy also includes a blog and a full-featured documentation
              site built using Contentlayer and MDX.
            </p>
          </div>
        </section> */}
      </div>
    </MainLayout>
  );
}

export default heros;
