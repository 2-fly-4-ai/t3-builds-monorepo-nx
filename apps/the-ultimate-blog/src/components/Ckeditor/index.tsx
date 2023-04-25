import { useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from 'ckeditor5-custom-build/build/ckeditor';
import { useEffect, useState } from 'react';

interface CKeditorProps {
  onChange: (data: string) => void;
  editorLoaded: boolean;
  name: string;
  value: string;
}

const Editor = ({ onChange, value }: CKeditorProps) => {
  // const [showEditor, setShowEditor] = useState<boolean>(false);

  if (typeof window !== 'undefined') {
    const balloonPanel = document.querySelector('.ck-balloon-panel');
    console.warn('TESTBALLOON', balloonPanel);
    {
      balloonPanel &&
        setTimeout(() => {
          balloonPanel.style.visibility = 'visible';
        }, 100);
    }
  }

  // useEffect(() => {
  //   setShowEditor(true);
  // }, []);
  const showEditor = true;
  // const showEditor = true;

  return showEditor ? (
    <CKEditor
      editor={DecoupledEditor}
      data={value}
      config={{
        placeholder: 'Type here to get started',
        codeBlock: {
          languages: [
            // { language: 'plaintext', label: 'Plain text' },
            // { language: 'c', label: 'C' },
            // { language: 'cs', label: 'C#' },
            // { language: 'cpp', label: 'C++' },
            // { language: 'css', label: 'CSS' },
            // { language: 'diff', label: 'Diff' },
            // { language: 'html', label: 'HTML' },
            // { language: 'java', label: 'Java' },
            { language: 'javascript', label: 'JavaScript' },
            // { language: 'php', label: 'PHP' },
            { language: 'python', label: 'Python' },
            // { language: 'ruby', label: 'Ruby' },
            { language: 'typescript', label: 'TypeScript' },
            // { language: 'xml', label: 'XML' },
          ],
        },
      }}
      onChange={(event: any, editor: any) => {
        const data = editor.getData();
        onChange(data);
      }}
      onBlur={(event, editor) => {
        console.log('Blur.', editor);
      }}
      onFocus={(event, editor) => {
        console.log('Focus.', editor);
      }}
    />
  ) : (
    <div>Loading...</div>
  );
};

export default Editor;
