import React, { useState } from 'react';
// import { useLocation } from 'next-router';
import Link from 'next/link';

import { BsArrowLeftCircle } from 'react-icons/bs';
import { AiFillPieChart } from 'react-icons/ai';
import { SiFuturelearn } from 'react-icons/si';
import { SiOpenaccess } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
// import Logo from '../assets/images/logo.svg';
import { useRouter } from 'next/router';
import { useNavStore } from '@front-end-nx/shared/ui';
import { useEffect } from 'react';
// import HamburgerButton from './HamburgerMenuButton/HamburgerButton';

const Sidebar = () => {
  const { showNavSidebar, setShowNavSidebar } = useNavStore();
  const [mobileMenu, setMobileMenu] = useState(false);
  const router = useRouter();
  const location = router.pathname;

  const Menus = [
    { title: 'Dashboard', path: '/dashboard', src: <AiFillPieChart /> },
    { title: 'Course', path: '/course', src: <SiFuturelearn /> },
    { title: 'Profile', path: '/profile', src: <CgProfile /> },
    { title: 'Signin', path: '/login', src: <SiOpenaccess />, gap: 'true' },
  ];

  useEffect(() => {
    // do something when showNavSidebar changes
  }, [showNavSidebar]);

  return (
    <>
      <div
        className={`${
          showNavSidebar ? 'w-80' : 'w-20'
        } transition-width dark:bg-inheritq sticky top-0  h-screen border-r border-gray-200 bg-gray-100 p-5 duration-300   dark:bg-inherit sm:block`}
      >
        <BsArrowLeftCircle
          className={`${
            !showNavSidebar && 'rotate-180'
          } absolute -right-4 top-6 cursor-pointer rounded-full bg-white fill-slate-800 text-3xl dark:bg-gray-800 dark:fill-gray-400`}
          onClick={() => setShowNavSidebar(!showNavSidebar)}
        />
        <Link href="/">
          <div
            className={`flex ${showNavSidebar ? 'gap-x-4' : ''} items-center`}
          >
            {/* <img src={Logo} alt="" className="pl-2" /> */}
            {showNavSidebar && (
              <span className="overflow-hidden whitespace-nowrap text-xl font-medium dark:text-white">
                Goal Quest
              </span>
            )}
          </div>
        </Link>

        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <Link href={menu.path} key={index}>
              <li
                className={`flex cursor-pointer items-center gap-x-6 rounded border p-1 text-base font-normal hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                }`}
              >
                <span className="text-2xl">{menu.src}</span>
                <span
                  className={`${
                    !showNavSidebar && 'hidden'
                  } origin-left overflow-hidden duration-1000 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      {/* <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } md absolute left-6 right-6 z-50 mt-16 flex-col items-center space-y-6 self-end rounded-xl bg-gray-50 py-8  font-bold drop-shadow dark:bg-slate-800 dark:text-white sm:w-auto`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${
                  location.pathname === menu.path &&
                  'bg-gray-200 dark:bg-gray-700'
                } rounded-xl p-2 hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;
