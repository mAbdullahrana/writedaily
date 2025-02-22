import { getAllEntrie } from "@/lib/actions";
import { unstable_noStore as noStore } from "next/cache";

import CreateFirstNoteBook from "./CreateFirstNoteBook";
import EntriesList from "./EntriesList";

async function Entries() {
  noStore();
  const entries = await getAllEntrie();

  return (
    <>
      {entries.length > 0 ? (
        <EntriesList entries={entries} />
      ) : (
        <CreateFirstNoteBook />
      )}
    </>
  );
}

export default Entries;
