"use client";

import React from "react";
import { useSlate } from "slate-react";
import { Editor, Transforms } from "slate";
import {
  Bold, Italic, Underline, Strikethrough, List, ListOrdered, AlignLeft,
  AlignCenter, AlignRight, AlignJustify, Text
} from "lucide-react"; // ✅ Lucide Icons

// --- Helper Functions ---

function isMarkActive(editor, format) {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
}

function toggleMark(editor, format) {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
}

function isBlockActive(editor, format) {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === format,
  });
  return !!match;
}

function toggleBlock(editor, format) {
  const isActive = isBlockActive(editor, format);
  Transforms.setNodes(
    editor,
    { type: isActive ? "paragraph" : format },
    { match: (n) => Editor.isBlock(editor, n) }
  );
}

// --- Toolbar Button Component ---
function ToolbarButton({ format, type, icon: Icon, title }) {
  const editor = useSlate();
  const isActive =
    type === "mark" ? isMarkActive(editor, format) : isBlockActive(editor, format);

  return (
    <button
      onMouseDown={(event) => {
        event.preventDefault();
        type === "mark" ? toggleMark(editor, format) : toggleBlock(editor, format);
      }}
      title={title}
      className={`flex items-center justify-center p-2 rounded-md transition 
        ${isActive ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"}`}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
}

// --- Google Docs–like Toolbar ---
function GoogleDocsToolbar() {
  return (
    <div className="flex items-center space-x-2 px-4 py-2 bg-white shadow border rounded-md">
      {/* Inline Formatting */}
      <ToolbarButton format="bold" type="mark" icon={Bold} title="Bold" />
      <ToolbarButton format="italic" type="mark" icon={Italic} title="Italic" />
      <ToolbarButton format="underline" type="mark" icon={Underline} title="Underline" />
      <ToolbarButton format="strikethrough" type="mark" icon={Strikethrough} title="Strikethrough" />

      {/* Divider */}
      <div className="w-px h-6 bg-gray-300 mx-2"></div>

      {/* Lists */}
      <ToolbarButton format="bulleted-list" type="block" icon={List} title="Bullet List" />
      <ToolbarButton format="numbered-list" type="block" icon={ListOrdered} title="Numbered List" />

      {/* Divider */}
      <div className="w-px h-6 bg-gray-300 mx-2"></div>

      {/* Text Alignment */}
      <ToolbarButton format="align-left" type="block" icon={AlignLeft} title="Align Left" />
      <ToolbarButton format="align-center" type="block" icon={AlignCenter} title="Align Center" />
      <ToolbarButton format="align-right" type="block" icon={AlignRight} title="Align Right" />
      <ToolbarButton format="align-justify" type="block" icon={AlignJustify} title="Justify" />

      {/* Divider */}
      <div className="w-px h-6 bg-gray-300 mx-2"></div>

      {/* Font Style */}
      <button className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 transition">
        <Text className="w-5 h-5" title="Font Options" />
      </button>
    </div>
  );
}

export default GoogleDocsToolbar;
