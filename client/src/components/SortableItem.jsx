"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { GripVertical } from "lucide-react"
import clsx from "clsx"

export function SortableItem({ id, children }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isDragging ? 50 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx(
        "relative group bg-white rounded-md shadow transition-shadow",
        isDragging && "shadow-xl"
      )}
    >
      {/* Drag handle */}
      <div
        {...attributes}
        {...listeners}
        className={clsx(
          "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full p-2 cursor-grab",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        )}
      >
        <GripVertical className="text-gray-400 hover:text-gray-600" />
      </div>

      {children}
    </div>
  )
}
