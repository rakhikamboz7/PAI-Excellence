"use client"

import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"

import { AuthProvider } from "./contexts/AuthContext"
import { ThemeProvider } from "./contexts/ThemeContext"
import { ContentProvider } from "./contexts/ContentContext"
import { AdminProvider } from "./contexts/AdminContext"
import { EditProvider } from "./contexts/EditContext" // ✅ ADD THIS LINE

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Homepage from "./pages/Homepage"
import Coursedetails from "./components/Coursedetails"
import MediaCoverage from "./pages/MediaCoverage"
import Events from "./components/Events"
import AboutUs from "./components/AboutUs"
import AdminDashboard from "./pages/AdminDashboard"
import Blogs from "./pages/Blogs"
import AdminControls from "./components/AdminControls"
import "./i18n/i18n"

function AppContent() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isAdminRoute = location.pathname.startsWith("/admin-dashboard")

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdminRoute && <Navbar />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/course-details" element={<Coursedetails />} />
          <Route path="/media-coverage" element={<MediaCoverage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
      <AdminControls />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ContentProvider>
          <AdminProvider>
            <EditProvider>
              <AppContent />
            </EditProvider>
          </AdminProvider>
        </ContentProvider>
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
