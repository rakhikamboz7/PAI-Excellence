"use client"

import React from "react"
import { useState } from "react"
import { useEdit } from "../contexts/EditContext"

const SimpleEditableComponent = ({ page, id, defaultContent, children }) => {
  const { isAdmin, isEditMode, updateContent, getContent, editingComponent, startEditing, stopEditing } = useEdit()
  const [tempContent, setTempContent] = useState({})

  // Get current content for this page and component
  const currentContent = getContent(page, id, defaultContent)

  // If not admin or not in edit mode, render children with current content
  if (!isAdmin || !isEditMode) {
    return React.cloneElement(children, currentContent)
  }

  const isEditing = editingComponent === `${page}-${id}`

  const handleEdit = () => {
    setTempContent(currentContent)
    startEditing(`${page}-${id}`)
  }

  const handleSave = () => {
    console.log(`Saving content for ${page}/${id}:`, tempContent)
    updateContent(page, id, tempContent)
    stopEditing()
  }

  const handleCancel = () => {
    stopEditing()
  }

  const handleChange = (field, value) => {
    setTempContent((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  // If this component is being edited, show the edit form
  if (isEditing) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
          <h3 className="text-lg font-bold mb-4">
            Editing {id} on {page} page
          </h3>
          <div className="space-y-4">
            {Object.entries(currentContent).map(([key, value]) => {
              if (typeof value === "string") {
                return (
                  <div key={key} className="form-group">
                    <label className="block text-sm font-medium mb-1 capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </label>
                    {value.length > 100 ? (
                      <textarea
                        value={tempContent[key] || value}
                        onChange={(e) => handleChange(key, e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                        rows={5}
                      />
                    ) : (
                      <input
                        type="text"
                        value={tempContent[key] || value}
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
          <div className="flex justify-end gap-2 mt-4">
            <button onClick={handleCancel} className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
              Cancel
            </button>
            <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Otherwise, show the component with an edit button
  return (
    <div className="relative border-2 border-dashed border-blue-300 p-1 my-2 rounded group">
      <button
        onClick={handleEdit}
        className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity z-10"
      >
        Edit {id}
      </button>
      {React.cloneElement(children, currentContent)}
    </div>
  )
}

export default SimpleEditableComponent
