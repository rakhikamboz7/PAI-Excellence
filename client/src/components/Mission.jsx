
// "use client"

// import { useTranslation } from "react-i18next"
// import { useTheme } from "../contexts/ThemeContext"

// const Mission = () => {
//   const { t } = useTranslation()
//   const { currentTheme } = useTheme()
//   const achievements = t("mission.achievements", { returnObjects: true })

//   const getThemeClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           background: "bg-blue-light",
//           title: "text-blue-primary",
//           text: "text-blue-text",
//         }
//       case "purple":
//         return {
//           background: "bg-purple-light",
//           title: "text-purple-primary",
//           text: "text-purple-text",
//         }
//       case "green":
//         return {
//           background: "bg-green-light",
//           title: "text-green-primary",
//           text: "text-green-text",
//         }
//       case "dark":
//         return {
//           background: "bg-dark-light",
//           title: "text-dark-primary",
//           text: "text-dark-text",
//         }
//       default:
//         return {
//           background: "bg-white",
//           title: "text-orange-600",
//           text: "text-gray-900",
//         }
//     }
//   }

//   const themeClasses = getThemeClasses()

//   return (
//     <section className={`${themeClasses.background} py-16 themed-surface transition-colors duration-300`}>
//       <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12">
//         {/* Images on the Left */}
//         <div className="relative w-full lg:w-1/2 flex justify-center items-center">
//           <div className="relative w-full max-w-xl mx-auto mt-10">
//             {/* Large Image */}
//             <img src="/students.jpeg" alt="Main Mission" className="w-full h-auto rounded-lg shadow-lg" />

//             {/* Small Overlapping Image */}
//             <img
//               src="/images.jpg"
//               alt="Top Overlap"
//               className="absolute top-[-30px] left-[-10px] sm:left-[-40px] w-32 h-20 sm:w-40 sm:h-24 object-cover rounded-lg shadow-2xl border-4 border-white"
//             />
//           </div>
//         </div>

//         {/* Content on the Right */}
//         <div className="w-full lg:w-1/2">
//           <p className={`text-2xl ${themeClasses.title} font-semibold mb-2 uppercase themed-text-primary`}>
//             {t("mission.title")}
//           </p>
//           <h2 className={`text-3xl md:text-4xl font-bold ${themeClasses.text} mb-6 leading-snug themed-text-secondary`}>
//             {t("mission.description").split(".")[0]}.
//           </h2>
//           <p className={`${themeClasses.text} mb-4 themed-text-secondary`}>
//             {t("mission.description").split(".").slice(1).join(".")}
//           </p>
//           <ul className={`${themeClasses.text} space-y-2 list-disc pl-5 themed-text-secondary`}>
//             {achievements.map((achievement, index) => (
//               <li key={index}>{achievement}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Mission


















// "use client"

// import { useTranslation } from "react-i18next"
// import { useTheme } from "../contexts/ThemeContext"

// const Mission = () => {
//   const { t } = useTranslation()
//   const { currentTheme } = useTheme()
//   const achievements = t("mission.achievements", { returnObjects: true })

//   const getThemeClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           background: "bg-blue-light",
//           title: "text-blue-primary",
//           text: "text-blue-text",
//         }
//       case "purple":
//         return {
//           background: "bg-purple-light",
//           title: "text-purple-primary",
//           text: "text-purple-text",
//         }
//       case "green":
//         return {
//           background: "bg-green-light",
//           title: "text-green-primary",
//           text: "text-green-text",
//         }
//       case "dark":
//         return {
//           background: "bg-dark-light",
//           title: "text-dark-primary",
//           text: "text-dark-text",
//         }
//       default:
//         return {
//           background: "bg-white",
//           title: "text-orange-600",
//           text: "text-gray-900",
//         }
//     }
//   }

//   const themeClasses = getThemeClasses()

//   return (
//     <section className={`${themeClasses.background} py-16 themed-surface transition-colors duration-300`}>
//       <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12">
//         {/* Image on the Left */}
//         <div className="relative w-full lg:w-1/2 flex justify-center items-center">
//           <div className="relative w-full max-w-xl mx-auto mt-10">
//             {/* Large Image */}
//             <img
//               src="/students.jpeg"
//               alt="Main Mission"
//               className="w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>

//         {/* Content on the Right */}
//         <div className="w-full lg:w-1/2">
//           <p className={`text-2xl ${themeClasses.title} font-semibold mb-2 uppercase themed-text-primary`}>
//             {t("mission.title")}
//           </p>
//           <h2 className={`text-3xl md:text-4xl font-bold ${themeClasses.text} mb-6 leading-snug themed-text-secondary`}>
//             {t("mission.description").split(".")[0]}.
//           </h2>
//           <p className={`${themeClasses.text} mb-4 themed-text-secondary`}>
//             {t("mission.description").split(".").slice(1).join(".")}
//           </p>
//           <ul className={`${themeClasses.text} space-y-2 list-disc pl-5 themed-text-secondary`}>
//             {achievements.map((achievement, index) => (
//               <li key={index}>{achievement}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Mission











"use client";

import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";

const Mission = () => {
  const { t } = useTranslation();
  const { currentTheme } = useTheme();
  const achievements = t("mission.achievements", { returnObjects: true });

  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return {
          background: "bg-blue-light",
          title: "text-blue-primary",
          text: "text-blue-text",
        };
      case "purple":
        return {
          background: "bg-purple-light",
          title: "text-purple-primary",
          text: "text-purple-text",
        };
      case "green":
        return {
          background: "bg-green-light",
          title: "text-green-primary",
          text: "text-green-text",
        };
      case "dark":
        return {
          background: "bg-dark-light",
          title: "text-dark-primary",
          text: "text-dark-text",
        };
      default:
        return {
          background: "bg-white",
          title: "text-orange-600",
          text: "text-gray-900",
        };
    }
  };

  const themeClasses = getThemeClasses();

  // Image slideshow logic
  const images = ["/Images/img1.png", "/Images/img2.png", "/Images/img3.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`${themeClasses.background} py-16 themed-surface transition-colors duration-300`}
    >
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Image Slideshow on the Left */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-xl mx-auto mt-10">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2 }}
            />
          </div>
        </div>

        {/* Content on the Right */}
        <div className="w-full lg:w-1/2">
          <p
            className={`text-2xl ${themeClasses.title} font-semibold mb-2 uppercase themed-text-primary`}
          >
            {t("mission.title")}
          </p>
          <h2
            className={`text-3xl md:text-4xl font-bold ${themeClasses.text} mb-6 leading-snug themed-text-secondary`}
          >
            {t("mission.description").split(".")[0]}.
          </h2>
          <p className={`${themeClasses.text} mb-4 themed-text-secondary`}>
            {t("mission.description").split(".").slice(1).join(".")}
          </p>
          <ul className={`${themeClasses.text} space-y-2 list-disc pl-5 themed-text-secondary`}>
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mission;





