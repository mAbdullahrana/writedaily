"use client";
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import Delete from "./Delete";
import { deleteEntrie } from "@/lib/actions";
import Entrie from "./Entrie";

export default function DraggableEntry({ entrie }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: entrie.id,
    data: { entrie },
  });

  const style = transform
    ? { transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="relative group"
    >
      {/* Drag handle area */}
      <div {...listeners}>
        <Entrie entrie={entrie} />
      </div>

      {/* Delete button positioned absolutely */}
      <div className="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Delete
          onDelete={deleteEntrie}
          className="text-red-500 hover:text-red-700"
          resource={entrie}
        />
      </div>
    </div>
  );
}
