
// "use client";

// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";
// import { motion } from "framer-motion";

// export default function Events() {
//   const { t } = useTranslation();
//   const [expandedId, setExpandedId] = useState(null);
//   const { currentTheme } = useTheme();

//   const getThemeClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           background: "bg-blue-50",
//           title: "text-blue-800",
//           text: "text-blue-600",
//         };
//       case "purple":
//         return {
//           background: "bg-purple-50",
//           title: "text-purple-800",
//           text: "text-purple-600",
//         };
//       case "green":
//         return {
//           background: "bg-green-50",
//           title: "text-green-800",
//           text: "text-green-600",
//         };
//       case "dark":
//         return {
//           background: "bg-gray-900",
//           title: "text-yellow-400",
//           text: "text-gray-300",
//         };
//       default:
//         return {
//           background: "bg-[#FFF7ED]",
//           title: "text-[#44425A]",
//           text: "text-[#6C6A74]",
//         };
//     }
//   };

//   const themeClasses = getThemeClasses();
//   const eventsData = t("events.events", { returnObjects: true }) || [];

//   const toggleExpand = (id) => {
//     setExpandedId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className={`relative space-y-12 px-6 lg:px-20 pt-20 pb-0 ${themeClasses.background}`}>
      
//       {/* Hero Section */}
//       <motion.section className="relative text-center py-20 overflow-hidden">
//         <div className="absolute inset-0 animated-gradient"></div>
//         <motion.h1
//           className={`relative z-10 text-4xl font-bold ${themeClasses.title} mb-4`}
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
//         >
//           Explore Our Hosted Events
//         </motion.h1>
//         <motion.p
//           className={`relative z-10 text-lg ${themeClasses.text}`}
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//         >
//           Join the events organized by us and engage with our community.
//         </motion.p>
//         <div className="floating-particles">
//           <div className="particle particle-one"></div>
//           <div className="particle particle-two"></div>
//           <div className="particle particle-three"></div>
//         </div>
//       </motion.section>

//       {/* Event List */}
//       {eventsData.map((evt, idx) => (
//         <div
//           key={idx}
//           className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
//             idx % 2 === 1 ? "md:flex-row-reverse" : ""
//           }`}
//         >
//           {/* Event Image */}
//           <div className="w-full md:w-2/5">
//             <img
//               src={`/Images/Event${idx + 1}.png`}
//               alt={evt.title}
//               className="w-full h-auto object-contain rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Text */}
//           <div className="w-full md:w-3/5">
//             <h3 className={`text-2xl font-semibold ${themeClasses.title} mb-2`}>
//               {evt.title}
//             </h3>
//             <p className={`${themeClasses.text} mb-4`}>{evt.description}</p>
//             {expandedId === idx && (
//               <p className={`${themeClasses.text} mb-4`}>{evt.moreInfo}</p>
//             )}
//             <button
//               onClick={() => toggleExpand(idx)}
//               // use the same orange background as "Explore More"
//               className="bg-[#FF6600] hover:bg-[#e65c00] text-white font-semibold py-2 px-6 rounded-full transition"
//             >
//               {expandedId === idx ? t("events.showLess") : t("events.knowMore")}
//             </button>
//           </div>
//         </div>
//       ))}

//       <style jsx>{`
//         @keyframes gradientAnimation {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//         .animated-gradient {
//           background: linear-gradient(270deg, #EA580C, #FFF7ED);
//           background-size: 300% 300%;
//           animation: gradientAnimation 15s ease infinite;
//         }
//         .floating-particles {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           top: 0;
//           left: 0;
//           pointer-events: none;
//         }
//         .particle {
//           position: absolute;
//           border-radius: 50%;
//           background: rgba(234, 88, 12, 0.5);
//           opacity: 0.6;
//           animation: float 6s ease-in-out infinite;
//         }
//         @keyframes float {
//           0% { transform: translateY(0) scale(1); }
//           50% { transform: translateY(-20px) scale(1.1); }
//           100% { transform: translateY(0) scale(1); }
//         }
//         .particle-one { width: 80px; height: 80px; left: 10%; top: 20%; animation-delay: 0s; }
//         .particle-two { width: 60px; height: 60px; left: 70%; top: 30%; animation-delay: 1s; }
//         .particle-three { width: 40px; height: 40px; left: 40%; top: 50%; animation-delay: 2s; }
//       `}</style>
//     </div>
//   );
// }
























// "use client";

// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// export default function Events() {
//   const { t } = useTranslation();
//   const [expandedId, setExpandedId] = useState(null);
//   const { currentTheme } = useTheme();

//   const getThemeClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           background: "bg-blue-50",
//           title: "text-blue-800",
//           text: "text-blue-600",
//         };
//       case "purple":
//         return {
//           background: "bg-purple-50",
//           title: "text-purple-800",
//           text: "text-purple-600",
//         };
//       case "green":
//         return {
//           background: "bg-green-50",
//           title: "text-green-800",
//           text: "text-green-600",
//         };
//       case "dark":
//         return {
//           background: "bg-gray-900",
//           title: "text-yellow-400",
//           text: "text-gray-300",
//         };
//       default:
//         return {
//           background: "bg-[#FFF7ED]",
//           title: "text-[#44425A]",
//           text: "text-[#6C6A74]",
//         };
//     }
//   };

//   const themeClasses = getThemeClasses();
//   const eventsData = t("events.events", { returnObjects: true }) || [];

//   const toggleExpand = (id) => {
//     setExpandedId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className={`relative space-y-12 px-6 lg:px-20 pt-20 pb-0 ${themeClasses.background}`}>
      
//       {/* Hero Section */}
//       <section className="relative text-center py-20">
//         <h1 className={`text-4xl font-bold ${themeClasses.title} mb-4`}>
//           Explore Our Hosted Events
//         </h1>
//         <p className={`text-lg ${themeClasses.text}`}>
//           Join the events organized by us and engage with our community.
//         </p>
//       </section>

//       {/* Event List */}
//       {eventsData.map((evt, idx) => (
//         <div
//           key={idx}
//           className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
//             idx % 2 === 1 ? "md:flex-row-reverse" : ""
//           }`}
//         >
//           {/* Event Image */}
//           <div className="w-full md:w-2/5">
//             <img
//               src={`/Images/Event${idx + 1}.png`}
//               alt={evt.title}
//               className="w-full h-auto object-contain rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Text */}
//           <div className="w-full md:w-3/5">
//             <h3 className={`text-2xl font-semibold ${themeClasses.title} mb-2`}>
//               {evt.title}
//             </h3>
//             <p className={`${themeClasses.text} mb-4`}>{evt.description}</p>
//             {expandedId === idx && (
//               <p className={`${themeClasses.text} mb-4`}>{evt.moreInfo}</p>
//             )}
//             <button
//               onClick={() => toggleExpand(idx)}
//               className="bg-[#FF6600] hover:bg-[#e65c00] text-white font-semibold py-2 px-6 rounded-full transition"
//             >
//               {expandedId === idx ? t("events.showLess") : t("events.knowMore")}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }





















// "use client";

// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// export default function Events() {
//   const { t } = useTranslation();
//   const [expandedId, setExpandedId] = useState(null);
//   const { currentTheme } = useTheme();

//   const getThemeClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           background: "bg-blue-50",
//           title: "text-blue-800",
//           text: "text-blue-600",
//         };
//       case "purple":
//         return {
//           background: "bg-purple-50",
//           title: "text-purple-800",
//           text: "text-purple-600",
//         };
//       case "green":
//         return {
//           background: "bg-green-50",
//           title: "text-green-800",
//           text: "text-green-600",
//         };
//       case "dark":
//         return {
//           background: "bg-gray-900",
//           title: "text-yellow-400",
//           text: "text-gray-300",
//         };
//       default:
//         return {
//           background: "bg-[#FFF7ED]",
//           title: "text-[#44425A]",
//           text: "text-[#6C6A74]",
//         };
//     }
//   };

//   const themeClasses = getThemeClasses();
//   const eventsData = t("events.events", { returnObjects: true }) || [];

//   const toggleExpand = (id) => {
//     setExpandedId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className={`relative space-y-12 px-6 lg:px-20 pt-4 pb-20 ${themeClasses.background}`}>
      
//       {/* Hero Section */}
//       <section className="relative text-center py-20">
//         <h1 className={`text-4xl font-bold ${themeClasses.title} mb-4`}>
//           Explore Our Hosted Events
//         </h1>
//         <p className={`text-lg ${themeClasses.text}`}>
//           Join the events organized by us and engage with our community.
//         </p>
//       </section>

//       {/* Event List */}
//       {eventsData.map((evt, idx) => (
//         <div
//           key={idx}
//           className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
//             idx % 2 === 1 ? "md:flex-row-reverse" : ""
//           }`}
//         >
//           {/* Event Image */}
//           <div className="w-full md:w-2/5">
//             <img
//               src={`/Images/Event${idx + 1}.png`}
//               alt={evt.title}
//               className="w-full h-auto object-contain rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Text */}
//           <div className="w-full md:w-3/5">
//             <h3 className={`text-2xl font-semibold ${themeClasses.title} mb-2`}>
//               {evt.title}
//             </h3>
//             <p className={`${themeClasses.text} mb-4`}>{evt.description}</p>
//             {expandedId === idx && (
//               <p className={`${themeClasses.text} mb-4`}>{evt.moreInfo}</p>
//             )}
//             <button
//               onClick={() => toggleExpand(idx)}
//               className="bg-[#FF6600] hover:bg-[#e65c00] text-white font-semibold py-2 px-6 rounded-full transition"
//             >
//               {expandedId === idx ? t("events.showLess") : t("events.knowMore")}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }















// "use client";

// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// export default function Events() {
//   const { t } = useTranslation();
//   const [expandedId, setExpandedId] = useState(null);
//   const { currentTheme } = useTheme();

//   const getThemeClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           background: "bg-blue-50",
//           title: "text-blue-800",
//           text: "text-blue-600",
//           button:
//             "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold",
//         };
//       case "purple":
//         return {
//           background: "bg-purple-50",
//           title: "text-purple-800",
//           text: "text-purple-600",
//           button:
//             "bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white font-semibold",
//         };
//       case "green":
//         return {
//           background: "bg-green-50",
//           title: "text-green-800",
//           text: "text-green-600",
//           button:
//             "bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white font-semibold",
//         };
//       case "dark":
//         return {
//           background: "bg-gray-900",
//           title: "text-yellow-400",
//           text: "text-gray-300",
//           button:
//             "bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-700 hover:to-yellow-500 text-gray-900 font-semibold",
//         };
//       default:
//         return {
//           background: "bg-[#FFF7ED]",
//           title: "text-[#44425A]",
//           text: "text-[#6C6A74]",
//           button:
//             "bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-500 text-white font-semibold",
//         };
//     }
//   };

//   const themeClasses = getThemeClasses();
//   const eventsData = t("events.events", { returnObjects: true }) || [];

//   const toggleExpand = (id) => {
//     setExpandedId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div
//       className={`relative space-y-12 px-6 lg:px-20 pt-4 pb-20 ${themeClasses.background}`}
//     >
//       {/* Hero Section */}
//       <section className="relative text-center py-20">
//         <h1 className={`text-4xl font-bold ${themeClasses.title} mb-4`}>
//           Explore Our Hosted Events
//         </h1>
//         <p className={`text-lg ${themeClasses.text}`}>
//           Join the events organized by us and engage with our community.
//         </p>
//       </section>

//       {/* Event List */}
//       {eventsData.map((evt, idx) => (
//         <div
//           key={idx}
//           className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
//             idx % 2 === 1 ? "md:flex-row-reverse" : ""
//           }`}
//         >
//           {/* Event Image */}
//           <div className="w-full md:w-2/5">
//             <img
//               src={`/Images/Event${idx + 1}.png`}
//               alt={evt.title}
//               className="w-full h-auto object-contain rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Text */}
//           <div className="w-full md:w-3/5">
//             <h3 className={`text-2xl font-semibold ${themeClasses.title} mb-2`}>
//               {evt.title}
//             </h3>
//             <p className={`${themeClasses.text} mb-4`}>{evt.description}</p>
//             {expandedId === idx && (
//               <p className={`${themeClasses.text} mb-4`}>{evt.moreInfo}</p>
//             )}
//             <button
//               onClick={() => toggleExpand(idx)}
//               className={`py-2 px-6 rounded-full transition ${themeClasses.button}`}
//             >
//               {expandedId === idx ? t("events.showLess") : t("events.knowMore")}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }












// "use client";

// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// export default function Events() {
//   const { t } = useTranslation();
//   const [expandedId, setExpandedId] = useState(null);
//   const { currentTheme } = useTheme();

//   const getThemeClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           background: "bg-blue-50",
//           title: "text-blue-800",
//           text: "text-blue-600",
//           button:
//             "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold",
//         };
//       case "purple":
//         return {
//           background: "bg-purple-50",
//           title: "text-purple-800",
//           text: "text-purple-600",
//           button:
//             "bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white font-semibold",
//         };
//       case "green":
//         return {
//           background: "bg-green-50",
//           title: "text-green-800",
//           text: "text-green-600",
//           button:
//             "bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white font-semibold",
//         };
//       case "dark":
//         return {
//           background: "bg-gray-900",
//           title: "text-yellow-400",
//           text: "text-gray-300",
//           button:
//             "bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-700 hover:to-yellow-500 text-gray-900 font-semibold",
//         };
//       default:
//         return {
//           background: "bg-[#FFF7ED]",
//           title: "text-[#44425A]",
//           text: "text-[#6C6A74]",
//           button:
//             "bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-500 text-white font-semibold",
//         };
//     }
//   };

//   const themeClasses = getThemeClasses();
//   const eventsData = t("events.events", { returnObjects: true }) || [];

//   const toggleExpand = (id) => {
//     setExpandedId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div
//       className={`relative space-y-12 px-6 lg:px-20 pt-4 pb-20 ${themeClasses.background}`}
//     >
//       {/* Hero Section */}
//       <section className="relative text-center py-20">
//         <h1 className={`text-4xl font-bold ${themeClasses.title} mb-4`}>
//           Explore Our Hosted Events
//         </h1>
//         <p className={`text-lg ${themeClasses.text}`}>
//           Join the events organized by us and engage with our community.
//         </p>
//       </section>

//       {/* Event List */}
//       {eventsData.map((evt, idx) => (
//         <div
//           key={idx}
//           className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
//             idx % 2 === 1 ? "md:flex-row-reverse" : ""
//           }`}
//         >
//           {/* Event Image */}
//           <div className="w-full md:w-2/5">
//             <img
//               src={`/Images/Event${idx + 1}.png`}
//               alt={evt.title}
//               className="w-full h-auto object-contain rounded-lg shadow-lg"
//             />
//           </div>

//           {/* Text */}
//           <div className="w-full md:w-3/5">
//             <h3 className={`text-2xl font-semibold ${themeClasses.title} mb-2`}>
//               {evt.title}
//             </h3>
//             <p className={`${themeClasses.text} mb-4`}>{evt.description}</p>

//             {expandedId === idx && (
//               <>
//                 {/* Original moreInfo */}
//                 <p className={`${themeClasses.text} mb-4`}>{evt.moreInfo}</p>

//                 {/* New Instructor, Key Takeaways, Who Joined */}
//                 <p className={`${themeClasses.text} mb-2`}>
//                   <strong>Instructor:</strong> Dr. Sandeep Singh Sandha (UCLA, IIT Roorkee)
//                 </p>
//                 <p className={`${themeClasses.text} mb-2`}>
//                   <strong>Key Takeaways:</strong> Real-world AI use in healthcare, agriculture,
//                   and wildlife. Hands-on projects using Python.
//                 </p>
//                 <p className={`${themeClasses.text} mb-4`}>
//                   <strong>Who Joined:</strong> Students from 200+ cities, ready to lead the AI revolution.
//                 </p>
//               </>
//             )}

//             <button
//               onClick={() => toggleExpand(idx)}
//               className={`py-2 px-6 rounded-full transition ${themeClasses.button}`}
//             >
//               {expandedId === idx ? t("events.showLess") : t("events.knowMore")}
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }









// src/components/Events.jsx
"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";

export default function Events() {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState(null);
  const { currentTheme } = useTheme();

  const themeClasses = (() => {
    switch (currentTheme) {
      case "blue":
        return {
          background: "bg-blue-50",
          title: "text-blue-800",
          text: "text-blue-600",
          button:
            "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold",
        };
      case "purple":
        return {
          background: "bg-purple-50",
          title: "text-purple-800",
          text: "text-purple-600",
          button:
            "bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white font-semibold",
        };
      case "green":
        return {
          background: "bg-green-50",
          title: "text-green-800",
          text: "text-green-600",
          button:
            "bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white font-semibold",
        };
      case "dark":
        return {
          background: "bg-gray-900",
          title: "text-yellow-400",
          text: "text-gray-300",
          button:
            "bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-700 hover:to-yellow-500 text-gray-900 font-semibold",
        };
      default:
        return {
          background: "bg-[#FFF7ED]",
          title: "text-[#44425A]",
          text: "text-[#6C6A74]",
          button:
            "bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-500 text-white font-semibold",
        };
    }
  })();

  const eventsData = t("events.events", { returnObjects: true }) || [];

  // pull the instructor/keyTakeaways/whoJoined strings
  const [instructorLabel, instructorValue] = t("courseDetail.instructor", "").split(/:(.+)/);
  const [takeawaysLabel, takeawaysValue] = t("courseDetail.keyTakeaways", "").split(/:(.+)/);
  const [joinedLabel, joinedValue] = t("courseDetail.whoJoined", "").split(/:(.+)/);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`relative space-y-12 px-6 lg:px-20 pt-4 pb-20 ${themeClasses.background}`}>
      {/* Hero Section */}
      <section className="relative text-center py-20">
        <h1 className={`text-4xl font-bold ${themeClasses.title} mb-4`}>
          {t("events.heading")}
        </h1>
        <p className={`text-lg ${themeClasses.text}`}>
          {t("events.subheading")}
        </p>
      </section>

      {/* Event List */}
      {eventsData.map((evt, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Event Image */}
          <div className="w-full md:w-2/5">
            <img
              src={`/Images/Event${idx + 1}.png`}
              alt={evt.title}
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-3/5">
            <h3 className={`text-2xl font-semibold ${themeClasses.title} mb-2`}>
              {evt.title}
            </h3>
            <p className={`${themeClasses.text} mb-4`}>{evt.description}</p>

            {expandedId === idx && (
              <>
                {/* the original moreInfo */}
                <p className={`${themeClasses.text} mb-4`}>{evt.moreInfo}</p>

                {/* mapped instructor */}
                <p className={`${themeClasses.text} mb-2`}>
                  <strong>{instructorLabel}:</strong> {instructorValue}
                </p>
                {/* mapped keyTakeaways */}
                <p className={`${themeClasses.text} mb-2`}>
                  <strong>{takeawaysLabel}:</strong> {takeawaysValue}
                </p>
                {/* mapped whoJoined */}
                <p className={`${themeClasses.text} mb-4`}>
                  <strong>{joinedLabel}:</strong> {joinedValue}
                </p>
              </>
            )}

            <button
              onClick={() => toggleExpand(idx)}
              className={`py-2 px-6 rounded-full transition ${themeClasses.button}`}
            >
              {expandedId === idx ? t("events.showLess") : t("events.knowMore")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
