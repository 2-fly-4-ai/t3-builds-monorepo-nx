import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { v4 as uuidv4 } from 'uuid';

import Image from 'next/image';
import useDebounce from '../../hooks/useDebounce';
import { trpc } from '../../utils/trpc';
import Modal from '../Modal';
import { z } from 'zod';
import { BiLoaderAlt } from 'react-icons/bi';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'libs/shared/ui/src/shadnui/ui/tabs';

export const unsplashSearchRouteSchema = z.object({
  searchQuery: z.string().min(5),
});

type UnsplahGallaryProps = {
  isUnsplashModalOpen: boolean;
  setIsUnsplashModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  postId: string;
  slug: string;
};

const UnsplahGallary = ({
  isUnsplashModalOpen,
  setIsUnsplashModalOpen,
  postId,
  slug,
}: UnsplahGallaryProps) => {
  const { register, watch, reset } = useForm<{ searchQuery: string }>({
    resolver: zodResolver(unsplashSearchRouteSchema),
  });

  const watchSearchQuery = watch('searchQuery');
  const debouncedSearchQuery = useDebounce(watchSearchQuery, 3000);

  const [selectedImage, setSelectedImage] = useState('');
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);

  const fetchUnsplashImages = trpc.unsplash.getImages.useQuery(
    {
      searchQuery: debouncedSearchQuery,
    },
    {
      enabled: Boolean(debouncedSearchQuery),
    }
  );

  const utils = trpc.useContext();

  const updateFeaturedImage = trpc.post.updatePostFeaturedImage.useMutation({
    onSuccess: () => {
      utils.post.getPost.invalidate({ slug });
      utils.post.getTechPosts.invalidate();
      reset();
      setIsUnsplashModalOpen(false);
      toast.success('featured image updated');
    },
  });

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', 'image');
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedImageFile(file);
    setSelectedImage(URL.createObjectURL(file));
  };

  // function dataURLtoFile(dataurl: string, filename: string): File {
  //   const arr = dataurl.split(',');
  //   const mime = arr[0].match(/:(.*?);/)[1];
  //   const bstr = atob(arr[1]);
  //   let n = bstr.length;
  //   const u8arr = new Uint8Array(n);
  //   while (n--) {
  //     u8arr[n] = bstr.charCodeAt(n);
  //   }
  //   return new File([u8arr], filename, { type: mime });
  // }

  useEffect(() => {
    if (selectedImageFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedImageFile);
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
    } else {
      setSelectedImage(''); // Clear the selected image when no file is chosen
    }
  }, [selectedImageFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedImageFile(file);
  };

  return (
    <Modal
      isOpen={isUnsplashModalOpen}
      onClose={() => setIsUnsplashModalOpen(false)}
    >
      <div className="flex w-full flex-col  items-center justify-center space-y-4">
        <input
          type="text"
          onClick={() => {
            setSelectedImageFile(null);
          }}
          id="search"
          placeholder="Search..."
          {...register('searchQuery')}
          className="h-full w-full rounded-xl border border-gray-300 p-4 outline-none focus:border-gray-600 dark:bg-black dark:bg-opacity-50"
        />

        <Tabs defaultValue="unsplash" className="mr-auto w-full">
          <TabsList>
            <TabsTrigger value="unsplash">Unsplash</TabsTrigger>

            <TabsTrigger value="upload">Upload</TabsTrigger>
          </TabsList>
          <TabsContent value="unsplash">
            <div className="relative grid h-96 w-full grid-cols-3 place-items-center gap-4 overflow-y-scroll border">
              {fetchUnsplashImages.isSuccess &&
                fetchUnsplashImages.data?.results.map((imageData) => (
                  <div
                    key={imageData.id}
                    className="group relative aspect-video h-full w-full cursor-pointer rounded-md"
                    onClick={() => setSelectedImage(imageData.urls.full)}
                  >
                    <div
                      className={`absolute rounded-md group-hover:bg-black/40 ${
                        selectedImage === imageData.urls.full && 'bg-black/40'
                      } inset-0 z-10 h-full w-full`}
                    />

                    <Image
                      src={imageData.urls.regular}
                      alt={imageData.alt_description ?? ''}
                      fill
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                      className="rounded-md"
                    />
                  </div>
                ))}
              {!fetchUnsplashImages.isSuccess ? (
                <div className="absolute flex flex-col items-center justify-center text-gray-300 ">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    height="5em"
                    width="5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs></defs>
                    <path d="M852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM300 328c0-33.1 26.9-60 60-60s60 26.9 60 60-26.9 60-60 60-60-26.9-60-60z m372 248c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-60c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8v60z m-8-188c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60zM799 864H225c-13.8 0-25 14.3-25 32v56c0 4.4 2.8 8 6.2 8h611.5c3.4 0 6.2-3.6 6.2-8v-56c0.1-17.7-11.1-32-24.9-32z"></path>
                  </svg>
                  <h3 className="font-mono text-2xl text-gray-300">
                    Search Unsplashed Images
                  </h3>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </TabsContent>
          <TabsContent value="upload">
            {' '}
            <div className="relative flex h-96 w-full grid-cols-3 place-items-center justify-center  gap-4 overflow-y-scroll border">
              {selectedImageFile ? (
                <Image
                  src={URL.createObjectURL(selectedImageFile)}
                  alt="Preview"
                  width={400}
                  height={400}
                  className="mx-auto rounded-md "
                  key="preview"
                />
              ) : (
                <div
                  draggable="true"
                  onDragStart={handleDragStart}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className="flex flex-col justify-center "
                >
                  <svg
                    stroke="currentColor"
                    className="mx-auto text-gray-300"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 640 512"
                    height="5em"
                    width="5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zM393.4 288H328v112c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V288h-65.4c-14.3 0-21.4-17.2-11.3-27.3l105.4-105.4c6.2-6.2 16.4-6.2 22.6 0l105.4 105.4c10.1 10.1 2.9 27.3-11.3 27.3z"></path>
                  </svg>
                  <h3 className="mx-auto font-mono text-2xl text-gray-300">
                    The Drop Zone
                  </h3>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
        <div className="flex items-center gap-4">
          {selectedImage ? (
            <button
              type="submit"
              className={`${
                !updateFeaturedImage.isLoading ? 'border-2' : ''
              } flex h-10 items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:text-gray-900`}
              onClick={() => {
                updateFeaturedImage.mutate({
                  imageUrl: selectedImage,
                  postId,
                });
              }}
              disabled={updateFeaturedImage.isLoading}
            >
              {updateFeaturedImage.isLoading ? 'Loading...' : 'Confirm'}
            </button>
          ) : (
            <button
              type="submit"
              className="flex h-10 items-center space-x-3 rounded border border-gray-200 px-4 py-2 transition hover:border-gray-900 hover:bg-red-300 hover:text-gray-900"
              onClick={() => {
                toast.error('None Selected');
              }}
              disabled={updateFeaturedImage.isLoading}
            >
              {updateFeaturedImage.isLoading ? 'Loading...' : 'None Selected'}
            </button>
          )}
          <input
            type="file"
            className={`flex 
             
              items-center space-x-3 rounded border border-gray-200 px-4 py-1 transition hover:border-gray-900 hover:text-gray-900`}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </Modal>
  );
};

export default UnsplahGallary;
