import Modal from '../../components/Modal';

import { GlobalContext } from '../../context/GlobalContext';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { trpc } from '../../utils/trpc';
import toast, { Toaster } from 'react-hot-toast';
import { ImSpinner8 } from '../../icons';
import React, { useEffect, useState, useRef, useContext } from 'react';
import { z } from 'zod';
import dynamic from 'next/dynamic';

type WriteFormType = {
  title: string;
  description: string;
  text: string;
  html: string;
};

export const WriteFormSchema = z.object({
  title: z.string().min(20),
  description: z.string().min(60),
  text: z.string().min(100).optional(),
  html: z.string().min(100).optional(),
});

export default function WriteFormModal() {
  const { isWriteModalOpen, setIsWriteModalOpen } = useContext(GlobalContext);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<WriteFormType>({
    resolver: zodResolver(WriteFormSchema),
  });

  const postRoute = trpc.useContext().post;

  const createPost = trpc.post.createPost.useMutation({
    onSuccess: () => {
      toast.success('post created successfully');
      setIsWriteModalOpen(false);
      reset();
      postRoute.getPosts.invalidate();

      //Beautiful implementation of Toast
    },
    onError: () => {
      toast.error('You done fucked up');
    },
  });
  const onSubmit = (data: WriteFormType) => {
    createPost.mutate(data);
  };

  const Editor = dynamic(() => import('../Ckeditor'), { ssr: false });
  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

  // useEffect(() => {
  //   setEditorLoaded(true);
  // }, []);

  return (
    <Modal isOpen={isWriteModalOpen} onClose={() => setIsWriteModalOpen(false)}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex flex-col space-y-5 pt-4"
      >
        {createPost.isLoading && (
          <div className="absolute bottom-2 flex items-center justify-center space-x-4">
            <div>
              <ImSpinner8 className="animate-spin" />
            </div>
            <div>Loading...</div>
          </div>
        )}
        <input
          type="text"
          id="title"
          className="h-full w-full border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Title of the Blog"
          {...register('title')}
        />
        <p>{errors.title?.message}</p>
        <input
          type="text"
          id="shortDescription"
          className="h-full w-full  border border-gray-300 p-4 outline-none focus:border-gray-600"
          placeholder="Short Description...."
          {...register('description')}
        />

        <p>{errors.description?.message}</p>

        <div className="modal-container">
          <Controller
            name="html"
            control={control}
            render={({ field }) => (
              <div className=" border prose-li:list-style prose prose-lg w-full max-w-none marker:text-black prose-a:font-bold prose-li:text-black prose-table:table-auto prose-table:border-2  prose-tr:border-r prose-th:border prose-th:p-2 prose-td:border prose-td:p-2 prose-img:mx-auto prose-img:my-12 prose-img:max-h-custom prose-img:w-auto prose-img:border-2  prose-img:border-black prose-img:py-12 prose-img:px-52 prose-img:shadow-[5px_5px_0px_0px_rgba(109,40,217)]  prose-img:shadow-black h-full focus-within:border-black h-50vh shadow-2xl ">
                <Editor
                  {...field}
                  onChange={(data: string) => field && field.onChange(data)}
                  value={field.value}
                  // editorLoaded={editorLoaded}
                />
              </div>
            )}
          />
        </div>

        <p>{errors.text?.message}</p>
        <div className="flex w-full justify-end">
          <button
            type="submit"
            className="flex items-center justify-center gap-1 rounded-lg border-2 p-1 px-3 transition hover:border-gray-700 hover:text-gray-700"
          >
            Publish
          </button>
        </div>
      </form>
    </Modal>
  );
}
