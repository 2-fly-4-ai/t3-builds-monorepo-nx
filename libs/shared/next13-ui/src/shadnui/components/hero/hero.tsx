import React from 'react';
import { buttonVariants } from '../../ui/button';
import { cn } from '../../../utils/utils';
import Image from 'next/image';
import Link from 'next/link';

function hero() {
  return (
    <section className="container grid items-center justify-center gap-6 pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-24">
      <Image
        src="https://tx.shadcn.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.2e703faf.png&w=256&q=75"
        width={250}
        height={250}
        alt="Hero image"
        priority
      />
      <div className="mx-auto flex flex-col items-start gap-4 lg:w-[52rem]">
        <h1 className="text-3xl font-bold leading-[1.1] tracking-tighter sm:text-5xl md:text-6xl text-slate-700 dark:text-slate-200">
          What&apos;s going on here?
        </h1>
        <p className="max-w-[42rem] leading-normal text-slate-700 sm:text-xl sm:leading-8 dark:text-slate-400">
          I&apos;m building a web app with Next.js 13 and open sourcing
          everything. Follow along as we figure this out together.
        </p>
      </div>
      <div className="flex gap-4">
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
  );
}

export default hero;
