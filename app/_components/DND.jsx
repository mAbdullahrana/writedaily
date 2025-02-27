"use client";
import { deleteEntrie, updateEntryFolder } from "@/lib/actions";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useOptimistic, useTransition } from "react";
import DroppableFolder, { UNCATEGORIZED } from "./DroppableFolder";

export function DND({ entries: initialEntries, folders }) {
  const [isPending, startTransition] = useTransition();
  const [entries, setEntries] = useOptimistic(
    initialEntries,
    (prev, update) => {
      if (update.type === "delete") {
        return prev.filter((entry) => entry.id !== update.entryID);
      }
      if (update.type === "move") {
        return prev.map((entry) =>
          entry.id === update.entryID
            ? { ...entry, folderID: update.targetFolderID }
            : entry
        );
      }
      return prev;
    }
  );

  const groupedEntries = groupEntriesByFolder(folders, entries);

  // Optimistic Delete
  async function handelDeleteEntrie(entryID) {
    setEntries({ type: "delete", entryID });

    try {
      await deleteEntrie(entryID);
    } catch (error) {
      console.error("Delete failed, reverting:", error);
      setEntries(initialEntries); // Revert if delete fails
    }
  }

  async function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    const draggedEntryId = active.id;
    const targetFolderID = over.id === UNCATEGORIZED ? null : over.id;

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

    startTransition(() => {
      setEntries({ type: "move", entryID: draggedEntryId, targetFolderID });
    });

    try {
      await updateEntryFolder({ id: draggedEntryId, folderID: targetFolderID });
    } catch (error) {
      console.error("Move failed, reverting:", error);
      // If the operation fails, revert to the initial entries
      startTransition(() => {
        setEntries(initialEntries);
      });
    }
  }

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } })
  );

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
              onDeleteEntrie={handelDeleteEntrie}
            />
          ))}
        </div>
        <div className="w-full">
          <DroppableFolder
            folder={{ id: UNCATEGORIZED, name: "Notebooks" }}
            entries={groupedEntries[UNCATEGORIZED]}
            onDeleteEntrie={handelDeleteEntrie}
          />
        </div>
      </div>
    </DndContext>
  );
}

// Function to Group Entries by Folder
function groupEntriesByFolder(folders, entries) {
  const groups = { [UNCATEGORIZED]: [] };
  folders.forEach((folder) => (groups[folder.id] = []));
  entries.forEach((entry) => {
    if (entry.folderID && groups[entry.folderID] !== undefined) {
      groups[entry.folderID].push(entry);
    } else {
      groups[UNCATEGORIZED].push(entry);
    }
  });
  return groups;
}
