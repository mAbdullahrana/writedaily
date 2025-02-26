"use client";
import { updateEntryFolder } from "@/lib/actions";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState } from "react";
import DroppableFolder, { UNCATEGORIZED } from "./DroppableFolder";


export function DND({ entries: initialEntries, folders }) {
  const [entries, setEntries] = useState(initialEntries);
  const groupedEntries = groupEntriesByFolder(folders, entries);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

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
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      collisionDetection={closestCenter}
    >
      <div className="flex flex-col min-h-screen p-6 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 items-start">
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
            folder={{ id: UNCATEGORIZED, name: "Notebooks" }}
            entries={groupedEntries[UNCATEGORIZED]}
          />
        </div>
      </div>
    </DndContext>
  );
}




// All of these are imported from '@dnd-kit/core'.

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
