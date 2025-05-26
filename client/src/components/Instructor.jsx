"use client"

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { FileText, Users, Cpu, Brain, Code, Building, GraduationCap, BookOpen, Award, Lightbulb } from "lucide-react"

const Instructor = () => {
  const expertisePoints = [
    {
      icon: FileText,
      text: "50+ research papers in top AI conferences like ICLR, NeurIPS — trusted voice in AI research.",
    },
    {
      icon: Award,
      text: "Collaborated with Yann LeCun (Meta's Chief AI Scientist, Turing Award winner) — part of elite AI research circles.",
    },
    {
      icon: Cpu,
      text: "Created Mango ML Library at ARM — used to design CPUs in billions of smartphones (Samsung, iPhones).",
    },
    {
      icon: Brain,
      text: "Led GenAI team at Abacus AI — built Dracarys-ver2, a model that outperforms ChatGPT-4o, Claude, Gemini in coding tasks.",
    },
    {
      icon: Building,
      text: "Worked at Amazon, ARM, IBM, Oracle, Teradata — deep exposure to both research and production-level AI systems.",
    },
  ]

  const teachingPoints = [
    {
      icon: Code,
      text: "Founder of ml0.ai — lets anyone build AI models without writing code, democratizing AI for non-tech users.",
    },
    {
      icon: GraduationCap,
      text: "Guided 150+ California schools in AI/STEM through Los Angeles Computing Circle (LACC).",
    },
    {
      icon: Users,
      text: "Trainer for faculty dev programs at IIT Roorkee — trusted mentor for top educators.",
    },
    {
      icon: BookOpen,
      text: "Author of 2 admission guidebooks — helping Indian students get into top U.S. universities.",
    },
    {
      icon: Lightbulb,
      text: "Tech advisor at SimpleMindSchool.com — making complex tech easy to learn for beginners.",
    },
  ]

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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Your Instructor</h2>
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
                  alt="Dr. Sandeep Singh Sandha"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-orange-600 text-white p-3 rounded-full shadow-lg">
                <Award className="w-6 h-6" />
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Sandeep Singh Sandha</h3>
              <p className="text-orange-600 font-semibold text-lg">Lead Instructor</p>
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
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                Dr. Sandeep Singh Sandha is an accomplished AI researcher and educator with a Ph.D. and Master's in
                Computer Science from UCLA, where he was honored as the commencement speaker for the Class of 2022. He
                earned his B.Tech from IIT Roorkee with first-class distinction.
              </p>

              <div className="bg-orange-50 border-l-4 border-orange-600 p-4 rounded-r-lg">
                <p className="text-orange-800 font-semibold text-lg">
                  Innovator, Educator, and Visionary Leader in Advanced Technologies
                </p>
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
              <h4 className="text-xl font-bold text-gray-900">Cutting-Edge AI Expertise & Global Tech Impact</h4>
            </div>

            <div className="space-y-4">
              {expertisePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start group hover:bg-orange-50 p-3 rounded-lg transition-all duration-300"
                >
                  <div className="bg-orange-100 p-2 rounded-lg mr-4 group-hover:bg-orange-200 transition-all duration-300">
                    <point.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm group-hover:text-gray-900 transition-colors duration-300">
                    {point.text}
                  </p>
                </motion.div>
              ))}
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
              <h4 className="text-xl font-bold text-gray-900">Deep Passion for Teaching & Student Mentorship</h4>
            </div>

            <div className="space-y-4">
              {teachingPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start group hover:bg-orange-50 p-3 rounded-lg transition-all duration-300"
                >
                  <div className="bg-orange-100 p-2 rounded-lg mr-4 group-hover:bg-orange-200 transition-all duration-300">
                    <point.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm group-hover:text-gray-900 transition-colors duration-300">
                    {point.text}
                  </p>
                </motion.div>
              ))}
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
            <h3 className="text-2xl font-bold mb-4">Learn from a World-Class AI Expert</h3>
            <p className="text-orange-100 mb-6 text-lg">
              Join Dr. Sandha's comprehensive AI program and gain insights from someone who has shaped the future of AI
              at the world's leading tech companies.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition duration-300 shadow-lg"
            >
              Start Your AI Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Instructor
