/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"

import { useTranslation } from "react-i18next"

import { useTheme } from "../contexts/ThemeContext"

import { client, publicClient, checkSanityConnection } from "../sanity/config"

import { Card } from "../components/ui/card"

import { Button } from "../components/ui/Button"

import { AlertCircle, Settings } from "lucide-react"

import { useAuth } from "../contexts/AuthContext"

import { ContentProvider } from "../contexts/ContentContext"

import ProtectedRoute from "../components/ProtectedRoute"

import AdminNavbar from "../components/AdminNavbar"

import ContentEditor from "../pages/ContentEditor"

import BlogManagement from "../pages/BlogManagement"

import AdminStats from "../components/AdminStats"

const AdminDashboard = () => {

const { t } = useTranslation()

const { currentTheme } = useTheme()

const { isAuthenticated } = useAuth()

const [blogs, setBlogs] = useState([])

const [currentView, setCurrentView] = useState("dashboard") // "dashboard", "create", "edit", "setup"

const [editingBlog, setEditingBlog] = useState(null)

const [previewBlog, setPreviewBlog] = useState(null)

const [showPreviewModal, setShowPreviewModal] = useState(false)

const [loading, setLoading] = useState(false)

const [sanityConnected, setSanityConnected] = useState(false)

const [connectionChecked, setConnectionChecked] = useState(false)

const [permissionError, setPermissionError] = useState(null)

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

useEffect(() => {

// Check Sanity connection and permissions
const checkConnection = async () => {
  try {
    const isConnected = await checkSanityConnection()
    setSanityConnected(isConnected)
    setConnectionChecked(true)
    if (isConnected) {
      await fetchBlogs()
    }
  } catch (error) {
    console.error("Connection check failed:", error)
    setPermissionError(error.message)
    setConnectionChecked(true)
  }
}
checkConnection()
}, [])

const fetchBlogs = async () => {

try {
  console.log("Fetching blogs from Sanity...")
  const query = `*[_type == "blog"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    content,
    category,
    tags,
    difficulty,
    readTime,
    featured,
    metaDescription,
    "imageUrl": featuredImage.asset->url
  }`
  // Use public client for reading
  const result = await publicClient.fetch(query)
  console.log("Fetched blogs:", result)
  setBlogs(result)
} catch (error) {
  console.error("Error fetching blogs:", error)
  setPermissionError(error.message)
}
}

const handleImageUpload = async (file) => {

if (!file) return null
try {
  console.log("Uploading image to Sanity...")
  // Use client with write permissions for uploads
  const asset = await client.assets.upload("image", file)
  console.log("Image uploaded successfully:", asset)
  return asset
} catch (error) {
  console.error("Error uploading image:", error)
  if (error.message.includes("permission") || error.message.includes("403")) {
    alert("Permission denied: Please check your Sanity token has upload permissions.")
  } else {
    alert("Error uploading image. Please try again.")
  }
  return null
}
}

const handleCreateBlog = async (formData) => {

setLoading(true)
try {
  console.log("Creating blog post in Sanity...")
  // Upload image first if provided
  let imageAsset = null
  if (formData.featuredImage) {
    imageAsset = await handleImageUpload(formData.featuredImage)
    if (!imageAsset) {
      setLoading(false)
      return
    }
  }
  // Create slug from title
  const slug = formData.title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
  // Create blog document
  const blogPost = {
    _type: "blog",
    title: formData.title,
    slug: {
      _type: "slug",
      current: slug,
    },
    author: formData.author,
    publishedAt: new Date().toISOString(),
    excerpt: formData.excerpt,
    content: formData.content,
    category: formData.category,
    tags: formData.tags,
    difficulty: formData.difficulty,
    readTime: formData.readTime,
    featured: formData.featured,
    metaDescription: formData.metaDescription,
  }
  // Add image reference if we have one
  if (imageAsset) {
    blogPost.featuredImage = {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: imageAsset._id,
      },
    }
  }
  console.log("Sending blog post to Sanity:", blogPost)
  // Create the document in Sanity using client with write permissions
  const result = await client.create(blogPost)
  console.log("Blog post created successfully:", result)
  setCurrentView("dashboard")
  await fetchBlogs() // Refresh the list
  alert("Blog post published successfully!")
} catch (error) {
  console.error("Error creating blog post:", error)
  if (error.message.includes("permission") || error.message.includes("403")) {
    alert(`Permission denied: ${error.message}\n\nPlease check your Sanity token has create permissions.`)
    setPermissionError(error.message)
  } else {
    alert(`Error publishing blog post: ${error.message}. Please try again.`)
  }
} finally {
  setLoading(false)
}
}

const handleUpdateBlog = async (formData) => {

if (!editingBlog) return
setLoading(true)
try {
  console.log("Updating blog post in Sanity...")
  // Upload new image if provided
  let imageAsset = null
  if (formData.featuredImage) {
    imageAsset = await handleImageUpload(formData.featuredImage)
    if (!imageAsset) {
      setLoading(false)
      return
    }
  }
  // Create slug from title
  const slug = formData.title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
  // Prepare update data
  const updateData = {
    title: formData.title,
    slug: {
      _type: "slug",
      current: slug,
    },
    author: formData.author,
    excerpt: formData.excerpt,
    content: formData.content,
    category: formData.category,
    tags: formData.tags,
    difficulty: formData.difficulty,
    readTime: formData.readTime,
    featured: formData.featured,
    metaDescription: formData.metaDescription,
  }
  // Add image reference if we have a new one
  if (imageAsset) {
    updateData.featuredImage = {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: imageAsset._id,
      },
    }
  }
  console.log("Updating blog post:", updateData)
  // Update the document in Sanity using client with write permissions
  const result = await client.patch(editingBlog._id).set(updateData).commit()
  console.log("Blog post updated successfully:", result)
  setCurrentView("dashboard")
  setEditingBlog(null)
  await fetchBlogs() // Refresh the list
  alert("Blog post updated successfully!")
} catch (error) {
  console.error("Error updating blog post:", error)
  if (error.message.includes("permission") || error.message.includes("403")) {
    alert(`Permission denied: ${error.message}\n\nPlease check your Sanity token has update permissions.`)
    setPermissionError(error.message)
  } else {
    alert(`Error updating blog post: ${error.message}. Please try again.`)
  }
} finally {
  setLoading(false)
}
}

const handleEditBlog = (blog) => {

setEditingBlog(blog)
setCurrentView("edit")
}

const handlePreviewBlog = (blog) => {

setPreviewBlog(blog)
setShowPreviewModal(true)
}

const deleteBlog = async (blogId) => {

if (window.confirm("Are you sure you want to delete this blog post?")) {
  try {
    console.log("Deleting blog post:", blogId)
    // Use client with write permissions for deletion
    await client.delete(blogId)
    console.log("Blog post deleted successfully")
    await fetchBlogs() // Refresh the list
    alert("Blog post deleted successfully!")
  } catch (error) {
    console.error("Error deleting blog:", error)
    if (error.message.includes("permission") || error.message.includes("403")) {
      alert(`Permission denied: ${error.message}\n\nPlease check your Sanity token has delete permissions.`)
      setPermissionError(error.message)
    } else {
      alert(`Error deleting blog post: ${error.message}`)
    }
  }
}
}

const handleCancel = () => {

setCurrentView("dashboard")
setEditingBlog(null)
}

const closePreviewModal = () => {

setShowPreviewModal(false)
setPreviewBlog(null)
}

// Function to format content for display

const formatContent = (content) => {

if (!content) return "<p>No content available.</p>"
// If content is HTML (from rich text editor)
if (content.includes("<") && content.includes(">")) {
  return content
}
// If content is plain text or markdown-like (from simple editor)
return content
  .replace(/\*\*(.*?)\*\*/g, "<strong>\\$1</strong>")
  .replace(/\*(.*?)\*/g, "<em>\\$1</em>")
  .replace(/## (.*?)(\n|$)/g, "<h2 class='text-xl font-bold mt-6 mb-3'>\\$1</h2>")
  .replace(/### (.*?)(\n|$)/g, "<h3 class='text-lg font-semibold mt-4 mb-2'>\\$1</h3>")
  .replace(/- (.*?)(\n|$)/g, "<li class='ml-4'>\\$1</li>")
  .replace(/\n\n/g, "</p><p class='mb-4'>")
  .replace(/\n/g, "<br>")
  .replace(/^/, "<p class='mb-4'>")
  .replace(/$/, "</p>")
  .replace(/<p class='mb-4'><\/p>/g, "")
}

const getCategoryLabel = (value) => {

const categories = [
  { value: "ai-fundamentals", label: "AI Fundamentals" },
  { value: "machine-learning", label: "Machine Learning" },
  { value: "deep-learning", label: "Deep Learning" },
  { value: "ai-tools", label: "AI Tools & Frameworks" },
  { value: "industry-trends", label: "Industry Trends" },
  { value: "student-guides", label: "Student Guides" },
  { value: "project-tutorials", label: "Project Tutorials" },
]
const category = categories.find((cat) => cat.value === value)
return category ? category.label : value
}

const getDifficultyColor = (difficulty) => {

switch (difficulty) {
  case "beginner":
    return "bg-green-500"
  case "intermediate":
    return "bg-yellow-500"
  case "advanced":
    return "bg-red-500"
  default:
    return "bg-gray-500"
}
}

// If we're still checking the connection

if (!connectionChecked) {

return (
  <div className={`min-h-screen ${themeClasses.background} flex items-center justify-center`}>
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
      <p className={`${themeClasses.text}`}>Connecting to Sanity CMS...</p>
    </div>
  </div>
)
}

// If connection failed or permission error

if (!sanityConnected || permissionError) {

return (
  <div className={`min-h-screen ${themeClasses.background} py-8 px-4`}>
    <div className="container mx-auto max-w-6xl">
      <Card className={`${themeClasses.surface} p-8`}>
        <div className="text-center mb-8">
          <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
          <h1 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>
            {permissionError ? "Permission Error" : "Connection Error"}
          </h1>
          <p className={`${themeClasses.text} mb-6`}>
            {permissionError
              ? "Your Sanity token doesn't have the required permissions."
              : "Could not connect to Sanity CMS. Please check your configuration."}
          </p>
        </div>
        {/* Setup Instructions */}
        <div className="bg-gray-100 p-6 rounded-lg text-left mb-6">
          <h3 className="font-bold mb-4">Setup Instructions:</h3>
          <div className="space-y-4 text-sm">
            <div>
              <h4 className="font-semibold">1. Get your Sanity Project ID:</h4>
              <p>
                • Go to{" "}
                <a
                  href="https://sanity.io/manage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  sanity.io/manage
                </a>
              </p>
              <p>• Select your project</p>
              <p>• Copy the Project ID from the dashboard</p>
            </div>
            <div>
              <h4 className="font-semibold">2. Create a Write Token:</h4>
              <p>• In your Sanity project dashboard, go to API → Tokens</p>
              <p>• Click "Add API token"</p>
              <p>• Give it a name like "Blog Admin"</p>
              <p>• Set permissions to "Editor" or "Admin"</p>
              <p>• Copy the generated token</p>
            </div>
            <div>
              <h4 className="font-semibold">3. Update Environment Variables:</h4>
              <p>
                Create a <code>.env.local</code> file in your project root with:
              </p>
              <pre className="bg-gray-200 p-2 rounded mt-2">
                {`REACT_APP_SANITY_PROJECT_ID=your-project-id
REACT_APP_SANITY_DATASET=production

REACT_APP_SANITY_TOKEN=your-write-token`}

</pre>
            </div>
            <div>
              <h4 className="font-semibold">4. Install Sanity Client:</h4>
              <pre className="bg-gray-200 p-2 rounded">npm install @sanity/client</pre>
            </div>
          </div>
        </div>
        {permissionError && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-red-800 mb-2">Permission Error Details:</h4>
            <p className="text-red-700 text-sm font-mono">{permissionError}</p>
          </div>
        )}
        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => window.location.reload()}
            className={`${themeClasses.primary} text-white px-6 py-3 rounded-lg`}
          >
            Retry Connection
          </Button>
          <Button
            onClick={() => setCurrentView("setup")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2"
          >
            <Settings size={20} />
            Setup Guide
          </Button>
        </div>
      </Card>
    </div>
  </div>
)
}

const renderCurrentView = () => {

switch (currentView) {
  case "content":
    return <ContentEditor />
  case "blogs":
    return (
      <BlogManagement
        blogs={blogs}
        handleEditBlog={handleEditBlog}
        handlePreviewBlog={handlePreviewBlog}
        deleteBlog={deleteBlog}
      />
    )
  default:
    return <AdminStats blogs={blogs} />
}
}

return (

<ProtectedRoute isAuthenticated={isAuthenticated}>
  <ContentProvider>
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar currentView={currentView} setCurrentView={setCurrentView} />
      <main>{renderCurrentView()}</main>
    </div>
  </ContentProvider>
</ProtectedRoute>
)

}

export default AdminDashboard