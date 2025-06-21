"use client"

import { useTheme } from "../contexts/ThemeContext"
import { useContent } from "../contexts/ContentContext"
import { Card } from "./ui/card"
import { FileText, Eye, Calendar, Settings, Activity } from "lucide-react"

const AdminStats = () => {
  const { currentTheme } = useTheme()
  const { content, getOrderedComponents } = useContent()

  // Get theme-specific classes
  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return {
          background: "bg-blue-light",
          surface: "bg-white",
          primary: "bg-blue-primary",
          text: "text-blue-text",
          accent: "text-blue-primary",
        }
      case "purple":
        return {
          background: "bg-purple-light",
          surface: "bg-white",
          primary: "bg-purple-primary",
          text: "text-purple-text",
          accent: "text-purple-primary",
        }
      case "green":
        return {
          background: "bg-green-light",
          surface: "bg-white",
          primary: "bg-green-primary",
          text: "text-green-text",
          accent: "text-green-primary",
        }
      case "dark":
        return {
          background: "bg-dark-light",
          surface: "bg-dark-dark",
          primary: "bg-dark-primary",
          text: "text-dark-text",
          accent: "text-dark-primary",
        }
      default:
        return {
          background: "bg-orange-50",
          surface: "bg-white",
          primary: "bg-orange-600",
          text: "text-gray-900",
          accent: "text-orange-600",
        }
    }
  }

  const themeClasses = getThemeClasses()

  const stats = [
    {
      title: "Total Components",
      value: Object.keys(content).length,
      icon: <Settings size={24} />,
      color: "bg-blue-500",
    },
    {
      title: "Visible Components",
      value: Object.values(content).filter((comp) => comp.isVisible).length,
      icon: <Eye size={24} />,
      color: "bg-green-500",
    },
    {
      title: "Hidden Components",
      value: Object.values(content).filter((comp) => !comp.isVisible).length,
      icon: <FileText size={24} />,
      color: "bg-yellow-500",
    },
    {
      title: "Last Updated",
      value: "Today",
      icon: <Calendar size={24} />,
      color: "bg-purple-500",
    },
  ]

  return (
    <div className={`min-h-screen ${themeClasses.background} py-8 px-4`}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-4xl font-bold ${themeClasses.text} mb-2`}>Admin Dashboard</h1>
          <p className={`${themeClasses.text} opacity-70`}>Welcome back! Here's an overview of your website content.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className={`${themeClasses.surface} p-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm ${themeClasses.text} opacity-70 mb-1`}>{stat.title}</p>
                  <p className={`text-2xl font-bold ${themeClasses.text}`}>{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg text-white`}>{stat.icon}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Component Overview */}
        <Card className={`${themeClasses.surface} p-6 mb-8`}>
          <h2 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>Component Overview</h2>
          <div className="space-y-4">
            {getOrderedComponents().map((component, index) => (
              <div
                key={component.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 ${themeClasses.primary} rounded-full flex items-center justify-center text-white font-bold`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h3 className={`font-semibold ${themeClasses.text} capitalize`}>
                      {component.type.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <p className={`text-sm ${themeClasses.text} opacity-70`}>
                      {component.isVisible ? "Visible" : "Hidden"} • Order: {component.order + 1}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      component.isVisible ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {component.isVisible ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className={`${themeClasses.surface} p-6`}>
          <h2 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <Settings className={`${themeClasses.accent}`} size={20} />
                <h3 className={`font-semibold ${themeClasses.text}`}>Edit Content</h3>
              </div>
              <p className={`text-sm ${themeClasses.text} opacity-70`}>Modify component content and layout</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <FileText className={`${themeClasses.accent}`} size={20} />
                <h3 className={`font-semibold ${themeClasses.text}`}>Manage Blogs</h3>
              </div>
              <p className={`text-sm ${themeClasses.text} opacity-70`}>Create and edit blog posts</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center gap-3 mb-2">
                <Activity className={`${themeClasses.accent}`} size={20} />
                <h3 className={`font-semibold ${themeClasses.text}`}>View Analytics</h3>
              </div>
              <p className={`text-sm ${themeClasses.text} opacity-70`}>Track website performance</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AdminStats
