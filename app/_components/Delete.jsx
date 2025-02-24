"use client";
import { Trash2 } from "lucide-react";
import Button from "./Button";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";
import Modal from "./Modal";
import CreateFolderForm from "./CreateFolderForm";
import ConfirmDelete from "./ConfirmDelete";

function Delete({ resource, onDelete  }) {
  
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>
          <Trash2
            className="text-mediumDark hover:text-primaryButtonHover"
            size={24}
            strokeWidth={1.25}
          />
        </Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <ConfirmDelete onConfirm={onDelete} resource={resource} />
      </Modal.Window>
    </Modal>
  );
}

export default Delete;
