import { getAllEntrie, getAllFolder, updateEntryFolder } from "@/lib/actions";
import Library from "../_components/Library";

export default async function LibraryPage() {
  const folders = await getAllFolder("1c6e20b5-8e3a-433b-a50c-3e2071d57c09"); // returns an array of folder objects
  const entries = await getAllEntrie("1c6e20b5-8e3a-433b-a50c-3e2071d57c09"); // returns an array of entry objects

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Library</h2>
      <Library
        folders={folders}
        entries={entries}
        onEntryUpdate={updateEntryFolder}
      />
    </div>
  );
}
