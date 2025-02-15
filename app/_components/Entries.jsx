import { getAllEntrie } from "@/lib/actions";
import { unstable_noStore as noStore } from "next/cache";

import CreateFirstNoteBook from "./CreateFirstNoteBook";
import EntriesList from "./EntriesList";

async function Entries() {
  noStore();
  const entries = await getAllEntrie("1c6e20b5-8e3a-433b-a50c-3e2071d57c09");

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
