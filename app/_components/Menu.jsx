"use client";
import { Trash2 } from "lucide-react";
import Button from "./Button";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";
import Modal from "./Modal";
import CreateFolderForm from "./CreateFolderForm";
import ConfirmDelete from "./ConfirmDelete";

function Menu({ id, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete(e) {
    // Prevent click from bubbling up to the parent Link
    e.stopPropagation();
    // Your menu-specific logic here (e.g., open a dropdown, etc.)
    startTransition(() => onDelete(id));
  }
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button onClick={handleDelete}>
            <Trash2
              className="text-mediumDark hover:text-primaryButtonHover"
              size={24}
              strokeWidth={1.25}
            />
          </Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <ConfirmDelete  />
        </Modal.Window>
      </Modal>
      {/* {!isPending ? (
        <Button onClick={handleDelete}>
          <Trash2
            className="text-mediumDark hover:text-primaryButtonHover"
            size={24}
            strokeWidth={1.25}
          />
        </Button>
      ) : (
        <SpinnerMini />
      )} */}
    </div>
  );
}

export default Menu;
