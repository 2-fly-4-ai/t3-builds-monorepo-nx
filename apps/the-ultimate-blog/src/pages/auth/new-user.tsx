import React from 'react';
import type { GetServerSidePropsContext } from 'next';
import { prisma } from '../../server/db/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import MetaTags from 'libs/shared/ui/src/t3-blog/components/MetaTags';
import Spinner from 'libs/shared/ui/src/t3-blog/components/Spinner';
import { Label } from '@radix-ui/react-label';
import { z } from 'zod';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

/**
 * This page is where new users logging in for the first time are
 * redirected to, by Next Auth. Here we will just create two welcome
 * notifications and redirect them back on their way.
 */

export const userFormSchema = z.object({
  title: z.string().min(20),
  description: z.string().min(60).optional(),
  html: z.string().min(100).optional(),
  featuredImage: z.string().optional(),
});

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  //avatar  = trpc.user.uploadAvatar()
  const callbackUrl = context.query.callbackUrl as string;

  if (!session?.user) {
    return { redirect: { destination: '/' } };
  }

  // Only create welcome notifications once.
  const userHasAlreadyBeenWelcomed = await prisma.notification.findFirst({
    where: {
      type: 'WELCOME',
      notifiedId: session?.user.id,
    },
  });

  if (!userHasAlreadyBeenWelcomed) {
    const noAvatar = !session?.user?.image;
    const noUsername = !session?.user?.name;

    const createSystemNotification = (type: string) => {
      return prisma.notification.create({
        data: {
          type,
          notifierId: session?.user.id,
          notifiedId: session?.user.id,
        },
      });
    };

    const welcomeNotification = createSystemNotification('WELCOME');
    // const firstPostNotification = createSystemNotification('FIRST-POST');
    const noUsernameNotification = createSystemNotification('NO-USERNAME');
    const noAvatarNotification = createSystemNotification('NO-AVATAR');

    const promisesToAwait = [welcomeNotification];
    // firstPostNotification

    // If the user does not have avatar or username, they will be alerted on first sign-in.
    if (noAvatar) promisesToAwait.push(noAvatarNotification);
    if (noUsername) promisesToAwait.push(noUsernameNotification);

    // fetching in parallel to reduce wait.
    await Promise.all(promisesToAwait);
  }

  // Fetch additional data for the form here
  // Example:
  const formDetails = {
    // Add the form details here
  };

  return { props: { formDetails } };
}

const NewUserPage: React.FC<{ formDetails: any }> = ({ formDetails }) => {
  const currentUser = useSession();

  return (
    <>
      <MetaTags title="Form Title" />
      <div className="flex min-h-screen w-full flex-col ">
        <div className="m-auto flex max-w-7xl flex-col items-center space-y-6  text-center text-2xl">
          <Label className="text-4xl">
            Welcome to SERP.dev - {currentUser.data?.user?.name}
          </Label>
          <span>
            At serp.dev, we value your privacy and are committed to maintaining
            the confidentiality and security of your personal information. Rest
            assured that any personal details you provide are treated with the
            utmost care and respect. We understand that in order to provide you
            with a tailored and personalized experience, we may need to collect
            certain information from you. However, we want to assure you that we
            will never share your email address with anyone or use it for any
            spam or unauthorized purposes. If you choose to share your personal
            details with us, it will be solely used to enhance your experience
            on our platform.
          </span>
          <div className="flex gap-2">
            <Link href="/auth/userdetails">
              <button
                type="button"
                class="mb-2 mr-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm text-xl font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Personalize My Profile
              </button>
            </Link>
            <button
              type="button"
              class="mb-2 mr-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm text-xl font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              Continue to website
            </button>
          </div>
          <div className="min-w-7xl"></div>
        </div>
      </div>
    </>
  );
};

export default NewUserPage;
