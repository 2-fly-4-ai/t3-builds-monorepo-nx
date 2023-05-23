import React, { useState } from 'react';
import { FiLogIn } from '../../icons';
import { AiOutlineBell } from '../../icons';
import { AiOutlineEdit } from '../../icons';
import { signIn } from 'next-auth/react';
import { signOut } from 'next-auth/react';
import { FiLogOut } from '../../icons';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useGlobalContextStore } from '@front-end-nx/shared/ui';
import Link from 'next/link';
import { useGlobalContextTechStore } from '@front-end-nx/shared/ui';
import { ThemeToggle } from 'libs/shared/next13-ui/src/shadnui/components/theme-toggle/theme-toggle';
import { MainNav } from 'libs/shared/next13-ui/src/shadnui/main-nav';
import { useSelectedLayoutSegment } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
// const NavigationMenuDemo = dynamic(
//   () => import('libs/shared/ui/src/layouts/nav-menu/nav-menu'),
//   { ssr: false }
// );

export default function Header() {
  const router = useRouter();
  const path = usePathname();

  console.warn('WTFISGOINGON', path); //why is this undefined

  const { data: sessionData, status } = useSession();

  const items = [
    // {
    //   title: 'Home',
    //   href: '/',
    //   segment: 'home',
    // },

    {
      title: 'TechStack',
      href: '/techstack',
      segment: 'blog',
    },
    // {
    //   title: 'TechProducts',
    //   href: '/about',
    //   disabled: true,
    //   segment: 'about',
    // },
    {
      title: 'Posts',
      href: '/posts',
      segment: '',
    },

    {
      title: 'Courses',
      href: '/courses',
      disabled: true,
      segment: 'contact',
    },

    // {
    //   title: 'Discussion',
    //   href: '/contact',
    //   disabled: true,
    //   segment: 'contact',
    // },
    {
      title: 'Docs',
      href: '/docs',
      disabled: true,
      segment: 'contact',
    },
    {
      title: 'Guides',
      href: '/guides',
      disabled: true,
      segment: 'contact',
    },
  ];

  //State Handlers
  const { setIsWriteModalOpen } = useGlobalContextStore();
  const { isWriteTechModalOpen, setIsWriteTechModalOpen } =
    useGlobalContextTechStore();
  const [segment, setSegment] = React.useState('');

  React.useEffect(() => {
    setSegment(window.location.pathname.split('/')[1]);
  }, []);

  return (
    <header className="top-0 z-10 grid w-full grid-cols-12 flex-row items-center border-b-2 bg-gray-100  px-8 py-2  backdrop-blur-md dark:bg-inherit  dark:bg-opacity-80  ">
      <div className="col-span-6 flex items-center justify-center ">
        <MainNav items={items} segment={segment} />
        <Link href="/" className="mr-auto cursor-pointer"></Link>
      </div>

      {status === 'authenticated' ? (
        <div className="col-span-6 flex items-center justify-end  gap-4">
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

          {path === '/posts' ? (
            <div>
              <button
                onClick={() => setIsWriteModalOpen(true)}
                className="dark flex items-center justify-center gap-1 rounded-lg border-2 border-gray-300 p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition hover:border-black hover:bg-gray-200 hover:text-gray-700 hover:shadow-black dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60 dark:hover:text-white"
              >
                <AiOutlineEdit />
                Write
              </button>
            </div>
          ) : path === 'techstack' ? (
            <div>
              <button
                onClick={() => setIsWriteTechModalOpen(true)}
                className="dark flex items-center justify-center gap-1 rounded-lg border-2 border-gray-300 p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition hover:border-black hover:bg-gray-200 hover:text-gray-700 hover:shadow-black dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60 dark:hover:text-white"
              >
                <AiOutlineEdit />
                Add Tech
              </button>
            </div>
          ) : null}

          <button
            onClick={() => signOut()}
            className="dark flex items-center justify-center gap-1 rounded-lg border-2  border-gray-300   p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)]  shadow-gray-300 transition hover:border-black hover:bg-gray-200 hover:shadow-black dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60"
          >
            <FiLogOut />
            Logout
          </button>
        </div>
      ) : (
        <div className="col-span-6 ml-auto flex items-center justify-center gap-4">
          {/* <div>
          <AiOutlineBell />
        </div>
        <div>
          <div className="h-6 w-6 rounded-full bg-gray-600"></div>
        </div> */}
          <div className="flex gap-2">
            <ThemeToggle />
            <button
              onClick={() => signIn()}
              className="dark flex items-center justify-center gap-1 rounded-lg border-2  border-gray-300   p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)]  shadow-gray-300 transition hover:border-black hover:bg-gray-200 hover:shadow-black dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60"
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
