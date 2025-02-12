"use client";

import { Color } from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { updateEntrie } from "@/lib/actions";
import { WRITING_QUOTES } from "@/lib/quotes";
import useAutosave from "../_hooks/useAutoSave";
import FloatingTextMenuBar from "./FloatingTextMenuBar";
import TextMenuBar from "./TextMenuBar";
import { AUTOSAVE_TIME } from "@/lib/constants";


export default function TipTap({ content, entrie  }) {
  const randomQuote =
    WRITING_QUOTES[Math.floor(Math.random() * WRITING_QUOTES.length)];

  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "prose m-5 p-4 focus:outline-none text-white bg-lightgray transition-colors duration-300 max-w-3xl mx-auto rounded-xl h-screen",
      },
    },
    extensions: [
      StarterKit,
      Typography,
      Link,
      TextStyle,
      Color,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Highlight.configure({ multicolor: true }),
      Placeholder.configure({
        placeholder: `"${randomQuote}"`,
        showOnlyWhenEditable: true,
      }),
    ],
    content: content,
    immediatelyRender: false,
  });
  
  useAutosave({editor,  entrie});

  return (
    <>
      <TextMenuBar editor={editor} entrie={entrie} />
      <FloatingTextMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
}




// {
//   /* <div className="flex flex-wrap gap-2 ">
//         <button
//           onClick={getHtmlFromEditor}
//           className="px-3 py-2 rounded bg-primaryButton text-white  hover:bg-[#E6B95C] transition"
//         >
//           Get HTML
//         </button>
//       </div> */
// }

// // function getHtmlFromEditor() {
// //   const html = editor.getHTML();
// //   getEntrie().then((data) => console.log(data));
// //   setHtmlContent(html);
// //   console.log(html); // Log it to the console
// //   console.log(editor.getJSON()); // Log it to the console
// // }