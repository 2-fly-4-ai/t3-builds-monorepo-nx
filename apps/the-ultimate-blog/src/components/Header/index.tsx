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
import { useGlobalContextCourseStore } from '@front-end-nx/shared/ui';
import { useGlobalContextTechStore } from '@front-end-nx/shared/ui';
import { ThemeToggle } from 'libs/shared/next13-ui/src/shadnui/components/theme-toggle/theme-toggle';

import { useSelectedLayoutSegment } from 'next/navigation';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { MainNav } from '@front-end-nx/shared/ui';
import { useEffect } from 'react';
import Link from 'next/link';
import { trpc } from '../../utils/trpc';
import Ink from 'react-ink';

// const NavigationMenuDemo = dynamic(
//   () => import('libs/shared/ui/src/layouts/nav-menu/nav-menu'),
//   { ssr: false }
// );

export default function Header() {
  const router = useRouter();
  const path = usePathname();

  //why is this undefined

  const { data: sessionData, status } = useSession();

  const userProfile = trpc.user.getUserProfile.useQuery(
    {
      username: sessionData?.user?.id,
    },
    {
      enabled: !!sessionData?.user?.id,
    }
  );

  const username = userProfile?.data?.username;

  const [headerColor, setHeaderColor] = useState(false);

  useEffect(() => {
    if (path === '/tools/heros') {
      setHeaderColor(true);
    }
  }, [path]);

  let items;
  if (path === '/docs') {
    items = [
      // {
      //   title: 'Home',
      //   href: '/',
      //   segment: 'home',
      // },
      // {
      //   title: 'Discussion',
      //   href: '/contact',
      //   disabled: true,
      //   segment: 'contact',
      // },
      {
        title: 'Docs',
        href: '/docs',
        disabled: false,
        segment: 'contact',
      },
      {
        title: 'Guides',
        href: '/guides',
        disabled: false,
        segment: 'contact',
      },
      {
        title: 'Rules',
        href: '/rules',
        disabled: false,
        segment: 'contact',
      },
    ];
  } else {
    items = [
      {
        title: 'TechStack',
        href: '/techstack',
        segment: 'blog',
      },
      {
        title: 'News',
        href: '/news',
        disabled: false,
        segment: 'news',
      },
      {
        title: 'Posts',
        href: '/posts',
        segment: '',
      },
      {
        title: 'Discuss',
        href: '/discussions',
        segment: '',
      },
      {
        title: 'Courses',
        href: '/courses',
        disabled: false,
        segment: 'contact',
      },
      {
        title: 'Products',
        href: '/products',
        disabled: false,
        segment: 'contact',
      },
      {
        title: 'Docs',
        href: '/docs',
        disabled: false,
        segment: 'contact',
      },
    ];
  }

  //State Handlers
  const { setIsWriteModalOpen } = useGlobalContextStore();

  // const { setIsWriteCourseModalOpen } = useGlobalContextCourseStore();
  const [segment, setSegment] = React.useState('');

  React.useEffect(() => {
    setSegment(window.location.pathname.split('/')[1]);
  }, []);

  return (
    <header
      className={`top-0 z-10 grid w-full grid-cols-12 flex-row items-center border-b border-b-gray-300 bg-gray-100  px-8  py-2 backdrop-blur-md dark:bg-inherit  ${
        headerColor ? 'dark:bg-opacity-0' : 'dark:bg-opacity-100'
      }`}
    >
      <div className="col-span-8 flex items-center justify-center ">
        <MainNav items={items} segment={segment} />
        <Link href="/" className="mr-auto cursor-pointer"></Link>
      </div>

      {status === 'authenticated' ? (
        <div className="col-span-4 flex items-center justify-end  gap-4">
          <ThemeToggle />
          <div>
            <AiOutlineBell />
          </div>
          <div>
            <div className="h-9 w-9 rounded-full bg-gray-600">
              {' '}
              <Link href={`/user/${username}`}>
                <Image
                  src={sessionData.user.image}
                  alt={sessionData.user.name}
                  className="h-9 w-9 rounded-full border-2"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>

          {path === '/posts' ? (
            <div>
              <button
                onClick={() => setIsWriteModalOpen(true)}
                className="dark flex items-center justify-center gap-1 rounded-lg border-2 border-gray-300 bg-white p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition hover:border-black hover:bg-gray-200 hover:text-gray-700 hover:shadow-black dark:bg-inherit dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60 dark:hover:text-white"
              >
                <AiOutlineEdit />
                Write
              </button>
            </div>
          ) : path === '/techstack' ? (
            <div>
              <button
                onClick={() => setIsWriteModalOpen(true)}
                className="dark flex items-center justify-center gap-1 rounded-lg border-2 border-gray-300 bg-white p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition hover:border-black hover:bg-gray-200 hover:text-gray-700 hover:shadow-black dark:bg-inherit dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60 dark:hover:text-white"
              >
                <AiOutlineEdit />
                Add Tech
              </button>
            </div>
          ) : path === '/courses' ? (
            <div>
              <button
                onClick={() => setIsWriteModalOpen(true)}
                className="dark flex items-center justify-center gap-1 rounded-lg border-2 border-gray-300 bg-white p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition hover:border-black hover:bg-gray-200 hover:text-gray-700 hover:shadow-black dark:bg-inherit dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60 dark:hover:text-white"
              >
                <AiOutlineEdit />
                Write Course
              </button>
            </div>
          ) : path === '/products' ? (
            <div>
              <button
                onClick={() => setIsWriteModalOpen(true)}
                className="dark flex items-center justify-center gap-1 rounded-lg border-2 border-gray-300 bg-white p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition hover:border-black hover:bg-gray-200 hover:text-gray-700 hover:shadow-black dark:bg-inherit dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60 dark:hover:text-white"
              >
                <AiOutlineEdit />
                Write Product
              </button>
            </div>
          ) : path === '/discussions' ? (
            <div>
              <button
                onClick={() => setIsWriteModalOpen(true)}
                className="flex items-center justify-center gap-1 rounded-lg border-2 border-gray-300 bg-white p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition hover:border-gray-500 hover:bg-gray-200 hover:text-gray-700 hover:shadow-gray-500 dark:bg-inherit dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60 dark:hover:text-white"
              >
                <AiOutlineEdit />
                Post Link
              </button>
            </div>
          ) : null}

          <button
            onClick={() => signOut()}
            className="relative flex items-center justify-center gap-1 overflow-hidden rounded-lg border-2 border-gray-300 bg-white p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition hover:border-gray-500 hover:bg-gray-200 hover:text-gray-700 hover:shadow-gray-500 dark:bg-inherit dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60 dark:hover:text-white"
          >
            <FiLogOut />
            Logout
            <Ink />
          </button>
        </div>
      ) : (
        <div className="col-span-4 ml-auto flex items-center justify-center gap-4">
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
              className="relative flex items-center justify-center gap-1 overflow-hidden rounded-lg border-2 border-gray-300 bg-white p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition hover:border-gray-500 hover:bg-gray-200 hover:text-gray-700 hover:shadow-gray-500 dark:bg-inherit dark:hover:border-white dark:hover:bg-white dark:hover:bg-opacity-60 dark:hover:text-white"
            >
              <FiLogIn />
              Sign In
              <Ink />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
