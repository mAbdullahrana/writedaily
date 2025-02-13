"use client";
import { Plus } from "lucide-react";
import Button from "./Button";
import { createEntrie } from "@/lib/actions";

function AddNoteBook() {
  const handleCreateEntrie = async () => {
    try {
      await createEntrie();
    } catch (error) {
      console.error("Error creating entry:", error);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-10">
      <Button onClick={handleCreateEntrie} as="primary">
        <Plus />
      </Button>
    </div>
  );
}

export default AddNoteBook;
