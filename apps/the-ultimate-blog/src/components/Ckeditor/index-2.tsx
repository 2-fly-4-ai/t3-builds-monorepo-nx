import React, { useEffect, useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

import { useState } from 'react';
// import CodeBlockPlugin from '@ckeditor/ckeditor5-code-block/src/codeblock';

interface CKeditorProps {
  onChange: (data: string) => void;
  editorLoaded: boolean;
  name: string;
  value: string;
}

export default function CKeditor({ onChange, name, value }: CKeditorProps) {
  const editorRef = useRef<{
    CKEditor: typeof CKEditor;
    InlineEditor: typeof InlineEditor;
  }>();

  const [editorLoaded, setEditorLoaded] = useState<boolean>(false);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      InlineEditor: require('@ckeditor/ckeditor5-build-inline'),
    };
    setEditorLoaded(true);
  }, []);

  return editorLoaded ? (
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
          '|',
          'bold',
          'codeBlock',
          'italic',
          'codeBlock',
          'blockQuote',
          '|',
          'heading',
          'link',
          'bulletedList',
          'numberedList',
          '|',
          'insertTable',
          'tableColumn',
          'tableRow',
          'mergeTableCells',
        ],
        placeholder: 'Type your text here',
        // This is the line that disables the "flash" behavior
        startupFocus: false,
        simpleUpload: {
          // The URL that the images will be uploaded to.
          uploadUrl: 'your-image-upload-endpoint',

          // Headers sent along with the XMLHttpRequest to the upload server.
          headers: {
            'X-CSRF-TOKEN': 'CSRF-Token',
            Authorization: 'Bearer <JSON Web Token>',
          },
        },
      }}
    />
  ) : (
    <div></div>
  );
}
