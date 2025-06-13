/* eslint-disable react-refresh/only-export-components */
"use client"

import { createContext, useContext, useState, useEffect } from "react"

export const AuthContext = createContext()

// Default admin credentials (in production, this should be in environment variables)
const ADMIN_CREDENTIALS = {
  username: import.meta.env.VITE_ADMIN_USERNAME || "adminmaxmin",
  password: import.meta.env.VITE_ADMIN_PASSWORD || "maxmin@123",
  email: import.meta.env.VITE_ADMIN_EMAIL || "admin@paiexcel.com",
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = () => {
      const token = localStorage.getItem("adminToken")
      const userData = localStorage.getItem("adminUser")

      if (token && userData) {
        try {
          const parsedUser = JSON.parse(userData)
          setUser(parsedUser)
          setIsAuthenticated(true)
        } catch (error) {
          console.error("Error parsing user data:", error)
          localStorage.removeItem("adminToken")
          localStorage.removeItem("adminUser")
        }
      }
      setLoading(false)
    }

    checkAuth()
  }, [])

  const login = async (credentials) => {
    const { username, password } = credentials

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check credentials
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      const userData = {
        id: "admin-1",
        username: ADMIN_CREDENTIALS.username,
        email: ADMIN_CREDENTIALS.email,
        role: "admin",
        loginTime: new Date().toISOString(),
      }

      const token = btoa(JSON.stringify({ ...userData, timestamp: Date.now() }))

      localStorage.setItem("adminToken", token)
      localStorage.setItem("adminUser", JSON.stringify(userData))

      setUser(userData)
      setIsAuthenticated(true)

      return { success: true, user: userData }
    } else {
      return { success: false, error: "Invalid credentials" }
    }
  }

  const logout = () => {
    localStorage.removeItem("adminToken")
    localStorage.removeItem("adminUser")
    setUser(null)
    setIsAuthenticated(false)
  }

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
