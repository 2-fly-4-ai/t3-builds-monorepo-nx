import { Controller, useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { trpc } from '../utils/trpc';

export const useEditPost = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const editPostMutation = trpc.post.editPost.useMutation({});

  const handleEditPost = async (formData) => {
    try {
      const response = await editPostMutation.mutateAsync(formData);
      console.log('Post edited successfully:', response);
      toast.success('Post edited successfully');
      reset();
      // additional code to update UI, close modal, etc.
    } catch (error) {
      console.error('Error editing post:', error);
      toast.error('Error editing post');
    }
  };

  return {
    control,
    handleSubmit,
    handleEditPost,
    errors,
  };
};
