import { updateEntrie } from "@/lib/actions";
import { AUTOSAVE_TIME } from "@/lib/constants";
import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function useAutosave({ editor, entrie }) {
  // Storing the JSON string of the last saved content
  const [lastSavedContent, setLastSavedContent] = useState("");

  useEffect(() => {
    if (!editor) return;
    let timeoutId;

    const handleUpdate = () => {
      // Clearing any pending autosave timeout
      clearTimeout(timeoutId);
      const currentContent = editor.getJSON();
      const currentContentStr = JSON.stringify(currentContent);

      // If the content has changed compared to what was last saved,
      // set a timeout to autosave after the debounce delay.
      if (currentContentStr !== lastSavedContent) {
        timeoutId = setTimeout(async () => {
          try {
            await updateEntrie({
              currentContent,
              entrieID: entrie.id,
              updated_at: format(new Date(), "yyyy-MM-dd HH:mm:ss.SSSxxx"),
            });
            setLastSavedContent(currentContentStr);
            console.log("Auto-saved at", new Date().toLocaleTimeString());
          } catch (error) {
            console.error("Autosave error:", error);
          }
        }, AUTOSAVE_TIME);
      }
    };

    // Listening for editor updates
    editor.on("update", handleUpdate);

    // Cleaningup on unmount or if editor changes
    return () => {
      editor.off("update", handleUpdate);
      clearTimeout(timeoutId);
    };
  }, [editor, entrie.id, lastSavedContent]);

  return lastSavedContent;
}
