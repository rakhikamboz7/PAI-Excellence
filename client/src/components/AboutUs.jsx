"use client"

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

const AboutUs = () => {
  const { t } = useTranslation()
  const values = t("aboutUs.values", { returnObjects: true })

  return (
    <section className="py-16 px-16 theme-section">
      <div className="container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 theme-heading"
        >
          {t("aboutUs.title")}
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4 theme-text">{t("aboutUs.ourStory")}</h2>
            <p className="theme-text-secondary mb-6">{t("aboutUs.storyContent1")}</p>
            <p className="theme-text-secondary mb-6">{t("aboutUs.storyContent2")}</p>
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
          <h2 className="text-2xl font-semibold mb-6 theme-text">{t("aboutUs.ourValues")}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="theme-card p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 theme-heading">{value.title}</h3>
                <p className="theme-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
