import { getAllEntrie, getAllFolder } from "@/lib/actions";
import AddNoteBook from "../_components/AddNoteBook";
import CreateNewFolder from "../_components/CreateNewFolder";
import { DragDropLibrary } from "../_components/DragDropLibrary";

export default async function LibraryPage() {
  const folders = await getAllFolder();
  const entries = await getAllEntrie();
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
