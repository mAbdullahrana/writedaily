"use client";
import { formatTimestamp } from "@/lib/helpers";
import Link from "next/link";
import Menu from "./Menu";

function Entrie({ entrie, onDelete }) {
  const { title, wordCount, created_at, updated_at, id } = entrie;

  return (
    <li className="bg-lightgray hover:bg-secondary flex flex-col p-3 rounded-sm cursor-pointer">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex justify-between items-center mt-2">
        <p className="text-[0.7rem] text-mediumDark font-light">
          {wordCount} Words
        </p>
        <Menu id={id} onDelete={onDelete} />
      </div>
    </li>
  );
}

export default Entrie;
