"use client";
import { FolderPlus } from "lucide-react";
import Button from "./Button";
import CreateFolderForm from "./CreateFolderForm";
import Modal from "./Modal";

function CreateNewFolder() {
  return (
    <Modal>
      <Modal.Open opens="folder-form">
        <Button as="secondary">
          <FolderPlus /> New Folder
        </Button>
      </Modal.Open>
      <Modal.Window name="folder-form">
        <CreateFolderForm />
      </Modal.Window>
    </Modal>
  );
}

export default CreateNewFolder;
