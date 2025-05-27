import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"

import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"

import Homepage from "./pages/Homepage"
import FutureOfIT from "./pages/MediaCoverage"
import Coursedetails from "./components/Coursedetails"
import Events from "./components/Events"

 function App() {
  return (
   
      <div className="font-sans">
        <Navbar />
         
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/media-coverage" element={<FutureOfIT />} />
          <Route path= "/course-details" element={< Coursedetails />} />
          <Route path = "/events" element= {<Events/>} />        
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
   
  )
}

export default App