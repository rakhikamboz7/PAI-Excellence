"use client"

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

const Batches = () => {
  return (
    <section className="py-12 px-16 bg-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8"
        >
          New Batches and Upcoming Live Classes
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-3">New Batch starting June 15th</h3>
            <p className="text-gray-600 mb-4">
              Join our comprehensive AI program and learn from industry experts. Limited seats available, so enroll now
              to secure your spot.
            </p>
            <div className="flex items-center text-gray-500">
              <Calendar size={16} className="mr-2" />
              <span>June 15, 2023</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-3">Upcoming Live Class: Introduction to LLMs</h3>
            <p className="text-gray-600 mb-4">
              Join our free introductory session on Large Language Models. Open to all registrations.
            </p>
            <div className="flex items-center text-gray-500">
              <Clock size={16} className="mr-2" />
              <span>7:00 PM, June 20, 2023</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-semibold mb-3">Data Analysis Live Class Tomorrow!</h3>
            <p className="text-gray-600 mb-4">
              Learn the fundamentals of Data Analysis in our upcoming live class. Register now to secure your spot!
            </p>
            <div className="flex items-center text-gray-500">
              {/* <Calendar size={16} className="mr-2" /> */}
              {/* <span>June 15, 2023</span> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Batches
