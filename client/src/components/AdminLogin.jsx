"use client"

import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useTheme } from "../contexts/ThemeContext"
import { Button } from "./ui/Button"
import { Card } from "./ui/card"
import { Eye, EyeOff, Lock, User, AlertCircle } from "lucide-react"

const AdminLogin = () => {
  const { login } = useAuth()
  const { currentTheme } = useTheme()
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Get theme-specific classes
  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return {
          background: "bg-blue-light",
          surface: "bg-white",
          primary: "bg-blue-primary hover:bg-blue-600",
          text: "text-blue-text",
          accent: "text-blue-primary",
        }
      case "purple":
        return {
          background: "bg-purple-light",
          surface: "bg-white",
          primary: "bg-purple-primary hover:bg-purple-600",
          text: "text-purple-text",
          accent: "text-purple-primary",
        }
      case "green":
        return {
          background: "bg-green-light",
          surface: "bg-white",
          primary: "bg-green-primary hover:bg-green-600",
          text: "text-green-text",
          accent: "text-green-primary",
        }
      case "dark":
        return {
          background: "bg-dark-light",
          surface: "bg-dark-dark",
          primary: "bg-dark-primary hover:bg-gray-700",
          text: "text-dark-text",
          accent: "text-dark-primary",
        }
      default:
        return {
          background: "bg-orange-50",
          surface: "bg-white",
          primary: "bg-orange-600 hover:bg-orange-700",
          text: "text-gray-900",
          accent: "text-orange-600",
        }
    }
  }

  const themeClasses = getThemeClasses()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const result = await login(credentials)
      if (!result.success) {
        setError(result.error)
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Login failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  return (
    <div
      className={`min-h-screen ${themeClasses.background} flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`}
    >
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className={`mx-auto h-12 w-12 ${themeClasses.primary} rounded-full flex items-center justify-center`}>
            <Lock className="h-6 w-6 text-white" />
          </div>
          <h2 className={`mt-6 text-3xl font-bold ${themeClasses.text}`}>Admin Login</h2>
          <p className={`mt-2 text-sm ${themeClasses.text} opacity-70`}>
            Sign in to access the content management system
          </p>
        </div>

        <Card className={`${themeClasses.surface} p-8 shadow-lg`}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="username" className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={credentials.username}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className={`block text-sm font-medium ${themeClasses.text} mb-2`}>
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className={`w-full ${themeClasses.primary} text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2`}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Demo Credentials:</h3>
            <div className="text-xs text-gray-600 space-y-1">
              <p>
                <strong>Username:</strong> admin
              </p>
              <p>
                <strong>Password:</strong> admin123
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AdminLogin
