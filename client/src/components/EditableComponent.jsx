"use client"

import { useState } from "react"
import { useAdmin } from "../contexts/AdminContext"
import { Button } from "./ui/Button"
import { Edit, ArrowUp, ArrowDown, Save, X } from "lucide-react"

const EditableComponent = ({ id, defaultContent, children, index, pageId, totalComponents }) => {
  const { isAdmin, editMode, updateContent, getContent, moveComponent } = useAdmin()
  const [isEditing, setIsEditing] = useState(false)
  const [editedContent, setEditedContent] = useState({})

  // If not in admin mode, just render children
  if (!isAdmin || !editMode) {
    return children
  }

  const content = getContent(id, defaultContent)

  const handleEdit = () => {
    setEditedContent(content)
    setIsEditing(true)
  }

  const handleSave = () => {
    updateContent(id, editedContent)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  const handleChange = (field, value) => {
    setEditedContent((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleMoveUp = () => {
    if (index > 0) {
      moveComponent(pageId, index, index - 1)
    }
  }

  const handleMoveDown = () => {
    if (index < totalComponents - 1) {
      moveComponent(pageId, index, index + 1)
    }
  }

  const renderEditForm = () => {
    return (
      <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Edit Component</h3>
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
          {Object.entries(content).map(([key, value]) => {
            if (typeof value === "string") {
              return (
                <div key={key} className="form-group">
                  <label className="block text-sm font-medium mb-1 capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  {value.length > 100 ? (
                    <textarea
                      value={editedContent[key] || ""}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      rows={5}
                    />
                  ) : (
                    <input
                      type="text"
                      value={editedContent[key] || ""}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    />
                  )}
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
    <div className="relative border-2 border-dashed border-blue-300 p-1 my-2 rounded">
      {isEditing ? (
        renderEditForm()
      ) : (
        <>
          <div className="absolute top-2 right-2 flex gap-1 bg-white p-1 rounded-md shadow-md z-50">
            <Button
              onClick={handleEdit}
              className="bg-blue-600 hover:bg-blue-700 text-white p-1 rounded-md"
              title="Edit"
            >
              <Edit size={16} />
            </Button>
            <Button
              onClick={handleMoveUp}
              disabled={index === 0}
              className={`${index === 0 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} text-white p-1 rounded-md`}
              title="Move Up"
            >
              <ArrowUp size={16} />
            </Button>
            <Button
              onClick={handleMoveDown}
              disabled={index === totalComponents - 1}
              className={`${
                index === totalComponents - 1 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white p-1 rounded-md`}
              title="Move Down"
            >
              <ArrowDown size={16} />
            </Button>
          </div>
          {children}
        </>
      )}
    </div>
  )
}

export default EditableComponent
