import React, { useEffect, useRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import BalloonEditor from "@ckeditor/ckeditor5-build-balloon";

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
    BalloonEditor: typeof BalloonEditor;
  }>();
  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
      BalloonEditor: require("@ckeditor/ckeditor5-build-balloon"),
    };
  }, []);

  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={BalloonEditor}
          data={value} // pass the initial data as a prop
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            onChange(data);
          }}
          config={{
            toolbar: [
              "undo",
              "redo",
              "bold",
              "italic",
              "blockQuote",
              "ckfinder",
              "imageTextAlternative",
              "imageUpload",
              "heading",
              // "imageStyle:full",
              "imageStyle:side",
              "link",
              "numberedList",
              "bulletedList",
              "mediaEmbed",
              "insertTable",
              "tableColumn",
              "tableRow",
              "mergeTableCells",
            ],
            balloon: {
              visibleByDefault: true,
            },
          }}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </>
  );
}
