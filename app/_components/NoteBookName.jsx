import { getAllEntrie, updateNoteBookTitle } from "@/lib/actions";
import { Check } from "lucide-react";
import { useState } from "react";

function NoteBookName({ entrie }) {
  const [title, setTitle] = useState(entrie?.title || "Add Page Title");
  const [isToggle, setIsToggle] = useState(false);

  function handleUpdateName(e) {
    e.preventDefault();
    updateNoteBookTitle(title);
    // const data = await getAllEntrie();

    // console.log(data);
    if (title === "") setTitle("Add Page Title");
    setIsToggle((toggle) => !toggle);
  }

  function handleSetName(e) {
    setTitle(e.target.value);
  }
  function handleToggle(e) {
    e.preventDefault();
    setIsToggle((toggle) => !toggle);
  }
  return (
    <>
      {!isToggle ? (
        <button
          type="button"
          className="text-mediumDark text-lg font-semibold px-4 hover:text-white transition"
          onClick={handleToggle}
        >
          {title}
        </button>
      ) : (
        <div className="flex gap-1">
          <input
            className="bg-[#000] text-sm text-white px-3 py-[0.25rem] rounded-[0.8rem] outline-none"
            type="text"
            value={title}
            onChange={handleSetName}
          />
          <button
            className="text-mediumDark hover:text-white  bg-[#000] hover:bg-lightgray transition px-2 rounded-[0.8rem] "
            type="button"
            onClick={handleUpdateName}
          >
            <Check />
          </button>
        </div>
      )}
    </>
  );
}

export default NoteBookName;
