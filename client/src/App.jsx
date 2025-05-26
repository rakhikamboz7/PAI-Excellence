import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Coursedetails from './components/Coursedetails.jsx'
import Mediacoverage from './components/Mediacoverage.jsx'
import Events from './components/Events.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-gray-50 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Coursedetails />} />
          <Route path="/media" element={<Mediacoverage />} />
          <Route path="/events" element={<Events />} />
          {/* Redirect any unknown path to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
