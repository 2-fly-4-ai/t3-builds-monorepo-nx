import { useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from 'ckeditor5-custom-build/build/ckeditor';
import { useEffect, useState } from 'react';
import { useSupabase } from '../../hooks/supabase';
import useDebounce from '../../hooks/useDebounce';
import { trpc } from '../../utils/trpc';
// import { MyCustomUploadAdapterPlugin } from '../../hooks/ckEditorUpload';

interface CKeditorProps {
  onChange: (data: string) => void;
  name: string;
  value: string;
}

const Editor = ({ onChange, value }: CKeditorProps) => {
  const { supabase, error } = useSupabase();
  const debouncedValue = useDebounce(value, 500);
  const [showEditor, setShowEditor] = useState<boolean>(false);

  if (typeof window !== 'undefined') {
    const balloonPanel = document.querySelector('.ck-balloon-panel');
    {
      balloonPanel &&
        setTimeout(() => {
          balloonPanel.style.visibility = 'visible';
        }, 1000);
    }
  }

  // const uploadImageMutation = trpc.post.uploadImage.useMutation();

  const handleImageUpload = async (file: File): Promise<string> => {
    try {
      const { data } = await trpc.post.uploadImage.useMutation({ file }); // Use the `mutateAsync` function

      return data || '';
    } catch (error) {
      console.log('Error uploading image:', error);
      return '';
    }
  };

  // useEffect(() => {
  //   // Show the editor once supabase is ready
  //   setShowEditor(true);
  // }, []);

  return (
    <CKEditor
      editor={DecoupledEditor}
      data={debouncedValue}
      config={{
        // extraPlugins: [MyCustomUploadAdapterPlugin],
        placeholder: 'Type here to get started',

        codeBlock: {
          languages: [
            { language: 'javascript', label: 'JavaScript' },
            { language: 'python', label: 'Python' },
            { language: 'typescript', label: 'TypeScript' },
            // { language: 'xml', label: 'XML' },
          ],
        },
      }}
      onChange={(event: any, editor: any) => {
        const data = editor.getData();
        onChange(data);
      }}
      // onBlur={(event, editor) => {
      //   console.log('Blur.', editor);
      // }}
      // onFocus={(event, editor) => {
      //   console.log('Focus.', editor);
      // }}
    />
  );
};

export default Editor;
