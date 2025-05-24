import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Mission from "./components/Mission"
import Batches from "./components/Batches"
import ProgramDetails from "./components/ProgramDetails"
import PdfEmbed from "./components/PdfEmbed"
import Instructor from "./components/Instructor"
import StudentGains from "./components/StudentGains"
import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <Mission />
                <Batches />
                <ProgramDetails />
                <PdfEmbed />
                <Instructor />
                <StudentGains />
              </main>
            }
          />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
