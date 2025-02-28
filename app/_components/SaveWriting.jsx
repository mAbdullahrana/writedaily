"use client";

import { updateEntrie, updateUserStreak } from "@/lib/actions";
import { format } from "date-fns";
import { CloudUpload } from "lucide-react";
import { useTransition } from "react";
import toast from "react-hot-toast";
import SpinnerMini from "./SpinnerMini";

export default function SaveWriting({ editor, entrie }) {
  const [isPending, startTrasnsition] = useTransition();

  async function handleSave() {
    if (!editor || !entrie) return;

    const content = editor.getJSON();
    const text = editor?.getText().trim();
    const wordLenght = text?.split(/\s+/).length;

    try {
      startTrasnsition(() => {
        updateEntrie({
          content,
          entrieID: entrie.id,
          wordCount: wordLenght,
          goalMet: wordLenght >= entrie.goal,
          updated_at: format(new Date(), "yyyy-MM-dd HH:mm:ss.SSSxxx"),
        });
        toast.success("Your changes have been saved!");

        updateUserStreak();
      });
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <button
      onClick={handleSave}
      className="hover:text-white flex items-center gap-1"
    >
      {!isPending ? (
        <>
          <CloudUpload /> Save
        </>
      ) : (
        <>
          <SpinnerMini /> Saving
        </>
      )}
    </button>
  );
}
