
// "use client";
// import { useState, useEffect, useRef } from "react";
// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight, Trophy, Target, Users, Briefcase, Code, Star } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// const StudentGains = () => {
//   const { t } = useTranslation();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideInterval = useRef(null);
//   const { currentTheme } = useTheme();

//   // Map classes to all key elements based on the theme
//   const getThemeClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           background: "bg-blue-light themed-surface",
//           border: "border-blue-200",
//           text: "text-blue-text themed-text-secondary",
//           title: "text-blue-primary themed-text-primary",
//           gradient: "from-blue-500 via-blue-50 to-blue-100",
//           iconGradient: [
//             "from-blue-600 to-blue-400",
//             "from-blue-500 to-blue-200",
//             "from-blue-400 to-cyan-400",
//             "from-cyan-400 to-blue-400",
//           ],
//           line: "bg-blue-600",
//           button: "bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500",
//           dotActive: "bg-blue-600",
//           dot: "bg-blue-300 hover:bg-blue-400"
//         };
//       case "purple":
//         return {
//           background: "bg-purple-light themed-surface",
//           border: "border-purple-200",
//           text: "text-purple-text themed-text-secondary",
//           title: "text-purple-primary themed-text-primary",
//           gradient: "from-purple-500 via-purple-50 to-purple-100",
//           iconGradient: [
//             "from-purple-600 to-purple-400",
//             "from-purple-500 to-purple-200",
//             "from-purple-400 to-fuchsia-400",
//             "from-fuchsia-400 to-purple-400",
//           ],
//           line: "bg-purple-600",
//           button: "bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500",
//           dotActive: "bg-purple-600",
//           dot: "bg-purple-300 hover:bg-purple-400"
//         };
//       case "green":
//         return {
//           background: "bg-green-light themed-surface",
//           border: "border-green-200",
//           text: "text-green-text themed-text-secondary",
//           title: "text-green-primary themed-text-primary",
//           gradient: "from-green-500 via-green-50 to-green-100",
//           iconGradient: [
//             "from-green-600 to-green-400",
//             "from-green-500 to-green-200",
//             "from-green-400 to-lime-300",
//             "from-lime-300 to-green-400",
//           ],
//           line: "bg-green-600",
//           button: "bg-gradient-to-r from-green-600 to-green-400 text-white hover:from-green-700 hover:to-green-500",
//           dotActive: "bg-green-600",
//           dot: "bg-green-300 hover:bg-green-400"
//         };
//       case "dark":
//         return {
//           background: "bg-dark-light themed-surface",
//           border: "border-gray-700",
//           text: "text-gray-100 themed-text-secondary",
//           title: "text-yellow-400 themed-text-primary",
//           gradient: "from-gray-900 via-zinc-800 to-gray-800",
//           iconGradient: [
//             "from-yellow-400 to-yellow-400",
//             "from-yellow-500 to-yellow-300",
//             "from-gray-600 to-zinc-400",
//             "from-zinc-300 to-yellow-400",
//           ],
//           line: "bg-yellow-400",
//           button: "bg-gradient-to-r from-yellow-600 to-yellow-400 text-gray-900 hover:from-yellow-700 hover:to-yellow-500",
//           dotActive: "bg-yellow-900",
//           dot: "bg-gray-800 hover:bg-gray-300"
//         };
//       default:
//         // orange theme
//         return {
//           background: "bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 themed-surface",
//           border: "border-orange-100",
//           text: "text-gray-700 themed-text-secondary",
//           title: "text-orange-600 themed-text-primary",
//           gradient: "from-orange-500 via-orange-50 to-amber-100",
//           iconGradient: [
//             "from-orange-500 to-red-500",
//             "from-orange-600 to-amber-600",
//             "from-amber-500 to-yellow-500",
//             "from-yellow-500 to-orange-500",
//           ],
//           line: "bg-gradient-to-r from-orange-600 to-amber-600",
//           button: "bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-500",
//           dotActive: "bg-orange-600",
//           dot: "bg-orange-300 hover:bg-orange-400"
//         };
//     }
//   };

//   const themeClasses = getThemeClasses();

//   const achievements = t("studentGains.achievements", { returnObjects: true }) || [];
//   const stats = t("studentGains.stats", { returnObjects: true }) || [];
//   const totalSlides = achievements.length;

//   const achievementIcons = [Code, Briefcase, Users, Trophy];
  
//   const IconComponent = achievementIcons[currentSlide];
  

//   useEffect(() => {
//     slideInterval.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }, 5000);
//     return () => {
//       if (slideInterval.current) clearInterval(slideInterval.current);
//     };
//   }, [totalSlides]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     resetInterval();
//   };
//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//     resetInterval();
//   };
//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     resetInterval();
//   };
//   const resetInterval = () => {
//     if (slideInterval.current) clearInterval(slideInterval.current);
//     slideInterval.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }, 5000);
//   };

//   return (
//     <section className={`py-16 px-4 md:px-16 ${themeClasses.background} transition-colors duration-300`}>
//       <div className="container mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.title}`}>
//             {t("studentGains.title")}
//           </h2>
//           <p className={`text-xl ${themeClasses.text} max-w-3xl mx-auto mb-8`}>
//             {t("studentGains.subtitle")}
//           </p>
//           <div className={`w-32 h-1 mx-auto rounded-full ${themeClasses.line}`}></div>
//         </motion.div>

//         {/* Navigation Controls */}
//         <div className="flex justify-center items-center mb-8 space-x-4">
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={prevSlide}
//             className={`p-3 rounded-full bg-white shadow-lg ${themeClasses.border} hover:bg-opacity-80 hover:shadow-2xl transition duration-300`}
//           >
//             <ChevronLeft size={24} className={themeClasses.title} />
//           </motion.button>
//           <div className="flex space-x-2">
//             {Array.from({ length: totalSlides }).map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`h-3 w-3 rounded-full transition-all duration-300 ${
//                   currentSlide === index ? `${themeClasses.dotActive} w-8` : themeClasses.dot
//                 }`}
//                 aria-label={`Go to slide ${index + 1}`}
//               />
//             ))}
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             onClick={nextSlide}
//             className={`p-3 rounded-full bg-white shadow-lg ${themeClasses.border} hover:bg-opacity-80 hover:shadow-2xl transition duration-300`}
//           >
//             <ChevronRight size={24} className={themeClasses.title} />
//           </motion.button>
//         </div>

//         {/* Slides */}
//         <div className="relative overflow-hidden">
//           <motion.div
//             className="flex"
//             initial={false}
//             animate={{ x: `-${currentSlide * 100}%` }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           >
//             {achievements.map((achievement, index) => {
//               const Icon = achievementIcons[index];
//               const iconGradient = themeClasses.iconGradient[index];
//               return (
//                 <div key={index} className="w-full flex-shrink-0">
//                   <div className="grid lg:grid-cols-2 gap-12 items-center">
//                     {/* Left - Content */}
//                     <motion.div
//                       initial={{ opacity: 0, x: -50 }}
//                       animate={{ opacity: currentSlide === index ? 1 : 0, x: currentSlide === index ? 0 : -50 }}
//                       transition={{ duration: 0.6, delay: 0.2 }}
//                       className="space-y-6"
//                     >
//                       <div className="flex items-center space-x-4">
//                         <div className={`p-4 rounded-2xl bg-gradient-to-r ${iconGradient} shadow-lg`}>
//                           <Icon className="w-8 h-8 text-white" />
//                         </div>
//                         <div>
//                           <h3 className={`text-3xl font-bold ${themeClasses.title}`}>{achievement.title}</h3>
//                           <p className={`${themeClasses.title} font-semibold`}>{achievement.achievementLabel}</p>
//                         </div>
//                       </div>
//                       <p className={`text-xl ${themeClasses.text} leading-relaxed`}>{achievement.description}</p>
//                       <div className={`bg-white p-6 rounded-2xl shadow-lg ${themeClasses.border}`}>
//                         <h4 className={`text-lg font-bold mb-4 flex items-center ${themeClasses.title}`}>
//                           <Target className={`w-5 h-5 mr-2 ${themeClasses.title}`} />
//                           {achievement.benefitTitle}
//                         </h4>
//                         <ul className="space-y-3">
//                           {achievement.benefits.map((benefit, benefitIndex) => (
//                             <motion.li
//                               key={benefitIndex}
//                               initial={{ opacity: 0, x: -20 }}
//                               animate={{
//                                 opacity: currentSlide === index ? 1 : 0,
//                                 x: currentSlide === index ? 0 : -20,
//                               }}
//                               transition={{ duration: 0.4, delay: 0.4 + benefitIndex * 0.1 }}
//                               className="flex items-start"
//                             >
//                               <div className={`w-2 h-2 ${themeClasses.dotActive} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
//                               <span className={themeClasses.text}>{benefit}</span>
//                             </motion.li>
//                           ))}
//                         </ul>
//                       </div>
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className={`px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition duration-300 ${themeClasses.button}`}
//                       >
//                         {t("studentGains.startJourney")}
//                       </motion.button>
//                     </motion.div>
//                     {/* Right - Image Carousel */}
//                     <motion.div
//                       initial={{ opacity: 0, x: 50 }}
//                       animate={{ opacity: currentSlide === index ? 1 : 0, x: currentSlide === index ? 0 : 50 }}
//                       transition={{ duration: 0.6, delay: 0.4 }}
//                       className="relative"
//                     >
//                       <div className="grid grid-cols-2 gap-4">
//                         {[1, 2, 3].map((imgIndex) => (
//                           <motion.div
//                             key={imgIndex}
//                             initial={{ opacity: 0, scale: 0.8 }}
//                             animate={{
//                               opacity: currentSlide === index ? 1 : 0,
//                               scale: currentSlide === index ? 1 : 0.8,
//                             }}
//                             transition={{ duration: 0.5, delay: 0.6 + imgIndex * 0.1 }}
//                             className={`rounded-2xl overflow-hidden shadow-lg border-4 border-white ${
//                               imgIndex === 1 ? "col-span-2" : ""
//                             }`}
//                           >
//                             <img
//                               src="/placeholder.svg?height=200&width=300"
//                               alt={`${achievement.title} example ${imgIndex}`}
//                               className="w-full h-48 object-cover hover:scale-105 transition duration-300"
//                             />
//                           </motion.div>
//                         ))}
//                       </div>
//                       {/* Floating Stats */}
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
//                         transition={{ duration: 0.6, delay: 0.8 }}
//                         className={`absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl ${themeClasses.border}`}
//                       >
//                         <div className="flex items-center space-x-2">
//                           <Star className="w-5 h-5 text-yellow-500 fill-current" />
//                           <span className="text-sm font-bold text-gray-900">{t("studentGains.successRate")}</span>
//                         </div>
//                       </motion.div>
//                     </motion.div>
//                   </div>
//                 </div>
//               );
//             })}
//           </motion.div>
//         </div>

//         {/* Bottom Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 1.0 }}
//           viewport={{ once: true }}
//           className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
//         >
//           {stats.map((stat, index) => {
//             const statIcons = [Users, Briefcase, Target, Trophy];
//             const StatIcon = statIcons[index];
//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
//                 viewport={{ once: true }}
//                 className={`bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300 ${themeClasses.border}`}
//               >
//                 <div className={`${themeClasses.iconGradient[0]} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 bg-gradient-to-br`}>
//                   <StatIcon className={`w-6 h-6 ${themeClasses.title}`} />
//                 </div>
//                 <div className={`text-2xl font-bold mb-1 ${themeClasses.title}`}>{stat.number}</div>
//                 <div className={`text-sm ${themeClasses.text}`}>{stat.label}</div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default StudentGains;




















// // src/components/StudentGains.jsx
// "use client";

// import { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight, Trophy, Target, Users, Briefcase, Code, Star } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// const StudentGains = () => {
//   const { t } = useTranslation();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideInterval = useRef(null);
//   const { currentTheme } = useTheme();

//   const getThemeClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return {
//           background: "bg-blue-light themed-surface",
//           border: "border-blue-200",
//           text: "text-blue-text themed-text-secondary",
//           title: "text-blue-primary themed-text-primary",
//           gradient: "from-blue-500 via-blue-50 to-blue-100",
//           iconGradient: [
//             "from-blue-600 to-blue-400",
//             "from-blue-500 to-blue-200",
//             "from-blue-400 to-cyan-400",
//             "from-cyan-400 to-blue-400",
//           ],
//           line: "bg-blue-600",
//           button: "bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500",
//           dotActive: "bg-blue-600",
//           dot: "bg-blue-300 hover:bg-blue-400"
//         };
//       case "purple":
//         return {
//           background: "bg-purple-light themed-surface",
//           border: "border-purple-200",
//           text: "text-purple-text themed-text-secondary",
//           title: "text-purple-primary themed-text-primary",
//           gradient: "from-purple-500 via-purple-50 to-purple-100",
//           iconGradient: [
//             "from-purple-600 to-purple-400",
//             "from-purple-500 to-purple-200",
//             "from-purple-400 to-fuchsia-400",
//             "from-fuchsia-400 to-purple-400",
//           ],
//           line: "bg-purple-600",
//           button: "bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500",
//           dotActive: "bg-purple-600",
//           dot: "bg-purple-300 hover:bg-purple-400"
//         };
//       case "green":
//         return {
//           background: "bg-green-light themed-surface",
//           border: "border-green-200",
//           text: "text-green-text themed-text-secondary",
//           title: "text-green-primary themed-text-primary",
//           gradient: "from-green-500 via-green-50 to-green-100",
//           iconGradient: [
//             "from-green-600 to-green-400",
//             "from-green-500 to-green-200",
//             "from-green-400 to-lime-300",
//             "from-lime-300 to-green-400",
//           ],
//           line: "bg-green-600",
//           button: "bg-gradient-to-r from-green-600 to-green-400 text-white hover:from-green-700 hover:to-green-500",
//           dotActive: "bg-green-600",
//           dot: "bg-green-300 hover:bg-green-400"
//         };
//       case "dark":
//         return {
//           background: "bg-dark-light themed-surface",
//           border: "border-gray-700",
//           text: "text-gray-100 themed-text-secondary",
//           title: "text-yellow-400 themed-text-primary",
//           gradient: "from-gray-900 via-zinc-800 to-gray-800",
//           iconGradient: [
//             "from-yellow-400 to-yellow-400",
//             "from-yellow-500 to-yellow-300",
//             "from-gray-600 to-zinc-400",
//             "from-zinc-300 to-yellow-400",
//           ],
//           line: "bg-yellow-400",
//           button: "bg-gradient-to-r from-yellow-600 to-yellow-400 text-gray-900 hover:from-yellow-700 hover:to-yellow-500",
//           dotActive: "bg-yellow-900",
//           dot: "bg-gray-800 hover:bg-gray-300"
//         };
//       default:
//         return {
//           background: "bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 themed-surface",
//           border: "border-orange-100",
//           text: "text-gray-700 themed-text-secondary",
//           title: "text-orange-600 themed-text-primary",
//           gradient: "from-orange-500 via-orange-50 to-amber-100",
//           iconGradient: [
//             "from-orange-500 to-red-500",
//             "from-orange-600 to-amber-600",
//             "from-amber-500 to-yellow-500",
//             "from-yellow-500 to-orange-500",
//           ],
//           line: "bg-gradient-to-r from-orange-600 to-amber-600",
//           button: "bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-500",
//           dotActive: "bg-orange-600",
//           dot: "bg-orange-300 hover:bg-orange-400"
//         };
//     }
//   };

//   const themeClasses = getThemeClasses();

//   const achievements = [
//     {
//       title: "Master Real-World AI Projects",
//       achievementLabel: "Hands-On Experience",
//       description: "Build and deploy 10+ AI projects in real scenarios.",
//       benefitTitle: "Project Showcase",
//       benefits: [
//         "Image Recognition App",
//         "Chatbot Deployment",
//         "Time Series Forecasting"
//       ],
//       images: ["/Images/aiproject1.png", "/Images/aiproject2.png", "/Images/aiproject3.png"]
//     },
//     {
//       title: "Land High-Paying AI Jobs",
//       achievementLabel: "Career Acceleration",
//       description: "Get interview-ready with live mock sessions.",
//       benefitTitle: "Career Support",
//       benefits: [
//         "Resume Review",
//         "Mock Interviews",
//         "Referral Access"
//       ],
//       images: ["/Images/aijobs1.png", "/Images/aijobs2.png", "/Images/aijobs3.png"]
//     },
//     {
//       title: "Join Elite AI Community",
//       achievementLabel: "Network & Grow",
//       description: "Collaborate with 5,000+ peers worldwide.",
//       benefitTitle: "Community Perks",
//       benefits: [
//         "Peer Code Reviews",
//         "Weekly AMAs",
//         "Job Boards"
//       ],
//       images: ["/Images/aicommunity1.png", "/Images/aicommunity2.png", "/Images/aicommunity3.png"]
//     },
//     {
//       title: "Become an Innovation AI Leader",
//       achievementLabel: "Thought Leadership",
//       description: "Publish your own AI research & articles.",
//       benefitTitle: "Leadership Tracks",
//       benefits: [
//         "Research Mentorship",
//         "Guest Speaker Slots",
//         "Hackathon Judge Roles"
//       ],
//       images: ["/Images/aileader1.png", "/Images/aileader2.png", "/Images/aileader3.png"]
//     }
//   ];

//   const stats = t("studentGains.stats", { returnObjects: true }) || [];

//   const totalSlides = achievements.length;

//   useEffect(() => {
//     slideInterval.current = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }, 5000);
//     return () => clearInterval(slideInterval.current);
//   }, [totalSlides]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     clearInterval(slideInterval.current);
//   };
//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//     clearInterval(slideInterval.current);
//   };
//   const goToSlide = (idx) => {
//     setCurrentSlide(idx);
//     clearInterval(slideInterval.current);
//   };

//   return (
//     <section className={`py-16 px-4 md:px-16 ${themeClasses.background} transition-colors duration-300`}>
//       <div className="container mx-auto">
//         {/* Header */}
//         <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
//           <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.title}`}>{t("studentGains.title")}</h2>
//           <p className={`text-xl ${themeClasses.text} max-w-3xl mx-auto mb-8`}>{t("studentGains.subtitle")}</p>
//           <div className={`w-32 h-1 mx-auto rounded-full ${themeClasses.line}`}></div>
//         </motion.div>

//         {/* Controls */}
//         <div className="flex justify-center items-center mb-8 space-x-4">
//           <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prevSlide} className={`p-3 rounded-full bg-white shadow-lg ${themeClasses.border} transition`}>
//             <ChevronLeft size={24} className={themeClasses.title} />
//           </motion.button>
//           <div className="flex space-x-2">
//             {achievements.map((_, idx) => (
//               <button key={idx} onClick={() => goToSlide(idx)} className={`h-3 w-3 rounded-full transition-all duration-300 ${currentSlide === idx ? themeClasses.dotActive : themeClasses.dot}`}/>
//             ))}
//           </div>
//           <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={nextSlide} className={`p-3 rounded-full bg-white shadow-lg ${themeClasses.border} transition`}>
//             <ChevronRight size={24} className={themeClasses.title} />
//           </motion.button>
//         </div>

//         {/* Slides */}
//         <div className="relative overflow-hidden">
//           <motion.div className="flex" animate={{ x: `-${currentSlide * 100}%` }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
//             {achievements.map((ach, idx) => {
//               const Icon = [Code, Briefcase, Users, Trophy][idx];
//               const iconGrad = themeClasses.iconGradient[idx];
//               return (
//                 <div key={idx} className="w-full flex-shrink-0 px-4">
//                   <div className="grid lg:grid-cols-2 gap-12 items-center">
//                     {/* Left */}
//                     <motion.div className="space-y-6">
//                       <div className="flex items-center space-x-4">
//                         <div className={`p-4 rounded-2xl bg-gradient-to-r ${iconGrad} shadow-lg`}>
//                           <Icon className="w-8 h-8 text-white" />
//                         </div>
//                         <div>
//                           <h3 className={`text-3xl font-bold ${themeClasses.title}`}>{ach.title}</h3>
//                           <p className={`${themeClasses.title} font-semibold`}>{ach.achievementLabel}</p>
//                         </div>
//                       </div>
//                       <p className={`text-xl ${themeClasses.text}`}>{ach.description}</p>
//                       <div className={`bg-white p-6 rounded-2xl shadow-lg ${themeClasses.border}`}>…</div>
//                       <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`px-8 py-4 rounded-xl font-bold ${themeClasses.button}`}>{t("studentGains.startJourney")}</motion.button>
//                     </motion.div>
//                     {/* Right images */}
//                     <motion.div className="grid grid-cols-2 gap-4">
//                       {ach.images.map((src,i) => (
//                         <motion.div key={i} className={`rounded-2xl overflow-hidden shadow-lg ${i===0?"col-span-2":""}`}>
//                           <img src={src} alt="" className="w-full h-48 object-cover" />
//                         </motion.div>
//                       ))}
//                     </motion.div>
//                   </div>
//                 </div>
//               );
//             })}
//           </motion.div>
//         </div>
//         {/* Stats below… */}
//       </div>
//     </section>
//   );
// };

// export default StudentGains;


















"use client";
import { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy, Target, Users, Briefcase, Code, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";

const StudentGains = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);
  const { currentTheme } = useTheme();

  // Map classes to all key elements based on the theme
  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return {
          background: "bg-blue-light themed-surface",
          border: "border-blue-200",
          text: "text-blue-text themed-text-secondary",
          title: "text-blue-primary themed-text-primary",
          gradient: "from-blue-500 via-blue-50 to-blue-100",
          iconGradient: [
            "from-blue-600 to-blue-400",
            "from-blue-500 to-blue-200",
            "from-blue-400 to-cyan-400",
            "from-cyan-400 to-blue-400",
          ],
          line: "bg-blue-600",
          button: "bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500",
          dotActive: "bg-blue-600",
          dot: "bg-blue-300 hover:bg-blue-400"
        };
      case "purple":
        return {
          background: "bg-purple-light themed-surface",
          border: "border-purple-200",
          text: "text-purple-text themed-text-secondary",
          title: "text-purple-primary themed-text-primary",
          gradient: "from-purple-500 via-purple-50 to-purple-100",
          iconGradient: [
            "from-purple-600 to-purple-400",
            "from-purple-500 to-purple-200",
            "from-purple-400 to-fuchsia-400",
            "from-fuchsia-400 to-purple-400",
          ],
          line: "bg-purple-600",
          button: "bg-gradient-to-r from-purple-600 to-purple-400 text-white hover:from-purple-700 hover:to-purple-500",
          dotActive: "bg-purple-600",
          dot: "bg-purple-300 hover:bg-purple-400"
        };
      case "green":
        return {
          background: "bg-green-light themed-surface",
          border: "border-green-200",
          text: "text-green-text themed-text-secondary",
          title: "text-green-primary themed-text-primary",
          gradient: "from-green-500 via-green-50 to-green-100",
          iconGradient: [
            "from-green-600 to-green-400",
            "from-green-500 to-green-200",
            "from-green-400 to-lime-300",
            "from-lime-300 to-green-400",
          ],
          line: "bg-green-600",
          button: "bg-gradient-to-r from-green-600 to-green-400 text-white hover:from-green-700 hover:to-green-500",
          dotActive: "bg-green-600",
          dot: "bg-green-300 hover:bg-green-400"
        };
      case "dark":
        return {
          background: "bg-dark-light themed-surface",
          border: "border-gray-700",
          text: "text-gray-100 themed-text-secondary",
          title: "text-yellow-400 themed-text-primary",
          gradient: "from-gray-900 via-zinc-800 to-gray-800",
          iconGradient: [
            "from-yellow-400 to-yellow-400",
            "from-yellow-500 to-yellow-300",
            "from-gray-600 to-zinc-400",
            "from-zinc-300 to-yellow-400",
          ],
          line: "bg-yellow-400",
          button: "bg-gradient-to-r from-yellow-600 to-yellow-400 text-gray-900 hover:from-yellow-700 hover:to-yellow-500",
          dotActive: "bg-yellow-900",
          dot: "bg-gray-800 hover:bg-gray-300"
        };
      default:
        // orange theme
        return {
          background: "bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 themed-surface",
          border: "border-orange-100",
          text: "text-gray-700 themed-text-secondary",
          title: "text-orange-600 themed-text-primary",
          gradient: "from-orange-500 via-orange-50 to-amber-100",
          iconGradient: [
            "from-orange-500 to-red-500",
            "from-orange-600 to-amber-600",
            "from-amber-500 to-yellow-500",
            "from-yellow-500 to-orange-500",
          ],
          line: "bg-gradient-to-r from-orange-600 to-amber-600",
          button: "bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-500",
          dotActive: "bg-orange-600",
          dot: "bg-orange-300 hover:bg-orange-400"
        };
    }
  };

  const themeClasses = getThemeClasses();

  const achievements = t("studentGains.achievements", { returnObjects: true }) || [];
  const stats = t("studentGains.stats", { returnObjects: true }) || [];
  const totalSlides = achievements.length;

  const achievementIcons = [Code, Briefcase, Users, Trophy];
  
  const IconComponent = achievementIcons[currentSlide];
  

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => {
      if (slideInterval.current) clearInterval(slideInterval.current);
    };
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    resetInterval();
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetInterval();
  };
  const goToSlide = (index) => {
    setCurrentSlide(index);
    resetInterval();
  };
  const resetInterval = () => {
    if (slideInterval.current) clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
  };

  return (
    <section className={`py-16 px-4 md:px-16 ${themeClasses.background} transition-colors duration-300`}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${themeClasses.title}`}>
            {t("studentGains.title")}
          </h2>
          <p className={`text-xl ${themeClasses.text} max-w-3xl mx-auto mb-8`}>
            {t("studentGains.subtitle")}
          </p>
          <div className={`w-32 h-1 mx-auto rounded-full ${themeClasses.line}`}></div>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mb-8 space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className={`p-3 rounded-full bg-white shadow-lg ${themeClasses.border} hover:bg-opacity-80 hover:shadow-2xl transition duration-300`}
          >
            <ChevronLeft size={24} className={themeClasses.title} />
          </motion.button>
          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? `${themeClasses.dotActive} w-8` : themeClasses.dot
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className={`p-3 rounded-full bg-white shadow-lg ${themeClasses.border} hover:bg-opacity-80 hover:shadow-2xl transition duration-300`}
          >
            <ChevronRight size={24} className={themeClasses.title} />
          </motion.button>
        </div>

        {/* Slides */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex"
            initial={false}
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {achievements.map((achievement, index) => {
              const Icon = achievementIcons[index];
              const iconGradient = themeClasses.iconGradient[index];
              return (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: currentSlide === index ? 1 : 0, x: currentSlide === index ? 0 : -50 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="space-y-6"
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-4 rounded-2xl bg-gradient-to-r ${iconGradient} shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className={`text-3xl font-bold ${themeClasses.title}`}>{achievement.title}</h3>
                          <p className={`${themeClasses.title} font-semibold`}>{achievement.achievementLabel}</p>
                        </div>
                      </div>
                      <p className={`text-xl ${themeClasses.text} leading-relaxed`}>{achievement.description}</p>
                      <div className={`bg-white p-6 rounded-2xl shadow-lg ${themeClasses.border}`}>
                        <h4 className={`text-lg font-bold mb-4 flex items-center ${themeClasses.title}`}>
                          <Target className={`w-5 h-5 mr-2 ${themeClasses.title}`} />
                          {achievement.benefitTitle}
                        </h4>
                        <ul className="space-y-3">
                          {achievement.benefits.map((benefit, benefitIndex) => (
                            <motion.li
                              key={benefitIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{
                                opacity: currentSlide === index ? 1 : 0,
                                x: currentSlide === index ? 0 : -20,
                              }}
                              transition={{ duration: 0.4, delay: 0.4 + benefitIndex * 0.1 }}
                              className="flex items-start"
                            >
                              <div className={`w-2 h-2 ${themeClasses.dotActive} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                              <span className={themeClasses.text}>{benefit}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition duration-300 ${themeClasses.button}`}
                      >
                        {t("studentGains.startJourney")}
                      </motion.button>
                    </motion.div>
                    {/* Right - Image Carousel */}
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: currentSlide === index ? 1 : 0, x: currentSlide === index ? 0 : 50 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="relative"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3].map((imgIndex) => {
                          let src;
                          if (index === 0) {
                            // Master real world ai projects
                            src = `/Images/aiproject${imgIndex}.png`;
                          } else if (index === 1) {
                            // Land high paying ai jobs
                            src = imgIndex < 3
                              ? `/Images/aijobs1.png`
                              : `/Images/aijobs3.png`;
                          } else if (index === 2) {
                            // Join elite ai community
                            src = `/Images/aicommunity${imgIndex}.png`;
                          } else {
                            // Become an innovation ai leader
                            src = `/Images/aileader${imgIndex}.png`;
                          }
                          return (
                            <motion.div
                              key={imgIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{
                                opacity: currentSlide === index ? 1 : 0,
                                scale: currentSlide === index ? 1 : 0.8,
                              }}
                              transition={{ duration: 0.5, delay: 0.6 + imgIndex * 0.1 }}
                              className={`rounded-2xl overflow-hidden shadow-lg border-4 border-white ${
                                imgIndex === 1 ? "col-span-2" : ""
                              }`}
                            >
                              <img
                                src={src}
                                alt={`${achievement.title} example ${imgIndex}`}
                                className="w-full h-48 object-cover hover:scale-105 transition duration-300"
                              />
                            </motion.div>
                          );
                        })}
                      </div>
                      {/* Floating Stats */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className={`absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl ${themeClasses.border}`}
                      >
                        <div className="flex items-center space-x-2">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          <span className="text-sm font-bold text-gray-900">{t("studentGains.successRate")}</span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const statIcons = [Users, Briefcase, Target, Trophy];
            const StatIcon = statIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition duration-300 ${themeClasses.border}`}
              >
                <div className={`${themeClasses.iconGradient[0]} w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 bg-gradient-to-br`}>
                  <StatIcon className={`w-6 h-6 ${themeClasses.title}`} />
                </div>
                <div className={`text-2xl font-bold mb-1 ${themeClasses.title}`}>{stat.number}</div>
                <div className={`text-sm ${themeClasses.text}`}>{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StudentGains;
