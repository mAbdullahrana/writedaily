import { getAllEntrie, getAllFolder } from "@/lib/actions";
import AddNoteBook from "../_components/AddNoteBook";
import CreateNewFolder from "../_components/CreateNewFolder";
import { DragDropLibrary } from "../_components/DragDropLibrary";

export default async function LibraryPage() {
  const folders = await getAllFolder("1c6e20b5-8e3a-433b-a50c-3e2071d57c09"); 
  const entries = await getAllEntrie("1c6e20b5-8e3a-433b-a50c-3e2071d57c09"); 
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2 ">
          <h2 className="text-2xl font-bold ">Your Library</h2>
          <p className="text-mediumDark font-light text-sm">
            Drag and drop to organize your notebooks and folders
          </p>
        </div>

        <div className="flex gap-2 items-start">
          <CreateNewFolder />
          <AddNoteBook as="button" />
        </div>
      </div>
      <DragDropLibrary entries={entries} folders={folders} />
    </div>
  );
}
