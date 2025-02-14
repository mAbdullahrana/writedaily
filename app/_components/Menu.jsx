"use client";
import { Trash2 } from "lucide-react";
import Button from "./Button";
import { deleteEntrie } from "@/lib/actions";

function Menu({ entrieID }) {
  async function handleDelete(e) {
    // Prevent click from bubbling up to the parent Link
    e.stopPropagation();
    // Your menu-specific logic here (e.g., open a dropdown, etc.)
    await deleteEntrie(entrieID);
  }
  return (
    <div>
      <Button onClick={handleDelete}>
        <Trash2 />
      </Button>
    </div>
  );
}

export default Menu;
