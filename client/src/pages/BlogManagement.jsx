"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useTheme } from "../contexts/ThemeContext"
import { client, publicClient, checkSanityConnection } from "../sanity/config"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/Button"
import BlogForm from "../components/BlogForm"
import { Trash2, Plus, AlertCircle, Edit, Eye, X } from "lucide-react"

const BlogManagement = () => {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation()
  const { currentTheme } = useTheme()
  const [blogs, setBlogs] = useState([])
  const [currentView, setCurrentView] = useState("list") // "list", "create", "edit"
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

      setCurrentView("list")
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

      setCurrentView("list")
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
    setCurrentView("list")
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
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/## (.*?)(\n|$)/g, "<h2 class='text-xl font-bold mt-6 mb-3'>$1</h2>")
      .replace(/### (.*?)(\n|$)/g, "<h3 class='text-lg font-semibold mt-4 mb-2'>$1</h3>")
      .replace(/- (.*?)(\n|$)/g, "<li class='ml-4'>$1</li>")
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

            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => window.location.reload()}
                className={`${themeClasses.primary} text-white px-6 py-3 rounded-lg`}
              >
                Retry Connection
              </Button>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  // Render based on current view
  if (currentView === "create") {
    return (
      <div className={`min-h-screen ${themeClasses.background} py-8 px-4`}>
        <div className="container mx-auto max-w-4xl">
          <BlogForm mode="create" onSubmit={handleCreateBlog} onCancel={handleCancel} loading={loading} />
        </div>
      </div>
    )
  }

  if (currentView === "edit" && editingBlog) {
    return (
      <div className={`min-h-screen ${themeClasses.background} py-8 px-4`}>
        <div className="container mx-auto max-w-4xl">
          <BlogForm
            mode="edit"
            blog={editingBlog}
            onSubmit={handleUpdateBlog}
            onCancel={handleCancel}
            loading={loading}
          />
        </div>
      </div>
    )
  }

  // List view
  return (
    <>
      <div className={`min-h-screen ${themeClasses.background} py-8 px-4`}>
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className={`text-4xl font-bold ${themeClasses.text} mb-2`}>Blog Management</h1>
            <p className={`${themeClasses.text} opacity-70`}>Create, edit, and manage your blog content</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className={`${themeClasses.surface} p-6`}>
              <h3 className={`text-2xl font-bold ${themeClasses.accent}`}>{blogs.length}</h3>
              <p className={`${themeClasses.text} opacity-70`}>Total Blog Posts</p>
            </Card>
            <Card className={`${themeClasses.surface} p-6`}>
              <h3 className={`text-2xl font-bold ${themeClasses.accent}`}>
                {blogs.filter((blog) => blog.featured).length}
              </h3>
              <p className={`${themeClasses.text} opacity-70`}>Featured Posts</p>
            </Card>
            <Card className={`${themeClasses.surface} p-6`}>
              <h3 className={`text-2xl font-bold ${themeClasses.accent}`}>50K+</h3>
              <p className={`${themeClasses.text} opacity-70`}>Total Views</p>
            </Card>
            <Card className={`${themeClasses.surface} p-6`}>
              <h3 className={`text-2xl font-bold ${themeClasses.accent}`}>
                {
                  blogs.filter((blog) => new Date(blog.publishedAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))
                    .length
                }
              </h3>
              <p className={`${themeClasses.text} opacity-70`}>Posts This Month</p>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="mb-8">
            <Button
              onClick={() => setCurrentView("create")}
              className={`${themeClasses.primary} text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2`}
            >
              <Plus size={20} />
              Create New Blog Post
            </Button>
          </div>

          {/* Blog Posts List */}
          <Card className={`${themeClasses.surface} p-8`}>
            <h2 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>Published Blog Posts</h2>
            {blogs.length === 0 ? (
              <p className={`${themeClasses.text} opacity-70 text-center py-8`}>
                No blog posts yet. Create your first blog post to get started!
              </p>
            ) : (
              <div className="space-y-4">
                {blogs.map((blog) => (
                  <div
                    key={blog._id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      {blog.imageUrl && (
                        <img
                          src={blog.imageUrl || "/placeholder.svg"}
                          alt={blog.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      )}
                      <div className="flex-1">
                        <h3 className={`font-semibold ${themeClasses.text} mb-1`}>{blog.title}</h3>
                        <p className={`text-sm ${themeClasses.text} opacity-70 mb-2 line-clamp-2`}>{blog.excerpt}</p>
                        <p className={`text-sm ${themeClasses.text} opacity-70`}>
                          By {blog.author} • {new Date(blog.publishedAt).toLocaleDateString()} • {blog.readTime} min
                          read
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`text-xs px-2 py-1 rounded ${themeClasses.primary} text-white`}>
                            {getCategoryLabel(blog.category)}
                          </span>
                          <span className="text-xs px-2 py-1 rounded bg-gray-500 text-white">{blog.difficulty}</span>
                          {blog.featured && (
                            <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-white">Featured</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        onClick={() => handleEditBlog(blog)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit blog post"
                      >
                        <Edit size={16} />
                      </Button>
                      <Button
                        onClick={() => handlePreviewBlog(blog)}
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="Preview blog post"
                      >
                        <Eye size={16} />
                      </Button>
                      <Button
                        onClick={() => deleteBlog(blog._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete blog post"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>
        </div>
      </div>

      {/* Enhanced Preview Modal */}
      {showPreviewModal && previewBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`${themeClasses.surface} rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden`}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded ${themeClasses.primary} text-white`}>
                  {getCategoryLabel(previewBlog.category)}
                </span>
                <span className={`text-xs px-2 py-1 rounded text-white ${getDifficultyColor(previewBlog.difficulty)}`}>
                  {previewBlog.difficulty}
                </span>
                {previewBlog.featured && (
                  <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-white">Featured</span>
                )}
                <span className="text-xs px-2 py-1 rounded bg-blue-500 text-white">Preview</span>
              </div>
              <Button onClick={closePreviewModal} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <X size={20} />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              {previewBlog.imageUrl && (
                <img
                  src={previewBlog.imageUrl || "/placeholder.svg"}
                  alt={previewBlog.title}
                  className="w-full h-64 object-cover"
                />
              )}

              <div className="p-6">
                <h1 className={`text-3xl font-bold ${themeClasses.text} mb-4 leading-tight`}>{previewBlog.title}</h1>

                <div
                  className={`flex items-center gap-4 text-sm ${themeClasses.text} opacity-70 mb-6 pb-4 border-b border-gray-200`}
                >
                  <span className="flex items-center gap-1">
                    <span>By {previewBlog.author}</span>
                  </span>
                  <span>•</span>
                  <span>{previewBlog.readTime} min read</span>
                  <span>•</span>
                  <span>{new Date(previewBlog.publishedAt).toLocaleDateString()}</span>
                </div>

                <div
                  className={`text-lg ${themeClasses.text} opacity-80 mb-8 p-4 bg-gray-50 rounded-lg border-l-4 border-orange-500`}
                >
                  {previewBlog.excerpt}
                </div>

                <div
                  className={`prose prose-lg max-w-none ${themeClasses.text} leading-relaxed`}
                  style={{
                    lineHeight: "1.8",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: formatContent(previewBlog.content),
                  }}
                />

                {previewBlog.tags && previewBlog.tags.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className={`text-sm font-semibold ${themeClasses.text} mb-3`}>Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {previewBlog.tags.map((tag, index) => (
                        <span key={index} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default BlogManagement
