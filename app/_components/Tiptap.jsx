"use client";

import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { Color } from "@tiptap/extension-color";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import FloatingTextMenuBar from "./FloatingTextMenuBar";
import TextMenuBar from "./TextMenuBar";
import Placeholder from "@tiptap/extension-placeholder";

import { WRITING_QUOTES } from "@/lib/quotes";

export default function TipTap({ htmlContent, entrie }) {
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
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight.configure({ multicolor: true }),
      Placeholder.configure({
        placeholder: `"${randomQuote}"`,
        showOnlyWhenEditable: true,
      }),
    ],
    content: htmlContent,
    immediatelyRender: false,
  });

  return (
    <>
      <TextMenuBar editor={editor} entrie={entrie} />
      <FloatingTextMenuBar editor={editor} />
      <EditorContent editor={editor} />
    </>
  );
}
{
  /* <div className="flex flex-wrap gap-2 ">
        <button
          onClick={getHtmlFromEditor}
          className="px-3 py-2 rounded bg-primaryButton text-white  hover:bg-[#E6B95C] transition"
        >
          Get HTML
        </button>
      </div> */
}

// function getHtmlFromEditor() {
//   const html = editor.getHTML();
//   getEntrie().then((data) => console.log(data));
//   setHtmlContent(html);
//   console.log(html); // Log it to the console
//   console.log(editor.getJSON()); // Log it to the console
// }
