import { formatTimestamp } from "@/lib/helpers";
import Link from "next/link";

function EntrieCard({ entrie }) {
  const { title, wordCount, created_at, updated_at, id } = entrie;
  return (
    <Link
      href={`/write/${id}`}
      className="bg-secondary border-b border-l border-r  border-lightgray flex flex-col p-6 cursor-pointer hover:bg-dark "
    >
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <div className="flex gap-2 text-[0.8rem] text-mediumDark font-light">
        <p>{wordCount} Words</p>
        <p>| Created {formatTimestamp(created_at)}</p>
        <p>| Updated {formatTimestamp(updated_at)}</p>
      </div>
    </Link>
  );
}

export default EntrieCard;
