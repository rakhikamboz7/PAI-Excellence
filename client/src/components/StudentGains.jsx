/* eslint-disable no-unused-vars */
"use client"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"

const StudentGains = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3
  const slideInterval = useRef(null)

  const gains = [
    {
      title: "Hands-on AI project experience",
      images: [
        "/ai-projects.jpeg",
        "/projects.jpeg",
        "/prjc.jpeg",
      ],
    },
    {
      title: "Industry-ready AI skills and certification",
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
    },
    {
      title: "Networking with AI professionals",
      images: [
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
        "/placeholder.svg?height=200&width=300",
      ],
    },
  ]

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current)
      }
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    resetInterval()
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    resetInterval()
  }

  const resetInterval = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)
  }

  return (
    <section className="py-12 px-16 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-8"
        >
          <h2 className="text-2xl font-bold">What will student gain</h2>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            initial={false}
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {gains.map((gain, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <h3 className="text-lg font-semibold mb-6">{gain.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {gain.images.map((img, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: imgIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="rounded-lg overflow-hidden shadow-md"
                    >
                      <img
                        src={img || "/placeholder.svg"}
                        alt={`Student gain ${imgIndex + 1}`}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StudentGains
