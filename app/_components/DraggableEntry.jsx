// components/DragDrop/DraggableEntry.jsx
"use client";
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export default function DraggableEntry({ entry }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: entry.id,
    data: { entry },
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="p-4 mb-2 bg-secondary text-white rounded cursor-move hover:bg-lightgray transition-colors"
    >
      {entry.title}
    </div>
  );
}
