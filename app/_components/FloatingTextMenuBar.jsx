"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
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

// Reusable button component styled with Tailwind CSS
function MenuButton({ onClick, isActive, icon: Icon, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className="rounded p-1 transition-colors duration-200 focus:outline-none text-white"
    >
      <Icon className="h-4" />
    </button>
  );
}

function FloatingTextMenuBar({ editor }) {
  const toolbarRef = useRef(null);
  const defaultPosition = { top: "-9999px", left: "-9999px" };
  const [floatingStyle, setFloatingStyle] = useState({
    opacity: 0,
    top: defaultPosition.top,
    left: defaultPosition.left,
  });

  const updateToolbar = useCallback(() => {
    const domSelection = window.getSelection();
    if (!domSelection || !domSelection.rangeCount) {
      setFloatingStyle({
        opacity: 0,
        top: defaultPosition.top,
        left: defaultPosition.left,
      });
      return;
    }
    const range = domSelection.getRangeAt(0);
    if (range.collapsed || !range.toString().trim()) {
      setFloatingStyle({
        opacity: 0,
        top: defaultPosition.top,
        left: defaultPosition.left,
      });
      return;
    }
    const rect = range.getBoundingClientRect();
    const toolbarHeight = toolbarRef.current
      ? toolbarRef.current.offsetHeight
      : 0;
    // Position the toolbar below the selection.
    const top = rect.bottom + window.scrollY + 8; // 8px offset
    const left =
      rect.left +
      window.scrollX +
      rect.width / 2 -
      (toolbarRef.current ? toolbarRef.current.offsetWidth / 2 : 0);

    // Update the toolbar instantly (no transition on top/left or opacity)
    setFloatingStyle({ opacity: 1, top, left });
  }, [defaultPosition]);

  useEffect(() => {
    if (!editor) return;
    editor.on("selectionUpdate", updateToolbar);
    return () => {
      editor.off("selectionUpdate", updateToolbar);
    };
  }, [editor, updateToolbar]);

  useEffect(() => {
    const hideToolbarOnClick = () => {
      const selection = window.getSelection();
      if (!selection || selection.toString().trim() === "") {
        setFloatingStyle({
          opacity: 0,
          top: defaultPosition.top,
          left: defaultPosition.left,
        });
      }
    };

    document.addEventListener("click", hideToolbarOnClick);
    return () => {
      document.removeEventListener("click", hideToolbarOnClick);
    };
  }, [defaultPosition]);

  if (!editor) {
    return null;
  }

  const buttons = [
    {
      title: "Heading 1",
      icon: Heading1,
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
      title: "Blockquote",
      icon: Quote,
      active: () => editor.isActive("blockquote"),
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
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
      active: () => editor.isActive("link"),
      onClick: () => {
        const url = prompt("Enter the URL:");
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
  ];

  return (
    <div
      ref={toolbarRef}
      style={{
        position: "absolute",
        top: floatingStyle.top,
        left: floatingStyle.left,
        opacity: floatingStyle.opacity,
        // No transition: position and opacity update instantly.
        zIndex: 10,
      }}
      className="p-2 bg-secondary mx-2 rounded-xl shadow flex flex-wrap justify-center items-center"
    >
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
        className="cursor-pointer w-6 h-4"
        type="color"
        onInput={(event) =>
          editor.chain().focus().setColor(event.target.value).run()
        }
        value={editor.getAttributes("textStyle").color || ""}
        data-testid="setColor"
      />
    </div>
  );
}

export default FloatingTextMenuBar;
