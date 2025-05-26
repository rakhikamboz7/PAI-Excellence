import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Mission from "./components/Mission"
import Batches from "./components/Batches"
import ProgramDetails from "./components/ProgramDetails"
import PdfEmbed from "./components/PdfEmbed"
import Instructor from "./components/Instructor"
import StudentGains from "./components/StudentGains"
import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"
import HeroCarousel from "./components/Hero"
import Homepage from "./pages/Homepage"
import FutureOfIT from "./pages/MediaCoverage"

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
         
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/media-coverage" element={<FutureOfIT />} />        
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
