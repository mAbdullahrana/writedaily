import { Editable } from "slate-react";
import GoogleDocsToolbar from "./Toolbar";
import { CustomEditor } from "@/lib/editorHelpers";

// Leaf renderer for text formatting.
const Leaf = (props) => {
  let { children } = props;
  if (props.leaf.bold) {
    children = <strong>{children}</strong>;
  }
  return <span {...props.attributes}>{children}</span>;
};

export function EditorComponent({ editor, renderElement }) {
  return (
    <>
      <GoogleDocsToolbar />

      <Editable
        className="outline-none p-2 h-dvh"
        renderElement={renderElement}
        renderLeaf={Leaf}
        placeholder="Start typing..."
        onKeyDown={(event) => {
          if (!event.ctrlKey) {
            return;
          }

          // Replace the `onKeyDown` logic with our new commands.
          switch (event.key) {
            case "`": {
              event.preventDefault();
              CustomEditor.toggleCodeBlock(editor);
              break;
            }

            case "b": {
              event.preventDefault();
              CustomEditor.toggleBoldMark(editor);
              break;
            }
          }
        }}
      />
    </>
  );
}
