import { updateEntrie } from "@/lib/actions";

const { useState, useEffect } = require("react");

export function useWordCount(editor, entrie) {
  const [wordCount, setWordCount] = useState(entrie.wordCount);

  useEffect(() => {
    const updateWordCount = () => setWordCount(getWordCount());
    editor?.on("update", updateWordCount);
    return () => editor?.off("update", updateWordCount);
  }, [editor]);

  function getWordCount() {
    const text = editor?.getText().trim();
    return text?.length === 0 ? 0 : text?.split(/\s+/).length;
  }

  return wordCount;
}
