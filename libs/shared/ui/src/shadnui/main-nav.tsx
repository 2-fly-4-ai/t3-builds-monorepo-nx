import * as React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

import { MainNavItem } from './types';
import { siteConfig } from './config/site';
import { cn } from '../utils/utils';
import { Icons } from './icons';
import { MobileNav } from './mobile-nav';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  segment: string;
}

export function MainNav({ items, children, segment }: MainNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6  md:gap-10 2xl:gap-20">
      <Link href="/" className="hidden items-center space-x-2  md:flex">
        <Icons.logo />
        <span className="hidden  text-2xl font-bold sm:flex">
          SERP.DEV
          {/* {siteConfig.name} */}
        </span>
      </Link>
      {items?.length ? (
        <nav className=" hidden gap-6  text-xl md:flex ">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'flex items-center font-semibold text-slate-600 dark:text-white sm:text-sm',
                item.href.startsWith(`/${segment}`) && 'text-slate-900',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              <div className="text-md">{item.title}</div>
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
