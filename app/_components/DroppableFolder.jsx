// components/DragDrop/DroppableFolder.jsx
"use client";
import React, { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import DraggableEntry from "./DraggableEntry";

export const UNCATEGORIZED = "uncategorized";

export default function DroppableFolder({ folder, entries }) {
  const { setNodeRef, isOver } = useDroppable({ id: folder.id });
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div
      ref={setNodeRef}
      className={`p-6 border-2 rounded-lg min-h-[50px] ${
        folder.id === UNCATEGORIZED ? "w-full" : "w-1/3"
      } ${
        folder.id === UNCATEGORIZED
          ? "bg-dark border-none"
          : "bg-secondary border-lightgray"
      } ${isOver ? "border-primaryButton bg-lightgray" : ""}`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{folder.name}</h3>
        {folder.id !== UNCATEGORIZED && (
          <button onClick={toggleExpand} className="text-primaryButton">
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        )}
      </div>
      {isExpanded && (
        <div
          className={
            folder.id === UNCATEGORIZED
              ? // For Uncategorized: grid layout with 3 columns.
                "grid grid-cols-3 gap-4 auto-rows-min"
              : // For categorized folders: vertical flex layout.
                "flex flex-col space-y-2"
          }
        >
          {entries.map((entry) => (
            <DraggableEntry key={entry.id} entry={entry} />
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
