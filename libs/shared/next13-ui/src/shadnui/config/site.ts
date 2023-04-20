import { NavItem } from '../types';

interface SiteConfig {
  name: string;
  description: string;
  mainNav: NavItem[];
  links: {
    twitter: string;
    github: string;
    docs: string;
  };
  url: string;
  ogImage: string;
}

export const siteConfig: SiteConfig = {
  name: 'Taxonomy',
  description:
    'An open source application built using the new router, server components and everything new in Next.js 13.',
  url: 'https://tx.shadcn.com',
  ogImage: 'https://tx.shadcn.com/og.jpg',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },

    {
      title: 'Features',
      href: '/features',
      disabled: true,
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: 'Documentation',
      href: '/docs',
    },
    {
      title: 'Contact',
      href: '/contact',
      disabled: true,
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
};
