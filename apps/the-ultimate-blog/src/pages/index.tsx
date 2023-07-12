import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Image from 'next/image';
import { buttonVariants } from 'libs/shared/ui/src/shadnui/ui/button';
import { cn } from 'libs/shared/ui/src/utils/utils';
// import Link from 'next/link';
// import { SiteFooter } from '@front-end-nx/shared/ui';
// import Benefits from '../components/Home/benefits';
// import { benefitOne, benefitTwo } from '../components-home/data';
// import Testimonials from '../components-home/testimonials';
// import SectionTitle from '../components-home/sectionTitle';

import Hero from '../components-home/Hero';
import Features from '../components-home/Features';
import GithubInfo from '../components-home/GithubInfo';

function index() {
  const stars = '';
  return (
    <MainLayout>
      <Hero />
      <Features />

      {/* <section className="bg-gray-600  bg-opacity-20">
        <div className="mx-auto min-h-screen max-w-7xl    px-8 py-8 md:py-12">
          <SectionTitle
            pretitle="Nextly Benefits"
            title=" Why should you use this landing page"
          >
            Nextly is a free landing page & marketing website template for
            startups and indie projects. Its built with Next.js & TailwindCSS.
            And its completely open-source.
          </SectionTitle>

          <Benefits data={benefitOne} />
          <Benefits imgPos="right" data={benefitTwo} />
        </div>
      </section> */}

      {/* <div className="mx-auto min-h-screen max-w-7xl px-8 py-8 md:py-12">
        <SectionTitle
          pretitle="Testimonials"
          title="Here's what our customers said"
        >
          Testimonails is a great way to increase the brand trust and awareness.
          Use this section to highlight your popular customers.
        </SectionTitle>
        <Testimonials />
      </div> */}
      <GithubInfo />
    </MainLayout>
  );
}

export default index;
