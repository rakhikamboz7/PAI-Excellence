"use client"

import { useState, useEffect, useRef } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Trophy, Target, Users, Briefcase, Code, Star } from "lucide-react"
import { useTranslation } from "react-i18next"

const StudentGains = () => {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideInterval = useRef(null)

  const achievements = t("studentGains.achievements", { returnObjects: true })
  const stats = t("studentGains.stats", { returnObjects: true })
  const totalSlides = achievements.length

  const achievementIcons = [Code, Briefcase, Users, Trophy]
  const achievementColors = [
    "from-orange-500 to-red-500",
    "from-orange-600 to-amber-600",
    "from-amber-500 to-yellow-500",
    "from-yellow-500 to-orange-500",
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
  }, [totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
    resetInterval()
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    resetInterval()
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
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

  // eslint-disable-next-line no-unused-vars
  const currentAchievement = achievements[currentSlide]
  const IconComponent = achievementIcons[currentSlide]
  const colorClass = achievementColors[currentSlide]

  return (
    <section className="py-16 px-16 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("studentGains.title")} <span className="text-orange-600">{t("studentGains.title")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t("studentGains.subtitle")}</p>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mb-8 space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="p-3 rounded-full bg-white shadow-lg border border-orange-200 hover:bg-orange-50 transition duration-300"
          >
            <ChevronLeft size={24} className="text-orange-600" />
          </motion.button>

          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-orange-600 w-8" : "bg-orange-300 hover:bg-orange-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="p-3 rounded-full bg-white shadow-lg border border-orange-200 hover:bg-orange-50 transition duration-300"
          >
            <ChevronRight size={24} className="text-orange-600" />
          </motion.button>
        </div>

        {/* Main Content */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            initial={false}
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0, x: currentSlide === index ? 0 : -50 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${colorClass} shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900">{achievement.title}</h3>
                        <p className="text-orange-600 font-semibold">Achievement #{index + 1}</p>
                      </div>
                    </div>

                    <p className="text-xl text-gray-700 leading-relaxed">{achievement.description}</p>

                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <Target className="w-5 h-5 text-orange-600 mr-2" />
                        Key Benefits
                      </h4>
                      <ul className="space-y-3">
                        {achievement.benefits.map((benefit, benefitIndex) => (
                          <motion.li
                            key={benefitIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                              opacity: currentSlide === index ? 1 : 0,
                              x: currentSlide === index ? 0 : -20,
                            }}
                            transition={{ duration: 0.4, delay: 0.4 + benefitIndex * 0.1 }}
                            className="flex items-start"
                          >
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-8 py-4 rounded-xl bg-gradient-to-r ${colorClass} text-white font-bold shadow-lg hover:shadow-xl transition duration-300`}
                    >
                      {t("studentGains.startJourney")}
                    </motion.button>
                  </motion.div>

                  {/* Right - Image Carousel */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0, x: currentSlide === index ? 0 : 50 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative"
                  >
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2, 3].map((imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: currentSlide === index ? 1 : 0,
                            scale: currentSlide === index ? 1 : 0.8,
                          }}
                          transition={{ duration: 0.5, delay: 0.6 + imgIndex * 0.1 }}
                          className={`rounded-2xl overflow-hidden shadow-lg border-4 border-white ${
                            imgIndex === 1 ? "col-span-2" : ""
                          }`}
                        >
                          <img
                            src="/placeholder.svg?height=200&width=300"
                            alt={`${achievement.title} example ${imgIndex}`}
                            className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Floating Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-orange-100"
                    >
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <span className="text-sm font-bold text-gray-900">98% Success Rate</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const statIcons = [Users, Briefcase, Target, Trophy]
            const StatIcon = statIcons[index]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 text-center hover:shadow-xl transition duration-300"
              >
                <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <StatIcon className="w-6 h-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default StudentGains
