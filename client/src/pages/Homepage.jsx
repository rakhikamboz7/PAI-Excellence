import React from "react";
import Mission from "../components/Mission";
import Batches from "../components/Batches";
import ProgramDetails from "../components/ProgramDetails";
import Instructor from "../components/Instructor";
import StudentGains from "../components/StudentGains";
// import { useTheme } from "../contexts/ThemeContext"
// import LanguageToggle from "./LanguageToggle"
// import ThemeSwitcher from "./ThemeSwitcher"
import Hero from "../components/Hero";

function Homepage() {

  return (
    <main>
      <Hero />      
   <ProgramDetails />
      <Instructor />
      <Mission />
      <Batches />
      {/* <PdfEmbed /> */}
    
      <StudentGains />
    </main>
  );
}

export default Homepage;
