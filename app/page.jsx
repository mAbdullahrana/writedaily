// import { getEntrie } from "@/lib/actions";
// import Tiptap from "./_components/Tiptap";
// import { generateHTML } from "@tiptap/html";
// import StarterKit from "@tiptap/starter-kit";
// import TextAlign from "@tiptap/extension-text-align";
// import Highlight from "@tiptap/extension-highlight";
// import Typography from "@tiptap/extension-typography";
// import Link from "@tiptap/extension-link";
// import TextStyle from "@tiptap/extension-text-style";
// import Color from "@tiptap/extension-color";

import Link from "next/link";

// export const metadata = {
//   title: "DailyWrite",
//   description: "Build Your Daily writing habbit with DailyWrite",
// };
// export default async function Home() {
//   const entrie = await getEntrie();

//   // Generating HTML from JSON
//   const content = generateHTML(entrie?.content || defaultContent, [
//     StarterKit,

//     TextAlign.configure({
//       types: ["heading", "paragraph"],
//     }),
//     Highlight.configure({ multicolor: true }),
//     Typography,
//     Link,
//     TextStyle,
//     Color,
//   ]);

//   return <Tiptap content={content} entrie={entrie} />;
// }

// Create a proper default JSON structure
// const defaultContent = {
//   type: "doc",
//   content: [
//     {
//       type: "paragraph",
//       content: [{ type: "text", text: "Start writing..." }],
//     },
//   ],
// };

export const metadata = {
  title: "DailyWrite",
  description: "Build Your Daily writing habbit with DailyWrite",
};
export default async function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Welcome to WriteDaily</h1>
      <p>Your creative journey starts here.</p>
    </div>
  );
}

// Create a proper default JSON structure
// const defaultContent = {
//   type: "doc",
//   content: [
//     {
//       type: "paragraph",
//       content: [{ type: "text", text: "Start writing..." }],
//     },
//   ],
// };
