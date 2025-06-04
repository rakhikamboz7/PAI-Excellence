"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useTheme } from "../contexts/ThemeContext"
import { client, checkSanityConnection } from "../sanity/config"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/Button"
import { Save, Trash2, Plus, AlertCircle } from "lucide-react"

const AdminDashboard = () => {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation()
  const { currentTheme } = useTheme()
  const [blogs, setBlogs] = useState([])
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [sanityConnected, setSanityConnected] = useState(false)
  const [connectionChecked, setConnectionChecked] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    difficulty: "beginner",
    readTime: 5,
    featured: false,
    metaDescription: "",
    featuredImage: null,
  })

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
    // Check Sanity connection
    const checkConnection = async () => {
      const isConnected = await checkSanityConnection()
      setSanityConnected(isConnected)
      setConnectionChecked(true)

      if (isConnected) {
        fetchBlogs()
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
        author,
        publishedAt,
        category,
        featured,
        "imageUrl": featuredImage.asset->url
      }`
      const result = await client.fetch(query)
      console.log("Fetched blogs:", result)
      setBlogs(result)
    } catch (error) {
      console.error("Error fetching blogs:", error)
    }
  }

  const handleImageUpload = async (file) => {
    if (!file) return null

    try {
      console.log("Uploading image to Sanity...")
      const asset = await client.assets.upload("image", file)
      console.log("Image uploaded successfully:", asset)
      return asset
    } catch (error) {
      console.error("Error uploading image:", error)
      alert("Error uploading image. Please try again.")
      return null
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      console.log("Creating blog post in Sanity...")

      // Upload image first if provided
      let imageAsset = null
      if (formData.featuredImage) {
        imageAsset = await handleImageUpload(formData.featuredImage)
        if (!imageAsset) {
          setLoading(false)
          return // Stop if image upload failed
        }
      }

      // Create slug from title
      const slug = formData.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")

      // Prepare tags array
      const tags = formData.tags ? formData.tags.split(",").map((tag) => tag.trim()) : []

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
        content: [
          {
            _type: "block",
            children: [
              {
                _type: "span",
                text: formData.content,
              },
            ],
          },
        ],
        category: formData.category,
        tags: tags,
        difficulty: formData.difficulty,
        readTime: Number.parseInt(formData.readTime, 10),
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

      // Create the document in Sanity
      const result = await client.create(blogPost)
      console.log("Blog post created successfully:", result)

      // Reset form
      setFormData({
        title: "",
        author: "",
        excerpt: "",
        content: "",
        category: "",
        tags: "",
        difficulty: "beginner",
        readTime: 5,
        featured: false,
        metaDescription: "",
        featuredImage: null,
      })

      // Reset file input
      const fileInput = document.getElementById("featuredImage")
      if (fileInput) fileInput.value = ""

      setShowCreateForm(false)
      fetchBlogs() // Refresh the list
      alert("Blog post published successfully!")
    } catch (error) {
      console.error("Error creating blog post:", error)
      alert(`Error publishing blog post: ${error.message}. Please try again.`)
    } finally {
      setLoading(false)
    }
  }

  const deleteBlog = async (blogId) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        console.log("Deleting blog post:", blogId)
        await client.delete(blogId)
        console.log("Blog post deleted successfully")
        fetchBlogs() // Refresh the list
        alert("Blog post deleted successfully!")
      } catch (error) {
        console.error("Error deleting blog:", error)
        alert(`Error deleting blog post: ${error.message}`)
      }
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

  // If connection failed
  if (!sanityConnected) {
    return (
      <div className={`min-h-screen ${themeClasses.background} py-8 px-4`}>
        <div className="container mx-auto max-w-6xl">
          <Card className={`${themeClasses.surface} p-8 text-center`}>
            <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
            <h1 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>Connection Error</h1>
            <p className={`${themeClasses.text} mb-6`}>
              Could not connect to Sanity CMS. Please check your configuration and try again.
            </p>
            <div className="bg-gray-100 p-4 rounded-lg text-left mb-6">
              <p className="font-mono text-sm">
                1. Verify your projectId and token in src/sanity/config.js
                <br />
                2. Make sure you've installed @sanity/client
                <br />
                3. Check that your Sanity project is active
              </p>
            </div>
            <Button
              onClick={() => window.location.reload()}
              className={`${themeClasses.primary} text-white px-6 py-3 rounded-lg`}
            >
              Retry Connection
            </Button>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className={`min-h-screen ${themeClasses.background} py-8 px-4`}>
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-4xl font-bold ${themeClasses.text} mb-2`}>PAI Excel Admin Dashboard</h1>
          <p className={`${themeClasses.text} opacity-70`}>Manage your AI blog content and engage with students</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
            <p className={`${themeClasses.text} opacity-70`}>Students Reached</p>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mb-8">
          <Button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className={`${themeClasses.primary} text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2`}
          >
            <Plus size={20} />
            {showCreateForm ? "Cancel" : "Create New Blog Post"}
          </Button>
        </div>

        {/* Create Blog Form */}
        {showCreateForm && (
          <Card className={`${themeClasses.surface} p-8 mb-8`}>
            <h2 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>Create New Blog Post</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={`block ${themeClasses.text} font-medium mb-2`}>Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className={`block ${themeClasses.text} font-medium mb-2`}>Author *</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className={`block ${themeClasses.text} font-medium mb-2`}>Featured Image *</label>
                <input
                  type="file"
                  id="featuredImage"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, featuredImage: e.target.files[0] })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>

              <div>
                <label className={`block ${themeClasses.text} font-medium mb-2`}>Excerpt *</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief description of the blog post (50-200 characters)"
                  required
                />
              </div>

              <div>
                <label className={`block ${themeClasses.text} font-medium mb-2`}>Content *</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={10}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Write your blog content here..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className={`block ${themeClasses.text} font-medium mb-2`}>Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="ai-fundamentals">AI Fundamentals</option>
                    <option value="machine-learning">Machine Learning</option>
                    <option value="deep-learning">Deep Learning</option>
                    <option value="ai-tools">AI Tools & Frameworks</option>
                    <option value="industry-trends">Industry Trends</option>
                    <option value="student-guides">Student Guides</option>
                    <option value="project-tutorials">Project Tutorials</option>
                  </select>
                </div>
                <div>
                  <label className={`block ${themeClasses.text} font-medium mb-2`}>Difficulty *</label>
                  <select
                    value={formData.difficulty}
                    onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div>
                  <label className={`block ${themeClasses.text} font-medium mb-2`}>Read Time (min) *</label>
                  <input
                    type="number"
                    value={formData.readTime}
                    onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="1"
                    max="60"
                    required
                  />
                </div>
              </div>

              <div>
                <label className={`block ${themeClasses.text} font-medium mb-2`}>Tags</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter tags separated by commas (e.g., AI, Machine Learning, Python)"
                />
              </div>

              <div>
                <label className={`block ${themeClasses.text} font-medium mb-2`}>Meta Description</label>
                <textarea
                  value={formData.metaDescription}
                  onChange={(e) => setFormData({ ...formData, metaDescription: e.target.value })}
                  rows={2}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="SEO meta description (max 160 characters)"
                  maxLength={160}
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label htmlFor="featured" className={`${themeClasses.text} font-medium`}>
                  Mark as Featured Post
                </label>
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className={`${themeClasses.primary} text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2`}
                >
                  <Save size={20} />
                  {loading ? "Publishing..." : "Publish Blog Post"}
                </Button>
              </div>
            </form>
          </Card>
        )}

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
                <div key={blog._id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-4">
                    {blog.imageUrl && (
                      <img
                        src={blog.imageUrl || "/placeholder.svg"}
                        alt={blog.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    )}
                    <div>
                      <h3 className={`font-semibold ${themeClasses.text}`}>{blog.title}</h3>
                      <p className={`text-sm ${themeClasses.text} opacity-70`}>
                        By {blog.author} • {new Date(blog.publishedAt).toLocaleDateString()}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`text-xs px-2 py-1 rounded ${themeClasses.primary} text-white`}>
                          {blog.category}
                        </span>
                        {blog.featured && (
                          <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-white">Featured</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => deleteBlog(blog._id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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
  )
}

export default AdminDashboard
