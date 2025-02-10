import { getEntrie } from "@/lib/actions";
import Tiptap from "./_components/Tiptap";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";

export const metadata = {
  title: "DailyWrite",
  description: "Build Your Daily writing habbit with DailyWrite",
};
export default async function Home() {
  const entrie = await getEntrie();

  // Generating HTML from JSON
  const htmlContent = generateHTML(entrie?.content || defaultContent, [
    StarterKit,

    TextAlign.configure({
      types: ["heading", "paragraph"],
    }),
    Highlight.configure({ multicolor: true }),
    Typography,
    Link,
    TextStyle,
    Color,
  ]);

  return <Tiptap htmlContent={htmlContent} entrie={entrie} />;
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
