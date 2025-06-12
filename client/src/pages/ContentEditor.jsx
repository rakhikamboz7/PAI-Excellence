"use client"

import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useContent } from "../contexts/ContentContext"
import { useTheme } from "../contexts/ThemeContext"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/card"
import RichTextEditor from "../components/RichTextEditor"
import { Edit3, Eye, EyeOff, GripVertical, Save, X, Plus, Trash2, RotateCcw } from "lucide-react"

const ContentEditor = () => {
  const {
    content,
    isEditing,
    selectedComponent,
    setIsEditing,
    setSelectedComponent,
    updateComponent,
    reorderComponents,
    toggleComponentVisibility,
    getOrderedComponents,
    resetToDefault,
  } = useContent()

  const { currentTheme } = useTheme()
  const [editingContent, setEditingContent] = useState({})

  // Get theme-specific classes
  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return {
          background: "bg-blue-light",
          surface: "bg-white",
          primary: "bg-blue-primary hover:bg-blue-600",
          text: "text-blue-text",
          accent: "text-blue-primary",
          border: "border-blue-200",
        }
      case "purple":
        return {
          background: "bg-purple-light",
          surface: "bg-white",
          primary: "bg-purple-primary hover:bg-purple-600",
          text: "text-purple-text",
          accent: "text-purple-primary",
          border: "border-purple-200",
        }
      case "green":
        return {
          background: "bg-green-light",
          surface: "bg-white",
          primary: "bg-green-primary hover:bg-green-600",
          text: "text-green-text",
          accent: "text-green-primary",
          border: "border-green-200",
        }
      case "dark":
        return {
          background: "bg-dark-light",
          surface: "bg-dark-dark",
          primary: "bg-dark-primary hover:bg-gray-700",
          text: "text-dark-text",
          accent: "text-dark-primary",
          border: "border-gray-600",
        }
      default:
        return {
          background: "bg-orange-50",
          surface: "bg-white",
          primary: "bg-orange-600 hover:bg-orange-700",
          text: "text-gray-900",
          accent: "text-orange-600",
          border: "border-orange-200",
        }
    }
  }

  const themeClasses = getThemeClasses()

  const handleDragEnd = (result) => {
    if (!result.destination) return

    const orderedComponents = getOrderedComponents()
    const newOrder = Array.from(orderedComponents.map((comp) => comp.id))
    const [reorderedItem] = newOrder.splice(result.source.index, 1)
    newOrder.splice(result.destination.index, 0, reorderedItem)

    reorderComponents(newOrder)
  }

  const handleEditComponent = (componentId) => {
    setSelectedComponent(componentId)
    setEditingContent(content[componentId].content)
    setIsEditing(true)
  }

  const handleSaveComponent = () => {
    if (selectedComponent) {
      updateComponent(selectedComponent, editingContent)
      setIsEditing(false)
      setSelectedComponent(null)
      setEditingContent({})
    }
  }

  const handleCancelEdit = () => {
    setIsEditing(false)
    setSelectedComponent(null)
    setEditingContent({})
  }

  const handleContentChange = (field, value) => {
    setEditingContent((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleArrayFieldChange = (field, index, value) => {
    setEditingContent((prev) => ({
      ...prev,
      [field]: prev[field].map((item, i) => (i === index ? value : item)),
    }))
  }

  const addArrayItem = (field, defaultValue) => {
    setEditingContent((prev) => ({
      ...prev,
      [field]: [...(prev[field] || []), defaultValue],
    }))
  }

  const removeArrayItem = (field, index) => {
    setEditingContent((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }))
  }

  const renderComponentEditor = () => {
    if (!selectedComponent || !isEditing) return null

    const componentType = content[selectedComponent].type
    const componentContent = editingContent

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <Card className={`${themeClasses.surface} max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-2xl font-bold ${themeClasses.text}`}>
                Edit {componentType.charAt(0).toUpperCase() + componentType.slice(1)} Component
              </h2>
              <div className="flex gap-2">
                <Button
                  onClick={handleSaveComponent}
                  className={`${themeClasses.primary} text-white px-4 py-2 rounded-lg flex items-center gap-2`}
                >
                  <Save size={16} />
                  Save
                </Button>
                <Button
                  onClick={handleCancelEdit}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <X size={16} />
                  Cancel
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              {componentType === "hero" && (
                <>
                  <div>
                    <label className={`block ${themeClasses.text} font-medium mb-2`}>Title</label>
                    <input
                      type="text"
                      value={componentContent.title || ""}
                      onChange={(e) => handleContentChange("title", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className={`block ${themeClasses.text} font-medium mb-2`}>Subtitle</label>
                    <input
                      type="text"
                      value={componentContent.subtitle || ""}
                      onChange={(e) => handleContentChange("subtitle", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className={`block ${themeClasses.text} font-medium mb-2`}>Description</label>
                    <RichTextEditor
                      value={componentContent.description || ""}
                      onChange={(value) => handleContentChange("description", value)}
                    />
                  </div>
                  <div>
                    <label className={`block ${themeClasses.text} font-medium mb-2`}>Button Text</label>
                    <input
                      type="text"
                      value={componentContent.buttonText || ""}
                      onChange={(e) => handleContentChange("buttonText", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className={`block ${themeClasses.text} font-medium mb-2`}>Button Link</label>
                    <input
                      type="text"
                      value={componentContent.buttonLink || ""}
                      onChange={(e) => handleContentChange("buttonLink", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </>
              )}

              {componentType === "aboutUs" && (
                <>
                  <div>
                    <label className={`block ${themeClasses.text} font-medium mb-2`}>Title</label>
                    <input
                      type="text"
                      value={componentContent.title || ""}
                      onChange={(e) => handleContentChange("title", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className={`block ${themeClasses.text} font-medium mb-2`}>Description</label>
                    <RichTextEditor
                      value={componentContent.description || ""}
                      onChange={(value) => handleContentChange("description", value)}
                    />
                  </div>
                  <div>
                    <label className={`block ${themeClasses.text} font-medium mb-2`}>Features</label>
                    {(componentContent.features || []).map((feature, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => handleArrayFieldChange("features", index, e.target.value)}
                          className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        <Button
                          onClick={() => removeArrayItem("features", index)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    ))}
                    <Button
                      onClick={() => addArrayItem("features", "")}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg flex items-center gap-2"
                    >
                      <Plus size={16} />
                      Add Feature
                    </Button>
                  </div>
                </>
              )}

              {componentType === "instructor" && (
                <>
                  <div>
                    <label className={`block ${themeClasses.text} font-medium mb-2`}>Title</label>
                    <input
                      type="text"
                      value={componentContent.title || ""}
                      onChange={(e) => handleContentChange("title", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className={`block ${themeClasses.text} font-medium mb-2`}>Name</label>
                    <input
                      type="text"
                      value={componentContent.name || ""}
                      onChange={(e) => handleContentChange("name", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className={`block ${themeClasses.text} font-medium mb-2`}>Bio</label>
                    <RichTextEditor
                      value={componentContent.bio || ""}
                      onChange={(value) => handleContentChange("bio", value)}
                    />
                  </div>
                  <div>
                    <label className={`block ${themeClasses.text} font-medium mb-2`}>Image URL</label>
                    <input
                      type="text"
                      value={componentContent.image || ""}
                      onChange={(e) => handleContentChange("image", e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className={`block ${themeClasses.text} font-medium mb-2`}>Credentials</label>
                    {(componentContent.credentials || []).map((credential, index) => (
                      <div key={index} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={credential}
                          onChange={(e) => handleArrayFieldChange("credentials", index, e.target.value)}
                          className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                        <Button
                          onClick={() => removeArrayItem("credentials", index)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    ))}
                    <Button
                      onClick={() => addArrayItem("credentials", "")}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg flex items-center gap-2"
                    >
                      <Plus size={16} />
                      Add Credential
                    </Button>
                  </div>
                </>
              )}

              {/* Add more component types as needed */}
            </div>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${themeClasses.background} py-8 px-4`}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className={`text-4xl font-bold ${themeClasses.text} mb-2`}>Content Management</h1>
            <p className={`${themeClasses.text} opacity-70`}>
              Drag and drop to reorder components, click to edit content
            </p>
          </div>
          <div className="flex gap-4">
            <Button
              onClick={resetToDefault}
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <RotateCcw size={16} />
              Reset to Default
            </Button>
          </div>
        </div>

        {/* Component List */}
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="components">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
                {getOrderedComponents().map((component, index) => (
                  <Draggable key={component.id} draggableId={component.id} index={index}>
                    {(provided, snapshot) => (
                      <Card
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        className={`${themeClasses.surface} p-6 ${
                          snapshot.isDragging ? "shadow-lg rotate-2" : "shadow-sm"
                        } ${!component.isVisible ? "opacity-50" : ""} transition-all duration-200`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div {...provided.dragHandleProps} className="cursor-grab active:cursor-grabbing">
                              <GripVertical className="text-gray-400 hover:text-gray-600" size={20} />
                            </div>
                            <div>
                              <h3 className={`text-lg font-semibold ${themeClasses.text} capitalize`}>
                                {component.type.replace(/([A-Z])/g, " $1").trim()}
                              </h3>
                              <p className={`text-sm ${themeClasses.text} opacity-70`}>
                                Order: {component.order + 1} • {component.isVisible ? "Visible" : "Hidden"}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              onClick={() => toggleComponentVisibility(component.id)}
                              className={`p-2 rounded-lg transition-colors ${
                                component.isVisible
                                  ? "text-green-600 hover:bg-green-50"
                                  : "text-gray-400 hover:bg-gray-50"
                              }`}
                              title={component.isVisible ? "Hide component" : "Show component"}
                            >
                              {component.isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
                            </Button>
                            <Button
                              onClick={() => handleEditComponent(component.id)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Edit component"
                            >
                              <Edit3 size={16} />
                            </Button>
                          </div>
                        </div>
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {/* Component Editor Modal */}
        {renderComponentEditor()}
      </div>
    </div>
  )
}

export default ContentEditor
