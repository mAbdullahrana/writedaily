import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Highlighter,
  Italic,
  Link,
  List,
  ListOrdered,
  Palette,
  Pilcrow,
  Quote,
  RotateCcw,
  RotateCw,
  Strikethrough,
} from "lucide-react";

// A reusable button component styled with Tailwind CSS
const MenuButton = ({ onClick, isActive, icon: Icon, title }) => {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`
        px-3 py-2 rounded transition-colors duration-200
        ${isActive ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"}
        hover:bg-blue-300 hover:text-white focus:outline-none
      `}
    >
      <Icon />
    </button>
  );
};

function MenuBar({ editor }) {
  if (!editor) {
    return null;
  }

  // Array of button configurations
  const buttons = [
    {
      title: "Heading 1",
      icon: Heading1, // make sure Heading1 is imported
      active: () => editor.isActive("heading", { level: 1 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
    },
    {
      title: "Heading 2",
      icon: Heading2,
      active: () => editor.isActive("heading", { level: 2 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
    },
    {
      title: "Heading 3",
      icon: Heading3,
      active: () => editor.isActive("heading", { level: 3 }),
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
    },
    {
      title: "Paragraph",
      icon: Pilcrow,
      active: () => editor.isActive("paragraph"),
      onClick: () => editor.chain().focus().setParagraph().run(),
    },
    {
      title: "Bold",
      icon: Bold,
      active: () => editor.isActive("bold"),
      onClick: () => editor.chain().focus().toggleBold().run(),
    },
    {
      title: "Italic",
      icon: Italic,
      active: () => editor.isActive("italic"),
      onClick: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      title: "Strikethrough",
      icon: Strikethrough,
      active: () => editor.isActive("strike"),
      onClick: () => editor.chain().focus().toggleStrike().run(),
    },
    {
      title: "Highlight",
      icon: Highlighter,
      active: () => editor.isActive("highlight"),
      onClick: () => editor.chain().focus().toggleHighlight().run(),
    },
    {
      title: "Align Left",
      icon: AlignLeft,
      active: () => editor.isActive({ textAlign: "left" }),
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
    },
    {
      title: "Align Center",
      icon: AlignCenter,
      active: () => editor.isActive({ textAlign: "center" }),
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
    },
    {
      title: "Align Right",
      icon: AlignRight,
      active: () => editor.isActive({ textAlign: "right" }),
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
    },
    {
      title: "Align Justify",
      icon: AlignJustify,
      active: () => editor.isActive({ textAlign: "justify" }),
      onClick: () => editor.chain().focus().setTextAlign("justify").run(),
    },
    {
      title: "Undo",
      icon: RotateCcw,
      active: () => false,
      onClick: () => editor.chain().focus().undo().run(),
    },
    {
      title: "Redo",
      icon: RotateCw,
      active: () => false,
      onClick: () => editor.chain().focus().redo().run(),
    },
    {
      title: "Blockquote",
      icon: Quote,
      active: () => editor.isActive("blockquote"),
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
    },
    {
      title: "Ordered List",
      icon: ListOrdered,
      active: () => editor.isActive("orderedList"),
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      title: "Bullet List",
      icon: List,
      active: () => editor.isActive("bulletList"),
      onClick: () => editor.chain().focus().toggleBulletList().run(),
    },
    {
      title: "Code",
      icon: Code,
      active: () => editor.isActive("code"),
      onClick: () => editor.chain().focus().toggleCode().run(),
    },

    {
      title: "Link",
      icon: Link,
      active: () => editor.isActive("link"), // "link" should be lowercase
      onClick: () => {
        const url = prompt("Enter the URL:"); // Ask user for link
        if (url) {
          editor
            .chain()
            .focus()
            .extendMarkRange("link")
            .setLink({ href: url })
            .run();
        }
      },
    },
  ];

  return (
    <div className="p-2 bg-[#171717] dark:bg-gray-800 rounded shadow">
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {buttons.map(({ title, icon, active, onClick }, index) => (
          <MenuButton
            key={index}
            title={title}
            icon={icon}
            isActive={active()}
            onClick={onClick}
          />
        ))}

        <input
          className="cursor-pointer"
          type="color"
          onInput={(event) =>
            editor.chain().focus().setColor(event.target.value).run()
          }
          value={editor.getAttributes("textStyle").color || ""}
          data-testid="setColor"
        />
      </div>
    </div>
  );
}

export default MenuBar;
