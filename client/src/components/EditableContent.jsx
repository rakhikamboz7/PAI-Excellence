"use client"

import { useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import { AuthContext } from "../contexts/AuthContext"
import { useContent } from "../contexts/ContentContext"
import { useTheme } from "../contexts/ThemeContext"
import { Button } from "./ui/Button"
import { Edit3, Eye, EyeOff, GripVertical, Trash2 } from "lucide-react"

const EditableComponent = ({ componentId, componentType, index, children, onEdit, className = "" }) => {
  const { isAuthenticated } = AuthContext
  const {
    isLiveEditing,
    currentPage,
    toggleComponentVisibility,
    isComponentVisible,
    removeComponent,
    getComponentContent,
  } = useContent()
  const { currentTheme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  // Get theme-specific classes
  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return {
          overlay: "bg-blue-500 bg-opacity-20 border-blue-500",
          button: "bg-blue-600 hover:bg-blue-700",
        }
      case "purple":
        return {
          overlay: "bg-purple-500 bg-opacity-20 border-purple-500",
          button: "bg-purple-600 hover:bg-purple-700",
        }
      case "green":
        return {
          overlay: "bg-green-500 bg-opacity-20 border-green-500",
          button: "bg-green-600 hover:bg-green-700",
        }
      case "dark":
        return {
          overlay: "bg-gray-500 bg-opacity-20 border-gray-500",
          button: "bg-gray-600 hover:bg-gray-700",
        }
      default:
        return {
          overlay: "bg-orange-500 bg-opacity-20 border-orange-500",
          button: "bg-orange-600 hover:bg-orange-700",
        }
    }
  }

  const themeClasses = getThemeClasses()
  const isVisible = isComponentVisible(currentPage, componentId)

  if (!isAuthenticated || !isLiveEditing) {
    return isVisible ? <div className={className}>{children}</div> : null
  }

  const handleEdit = () => {
    const componentContent = getComponentContent(currentPage, componentId)
    onEdit(componentId, componentContent)
  }

  const handleToggleVisibility = () => {
    toggleComponentVisibility(currentPage, componentId)
  }

  const handleRemove = () => {
    if (window.confirm("Are you sure you want to remove this component?")) {
      removeComponent(currentPage, componentId)
    }
  }

  return (
    <Draggable draggableId={componentId} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`relative ${className} ${!isVisible ? "opacity-50" : ""} ${
            snapshot.isDragging ? "z-50 rotate-2 scale-105" : ""
          } transition-all duration-200`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Edit Overlay */}
          {(isHovered || snapshot.isDragging) && (
            <div
              className={`absolute inset-0 ${themeClasses.overlay} border-2 border-dashed rounded-lg z-40 pointer-events-none`}
            >
              <div className="absolute top-2 left-2 bg-white rounded-lg shadow-lg p-1 pointer-events-auto">
                <span className="text-xs font-medium text-gray-700 px-2">
                  {componentType.charAt(0).toUpperCase() + componentType.slice(1)}
                </span>
              </div>
            </div>
          )}

          {/* Control Buttons */}
          {(isHovered || snapshot.isDragging) && (
            <div className="absolute top-2 right-2 z-50 flex gap-1">
              {/* Drag Handle */}
              <div
                {...provided.dragHandleProps}
                className="bg-white rounded-lg shadow-lg p-2 cursor-grab active:cursor-grabbing hover:bg-gray-50 transition-colors"
                title="Drag to reorder"
              >
                <GripVertical size={14} className="text-gray-600" />
              </div>

              {/* Edit Button */}
              <Button
                onClick={handleEdit}
                className="bg-white hover:bg-gray-50 text-gray-700 p-2 rounded-lg shadow-lg transition-colors"
                title="Edit component"
              >
                <Edit3 size={14} />
              </Button>

              {/* Visibility Toggle */}
              <Button
                onClick={handleToggleVisibility}
                className={`p-2 rounded-lg shadow-lg transition-colors ${
                  isVisible ? "bg-white hover:bg-gray-50 text-green-600" : "bg-white hover:bg-gray-50 text-gray-400"
                }`}
                title={isVisible ? "Hide component" : "Show component"}
              >
                {isVisible ? <Eye size={14} /> : <EyeOff size={14} />}
              </Button>

              {/* Remove Button */}
              <Button
                onClick={handleRemove}
                className="bg-white hover:bg-red-50 text-red-600 p-2 rounded-lg shadow-lg transition-colors"
                title="Remove component"
              >
                <Trash2 size={14} />
              </Button>
            </div>
          )}

          {/* Component Content */}
          <div className={!isVisible ? "pointer-events-none" : ""}>{children}</div>
        </div>
      )}
    </Draggable>
  )
}

export default EditableComponent
