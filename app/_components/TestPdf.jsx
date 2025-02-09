"use client";

import React, { forwardRef } from "react";
import { EditorContent } from "@tiptap/react";

// Forward the ref so react-to-print can access the DOM node
const PrintableEditorContent = forwardRef(({ editor }, ref) => {
  return (
    <div ref={ref} id="editorContent" className="prose m-5 p-4 focus:outline-none text-white bg-lightgray transition-colors duration-300 max-w-3xl mx-auto rounded-xl h-screen">
      <EditorContent editor={editor} />
    </div>
  );
});

PrintableEditorContent.displayName = "PrintableEditorContent";
export default PrintableEditorContent;
