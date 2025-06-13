"use client"

import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/Button"
import AdminLogin from "../components/AdminLogin"
import { Home, FileText, ImageIcon, Settings, LogOut } from "lucide-react"

const AdminDashboard = () => {
  const { isAuthenticated, logout } = useAuth()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("pages")

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!isAuthenticated) {
      // We'll handle this with conditional rendering instead
    }
  }, [isAuthenticated, navigate])

  if (!isAuthenticated) {
    return <AdminLogin />
  }

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logout()
    }
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "pages":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pages.map((page) => (
              <Card key={page.id} className="p-4 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold mb-2">{page.title}</h3>
                <p className="text-gray-600 mb-4">{page.description}</p>
                <Button
                  onClick={() => navigate(page.path)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full"
                >
                  Edit Page
                </Button>
              </Card>
            ))}
          </div>
        )
      case "media":
        return (
          <div className="space-y-4">
            <Card className="p-4">
              <h3 className="text-lg font-bold mb-2">Media Library</h3>
              <p className="text-gray-600 mb-4">Manage your images, videos, and other media files.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 8].map((id) => (
                  <div key={id} className="aspect-square bg-gray-200 rounded-md flex items-center justify-center">
                    <ImageIcon size={24} className="text-gray-400" />
                  </div>
                ))}
              </div>
              <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                Upload New Media
              </Button>
            </Card>
          </div>
        )
      case "settings":
        return (
          <div className="space-y-4">
            <Card className="p-4">
              <h3 className="text-lg font-bold mb-2">General Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Site Title</label>
                  <input
                    type="text"
                    defaultValue="Punjab AI Excellence"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Site Description</label>
                  <textarea
                    defaultValue="Empowering the next generation with AI education"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    rows={3}
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Save Settings</Button>
              </div>
            </Card>
          </div>
        )
      default:
        return null
    }
  }

  const pages = [
    {
      id: "homepage",
      title: "Homepage",
      description: "Edit your website's main landing page.",
      path: "/",
    },
    {
      id: "course-details",
      title: "Course Details",
      description: "Manage your course information and curriculum.",
      path: "/course-details",
    },
    {
      id: "media-coverage",
      title: "Media Coverage",
      description: "Update media mentions and press coverage.",
      path: "/media-coverage",
    },
    {
      id: "events",
      title: "Events",
      description: "Manage upcoming and past events.",
      path: "/events",
    },
    {
      id: "about-us",
      title: "About Us",
      description: "Edit your organization's information.",
      path: "/about-us",
    },
    {
      id: "blogs",
      title: "Blogs",
      description: "Manage your blog posts and articles.",
      path: "/blogs",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="bg-white w-full md:w-64 shadow-md md:min-h-screen p-4">
          <div className="text-center mb-6">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <p className="text-sm text-gray-600">Manage your website</p>
          </div>

          <nav className="space-y-2">
            <Button
              onClick={() => setActiveTab("pages")}
              className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-2 ${
                activeTab === "pages" ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              }`}
            >
              <Home size={18} />
              Pages
            </Button>
            <Button
              onClick={() => setActiveTab("media")}
              className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-2 ${
                activeTab === "media" ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              }`}
            >
              <FileText size={18} />
              Media
            </Button>
            <Button
              onClick={() => setActiveTab("settings")}
              className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-2 ${
                activeTab === "settings" ? "bg-blue-600 text-white" : "hover:bg-gray-100"
              }`}
            >
              <Settings size={18} />
              Settings
            </Button>
          </nav>

          <div className="mt-auto pt-6">
            <Button
              onClick={handleLogout}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center gap-2 justify-center"
            >
              <LogOut size={18} />
              Logout
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              {activeTab === "pages" && "Manage Pages"}
              {activeTab === "media" && "Media Library"}
              {activeTab === "settings" && "Settings"}
            </h2>
          </div>

          {renderTabContent()}
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Instructions</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Click on any page above to navigate to it</li>
            <li>Click the edit button (pencil icon) in the bottom right corner to enter edit mode</li>
            <li>Hover over any component to see edit controls</li>
            <li>Use the up/down arrows to reorder components</li>
            <li>Click the edit button on a component to modify its content</li>
            <li>Click the save button when finished editing</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
