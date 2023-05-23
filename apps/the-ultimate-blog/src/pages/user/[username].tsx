import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { trpc } from '../../utils/trpc';
import { BiEdit } from 'react-icons/bi';
import { SlShareAlt } from 'react-icons/sl';
import { toast } from 'react-hot-toast';
import PostCard from 'libs/shared/ui/src/lib/post-card/post-card';
import PostCardList from 'libs/shared/ui/src/lib/post-card/post-card-list';
import PostCardListUserProfile from 'libs/shared/ui/src/lib/post-card/post-card-userprofile-list';
import PostCardUserProfile from 'libs/shared/ui/src/lib/post-card/post-card-userprofile';
import { useSession } from 'next-auth/react';
import Modal from '../../components/Modal';
import LoadingSpinner from 'libs/shared/ui/src/lib/loading-spinner/loading-spinner';
import Link from 'next/link';
import dayjs from 'dayjs';
import { useCallback } from 'react';
import { useBookmarkStore } from 'libs/shared/ui/src/zustand/store';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'libs/shared/ui/src/shadnui/ui/tabs';
import TechModal from '../../components/TechModal';

import { useGlobalContextTechModalStore } from 'libs/shared/ui/src/zustand/store';

const UserProfilePage = () => {
  const readingList = trpc.post.getReadingList.useQuery();
  const techReadingList = trpc.post.getTechReadingList.useQuery();
  const [showListView, setListView] = useState(false);
  const [isToggledPost, setIsToggledPost] = useState('');

  const { togglePosts } = useGlobalContextTechModalStore();

  const handlePostsModalToggle = () => {
    togglePosts(id);
  };

  const handleIsResourcesOpen = (bookMarkId) => {
    setIsToggledPost(bookMarkId);
  };

  const router = useRouter();
  const currentUser = useSession();
  const userProfile = trpc.user.getUserProfile.useQuery(
    {
      username: router.query.username as string,
    },
    {
      enabled: !!router.query.username,
    }
  );
  const userPosts = trpc.user.getUserPosts.useQuery(
    {
      username: router.query.username as string,
    },
    {
      enabled: !!router.query.username,
    }
  );
  const [objectImage, setObjectImage] = useState('');
  const [file, setFile] = useState<File | null>(null);
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
  const [isFollowModalOpen, setIsFollowModalOpen] = useState({
    isOpen: false,
    modalType: 'followers',
  });
  const followers = trpc.user.getAllFollowers.useQuery(
    {
      userId: userProfile?.data?.id as string,
    },
    {
      enabled: Boolean(userProfile?.data?.id),
    }
  );
  const following = trpc.user.getAllFollowing.useQuery(
    {
      userId: userProfile?.data?.id as string,
    },
    {
      enabled: Boolean(userProfile?.data?.id),
    }
  );
  const followUser = trpc.user.followUser.useMutation({
    onSuccess: () => {
      // we have to update out UI
      userRoute.getAllFollowers.invalidate();
      userRoute.getAllFollowing.invalidate();
      userRoute.getUserProfile.invalidate();
      toast.success('user followed');
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  const unfollowUser = trpc.user.unfollowUser.useMutation({
    onSuccess: () => {
      userRoute.getAllFollowers.invalidate();
      userRoute.getAllFollowing.invalidate();
      userRoute.getUserProfile.invalidate();
      toast.success('user unfollowed');
    },
  });
  const postRoute = trpc.useContext().post;

  const removeBookmark = trpc.post.removeBookmark.useMutation({
    onSuccess: () => {
      toast.success('Bookmark Removed');
      postRoute.getReadingList.invalidate();
    },
  });

  const { bookmarks, toggleBookmark } = useBookmarkStore();

  const handleBookmarkToggle = useCallback(
    (postId: string) => {
      toggleBookmark(postId);
    },
    [toggleBookmark]
  );

  return (
    <MainLayout>
      {followers.isSuccess && following.isSuccess && (
        <Modal
          isOpen={isFollowModalOpen.isOpen}
          onClose={() =>
            setIsFollowModalOpen((pre) => ({ ...pre, isOpen: false }))
          }
        >
          <div className="flex w-full flex-col items-center justify-center space-y-4">
            {isFollowModalOpen.modalType === 'followers' && (
              <div className="flex w-full flex-col justify-center">
                <h3 className="my-2 p-2 text-xl">Followers</h3>
                {followers.data?.followedBy.map((user) => (
                  <div
                    key={user.id}
                    className="my-1 flex w-full items-center justify-between rounded-xl bg-gray-200 px-4 py-2"
                  >
                    <div>{user.name}</div>
                    <button
                      onClick={() =>
                        user.followedBy.length > 0
                          ? unfollowUser.mutate({
                              followingUserId: user.id,
                            })
                          : followUser.mutate({
                              followingUserId: user.id,
                            })
                      }
                      className="flex items-center space-x-3 rounded border border-gray-400/50 bg-white px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
                    >
                      {user.followedBy.length > 0 ? 'Unfollow' : 'Follow'}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {isFollowModalOpen.modalType === 'following' && (
              <div className="flex w-full flex-col justify-center">
                <h3 className="my-2 p-2 text-xl">Following</h3>
                {following.data?.followings.map((user) => (
                  <div
                    key={user.id}
                    className="my-1 flex w-full items-center justify-between rounded-xl bg-gray-200 px-4 py-2"
                  >
                    <div>{user.name}</div>
                    <div>
                      <button
                        onClick={() =>
                          unfollowUser.mutate({
                            followingUserId: user.id,
                          })
                        }
                        className="flex items-center space-x-3 rounded border border-gray-400/50 bg-white px-4 py-2 transition hover:border-gray-900 hover:text-gray-900"
                      >
                        Unfollow
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Modal>
      )}
      <div className="flex h-full w-full items-center justify-center">
        <div className="my-10 flex h-full w-full flex-col items-center justify-center lg:max-w-screen-md xl:max-w-screen-lg">
          {/* Top section hero */}
          <div className="flex w-full flex-col rounded-md shadow-md dark:bg-black dark:bg-opacity-60">
            <div className="relative h-44 w-full rounded-md bg-gradient-to-r from-rose-100 to-teal-100 dark:bg-gradient-to-b dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-600">
              <div className="absolute -bottom-10 left-12">
                <div className="group relative h-28 w-28 rounded-full border-2 border-white bg-gray-100">
                  {currentUser.data?.user?.id === userProfile.data?.id && (
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
                  )}
                  {!objectImage && userProfile.data?.image && (
                    <img
                      src={userProfile.data?.image}
                      alt={userProfile.data?.name ?? ''}
                      className="h-full w-full rounded-full"
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
            </div>
            <div className="ml-12 mt-10 flex flex-col gap-2 space-y-0.5 rounded-b-3xl py-4">
              <div className="text-2xl font-semibold ">
                {userProfile.data?.name}
              </div>
              <div className="">@{userProfile.data?.username}</div>
              <div className="0">{userProfile.data?._count.posts} Posts</div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() =>
                    setIsFollowModalOpen({
                      isOpen: true,
                      modalType: 'followers',
                    })
                  }
                  className=""
                >
                  <span className="">
                    {userProfile.data?._count.followedBy}
                  </span>{' '}
                  Followers
                </button>
                <button
                  onClick={() =>
                    setIsFollowModalOpen({
                      isOpen: true,
                      modalType: 'following',
                    })
                  }
                  className=""
                >
                  <span className="">
                    {userProfile.data?._count.followings}
                  </span>{' '}
                  Followings
                </button>
              </div>
              <div className="flex w-full items-center justify-between space-x-4 pr-4">
                <div className="flex gap-2 ">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast.success('URL copied to clipboard 🥳');
                    }}
                    className=" flex transform items-center space-x-3 rounded rounded-lg border border-2 border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900 active:scale-95 "
                  >
                    <div>Share</div>
                    <div>
                      <SlShareAlt />
                    </div>
                  </button>
                  {userProfile.isSuccess && userProfile.data?.followedBy && (
                    <button
                      onClick={() => {
                        if (userProfile.data?.id) {
                          userProfile.data.followedBy.length > 0
                            ? unfollowUser.mutate({
                                followingUserId: userProfile.data?.id,
                              })
                            : followUser.mutate({
                                followingUserId: userProfile.data?.id,
                              });
                        }
                      }}
                      className="flex items-center space-x-3  rounded-lg border-2 border-gray-400/50 bg-white px-4 py-2 transition hover:border-gray-900 hover:text-gray-900 dark:border-white dark:bg-black"
                    >
                      {userProfile.data?.followedBy.length > 0
                        ? 'Unfollow'
                        : 'Follow'}
                    </button>
                  )}
                </div>
                <div className="ml-auto  flex">
                  {!showListView ? (
                    <button onClick={() => setListView(true)}>
                      {/* I need this button to set List view true when clicked */}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 20 20"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  ) : (
                    <button onClick={() => setListView(false)}>
                      {/* I need this button to set List view false when clicked */}
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 20 20"
                        height="2em"
                        width="2em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className=" my-8 w-full">
            <div className="flex justify-start gap-4">
              {!userPosts.isLoading ? (
                <Tabs defaultValue="account" className="w-full">
                  <TabsList>
                    <TabsTrigger value="account">My Posts</TabsTrigger>
                    <TabsTrigger value="password">Bookmarks</TabsTrigger>
                    <TabsTrigger value="test">Techstack</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    <div
                      className={`${
                        showListView ? 'grid-cols-1' : 'grid-cols-3'
                      } my-10  grid w-full place-items-center gap-6`}
                    >
                      {userPosts.isSuccess &&
                        userPosts.data?.posts.map((post) => (
                          <div className=" h-full">
                            {showListView ? (
                              <PostCardListUserProfile post={post} />
                            ) : (
                              <PostCardUserProfile post={post} />
                            )}
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="password">
                    <div>
                      <h3 className="my-6  text-2xl ">Your reading list:</h3>
                      <div className="flex flex-col ">
                        {readingList.data &&
                          readingList.data.map((bookmark, i) => (
                            <div className="group flex items-center space-x-5 p-4 hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10">
                              <div className="   border bg-gray-300">
                                <Link href={`/${bookmark.post.slug}`}>
                                  {bookmark?.post?.featuredImage ? (
                                    <Image
                                      src={
                                        bookmark?.post?.featuredImage ?? null
                                      }
                                      width={350}
                                      height={350}
                                    />
                                  ) : (
                                    <Image
                                      src={`https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/GitHub.jpeg`}
                                      width={350}
                                      height={350}
                                    />
                                  )}
                                </Link>
                              </div>
                              <div className="flex w-3/5 flex-col space-y-2">
                                <Link href={`/${bookmark.post.slug}`}>
                                  <h3 className=" line-clamp-3 font-semibold decoration-gray-300 decoration-4 group-hover:underline ">
                                    {bookmark.post.title}
                                  </h3>
                                </Link>
                                <div className="line-clamp-3 font-sans text-sm">
                                  {bookmark.post.description}
                                </div>
                                <div>
                                  <div className="flex w-full items-center space-x-1">
                                    <div className="h-5 w-5 flex-none rounded-full bg-gray-300"></div>
                                    <Link
                                      href={`/user/${bookmark.post.author?.name}`}
                                    >
                                      <div className="text-sm font-bold text-gray-900 dark:text-orange-400">
                                        {bookmark.post.author?.name}
                                      </div>
                                    </Link>
                                    <div className="text-xs">
                                      {dayjs(bookmark.post.createdAt).format(
                                        'DD/MM/YYYY'
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex w-48 flex-col gap-3 text-center">
                                <Link href={`/${bookmark.post.slug}`}>
                                  <button className=" bg-whites w-full items-center justify-center rounded-lg border-2 border-gray-300 px-2   py-2 font-bold text-black  shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition duration-500  hover:border-black  hover:text-gray-900  hover:shadow-black dark:text-white   dark:hover:bg-white dark:hover:bg-opacity-60 dark:hover:text-white">
                                    {' '}
                                    Read Post
                                  </button>
                                </Link>
                                {currentUser.data?.user?.id ===
                                userProfile.data?.id ? (
                                  <button
                                    onClick={() => {
                                      removeBookmark.mutate({
                                        postId: bookmark.post.id,
                                      });
                                      // use the toggleBookmark function from the store and pass the post id
                                      handleBookmarkToggle(bookmark.post.id);
                                    }}
                                    className=" items-center justify-center rounded-lg  bg-gray-200 px-2 py-2 font-bold transition duration-200 hover:text-white dark:bg-gray-400 dark:hover:bg-red-400"
                                  >
                                    {' '}
                                    Remove Bookmark
                                  </button>
                                ) : null}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="test">
                    <div>
                      <h3 className="my-6  text-2xl ">Your Tech Stack:</h3>
                      <div className="flex flex-col ">
                        {techReadingList.data &&
                          techReadingList.data.map((bookmark, i) => (
                            <div className="group flex items-center space-x-5 p-4 hover:bg-gray-100 dark:hover:bg-white dark:hover:bg-opacity-10">
                              <div className="flex aspect-video max-h-52 justify-center  overflow-hidden  border bg-gray-300">
                                <Link href={`/${bookmark.tech.slug}`}>
                                  {bookmark?.tech?.featuredImage ? (
                                    <Image
                                      src={
                                        bookmark?.tech?.featuredImage ?? null
                                      }
                                      width={350}
                                      height={350}
                                      className="h-full w-auto"
                                    />
                                  ) : (
                                    <Image
                                      src={`https://thurrott.s3.amazonaws.com/wp-content/uploads/sites/2/2023/01/GitHub.jpeg`}
                                      width={350}
                                      height={350}
                                      className="w-auto"
                                    />
                                  )}
                                </Link>
                              </div>
                              <TechModal post={bookmark.tech} />

                              <div className="flex w-3/5 flex-col space-y-1">
                                <Link href={`/${bookmark.tech.slug}`}>
                                  <h3 className=" line-clamp-3 text-xl font-semibold decoration-gray-300 decoration-4 group-hover:underline">
                                    {bookmark.tech.title}
                                  </h3>
                                </Link>

                                {isToggledPost === bookmark.tech.id ? (
                                  <>
                                    <div className="line-clamp-5 font-sans text-sm">
                                      {bookmark.tech.techDescription}
                                    </div>
                                    <div>
                                      <div className="flex w-full items-center space-x-1">
                                        <div className="h-5 w-5 flex-none rounded-full bg-gray-300"></div>
                                        <Link
                                          href={`/user/${bookmark.tech.author?.name}`}
                                        >
                                          <div className="text-sm font-bold text-gray-900 dark:text-orange-400">
                                            {bookmark.tech.author?.name}
                                          </div>
                                        </Link>
                                        <div className="text-xs">
                                          {dayjs(
                                            bookmark.tech.createdAt
                                          ).format('DD/MM/YYYY')}
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  <div className="space-y-2">
                                    <div className="line-clamp-2 font-sans text-sm">
                                      {bookmark.tech.techDescription}
                                    </div>{' '}
                                    <h3 className="font-mono text-xl font-bold">
                                      Resources:
                                    </h3>
                                    <ul className="flex flex-wrap items-center gap-4 text-center font-mono font-bold">
                                      {bookmark.tech.webUrl && (
                                        <li className="">
                                          <a
                                            href={bookmark.tech.webUrl}
                                            className="flex items-center justify-center gap-1 rounded-lg border  p-2 text-center"
                                          >
                                            <svg
                                              stroke="currentColor"
                                              fill="currentColor"
                                              stroke-width="0"
                                              viewBox="0 0 1024 1024"
                                              height="2em"
                                              width="2em"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z"></path>
                                            </svg>
                                            Website
                                          </a>
                                        </li>
                                      )}
                                      {bookmark.tech.githubUrl && (
                                        <li>
                                          <a
                                            href={bookmark.tech.githubUrl}
                                            className="flex items-center justify-center gap-2 rounded-lg border p-2 text-center"
                                          >
                                            <svg
                                              stroke="currentColor"
                                              fill="currentColor"
                                              stroke-width="0"
                                              viewBox="0 0 1024 1024"
                                              height="2em"
                                              width="2em"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                                            </svg>
                                            GitHub
                                          </a>
                                        </li>
                                      )}
                                      {bookmark.tech.docsUrl && (
                                        <li>
                                          <a
                                            href={bookmark.tech.docsUrl}
                                            className="flex items-center justify-center gap-2 rounded-lg border p-2 text-center"
                                          >
                                            <svg
                                              stroke="currentColor"
                                              fill="currentColor"
                                              stroke-width="0"
                                              viewBox="0 0 16 16"
                                              height="2em"
                                              width="2em"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fill-rule="evenodd"
                                                d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"
                                              ></path>
                                            </svg>
                                            Docs
                                          </a>
                                        </li>
                                      )}
                                      {bookmark.tech.pricingUrl && (
                                        <li>
                                          <a
                                            href={bookmark.tech.pricingUrl}
                                            className="flex items-center justify-center gap-2 rounded-lg border p-2 text-center"
                                            target="blank nofollow"
                                          >
                                            <svg
                                              stroke="currentColor"
                                              fill="currentColor"
                                              stroke-width="0"
                                              viewBox="0 0 24 24"
                                              height="2em"
                                              width="2em"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                fill="none"
                                                d="M12,4c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S16.411,4,12,4z M13,16.915V18h-2v-1.08 C8.661,16.553,8,14.918,8,14h2c0.011,0.143,0.159,1,2,1c1.38,0,2-0.585,2-1c0-0.324,0-1-2-1c-3.48,0-4-1.88-4-3 c0-1.288,1.029-2.584,3-2.915V6.012h2v1.109c1.734,0.41,2.4,1.853,2.4,2.879h-1l-1,0.018C13.386,9.638,13.185,9,12,9 c-1.299,0-2,0.516-2,1c0,0.374,0,1,2,1c3.48,0,4,1.88,4,3C16,15.288,14.971,16.584,13,16.915z"
                                              ></path>
                                              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path>
                                              <path d="M12,11c-2,0-2-0.626-2-1c0-0.484,0.701-1,2-1c1.185,0,1.386,0.638,1.4,1.018l1-0.018h1c0-1.026-0.666-2.469-2.4-2.879 V6.012h-2v1.073C9.029,7.416,8,8.712,8,10c0,1.12,0.52,3,4,3c2,0,2,0.676,2,1c0,0.415-0.62,1-2,1c-1.841,0-1.989-0.857-2-1H8 c0,0.918,0.661,2.553,3,2.92V18h2v-1.085c1.971-0.331,3-1.627,3-2.915C16,12.88,15.48,11,12,11z"></path>
                                            </svg>
                                            Pricing
                                          </a>
                                        </li>
                                      )}
                                    </ul>
                                  </div>
                                )}
                              </div>
                              <div className="flex w-48 flex-col gap-3 text-center">
                                <button
                                  onClick={() => togglePosts(bookmark.tech.id)}
                                  className=" bg-whites w-full items-center justify-center rounded-lg border-2 border-gray-300 px-2   py-2 font-bold text-black  shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition duration-500  hover:border-black  hover:text-gray-900  hover:shadow-black dark:text-white   dark:hover:bg-white dark:hover:bg-opacity-60 dark:hover:text-white"
                                >
                                  {' '}
                                  Read Post
                                </button>

                                {/* </Link> */}
                                {currentUser.data?.user?.id ===
                                userProfile.data?.id ? (
                                  <button
                                    onClick={() => {
                                      removeBookmark.mutate({
                                        postId: bookmark.tech.id,
                                      });
                                      // use the toggleBookmark function from the store and pass the post id
                                      handleBookmarkToggle(bookmark.tech.id);
                                    }}
                                    className=" items-center justify-center rounded-lg  bg-gray-200 px-2 py-2 font-bold transition duration-200 hover:text-white dark:bg-gray-400 dark:hover:bg-red-400"
                                  >
                                    {' '}
                                    Remove Bookmark
                                  </button>
                                ) : null}

                                {isToggledPost != bookmark.tech.id ? (
                                  <button
                                    onClick={() =>
                                      setIsToggledPost(bookmark.tech.id)
                                    }
                                    className=" items-center justify-center rounded-lg  bg-gray-200 px-2 py-2 font-bold transition duration-200 hover:text-white dark:bg-gray-400  dark:hover:bg-red-400"
                                  >
                                    {' '}
                                    Description
                                  </button>
                                ) : (
                                  <button
                                    onClick={() => setIsToggledPost('')}
                                    className=" items-center justify-center rounded-lg  bg-gray-200 px-2 py-2 font-bold transition duration-200 hover:text-white dark:bg-gray-400 dark:bg-orange-400 dark:hover:bg-red-400"
                                  >
                                    {' '}
                                    Resources
                                  </button>
                                )}
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              ) : null}

              {/* <button className="text-4xl  bg-gray-200 px-4 py-2 pb-3 rounded-lg active:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:border-transparent">
                My Posts
              </button>
              <button className="text-4xl  bg-gray-200 px-4 py-2 pb-3 rounded-lg active:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:border-transparent">
                Bookmarks
              </button> */}
              {userPosts.isLoading && <LoadingSpinner />}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default UserProfilePage;
