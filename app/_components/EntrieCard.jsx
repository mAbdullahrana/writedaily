"use client";
import { formatTimestamp } from "@/lib/helpers";
import Link from "next/link";
import Delete from "./Delete";

function EntrieCard({ entrie, onDelete }) {
  const { title, wordCount, created_at, updated_at, id } = entrie;

  return (
    <li className="bg-secondary border-b border-l border-r border-lightgray flex flex-col p-6 cursor-pointer hover:bg-dark">
      <div className="flex justify-between items-center">
        <Link href={`/write/${id}`} className="flex-1">
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
        </Link>
        <Delete resource={entrie} onDelete={onDelete} />
      </div>
    </li>
  );
}

export default EntrieCard;
