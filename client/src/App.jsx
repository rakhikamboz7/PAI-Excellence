"use client";

import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Homepage from "./pages/Homepage";
import MediaCoverage from "./pages/MediaCoverage";
import Coursedetails from "./components/Coursedetails";
import Events from "./components/Events";
import Blogs from "./pages/Blogs";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();

  // Language persistence
  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  // Google Analytics script loader and page view tracker
  useEffect(() => {
    const GA_MEASUREMENT_ID = "G-GYSWHREWTK";

    // Load GA script once
    const loadGAScript = () => {
      if (!document.querySelector(`script[src*="${GA_MEASUREMENT_ID}"]`)) {
        const script = document.createElement("script");
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;

        gtag("js", new Date());
        gtag("config", GA_MEASUREMENT_ID);
      }
    };

    loadGAScript();
  }, []); // Run only once on load

  // Track page views on route change
  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname,
      });
    }
  }, [location]);

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
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
