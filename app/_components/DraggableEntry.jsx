"use client";
import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import EntrieCard from "./EntrieCard";
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
      {...listeners}
      {...attributes}
      
    >
     <Entrie entrie = {entrie} />
    </div>
  );
}
