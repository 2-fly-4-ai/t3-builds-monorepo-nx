'use client';
import * as React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { MainNavItem } from './types';
import { siteConfig } from './config/site';
import { cn } from '../utils/utils';
import { Icons } from './icons/icons';
import { MobileNav } from './mobile-nav';
import { useState } from 'react';
import { useEffect } from 'react';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  let segment = '';
  try {
    const selectedSegment = useSelectedLayoutSegment();
    segment = selectedSegment || '';
  } catch (error) {
    console.error(
      'An error occurred while getting the selected layout segment:',
      error
    );
  }

  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  // Add useEffect hook to hide mobile menu when the component is mounted on the server
  useEffect(() => {
    setShowMobileMenu(false);
  }, []);

  return (
    <div className="flex gap-6 md:gap-10 ">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo className="text-gray-500 dark:text-white" />
        <span className="hidden font-bold sm:inline-block text-gray-600 dark:text-gray-400">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex ">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center text-lg font-semibold text-slate-600 sm:text-sm',
                item.href.startsWith(`/${segment}`) &&
                  'text-gray-500 dark:text-gray-400',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
