"use client"

import { useAuth } from "../contexts/AuthContext"
import AdminLogin from "./AdminLogin"

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <AdminLogin />
  }

  return children
}

export default ProtectedRoute
