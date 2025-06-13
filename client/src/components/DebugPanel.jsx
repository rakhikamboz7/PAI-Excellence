"use client"

import { useEdit } from "../contexts/EditContext"
import { useState } from "react"

const DebugPanel = () => {
  const { componentContent, isAdmin, isEditMode } = useEdit()
  const [isOpen, setIsOpen] = useState(false)

  if (!isAdmin) return null

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-800 text-white px-4 py-2 rounded-md">
        {isOpen ? "Hide Debug" : "Show Debug"}
      </button>

      {isOpen && (
        <div className="absolute bottom-12 left-0 bg-white border border-gray-300 rounded-md shadow-lg p-4 w-96 max-h-96 overflow-auto">
          <h3 className="font-bold mb-2">Debug Information</h3>
          <div className="mb-2">
            <strong>Admin:</strong> {isAdmin ? "Yes" : "No"}
          </div>
          <div className="mb-2">
            <strong>Edit Mode:</strong> {isEditMode ? "Yes" : "No"}
          </div>
          <div>
            <strong>Component Content:</strong>
            <pre className="text-xs mt-2 bg-gray-100 p-2 rounded overflow-auto">
              {JSON.stringify(componentContent, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}

export default DebugPanel
