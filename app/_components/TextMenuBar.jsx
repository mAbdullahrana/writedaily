import NoteBookName from "./NoteBookName";
import WordCount from "./WordCount";

function TextMenuBar(editor) {
  return (
    <div className="p-1 bg-secondary mx-2 rounded-[2rem] shadow flex flex-wrap gap-2 justify-between items-center sticky top-1 z-10  border-lightgray border">
      <NoteBookName />
      <WordCount editor={editor} />
    </div>
  );
}

export default TextMenuBar;
