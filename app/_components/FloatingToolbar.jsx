// FloatingToolbar.js
"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Editor, Range } from "slate";
import { useSlate } from "slate-react";


// Helper functions rewritten as function declarations
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

// FloatingToolbar component rewritten as a function declaration
function FloatingToolbar() {
  const editor = useSlate();
  const toolbarRef = useRef(null);
  const [style, setStyle] = useState({ opacity: 0, top: 0, left: 0 });

  // Update the toolbar position based on the current selection.
  const updateToolbar = useCallback(
    function () {
      const domSelection = window.getSelection();
      if (!domSelection || !domSelection.rangeCount) {
        setStyle((prev) => ({ ...prev, opacity: 0 }));
        return;
      }

      const range = domSelection.getRangeAt(0);
      // If the selection is collapsed, hide the toolbar.
      if (Range.isCollapsed(editor.selection)) {
        setStyle((prev) => ({ ...prev, opacity: 0 }));
        return;
      }

      // Get the bounding rectangle of the selection.
      const rect = range.getBoundingClientRect();

      // Calculate toolbar position (you can adjust these values as needed).
      const toolbarHeight = toolbarRef.current
        ? toolbarRef.current.offsetHeight
        : 0;
      const top =
        rect.top + window.pageYOffset - toolbarHeight - 8;
      const left =
        rect.left +
        window.pageXOffset +
        rect.width / 2 -
        (toolbarRef.current ? toolbarRef.current.offsetWidth / 2 : 0);

      setStyle({ opacity: 1, top, left });
    },
    [editor.selection]
  );

  // Listen for selection changes and update the toolbar.
  useEffect(
    function () {
      updateToolbar();
    },
    [editor.selection, updateToolbar]
  );

  // Hide the toolbar if the editor loses focus.
  useEffect(
    function () {
      function handleMouseDown(event) {
        if (toolbarRef.current && !toolbarRef.current.contains(event.target)) {
          setStyle((prev) => ({ ...prev, opacity: 0 }));
        }
      }

      document.addEventListener("mousedown", handleMouseDown);
      return () =>
        document.removeEventListener("mousedown", handleMouseDown);
    },
    []
  );

  return (
    <div
      ref={toolbarRef}
      style={{
        position: "absolute",
        zIndex: 1000,
        top: style.top,
        left: style.left,
        opacity: style.opacity,
        transition: "opacity 0.2s, top 0.2s, left 0.2s",
      }}
      className="flex items-center p-2 bg-gray-100 dark:bg-gray-700 rounded shadow"
    >
      {/* Bold Button */}
      <button
        onMouseDown={function (event) {
          event.preventDefault();
          toggleMark(editor, "bold");
        }}
        className={`px-2 py-1 rounded transition-colors duration-200 focus:outline-none ${
          isMarkActive(editor, "bold")
            ? "bg-slate-800 text-white"
            : "bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200"
        }`}
        title="Bold"
      >
        B
      </button>

      {/* Italic Button */}
      <button
        onMouseDown={function (event) {
          event.preventDefault();
          toggleMark(editor, "italic");
        }}
        className={`ml-2 px-2 py-1 rounded transition-colors duration-200 focus:outline-none ${
          isMarkActive(editor, "italic")
            ? "bg-slate-800 text-white"
            : "bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200"
        }`}
        title="Italic"
      >
        I
      </button>

      {/* Underline Button */}
      <button
        onMouseDown={function (event) {
          event.preventDefault();
          toggleMark(editor, "underline");
        }}
        className={`ml-2 px-2 py-1 rounded transition-colors duration-200 focus:outline-none ${
          isMarkActive(editor, "underline")
            ? "bg-slate-800 text-white"
            : "bg-gray-200 text-gray-800 dark:bg-gray-600 dark:text-gray-200"
        }`}
        title="Underline"
      >
        U
      </button>
    </div>
  );
}

export default FloatingToolbar;
