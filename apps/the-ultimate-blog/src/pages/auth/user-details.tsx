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

export const WriteTechFormSchema = z.object({
  title: z.string().min(1).max(40).optional(),
  shortDescription: z.string().min(10).optional(),
  html: z.string().min(100).optional(),
  featuredImage: z.string().optional(),
  webUrl: z.string().optional(),
  githubUrl: z.string().url().optional(),
  pricingUrl: z.string().url().optional(),
  docsUrl: z.string().url().optional(),
  techDescription: z.string().min(10).optional(),
});

type TechFormModalProps = {
  name: string;
  image: string;
  bio: string;
  portfolioUrl: string;
  LinkedInUrl: string;
  title: string;
  shortDescription: string;
  html: string;
  postId: string;
  slug: string;
  featuredImage: any;
  webUrl: string;
  githubUrl: string;
  pricingUrl: string;
  docsUrl: string;
  techDescription: string;
};

function UserDetails() {
  const router = useRouter();
  const currentUser = useSession();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<TechFormModalProps>({
    resolver: zodResolver(WriteTechFormSchema),
  });

  const [objectImage, setObjectImage] = useState('');
  const [selectedTags, setSelectedTags] = useState<TAG[]>([]);

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

  const updateUserProfile = trpc.user.updateUserProfile.useMutation();

  console.warn(currentUser?.data?.user?.id);

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

  const onSubmit = async (data: TechFormModalProps) => {
    try {
      await updateUserProfile.mutateAsync({
        userId: currentUser?.data?.user?.id,
        name: data.name,
        image: data.image,
        shortDescription: data.shortDescription,
        bio: data.bio,
        portfolioUrl: data.portfolioUrl,
        githubUrl: data.githubUrl,
        LinkedInUrl: data.LinkedInUrl,
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen ">
      <div className="m-auto flex flex-col items-center space-y-6 rounded-lg border p-6  text-center text-2xl dark:bg-white dark:bg-opacity-10">
        <Label className="text-4xl">
          Let's take a minute to personalize your Profile -{' '}
          {/* {currentUser.data?.user?.name} */}
        </Label>
        <form className="relative flex flex-col  gap-4 pt-4">
          <div className="grid  w-full grid-cols-3">
            <div className="col-span-1 flex flex-col flex-col-reverse items-center gap-6 ">
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

            {/* The tag form */}
            {/* {getTags.isSuccess && (
          <>
            <TagForm
              isOpen={isTagCreateModalOpen}
              onClose={() => setIsTagCreateModalOpen(false)}
            />
            <div>
              <label
                htmlFor="webUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                Select Tag
              </label>
              <div className=" flex w-full items-center space-x-4 ">
                <div className="z-10 w-4/5 border dark:border-gray-600 dark:focus:border-white">
                  <TagsAutocompletion
                    tags={getTags.data}
                    setSelectedTags={setSelectedTags}
                    selectedTags={selectedTags}
                  />
                </div>
                <button
                  onClick={() => setIsTagCreateModalOpen(true)}
                  className="space-x-3 whitespace-nowrap rounded border border-gray-200 px-4 py-2 text-sm transition hover:border-gray-900 hover:text-gray-900 dark:border-gray-600 dark:focus:border-white"
                >
                  Create Tag
                </button>
              </div>
              <div className="flex w-full flex-wrap items-center">
                {selectedTags.map((tag) => (
                  <div
                    key={tag.id}
                    className="m-2 flex items-center justify-center space-x-2 whitespace-nowrap rounded-2xl bg-gray-200/50 px-5 py-3"
                  >
                    <div>{tag.name}</div>
                    <div
                      onClick={() =>
                        setSelectedTags((prev) =>
                          prev.filter((currTag) => currTag.id !== tag.id)
                        )
                      }
                      className="cursor-pointer"
                    >
                      <FaTimes />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )} */}

            {/* {createPost.isLoading && (
          <div className="absolute bottom-2 flex items-center justify-center space-x-4">
            <div>
              <ImSpinner8 className="animate-spin" />
            </div>
            <div>Loading...</div>
          </div>
        )} */}

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
                  id="title"
                  className="w-full border border-gray-300 p-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                  placeholder="Your Display Name"
                  {...register('userName')}
                />
                <p>{errors.title?.message ?? ''}</p>

                <div className="modal-container space-y-4 py-8">
                  <div>
                    <label
                      htmlFor="docsUrl"
                      className="block font-medium text-gray-700 dark:text-gray-200"
                    >
                      User Description
                    </label>
                    <textarea
                      rows={2}
                      id="userShortDescription"
                      className="h-full w-full  border border-gray-300 p-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                      placeholder="Short Description < 20 words...."
                      {...register('userShortDescription')}
                    />
                    <p>{errors.userShortDescription?.message}</p>
                  </div>

                  {/* <div>
                <label
                  htmlFor="docsUrl"
                  className="block font-medium text-gray-700 dark:text-gray-200"
                >
                  Job Description
                </label>
                <textarea
                  rows={3}
                  id="techDescription"
                  className="h-full w-full  border border-gray-300 p-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                  placeholder="Description of the tech...."
                  {...register('JobDescription')}
                />
                <p>{errors.techDescription?.message}</p>
              </div> */}

                  {/* {Editor ? (
                <Controller
                  name="html"
                  control={control}
                  render={({ field }) => (
                    <div className="prose-li:list-style prose prose-lg prose-a:font-bold prose-li:text-black prose-table:table-auto  prose-table:border-2 prose-tr:border-r  prose-th:border prose-th:p-2 prose-td:border prose-td:p-2 prose-img:mx-auto prose-img:my-12  prose-img:max-h-custom prose-img:w-full prose-img:border-2 prose-img:border-black prose-img:py-12  prose-img:shadow-[5px_5px_0px_0px_rgba(109,40,217)] prose-img:shadow-black prose-p:font-sans prose-li:list-style  prose-table:shadow-lg prose-th:bg-gray-300 dark:prose-th:bg-opacity-0 prose-img:max-h-custom  dark:prose-headings:text-gray-300 dark:prose-p:text-gray-400 prose-li:font-sans  dark:prose-li:text-gray-400 dark:prose-strong:text-red-400  dark:prose-code:text-white  min-h-[40vh]  w-full max-w-none    border   shadow-2xl marker:text-black focus-within:border-black    dark:border-gray-600 dark:bg-black dark:bg-opacity-60  dark:text-gray-400 dark:text-opacity-80 dark:marker:text-gray-400 dark:focus:border-white ">
                      <Editor
                        {...field}
                        onChange={(data: string) =>
                          field && field.onChange(data)
                        }
                        value={field.value}
                      />
                    </div>
                  )}
                />
              ) : null} */}

                  {/* <p>{errors.html?.message}</p> */}
                </div>
              </div>
              {/* Resources Link Box */}

              {/* SHort Description */}

              {/* Main Html Editor */}
            </div>
          </div>

          <div>
            <label
              htmlFor="docsUrl"
              className="block font-medium text-gray-700 dark:text-gray-200"
            >
              User Bio
            </label>
            <textarea
              rows={3}
              id="userBio"
              className="h-full w-full  border border-gray-300 p-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
              placeholder="Short Description < 100 words...."
              {...register('userBio')}
            />
            <p>{errors.userBio?.message}</p>
          </div>

          <div className="grid grid-cols-3 gap-6 ">
            <div>
              <label
                htmlFor="webUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                Portfolio URL
              </label>
              <input
                type="text"
                id="webUrl"
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
                htmlFor="githubUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                LinkedIn URL
              </label>
              <input
                type="text"
                id="githubUrl"
                className="h-full w-full border border-gray-300 px-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                placeholder="Your LinkedIn Profile"
                {...register('githubUrl')}
              />
            </div>
            {/* <div>
              <label
                htmlFor="pricingUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                Pricing URL
              </label>
              <input
                type="text"
                id="pricingUrl"
                className="h-full w-full border border-gray-300 px-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                placeholder="https://example.com/pricing"
                {...register('pricingUrl')}
              />
            </div>
            <div>
              <label
                htmlFor="docsUrl"
                className="block font-medium text-gray-700 dark:text-gray-200"
              >
                Documentation URL
              </label>
              <input
                type="text"
                id="docsUrl"
                className="h-full w-full border border-gray-300 px-4 outline-none focus:border-gray-600 dark:border-gray-600 dark:bg-black dark:bg-opacity-60 dark:focus:border-white"
                placeholder="https://example.com/docs"
                {...register('docsUrl')}
              />
            </div> */}
          </div>

          {/* <div className="flex w-full justify-end">
            <button
              type="submit"
              className="my-2 flex items-center justify-center gap-1 rounded-lg border-2 p-1 px-3 transition hover:border-gray-700 hover:text-gray-700"
            >
              Update Profile
            </button>
          </div> */}

          <div className="py-8">
            {' '}
            <div className="flex gap-2">
              <button
                onClick={handleSubmit(onSubmit)}
                type="submit"
                type="button"
                className="mb-2 mr-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm text-xl font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Update Profile
              </button>
              <button
                type="button"
                className="mb-2 mr-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm text-xl font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Continue to website
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserDetails;
