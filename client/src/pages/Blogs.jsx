"use client"
import { useCallback } from "react"
import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useTheme } from "../contexts/ThemeContext"
import { publicClient } from "../sanity/config"
import { Card } from "../components/ui/card"
import { Button } from "../components/ui/Button"
import { Clock, User, ArrowRight, Search, AlertCircle } from "lucide-react"

const Blogs = () => {
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation()
  const { currentTheme } = useTheme()
  const [blogs, setBlogs] = useState([])
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState("")

  const categories = [
    { value: "ai-fundamentals", label: "AI Fundamentals" },
    { value: "machine-learning", label: "Machine Learning" },
    { value: "deep-learning", label: "Deep Learning" },
    { value: "ai-tools", label: "AI Tools & Frameworks" },
    { value: "industry-trends", label: "Industry Trends" },
    { value: "student-guides", label: "Student Guides" },
    { value: "project-tutorials", label: "Project Tutorials" },
  ]

  const difficulties = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" },
  ]

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
          button: "bg-blue-primary hover:bg-blue-600",
        }
      case "purple":
        return {
          background: "bg-purple-light",
          surface: "bg-white",
          primary: "bg-purple-primary",
          text: "text-purple-text",
          accent: "text-purple-primary",
          button: "bg-purple-primary hover:bg-purple-600",
        }
      case "green":
        return {
          background: "bg-green-light",
          surface: "bg-white",
          primary: "bg-green-primary",
          text: "text-green-text",
          accent: "text-green-primary",
          button: "bg-green-primary hover:bg-green-600",
        }
      case "dark":
        return {
          background: "bg-dark-light",
          surface: "bg-dark-dark",
          primary: "bg-dark-primary",
          text: "text-dark-text",
          accent: "text-dark-primary",
          button: "bg-dark-primary hover:bg-gray-700",
        }
      default:
        return {
          background: "bg-orange-50",
          surface: "bg-white",
          primary: "bg-orange-600",
          text: "text-gray-900",
          accent: "text-orange-600",
          button: "bg-orange-600 hover:bg-orange-700",
        }
    }
  }

  const themeClasses = getThemeClasses()

  useEffect(() => {
    fetchBlogs()
  }, [])



  const filterBlogs = useCallback(() => {
    let filtered = [...blogs]

    if (searchTerm) {
      filtered = filtered.filter(
        (blog) =>
          blog.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter((blog) => blog.category === selectedCategory)
    }

    if (selectedDifficulty) {
      filtered = filtered.filter((blog) => blog.difficulty === selectedDifficulty)
    }

    setFilteredBlogs(filtered)
  }, [blogs, searchTerm, selectedCategory, selectedDifficulty])

  useEffect(() => {
    filterBlogs()
  }, [blogs, searchTerm, selectedCategory, loading, selectedDifficulty, filterBlogs])

  const fetchBlogs = async () => {
    try {
      setLoading(true)
      console.log("Fetching blogs for public display...")

      const query = `*[_type == "blog"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        author,
        publishedAt,
        excerpt,
        category,
        tags,
        difficulty,
        readTime,
        featured,
        "imageUrl": featuredImage.asset->url
      }`

      const result = await publicClient.fetch(query)
      console.log("Fetched blogs for public display:", result)
      setBlogs(result)
      setError(null)
    } catch (error) {
      console.error("Error fetching blogs:", error)
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const getCategoryLabel = (value) => {
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

  if (loading) {
    return (
      <div className={`min-h-screen ${themeClasses.background} flex items-center justify-center`}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <p className={`${themeClasses.text}`}>Loading blogs...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={`min-h-screen ${themeClasses.background} py-8 px-4`}>
        <div className="container mx-auto max-w-6xl">
          <Card className={`${themeClasses.surface} p-8 text-center`}>
            <AlertCircle size={48} className="text-red-500 mx-auto mb-4" />
            <h1 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>Error Loading Blogs</h1>
            <p className={`${themeClasses.text} mb-6`}>We couldn't load the blog posts. Please try again later.</p>
            <div className="bg-gray-100 p-4 rounded-lg text-left mb-6">
              <p className="font-mono text-sm">Error: {error}</p>
            </div>
            <Button onClick={() => fetchBlogs()} className={`${themeClasses.primary} text-white px-6 py-3 rounded-lg`}>
              Try Again
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
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold ${themeClasses.text} mb-4`}>PAI Excel AI Blog</h1>
          <p className={`text-xl ${themeClasses.text} opacity-70 max-w-3xl mx-auto`}>
            Discover the latest in AI, machine learning, and technology. Learn from experts and build your AI skills
            with our comprehensive guides and tutorials.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className={`${themeClasses.surface} p-6 mb-8`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Levels</option>
              {difficulties.map((difficulty) => (
                <option key={difficulty.value} value={difficulty.value}>
                  {difficulty.label}
                </option>
              ))}
            </select>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("")
                setSelectedDifficulty("")
              }}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Clear Filters
            </Button>
          </div>
        </Card>

        {/* Featured Posts */}
        {blogs.some((blog) => blog.featured) && (
          <div className="mb-12">
            <h2 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>Featured Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogs
                .filter((blog) => blog.featured)
                .slice(0, 2)
                .map((blog) => (
                  <Card
                    key={blog._id}
                    className={`${themeClasses.surface} overflow-hidden hover:shadow-lg transition-shadow`}
                  >
                    {blog.imageUrl && (
                      <img
                        src={blog.imageUrl || "/placeholder.svg"}
                        alt={blog.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`text-xs px-2 py-1 rounded ${themeClasses.primary} text-white`}>
                          {getCategoryLabel(blog.category)}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded text-white ${getDifficultyColor(blog.difficulty)}`}>
                          {blog.difficulty}
                        </span>
                        <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-white">Featured</span>
                      </div>
                      <h3 className={`text-xl font-bold ${themeClasses.text} mb-2`}>{blog.title}</h3>
                      <p className={`${themeClasses.text} opacity-70 mb-4`}>{blog.excerpt}</p>
                      <div className={`flex items-center justify-between text-sm ${themeClasses.text} opacity-60`}>
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User size={14} />
                            {blog.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {blog.readTime} min read
                          </span>
                        </div>
                        <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div className="mb-8">
          <h2 className={`text-2xl font-bold ${themeClasses.text} mb-6`}>All Posts ({filteredBlogs.length})</h2>
          {filteredBlogs.length === 0 ? (
            <Card className={`${themeClasses.surface} p-12 text-center`}>
              <p className={`${themeClasses.text} opacity-70 text-lg`}>No blog posts found matching your criteria.</p>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog) => (
                <Card
                  key={blog._id}
                  className={`${themeClasses.surface} overflow-hidden hover:shadow-lg transition-shadow group`}
                >
                  {blog.imageUrl && (
                    <div className="relative overflow-hidden">
                      <img
                        src={blog.imageUrl || "/placeholder.svg"}
                        alt={blog.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {blog.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="text-xs px-2 py-1 rounded bg-yellow-500 text-white">Featured</span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs px-2 py-1 rounded ${themeClasses.primary} text-white`}>
                        {getCategoryLabel(blog.category)}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded text-white ${getDifficultyColor(blog.difficulty)}`}>
                        {blog.difficulty}
                      </span>
                    </div>
                    <h3 className={`text-lg font-bold ${themeClasses.text} mb-2 line-clamp-2`}>{blog.title}</h3>
                    <p className={`${themeClasses.text} opacity-70 mb-4 line-clamp-3`}>{blog.excerpt}</p>
                    <div className={`flex items-center justify-between text-sm ${themeClasses.text} opacity-60 mb-4`}>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <User size={14} />
                          {blog.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {blog.readTime} min
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${themeClasses.text} opacity-60`}>
                        {new Date(blog.publishedAt).toLocaleDateString()}
                      </span>
                      <Button
                        className={`${themeClasses.button} text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2`}
                      >
                        Read More
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <Card className={`${themeClasses.surface} p-8 text-center`}>
          <h2 className={`text-2xl font-bold ${themeClasses.text} mb-4`}>Want to contribute to our AI community?</h2>
          <p className={`${themeClasses.text} opacity-70 mb-6`}>
            Share your AI knowledge and help students learn. Contact us to become a guest writer.
          </p>
          <Button className={`${themeClasses.button} text-white px-8 py-3 rounded-lg transition-colors`}>
            Contact Us
          </Button>
        </Card>
      </div>
    </div>
  )
}

export default Blogs
