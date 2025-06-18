/* eslint-disable no-unused-vars */
"use client"

import { useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useContent } from "../contexts/ContentContext"
import { useTheme } from "../contexts/ThemeContext"
import { Button } from "./ui/Button"
import { Card } from "./ui/card"
import RichTextEditor from "./RichTextEditor"
import {
  Edit3,
  Save,
  X,
  Plus,
  Trash2,
  Settings,
  RotateCcw,
  Layout,
  Type,
  ImageIcon,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react"

const LiveEditOverlay = () => {
  const { isAuthenticated } = AuthContext
  const {
    isLiveEditing,
    setIsLiveEditing,
    selectedComponent,
    setSelectedComponent,
    currentPage,
    updateComponent,
    toggleComponentVisibility,
    resetToDefault,
    addComponent,
    removeComponent,
  } = useContent()
  const { currentTheme } = useTheme()

  const [showComponentEditor, setShowComponentEditor] = useState(false)
  const [editingContent, setEditingContent] = useState({})
  const [showAddComponent, setShowAddComponent] = useState(false)
  const [viewportMode, setViewportMode] = useState("desktop") // desktop, tablet, mobile

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
        }
      case "purple":
        return {
          primary: "bg-purple-600 hover:bg-purple-700",
          secondary: "bg-purple-100 text-purple-800",
          surface: "bg-white",
          text: "text-purple-900",
          border: "border-purple-200",
        }
      case "green":
        return {
          primary: "bg-green-600 hover:bg-green-700",
          secondary: "bg-green-100 text-green-800",
          surface: "bg-white",
          text: "text-green-900",
          border: "border-green-200",
        }
      case "dark":
        return {
          primary: "bg-gray-700 hover:bg-gray-800",
          secondary: "bg-gray-800 text-gray-200",
          surface: "bg-gray-900",
          text: "text-gray-100",
          border: "border-gray-700",
        }
      default:
        return {
          primary: "bg-orange-600 hover:bg-orange-700",
          secondary: "bg-orange-100 text-orange-800",
          surface: "bg-white",
          text: "text-gray-900",
          border: "border-orange-200",
        }
    }
  }

  const themeClasses = getThemeClasses()

  if (!isAuthenticated) return null

  const handleEditComponent = (componentId, componentContent) => {
    setSelectedComponent(componentId)
    setEditingContent(componentContent)
    setShowComponentEditor(true)
  }

  const handleSaveComponent = () => {
    if (selectedComponent) {
      updateComponent(currentPage, selectedComponent, editingContent)
      setShowComponentEditor(false)
      setSelectedComponent(null)
      setEditingContent({})
    }
  }

  const handleCancelEdit = () => {
    setShowComponentEditor(false)
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

  const componentTypes = [
    { type: "hero", label: "Hero Section", icon: <Layout size={16} /> },
    { type: "aboutUs", label: "About Us", icon: <Type size={16} /> },
    { type: "instructor", label: "Instructor", icon: <ImageIcon size={16} /> },
    { type: "studentGains", label: "Student Gains", icon: <Plus size={16} /> },
    { type: "batches", label: "Batches", icon: <Settings size={16} /> },
    { type: "mission", label: "Mission", icon: <Type size={16} /> },
  ]

  const viewportModes = [
    { mode: "desktop", label: "Desktop", icon: <Monitor size={16} /> },
    { mode: "tablet", label: "Tablet", icon: <Tablet size={16} /> },
    { mode: "mobile", label: "Mobile", icon: <Smartphone size={16} /> },
  ]

  return (
    <>
      {/* Floating Admin Controls */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {/* Main Toggle Button */}
        <Button
          onClick={() => setIsLiveEditing(!isLiveEditing)}
          className={`${themeClasses.primary} text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2`}
        >
          <Edit3 size={16} />
          {isLiveEditing ? "Exit Edit Mode" : "Edit Page"}
        </Button>

        {/* Edit Mode Controls */}
        {isLiveEditing && (
          <Card className={`${themeClasses.surface} p-4 shadow-xl border ${themeClasses.border} min-w-[250px]`}>
            <div className="space-y-3">
              {/* Page Info */}
              <div className="text-center">
                <h3 className={`font-semibold ${themeClasses.text} capitalize`}>
                  Editing: {currentPage.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <p className="text-xs text-gray-500">Live Edit Mode Active</p>
              </div>

              {/* Viewport Controls */}
              <div className="space-y-2">
                <label className={`text-xs font-medium ${themeClasses.text}`}>Viewport</label>
                <div className="flex gap-1">
                  {viewportModes.map(({ mode, label, icon }) => (
                    <Button
                      key={mode}
                      onClick={() => setViewportMode(mode)}
                      className={`flex-1 p-2 text-xs flex items-center justify-center gap-1 rounded ${
                        viewportMode === mode
                          ? `${themeClasses.primary} text-white`
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                      title={label}
                    >
                      {icon}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <Button
                  onClick={() => setShowAddComponent(true)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm flex items-center gap-2"
                >
                  <Plus size={14} />
                  Add Component
                </Button>

                <Button
                  onClick={() => resetToDefault(currentPage)}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded text-sm flex items-center gap-2"
                >
                  <RotateCcw size={14} />
                  Reset Page
                </Button>
              </div>

              {/* Instructions */}
              <div className="text-xs text-gray-500 space-y-1">
                <p>• Click components to edit</p>
                <p>• Drag to reorder</p>
                <p>• Use eye icon to show/hide</p>
              </div>
            </div>
          </Card>
        )}
      </div>

      {/* Add Component Modal */}
      {showAddComponent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className={`${themeClasses.surface} max-w-md w-full`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-semibold ${themeClasses.text}`}>Add Component</h3>
                <Button onClick={() => setShowAddComponent(false)} className="p-1 text-gray-500 hover:text-gray-700">
                  <X size={16} />
                </Button>
              </div>

              <div className="space-y-2">
                {componentTypes.map(({ type, label, icon }) => (
                  <Button
                    key={type}
                    onClick={() => {
                      addComponent(currentPage, type, 999) // Add at end
                      setShowAddComponent(false)
                    }}
                    className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-3"
                  >
                    {icon}
                    <span>{label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Component Editor Modal */}
      {showComponentEditor && selectedComponent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className={`${themeClasses.surface} max-w-4xl w-full max-h-[90vh] overflow-y-auto`}>
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className={`text-2xl font-bold ${themeClasses.text}`}>Edit Component: {selectedComponent}</h2>
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

              {/* Dynamic Content Editor */}
              <div className="space-y-6">
                {Object.entries(editingContent).map(([key, value]) => (
                  <div key={key}>
                    <label className={`block ${themeClasses.text} font-medium mb-2 capitalize`}>
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </label>

                    {Array.isArray(value) ? (
                      <div className="space-y-2">
                        {value.map((item, index) => (
                          <div key={index} className="flex gap-2">
                            {typeof item === "string" ? (
                              <input
                                type="text"
                                value={item}
                                onChange={(e) => handleArrayFieldChange(key, index, e.target.value)}
                                className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                              />
                            ) : (
                              <div className="flex-1 p-3 border border-gray-300 rounded-lg">
                                {Object.entries(item).map(([itemKey, itemValue]) => (
                                  <div key={itemKey} className="mb-2">
                                    <label className="block text-sm font-medium mb-1 capitalize">
                                      {itemKey.replace(/([A-Z])/g, " $1").trim()}
                                    </label>
                                    {typeof itemValue === "string" && itemValue.length > 100 ? (
                                      <RichTextEditor
                                        value={itemValue}
                                        onChange={(newValue) => {
                                          const newItem = { ...item, [itemKey]: newValue }
                                          handleArrayFieldChange(key, index, newItem)
                                        }}
                                      />
                                    ) : Array.isArray(itemValue) ? (
                                      <div className="space-y-1">
                                        {itemValue.map((subItem, subIndex) => (
                                          <div key={subIndex} className="flex gap-2">
                                            <input
                                              type="text"
                                              value={subItem}
                                              onChange={(e) => {
                                                const newArray = [...itemValue]
                                                newArray[subIndex] = e.target.value
                                                const newItem = { ...item, [itemKey]: newArray }
                                                handleArrayFieldChange(key, index, newItem)
                                              }}
                                              className="flex-1 p-1 text-sm border border-gray-300 rounded"
                                            />
                                            <Button
                                              onClick={() => {
                                                const newArray = itemValue.filter((_, i) => i !== subIndex)
                                                const newItem = { ...item, [itemKey]: newArray }
                                                handleArrayFieldChange(key, index, newItem)
                                              }}
                                              className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
                                            >
                                              <Trash2 size={12} />
                                            </Button>
                                          </div>
                                        ))}
                                        <Button
                                          onClick={() => {
                                            const newArray = [...itemValue, ""]
                                            const newItem = { ...item, [itemKey]: newArray }
                                            handleArrayFieldChange(key, index, newItem)
                                          }}
                                          className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs"
                                        >
                                          Add Item
                                        </Button>
                                      </div>
                                    ) : (
                                      <input
                                        type="text"
                                        value={itemValue}
                                        onChange={(e) => {
                                          const newItem = { ...item, [itemKey]: e.target.value }
                                          handleArrayFieldChange(key, index, newItem)
                                        }}
                                        className="w-full p-1 text-sm border border-gray-300 rounded"
                                      />
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                            <Button
                              onClick={() => removeArrayItem(key, index)}
                              className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
                            >
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        ))}
                        <Button
                          onClick={() => addArrayItem(key, typeof value[0] === "string" ? "" : {})}
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg flex items-center gap-2"
                        >
                          <Plus size={16} />
                          Add {key.slice(0, -1)}
                        </Button>
                      </div>
                    ) : typeof value === "string" && value.length > 100 ? (
                      <RichTextEditor value={value} onChange={(newValue) => handleContentChange(key, newValue)} />
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) => handleContentChange(key, e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Viewport Size Indicator */}
      {isLiveEditing && (
        <div className="fixed bottom-4 left-4 z-50">
          <Card className={`${themeClasses.surface} px-3 py-2 shadow-lg border ${themeClasses.border}`}>
            <div className="flex items-center gap-2 text-sm">
              {viewportModes.find((v) => v.mode === viewportMode)?.icon}
              <span className={themeClasses.text}>
                {viewportModes.find((v) => v.mode === viewportMode)?.label} View
              </span>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}

export default LiveEditOverlay
