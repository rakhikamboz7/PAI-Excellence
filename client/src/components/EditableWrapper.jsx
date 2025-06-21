"use client"

import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { Button } from "./ui/Button"
import { Edit, Eye, EyeOff, Trash2, Save, X } from "lucide-react"

const EditableWrapper = ({ children, id, type, content, onUpdate, onToggleVisibility, onDelete, isVisible = true }) => {
  const { isAuthenticated } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState(content)
  const [isHovered, setIsHovered] = useState(false)

  if (!isAuthenticated) {
    return isVisible ? children : null
  }

  const handleSave = () => {
    onUpdate(id, editedContent)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditedContent(content)
    setIsEditing(false)
  }

  const handleChange = (field, value) => {
    setEditedContent((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const renderEditForm = () => {
    return (
      <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Edit {type}</h3>
          <div className="flex gap-2">
            <Button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md flex items-center gap-1"
            >
              <Save size={16} />
              Save
            </Button>
            <Button
              onClick={handleCancel}
              className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded-md flex items-center gap-1"
            >
              <X size={16} />
              Cancel
            </Button>
          </div>
        </div>

        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          {Object.entries(editedContent).map(([key, value]) => {
            if (typeof value === "string") {
              return (
                <div key={key} className="form-group">
                  <label className="block text-sm font-medium mb-1 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  {value.length > 100 ? (
                    <textarea
                      value={value}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      rows={5}
                    />
                  ) : (
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  )}
                </div>
              )
            } else if (Array.isArray(value)) {
              return (
                <div key={key} className="form-group">
                  <label className="block text-sm font-medium mb-1 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <div className="space-y-2">
                    {value.map((item, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) => {
                            const newArray = [...value]
                            newArray[index] = e.target.value
                            handleChange(key, newArray)
                          }}
                          className="flex-1 p-2 border border-gray-300 rounded-md"
                        />
                        <Button
                          onClick={() => {
                            const newArray = value.filter((_, i) => i !== index)
                            handleChange(key, newArray)
                          }}
                          className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-md"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    ))}
                    <Button
                      onClick={() => {
                        handleChange(key, [...value, ""])
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md"
                    >
                      Add Item
                    </Button>
                  </div>
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    )
  }

  return (
    <div
      className={`relative border-2 border-transparent hover:border-blue-300 rounded-lg transition-colors ${
        !isVisible ? "opacity-50" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-component-id={id}
    >
      {isEditing ? (
        renderEditForm()
      ) : (
        <>
          {children}
          {isAuthenticated && isHovered && (
            <div className="absolute top-2 right-2 flex gap-1 bg-white p-1 rounded-md shadow-md z-50">
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-md"
                title="Edit"
              >
                <Edit size={16} />
              </Button>
              <Button
                onClick={() => onToggleVisibility(id)}
                className={`${
                  isVisible ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
                } text-white p-1 rounded-md`}
                title={isVisible ? "Hide" : "Show"}
              >
                {isVisible ? <Eye size={16} /> : <EyeOff size={16} />}
              </Button>
              <Button
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete this component?")) {
                    onDelete(id)
                  }
                }}
                className="bg-red-600 hover:bg-red-700 text-white p-1 rounded-md"
                title="Delete"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default EditableWrapper
