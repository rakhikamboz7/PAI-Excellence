"use client"

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { FileText, Users, Cpu, Brain, Code, Building, GraduationCap, BookOpen, Award, Lightbulb } from "lucide-react"
import { useTranslation } from "react-i18next"

const Instructor = () => {
  const { t } = useTranslation()

  const expertisePoints = t("instructor.expertise.points", { returnObjects: true })
  const teachingPoints = t("instructor.teaching.points", { returnObjects: true })

  const expertiseIcons = [FileText, Award, Cpu, Brain, Building]
  const teachingIcons = [Code, GraduationCap, Users, BookOpen, Lightbulb]

  return (
    <section className="py-16 px-16 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("instructor.title")}</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 items-start mb-12">
          {/* Left - Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-6">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-orange-600 shadow-2xl bg-white p-2">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt={t("instructor.name")}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-orange-600 text-white p-3 rounded-full shadow-lg">
                <Award className="w-6 h-6" />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("instructor.name")}</h3>
              <p className="text-orange-600 font-semibold text-lg">{t("instructor.position")}</p>
            </div>
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">{t("instructor.description")}</p>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-r-lg">
                <p className="text-orange-800 font-semibold text-lg">{t("instructor.subtitle")}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Expertise Sections */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-xl mr-4">
                <Brain className="w-7 h-7 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">{t("instructor.expertise.title")}</h4>
            </div>

            <div className="space-y-4">
              {expertisePoints.map((point, index) => {
                const IconComponent = expertiseIcons[index]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start group hover:bg-orange-50 p-3 rounded-lg transition-all duration-300"
                  >
                    <div className="bg-orange-100 p-2 rounded-lg mr-4 group-hover:bg-orange-200 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-orange-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm group-hover:text-gray-900 transition-colors duration-300">
                      {point}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right - Teaching */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100"
          >
            <div className="flex items-center mb-6">
              <div className="bg-orange-100 p-3 rounded-xl mr-4">
                <GraduationCap className="w-7 h-7 text-orange-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">{t("instructor.teaching.title")}</h4>
            </div>

            <div className="space-y-4">
              {teachingPoints.map((point, index) => {
                const IconComponent = teachingIcons[index]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start group hover:bg-orange-50 p-3 rounded-lg transition-all duration-300"
                  >
                    <div className="bg-orange-100 p-2 rounded-lg mr-4 group-hover:bg-orange-200 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-orange-600" />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm group-hover:text-gray-900 transition-colors duration-300">
                      {point}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl p-8 max-w-3xl mx-auto shadow-2xl">
            <h3 className="text-2xl font-bold mb-4">{t("instructor.cta.title")}</h3>
            <p className="text-orange-100 mb-6 text-lg">{t("instructor.cta.description")}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition duration-300 shadow-lg"
            >
              {t("instructor.cta.button")}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Instructor
