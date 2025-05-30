"use client"

import { Routes, Route } from "react-router-dom"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { ThemeProvider } from "./contexts/ThemeContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"
import Homepage from "./pages/Homepage"
import MediaCoverage from "./pages/MediaCoverage"
import Coursedetails from "./components/Coursedetails"
import Events from "./components/Events"
// import { useTheme } from "../contexts/ThemeContext"
// import LanguageToggle from "./LanguageToggle"
// import ThemeSwitcher from "./ThemeSwitcher"
function App() {
  const { i18n } = useTranslation()
  // const { currentTheme } = useTheme()
  

  // Ensure language persistence on app load
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage")
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [i18n])

  return (
    <ThemeProvider>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/media-coverage" element={<MediaCoverage />} />
          <Route path="/course-details" element={<Coursedetails />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
