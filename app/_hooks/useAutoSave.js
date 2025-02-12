import { AUTOSAVE_TIME } from "@/lib/constants";
import { useEffect, useState } from "react";

export default function useAutosave(
  editor,
  updateFunction,
  debounceDelay = AUTOSAVE_TIME
) {
  // Store the JSON string of the last saved content
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
            await updateFunction(currentContent);
            setLastSavedContent(currentContentStr);
            console.log("Auto-saved at", new Date().toLocaleTimeString());
          } catch (error) {
            console.error("Autosave error:", error);
          }
        }, debounceDelay);
      }
    };

    // Listening for editor updates
    editor.on("update", handleUpdate);

    // Cleaningup on unmount or if editor changes
    return () => {
      editor.off("update", handleUpdate);
      clearTimeout(timeoutId);
    };
  }, [editor, updateFunction, debounceDelay, lastSavedContent]);

  return lastSavedContent;
}
