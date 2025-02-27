import { getAllEntrie, getAllFolder } from "@/lib/actions";
import { LibraryBig } from "lucide-react";
import CreateNewFolder from "./CreateNewFolder";
import DragNDrop from "./DragNDrop";

async function Library() {
  const [folders, entries] = await Promise.all([
    getAllFolder(),
    getAllEntrie(),
  ]);

  return (
    <>
      {!folders.length ? (
        <div className="flex flex-col items-center justify-center min-h-screen px-6">
          <LibraryBig className="text-primaryButton mb-6" size={150} />

          <div className="text-center">
            <h1 className="text-white text-3xl font-extrabold">
              Create Your First Folder
            </h1>
            <p className="text-lg text-mediumDark mt-2 max-w-lg">
              All your notebooks, neatly organized in one place. Easily access,
              manage, and keep track of everything that matters.
            </p>
          </div>

          <div className="mt-4 flex flex-col items-center">
            <CreateNewFolder />

            <p className="text-sm text-mediumDark mt-3 max-w-sm text-center">
              Not sure where to start? Try creating a folder for an important
              part of your life, like
              <span className="font-semibold"> "Work"</span>,
              <span className="font-semibold"> "School"</span>, or
              <span className="font-semibold"> "Recipes"</span>.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <DragNDrop folders={folders} entries={entries} />
        </div>
      )}
    </>
  );
}

export default Library;
