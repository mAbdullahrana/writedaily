"use client";
import { Plus } from "lucide-react";
import Button from "./Button";
import { createEntrie } from "@/lib/actions";
import { useTransition } from "react";
import SpinnerMini from "./SpinnerMini";


function AddNoteBook({ children, as }) {
  const [isPending, startTransition] = useTransition();
  function handleCreateEntrie() {
    startTransition(() => createEntrie());
    
  }

  if (as === "button") {
    return (
      <div className="">
        <Button disabled={isPending} onClick={handleCreateEntrie} as="primary">
          <span>
            {!isPending ? (
              <Plus />
            ) : (
              <span className="mx-auto w-full">
                <SpinnerMini />
              </span>
            )}
          </span>
          <span>New Notebook</span>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-10">
      <Button disabled={isPending} onClick={handleCreateEntrie} as="primary">
        {!isPending ? (
          children
        ) : (
          <span className="mx-auto">
            <SpinnerMini />
          </span>
        )}
      </Button>
    </div>
  );
}

export default AddNoteBook;
