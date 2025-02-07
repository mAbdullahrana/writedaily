"use client";
import React, { useCallback, useState, useMemo } from "react";
import { createEditor, Editor, Transforms, Text, Range } from "slate";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import { withHistory } from "slate-history";



// Define initial editor content
const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "Start writing here..." }],
  },
];

// Custom Editor Functions
const CustomEditor = {
  isMarkActive(editor, format) {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  },

  toggleMark(editor, format) {
    const isActive = CustomEditor.isMarkActive(editor, format);
    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  },

  isBlockActive(editor, format) {
    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === format,
    });
    return !!match;
  },

  toggleBlock(editor, format) {
    const isActive = CustomEditor.isBlockActive(editor, format);
    Transforms.setNodes(
      editor,
      { type: isActive ? "paragraph" : format },
      { match: (n) => Editor.isBlock(editor, n) }
    );
  },

  toggleLink(editor, url) {
    const { selection } = editor;
    if (!selection) return;

    const [match] = Editor.nodes(editor, {
      match: (n) => n.type === "link",
    });

    if (match) {
      Transforms.unwrapNodes(editor, { match: (n) => n.type === "link" });
      return;
    }

    const isCollapsed = Range.isCollapsed(selection);
    const link = {
      type: "link",
      url,
      children: isCollapsed ? [{ text: url }] : [],
    };

    if (isCollapsed) {
      Transforms.insertNodes(editor, link);
    } else {
      Transforms.wrapNodes(editor, link, { split: true });
      Transforms.collapse(editor, { edge: "end" });
    }
  },
};

// Toolbar Buttons
const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={CustomEditor.isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        CustomEditor.toggleMark(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={CustomEditor.isBlockActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        CustomEditor.toggleBlock(editor, format);
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};

const LinkButton = () => {
  const editor = useSlate();
  const [url, setUrl] = useState("");

  const handleClick = () => {
    const enteredUrl = window.prompt("Enter the URL:");
    if (enteredUrl) {
      CustomEditor.toggleLink(editor, enteredUrl);
    }
  };

  return (
    <Button onMouseDown={handleClick}>
      <Icon>link</Icon>
    </Button>
  );
};

// Render Elements
const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>;
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>;
    case "heading-three":
      return <h3 {...attributes}>{children}</h3>;
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>;
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>;
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>;
    case "list-item":
      return <li {...attributes}>{children}</li>;
    case "link":
      return (
        <a {...attributes} href={element.url}>
          {children}
        </a>
      );
    case "code":
      return (
        <pre {...attributes}>
          <code>{children}</code>
        </pre>
      );
    default:
      return <p {...attributes}>{children}</p>;
  }
};

// Render Leaf Nodes (Text Formatting)
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  if (leaf.strikethrough) {
    children = <s>{children}</s>;
  }
  if (leaf.code) {
    children = <code>{children}</code>;
  }
  return <span {...attributes}>{children}</span>;
};

// Main Editor Component
const TextEditor = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [value, setValue] = useState(initialValue);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  return (
    <Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue)}>
      <Toolbar>
        <MarkButton format="bold" icon="format_bold" />
        <MarkButton format="italic" icon="format_italic" />
        <MarkButton format="underline" icon="format_underlined" />
        <MarkButton format="strikethrough" icon="format_strikethrough" />
        <MarkButton format="code" icon="code" />
        <BlockButton format="heading-one" icon="looks_one" />
        <BlockButton format="heading-two" icon="looks_two" />
        <BlockButton format="heading-three" icon="looks_3" />
        <BlockButton format="block-quote" icon="format_quote" />
        <BlockButton format="numbered-list" icon="format_list_numbered" />
        <BlockButton format="bulleted-list" icon="format_list_bulleted" />
        <LinkButton />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some text..."
        spellCheck
        autoFocus
        onKeyDown={(event) => {
          if (!event.ctrlKey) return;

          switch (event.key) {
            case "b": {
              event.preventDefault();
              CustomEditor.toggleMark(editor, "bold");
              break;
            }
            case "i": {
              event.preventDefault();
              CustomEditor.toggleMark(editor, "italic");
              break;
            }
            case "u": {
              event.preventDefault();
              CustomEditor.toggleMark(editor, "underline");
              break;
            }
            case "`": {
              event.preventDefault();
              CustomEditor.toggleMark(editor, "code");
              break;
            }
            case "1": {
              event.preventDefault();
              CustomEditor.toggleBlock(editor, "heading-one");
              break;
            }
            case "2": {
              event.preventDefault();
              CustomEditor.toggleBlock(editor, "heading-two");
              break;
            }
            case "3": {
              event.preventDefault();
              CustomEditor.toggleBlock(editor, "heading-three");
              break;
            }
            default:
              break;
          }
        }}
      />
    </Slate>
  );
};

export default TextEditor;


// Toolbar.js
 const Toolbar = ({ children }) => (
  <div style={{ borderBottom: "1px solid #ddd", padding: "8px" }}>{children}</div>
);

 const Button = ({ active, onMouseDown, children }) => (
  <button
    style={{
      backgroundColor: active ? "#ddd" : "transparent",
      border: "none",
      padding: "8px",
      cursor: "pointer",
    }}
    onMouseDown={onMouseDown}
  >
    {children}
  </button>
);

// Icons.js
 const Icon = ({ children }) => <span>{children}</span>;