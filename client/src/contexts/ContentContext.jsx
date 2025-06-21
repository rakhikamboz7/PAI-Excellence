/* eslint-disable react-refresh/only-export-components */
"use client"

import { createContext, useContext, useState, useEffect } from "react"

const ContentContext = createContext()

export const useContent = () => {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error("useContent must be used within a ContentProvider")
  }
  return context
}

// Default content structure for all pages
const defaultContent = {
  homepage: {
    hero: {
      id: "hero",
      type: "hero",
      order: 0,
      content: {
        title: "Namaste! Want to be an AI Expert?",
        subtitle: "Learn. Innovate. Excel.",
        description:
          "Our vision: To create AI experts in remote corners of India, with a focus on Punjab. We target school students and university graduates. So far, we have conducted live sessions for 50,000+ students.",
        sponsor: "Sponsored by ML0.AI & SimpleMindSchool.com",
        buttonText: "Start Your AI Journey Today",
        buttonLink: "/course-details",
        ceoImage: "/ceo-image.jpg",
      },
      isVisible: true,
    },
    aboutUs: {
      id: "aboutUs",
      type: "aboutUs",
      order: 1,
      content: {
        title: "About PAI Excel",
        ourStory: "Our Story",
        storyContent1:
          "Punjab AI Excellence was founded with a vision to democratize AI education across Punjab and beyond.",
        storyContent2:
          "We believe that every student deserves access to world-class AI education, regardless of their location.",
        ourValues: "Our Values",
        values: [
          {
            title: "Excellence in Education",
            description: "We strive to provide the highest quality AI education with industry-relevant curriculum.",
          },
          {
            title: "Innovation in Teaching",
            description: "We use cutting-edge teaching methodologies to make complex AI concepts accessible.",
          },
          {
            title: "Accessibility for All",
            description: "We ensure our programs are accessible to students from all backgrounds.",
          },
        ],
      },
      isVisible: true,
    },
    instructor: {
      id: "instructor",
      type: "instructor",
      order: 2,
      content: {
        title: "Meet Our Expert Instructor",
        name: "Dr. AI Expert",
        bio: "Leading AI researcher with 10+ years of experience in machine learning and deep learning. Passionate about making AI education accessible to everyone.",
        image: "/ceo-image.jpg",
        credentials: [
          "PhD in Computer Science",
          "Former Google AI Researcher",
          "Published 50+ research papers",
          "10+ years industry experience",
        ],
        achievements: "Key Achievements",
        experience: "Professional Experience",
      },
      isVisible: true,
    },
    studentGains: {
      id: "studentGains",
      type: "studentGains",
      order: 3,
      content: {
        title: "Student Gains",
        subtitle: "What our students achieve through our comprehensive AI programs",
        achievements: [
          {
            title: "Technical Mastery",
            description: "Master Python, TensorFlow, PyTorch, and other cutting-edge AI tools and frameworks.",
            benefits: [
              "Hands-on coding experience",
              "Real-world project development",
              "Industry-standard tools proficiency",
              "Advanced algorithm implementation",
            ],
          },
          {
            title: "Career Advancement",
            description: "Build a strong foundation for AI careers with industry-relevant skills and knowledge.",
            benefits: [
              "Job placement assistance",
              "Resume building support",
              "Interview preparation",
              "Industry networking opportunities",
            ],
          },
          {
            title: "Innovation Skills",
            description: "Develop creative problem-solving abilities and innovative thinking in AI applications.",
            benefits: [
              "Creative problem solving",
              "Research methodology",
              "Innovation frameworks",
              "Entrepreneurial mindset",
            ],
          },
          {
            title: "Industry Recognition",
            description: "Gain recognition in the AI community through projects, certifications, and achievements.",
            benefits: [
              "Professional certifications",
              "Portfolio development",
              "Community recognition",
              "Thought leadership opportunities",
            ],
          },
        ],
        stats: [
          { number: "5000+", label: "Students Trained" },
          { number: "95%", label: "Job Placement Rate" },
          { number: "50+", label: "Industry Partners" },
          { number: "4.9/5", label: "Student Rating" },
        ],
        startJourney: "Start Your AI Journey",
      },
      isVisible: true,
    },
    batches: {
      id: "batches",
      type: "batches",
      order: 4,
      content: {
        title: "Available Batches & Live Classes",
        newBatch: {
          title: "New AI Fundamentals Batch Starting Soon!",
          description:
            "Join our comprehensive AI fundamentals course designed for beginners. Learn the basics of artificial intelligence, machine learning, and practical applications.",
          date: "Starting January 15, 2024",
        },
        liveClass: {
          title: "Free Live AI Workshop",
          description:
            "Join our free live workshop on 'Introduction to Machine Learning' and get a taste of our teaching methodology.",
          time: "7:00 PM, Tomorrow",
        },
      },
      isVisible: true,
    },
    mission: {
      id: "mission",
      type: "mission",
      order: 5,
      content: {
        title: "Our Mission & Vision",
        mission: "To democratize AI education and make it accessible to everyone in Punjab and beyond.",
        vision:
          "Creating a future where AI literacy is universal and every student has the opportunity to excel in artificial intelligence.",
        values: [
          "Excellence in Education",
          "Innovation in Teaching",
          "Accessibility for All",
          "Community Building",
          "Ethical AI Development",
          "Continuous Learning",
        ],
        commitment:
          "We are committed to providing world-class AI education that empowers students to become leaders in the field of artificial intelligence.",
      },
      isVisible: true,
    },
    programDetails: {
      id: "programDetails",
      type: "programDetails",
      order: 6,
      content: {
        title: "Comprehensive AI Program Details",
        details: [
          "Complete AI & Machine Learning Curriculum",
          "Hands-on Projects with Real-world Applications",
          "Industry Expert Mentorship & Guidance",
          "Job Placement Assistance & Career Support",
          "Flexible Learning Schedule & Online Resources",
        ],
        enrollNow: "Enroll Now",
        scheduleCall: "Schedule a Call",
      },
      isVisible: true,
    },
  },
  courseDetails: {},
  mediaCoverage: {},
  events: {},
  aboutUsPage: {},
  blogs: {},
}

export const ContentProvider = ({ children }) => {
  const [content, setContent] = useState(defaultContent)
  const [isLiveEditing, setIsLiveEditing] = useState(false)
  const [selectedComponent, setSelectedComponent] = useState(null)
  const [currentPage, setCurrentPage] = useState("homepage")
  const [draggedComponent, setDraggedComponent] = useState(null)

  useEffect(() => {
    // Load saved content from localStorage
    const savedContent = localStorage.getItem("paiExcelContent")
    if (savedContent) {
      try {
        const parsedContent = JSON.parse(savedContent)
        setContent(parsedContent)
      } catch (error) {
        console.error("Error loading saved content:", error)
      }
    }
  }, [])

  const saveContent = (newContent) => {
    setContent(newContent)
    localStorage.setItem("paiExcelContent", JSON.stringify(newContent))
  }

  const updateComponent = (page, componentId, newContent) => {
    const updatedContent = {
      ...content,
      [page]: {
        ...content[page],
        [componentId]: {
          ...content[page][componentId],
          content: newContent,
        },
      },
    }
    saveContent(updatedContent)
  }

  const reorderComponents = (page, newOrder) => {
    const updatedContent = { ...content }

    newOrder.forEach((componentId, index) => {
      if (updatedContent[page] && updatedContent[page][componentId]) {
        updatedContent[page][componentId].order = index
      }
    })

    saveContent(updatedContent)
  }

  const toggleComponentVisibility = (page, componentId) => {
    const updatedContent = {
      ...content,
      [page]: {
        ...content[page],
        [componentId]: {
          ...content[page][componentId],
          isVisible: !content[page][componentId].isVisible,
        },
      },
    }
    saveContent(updatedContent)
  }

  const getOrderedComponents = (page) => {
    if (!content[page]) return []
    return Object.values(content[page]).sort((a, b) => a.order - b.order)
  }

  const getComponentContent = (page, componentId) => {
    return content[page]?.[componentId]?.content || {}
  }

  const isComponentVisible = (page, componentId) => {
    return content[page]?.[componentId]?.isVisible !== false
  }

  const resetToDefault = (page) => {
    const updatedContent = {
      ...content,
      [page]: defaultContent[page],
    }
    saveContent(updatedContent)
    setSelectedComponent(null)
  }

  const addComponent = (page, componentType, position) => {
    const newComponentId = `${componentType}_${Date.now()}`
    const newComponent = {
      id: newComponentId,
      type: componentType,
      order: position,
      content: getDefaultContentForType(componentType),
      isVisible: true,
    }

    const updatedContent = {
      ...content,
      [page]: {
        ...content[page],
        [newComponentId]: newComponent,
      },
    }

    // Reorder other components
    Object.keys(updatedContent[page]).forEach((id) => {
      if (id !== newComponentId && updatedContent[page][id].order >= position) {
        updatedContent[page][id].order += 1
      }
    })

    saveContent(updatedContent)
  }

  const removeComponent = (page, componentId) => {
    const updatedContent = { ...content }
    const componentOrder = updatedContent[page][componentId].order

    delete updatedContent[page][componentId]

    // Reorder remaining components
    Object.keys(updatedContent[page]).forEach((id) => {
      if (updatedContent[page][id].order > componentOrder) {
        updatedContent[page][id].order -= 1
      }
    })

    saveContent(updatedContent)
  }

  const getDefaultContentForType = (type) => {
    const defaults = {
      hero: {
        title: "New Hero Section",
        subtitle: "Subtitle here",
        description: "Description here",
        buttonText: "Call to Action",
        buttonLink: "#",
      },
      aboutUs: {
        title: "About Us",
        description: "About us description",
      },
      // Add more default content types as needed
    }
    return defaults[type] || { title: "New Component", description: "Component description" }
  }

  const value = {
    content,
    isLiveEditing,
    selectedComponent,
    currentPage,
    draggedComponent,
    setIsLiveEditing,
    setSelectedComponent,
    setCurrentPage,
    setDraggedComponent,
    updateComponent,
    reorderComponents,
    toggleComponentVisibility,
    getOrderedComponents,
    getComponentContent,
    isComponentVisible,
    resetToDefault,
    addComponent,
    removeComponent,
    saveContent,
  }

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}
