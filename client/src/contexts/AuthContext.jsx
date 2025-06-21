"use client"

import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check if user is already authenticated on mount
  useEffect(() => {
    const authStatus = localStorage.getItem("paiExcelAuth")
    if (authStatus === "true") {
      setIsAuthenticated(true)
    }
  }, [])

  const login = (username, password) => {
    // Simple authentication for demo purposes
    // In a real app, you would validate against a backend
    if (username === "admin" && password === "admin123") {
      setIsAuthenticated(true)
      localStorage.setItem("paiExcelAuth", "true")
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem("paiExcelAuth")
  }

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}
