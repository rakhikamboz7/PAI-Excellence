"use client"

import { useTranslation } from "react-i18next"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Globe } from "lucide-react"

const LanguageToggle = () => {
  const { i18n, t } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pa" : "en"
    i18n.changeLanguage(newLang)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition duration-300 shadow-lg"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm">{i18n.language === "en" ? t("navbar.seeInPunjabi") : t("navbar.seeInEnglish")}</span>
    </motion.button>
  )
}

export default LanguageToggle
