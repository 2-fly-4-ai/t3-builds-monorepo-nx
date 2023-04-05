import React, { useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline'; // import InlineEditor

interface CKeditorProps {
  onChange: (data: string) => void;
  editorLoaded: boolean;
  name: string;
}

export default function CKeditor({
  onChange,
  editorLoaded,
  name,
  value,
}: CKeditorProps) {
  const editorRef = useRef<{
    CKEditor: typeof CKEditor;
    InlineEditor: typeof InlineEditor; // use InlineEditor
  }>();
  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      InlineEditor: require('@ckeditor/ckeditor5-build-inline'), // use InlineEditor
    };
  }, []);

  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={InlineEditor} // use InlineEditor
          value={value} // pass the initial data as a value prop
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            onChange(data);
          }}
          config={{
            toolbar: [
              'undo',
              'redo',
              'bold',
              'italic',
              'blockQuote',
              'ckfinder',
              'imageTextAlternative',
              'imageUpload',
              'heading',
              // "imageStyle:full",
              'imageStyle:side',
              'link',
              'numberedList',
              'bulletedList',
              'mediaEmbed',
              'insertTable',
              'tableColumn',
              'tableRow',
              'mergeTableCells',
            ],
            // no need for balloon option
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
}
