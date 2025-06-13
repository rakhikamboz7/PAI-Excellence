/* eslint-disable react-refresh/only-export-components */
"use client"

import { createContext, useContext, useState, useEffect } from "react"

const PageContentContext = createContext()

export const usePageContent = () => {
  const context = useContext(PageContentContext)
  if (!context) {
    throw new Error("usePageContent must be used within a PageContentProvider")
  }
  return context
}

export const PageContentProvider = ({ children }) => {
  const [pageContent, setPageContent] = useState({})
  const [componentVisibility, setComponentVisibility] = useState({})
  const [componentOrder, setComponentOrder] = useState({})

  useEffect(() => {
    // Load saved content from localStorage
    try {
      const savedContent = localStorage.getItem("paiExcelPageContent")
      if (savedContent) {
        setPageContent(JSON.parse(savedContent))
      }

      const savedVisibility = localStorage.getItem("paiExcelComponentVisibility")
      if (savedVisibility) {
        setComponentVisibility(JSON.parse(savedVisibility))
      }

      const savedOrder = localStorage.getItem("paiExcelComponentOrder")
      if (savedOrder) {
        setComponentOrder(JSON.parse(savedOrder))
      }
    } catch (error) {
      console.error("Error loading saved content:", error)
    }
  }, [])

  const updateComponentContent = (componentId, newContent) => {
    const updatedContent = {
      ...pageContent,
      [componentId]: newContent,
    }
    setPageContent(updatedContent)
    localStorage.setItem("paiExcelPageContent", JSON.stringify(updatedContent))
  }

  const toggleComponentVisibility = (componentId) => {
    const updatedVisibility = {
      ...componentVisibility,
      [componentId]: !componentVisibility[componentId],
    }
    setComponentVisibility(updatedVisibility)
    localStorage.setItem("paiExcelComponentVisibility", JSON.stringify(updatedVisibility))
  }

  const updateComponentOrder = (pageId, newOrder) => {
    const updatedOrder = {
      ...componentOrder,
      [pageId]: newOrder,
    }
    setComponentOrder(updatedOrder)
    localStorage.setItem("paiExcelComponentOrder", JSON.stringify(updatedOrder))
  }

  const deleteComponent = (componentId) => {
    const updatedContent = { ...pageContent }
    delete updatedContent[componentId]
    setPageContent(updatedContent)
    localStorage.setItem("paiExcelPageContent", JSON.stringify(updatedContent))

    const updatedVisibility = { ...componentVisibility }
    delete updatedVisibility[componentId]
    setComponentVisibility(updatedVisibility)
    localStorage.setItem("paiExcelComponentVisibility", JSON.stringify(updatedVisibility))
  }

  const getComponentContent = (componentId, defaultContent) => {
    return pageContent[componentId] || defaultContent
  }

  const isComponentVisible = (componentId) => {
    return componentVisibility[componentId] !== false
  }

  const getPageComponentOrder = (pageId, defaultOrder) => {
    return componentOrder[pageId] || defaultOrder
  }

  const value = {
    updateComponentContent,
    toggleComponentVisibility,
    updateComponentOrder,
    deleteComponent,
    getComponentContent,
    isComponentVisible,
    getPageComponentOrder,
  }

  return <PageContentContext.Provider value={value}>{children}</PageContentContext.Provider>
}
