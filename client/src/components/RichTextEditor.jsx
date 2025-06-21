"use client"

import { useCallback, useMemo, useState } from "react"
import { createEditor, Transforms, Editor, Text } from "slate"
import { Slate, Editable, withReact, useSlate } from "slate-react"
import { withHistory } from "slate-history"
import { useTheme } from "../contexts/ThemeContext"
import { Bold, Italic, Underline, List, ListOrdered, Quote, Heading1, Heading2 } from "lucide-react"

// Define custom types for Slate
const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
}

const LIST_TYPES = ["numbered-list", "bulleted-list"]

const RichTextEditor = ({ value, onChange, placeholder = "Start typing..." }) => {
  const { currentTheme } = useTheme()
  const [editor] = useState(() => withHistory(withReact(createEditor())))

  // Convert string value to Slate value
  const slateValue = useMemo(() => {
    if (typeof value === "string") {
      if (!value.trim()) {
        return [
          {
            type: "paragraph",
            children: [{ text: "" }],
          },
        ]
      }

      // Simple conversion from HTML/text to Slate format
      const paragraphs = value.split("\n\n").filter((p) => p.trim())
      return paragraphs.map((paragraph) => ({
        type: "paragraph",
        children: [{ text: paragraph.replace(/<[^>]*>/g, "") }],
      }))
    }
    return value || [{ type: "paragraph", children: [{ text: "" }] }]
  }, [value])

  const renderElement = useCallback((props) => <Element {...props} />, [])
  const renderLeaf = useCallback((props) => <Leaf {...props} />, [])

  const handleChange = (newValue) => {
    // Convert Slate value back to string
    const content = newValue.map((n) => Node.string(n)).join("\n\n")
    onChange(content)
  }

  // Get theme-specific classes
  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return "border-blue-200 focus:ring-blue-500"
      case "purple":
        return "border-purple-200 focus:ring-purple-500"
      case "green":
        return "border-green-200 focus:ring-green-500"
      case "dark":
        return "border-gray-600 focus:ring-gray-500 bg-gray-800 text-white"
      default:
        return "border-orange-200 focus:ring-orange-500"
    }
  }

  const themeClasses = getThemeClasses()

  return (
    <div className="rich-text-editor">
      <Slate editor={editor} initialValue={slateValue} onChange={handleChange}>
        <Toolbar />
        <div className={`border rounded-lg ${themeClasses}`}>
          <Editable
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder={placeholder}
            spellCheck
            autoFocus
            onKeyDown={(event) => {
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event)) {
                  event.preventDefault()
                  const mark = HOTKEYS[hotkey]
                  toggleMark(editor, mark)
                }
              }
            }}
            className="p-4 min-h-[200px] focus:outline-none"
          />
        </div>
      </Slate>
    </div>
  )
}

const Toolbar = () => {
  return (
    <div className="border border-gray-300 border-b-0 rounded-t-lg bg-gray-50 p-2 flex gap-1 flex-wrap">
      <MarkButton format="bold" icon={<Bold size={16} />} />
      <MarkButton format="italic" icon={<Italic size={16} />} />
      <MarkButton format="underline" icon={<Underline size={16} />} />
      <div className="w-px h-6 bg-gray-300 mx-1" />
      <BlockButton format="heading-one" icon={<Heading1 size={16} />} />
      <BlockButton format="heading-two" icon={<Heading2 size={16} />} />
      <div className="w-px h-6 bg-gray-300 mx-1" />
      <BlockButton format="bulleted-list" icon={<List size={16} />} />
      <BlockButton format="numbered-list" icon={<ListOrdered size={16} />} />
      <BlockButton format="block-quote" icon={<Quote size={16} />} />
    </div>
  )
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <button
      type="button"
      className={`p-2 rounded hover:bg-gray-200 transition-colors ${isMarkActive(editor, format) ? "bg-gray-300" : ""}`}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      {icon}
    </button>
  )
}

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <button
      type="button"
      className={`p-2 rounded hover:bg-gray-200 transition-colors ${
        isBlockActive(editor, format) ? "bg-gray-300" : ""
      }`}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      {icon}
    </button>
  )
}

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return (
        <blockquote {...attributes} className="border-l-4 border-gray-300 pl-4 italic">
          {children}
        </blockquote>
      )
    case "bulleted-list":
      return (
        <ul {...attributes} className="list-disc list-inside">
          {children}
        </ul>
      )
    case "heading-one":
      return (
        <h1 {...attributes} className="text-2xl font-bold">
          {children}
        </h1>
      )
    case "heading-two":
      return (
        <h2 {...attributes} className="text-xl font-semibold">
          {children}
        </h2>
      )
    case "list-item":
      return <li {...attributes}>{children}</li>
    case "numbered-list":
      return (
        <ol {...attributes} className="list-decimal list-inside">
          {children}
        </ol>
      )
    default:
      return (
        <p {...attributes} className="mb-2">
          {children}
        </p>
      )
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

// Helper functions
const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const isBlockActive = (editor, format) => {
  const { selection } = editor
  if (!selection) return false

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => !Editor.isEditor(n) && Element.isElement && n.type === format,
    }),
  )

  return !!match
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: (n) => !Editor.isEditor(n) && Element.isElement(n) && LIST_TYPES.includes(n.type),
    split: true,
  })

  let newProperties
  if (isActive) {
    newProperties = {
      type: "paragraph",
    }
  } else if (isList) {
    newProperties = {
      type: "list-item",
    }
  } else {
    newProperties = {
      type: format,
    }
  }

  Transforms.setNodes(editor, newProperties)

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const isHotkey = (hotkey, event) => {
  const keys = hotkey.split("+")
  const modKey = keys.includes("mod")
  const ctrlKey = keys.includes("ctrl")
  const altKey = keys.includes("alt")
  const shiftKey = keys.includes("shift")
  const key = keys[keys.length - 1]

  return (
    (!modKey || event.ctrlKey || event.metaKey) &&
    (!ctrlKey || event.ctrlKey) &&
    (!altKey || event.altKey) &&
    (!shiftKey || event.shiftKey) &&
    event.key.toLowerCase() === key.toLowerCase()
  )
}

// Helper to convert Slate nodes to string
const Node = {
  string: (node) => {
    if (Text.isText(node)) {
      return node.text
    } else {
      return node.children.map((n) => Node.string(n)).join("")
    }
  },
}

export default RichTextEditor
