"use client"

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Star, BookOpen } from "lucide-react"

const Instructor = () => {
  return (
    <section className="py-12 px-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl font-bold mb-8"
        >
          Meet Your Instructor
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary">
              <img
                src="/ceo image.jpeg"
                alt="Instructor"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-xl font-bold mb-2">Dr. Rajinder Singh Sodhi</h3>
            <p className="text-gray-600 mb-4">
              Dr. Rajinder Singh Sodhi is an accomplished AI researcher and educator with over 15 years of experience in
              the field. He has worked on numerous AI projects and has published several research papers in prestigious
              journals.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold mb-3">Leading Major AI Research & Global Deployment</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Star className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Developed AI solutions for Fortune 500 companies</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Published research in top AI conferences</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-secondary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Led teams of AI researchers and engineers</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Specialization for Teaching & Course Material</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <BookOpen className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Designed curriculum for top universities</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Mentored hundreds of students in AI</span>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                    <span className="text-sm text-gray-700">Created industry-relevant course materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Instructor
