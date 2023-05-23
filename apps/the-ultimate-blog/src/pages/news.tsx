import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Image from 'next/image';

export default function news() {
  return (
    <MainLayout>
      <main id="content">
        <div className="hidden bg-gray-50 py-4 dark:bg-inherit">
          <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="mx-auto table text-center text-sm">
              <a className="uppercase" href="#">
                Advertisement
              </a>
              <a href="#">
                <img src="src/img/ads/ads_728.jpg" alt="advertisement area" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 py-6 dark:bg-inherit">
          <div className="mx-auto px-3 xl:container sm:px-4 xl:px-2">
            <div className="flex flex-row flex-wrap">
              <div className="w-full max-w-full flex-shrink overflow-hidden  lg:w-2/3">
                <div className="w-full py-3">
                  <h2 className="text-2xl font-bold text-gray-800">
                    <span className="border-l-3 mr-2 inline-block h-5 border-red-600"></span>
                    Europe
                  </h2>
                </div>
                <div className="-mx-3 flex flex-row flex-wrap">
                  <div className="w-full max-w-full  px-3 pb-5">
                    <div className="relative flex min-h-[60vh] w-auto items-center justify-center overflow-hidden rounded-lg bg-gray-300  shadow-lg dark:bg-black">
                      <Image
                        className="  object-cover "
                        src="https://th.bing.com/th/id/OIG.HGV2Sjovc_tGUtAwymIT?pid=ImgGn"
                        priority //FUCKSAKE DONT FORGET THIS
                        alt="Image description"
                        fill
                      />

                      <div className="bg-gradient-cover absolute bottom-0 w-full  bg-black  bg-opacity-50 px-5 pb-5 pt-8 backdrop-blur">
                        <a href="#">
                          <h2 className="mb-3 w-11/12 text-3xl  font-bold capitalize text-white">
                            Amazon Shoppers Are Ditching Designer Belts for This
                            Best-Selling This Piece Of shits
                          </h2>
                        </a>
                        <p className="hidden w-11/12 text-gray-100 sm:inline-block">
                          Russia says a fire on its flagship vessel in the Black
                          Sea detonated munitions - Ukraine says it fired
                          missiles at the Moskva
                        </p>

                        <div className="pt-2">
                          <div className="text-gray-100">
                            <div className="mr-2 inline-block h-3 border-l-2 border-red-600"></div>
                            Europe
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {[...Array(12)].map((_, index) => (
                    <div className="w-full max-w-full flex-shrink border-b-2 border-dotted border-gray-100 px-3 pb-3 pt-3 sm:w-1/3 sm:border-b-0 sm:pt-0">
                      <div className="hover-img flex flex-row sm:block">
                        <a href="">
                          <img
                            className="mx-auto w-full max-w-full"
                            src="https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/GitHub.jpeg"
                            alt="alt title"
                          />
                        </a>
                        <div className="py-0 pl-3 sm:py-3 sm:pl-0">
                          <h3 className="mb-2 text-lg font-bold leading-tight">
                            <a href="#">
                              5 Tips to Save Money Booking Your Next Hotel Room
                            </a>
                          </h3>
                          <p className="mb-1 hidden leading-tight text-gray-600 md:block">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content.
                          </p>
                          <a className="text-gray-500" href="#">
                            <span className="mr-2 inline-block h-3 border-l-2 border-red-600"></span>
                            Europe
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="order-first w-full max-w-full flex-shrink lg:order-last lg:w-1/3 lg:pb-8 lg:pl-8 lg:pt-14">
                <div className="w-full  dark:bg-inherit">
                  <div className="mb-6">
                    <div className="bg-gray-100 p-4 dark:bg-inherit">
                      <h2 className="text-lg font-bold">Most Popular</h2>
                    </div>
                    <ul className="post-number">
                      {[...Array(5)].map((_, index) => (
                        <li
                          key={index}
                          className="border-b border-gray-100 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          <a
                            className="flex flex-row items-center px-6 py-3 text-lg font-bold"
                            href="#"
                          >
                            Why the world would end without political polls
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="sticky py-6 text-sm">
                  <div className="w-full text-center">
                    <a className="uppercase" href="#">
                      Advertisement
                    </a>
                    <a href="#">
                      <img
                        className="mx-auto"
                        src="src/img/ads/250.jpg"
                        alt="advertisement area"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}
