import { Editor, Element } from "slate";

// Define our own custom set of helpers.
export const CustomEditor = {
  isBoldMarkActive(editor) {
    const marks = Editor.marks(editor);
    return marks ? marks.bold === true : false;
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "code",
    });

    return !!match;
  },

  toggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    if (isActive) {
      Editor.removeMark(editor, "bold");
    } else {
      Editor.addMark(editor, "bold", true);
    }
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "code",
    });
    // Toggle the block type between 'code' and 'paragraph'
    Transforms.setNodes(
      editor,
      { type: match ? "paragraph" : "code" },
      {
        match: (n) => Element.isElement(n) && Editor.isBlock(editor, n),
      }
    );
  },
};
