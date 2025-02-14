// import { formatTimestamp } from "@/lib/helpers";
// import Link from "next/link";

// function EntrieCard({ entrie }) {
//   const { title, wordCount, created_at, updated_at, id } = entrie;
//   return (
//     <Link
//       href={`/write/${id}`}
//       className="bg-secondary border-b border-l border-r  border-lightgray flex flex-col p-6 cursor-pointer hover:bg-dark "
//     >
//       <div>
//         <h3 className="text-lg font-semibold">{title}</h3>
//       </div>
//       <div className="flex gap-2 text-[0.8rem] text-mediumDark font-light">
//         <p>{wordCount} Words</p>
//         <p>| Created {formatTimestamp(created_at)}</p>
//         <p>| Updated {formatTimestamp(updated_at)}</p>
//       </div>
//     </Link>
//   );
// }

// export default EntrieCard;
"use client";
import { formatTimestamp } from "@/lib/helpers";
import { redirect } from "next/navigation";
import Menu from "./Menu";

function EntrieCard({ entrie }) {
  const { title, wordCount, created_at, updated_at, id } = entrie;
  return (
    <div className="bg-secondary border-b border-l border-r  border-lightgray flex flex-col p-6 cursor-pointer hover:bg-dark ">
      <div
        onClick={() => redirect(`/write/${id}`)}
        className="flex justify-between items-center"
      >
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
        <Menu entrieID={id} />
      </div>
    </div>
  );
}

export default EntrieCard;
