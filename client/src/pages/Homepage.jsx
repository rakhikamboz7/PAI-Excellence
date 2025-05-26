import React from 'react'
import Mission from "../components/Mission"
import Batches from "../components/Batches"
import ProgramDetails from "../components/ProgramDetails"
import PdfEmbed from "../components/PdfEmbed"
import Instructor from "../components/Instructor"
import StudentGains from "../components/StudentGains"

import HeroCarousel from "../components/Hero"

function Homepage() {
  return (
    <div>

          
              <HeroCarousel />
                <Mission />
                <Batches />
                <ProgramDetails />
                {/* <PdfEmbed /> */}
                <Instructor />
                <StudentGains />
    </div>
  )
}

export default Homepage