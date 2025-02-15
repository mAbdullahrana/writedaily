"use client";

import { useOptimistic } from "react";
import AddNoteBook from "./AddNoteBook";
import EntrieCard from "./EntrieCard";
import { deleteEntrie } from "@/lib/actions";
import { Plus } from "lucide-react";

function EntriesList({ entries }) {
  const [optimisticEntries, optimisticDelete] = useOptimistic(
    entries,
    (curEntries, entrieID) => {
      return curEntries.filter((entrie) => entrie.id !== entrieID);
    }
  );

  async function handelDelete(entrieID) {
    optimisticDelete(entrieID);
    await deleteEntrie(entrieID);
  }
  return (
    <div>
      <div className="mt-4 shadow">
        <p className="bg-lightgray rounded-tl-lg rounded-tr-lg py-2 px-6 text-mediumDark font-semibold text-sm">
          Name
        </p>
        <ul>
          {optimisticEntries.map((entrie) => (
            <EntrieCard
              key={entrie.id}
              entrie={entrie}
              onDelete={handelDelete}
            />
          ))}
        </ul>
      </div>
      <AddNoteBook as="logo">
        <Plus />
      </AddNoteBook>
    </div>
  );
}

export default EntriesList;
