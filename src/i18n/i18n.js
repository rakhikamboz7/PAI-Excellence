import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// Import translation files
import enTranslations from "./locales/en/translation.json"
import paTranslations from "./locales/pa/translation.json"

const resources = {
  en: {
    translation: enTranslations,
  },
  pa: {
    translation: paTranslations,
  },
}

// Get saved language from localStorage or default to 'en'
const savedLanguage = typeof window !== "undefined" ? localStorage.getItem("selectedLanguage") || "en" : "en"

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, // Use saved language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

// Save language to localStorage whenever it changes
i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("selectedLanguage", lng)
  }
})

export default i18n
