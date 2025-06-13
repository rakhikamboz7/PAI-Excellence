"use client"

import { useEdit } from "../contexts/EditContext"

const EditModeToggle = () => {
  const { isAdmin, isEditMode, toggleEditMode, logout } = useEdit()

  if (!isAdmin) return null

  return (
    <div className="fixed bottom-4 right-4 flex gap-2 z-50">
      <button
        onClick={toggleEditMode}
        className={`px-4 py-2 rounded-md ${
          isEditMode ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"
        } text-white`}
      >
        {isEditMode ? "Exit Edit Mode" : "Enter Edit Mode"}
      </button>
      <button onClick={logout} className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md">
        Logout
      </button>
    </div>
  )
}

export default EditModeToggle
