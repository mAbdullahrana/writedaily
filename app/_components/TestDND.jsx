// "use client";
// import React, { useState } from "react";
// import {
//   DndContext,
//   useDraggable,
//   useDroppable,
//   closestCenter,
// } from "@dnd-kit/core";
// import { CSS } from "@dnd-kit/utilities";
// import { updateEntryFolder } from "@/lib/actions"; // Your backend update function

// const UNCATEGORIZED = "uncategorized";

// // DraggableEntry: makes each entry draggable.
// function DraggableEntry({ entry }) {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: entry.id,
//     data: { entry },
//   });

//   const style = transform
//     ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
//     : undefined;

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...listeners}
//       {...attributes}
//       className="p-4 mb-2 z-10 bg-secondary text-white rounded cursor-move hover:bg-lightgray transition-colors"
//     >
//       {entry.title}
//     </div>
//   );
// }

// // DroppableFolder: renders a folder as a droppable area.
// // If the folder is "Uncategorized", entries are rendered in a grid of 3 columns.
// function DroppableFolder({ folder, entries }) {
//   const { setNodeRef, isOver } = useDroppable({ id: folder.id });
//   const [isExpanded, setIsExpanded] = useState(true);
//   const toggleExpand = () => setIsExpanded((prev) => !prev);

//   return (
//     <div
//       ref={setNodeRef}
//       className={`p-6 border-2 rounded-lg min-h-[50px] ${
//         folder.id === UNCATEGORIZED ? "w-full" : "w-1/3"
//       } ${
//         folder.id === UNCATEGORIZED
//           ? "bg-dark border-none"
//           : "bg-secondary border-lightgray"
//       } ${isOver ? "border-primaryButton bg-lightgray" : ""}`}
//     >
//       <div className="flex justify-between items-center mb-4">
//         <h3 className="text-lg font-semibold">{folder.name}</h3>
//         {folder.id !== UNCATEGORIZED && (
//           <button onClick={toggleExpand} className="text-primaryButton">
//             {isExpanded ? "Collapse" : "Expand"}
//           </button>
//         )}
//       </div>
//       {isExpanded && (
//         <div
//           className={
//             folder.id === UNCATEGORIZED
//               ? // For Uncategorized: grid layout with 3 columns, no overflow.
//                 "grid grid-cols-3 gap-4 auto-rows-min"
//               : // For categorized folders: flex layout.
//                 "flex flex-col space-y-2"
//           }
//         >
//           {entries.map((entry) => (
//             <DraggableEntry key={entry.id} entry={entry} />
//           ))}
//           {isOver && entries.length === 0 && (
//             <p className="text-mediumDark text-sm">
//               Drop here to add to "{folder.name}"
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// // groupEntriesByFolder: groups entries by their folderID.
// // Uncategorized entries (those with a falsy folderID) are grouped under UNCATEGORIZED.
// function groupEntriesByFolder(folders, entries) {
//   const groups = { [UNCATEGORIZED]: [] };
//   folders.forEach((folder) => {
//     groups[folder.id] = [];
//   });
//   entries.forEach((entry) => {
//     if (entry.folderID && groups[entry.folderID] !== undefined) {
//       groups[entry.folderID].push(entry);
//     } else {
//       groups[UNCATEGORIZED].push(entry);
//     }
//   });
//   return groups;
// }

// // DragDropLibrary: main component rendering the library with drag-and-drop.
// export default function DragDropLibrary({ entries: initialEntries, folders }) {
//   const [entries, setEntries] = useState(initialEntries);
//   const groupedEntries = groupEntriesByFolder(folders, entries);

//   const handleDragEnd = async (event) => {
//     const { active, over } = event;
//     if (!over) return;
//     const draggedEntryId = active.id;
//     // If dropping on UNCATEGORIZED, we set folderID to null.
//     const targetFolderID = over.id === UNCATEGORIZED ? null : over.id;

//     // Find the source folder of the dragged entry.
//     let sourceFolderID = null;
//     for (const folderID in groupedEntries) {
//       if (groupedEntries[folderID].find((entry) => entry.id === draggedEntryId)) {
//         sourceFolderID = folderID;
//         break;
//       }
//     }
//     // If dropped in the same folder, do nothing.
//     if (!sourceFolderID || sourceFolderID === (targetFolderID || UNCATEGORIZED))
//       return;

//     try {
//       // Update backend with new folder assignment.
//       await updateEntryFolder({ id: draggedEntryId, folderID: targetFolderID });
//       // Update local state.
//       setEntries((prev) =>
//         prev.map((entry) =>
//           entry.id === draggedEntryId ? { ...entry, folderID: targetFolderID } : entry
//         )
//       );
//     } catch (error) {
//       console.error("Update failed:", error);
//     }
//   };

//   return (
//     <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
//       <div className="flex flex-col min-h-screen p-6 space-y-6">
//         {/* Categorized folders rendered in a flex row */}
//         <div className="flex items-start gap-6 mb-6 overflow-x-auto">
//           {folders.map((folder) => (
//             <DroppableFolder
//               key={folder.id}
//               folder={folder}
//               entries={groupedEntries[folder.id]}
//             />
//           ))}
//         </div>
//         {/* Uncategorized folder rendered below at full width */}
//         <div className="w-full">
//           <DroppableFolder
//             folder={{ id: UNCATEGORIZED, name: "Uncategorized" }}
//             entries={groupedEntries[UNCATEGORIZED]}
//           />
//         </div>
//       </div>
//     </DndContext>
//   );
// }