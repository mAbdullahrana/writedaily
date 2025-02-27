// components/DragDrop/DroppableFolder.jsx
"use client";
import { useDroppable } from "@dnd-kit/core";

import { useState } from "react";
import DraggableEntry from "./DraggableEntry";
import Folder from "./Folder";

export const UNCATEGORIZED = "uncategorized";

export default function DroppableFolder({ folder, entries , onDeleteEntrie }) {

  const { setNodeRef, isOver } = useDroppable({ id: folder.id });
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div
      ref={setNodeRef}
      className={`p-2 border-[1px]  rounded-lg  ${
        folder.id === UNCATEGORIZED
          ? "w-full bg-dark border-none"
          : "bg-slate-800 border-lightgray hover:bg-slate-900 cursor-pointer "
      } ${isOver ? "border-primaryButton bg-lightgray" : ""}`}
    >
      <Folder
        entries={entries}
        isExpanded={isExpanded}
        folder={folder}
        toggleExpand={toggleExpand}
        
      />

      {isExpanded && (
        <div
          className={
            folder.id === UNCATEGORIZED ? "hidden" : "flex flex-col space-y-2"
          }
        >
          {entries.map((entrie) => (
            <DraggableEntry key={entrie.id} entrie={entrie} onDeleteEntrie = {onDeleteEntrie} />
          ))}
          {isOver && entries.length === 0 && (
            <p className="text-mediumDark text-sm">
              Drop here to add to "{folder.name}"
            </p>
          )}
        </div>
      )}

      {folder.id === UNCATEGORIZED && (
        <div className="grid grid-cols-3 gap-4 auto-rows-min ">
          {entries.map((entrie) => (
            <DraggableEntry key={entrie.id} entrie={entrie} onDeleteEntrie = {onDeleteEntrie} />
          ))}
          {isOver && entries.length === 0 && (
            <p className="text-mediumDark text-sm">
              Drop here to add to "{folder.name}"
            </p>
          )}
        </div>
      )}
    </div>
  );
}


