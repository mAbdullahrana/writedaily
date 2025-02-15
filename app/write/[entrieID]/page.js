import { getEntrie } from "@/lib/actions";

import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Typography from "@tiptap/extension-typography";
import { generateHTML } from "@tiptap/html";
import StarterKit from "@tiptap/starter-kit";
import TipTap from "../../_components/Tiptap";

export async function generateMetadata({ params }) {
  const { entrieID } = await params;
  const entrie = await getEntrie({ entrieID });
  const { title } = entrie;
  return {
    title: `${title} / WriteDaily`,
  };
}

export default async function Page({ params }) {

  const { entrieID } = await params;

  const entrie = await getEntrie({ entrieID });

  // Generating HTML from JSON
  const content = generateHTML(entrie?.content, [
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

  return <TipTap content={content} entrie={entrie} />;
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
