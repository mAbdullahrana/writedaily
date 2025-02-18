// // components/Library.jsx
// "use client";
// import React, { useState } from "react";
// import { DndContext, closestCenter } from "@dnd-kit/core";
// import {
//   SortableContext,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import DraggableEntry from "./DraggableEntry";
// import FolderHeader from "./FolderHeader";

// export default function Library({
//   folders: initialFolders,
//   entries: initialEntries,
//   onEntryUpdate,
// }) {
//   // Group the entries on initial render
//   const [groupedEntries, setGroupedEntries] = useState(() =>
//     groupEntriesByFolder(initialFolders, initialEntries)
//   );

//   const handleDragEnd = async (event) => {
//     const { active, over } = event;
//     // if (!over) return;

//     const draggedEntryId = active.id;
//     const targetFolderID =
//       over.id === "uncategorized" ? "uncategorized" : over.id;

//     // Ensure target folder exists
//     if (!groupedEntries[targetFolderID]) {
//       groupedEntries[targetFolderID] = []; // Initialize an empty array if missing
//     }

//     // Identify the source folder of the dragged entry
//     let sourceFolderID = Object.keys(groupedEntries).find((folderID) =>
//       groupedEntries[folderID].some((entry) => entry.id === draggedEntryId)
//     );

//     if (!sourceFolderID || sourceFolderID === targetFolderID) return;

//     // Remove entry from source folder
//     const entryToMove = groupedEntries[sourceFolderID].find(
//       (entry) => entry.id === draggedEntryId
//     );
//     const updatedSource = groupedEntries[sourceFolderID].filter(
//       (entry) => entry.id !== draggedEntryId
//     );

//     // Add entry to destination folder
//     const updatedDestination = [
//       ...groupedEntries[targetFolderID],
//       {
//         ...entryToMove,
//         folderID: targetFolderID === "uncategorized" ? null : targetFolderID,
//       },
//     ];

//     // Update state
//     setGroupedEntries({
//       ...groupedEntries,
//       [sourceFolderID]: updatedSource,
//       [targetFolderID]: updatedDestination,
//     });

//     // Update database
//     if (onEntryUpdate) {
//       try {
//         await onEntryUpdate({
//           id: draggedEntryId,
//           folderID: targetFolderID === "uncategorized" ? null : targetFolderID,
//         });
//       } catch (err) {
//         console.error("Failed to update entry folder:", err);
//       }
//     }
//   };

//   return (
//     <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
//       <div className="space-y-4">
//         {initialFolders.map((folder) => (
//           <div
//             key={folder.id}
//             id={folder.id}
//             className="p-4 bg-lightgray rounded shadow"
//           >
//             <FolderHeader title={folder.name} />
//             <SortableContext
//               items={groupedEntries[folder.id].map((entry) => entry.id)}
//               strategy={verticalListSortingStrategy}
//             >
//               {groupedEntries[folder.id].map((entry) => (
//                 <DraggableEntry key={entry.id} entry={entry} />
//               ))}
//             </SortableContext>
//           </div>
//         ))}
//         {groupedEntries["uncategorized"].length > 0 && (
//           <div id="uncategorized" className="p-4 bg-lightgray rounded shadow">
//             <FolderHeader title="Uncategorized" />
//             <SortableContext
//               items={groupedEntries["uncategorized"].map((entry) => entry.id)}
//               strategy={verticalListSortingStrategy}
//             >
//               {groupedEntries["uncategorized"].map((entry) => (
//                 <DraggableEntry key={entry.id} entry={entry} />
//               ))}
//             </SortableContext>
//           </div>
//         )}
//       </div>
//     </DndContext>
//   );
// }

// // Utility: group entries by folderID, with uncategorized entries under "uncategorized"
// function groupEntriesByFolder(folders, entries) {
//   const groups = { uncategorized: [] };

//   // Initialize groups for each folder
//   folders.forEach((folder) => {
//     groups[folder.id] = [];
//   });

//   // Group entries by folderID
//   entries.forEach((entry) => {
//     if (entry.folderID && groups[entry.folderID]) {
//       groups[entry.folderID].push(entry);
//     } else {
//       groups["uncategorized"].push(entry);
//     }
//   });

//   return groups;
// }

"use client";

import { useState } from "react";
import DraggableEntry from "./DraggableEntry";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export default function Library({ entries : initialEntries }) {

  const [entries , setEntries] = useState(initialEntries)

  function getPost (id){ return entries.findIndex(entry => entry.id === id)}

  function handleDragEnd(e) {
    const { active, over } = e;

    if(active.id === over.id) return

    setEntries((entry) => {
      const originalPos = getPost(active.id)
      const newPos = getPost(over.id)

      return arrayMove(entries , originalPos , newPos)

    })
  }
  return (
    <div>
      <h1>Library</h1>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={entries.map((entry) => entry.id)}
          strategy={verticalListSortingStrategy}
        >
          {entries.map((entry) => (
            <DraggableEntry entry={entry} key={entry.id} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
