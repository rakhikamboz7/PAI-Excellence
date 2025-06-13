"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"

const AdminNotification = () => {
  const { isAuthenticated } = useAuth()
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const handleDragStart = () => setIsDragging(true)
    const handleDragEnd = () => setIsDragging(false)

    // Listen for drag events on body
    document.body.addEventListener("dragstart", handleDragStart)
    document.body.addEventListener("dragend", handleDragEnd)

    // Listen for custom class changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDragging(document.body.classList.contains("dragging"))
        }
      })
    })

    observer.observe(document.body, { attributes: true })

    return () => {
      document.body.removeEventListener("dragstart", handleDragStart)
      document.body.removeEventListener("dragend", handleDragEnd)
      observer.disconnect()
    }
  }, [])

  if (!isAuthenticated) return null

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <div
        className={`
        transition-all duration-300 ease-in-out
        ${isDragging ? "bg-blue-600" : "bg-green-600"}
        text-white px-4 py-2 rounded-lg shadow-lg
        flex items-center gap-2
      `}
      >
        <div className={`w-3 h-3 rounded-full ${isDragging ? "bg-blue-300" : "bg-green-300"}`}></div>
        <span>{isDragging ? "Dragging Component..." : "Admin Mode Active"}</span>
      </div>
    </div>
  )
}

export default AdminNotification
