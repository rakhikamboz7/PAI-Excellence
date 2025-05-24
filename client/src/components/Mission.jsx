"use client"

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Check } from "lucide-react"

const Mission = () => {
  const achievements = [
    "Punjab AI Excellence Centre established",
    "Digital Punjab Vision 2025 implemented",
    "First AI Strategy for Punjab State launched",
    "Skill development in partnership with PSEB and EdTech companies",
    "Punjab Hackathon fostering innovation in AI solutions",
  ]

  return (
    <section className="py-16 px-16 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="relative">
              <img
                src="/ai-image.jpg"
                alt="AI Innovation workspace"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>

            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              To create a vibrant ecosystem of AI innovation and digital excellence in Punjab, driving economic growth
              and improving the quality of life for citizens. We aim to foster collaboration between government,
              industry, academia, and the community to propel the state as a leader in AI advancements.
            </p>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-base leading-relaxed">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Mission
