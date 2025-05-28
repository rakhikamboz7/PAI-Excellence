import React from "react";
import Mission from "../components/Mission";
import Batches from "../components/Batches";
import ProgramDetails from "../components/ProgramDetails";
import Instructor from "../components/Instructor";
import StudentGains from "../components/StudentGains";

import Hero from "../components/Hero";

function Homepage() {
  return (
    <main>
      <Hero />      
      <Mission />
      <Batches />
      <ProgramDetails />
      {/* <PdfEmbed /> */}
      <Instructor />
      <StudentGains />
    </main>
  );
}

export default Homepage;
