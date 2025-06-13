"use client"

import { useState } from "react"
import { useContent } from "../../contexts/ContentContext"
import { useTheme } from "../../contexts/ThemeContext"
import { Card } from "../ui/card"
import { Button } from "../ui/Button"
import RichTextEditor from "../RichTextEditor"
import { Save, X, Plus, Trash2 } from "lucide-react"

// eslint-disable-next-line react-refresh/only-export-components
const ComponentEditor = ({ componentId, content, onClose, page }) => {
  const [editingContent, setEditingContent] = useState({ ...content })
  const { updateComponent } = useContent()
  const { currentTheme } = useTheme()

  // Get theme-specific classes
  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return {
          primary: "bg-blue-600 hover:bg-blue-700",
          surface: "bg-white",
          text: "text-blue-900",
        }
      case "purple":
        return {
          primary: "bg-purple-600 hover:bg-purple-700",
          surface: "bg-white",
          text: "text-purple-900",
        }
      case "green":
        return {
          primary: "bg-green-600 hover:bg-green-700",
          surface: "bg-white",
          text: "text-green-900",
        }
      case "dark":
        return {
          primary: "bg-gray-700 hover:bg-gray-800",
          surface: "bg-gray-900",
          text: "text-gray-100",
        }
      default:
        return {
          primary: "bg-orange-600 hover:bg-orange-700",
          surface: "bg-white",
          text: "text-gray-900",
        }
    }
  }

  const themeClasses = getThemeClasses()

  const handleSave = () => {
    updateComponent(page, componentId, editingContent)
    onClose()
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

  const renderField = (key, value, path = []) => {
    const currentPath = [...path, key]
    const fieldId = currentPath.join(".")

    if (Array.isArray(value)) {
      return (
        <div key={fieldId} className="mb-6">
          <label className="block text-sm font-medium mb-2 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</label>
          <div className="space-y-3 pl-4 border-l-2 border-gray-200">
            {value.map((item, index) => (
              <div key={`${fieldId}.${index}`} className="relative">
                {typeof item === "string" ? (
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleArrayFieldChange(key, index, e.target.value)}
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                    <Button
                      onClick={() => removeArrayItem(key, index)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                ) : typeof item === "object" && item !== null ? (
                  <Card className="p-4 mb-3 bg-gray-50">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium text-sm">Item {index + 1}</h4>
                      <Button
                        onClick={() => removeArrayItem(key, index)}
                        className="bg-red-500 hover:bg-red-600 text-white p-1 rounded-lg"
                      >
                        <Trash2 size={14} />
                      </Button>
                    </div>
                    {Object.entries(item).map(([itemKey, itemValue]) => {
                      const itemPath = [...currentPath, index, itemKey]
                      const itemId = itemPath.join(".")

                      if (Array.isArray(itemValue)) {
                        return (
                          <div key={itemId} className="mb-3">
                            <label className="block text-xs font-medium mb-1 capitalize">
                              {itemKey.replace(/([A-Z])/g, " $1").trim()}
                            </label>
                            <div className="space-y-2 pl-3 border-l border-gray-200">
                              {itemValue.map((subItem, subIndex) => (
                                <div key={`${itemId}.${subIndex}`} className="flex gap-2">
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
                                className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded text-xs flex items-center gap-1"
                              >
                                <Plus size={12} />
                                Add Item
                              </Button>
                            </div>
                          </div>
                        )
                      } else if (typeof itemValue === "object" && itemValue !== null) {
                        return (
                          <div key={itemId} className="mb-3">
                            <label className="block text-xs font-medium mb-1 capitalize">
                              {itemKey.replace(/([A-Z])/g, " $1").trim()}
                            </label>
                            <div className="pl-3 border-l border-gray-200">
                              {Object.entries(itemValue).map(([subKey, subValue]) => {
                                const subPath = [...itemPath, subKey]
                                const subId = subPath.join(".")
                                return (
                                  <div key={subId} className="mb-2">
                                    <label className="block text-xs font-medium mb-1 capitalize">
                                      {subKey.replace(/([A-Z])/g, " $1").trim()}
                                    </label>
                                    <input
                                      type="text"
                                      value={subValue}
                                      onChange={(e) => {
                                        const newSubObj = { ...itemValue, [subKey]: e.target.value }
                                        const newItem = { ...item, [itemKey]: newSubObj }
                                        handleArrayFieldChange(key, index, newItem)
                                      }}
                                      className="w-full p-1 text-sm border border-gray-300 rounded"
                                    />
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )
                      } else {
                        return (
                          <div key={itemId} className="mb-3">
                            <label className="block text-xs font-medium mb-1 capitalize">
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
                        )
                      }
                    })}
                  </Card>
                ) : null}
              </div>
            ))}
            <Button
              onClick={() => {
                const defaultValue =
                  value.length > 0
                    ? typeof value[0] === "string"
                      ? ""
                      : typeof value[0] === "object" && value[0] !== null
                        ? { ...Object.fromEntries(Object.keys(value[0]).map((k) => [k, ""])) }
                        : ""
                    : ""
                addArrayItem(key, defaultValue)
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg flex items-center gap-2"
            >
              <Plus size={16} />
              Add {key.replace(/s$/, "")}
            </Button>
          </div>
        </div>
      )
    } else if (typeof value === "object" && value !== null) {
      return (
        <div key={fieldId} className="mb-6">
          <label className="block text-sm font-medium mb-2 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</label>
          <Card className="p-4 bg-gray-50">
            {Object.entries(value).map(([subKey, subValue]) => renderField(subKey, subValue, currentPath))}
          </Card>
        </div>
      )
    } else {
      return (
        <div key={fieldId} className="mb-6">
          <label className="block text-sm font-medium mb-2 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</label>
          {typeof value === "string" && value.length > 100 ? (
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
      )
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className={`${themeClasses.surface} max-w-4xl w-full max-h-[90vh] overflow-hidden`}>
        <div className="p-6 border-b border-gray-200 sticky top-0 bg-white z-10 flex items-center justify-between">
          <h2 className={`text-2xl font-bold ${themeClasses.text}`}>
            Edit Component: {componentId.split("_")[0].charAt(0).toUpperCase() + componentId.split("_")[0].slice(1)}
          </h2>
          <div className="flex gap-2">
            <Button
              onClick={handleSave}
              className={`${themeClasses.primary} text-white px-4 py-2 rounded-lg flex items-center gap-2`}
            >
              <Save size={16} />
              Save
            </Button>
            <Button
              onClick={onClose}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <X size={16} />
              Cancel
            </Button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {Object.entries(editingContent).map(([key, value]) => renderField(key, value))}
        </div>
      </Card>
    </div>
  )
}



