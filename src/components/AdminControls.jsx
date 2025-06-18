"use client"

import { useAdmin } from "../contexts/AdminContext"
import { Button } from "./ui/Button"
import { Edit, Save, LogOut } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"

const AdminControls = () => {
  const { isAdmin, editMode, toggleEditMode } = useAdmin()
  const { logout } = useAuth()

  if (!isAdmin) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <Button
        onClick={toggleEditMode}
        className={`${
          editMode ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
        } text-white p-3 rounded-full shadow-lg`}
        title={editMode ? "Save Changes" : "Edit Page"}
      >
        {editMode ? <Save size={24} /> : <Edit size={24} />}
      </Button>

      <Button
        onClick={() => {
          if (window.confirm("Are you sure you want to log out?")) {
            logout()
          }
        }}
        className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg"
        title="Logout"
      >
        <LogOut size={24} />
      </Button>
    </div>
  )
}

export default AdminControls
