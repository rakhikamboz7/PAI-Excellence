/* eslint-disable no-undef */
"use client"

import React from "react"

import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
} from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { SortableItem } from "./SortableItem"
import { restrictToVerticalAxis } from "@dnd-kit/modifiers"

// eslint-disable-next-line no-unused-vars
const DraggableArea = ({ children, onReorder, id = "droppable" }) => {
  const { isAuthenticated } = useAuth()
  const [items, setItems] = useState([])
  const [activeId, setActiveId] = useState(null)

  // Set up sensors for drag detection
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  useEffect(() => {
    // Convert children to array for dragging
    const childrenArray = React.Children.toArray(children)
    setItems(
      childrenArray.map((child) => ({
        id: child.key,
        content: child,
      })),
    )
  }, [children])

  const handleDragStart = (event) => {
    setActiveId(event.active.id)
    // Add a class to the body to indicate dragging
    document.body.classList.add("dragging")
  }

  const handleDragEnd = (event) => {
    const { active, over } = event
    document.body.classList.remove("dragging")

    if (over && active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)

        const newItems = arrayMove(items, oldIndex, newIndex)

        // Call parent callback with new order
        if (onReorder) {
          onReorder(newItems.map((item) => item.id))
        }

        return newItems
      })
    }

    setActiveId(null)
  }

  const handleDragCancel = () => {
    setActiveId(null)
    document.body.classList.remove("dragging")
  }

  // If not authenticated, just render children without drag functionality
  if (!isAuthenticated) {
    return <div>{children}</div>
  }

  return (
    <div className="relative min-h-[50px]">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext items={items.map((item) => item.id)} strategy={verticalListSortingStrategy}>
          <div className="space-y-4">
            {items.map((item) => (
              <SortableItem key={item.id} id={item.id}>
                {item.content}
              </SortableItem>
            ))}
          </div>
        </SortableContext>

        <DragOverlay adjustScale={true}>
          {activeId ? (
            <div className="opacity-80 shadow-lg rotate-1 border-2 border-blue-500 rounded-lg">
              {items.find((item) => item.id === activeId)?.content}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      {/* Debug info */}
      {process.env.NODE_ENV !== "production" && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-50">
          <div>Drag enabled: {isAuthenticated ? "Yes" : "No"}</div>
          <div>Items: {items.length}</div>
          <div>Active ID: {activeId || "None"}</div>
        </div>
      )}
    </div>
  )
}

export default DraggableArea
