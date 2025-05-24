"use client"

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const PdfEmbed = () => {
  return (
    <section className="py-12 px-16 bg-white">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-6"
        >
          Pdf from Drive embedding
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-100 rounded-lg p-4 h-64 flex items-center justify-center"
        >
          <p className="text-gray-500">PDF Embed Placeholder</p>
        </motion.div>
      </div>
    </section>
  )
}

export default PdfEmbed
