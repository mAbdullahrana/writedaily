const { useState, useEffect } = require("react");

export function useWordCount(editor) {
  const [wordCount, setWordCount] = useState(0);


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
