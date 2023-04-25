import React, { useContext, useState } from 'react';
import { FiLogIn, GoThreeBars } from '../../icons';
import { AiOutlineBell } from '../../icons';
import { AiOutlineEdit } from '../../icons';
import { signIn } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { FiLogOut } from '../../icons';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { GlobalContext } from '../../context/GlobalContext';
import Link from 'next/link';
import NavigationMenuDemo from 'libs/shared/ui/src/layouts/nav-menu/nav-menu';
import { useEffect, useRef } from 'react';
import { ThemeToggle } from 'libs/shared/next13-ui/src/shadnui/components/theme-toggle/theme-toggle';
import { MainNav } from 'libs/shared/next13-ui/src/shadnui/main-nav';

export default function Header() {
  const { data: sessionData, status } = useSession();
  const { isWriteModalOpen, setIsWriteModalOpen } = useContext(GlobalContext);
  const [openSidebar, setIsOpenSideBar] = useState(false);
  const headerRef = useRef(null);
  const handleCloseSidebar = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setIsOpenSideBar(false);
    }
  };
  useEffect(() => {
    // Add event listener to body for click event
    document.body.addEventListener('click', handleCloseSidebar);

    // Cleanup the event listener on component unmount
    return () => {
      document.body.removeEventListener('click', handleCloseSidebar);
    };
  }, []);
  return (
    <header
      ref={headerRef}
      className="grid w-full grid-cols-12 flex-row items-center  py-3 px-8 sticky top-0 border-b z-10 bg-base dark:bg-black dark:bg-opacity-60 backdrop-blur"
    >
      {/* This is the header */}
      <div className="flex justify-center items-center col-span-3">
        {/* <GoThreeBars className="mx-4" onClick={() => setIsOpenSideBar(true)} /> 0*/}
        <MainNav />
        <Link href="/" className="cursor-pointer mr-auto">
          {/* <div className="mx-auto flex cursor-pointer justify-center  text-3xl font-md uppercase bg-gray-300 px-4 py-1 border-2 font-bold text-gray-600 border-greay-200  text-black">
            T3 Blog
          </div> */}
        </Link>
      </div>
      <div className=" ml-auto hidden lg:flex">
        <NavigationMenuDemo />
      </div>

      {status === 'authenticated' ? (
        <div className="flex items-center justify-end gap-4  col-span-8">
          <ThemeToggle />
          <div>
            <AiOutlineBell />
          </div>
          <div>
            <div className="h-9 w-9 rounded-full bg-gray-600">
              {' '}
              <Image
                src={sessionData.user.image}
                alt={sessionData.user.name}
                className="h-9 w-9 rounded-full border-2"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div>
            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="flex items-center justify-center gap-1 rounded-lg  border-2 border-gray-300 dark:hover:border-white dark dark:hover:bg-white dark:hover:bg-opacity-60 p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition  hover:border-black hover:text-gray-700 hover:shadow-black dark:hover:text-white"
            >
              <AiOutlineEdit />
              Write
            </button>
          </div>
          <div>
            <button
              onClick={() => signOut()}
              className="flex items-center justify-center gap-1 rounded-lg border-2  border-gray-300   p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)]  dark:hover:border-white dark dark:hover:bg-white dark:hover:bg-opacity-60 shadow-gray-300 transition hover:border-black hover:shadow-black"
            >
              <FiLogOut />
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-4 col-span-8 ml-auto">
          {/* <div>
          <AiOutlineBell />
        </div>
        <div>
          <div className="h-6 w-6 rounded-full bg-gray-600"></div>
        </div> */}
          <div>
            <ThemeToggle />
            <button
              onClick={() => signIn()}
              className="flex items-center justify-center gap-1 rounded-lg border-2 p-1 px-3 transition hover:border-gray-700 hover:text-gray-700"
            >
              <FiLogIn />
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
