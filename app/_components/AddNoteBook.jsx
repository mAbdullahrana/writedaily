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
        {!isPending ? (
          <Button onClick={handleCreateEntrie} as="primary">
            {children}
          </Button>
        ) : (
          <span className="mx-auto">
            <SpinnerMini />
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-10">
      {!isPending ? (
        <Button onClick={handleCreateEntrie} as="primary">
          {children}
        </Button>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </div>
  );
}

export default AddNoteBook;
