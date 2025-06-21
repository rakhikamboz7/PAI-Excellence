// "use client"

// import { useEffect } from "react"
// import { useAdmin } from "../contexts/AdminContext"
// import EditableComponent from "../components/EditableComponent"
// import Hero from "../components/Hero"
// import Mission from "../components/Mission"
// import Batches from "../components/Batches"
// import ProgramDetails from "../components/ProgramDetails"

// import Instructor from "../components/Instructor"
// import StudentGains from "../components/StudentGains"

// const Homepage = () => {
//   // Default component configuration
//   const defaultComponents = [
//     {
//       id: "hero",
//       component: Hero,
//       content: {
//         title: "Welcome! Want to be an AI Expert?",
//         subtitle: "Learn. Innovate. Excel.",
//         description:
//           "Our vision: To create AI experts in remote corners of India, with a focus on Punjab. We target school students and university graduates. So far, we have conducted live sessions for 50,000+ students.",
//         buttonText: "Start Your AI Journey Today",
//       },
//     },
//     {
//       id: "mission",
//       component: Mission,
//       content: {
//         title: "Our Mission & Vision",
//         mission: "To democratize AI education and make it accessible to everyone in Punjab and beyond.",
//         vision:
//           "Creating a future where AI literacy is universal and every student has the opportunity to excel in artificial intelligence.",
//       },
//     },
//     {
//       id: "batches",
//       component: Batches,
//       content: {
//         title: "Available Batches & Live Classes",
//         description: "Join our comprehensive AI fundamentals course designed for beginners.",
//       },
//     },
//     {
//       id: "programDetails",
//       component: ProgramDetails,
//       content: {
//         title: "Comprehensive AI Program Details",
//         details: "Complete AI & Machine Learning Curriculum with hands-on projects.",
//       },
//     },
   
//     {
//       id: "instructor",
//       component: Instructor,
//       content: {
//         title: "Meet Our Expert Instructor",
//         name: "Dr. AI Expert",
//         bio: "Leading AI researcher with 10+ years of experience in machine learning and deep learning.",
//       },
//     },
//     {
//       id: "studentGains",
//       component: StudentGains,
//       content: {
//         title: "Student Gains",
//         subtitle: "What our students achieve through our comprehensive AI programs",
//       },
//     },
//   ]

//   const { getContent, getOrder, updateOrder } = useAdmin()

//   // Set initial order if not already set
//   useEffect(() => {
//     const defaultOrder = defaultComponents.map((comp) => comp.id)
//     const currentOrder = getOrder("homepage", [])

//     if (currentOrder.length === 0) {
//       updateOrder("homepage", defaultOrder)
//     }
//   }, [getOrder, updateOrder])

//   // Get the current component order
//   const componentOrder = getOrder(
//     "homepage",
//     defaultComponents.map((comp) => comp.id),
//   )

//   return (
//     <main>
//       {componentOrder.map((componentId, index) => {
//         const componentConfig = defaultComponents.find((comp) => comp.id === componentId)
//         if (!componentConfig) return null

//         const { component: Component, content: defaultContent } = componentConfig
//         const content = getContent(componentId, defaultContent)

//         return (
//           <EditableComponent
//             key={componentId}
//             id={componentId}
//             defaultContent={defaultContent}
//             index={index}
//             pageId="homepage"
//             totalComponents={componentOrder.length}
//           >
//             <Component {...content} />
//           </EditableComponent>
//         )
//       })}
//     </main>
//   )
// }

// export default Homepage

















// src/pages/Homepage.jsx
"use client";

import { useEffect } from "react";
import { useAdmin } from "../contexts/AdminContext";
import EditableComponent from "../components/EditableComponent";

import Hero from "../components/Hero";
import ProgramDetails from "../components/ProgramDetails";
import Batches from "../components/Batches";
import Registration from "../components/Registration";       // ← new!
import Mission from "../components/Mission";
import Instructor from "../components/Instructor";
import StudentGains from "../components/StudentGains";

const Homepage = () => {
  // Default component configuration
  const defaultComponents = [
    {
      id: "hero",
      component: Hero,
      content: {
        title: "Welcome! Want to be an AI Expert?",
        subtitle: "Learn. Innovate. Excel.",
        description:
          "Our vision: To create AI experts in remote corners of India, with a focus on Punjab. We target school students and university graduates. So far, we have conducted live sessions for 50,000+ students.",
        buttonText: "Start Your AI Journey Today",
      },
    },
    {
      id: "programDetails",
      component: ProgramDetails,
      content: {
        title: "Comprehensive AI Program Details",
        details: "Complete AI & Machine Learning Curriculum with hands‑on projects.",
      },
    },
    {
      id: "batches",
      component: Batches,
      content: {
        title: "Available Batches & Live Classes",
        description: "Join our comprehensive AI fundamentals course designed for beginners.",
      },
    },
    {
      id: "registration",
      component: Registration,    // ← new!
      content: {
        title: "Register Now",
        description:
          "Secure your seat today—limited spots available in each batch. Fill out the form to get started.",
        buttonText: "Register",
      },
    },
    {
      id: "mission",
      component: Mission,
      content: {
        title: "Our Mission & Vision",
        mission:
          "To democratize AI education and make it accessible to everyone in Punjab and beyond.",
        vision:
          "Creating a future where AI literacy is universal and every student has the opportunity to excel in artificial intelligence.",
      },
    },
    {
      id: "instructor",
      component: Instructor,
      content: {
        title: "Meet Our Expert Instructor",
        name: "Dr. AI Expert",
        bio: "Leading AI researcher with 10+ years of experience in machine learning and deep learning.",
      },
    },
    {
      id: "studentGains",
      component: StudentGains,
      content: {
        title: "Student Gains",
        subtitle: "What our students achieve through our comprehensive AI programs",
      },
    },
  ];

  const { getContent, getOrder, updateOrder } = useAdmin();

  // On first load, if no saved order, initialize to default
  useEffect(() => {
    const defaultOrder = defaultComponents.map((comp) => comp.id);
    const currentOrder = getOrder("homepage", []);
    if (currentOrder.length === 0) {
      updateOrder("homepage", defaultOrder);
    }
  }, [getOrder, updateOrder]);

  const componentOrder = getOrder(
    "homepage",
    defaultComponents.map((comp) => comp.id)
  );

  return (
    <main>
      {componentOrder.map((componentId, index) => {
        const cfg = defaultComponents.find((c) => c.id === componentId);
        if (!cfg) return null;

        const { component: Component, content: defContent } = cfg;
        const content = getContent(componentId, defContent);

        return (
          <EditableComponent
            key={componentId}
            id={componentId}
            defaultContent={defContent}
            index={index}
            pageId="homepage"
            totalComponents={componentOrder.length}
          >
            <Component {...content} />
          </EditableComponent>
        );
      })}
    </main>
  );
};

export default Homepage;
