import BackButton from "./BackButton";
import NoteBookName from "./NoteBookName";
import Prompt from "./Prompt";
import WordCount from "./WordCount";

function TextMenuBar({editor , entrie}) {

  return (
    <div className="p-1 bg-secondary mx-2 rounded-[2rem] shadow flex flex-wrap gap-2 justify-between items-center sticky top-1 z-10 text-mediumDark  border-lightgray border">
      <div className="flex gap-3 items-center pl-2 justify-center">
        <BackButton />
        <Prompt />
        <NoteBookName entrie={entrie} />
      </div>
      <div>
        <WordCount editor={editor} />
      </div>
    </div>
  );
}

export default TextMenuBar;
