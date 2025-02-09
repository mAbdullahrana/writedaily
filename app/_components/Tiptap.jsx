"use client";

import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";

import Link from "@tiptap/extension-link";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import FloatingTextMenuBar from "./FloatingTextMenuBar";
import TextMenuBar from "./TextMenuBar";
import ExportToPDF from "./ExportToPDF";

const init = `
      <h1 style="text-align:center">
        Devs Just Want to Have Fun by Cyndi Lauper
      </h1>
      <p style="text-align:center">
        I come home in the morning light<br>
        My mother says, <mark>“When you gonna live your life right?”</mark><br>
        Oh mother dear we’re not the fortunate ones<br>
        And devs, they wanna have fun<br>
        Oh devs just want to have fun</p>
      <p style="text-align:center">
        The phone rings in the middle of the night<br>
        My father yells, "What you gonna do with your life?"<br>
        Oh daddy dear, you know you’re still number one<br>
        But <s>girls</s>devs, they wanna have fun<br>
        Oh devs just want to have
      </p>
    `;

export default function TipTap() {
  const [htmlContent, setHtmlContent] = useState(init);

  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "prose m-5 p-4 focus:outline-none text-white bg-lightgray transition-colors duration-300 max-w-3xl mx-auto rounded-xl h-screen",
      },
    },
    extensions: [
      StarterKit,

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight.configure({ multicolor: true }),
      Typography,
      Link,
      TextStyle,
      Color,
    ],
    content: htmlContent,
    immediatelyRender: false, // Important!
  });

  function getHtmlFromEditor() {
    const html = editor.getHTML();
    setHtmlContent(html);
    console.log(html); // Log it to the console
  }

  return (
    <>
      {/* <ExportToPDF editor={editor} /> */}
      <TextMenuBar editor={editor} />
      <FloatingTextMenuBar editor={editor} />
      <EditorContent editor={editor} />
      <div className="flex flex-wrap gap-2 ">
        <button
          onClick={getHtmlFromEditor}
          className="px-3 py-2 rounded bg-primaryButton text-white  hover:bg-[#E6B95C] transition"
        >
          Get HTML
        </button>
      </div>
    </>
  );
}
