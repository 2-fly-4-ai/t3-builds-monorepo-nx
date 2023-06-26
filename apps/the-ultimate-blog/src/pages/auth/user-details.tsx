import React, { useState } from 'react';
import { Label } from '@radix-ui/react-label';
import { useSession } from 'next-auth/react';
import { z } from 'zod';
import { trpc } from '../../utils/trpc';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';
import { BiEdit } from 'react-icons/bi';
import Image from 'next/image';
import { useEffect } from 'react';
import Link from 'next/link';

export const UserDetailFormSchema = z.object({
  shortDescription: z.string().min(10).optional(),
  featuredImage: z.string().optional(),
  githubUrl: z.string().url().optional(),
  portfolioUrl: z.string().url().optional(),
  LinkedInUrl: z.string().url().optional(),
  bio: z.string().max(20).optional(),
  name: z.string().optional(),
});

function UserDetails() {
  const router = useRouter();
  const currentUser = useSession();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(UserDetailFormSchema),
  });

  const [objectImage, setObjectImage] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const postRoute = trpc.useContext().post;

  const createPost = trpc.post.createTechPost.useMutation({
    onSuccess: () => {
      toast.success('Post created successfully');
      reset();

      postRoute.getTechPosts.invalidate();
      // Beautiful implementation of Toast
    },
    onError: () => {
      toast.error('Something went wrong');
    },
  });

  const userProfile = trpc.user.getUserProfile.useQuery(
    {
      username: currentUser?.data?.user?.id,
    },
    {
      enabled: !!currentUser?.data?.user?.id,
    }
  );

  const updateUserProfile = trpc.user.updateUserProfile.useMutation({
    onSuccess: () => {
      if (userProfile.data?.username) {
        userRoute.getUserProfile.invalidate({
          username: userProfile.data?.username as string,
        });
        toast.success('Profile Details updated!');
      }
    },
    onError: () => {
      if (userProfile.data?.username) {
        userRoute.getUserProfile.invalidate({
          username: userProfile.data?.username as string,
        });
        toast.error('Updating failed!');
      }
    },
  });

  const userRoute = trpc.useContext().user;
  const uploadAvatar = trpc.user.uploadAvatar.useMutation({
    onSuccess: () => {
      if (userProfile.data?.username) {
        userRoute.getUserProfile.invalidate({
          username: userProfile.data?.username as string,
        });
        toast.success('avatar updated!');
      }
    },
    onError: () => {
      if (userProfile.data?.username) {
        userRoute.getUserProfile.invalidate({
          username: userProfile.data?.username as string,
        });
        toast.error('avatar upload failed!');
      }
    },
  });

  const handleChangeImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && userProfile.data?.username) {
      const file = e.target.files[0]; //select only one image

      if (file.size > 1.5 * 1000000) {
        return toast.error('images size should not be greater than 1MB');
      }

      setObjectImage(URL.createObjectURL(file));

      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onloadend = () => {
        if (fileReader.result && userProfile.data?.username) {
          uploadAvatar.mutate({
            imageAsDataUrl: fileReader.result as string,
            username: userProfile.data?.username,
          });
        }
      };
    }
  };

  const onSubmit = async (data) => {
    try {
      await updateUserProfile.mutateAsync({
        userId: currentUser?.data?.user?.id,
        ...data,
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let defaultValues = {};

    if (userProfile.data) {
      defaultValues = {
        shortDescription: userProfile.data?.shortDescription || '',
        githubUrl: userProfile.data?.githubUrl || '',
        portfolioUrl: userProfile.data?.portfolioUrl || '',
        LinkedInUrl: userProfile.data?.LinkedInUrl || '',
        bio: userProfile.data?.bio || '',
        name: userProfile.data?.name || '',
      };
    }

    reset(defaultValues);
  }, [userProfile.data]);

  return (
    <div className="flex h-screen ">
      <div className="m-auto flex flex-col items-center space-y-6 rounded-lg border p-6  text-center text-2xl dark:bg-white dark:bg-opacity-10">
        <Label className="text-4xl">
          Let's take a minute to personalize your Profile -{' '}
          {/* {currentUser.data?.user?.name} */}
        </Label>
        <form className="relative flex flex-col  gap-4 pt-4">
          <div className="grid  w-full grid-cols-3">
            <div className="col-span-1 flex flex-col-reverse items-center gap-6 ">
              <label
                htmlFor="pricingUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                Featured Image
              </label>
              <div
                className="group relative flex h-48 w-48 flex-col rounded-full border-2 border-white bg-gray-100"
                onSubmit={handleSubmit(onSubmit)}
              >
                <label
                  htmlFor="avatarFile"
                  className="absolute z-10 flex h-full w-full cursor-pointer items-center justify-center rounded-full  transition group-hover:bg-black/40"
                >
                  <BiEdit className="hidden text-3xl text-white group-hover:block" />
                  <input
                    type="file"
                    name="avatarFile"
                    id="avatarFile"
                    className="sr-only"
                    accept="image/*"
                    onChange={handleChangeImage}
                    multiple={false}
                  />
                </label>

                {!objectImage && userProfile.data?.image && (
                  <Image
                    src={userProfile.data?.image}
                    alt={userProfile.data?.name ?? ''}
                    fill
                    className=" rounded-full"
                  />
                )}
                {objectImage && (
                  <Image
                    src={objectImage}
                    alt={userProfile.data?.name ?? ''}
                    fill
                    className="rounded-full"
                  />
                )}
              </div>
            </div>

            <div className="col-span-2 flex flex-col  gap-y-4 ">
              <div>
                <label
                  htmlFor="webUrl"
                  className="block font-medium text-gray-700 dark:text-gray-200"
                >
                  UserName
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 p-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                  placeholder="Your Display Name"
                  {...register('name')}
                />
                <p>{errors.name?.message ?? ''}</p>

                <div className="modal-container space-y-4 py-8">
                  <div>
                    <label
                      htmlFor="docsUrl"
                      className="block font-medium text-gray-700 dark:text-gray-200"
                    >
                      User Description
                    </label>
                    <textarea
                      rows={1}
                      id="shortDescription"
                      className="h-full w-full  border border-gray-300 p-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                      placeholder="Short Description < 20 words...."
                      {...register('shortDescription')}
                    />
                    <p>{errors.shortDescription?.message}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="bio"
              className="block font-medium text-gray-700 dark:text-gray-200"
            >
              User Bio
            </label>
            <textarea
              rows={1}
              id="bio"
              className="h-full w-full  border border-gray-300 p-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
              placeholder="Short Description < 100 words...."
              {...register('bio')}
            />
            <p>{errors.bio?.message}</p>
          </div>

          <div className="grid grid-cols-3 gap-6 ">
            <div>
              <label
                htmlFor="portfolioUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                Portfolio URL
              </label>
              <input
                type="text"
                id="portfolioUrl"
                className="h-full w-full border border-gray-300 px-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black  dark:bg-opacity-60 dark:focus:border-white"
                placeholder="https://example.com"
                {...register('portfolioUrl')}
              />
            </div>
            <div>
              <label
                htmlFor="githubUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                GitHub URL
              </label>
              <input
                type="text"
                id="githubUrl"
                className="h-full w-full border border-gray-300 px-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                placeholder="Your Github Profile"
                {...register('githubUrl')}
              />
            </div>
            <div>
              <label
                htmlFor="LinkedInUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                LinkedIn URL
              </label>
              <input
                type="text"
                id="LinkedInUrl"
                className="h-full w-full border border-gray-300 px-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                placeholder="Your LinkedIn Profile"
                {...register('LinkedInUrl')}
              />
            </div>
          </div>

          <div className="py-8">
            <div className="flex gap-2">
              <button
                onClick={handleSubmit(onSubmit)}
                className="mb-2 mr-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm text-xl font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Update Profile
              </button>
              <Link href="/">
                <button
                  type="button"
                  className="mb-2 mr-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm text-xl font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Continue to website
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserDetails;
