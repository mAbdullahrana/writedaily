import { deleteFolder } from "@/lib/actions";
import { FolderClosed, FolderOpen } from "lucide-react";
import Delete from "./Delete";
import { UNCATEGORIZED } from "./DroppableFolder";

function Folder({ isExpanded, folder, entries, toggleExpand }) {
  return (
    <div className="flex flex-col min-h-[80px]">
      <h3
        className={`${
          folder.name === "Notebooks"
            ? "text-2xl font-semibold"
            : "text-sm font-semibold"
        }`}
      >
        {folder.name}
      </h3>
      <div className="mt-auto flex justify-between items-center">
        {folder.id !== UNCATEGORIZED && (
          <>
            <div>
              <p className="text-sm text-mediumDark">
                {entries.length} notebooks
              </p>{" "}
            </div>

            <div className="flex gap-2 items-center  justify-center ">
              <Delete resource={folder} onDelete={deleteFolder} />
              <button
                onClick={toggleExpand}
                className="text-mediumDark hover:text-primaryButtonHover"
              >
                {isExpanded ? <FolderOpen /> : <FolderClosed />}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Folder;
