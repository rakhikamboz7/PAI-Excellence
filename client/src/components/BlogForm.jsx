"use client"

import React from "react"

import { useState, useEffect, Suspense } from "react"
import { useTheme } from "../contexts/ThemeContext"
import { Button } from "./ui/Button"
import { Save, X, Eye, AlertTriangle } from "lucide-react"

// Lazy load the editors with error boundaries
const RichTextEditor = React.lazy(() => import("./RichTextEditor"))
// const SimpleTextEditor = React.lazy(() => import("./SimpleTextEditor"))

// Error boundary component for editor loading
class EditorErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Editor Error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="border border-red-300 rounded-lg p-4 bg-red-50">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h3 className="text-red-800 font-semibold">Editor Loading Error</h3>
          </div>
          <p className="text-red-700 text-sm mb-3">
            The text editor failed to load. Please try refreshing the page or use the simple editor mode.
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

const BlogForm = ({
  blog = null,
  onSubmit,
  onCancel,
  loading = false,
  mode = "create", // "create" or "edit"
}) => {
  const { currentTheme } = useTheme()
  const [useSimpleEditor, setUseSimpleEditor] = useState(false)
  // const [editorLoadError, setEditorLoadError] = useState(false)
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
  const [imagePreview, setImagePreview] = useState(null)
  const [showPreview, setShowPreview] = useState(false)

  // Get theme-specific classes
  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return {
          surface: "bg-white",
          primary: "bg-blue-primary",
          text: "text-blue-text",
          accent: "text-blue-primary",
          button: "bg-blue-primary hover:bg-blue-600",
        }
      case "purple":
        return {
          surface: "bg-white",
          primary: "bg-purple-primary",
          text: "text-purple-text",
          accent: "text-purple-primary",
          button: "bg-purple-primary hover:bg-purple-600",
        }
      case "green":
        return {
          surface: "bg-white",
          primary: "bg-green-primary",
          text: "text-green-text",
          accent: "text-green-primary",
          button: "bg-green-primary hover:bg-green-600",
        }
      case "dark":
        return {
          surface: "bg-dark-dark",
          primary: "bg-dark-primary",
          text: "text-dark-text",
          accent: "text-dark-primary",
          button: "bg-dark-primary hover:bg-gray-700",
        }
      default:
        return {
          surface: "bg-white",
          primary: "bg-orange-600",
          text: "text-gray-900",
          accent: "text-orange-600",
          button: "bg-orange-600 hover:bg-orange-700",
        }
    }
  }

  const themeClasses = getThemeClasses()

  // Populate form when editing
  useEffect(() => {
    if (blog && mode === "edit") {
      setFormData({
        title: blog.title || "",
        author: blog.author || "",
        excerpt: blog.excerpt || "",
        content: blog.content || "",
        category: blog.category || "",
        tags: blog.tags ? blog.tags.join(", ") : "",
        difficulty: blog.difficulty || "beginner",
        readTime: blog.readTime || 5,
        featured: blog.featured || false,
        metaDescription: blog.metaDescription || "",
        featuredImage: null, // Don't pre-populate file input
      })

      if (blog.imageUrl) {
        setImagePreview(blog.imageUrl)
      }
    }
  }, [blog, mode])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData({ ...formData, featuredImage: file })

      // Create preview
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Prepare tags array
    const tags = formData.tags ? formData.tags.split(",").map((tag) => tag.trim()) : []

    const submitData = {
      ...formData,
      tags,
      readTime: Number.parseInt(formData.readTime, 10),
    }

    onSubmit(submitData)
  }

  // const handleEditorToggle = () => {
  //   setUseSimpleEditor(!useSimpleEditor)
  //   setEditorLoadError(false)
  // }

  // Function to format content for preview
  const formatContentForPreview = (content) => {
    if (!content) return "<p class='text-gray-500 italic'>No content yet. Start writing to see the preview.</p>"

    // If content is HTML (from rich text editor)
    if (content.includes("<") && content.includes(">")) {
      return content
    }

    // If content is plain text or markdown-like (from simple editor)
    return content
      .replace(/\*\*(.*?)\*\*/g, "<strong class='font-semibold'>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em class='italic'>$1</em>")
      .replace(/## (.*?)(\n|$)/g, "<h2 class='text-2xl font-bold mt-6 mb-4 pb-2 border-b border-gray-200'>$1</h2>")
      .replace(/### (.*?)(\n|$)/g, "<h3 class='text-xl font-semibold mt-5 mb-3'>$1</h3>")
      .replace(/#### (.*?)(\n|$)/g, "<h4 class='text-lg font-medium mt-4 mb-2'>$1</h4>")
      .replace(/- (.*?)(\n|$)/g, "<li class='ml-4 mb-1'>• $1</li>")
      .replace(/\n\n/g, "</p><p class='mb-4 leading-relaxed'>")
      .replace(/\n/g, "<br>")
      .replace(/^/, "<p class='mb-4 leading-relaxed'>")
      .replace(/$/, "</p>")
      .replace(/<p class='mb-4 leading-relaxed'><\/p>/g, "")
      .replace(/<p class='mb-4 leading-relaxed'>(<h[1-6])/g, "$1")
      .replace(/(<\/h[1-6]>)<\/p>/g, "$1")
  }

  const categories = [
    { value: "ai-fundamentals", label: "AI Fundamentals" },
    { value: "machine-learning", label: "Machine Learning" },
    { value: "deep-learning", label: "Deep Learning" },
    { value: "ai-tools", label: "AI Tools & Frameworks" },
    { value: "industry-trends", label: "Industry Trends" },
    { value: "student-guides", label: "Student Guides" },
    { value: "project-tutorials", label: "Project Tutorials" },
  ]

  // Enhanced editor loading fallback
  const EditorLoadingFallback = () => (
    <div className="border border-gray-300 rounded-lg p-4 min-h-[200px] flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto mb-2"></div>
        <p className="text-gray-600 text-sm">Loading editor...</p>
        <button
          type="button"
          onClick={() => setUseSimpleEditor(true)}
          className="mt-2 text-xs text-blue-600 hover:text-blue-800 underline"
        >
          Use simple editor instead
        </button>
      </div>
    </div>
  )

  // eslint-disable-next-line no-undef
  const EditorComponent = useSimpleEditor ? SimpleTextEditor : RichTextEditor

  return (
    <div className={`${themeClasses.surface} rounded-lg shadow-lg`}>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className={`text-2xl font-bold ${themeClasses.text}`}>
          {mode === "edit" ? "Edit Blog Post" : "Create New Blog Post"}
        </h2>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Eye size={16} />
            {showPreview ? "Hide Preview" : "Show Preview"}
          </Button>
          {/* <Button
            type="button"
            onClick={handleEditorToggle}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            {useSimpleEditor ? "Rich Editor" : "Simple Editor"}
          </Button> */}
          <Button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <X size={16} />
            Cancel
          </Button>
        </div>
      </div>

      <div className="p-6">
        {showPreview ? (
          // Enhanced Preview Mode
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <h3 className={`text-lg font-semibold ${themeClasses.text}`}>Blog Post Preview</h3>
              </div>

              <div className="p-6">
                {imagePreview && (
                  <div className="mb-6">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Featured"
                      className="w-full h-64 object-cover rounded-lg shadow-sm"
                    />
                  </div>
                )}

                <div className="flex items-center gap-2 mb-6">
                  {formData.category && (
                    <span className={`text-xs px-3 py-1 rounded-full ${themeClasses.primary} text-white font-medium`}>
                      {categories.find((cat) => cat.value === formData.category)?.label}
                    </span>
                  )}
                  <span className={`text-xs px-3 py-1 rounded-full bg-gray-500 text-white font-medium`}>
                    {formData.difficulty}
                  </span>
                  {formData.featured && (
                    <span className="text-xs px-3 py-1 rounded-full bg-yellow-500 text-white font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <h1 className={`text-4xl font-bold ${themeClasses.text} mb-4 leading-tight`}>
                  {formData.title || "Your Blog Title Here"}
                </h1>

                <div
                  className={`flex items-center gap-4 text-sm ${themeClasses.text} opacity-70 mb-6 pb-4 border-b border-gray-200`}
                >
                  <span>By {formData.author || "Author Name"}</span>
                  <span>•</span>
                  <span>{formData.readTime} min read</span>
                  <span>•</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>

                {formData.excerpt && (
                  <div className="mb-8 p-4 bg-orange-50 border-l-4 border-orange-500 rounded-r-lg">
                    <p className={`text-lg ${themeClasses.text} leading-relaxed italic`}>{formData.excerpt}</p>
                  </div>
                )}

                <div
                  className={`prose prose-lg max-w-none ${themeClasses.text}`}
                  style={{
                    lineHeight: "1.8",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: formatContentForPreview(formData.content),
                  }}
                />

                {formData.tags && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className={`text-sm font-semibold ${themeClasses.text} mb-3`}>Tags:</h4>
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.split(",").map((tag, index) => (
                        <span key={index} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Edit Mode
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={`block ${themeClasses.text} font-medium mb-2`}>Title *</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter blog title"
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
                  placeholder="Enter author name"
                  required
                />
              </div>
            </div>

            {/* Featured Image */}
            <div>
              <label className={`block ${themeClasses.text} font-medium mb-2`}>
                Featured Image {mode === "create" && "*"}
              </label>
              <div className="space-y-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required={mode === "create"}
                />
                {imagePreview && (
                  <div className="relative">
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="absolute top-2 right-2">
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                        {mode === "edit" ? "Current Image" : "New Image"}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Excerpt */}
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
              <p className="text-sm text-gray-500 mt-1">{formData.excerpt.length}/200 characters</p>
            </div>

            {/* Content Editor */}
            <div>
              <label className={`block ${themeClasses.text} font-medium mb-2`}>Content *</label>

              {/* Editor status indicator */}
              <div className="mb-2 flex items-center gap-2 text-sm">
                <span
                  className={`px-2 py-1 rounded text-xs ${useSimpleEditor ? "bg-blue-100 text-blue-800" : "bg-green-100 text-green-800"}`}
                >
                  {useSimpleEditor ? "Simple Editor" : "Rich Text Editor"}
                </span>
                {/* {editorLoadError && (
                  <span className="px-2 py-1 rounded text-xs bg-yellow-100 text-yellow-800">Fallback mode active</span>
                )} */}
              </div>

              <EditorErrorBoundary>
                <Suspense fallback={<EditorLoadingFallback />}>
                  <EditorComponent
                    value={formData.content}
                    onChange={(content) => setFormData({ ...formData, content })}
                    placeholder="Write your blog content here..."
                  />
                </Suspense>
              </EditorErrorBoundary>
            </div>

            {/* Category, Difficulty, Read Time */}
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
                  {categories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
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

            {/* Tags */}
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

            {/* Meta Description */}
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
              <p className="text-sm text-gray-500 mt-1">{formData.metaDescription.length}/160 characters</p>
            </div>

            {/* Featured Checkbox */}
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

            {/* Submit Button */}
            <div className="flex gap-4 pt-6 border-t border-gray-200">
              <Button
                type="submit"
                disabled={loading}
                className={`${themeClasses.button} text-white px-8 py-3 rounded-lg transition-colors flex items-center gap-2`}
              >
                <Save size={20} />
                {loading
                  ? mode === "edit"
                    ? "Updating..."
                    : "Publishing..."
                  : mode === "edit"
                    ? "Update Blog Post"
                    : "Publish Blog Post"}
              </Button>
            </div>
          </form>
        )}
      </div>

      {/* Custom CSS for better content formatting */}
      <style jsx global>{`
        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
          margin-top: 1.5em;
          margin-bottom: 0.5em;
          font-weight: 600;
          line-height: 1.3;
        }
        
        .prose h2 {
          font-size: 1.5em;
          border-bottom: 2px solid #f3f4f6;
          padding-bottom: 0.3em;
        }
        
        .prose h3 {
          font-size: 1.25em;
        }
        
        .prose p {
          margin-bottom: 1em;
          line-height: 1.7;
        }
        
        .prose ul, .prose ol {
          margin: 1em 0;
          padding-left: 1.5em;
        }
        
        .prose li {
          margin-bottom: 0.5em;
          line-height: 1.6;
        }
        
        .prose strong {
          font-weight: 600;
          color: #374151;
        }
        
        .prose em {
          font-style: italic;
          color: #6b7280;
        }
        
        .prose code {
          background-color: #f3f4f6;
          padding: 0.2em 0.4em;
          border-radius: 0.25em;
          font-size: 0.9em;
          font-family: 'Courier New', monospace;
        }
        
        .prose pre {
          background-color: #1f2937;
          color: #f9fafb;
          padding: 1em;
          border-radius: 0.5em;
          overflow-x: auto;
          margin: 1em 0;
        }
        
        .prose blockquote {
          border-left: 4px solid #d1d5db;
          padding-left: 1em;
          margin: 1em 0;
          font-style: italic;
          color: #6b7280;
        }
      `}</style>
    </div>
  )
}

export default BlogForm
