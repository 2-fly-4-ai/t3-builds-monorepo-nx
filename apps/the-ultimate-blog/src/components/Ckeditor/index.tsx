import { useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from 'ckeditor5-custom-build/build/ckeditor.js';
import { useEffect, useState } from 'react';
import { useSupabase } from '../../hooks/supabase';
import useDebounce from '../../hooks/useDebounce';
import { trpc } from '../../utils/trpc';
import { toast } from 'react-hot-toast';

interface CKeditorProps {
  onChange: (data: string) => void;
  name: string;
  value: string;
}

const Editor = ({ onChange, value }: CKeditorProps) => {
  const { supabase, error } = useSupabase();
  const debouncedValue = useDebounce(value, 500);
  const [uploadImage, setUploadImage] = useState(false);

  if (typeof window !== 'undefined') {
    const balloonPanel = document.querySelector('.ck-balloon-panel');
    if (balloonPanel) {
      setTimeout(() => {
        balloonPanel.style.visibility = 'visible';
      }, 1000);
    }
  }

  useEffect(() => {
    // Modify the content before setting it in the editor
    const modifiedValue = value?.replace(
      /<p>!<a href="(.*?)">(.*?)<\/a><\/p>/g,
      '<img src="$1" alt="$2">'
    );
    onChange(modifiedValue);
  }, [value, onChange]);

  const mutation = trpc.post.uploadImage.useMutation({
    onSuccess: () => {
      toast.success('Picture uploaded successfully');
      setUploadImage(true);
      // getPost.revalidate();
    },
    onError: () => {
      toast.error('Picture upload Failed');
      setUploadImage(true);
      // getPost.revalidate();
    },
  });

  return (
    <CKEditor
      editor={DecoupledEditor}
      data={value}
      // onReady={handleEditorReady}
      config={{
        extraPlugins: [
          createMyCustomUploadAdapterPlugin(mutation, uploadImage),
        ],
        placeholder: 'Type here to get started',
        codeBlock: {
          languages: [
            { language: 'javascript', label: 'JavaScript' },
            { language: 'python', label: 'Python' },
            { language: 'typescript', label: 'TypeScript' },
          ],
        },
      }}
      onChange={(event: any, editor: any) => {
        let data = editor.getData();

        // Check if the data is a URL

        // Check if the URL is an image
        const isImageUrl = /\.(jpeg|jpg|gif|png)$/.test(data);

        if (isImageUrl) {
          console.warn('TRUE');
          // If it's an image URL, replace the link with an image tag
          data = `<img src="${data}" />`;
        }

        onChange(data);
        console.warn(data);
      }}
      // ...
    />
  );
};

// Custom image upload adapter
function createMyCustomUploadAdapterPlugin(
  mutation: any,
  uploadImage: boolean
) {
  return function (editor: any) {
    editor.plugins.get('FileRepository').createUploadAdapter = (
      loader: any
    ) => {
      return new MyUploadAdapter(loader, mutation, uploadImage);
    };
  };
}

class MyUploadAdapter {
  private loader: any;
  private mutation: any;
  private uploadImage: boolean;

  constructor(loader: any, mutation: any, uploadImage: boolean) {
    this.loader = loader;
    this.mutation = mutation;
    this.uploadImage = uploadImage;
  }

  public async upload() {
    const file = await this.loader.file;
    return this._uploadFile(file);
  }

  private async _uploadFile(file: File) {
    return new Promise(async (resolve, reject) => {
      try {
        const reader = new FileReader();

        reader.onloadend = async () => {
          try {
            console.warn('File to be uploaded: ', file);
            const base64Data = reader.result?.toString() || '';
            console.warn('Base64 Data: ', base64Data);
            const response = await this.mutation.mutateAsync({
              file: base64Data,
              onSuccess: () => {
                toast.success('Picture uploaded successfully');
                resolve({ default: response });
                // getPost.revalidate();
              },
            });
            console.warn('Mutation response: ', response);

            // if (this.uploadImage && response) {
            //   console.warn('TESTING12', response);
            //   resolve({ default: response });
            // } else {
            //   resolve({ default: response }); //HERE!!! Ballzack // Activate investiagtion
            // }
          } catch (error) {
            console.error('File upload failed', error);
            reject(error);
          }
        };

        reader.readAsDataURL(file);
      } catch (error) {
        console.error('File upload failed', error);
        reject(error);
      }
    });
  }
}

export default Editor;
