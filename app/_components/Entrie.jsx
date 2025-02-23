"use client";
import Delete from "./Delete";

function Entrie({ entrie, onDelete }) {
  const { title, wordCount } = entrie;
  function handleClick(e) {
    e.stopPropagation();
    console.log("ji")
  }
  return (
    <li className="bg-lightgray hover:bg-secondary flex flex-col p-3 rounded-sm cursor-pointer">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex justify-between items-center mt-2">
        <p className="text-[0.7rem] text-mediumDark font-light">
          {wordCount} Words
        </p>
        <Delete onClick={handleClick} resource={entrie} onDelete={onDelete} />
      </div>
    </li>
  );
}

export default Entrie;
