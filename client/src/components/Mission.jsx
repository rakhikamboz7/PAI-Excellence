
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











// "use client";

// import { useState, useEffect } from "react";
// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// const Mission = () => {
//   const { t } = useTranslation();
//   const { currentTheme } = useTheme();
//   const achievements = t("mission.achievements", { returnObjects: true });

//   const getThemeClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           background: "bg-blue-light",
//           title: "text-blue-primary",
//           text: "text-blue-text",
//         };
//       case "purple":
//         return {
//           background: "bg-purple-light",
//           title: "text-purple-primary",
//           text: "text-purple-text",
//         };
//       case "green":
//         return {
//           background: "bg-green-light",
//           title: "text-green-primary",
//           text: "text-green-text",
//         };
//       case "dark":
//         return {
//           background: "bg-dark-light",
//           title: "text-dark-primary",
//           text: "text-dark-text",
//         };
//       default:
//         return {
//           background: "bg-white",
//           title: "text-orange-600",
//           text: "text-gray-900",
//         };
//     }
//   };

//   const themeClasses = getThemeClasses();

//   // Image slideshow logic
//   const images = ["/Images/img1.png", "/Images/img2.png", "/Images/img3.png"];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 5000); // change image every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       className={`${themeClasses.background} py-16 themed-surface transition-colors duration-300`}
//     >
//       <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12">
//         {/* Image Slideshow on the Left */}
//         <div className="relative w-full lg:w-1/2 flex justify-center items-center">
//           <div className="relative w-full max-w-xl mx-auto mt-10">
//             <motion.img
//               key={currentIndex}
//               src={images[currentIndex]}
//               alt={`Slide ${currentIndex + 1}`}
//               className="w-full h-auto rounded-lg shadow-lg object-cover"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1.2 }}
//             />
//           </div>
//         </div>

//         {/* Content on the Right */}
//         <div className="w-full lg:w-1/2">
//           <p
//             className={`text-2xl ${themeClasses.title} font-semibold mb-2 uppercase themed-text-primary`}
//           >
//             {t("mission.title")}
//           </p>
//           <h2
//             className={`text-3xl md:text-4xl font-bold ${themeClasses.text} mb-6 leading-snug themed-text-secondary`}
//           >
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
//   );
// };

// export default Mission;





// // src/components/Mission.jsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// const Mission = () => {
//   const { t } = useTranslation();
//   const { currentTheme } = useTheme();
//   const achievements = t("mission.achievements", { returnObjects: true });

//   const getThemeClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           background: "bg-blue-light",
//           title: "text-blue-primary",
//           text: "text-blue-text",
//           accent: "bg-blue-primary",
//         };
//       case "purple":
//         return {
//           background: "bg-purple-light",
//           title: "text-purple-primary",
//           text: "text-purple-text",
//           accent: "bg-purple-primary",
//         };
//       case "green":
//         return {
//           background: "bg-green-light",
//           title: "text-green-primary",
//           text: "text-green-text",
//           accent: "bg-green-primary",
//         };
//       case "dark":
//         return {
//           background: "bg-dark-light",
//           title: "text-dark-primary",
//           text: "text-dark-text",
//           accent: "bg-dark-primary",
//         };
//       default:
//         return {
//           background: "bg-white",
//           title: "text-orange-600",
//           text: "text-gray-900",
//           accent: "bg-orange-600",
//         };
//     }
//   };

//   const theme = getThemeClasses();

//   const steps = [
//     {
//       img: "/Images/img1.png",
//       label: "Identify Villages",
//     },
//     {
//       img: "/Images/img2.png",
//       label: "Train & Empower",
//     },
//     {
//       img: "/Images/img3.png",
//       label: "Sustain Growth",
//     },
//   ];

//   const [current, setCurrent] = useState(0);

//   // auto‐advance steps
//   useEffect(() => {
//     const iv = setInterval(() => setCurrent((i) => (i + 1) % steps.length), 5000);
//     return () => clearInterval(iv);
//   }, []);

//   return (
//     <section className={`${theme.background} py-16 transition-colors duration-300`}>
//       <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
//         {/* Flow with Images */}
//         <div className="w-full lg:w-1/2">
//           <div className="relative flex items-center justify-between">
//             {steps.map((step, idx) => (
//               <div key={idx} className="flex-1 text-center">
//                 <div className="relative inline-block">
//                   <AnimatePresence exitBeforeEnter>
//                     {current === idx && (
//                       <motion.img
//                         src={step.img}
//                         alt={step.label}
//                         key={step.img}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0.8 }}
//                         transition={{ duration: 0.8 }}
//                         className="w-32 h-32 object-cover rounded-full shadow-lg mx-auto"
//                       />
//                     )}
//                   </AnimatePresence>
//                   <span
//                     className={`absolute bottom-[-1.5rem] left-1/2 -translate-x-1/2 px-2 py-1 text-xs font-medium rounded ${theme.accent} text-white`}
//                   >
//                     {step.label}
//                   </span>
//                 </div>
//                 {/* Connector line */}
//                 {idx < steps.length - 1 && (
//                   <motion.div
//                     className={`absolute top-1/2 transform translate-y-[-50%] h-1 bg-gray-300 w-20`}
//                     style={{ left: "75%" }}
//                     animate={{ width: "50%" }}
//                     transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Content on the Right */}
//         <div className="w-full lg:w-1/2">
//           <p className={`text-2xl ${theme.title} font-semibold mb-2 uppercase`}>
//             {t("mission.title")}
//           </p>
//           <h2 className={`text-3xl md:text-4xl font-bold ${theme.text} mb-6 leading-snug`}>
//             {t("mission.description").split(".")[0]}.
//           </h2>
//           <p className={`${theme.text} mb-4`}>
//             {t("mission.description").split(".").slice(1).join(".")}
//           </p>
//           <ul className={`${theme.text} space-y-2 list-disc pl-5`}>
//             {achievements.map((ach, i) => (
//               <li key={i}>{ach}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;

















// // src/components/Mission.jsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// const Mission = () => {
//   const { t } = useTranslation();
//   const { currentTheme } = useTheme();
//   const achievements = t("mission.achievements", { returnObjects: true });

//   const theme = (() => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           bg: "bg-blue-light",
//           title: "text-blue-primary",
//           text: "text-blue-text",
//           accent: "bg-blue-primary",
//         };
//       case "purple":
//         return {
//           bg: "bg-purple-light",
//           title: "text-purple-primary",
//           text: "text-purple-text",
//           accent: "bg-purple-primary",
//         };
//       case "green":
//         return {
//           bg: "bg-green-light",
//           title: "text-green-primary",
//           text: "text-green-text",
//           accent: "bg-green-primary",
//         };
//       case "dark":
//         return {
//           bg: "bg-dark-light",
//           title: "text-dark-primary",
//           text: "text-dark-text",
//           accent: "bg-dark-primary",
//         };
//       default:
//         return {
//           bg: "bg-white",
//           title: "text-orange-600",
//           text: "text-gray-900",
//           accent: "bg-orange-600",
//         };
//     }
//   })();

//   const steps = [
//     {
//       img: "/Images/img1.png",
//       label: "Empower Rural Women",
//       desc: "Workshops in village centers",
//     },
//     {
//       img: "/Images/img2.png",
//       label: "Hands-On AI Training",
//       desc: "Practical labs & demos",
//     },
//     {
//       img: "/Images/img3.png",
//       label: "Ongoing Mentorship",
//       desc: "Remote support & guidance",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   useEffect(() => {
//     const iv = setInterval(() => setCurrent((i) => (i + 1) % steps.length), 5000);
//     return () => clearInterval(iv);
//   }, []);

//   return (
//     <section className={`${theme.bg} py-16 transition-colors duration-300`}>
//       <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
//         {/* Creative Path Flow */}
//         <div className="w-full lg:w-1/2 relative h-64 lg:h-80 flex items-center justify-center">
//           <svg
//             className="absolute inset-0 w-full h-full"
//             viewBox="0 0 400 200"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M30,160 C120,10 280,10 370,160"
//               stroke={theme.accent}
//               strokeWidth="4"
//               fill="none"
//             />
//           </svg>
//           {steps.map((step, idx) => {
//             const angle = (180 / (steps.length - 1)) * idx;
//             const x = 50 + (300 * idx) / (steps.length - 1);
//             const y = 160 - ((160 - 40) * idx) / (steps.length - 1);
//             return (
//               <div
//                 key={idx}
//                 style={{ left: `${x}px`, top: `${y}px` }}
//                 className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
//               >
//                 <AnimatePresence exitBeforeEnter>
//                   {current === idx && (
//                     <motion.img
//                       src={step.img}
//                       alt={step.label}
//                       initial={{ scale: 0.7, opacity: 0 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       exit={{ scale: 0.7, opacity: 0 }}
//                       transition={{ duration: 0.8 }}
//                       className="w-20 h-20 rounded-full shadow-lg object-cover"
//                     />
//                   )}
//                 </AnimatePresence>
//                 <div className="mt-2">
//                   <div
//                     className={`inline-block px-2 py-1 text-xs font-medium rounded ${theme.accent} text-white`}
//                   >
//                     {step.label}
//                   </div>
//                   <p className="text-[10px] mt-1">{step.desc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Content on the Right */}
//         <div className="w-full lg:w-1/2">
//           <p
//             className={`text-2xl ${theme.title} font-semibold mb-2 uppercase`}
//           >
//             {t("mission.title")}
//           </p>
//           <h2
//             className={`text-3xl md:text-4xl font-bold ${theme.text} mb-6 leading-snug`}
//           >
//             {t("mission.description").split(".")[0]}.
//           </h2>
//           <p className={`${theme.text} mb-4`}>
//             {t("mission.description").split(".").slice(1).join(".")}
//           </p>
//           <ul className={`${theme.text} space-y-2 list-disc pl-5`}>
//             {achievements.map((ach, i) => (
//               <li key={i}>{ach}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;
















// // src/components/Mission.jsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// const Mission = () => {
//   const { t } = useTranslation();
//   const { currentTheme } = useTheme();
//   const achievements = t("mission.achievements", { returnObjects: true });

//   const theme = (() => {
//     switch (currentTheme) {
//       case "blue":
//         return { bg: "bg-blue-light", title: "text-blue-primary", text: "text-blue-text", accent: "bg-blue-primary" };
//       case "purple":
//         return { bg: "bg-purple-light", title: "text-purple-primary", text: "text-purple-text", accent: "bg-purple-primary" };
//       case "green":
//         return { bg: "bg-green-light", title: "text-green-primary", text: "text-green-text", accent: "bg-green-primary" };
//       case "dark":
//         return { bg: "bg-dark-light", title: "text-dark-primary", text: "text-dark-text", accent: "bg-dark-primary" };
//       default:
//         return { bg: "bg-white", title: "text-orange-600", text: "text-gray-900", accent: "bg-orange-600" };
//     }
//   })();

//   const steps = [
//     { img: "/Images/img1.png", label: "Empower Rural Women", desc: "Workshops in village centers" },
//     { img: "/Images/img2.png", label: "Hands-On AI Training", desc: "Practical labs & demos" },
//     { img: "/Images/img3.png", label: "Ongoing Mentorship", desc: "Remote support & guidance" },
//   ];

//   const [current, setCurrent] = useState(0);
//   useEffect(() => {
//     const iv = setInterval(() => setCurrent((i) => (i + 1) % steps.length), 5000);
//     return () => clearInterval(iv);
//   }, []);

//   return (
//     <section className={`${theme.bg} py-20 transition-colors duration-300`}>
//       <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
//         {/* Creative Path Flow */}
//         <div className="w-full lg:w-1/2 relative h-96 flex items-center justify-center">
//           {/* Curved SVG path */}
//           <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
//             <path d="M50,250 C200,50 400,50 550,250" stroke={theme.accent} strokeWidth="6" fill="none" />
//           </svg>

//           {/* Steps along path */}
//           {steps.map((step, idx) => {
//             const x = 50 + (500 * idx) / (steps.length - 1);
//             const y = 250 - (200 * idx) / (steps.length - 1);
//             return (
//               <div
//                 key={idx}
//                 style={{ left: `${x}px`, top: `${y}px` }}
//                 className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
//               >
//                 <AnimatePresence exitBeforeEnter>
//                   {current === idx && (
//                     <motion.img
//                       src={step.img}
//                       alt={step.label}
//                       initial={{ scale: 0.7, opacity: 0 }}
//                       animate={{ scale: 1.2, opacity: 1 }}
//                       exit={{ scale: 0.7, opacity: 0 }}
//                       transition={{ duration: 0.8 }}
//                       className="w-32 h-32 rounded-full shadow-2xl object-cover border-4 border-white"
//                     />
//                   )}
//                 </AnimatePresence>
//                 <div className="mt-3">
//                   <div className={`inline-block px-3 py-1 text-sm font-semibold rounded ${theme.accent} text-white`}>
//                     {step.label}
//                   </div>
//                   <p className="text-xs mt-1 text-gray-700">{step.desc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Content on the Right */}
//         <div className="w-full lg:w-1/2">
//           <p className={`text-2xl ${theme.title} font-semibold mb-2 uppercase`}>
//             {t("mission.title")}
//           </p>
//           <h2 className={`text-3xl md:text-4xl font-bold ${theme.text} mb-6 leading-snug`}>
//             {t("mission.description").split(".")[0]}.
//           </h2>
//           <p className={`${theme.text} mb-4`}>
//             {t("mission.description").split(".").slice(1).join(".")}
//           </p>
//           <ul className={`${theme.text} space-y-2 list-disc pl-5`}>
//             {achievements.map((ach, i) => (
//               <li key={i}>{ach}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;














// // src/components/Mission.jsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// const Mission = () => {
//   const { t } = useTranslation();
//   const { currentTheme } = useTheme();
//   const achievements = t("mission.achievements", { returnObjects: true });

//   const theme = (() => {
//     switch (currentTheme) {
//       case "blue":
//         return { bg: "bg-blue-light", title: "text-blue-primary", text: "text-blue-text", accent: "bg-blue-primary" };
//       case "purple":
//         return { bg: "bg-purple-light", title: "text-purple-primary", text: "text-purple-text", accent: "bg-purple-primary" };
//       case "green":
//         return { bg: "bg-green-light", title: "text-green-primary", text: "text-green-text", accent: "bg-green-primary" };
//       case "dark":
//         return { bg: "bg-dark-light", title: "text-dark-primary", text: "text-dark-text", accent: "bg-dark-primary" };
//       default:
//         return { bg: "bg-orange-50", title: "text-orange-600", text: "text-gray-900", accent: "bg-orange-600" };
//     }
//   })();

//   const steps = [
//     { img: "/Images/img1.png", label: "Empower Rural Women", desc: "Workshops in village centers" },
//     { img: "/Images/img2.png", label: "Hands-On AI Training", desc: "Practical labs & demos" },
//     { img: "/Images/img3.png", label: "Ongoing Mentorship", desc: "Remote support & guidance" },
//   ];

//   return (
//     <section className={`${theme.bg} py-20 transition-colors duration-300`}>
//       <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
//         {/* Visual Flow Path */}
//         <div className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center">
//           {/* Curved SVG Path */}
//           <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
//             <path d="M50,250 C200,50 400,50 550,250" stroke={theme.accent} strokeWidth="6" fill="none" />
//           </svg>

//           {/* Steps Positioned Along Path */}
//           {steps.map((step, idx) => {
//             const x = 50 + (500 * idx) / (steps.length - 1);
//             const y = 250 - (200 * idx) / (steps.length - 1);
//             return (
//               <div
//                 key={idx}
//                 style={{ left: `${x}px`, top: `${y}px` }}
//                 className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
//               >
//                 <motion.img
//                   src={step.img}
//                   alt={step.label}
//                   className="w-36 aspect-square rounded-full shadow-2xl object-cover border-4 border-white hover:scale-110 transition-transform duration-500"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 1 }}
//                 />
//                 <div className="mt-3">
//                   <div className={`inline-block px-3 py-1 text-sm font-semibold rounded ${theme.accent} text-white`}>
//                     {step.label}
//                   </div>
//                   <p className="text-xs mt-1 text-gray-700">{step.desc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Text Content */}
//         <div className="w-full lg:w-1/2">
//           <p className={`text-2xl ${theme.title} font-semibold mb-2 uppercase`}>
//             {t("mission.title")}
//           </p>
//           <h2 className={`text-3xl md:text-4xl font-bold ${theme.text} mb-6 leading-snug`}>
//             {t("mission.description").split(".")[0]}.
//           </h2>
//           <p className={`${theme.text} mb-4`}>
//             {t("mission.description").split(".").slice(1).join(".")}
//           </p>
//           <ul className={`${theme.text} space-y-2 list-disc pl-5`}>
//             {achievements.map((ach, i) => (
//               <li key={i}>{ach}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;















// // src/components/Mission.jsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// const Mission = () => {
//   const { t } = useTranslation();
//   const { currentTheme } = useTheme();
//   const achievements = t("mission.achievements", { returnObjects: true });

//   const theme = (() => {
//     switch (currentTheme) {
//       case "blue":
//         return { bg: "bg-blue-light", title: "text-blue-primary", text: "text-blue-text", accent: "bg-blue-primary" };
//       case "purple":
//         return { bg: "bg-purple-light", title: "text-purple-primary", text: "text-purple-text", accent: "bg-purple-primary" };
//       case "green":
//         return { bg: "bg-green-light", title: "text-green-primary", text: "text-green-text", accent: "bg-green-primary" };
//       case "dark":
//         return { bg: "bg-dark-light", title: "text-dark-primary", text: "text-dark-text", accent: "bg-dark-primary" };
//       default:
//         return { bg: "", title: "text-orange-600", text: "text-gray-900", accent: "bg-orange-600" };
//     }
//   })();

//   const steps = [
//     { img: "/Images/img1.png", label: "Empower Rural Women", desc: "Workshops in village centers", size: "w-32 h-32" },
//     { img: "/Images/img2.png", label: "Hands-On AI Training", desc: "Practical labs & demos", size: "w-32 h-32" },
//     { img: "/Images/img3.png", label: "Ongoing Mentorship", desc: "Remote support & guidance", size: "w-28 h-28" }, // smaller
//   ];

//   const [current, setCurrent] = useState(0);
//   useEffect(() => {
//     const iv = setInterval(() => setCurrent((i) => (i + 1) % steps.length), 5000);
//     return () => clearInterval(iv);
//   }, []);

//   return (
//     <section className={`py-20 transition-colors duration-300`} style={{ backgroundColor: "#FFF7ED" }}>
//       <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
//         {/* Creative Path Flow */}
//         <div className="w-full lg:w-1/2 relative h-96 flex items-center justify-center">
//           {/* Curved SVG path */}
//           <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
//             <path d="M50,250 C200,50 400,50 550,250" stroke="#FB923C" strokeWidth="6" fill="none" />
//           </svg>

//           {/* Steps along path */}
//           {steps.map((step, idx) => {
//             const x = 50 + (500 * idx) / (steps.length - 1);
//             const y = 250 - (200 * idx) / (steps.length - 1);
//             return (
//               <div
//                 key={idx}
//                 style={{ left: `${x}px`, top: `${y}px` }}
//                 className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
//               >
//                 <AnimatePresence mode="wait">
//                   {current === idx && (
//                     <motion.img
//                       src={step.img}
//                       alt={step.label}
//                       initial={{ scale: 0.7, opacity: 0 }}
//                       animate={{ scale: 1.2, opacity: 1 }}
//                       exit={{ scale: 0.7, opacity: 0 }}
//                       transition={{ duration: 0.8 }}
//                       className={`${step.size} rounded-full shadow-2xl object-cover border-4 border-white hover:scale-110 transition-transform duration-300`}
//                     />
//                   )}
//                 </AnimatePresence>
//                 <div className="mt-3">
//                   <div className={`inline-block px-3 py-1 text-sm font-semibold rounded ${theme.accent} text-white`}>
//                     {step.label}
//                   </div>
//                   <p className="text-xs mt-1 text-gray-700">{step.desc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Content on the Right */}
//         <div className="w-full lg:w-1/2">
//           <p className={`text-2xl ${theme.title} font-semibold mb-2 uppercase`}>
//             {t("mission.title")}
//           </p>
//           <h2 className={`text-3xl md:text-4xl font-bold ${theme.text} mb-6 leading-snug`}>
//             {t("mission.description").split(".")[0]}.
//           </h2>
//           <p className={`${theme.text} mb-4`}>
//             {t("mission.description").split(".").slice(1).join(".")}
//           </p>
//           <ul className={`${theme.text} space-y-2 list-disc pl-5`}>
//             {achievements.map((ach, i) => (
//               <li key={i}>{ach}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;











// // src/components/Mission.jsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// const Mission = () => {
//   const { t } = useTranslation();
//   const { currentTheme } = useTheme();
//   const achievements = t("mission.achievements", { returnObjects: true });

//   // pick colors based on theme
//   const theme = (() => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           bg: "bg-blue-light",
//           title: "text-blue-primary",
//           text: "text-blue-text",
//           accent: "bg-blue-primary",
//         };
//       case "purple":
//         return {
//           bg: "bg-purple-light",
//           title: "text-purple-primary",
//           text: "text-purple-text",
//           accent: "bg-purple-primary",
//         };
//       case "green":
//         return {
//           bg: "bg-green-light",
//           title: "text-green-primary",
//           text: "text-green-text",
//           accent: "bg-green-primary",
//         };
//       case "dark":
//         return {
//           bg: "bg-dark-light",
//           title: "text-dark-primary",
//           text: "text-dark-text",
//           accent: "bg-dark-primary",
//         };
//       default:
//         // default now uses #FFF7ED
//         return {
//           bg: "bg-[#FFF7ED]",
//           title: "text-orange-600",
//           text: "text-gray-900",
//           accent: "bg-orange-600",
//         };
//     }
//   })();

//   const steps = [
//     { img: "/Images/img1.png", label: "Empower Rural Women", desc: "Workshops in village centers" },
//     { img: "/Images/img2.png", label: "Hands-On AI Training", desc: "Practical labs & demos" },
//     { img: "/Images/img3.png", label: "Ongoing Mentorship", desc: "Remote support & guidance" },
//   ];

//   const [current, setCurrent] = useState(0);
//   useEffect(() => {
//     const iv = setInterval(() => setCurrent((i) => (i + 1) % steps.length), 5000);
//     return () => clearInterval(iv);
//   }, []);

//   return (
//     <section className={`${theme.bg} py-20 transition-colors duration-300`}>
//       <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
//         {/* Left: curved path + steps */}
//         <div className="w-full lg:w-1/2 relative h-96 flex items-center justify-center">
//           <svg
//             className="absolute inset-0 w-full h-full"
//             viewBox="0 0 600 300"
//             preserveAspectRatio="none"
//           >
//             <path
//               d="M50,250 C200,50 400,50 550,250"
//               stroke={theme.accent}
//               strokeWidth="6"
//               fill="none"
//             />
//           </svg>

//           {steps.map((step, idx) => {
//             const x = 50 + (500 * idx) / (steps.length - 1);
//             const y = 250 - (200 * idx) / (steps.length - 1);
//             const isThird = idx === 2;
//             return (
//               <div
//                 key={idx}
//                 style={{ left: `${x}px`, top: `${y}px` }}
//                 className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
//               >
//                 <AnimatePresence exitBeforeEnter>
//                   {current === idx && (
//                     <motion.img
//                       src={step.img}
//                       alt={step.label}
//                       initial={{ scale: 0.7, opacity: 0 }}
//                       animate={{ scale: isThird ? 1.1 : 1.2, opacity: 1 }}
//                       exit={{ scale: 0.7, opacity: 0 }}
//                       transition={{ duration: 0.8 }}
//                       className={`rounded-full shadow-2xl object-cover border-4 border-white ${
//                         isThird ? "w-24 h-24" : "w-32 h-32"
//                       }`}
//                     />
//                   )}
//                 </AnimatePresence>
//                 <div className="mt-3">
//                   <div
//                     className={`inline-block px-3 py-1 text-sm font-semibold rounded ${theme.accent} text-white`}
//                   >
//                     {step.label}
//                   </div>
//                   <p className="text-xs mt-1 text-gray-700">{step.desc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Right: mission text */}
//         <div className="w-full lg:w-1/2">
//           <p className={`text-2xl ${theme.title} font-semibold mb-2 uppercase`}>
//             {t("mission.title")}
//           </p>
//           <h2 className={`text-3xl md:text-4xl font-bold ${theme.text} mb-6 leading-snug`}>
//             {t("mission.description").split(".")[0]}.
//           </h2>
//           <p className={`${theme.text} mb-4`}>
//             {t("mission.description").split(".").slice(1).join(".")}
//           </p>
//           <ul className={`${theme.text} space-y-2 list-disc pl-5`}>
//             {achievements.map((ach, i) => (
//               <li key={i}>{ach}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;

















// // src/components/Mission.jsx
// "use client";

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// const Mission = () => {
//   const { t } = useTranslation();
//   const { currentTheme } = useTheme();
//   const achievements = t("mission.achievements", { returnObjects: true });

//   // pick colors based on theme
//   const theme = (() => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           bg: "bg-blue-light",
//           title: "text-blue-primary",
//           text: "text-blue-text",
//           accent: "bg-blue-primary",
//         };
//       case "purple":
//         return {
//           bg: "bg-purple-light",
//           title: "text-purple-primary",
//           text: "text-purple-text",
//           accent: "bg-purple-primary",
//         };
//       case "green":
//         return {
//           bg: "bg-green-light",
//           title: "text-green-primary",
//           text: "text-green-text",
//           accent: "bg-green-primary",
//         };
//       case "dark":
//         return {
//           bg: "bg-dark-light",
//           title: "text-dark-primary",
//           text: "text-dark-text",
//           accent: "bg-dark-primary",
//         };
//       default:
//         // default now uses #FFF7ED
//         return {
//           bg: "bg-[#FFF7ED]",
//           title: "text-orange-600",
//           text: "text-gray-900",
//           accent: "bg-orange-600",
//         };
//     }
//   })();

//   const steps = [
//     {
//       img: "/Images/img1.png",
//       label: "Empower Rural Women",
//       desc: "Workshops in village centers",
//     },
//     {
//       img: "/Images/img2.png",
//       label: "Hands-On AI Training",
//       desc: "Practical labs & demos",
//     },
//     {
//       img: "/Images/img3.png",
//       label: "Ongoing Mentorship",
//       desc: "Remote support & guidance",
//     },
//   ];

//   const [current, setCurrent] = useState(0);
//   useEffect(() => {
//     const iv = setInterval(() => setCurrent((i) => (i + 1) % steps.length), 5000);
//     return () => clearInterval(iv);
//   }, []);

//   return (
//     <section className={`${theme.bg} py-20 transition-colors duration-300`}>
//       <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
//         {/* Left: curved path + steps (lg) or vertical stack (sm) */}
//         <div className="w-full lg:w-1/2">
//           {/* curved path mode */}
//           <div className="relative h-96 hidden lg:flex items-center justify-center">
//             <svg
//               className="absolute inset-0 w-full h-full"
//               viewBox="0 0 600 300"
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M50,250 C200,50 400,50 550,250"
//                 stroke={theme.accent}
//                 strokeWidth="6"
//                 fill="none"
//               />
//             </svg>

//             {steps.map((step, idx) => {
//               const x = 50 + (500 * idx) / (steps.length - 1);
//               const y = 250 - (200 * idx) / (steps.length - 1);
//               const isThird = idx === 2;
//               return (
//                 <div
//                   key={idx}
//                   style={{ left: `${x}px`, top: `${y}px` }}
//                   className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
//                 >
//                   <AnimatePresence exitBeforeEnter>
//                     {current === idx && (
//                       <motion.img
//                         src={step.img}
//                         alt={step.label}
//                         initial={{ scale: 0.7, opacity: 0 }}
//                         animate={{ scale: isThird ? 1.1 : 1.2, opacity: 1 }}
//                         exit={{ scale: 0.7, opacity: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className={`rounded-full shadow-2xl object-cover border-4 border-white ${
//                           isThird ? "w-24 h-24" : "w-32 h-32"
//                         }`}
//                       />
//                     )}
//                   </AnimatePresence>
//                   <div className="mt-3">
//                     <div
//                       className={`inline-block px-3 py-1 text-sm font-semibold rounded ${theme.accent} text-white`}
//                     >
//                       {step.label}
//                     </div>
//                     <p className="text-xs mt-1 text-gray-700">{step.desc}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* vertical-stack mode */}
//           <div className="flex flex-col items-center space-y-8 lg:hidden">
//             {steps.map((step, idx) => {
//               const isThird = idx === 2;
//               return (
//                 <div key={idx} className="text-center">
//                   <AnimatePresence exitBeforeEnter>
//                     {current === idx && (
//                       <motion.img
//                         src={step.img}
//                         alt={step.label}
//                         initial={{ scale: 0.7, opacity: 0 }}
//                         animate={{ scale: isThird ? 1 : 1, opacity: 1 }}
//                         exit={{ scale: 0.7, opacity: 0 }}
//                         transition={{ duration: 0.8 }}
//                         className={`rounded-full shadow-2xl object-cover border-4 border-white ${
//                           isThird ? "w-20 h-20" : "w-24 h-24"
//                         }`}
//                       />
//                     )}
//                   </AnimatePresence>
//                   <div className="mt-2">
//                     <div
//                       className={`inline-block px-2 py-1 text-xs font-semibold rounded ${theme.accent} text-white`}
//                     >
//                       {step.label}
//                     </div>
//                     <p className="text-[10px] mt-1 text-gray-700">{step.desc}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Right: mission text */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left">
//           <p className={`text-2xl ${theme.title} font-semibold mb-2 uppercase`}>
//             {t("mission.title")}
//           </p>
//           <h2 className={`text-3xl md:text-4xl font-bold ${theme.text} mb-6 leading-snug`}>
//             {t("mission.description").split(".")[0]}.
//           </h2>
//           <p className={`${theme.text} mb-4`}>
//             {t("mission.description").split(".").slice(1).join(".")}
//           </p>
//           <ul className={`${theme.text} space-y-2 list-disc pl-5`}>
//             {achievements.map((ach, i) => (
//               <li key={i}>{ach}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Mission;















// src/components/Mission.jsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";

const Mission = () => {
  const { t } = useTranslation();
  const { currentTheme } = useTheme();
  const achievements = t("mission.achievements", { returnObjects: true });

  const theme = (() => {
    switch (currentTheme) {
      case "blue":
        return {
          bg: "bg-blue-light",
          title: "text-blue-primary",
          text: "text-blue-text",
          accent: "bg-blue-primary",
        };
      case "purple":
        return {
          bg: "bg-purple-light",
          title: "text-purple-primary",
          text: "text-purple-text",
          accent: "bg-purple-primary",
        };
      case "green":
        return {
          bg: "bg-green-light",
          title: "text-green-primary",
          text: "text-green-text",
          accent: "bg-green-primary",
        };
      case "dark":
        return {
          bg: "bg-dark-light",
          title: "text-dark-primary",
          text: "text-dark-text",
          accent: "bg-dark-primary",
        };
      default:
        return {
          bg: "bg-[#FFF7ED]",
          title: "text-orange-600",
          text: "text-gray-900",
          accent: "bg-orange-600",
        };
    }
  })();

  const steps = [
    {
      img: "/Images/img1.png",
      label: "Empower Rural Women",
      desc: "Workshops in village centers",
    },
    {
      img: "/Images/img2.png",
      label: "Hands-On AI Training",
      desc: "Practical labs & demos",
    },
    {
      img: "/Images/img3.png",
      label: "Ongoing Mentorship",
      desc: "Remote support & guidance",
    },
  ];

  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setCurrent((i) => (i + 1) % steps.length), 5000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className={`${theme.bg} py-20 transition-colors duration-300`}>
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left side */}
        <div className="w-full lg:w-1/2">
          {/* Desktop: curved path */}
          <div className="relative h-96 hidden lg:flex items-center justify-center">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 600 300"
              preserveAspectRatio="none"
            >
              <path
                d="M50,250 C200,50 400,50 550,250"
                stroke={theme.accent}
                strokeWidth="6"
                fill="none"
              />
            </svg>
            {steps.map((step, idx) => {
              const x = 50 + (500 * idx) / (steps.length - 1);
              const y = 250 - (200 * idx) / (steps.length - 1);
              const isThird = idx === 2;
              return (
                <div
                  key={idx}
                  style={{ left: `${x}px`, top: `${y}px` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
                >
                  <AnimatePresence exitBeforeEnter>
                    {current === idx && (
                      <motion.img
                        src={step.img}
                        alt={step.label}
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: isThird ? 1.1 : 1.2, opacity: 1 }}
                        exit={{ scale: 0.7, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`rounded-full shadow-2xl object-cover border-4 border-white ${
                          isThird ? "w-24 h-24" : "w-32 h-32"
                        }`}
                      />
                    )}
                  </AnimatePresence>
                  <div className="mt-3">
                    <div
                      className={`inline-block px-3 py-1 text-sm font-semibold rounded ${theme.accent} text-white`}
                    >
                      {step.label}
                    </div>
                    <p className="text-xs mt-1 text-gray-700">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: vertical stack with larger icons */}
          <div className="flex flex-col items-center space-y-10 lg:hidden">
            {steps.map((step, idx) => {
              const isThird = idx === 2;
              return (
                <div key={idx} className="text-center">
                  <AnimatePresence exitBeforeEnter>
                    {current === idx && (
                      <motion.img
                        src={step.img}
                        alt={step.label}
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.7, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className={`rounded-full shadow-2xl object-cover border-4 border-white ${
                          isThird ? "w-32 h-32" : "w-36 h-36"
                        }`}
                      />
                    )}
                  </AnimatePresence>
                  <div className="mt-3">
                    <div
                      className={`inline-block px-4 py-2 text-sm sm:text-base font-semibold rounded ${theme.accent} text-white`}
                    >
                      {step.label}
                    </div>
                    <p className="text-sm sm:text-base mt-1 text-gray-700">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className={`text-2xl ${theme.title} font-semibold mb-2 uppercase`}>
            {t("mission.title")}
          </p>
          <h2 className={`text-3xl md:text-4xl font-bold ${theme.text} mb-6 leading-snug`}>
            {t("mission.description").split(".")[0]}.
          </h2>
          <p className={`${theme.text} mb-4`}>
            {t("mission.description").split(".").slice(1).join(".")}
          </p>
          <ul className={`${theme.text} space-y-2 list-disc pl-5`}>
            {achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Mission;
