import React, { useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

interface CKeditorProps {
  onChange: (data: string) => void;
  editorLoaded: boolean;
  name: string;
  value: string;
  zz;
}

export default function CKeditor({
  onChange,
  editorLoaded,
  name,
  value,
}: CKeditorProps) {
  const editorRef = useRef<{
    CKEditor: typeof CKEditor;
    InlineEditor: typeof InlineEditor;
  }>();

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      InlineEditor: require('@ckeditor/ckeditor5-build-inline'),
    };
  }, []);

  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={InlineEditor}
          data={value}
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
              // 'ckfinder',
              // 'imageTextAlternative',
              'imageInsert',
              'heading',
              'imageStyle:side',
              'link',
              'numberedList',
              'bulletedList',

              'insertTable',
              'tableColumn',
              'tableRow',

              'mergeTableCells',
            ],
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
}
