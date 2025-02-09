// // components/RichTextEditor.tsx
// import { useEditor, EditorContent } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import { useEffect, useState } from 'react';
// import { debounce } from 'lodash';

// export default function RichTextEditor({ initialContent }: { initialContent?: any }) {
//   const [isSaving, setIsSaving] = useState(false);

//   // Initialize TipTap editor
//   const editor = useEditor({
//     extensions: [StarterKit],
//     content: initialContent || '<p>Start writing...</p>',
//     onUpdate: ({ editor }) => {
//       // Debounce auto-save
//       debouncedSave(editor.getJSON());
//     },
//   });

//   // Save to backend
//   const saveContent = async (content: any) => {
//     if (!editor) return;
    
//     setIsSaving(true);
//     try {
//       const response = await fetch('/api/entries', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           content, // TipTap JSON
//           wordCount: editor.storage.characterCount.words(),
//         }),
//       });
//       if (!response.ok) throw new Error('Failed to save');
//     } catch (error) {
//       console.error('Save error:', error);
//     } finally {
//       setIsSaving(false);
//     }
//   };

//   // Debounce saves to avoid spamming the API
//   const debouncedSave = debounce(saveContent, 2000);

//   return (
//     <div>
//       <EditorContent editor={editor} />
//       {isSaving && <div className="text-sm text-gray-500">Saving...</div>}
//     </div>
//   );
// }