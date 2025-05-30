"use client"

import { useTranslation } from "react-i18next"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { useEffect } from "react"
import { useTheme } from "../contexts/ThemeContext"

const LanguageToggle = () => {
  const { i18n, t } = useTranslation()
  const { theme } = useTheme()

  // Load saved language on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage")
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "pa" : "en"
    i18n.changeLanguage(newLang)
    // The language will be automatically saved to localStorage via the i18n event listener
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className={`flex items-center space-x-2 bg-${theme.primary} text-white px-4 py-2 rounded-lg font-medium hover:bg-${theme.hover} transition duration-300 shadow-lg`}
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm">{i18n.language === "en" ? t("navbar.seeInPunjabi") : t("navbar.seeInEnglish")}</span>
    </motion.button>
  )
}

export default LanguageToggle
