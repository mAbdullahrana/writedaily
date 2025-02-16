"use client";
import { Trash2 } from "lucide-react";
import Button from "./Button";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";

function Menu({ entrieID, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete(e) {
    // Prevent click from bubbling up to the parent Link
    e.stopPropagation();
    // Your menu-specific logic here (e.g., open a dropdown, etc.)
    startTransition(() => onDelete(entrieID));
  }
  return (
    <div>
      {!isPending ? (
        <Button onClick={handleDelete}>
          <Trash2 />
        </Button>
      ) : (
        <SpinnerMini />
      )}
    </div>
  );
}

export default Menu;
