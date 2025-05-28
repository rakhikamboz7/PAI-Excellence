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

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
