import { Check } from "lucide-react";
import { useState } from "react";

function NoteBookName({entrie}) {
  const [name, setName] = useState(entrie?.title);
  const [isToggle, setIsToggle] = useState(false);
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
          {name}
        </button>
      ) : (
        <div className="flex gap-1">
          <input
            className="bg-[#000] text-sm text-white px-3 py-[0.25rem] rounded-[0.8rem] outline-none"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="text-mediumDark hover:text-white  bg-[#000] hover:bg-lightgray transition px-2 rounded-[0.8rem] "
            type="button"
            onClick={handleToggle}
          >
            <Check />
          </button>
        </div>
      )}
    </>
  );
}

export default NoteBookName;
