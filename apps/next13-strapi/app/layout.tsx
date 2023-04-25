import './globals.css';
import { SiteHeader } from '@front-end-nx/shared/next13-ui';
import { SiteFooter } from '@front-end-nx/shared/next13-ui';
import Providers from './providers';
import { siteConfig } from 'libs/shared/next13-ui/src/shadnui/config/site';
import { absoluteUrl, cn } from 'libs/shared/next13-ui/src/utils/utils';
import { Analytics } from '@front-end-nx/shared/next13-ui';
import { TailwindIndicator } from '@front-end-nx/shared/next13-ui';
// import { Toaster } from '@front-end-nx/shared/next13-ui';
import { Inter as FontSans } from 'next/font/google';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-inter',
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Server Components',
    'Radix UI',
  ],
  authors: [
    {
      name: 'shadcn',
      url: 'https://shadcn.com',
    },
  ],
  creator: 'shadcn',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl('/og.jpg'),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@shadcn',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn('font-sans text-slate-900 antialiased', fontSans.variable)}
    >
      <body>
        <Providers>
          <SiteHeader />
          {children}
          {/* <Toaster /> */}
          {/* <Analytics />
          <TailwindIndicator /> */}
          {/* <SiteFooter /> */}
        </Providers>
      </body>
    </html>
  );
}

// import './globals.css';
// import { SiteHeader } from '@front-end-nx/shared/next13-ui';
// import { SiteFooter } from '@front-end-nx/shared/next13-ui';
// import Providers from './providers';

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Providers>
//           <SiteHeader />
//           {children}
//           <SiteFooter />
//         </Providers>
//       </body>
//     </html>
//   );
// }
