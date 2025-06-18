"use client"

import { useState } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useTheme } from "../contexts/ThemeContext"
import { Button } from "./ui/Button"
import { LogOut, User, Home, Edit3, FileText, Menu, X } from "lucide-react"

const AdminNavbar = ({ currentView, setCurrentView }) => {
  const { user, logout } = useAuth()
  const { currentTheme } = useTheme()
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  // Get theme-specific classes
  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return {
          surface: "bg-white",
          primary: "bg-blue-primary",
          text: "text-blue-text",
          accent: "text-blue-primary",
          border: "border-blue-200",
        }
      case "purple":
        return {
          surface: "bg-white",
          primary: "bg-purple-primary",
          text: "text-purple-text",
          accent: "text-purple-primary",
          border: "border-purple-200",
        }
      case "green":
        return {
          surface: "bg-white",
          primary: "bg-green-primary",
          text: "text-green-text",
          accent: "text-green-primary",
          border: "border-green-200",
        }
      case "dark":
        return {
          surface: "bg-dark-dark",
          primary: "bg-dark-primary",
          text: "text-dark-text",
          accent: "text-dark-primary",
          border: "border-gray-600",
        }
      default:
        return {
          surface: "bg-white",
          primary: "bg-orange-600",
          text: "text-gray-900",
          accent: "text-orange-600",
          border: "border-orange-200",
        }
    }
  }

  const themeClasses = getThemeClasses()

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home size={20} /> },
    { id: "content", label: "Content Editor", icon: <Edit3 size={20} /> },
    { id: "blogs", label: "Blog Management", icon: <FileText size={20} /> },
  ]

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      logout()
    }
  }

  return (
    <nav className={`${themeClasses.surface} shadow-sm border-b ${themeClasses.border} sticky top-0 z-40`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <h1 className={`text-xl font-bold ${themeClasses.accent}`}>PAI Excel Admin</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  currentView === item.id ? `${themeClasses.primary} text-white` : `text-gray-600 hover:bg-gray-100`
                }`}
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 ${themeClasses.primary} rounded-full flex items-center justify-center`}>
                <User className="text-white" size={16} />
              </div>
              <div className="text-sm">
                <p className={`font-medium ${themeClasses.text}`}>{user?.username}</p>
                <p className="text-gray-500 text-xs">{user?.role}</p>
              </div>
            </div>
            <Button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            >
              {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id)
                    setShowMobileMenu(false)
                  }}
                  className={`w-full flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                    currentView === item.id ? `${themeClasses.primary} text-white` : `text-gray-600 hover:bg-gray-100`
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Button>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex items-center gap-2 px-4 py-2">
                  <div className={`w-8 h-8 ${themeClasses.primary} rounded-full flex items-center justify-center`}>
                    <User className="text-white" size={16} />
                  </div>
                  <div className="text-sm">
                    <p className={`font-medium ${themeClasses.text}`}>{user?.username}</p>
                    <p className="text-gray-500 text-xs">{user?.role}</p>
                  </div>
                </div>
                <Button
                  onClick={handleLogout}
                  className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded-lg flex items-center gap-2 mt-2"
                >
                  <LogOut size={16} />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default AdminNavbar
