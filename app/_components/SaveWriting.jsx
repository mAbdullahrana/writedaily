import { updateEntrie } from "@/lib/actions";
import { format } from "date-fns";
import { Save } from "lucide-react";
import toast from "react-hot-toast";

export default function SaveWriting({ editor, entrie }) {
  async function handleSave() {
    if (!editor || !entrie) return;

    const content = editor.getJSON();
    const text = editor?.getText().trim();
    const wordLenght = text?.split(/\s+/).length;

    try {
      await updateEntrie({
        content,
        entrieID: entrie.id,
        wordCount: wordLenght,
        goalMet: wordLenght >= entrie.goal,
        updated_at: format(new Date(), "yyyy-MM-dd HH:mm:ss.SSSxxx"),
      });
      toast.success("Your changes have been saved!");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <button
      onClick={handleSave}
      className="hover:text-white flex items-center gap-1"
    >
      <Save />
      Save
    </button>
  );
}
