"use client";
import { formatTimestamp } from "@/lib/helpers";
import { redirect } from "next/navigation";
import Menu from "./Menu";

function EntrieCard({ entrie, onDelete }) {
  const { title, wordCount, created_at, updated_at, id } = entrie;

  function handleClick() {
    redirect(`/write/${id}`);
  }
  return (
    <li className="bg-secondary border-b border-l border-r  border-lightgray flex flex-col p-6 cursor-pointer hover:bg-dark ">
      <div onClick={handleClick} className="flex justify-between items-center">
        <div>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
          <div className="flex gap-2 text-[0.8rem] text-mediumDark font-light">
            <p>{wordCount} Words</p>
            <p>| Created {formatTimestamp(created_at)}</p>
            <p>| Updated {formatTimestamp(updated_at)}</p>
          </div>
        </div>
        <Menu entrieID={id} onDelete={onDelete} />
      </div>
    </li>
  );
}

export default EntrieCard;
