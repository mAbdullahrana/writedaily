"use client";

import { EditorComponent } from "@/app/_components/EditorComponent";
import CodeEL from "@/app/_textElements/CodeEL";
import DefaultEL from "@/app/_textElements/DefaultEL";
import { useTheme } from "next-themes";
import { useCallback, useState } from "react";
import { createEditor } from "slate";
import { Slate, withReact } from "slate-react";

// Sample initial value for the editor.
const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "jkj" }],
  },
];

export default function Page() {
  const [editor] = useState(() => withReact(createEditor()));
  const { theme } = useTheme();

  // Render elements based on type.
  const renderElement = useCallback((props) => {
    switch (props.element.type) {
      case "code":
        return <CodeEL {...props} />;
      default:
        return <DefaultEL {...props} />;
    }
  }, []);

  return (
    <div
      className={`min-h-screen p-4 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`max-w-3xl mx-auto shadow rounded p-6 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-800 text-gray-100"
            : "bg-white text-gray-800"
        }`}
      >
        {/* Adding a `dark` class to Slate if darkMode is enabled */}
        <div className={theme === "dark" ? "dark" : ""}>
          <Slate editor={editor} initialValue={initialValue}>
            <EditorComponent editor={editor} renderElement={renderElement} />
          </Slate>
        </div>
      </div>
    </div>
  );
}
