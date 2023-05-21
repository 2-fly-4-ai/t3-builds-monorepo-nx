import Link from 'next/link';

import { cn } from 'libs/shared/ui/src/utils/utils';
import { Icons } from 'libs/shared/ui/src/shadnui/icons';
import { buttonVariants } from 'libs/shared/ui/src/shadnui/ui/button';
import { UserAuthForm } from '@front-end-nx/shared/ui';
import React, { useCallback, useState } from 'react';
import { signIn } from 'next-auth/react';
import type { SignInErrorTypes } from 'next-auth/core/pages/signin';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { useRouter } from 'next/router';
import AuthFeedbackMessage from 'libs/shared/ui/src/t3-blog/components/AuthFeedbackMessage';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import type { GetServerSidePropsContext, NextPage } from 'next';
import { useForm } from 'react-hook-form';
import {
  SignInWithEmailInput,
  signInWithEmailSchema,
} from 'libs/shared/ui/src/t3-blog/schema/user.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import MetaTags from 'libs/shared/ui/src/t3-blog/components/MetaTags';
import { Button } from 'libs/shared/ui/src/shadnui/ui/button';
import TextInput from 'libs/shared/ui/src/t3-blog/components/TextInput';

// export const metadata = {
//   title: "Create an account",
//   description: "Create an account to get started.",
// }

export default function RegisterPage() {
  const router = useRouter();
  const errorType = router.query.error as SignInErrorTypes;
  const callbackUrl = router.query.callbackUrl as string;

  const [isLoading, setIsLoading] = useState<LoadingState>({
    github: false,
    email: false,
    discord: false,
    google: false,
  });

  /**
   * If one of the sign-in options is loading,
   * the rest should be disabled.
   */
  const getDisabledState = (type: SigninOptions) => {
    return Object.entries(isLoading).some(([key, value]) => {
      return key !== type && value === true;
    });
  };

  const { handleSubmit, register } = useForm<SignInWithEmailInput>({
    resolver: zodResolver(signInWithEmailSchema),
  });

  const error = errorType && (errors[errorType] ?? errors.default);

  const handleSignIn = useCallback(
    (type: Exclude<SigninOptions, 'email'>) => async () => {
      setIsLoading((prev) => ({ ...prev, [type]: true }));

      await signIn(type, {
        callbackUrl: callbackUrl || '/',
      });

      setIsLoading((prev) => ({ ...prev, [type]: false }));
    },
    [callbackUrl]
  );

  const onEmailSubmit = useCallback(
    async (values: SignInWithEmailInput) => {
      setIsLoading((prev) => ({ ...prev, email: true }));

      await signIn('email', {
        callbackUrl: callbackUrl || '/',
        email: values.email,
      });

      setIsLoading((prev) => ({ ...prev, email: false }));
    },
    [callbackUrl]
  );

  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        href="/login"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8'
        )}
      >
        Login
      </Link>
      <div className="hidden h-full bg-slate-100 lg:block" />
      <div className="lg:p-8">
        <div className="sm:w-[350px] mx-auto flex w-full flex-col justify-center space-y-6">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Enter your email below to create your account
            </p>
          </div>
          <div>
            <form onSubmit={handleSubmit(onEmailSubmit)}>
              <TextInput
                variant="primary"
                type="email"
                placeholder="type your e-mail"
                disabled={isLoading.email}
                required
                className="rounded-md"
                {...register('email')}
              />
              <Button
                disabled={getDisabledState('email')}
                loading={isLoading.email}
                variant="primary"
                type="submit"
                className="mt-2 w-full rounded-lg"
                icon={<MdEmail size={19} color="white" />}
              >
                Sign in with e-mail
              </Button>
            </form>
          </div>
          {/* <UserAuthForm /> */}
          <p className="px-8 text-center text-sm text-slate-500 dark:text-slate-400">
            By clicking continue, you agree to our{' '}
            <Link
              href="/terms"
              className="hover:text-brand underline underline-offset-4"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="hover:text-brand underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getServerSession(context.req, context.res, authOptions);

  // If the user is already logged in, redirect.
  if (session) {
    return { redirect: { destination: '/' } };
  }

  // Could return the providers as an array if we wanted.
  // const providers = await getProviders();

  return {
    props: {},
  };
}
