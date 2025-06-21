"use client"

import { createContext, useContext, useState, useEffect } from "react"

// Create context
const EditContext = createContext()

// Custom hook to use the context
export const useEdit = () => {
  const context = useContext(EditContext)
  if (!context) {
    throw new Error("useEdit must be used within an EditProvider")
  }
  return context
}

// Provider component
export const EditProvider = ({ children }) => {
  // State for storing component content
  const [componentContent, setComponentContent] = useState({})
  // State for edit mode
  const [isEditMode, setIsEditMode] = useState(false)
  // State to track which component is being edited
  const [editingComponent, setEditingComponent] = useState(null)
  // Admin status - simplified for demo
  const [isAdmin, setIsAdmin] = useState(false)

  // Load saved content and admin status from localStorage on mount
  useEffect(() => {
    try {
      // Load content
      const savedContent = localStorage.getItem("paiContent")
      if (savedContent) {
        console.log("Loading saved content:", JSON.parse(savedContent))
        setComponentContent(JSON.parse(savedContent))
      }

      // Load admin status
      const adminStatus = localStorage.getItem("paiAdmin")
      if (adminStatus) {
        setIsAdmin(JSON.parse(adminStatus) === true)
      }
    } catch (error) {
      console.error("Error loading from localStorage:", error)
    }
  }, [])

  // Save content to localStorage whenever it changes
  useEffect(() => {
    if (Object.keys(componentContent).length > 0) {
      console.log("Saving content to localStorage:", componentContent)
      localStorage.setItem("paiContent", JSON.stringify(componentContent))
    }
  }, [componentContent])

  // Function to update component content
  const updateContent = (componentId, newContent) => {
    console.log(`Updating content for ${componentId}:`, newContent)
    setComponentContent((prev) => {
      const updated = {
        ...prev,
        [componentId]: newContent,
      }
      return updated
    })
  }

  // Function to get component content with fallback to default
  const getContent = (componentId, defaultContent) => {
    return componentContent[componentId] || defaultContent
  }

  // Function to toggle edit mode
  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev)
    // Clear editing component when toggling edit mode
    setEditingComponent(null)
  }

  // Function to start editing a component
  const startEditing = (componentId) => {
    setEditingComponent(componentId)
  }

  // Function to stop editing
  const stopEditing = () => {
    setEditingComponent(null)
  }

  // Function to login as admin (simplified)
  const login = (username, password) => {
    if (username === "admin" && password === "admin123") {
      setIsAdmin(true)
      localStorage.setItem("paiAdmin", "true")
      return true
    }
    return false
  }

  // Function to logout
  const logout = () => {
    setIsAdmin(false)
    localStorage.removeItem("paiAdmin")
  }

  // Context value
  const value = {
    componentContent,
    isEditMode,
    editingComponent,
    isAdmin,
    updateContent,
    getContent,
    toggleEditMode,
    startEditing,
    stopEditing,
    login,
    logout,
  }

  return <EditContext.Provider value={value}>{children}</EditContext.Provider>
}
