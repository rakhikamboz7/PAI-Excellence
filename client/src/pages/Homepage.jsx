"use client"

import { useEdit } from "../contexts/EditContext"
import SimpleEditableComponent from "../components/SimpleEditableComponent"
import EditModeToggle from "../components/EditModeToggle"
import Hero from "../components/Hero"
import Mission from "../components/Mission"
import Batches from "../components/Batches"
import ProgramDetails from "../components/ProgramDetails"

import Instructor from "../components/Instructor"
import StudentGains from "../components/StudentGains"

// Modified Hero component that accepts props directly
const HeroWrapper = (props) => {
  console.log("Hero props:", props)
  return <Hero {...props} />
}

// Modified Mission component that accepts props directly
const MissionWrapper = (props) => {
  console.log("Mission props:", props)
  return <Mission {...props} />
}

// Modified Batches component that accepts props directly
const BatchesWrapper = (props) => {
  console.log("Batches props:", props)
  return <Batches {...props} />
}

// Modified ProgramDetails component that accepts props directly
const ProgramDetailsWrapper = (props) => {
  console.log("ProgramDetails props:", props)
  return <ProgramDetails {...props} />
}



// Modified Instructor component that accepts props directly
const InstructorWrapper = (props) => {
  console.log("Instructor props:", props)
  return <Instructor {...props} />
}

// Modified StudentGains component that accepts props directly
const StudentGainsWrapper = (props) => {
  console.log("StudentGains props:", props)
  return <StudentGains {...props} />
}

const Homepage = () => {
  const { getContent } = useEdit()

  // Default content for each component
  const heroDefaultContent = {
    title: "Namaste! Want to be an AI Expert?",
    subtitle: "Learn. Innovate. Excel.",
    description:
      "Our vision: To create AI experts in remote corners of India, with a focus on Punjab. We target school students and university graduates. So far, we have conducted live sessions for 50,000+ students.",
    buttonText: "Start Your AI Journey Today",
  }

  const missionDefaultContent = {
    title: "Our Mission & Vision",
    mission: "To democratize AI education and make it accessible to everyone in Punjab and beyond.",
    vision:
      "Creating a future where AI literacy is universal and every student has the opportunity to excel in artificial intelligence.",
  }

  const batchesDefaultContent = {
    title: "Available Batches & Live Classes",
    description: "Join our comprehensive AI fundamentals course designed for beginners.",
  }

  const programDetailsDefaultContent = {
    title: "Comprehensive AI Program Details",
    details: "Complete AI & Machine Learning Curriculum with hands-on projects.",
  }

  const instructorDefaultContent = {
    title: "Meet Our Expert Instructor",
    name: "Dr. AI Expert",
    bio: "Leading AI researcher with 10+ years of experience in machine learning and deep learning.",
  }

  const studentGainsDefaultContent = {
    title: "Student Gains",
    subtitle: "What our students achieve through our comprehensive AI programs",
  }

  // Get current content for each component
  const heroContent = getContent("hero", heroDefaultContent)
  const missionContent = getContent("mission", missionDefaultContent)
  const batchesContent = getContent("batches", batchesDefaultContent)
  const programDetailsContent = getContent("programDetails", programDetailsDefaultContent)
  
  const instructorContent = getContent("instructor", instructorDefaultContent)
  const studentGainsContent = getContent("studentGains", studentGainsDefaultContent)

  return (
    <main>
      <SimpleEditableComponent id="hero" defaultContent={heroDefaultContent}>
        <HeroWrapper {...heroContent} />
      </SimpleEditableComponent>

      <SimpleEditableComponent id="mission" defaultContent={missionDefaultContent}>
        <MissionWrapper {...missionContent} />
      </SimpleEditableComponent>

      <SimpleEditableComponent id="batches" defaultContent={batchesDefaultContent}>
        <BatchesWrapper {...batchesContent} />
      </SimpleEditableComponent>

      <SimpleEditableComponent id="programDetails" defaultContent={programDetailsDefaultContent}>
        <ProgramDetailsWrapper {...programDetailsContent} />
      </SimpleEditableComponent>

      

      <SimpleEditableComponent id="instructor" defaultContent={instructorDefaultContent}>
        <InstructorWrapper {...instructorContent} />
      </SimpleEditableComponent>

      <SimpleEditableComponent id="studentGains" defaultContent={studentGainsDefaultContent}>
        <StudentGainsWrapper {...studentGainsContent} />
      </SimpleEditableComponent>

      <EditModeToggle />
    </main>
  )
}

export default Homepage
