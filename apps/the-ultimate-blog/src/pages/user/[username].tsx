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

const UserProfilePage = () => {
  const readingList = trpc.post.getReadingList.useQuery();
  const [showListView, setListView] = useState(false);
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
                                      href={`/user/${bookmark.post.author.name}`}
                                    >
                                      <div className="text-sm font-bold text-gray-900 dark:text-orange-400">
                                        {bookmark.post.author.name}
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
