"use client"

import { useState } from "react"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { useContent } from "../../contexts/ContentContext"
import { useTheme } from "../../contexts/ThemeContext"
import { Card } from "../ui/card"
import { Button } from "../ui/Button"
import ComponentEditor from "./ComponentEditor"
import {
  Edit3,
  Eye,
  EyeOff,
  GripVertical,
  Trash2,
  Plus,
  RotateCcw,
  Monitor,
  Smartphone,
  Tablet,
  Layout,
} from "lucide-react"
import { reorderComponents } from "../../utils/contentUtils" // Declare the reorderComponents variable

const PageEditor = () => {
  const {
    currentPage,
    setCurrentPage,
    getOrderedComponents,
    getAvailablePages,
    toggleComponentVisibility,
    removeComponent,
    resetToDefault,
    addComponent,
    viewportSize,
    setViewportSize,
    previewMode,
    setPreviewMode,
  } = useContent()
  const { currentTheme } = useTheme()
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [componentContent, setComponentContent] = useState(null)
  const [showAddComponent, setShowAddComponent] = useState(false)

  const pages = getAvailablePages()
  const components = getOrderedComponents(currentPage)

  // Get theme-specific classes
  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return {
          primary: "bg-blue-600 hover:bg-blue-700",
          secondary: "bg-blue-100 text-blue-800",
          surface: "bg-white",
          text: "text-blue-900",
          border: "border-blue-200",
          highlight: "bg-blue-50",
        }
      case "purple":
        return {
          primary: "bg-purple-600 hover:bg-purple-700",
          secondary: "bg-purple-100 text-purple-800",
          surface: "bg-white",
          text: "text-purple-900",
          border: "border-purple-200",
          highlight: "bg-purple-50",
        }
      case "green":
        return {
          primary: "bg-green-600 hover:bg-green-700",
          secondary: "bg-green-100 text-green-800",
          surface: "bg-white",
          text: "text-green-900",
          border: "border-green-200",
          highlight: "bg-green-50",
        }
      case "dark":
        return {
          primary: "bg-gray-700 hover:bg-gray-800",
          secondary: "bg-gray-800 text-gray-200",
          surface: "bg-gray-900",
          text: "text-gray-100",
          border: "border-gray-700",
          highlight: "bg-gray-800",
        }
      default:
        return {
          primary: "bg-orange-600 hover:bg-orange-700",
          secondary: "bg-orange-100 text-orange-800",
          surface: "bg-white",
          text: "text-gray-900",
          border: "border-orange-200",
          highlight: "bg-orange-50",
        }
    }
  }

  const themeClasses = getThemeClasses()

  const handleDragEnd = (result) => {
    if (!result.destination) return

    const items = Array.from(components)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    const newOrder = items.map((item) => item.id)
    reorderComponents(currentPage, newOrder)
  }

  const handleEditComponent = (component) => {
    setSelectedComponent(component.id)
    setComponentContent(component.content)
  }

  const handleCloseEditor = () => {
    setSelectedComponent(null)
    setComponentContent(null)
  }

  const componentTypes = [
    { type: "hero", label: "Hero Section" },
    { type: "aboutUs", label: "About Us" },
    { type: "instructor", label: "Instructor" },
    { type: "studentGains", label: "Student Gains" },
    { type: "batches", label: "Batches" },
    { type: "mission", label: "Mission" },
    { type: "programDetails", label: "Program Details" },
    { type: "header", label: "Header" },
    { type: "practicalAI", label: "Practical AI" },
    { type: "moreCourses", label: "More Courses" },
    { type: "contactForm", label: "Contact Form" },
    { type: "featuredConversation", label: "Featured Conversation" },
    { type: "podcastLibrary", label: "Podcast Library" },
    { type: "mediaAndPress", label: "Media and Press" },
    { type: "stats", label: "Stats" },
    { type: "upcomingEvents", label: "Upcoming Events" },
    { type: "pastEvents", label: "Past Events" },
    { type: "eventGallery", label: "Event Gallery" },
    { type: "eventRegistration", label: "Event Registration" },
    { type: "featuredPosts", label: "Featured Posts" },
    { type: "allPosts", label: "All Posts" },
    { type: "ctaSection", label: "CTA Section" },
  ]

  const viewportModes = [
    { mode: "desktop", label: "Desktop", icon: <Monitor size={16} /> },
    { mode: "tablet", label: "Tablet", icon: <Tablet size={16} /> },
    { mode: "mobile", label: "Mobile", icon: <Smartphone size={16} /> },
  ]

  const formatPageName = (pageName) => {
    return pageName
      .replace(/([A-Z])/g, " $1")
      .trim()
      .replace(/^./, (str) => str.toUpperCase())
  }

  return (
    <div className="flex flex-col h-full">
      {/* Page Editor Header */}
      <div className="bg-gray-100 p-4 border-b border-gray-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Page Selector */}
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-700">Page:</label>
            <select
              value={currentPage}
              onChange={(e) => setCurrentPage(e.target.value)}
              className="p-2 border border-gray-300 rounded-md text-sm"
            >
              {pages.map((page) => (
                <option key={page} value={page}>
                  {formatPageName(page)}
                </option>
              ))}
            </select>
          </div>

          {/* Viewport Controls */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">Preview:</span>
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              {viewportModes.map(({ mode, label, icon }) => (
                <button
                  key={mode}
                  onClick={() => setViewportSize(mode)}
                  className={`p-2 flex items-center justify-center ${
                    viewportSize === mode
                      ? `${themeClasses.primary} text-white`
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  title={label}
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              onClick={() => setPreviewMode(!previewMode)}
              className={`text-sm px-3 py-2 flex items-center gap-1 ${
                previewMode ? "bg-gray-700 hover:bg-gray-800 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
            >
              <Eye size={16} />
              {previewMode ? "Exit Preview" : "Preview"}
            </Button>

            <Button
              onClick={() => setShowAddComponent(true)}
              className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 flex items-center gap-1"
            >
              <Plus size={16} />
              Add Component
            </Button>

            <Button
              onClick={() => resetToDefault(currentPage)}
              className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-3 py-2 flex items-center gap-1"
            >
              <RotateCcw size={16} />
              Reset Page
            </Button>
          </div>
        </div>
      </div>

      {/* Preview Mode */}
      {previewMode ? (
        <div
          className={`flex-1 overflow-auto p-4 ${
            viewportSize === "mobile" ? "max-w-[375px]" : viewportSize === "tablet" ? "max-w-[768px]" : "max-w-full"
          } mx-auto`}
        >
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white p-2 text-xs flex items-center justify-between">
              <span>Preview: {formatPageName(currentPage)}</span>
              <span>{viewportSize.charAt(0).toUpperCase() + viewportSize.slice(1)} View</span>
            </div>
            <iframe
              src={`/${currentPage === "homepage" ? "" : currentPage}`}
              className="w-full h-[calc(100vh-200px)]"
              title={`Preview of ${currentPage}`}
            />
          </div>
        </div>
      ) : (
        /* Component Editor */
        <div className="flex-1 overflow-auto p-4">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="components">
              {(provided, snapshot) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className={`space-y-4 min-h-[200px] p-4 rounded-lg ${
                    snapshot.isDraggingOver ? themeClasses.highlight : "bg-gray-50"
                  }`}
                >
                  {components.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                      <Layout className="mx-auto mb-2" size={32} />
                      <p>No components found. Add a component to get started.</p>
                    </div>
                  ) : (
                    components.map((component, index) => (
                      <Draggable key={component.id} draggableId={component.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            className={`${
                              snapshot.isDragging ? "shadow-lg rotate-1" : "shadow"
                            } transition-all duration-200`}
                          >
                            <Card
                              className={`${themeClasses.surface} border ${!component.isVisible ? "opacity-60" : ""}`}
                            >
                              <div className="p-4">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div
                                      {...provided.dragHandleProps}
                                      className="cursor-grab active:cursor-grabbing p-1 rounded hover:bg-gray-100"
                                    >
                                      <GripVertical size={18} className="text-gray-500" />
                                    </div>
                                    <div>
                                      <h3 className="font-medium">
                                        {component.type.charAt(0).toUpperCase() + component.type.slice(1)}
                                      </h3>
                                      <p className="text-xs text-gray-500">ID: {component.id}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Button
                                      onClick={() => toggleComponentVisibility(currentPage, component.id)}
                                      className={`p-2 rounded-full ${
                                        component.isVisible
                                          ? "bg-green-100 text-green-700 hover:bg-green-200"
                                          : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                                      }`}
                                      title={component.isVisible ? "Hide component" : "Show component"}
                                    >
                                      {component.isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
                                    </Button>
                                    <Button
                                      onClick={() => handleEditComponent(component)}
                                      className={`${themeClasses.primary} text-white p-2 rounded-full`}
                                      title="Edit component"
                                    >
                                      <Edit3 size={16} />
                                    </Button>
                                    <Button
                                      onClick={() => {
                                        if (window.confirm("Are you sure you want to remove this component?")) {
                                          removeComponent(currentPage, component.id)
                                        }
                                      }}
                                      className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-full"
                                      title="Remove component"
                                    >
                                      <Trash2 size={16} />
                                    </Button>
                                  </div>
                                </div>

                                {/* Component Preview */}
                                <div className="mt-3 p-3 bg-gray-50 rounded-lg border border-gray-200 text-sm">
                                  {component.content.title && <p className="font-bold">{component.content.title}</p>}
                                  {component.content.subtitle && (
                                    <p className="text-gray-600">{component.content.subtitle}</p>
                                  )}
                                  {component.content.description && (
                                    <p className="text-gray-600 line-clamp-2">{component.content.description}</p>
                                  )}
                                </div>
                              </div>
                            </Card>
                          </div>
                        )}
                      </Draggable>
                    ))
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      )}

      {/* Component Editor Modal */}
      {selectedComponent && componentContent && (
        <ComponentEditor
          componentId={selectedComponent}
          content={componentContent}
          onClose={handleCloseEditor}
          page={currentPage}
        />
      )}

      {/* Add Component Modal */}
      {showAddComponent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className={`${themeClasses.surface} max-w-md w-full`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-semibold ${themeClasses.text}`}>Add Component</h3>
                <Button onClick={() => setShowAddComponent(false)} className="p-1 text-gray-500 hover:text-gray-700">
                  <Trash2 size={16} />
                </Button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto">
                <div className="space-y-2">
                  {componentTypes.map(({ type, label }) => (
                    <Button
                      key={type}
                      onClick={() => {
                        addComponent(currentPage, type, components.length)
                        setShowAddComponent(false)
                      }}
                      className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-3"
                    >
                      <span>{label}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}

export default PageEditor
