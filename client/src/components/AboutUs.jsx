/* eslint-disable no-unused-vars */
"use client"

import { motion } from "framer-motion"

const AboutUs = () => {
  return (
    <section className="py-16 px-16 bg-white">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-primary"
        >
          About Punjab AI Excellence
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Punjab AI Excellence was established in 2022 with a vision to transform Punjab into a hub for artificial
              intelligence innovation and education. Our journey began with a small team of passionate AI researchers
              and educators who recognized the potential of AI to drive economic growth and improve quality of life in
              the region.
            </p>
            <p className="text-gray-700 mb-6">
              Since our inception, we have grown rapidly, partnering with government agencies, educational institutions,
              and industry leaders to create a comprehensive ecosystem for AI development and learning in Punjab.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Punjab AI Excellence Team"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Innovation</h3>
              <p className="text-gray-700">
                We constantly push the boundaries of what's possible with AI, encouraging creative thinking and novel
                approaches to problem-solving.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Collaboration</h3>
              <p className="text-gray-700">
                We believe in the power of partnerships between government, industry, academia, and the community to
                drive meaningful change.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-primary">Excellence</h3>
              <p className="text-gray-700">
                We strive for the highest standards in everything we do, from our educational programs to our research
                initiatives.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
