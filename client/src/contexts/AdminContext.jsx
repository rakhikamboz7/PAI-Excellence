"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { useAuth } from "./AuthContext"

const AdminContext = createContext()

export const useAdmin = () => {
  const context = useContext(AdminContext)
  if (!context) {
    throw new Error("useAdmin must be used within an AdminProvider")
  }
  return context
}

export const AdminProvider = ({ children }) => {
  const { isAuthenticated } = useAuth()
  const [editMode, setEditMode] = useState(false)
  const [pageContent, setPageContent] = useState({})
  const [componentOrder, setComponentOrder] = useState({})

  // Load saved content from localStorage
  useEffect(() => {
    if (isAuthenticated) {
      try {
        const savedContent = localStorage.getItem("paiExcelContent")
        if (savedContent) {
          setPageContent(JSON.parse(savedContent))
        }

        const savedOrder = localStorage.getItem("paiExcelOrder")
        if (savedOrder) {
          setComponentOrder(JSON.parse(savedOrder))
        }
      } catch (error) {
        console.error("Error loading saved content:", error)
      }
    }
  }, [isAuthenticated])

  // Save content to localStorage whenever it changes
  useEffect(() => {
    if (isAuthenticated && Object.keys(pageContent).length > 0) {
      localStorage.setItem("paiExcelContent", JSON.stringify(pageContent))
    }
  }, [pageContent, isAuthenticated])

  // Save order to localStorage whenever it changes
  useEffect(() => {
    if (isAuthenticated && Object.keys(componentOrder).length > 0) {
      localStorage.setItem("paiExcelOrder", JSON.stringify(componentOrder))
    }
  }, [componentOrder, isAuthenticated])

  const toggleEditMode = () => {
    setEditMode((prev) => !prev)
  }

  const updateContent = (componentId, newContent) => {
    setPageContent((prev) => ({
      ...prev,
      [componentId]: newContent,
    }))
  }

  const getContent = (componentId, defaultContent) => {
    return pageContent[componentId] || defaultContent
  }

  const updateOrder = (pageId, newOrder) => {
    setComponentOrder((prev) => ({
      ...prev,
      [pageId]: newOrder,
    }))
  }

  const getOrder = (pageId, defaultOrder) => {
    return componentOrder[pageId] || defaultOrder
  }

  const moveComponent = (pageId, fromIndex, toIndex) => {
    const currentOrder = getOrder(pageId, [])
    if (!currentOrder || currentOrder.length === 0) return

    const newOrder = [...currentOrder]
    const [movedItem] = newOrder.splice(fromIndex, 1)
    newOrder.splice(toIndex, 0, movedItem)

    updateOrder(pageId, newOrder)
  }

  return (
    <AdminContext.Provider
      value={{
        isAdmin: isAuthenticated,
        editMode,
        toggleEditMode,
        updateContent,
        getContent,
        updateOrder,
        getOrder,
        moveComponent,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}
