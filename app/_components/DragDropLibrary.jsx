// components/DragDrop/DragDropLibrary.jsx
"use client";
import React, { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { updateEntryFolder } from "@/lib/actions"; // Your backend update function
import DroppableFolder, { UNCATEGORIZED } from "./DroppableFolder";

function groupEntriesByFolder(folders, entries) {
  const groups = { [UNCATEGORIZED]: [] };
  folders.forEach((folder) => {
    groups[folder.id] = [];
  });
  entries.forEach((entry) => {
    if (entry.folderID && groups[entry.folderID] !== undefined) {
      groups[entry.folderID].push(entry);
    } else {
      groups[UNCATEGORIZED].push(entry);
    }
  });
  return groups;
}

export function DragDropLibrary({ entries: initialEntries, folders }) {
  const [entries, setEntries] = useState(initialEntries);
  const groupedEntries = groupEntriesByFolder(folders, entries);

  const handleDragEnd = async (event) => {
    const { active, over } = event;
    if (!over) return;
    const draggedEntryId = active.id;
    // If dropping on UNCATEGORIZED, set folderID to null; otherwise, use over.id.
    const targetFolderID = over.id === UNCATEGORIZED ? null : over.id;

    // Identify source folder for the dragged entry.
    let sourceFolderID = null;
    for (const folderID in groupedEntries) {
      if (
        groupedEntries[folderID].find((entry) => entry.id === draggedEntryId)
      ) {
        sourceFolderID = folderID;
        break;
      }
    }
    if (!sourceFolderID || sourceFolderID === (targetFolderID || UNCATEGORIZED))
      return;

    try {
      // Update backend.
      await updateEntryFolder({ id: draggedEntryId, folderID: targetFolderID });
      // Update local state.
      setEntries((prev) =>
        prev.map((entry) =>
          entry.id === draggedEntryId
            ? { ...entry, folderID: targetFolderID }
            : entry
        )
      );
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
      <div className="flex flex-col min-h-screen p-6 space-y-6">
        {/* Categorized folders rendered in a flex row */}
        <div className="flex items-start gap-6 mb-6 overflow-x-auto">
          {folders.map((folder) => (
            <DroppableFolder
              key={folder.id}
              folder={folder}
              entries={groupedEntries[folder.id]}
            />
          ))}
        </div>
        {/* Uncategorized folder rendered below, full width */}
        <div className="w-full">
          <DroppableFolder
            folder={{ id: UNCATEGORIZED, name: "Uncategorized" }}
            entries={groupedEntries[UNCATEGORIZED]}
          />
        </div>
      </div>
    </DndContext>
  );
}
