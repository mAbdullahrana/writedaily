// components/DraggableEntry.jsx
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function DraggableEntry({ entry }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: entry.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="p-2 my-2 bg-secondary rounded cursor-move"
    >
      {entry.title}
    </div>
  );
}
