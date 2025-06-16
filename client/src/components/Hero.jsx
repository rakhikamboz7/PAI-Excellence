
// // src/components/Hero.js
// "use client";

// import { useState, useEffect } from "react";
// import { MessageCircle, X } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { Card } from "./ui/card";
// import { useTheme } from "../contexts/ThemeContext";

// // Theme‐specific background class map
// const getThemeBackgroundClass = (theme) => {
//   switch (theme) {
//     case "blue":
//       return "bg-blue-light";
//     case "purple":
//       return "bg-purple-light";
//     case "green":
//       return "bg-green-light";
//     case "dark":
//       return "bg-dark-light";
//     default:
//       return "bg-white";
//   }
// };

// // Slightly darker overlay variant for the neural line background
// const getNeuralOverlayColor = (theme) => {
//   switch (theme) {
//     case "blue":
//       return "rgba(30, 58, 138, 0.18)";
//     case "purple":
//       return "rgba(91, 33, 182, 0.17)";
//     case "green":
//       return "rgba(4, 120, 87, 0.16)";
//     case "dark":
//       return "rgba(31, 41, 55, 0.23)";
//     default:
//       return "rgba(234, 88, 12, 0.14)";
//   }
// };

// const SLIDES = [
//   {
//     id: 0,
//     type: "content",
//     title: "Welcome! Want to be an AI Expert?",
//     subtitle: "Learn. Innovate. Excel.",
//     description:
//       "Our vision: To create AI experts in remote corners of India, with a focus on Punjab. We target school students and university graduates. So far, we've conducted live sessions for 50,000+ students. We are collaborating with Akal Academies to provide AI learning to 100+ schools across Punjab.",
//     sponsor: "Sponsored by ML0.AI & SimpleMindSchool.com",
//     button: "Start Your AI Journey Today",
//     ceoImage: "/Images/instructor.png",
//   },
//   {
//     id: 1,
//     type: "image",
//     title: "Interactive Learning",
//     subtitle: "Your AI Playground",
//     button: "Explore Topics",           // changed from "Explore Courses"
//     image: "/home_page.png",
//   },
//   {
//     id: 2,
//     type: "image",
//     title: "AI for Everyone",
//     subtitle: "Real Students, Real Impact",
//     button: "See Our Impact",
//     image: "/students.jpeg",
//   },
// ];

// function useAutoSlide(length, current, setFunc, interval = 7000) {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setFunc((prev) => (prev + 1) % length);
//     }, interval);
//     return () => clearTimeout(timer);
//   }, [current, length, setFunc, interval]);
// }

// function GradientGridBackground({ theme }) {
//   const overlay = getNeuralOverlayColor(theme);

//   return (
//     <div className="pointer-events-none absolute inset-0 z-0">
//       {/* Subtle grid */}
//       <div
//         aria-hidden
//         className="absolute inset-0"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
//           backgroundSize: "44px 44px",
//           opacity: 0.16,
//         }}
//       />
//       {/* Neural Network SVG accent */}
//       <svg
//         className="absolute inset-0 w-full h-full"
//         width="100%"
//         height="100%"
//         viewBox="0 0 1440 900"
//         fill="none"
//         style={{ opacity: 1, mixBlendMode: "multiply" }}
//         aria-hidden
//       >
//         <defs>
//           <linearGradient id="themedNeuralLine" x1="0" y1="0" x2="800" y2="870" gradientUnits="userSpaceOnUse">
//             <stop stopColor={overlay} />
//             <stop offset="1" stopColor={overlay} />
//           </linearGradient>
//         </defs>
//         <polyline
//           points="30,600 260,220 420,340 660,140 980,340 1200,210 1400,430"
//           stroke="url(#themedNeuralLine)"
//           strokeWidth="7"
//           strokeDasharray="6 16"
//           fill="none"
//           className="animate-ai-line"
//         />
//         {[260, 420, 660, 980, 1200].map((x, i) => (
//           <circle
//             key={x}
//             cx={x}
//             cy={i % 2 === 0 ? 220 : 340}
//             r={12}
//             fill={overlay}
//             className="animate-ai-node"
//           />
//         ))}
//       </svg>
//       <span
//         className="absolute right-4 sm:right-10 top-2/3 text-lg sm:text-xl font-mono select-none animate-fade-in-late"
//         style={{ color: overlay, opacity: 0.18 }}
//       >
//         &lt;/ai&gt;
//       </span>
//     </div>
//   );
// }

// const Hero = () => {
//   const { currentTheme } = useTheme();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     const handle = (e) => {
//       setMousePos({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };
//     window.addEventListener("mousemove", handle);
//     return () => window.removeEventListener("mousemove", handle);
//   }, []);

//   useAutoSlide(SLIDES.length, currentSlide, setCurrentSlide);

//   const handleWhatsAppClick = () => {
//     const message = encodeURIComponent(
//       "Hello! I'm interested in learning more about PAI Excel's AI offerings."
//     );
//     window.open(`https://wa.me/+919876543210?text=${message}`, "_blank");
//     setShowWhatsAppPopup(false);
//   };

//   const mapIndex = (idx) => {
//     if (idx === 1) return 1;
//     if (idx === 2) return 2;
//     return idx;
//   };

//   function renderContentSlide(slide) {
//     return (
//       <div className="flex flex-col md:flex-row w-full h-full min-h-[80vh] items-center justify-center relative px-4 sm:px-6 lg:px-24">
//         {/* Text Left */}
//         <div className="flex-1 py-10 sm:py-16 flex flex-col gap-2 sm:gap-4 z-10">
//           <p
//             className="text-lg sm:text-xl font-medium tracking-wider animate-fade-in"
//             style={{ animationDelay: "0.1s", color: "var(--accent-color, #60a5fa)" }}
//           >
//             {slide.subtitle}
//           </p>
//           <h1
//             className="text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2 font-extrabold bg-gradient-to-r bg-clip-text text-transparent animate-fade-in"
//             style={{
//               animationDelay: "0.2s",
//               backgroundImage:
//                 "linear-gradient(90deg, var(--primary-color, #1e40af), var(--secondary-color, #3b82f6))",
//             }}
//           >
//             {slide.title}
//           </h1>
//           <p
//             className="text-sm sm:text-base md:text-lg mb-1 md:mb-2 animate-fade-in"
//             style={{ animationDelay: "0.3s", color: "var(--text-color, #1e3a8a)" }}
//           >
//             {slide.description}
//           </p>
//           <p
//             className="text-xs sm:text-sm font-semibold mt-1 animate-fade-in"
//             style={{ animationDelay: "0.35s", color: "var(--secondary-color, #3b82f6)" }}
//           >
//             {slide.sponsor}
//           </p>
//           <div className="mt-5 sm:mt-7">
//             <button
//               className="rounded-lg px-5 sm:px-7 py-2 sm:py-3 text-sm sm:text-base font-bold shadow hover:scale-105 transition-transform duration-200 animate-fade-in themed-button-primary"
//               style={{ animationDelay: "0.55s" }}
//             >
//               {slide.button}
//             </button>
//           </div>
//         </div>

//         {/* CEO/Image Right */}
//         <div className="flex-1 hidden md:flex justify-center items-center">
//           <div className="relative">
//             <div
//               className="w-40 h-40 sm:w-52 sm:h-52 rounded-full p-1.5 sm:p-2 shadow-lg overflow-hidden"
//               style={{
//                 border: "3px solid var(--primary-color, #1e40af)",
//                 background: "linear-gradient(135deg, var(--primary-color, #1e40af)11 60%, transparent)",
//               }}
//             >
//               <img
//                 src={slide.ceoImage}
//                 alt="Instructor"
//                 className="w-full h-full rounded-full object-cover"
//               />
//             </div>
//             <div
//               className="absolute -bottom-1 -right-1 px-3 sm:px-4 py-1 sm:py-2 rounded-xl font-mono shadow-md text-sm sm:text-base font-medium select-none opacity-80 animate-ai-accent"
//               style={{ background: "var(--secondary-color, #3b82f6)", color: "#fff" }}
//             >
//               AI
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   function renderImageSlide(slide) {
//     return (
//       <div className="flex flex-col md:flex-row w-full h-full min-h-[80vh] items-center relative px-4 sm:px-6 lg:px-16 max-w-[1400px] mx-auto">
//         {/* Left: same image card */}
//         <div className="w-full md:w-2/5 flex justify-center items-center py-8 md:py-0">
//           <Card
//             className="rounded-xl overflow-hidden shadow-2xl w-full md:w-[85%] animate-fade-in"
//             style={{
//               background: "var(--surface-color, #dbeafe)",
//               border: "1px solid var(--border-color, #93c5fd)",
//             }}
//           >
//             <img
//               src={slide.image}
//               alt="Hero"
//               className="w-full h-48 sm:h-56 md:h-64 object-cover"
//               style={{ filter: "brightness(0.89)", borderRadius: "16px 16px 0 0" }}
//             />
//             <div className="px-4 py-4 sm:px-6 sm:py-5">
//               <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2" style={{ color: "var(--primary-color, #1e40af)" }}>
//                 {slide.title}
//               </h2>
//               <p className="text-xs sm:text-sm md:text-base mb-2" style={{ color: "var(--text-secondary, #3730a3)" }}>
//                 {slide.subtitle}
//               </p>
//               <button className="rounded px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-sm font-bold shadow hover:scale-105 transition-all themed-button-primary">
//                 {slide.button}
//               </button>
//             </div>
//           </Card>
//         </div>

//         {/* Right: custom per slide */}
//         <div className="w-full md:w-3/5 flex flex-col items-center justify-center py-4 md:py-0">
//           {slide.id === 1 ? (
//             <div className="rounded-xl shadow-md p-6 border animate-fade-in-late" style={{ background: "var(--background-color,#eff6ff)", border: "1.5px solid var(--border-color,#93c5fd)" }}>
//               <h3 className="text-xl font-extrabold mb-3" style={{ color: "var(--primary-color,#1e40af)" }}>
//                 AI Discussion Topics
//               </h3>
//               <ul className="list-disc ml-5 text-sm leading-relaxed" style={{ color: "var(--text-secondary,#3730a3)" }}>
//                 <li>Can AI Replace Humans?</li>
//                 <li>Data in AI: Collection & Ethics</li>
//                 <li>AI vs Human Creativity</li>
//                 <li>Python in Modern AI Workflows</li>
//                 <li>Neural Network Use-Cases</li>
//               </ul>
//               <p className="mt-3 text-xs" style={{ color: "var(--text-secondary,#3730a3)" }}>
//                 Dive into these core questions to explore AI’s impact, capabilities, and ethical considerations.
//               </p>
//             </div>
//           ) : slide.id === 2 ? (
//             <div className="rounded-xl shadow-md p-6 border animate-fade-in-late" style={{ background: "var(--background-color,#eff6ff)", border: "1.5px solid var(--border-color,#93c5fd)" }}>
//               <h3 className="text-xl font-extrabold mb-3" style={{ color: "var(--primary-color,#1e40af)" }}>
//                 Our Impact
//               </h3>
//               <ul className="list-disc ml-5 text-sm leading-relaxed" style={{ color: "var(--text-secondary,#3730a3)" }}>
//                 <li>50,000+ students trained</li>
//                 <li>100+ schools reached</li>
//                 <li>200+ projects completed</li>
//                 <li>300+ volunteer mentors</li>
//                 <li>Top 1% placement rate</li>
//               </ul>
//               <p className="mt-3 text-xs" style={{ color: "var(--text-secondary,#3730a3)" }}>
//                 We're proud to empower learners and drive AI adoption across communities.
//               </p>
//             </div>
//           ) : (
//             // slide.id === 0 - but content slide handles id 0 already
//             null
//           )}
//         </div>
//       </div>
//     );
//   }

//   const bgClass = getThemeBackgroundClass(currentTheme);

//   return (
//     <>
//       <section
//         className={`${bgClass} relative w-full flex flex-col justify-center overflow-hidden transition-colors duration-300`}
//         style={{ color: "var(--text-color,#1e3a8a)", minHeight: "80vh" }}
//       >
//         <GradientGridBackground theme={currentTheme} />

//         <div
//           aria-hidden
//           className="pointer-events-none absolute inset-0 z-10 transition-all"
//           style={{
//             background: `radial-gradient(600px at ${mousePos.x}% ${mousePos.y}%, var(--accent-color,#60a5fa) 15%, transparent 100%)`,
//             opacity: 0.30,
//           }}
//         />

//         <div
//           key={currentSlide}
//           className="relative z-20 w-full h-full flex flex-col transition-opacity duration-800 animate-slide-fade"
//           style={{ minHeight: "80vh" }}
//         >
//           {SLIDES[currentSlide].type === "content"
//             ? renderContentSlide(SLIDES[currentSlide])
//             : renderImageSlide(SLIDES[currentSlide])}
//         </div>

//         <div className="absolute z-30 bottom-8 left-1/2 -translate-x-1/2 flex flex-row gap-3 md:bottom-auto md:left-4 lg:left-8 md:top-1/2 md:-translate-y-1/2 md:flex-col">
//           {SLIDES.map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentSlide(mapIndex(idx))}
//               aria-label={`Go to slide ${idx + 1}`}
//               className={`relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
//                 currentSlide === mapIndex(idx) ? "shadow-md bg-opacity-20" : "opacity-60 hover:bg-opacity-15"
//               }`}
//               style={{
//                 borderColor: "var(--primary-color,#1e40af)",
//                 background:
//                   currentSlide === mapIndex(idx)
//                     ? "var(--accent-color,#60a5fa)"
//                     : "var(--surface-color,#dbeafe)",
//               }}
//             >
//               <span
//                 className="block rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300"
//                 style={{
//                   width: currentSlide === mapIndex(idx) ? 12 : 8,
//                   height: currentSlide === mapIndex(idx) ? 12 : 8,
//                   background: "var(--primary-color,#1e40af)",
//                   opacity: currentSlide === mapIndex(idx) ? 0.92 : 0.44,
//                 }}
//               />
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* WhatsApp floating button & popup (unchanged) */}
//       {/* ... */}

//       <style jsx>{`
//         @keyframes ai-line { 0% { stroke-dashoffset: 60; } 100% { stroke-dashoffset: 0; } }
//         @keyframes ai-node { 0%,100% { opacity:0.7; r:10; } 50% { opacity:1; r:13; } }
//         @keyframes ai-accent { 0%,100% { opacity:0.7; transform:translateY(0);} 50% { opacity:1; transform:translateY(-7px);} }
//         @keyframes fade-in { from{opacity:0;filter:blur(3px);}to{opacity:1;filter:blur(0);} }
//         @keyframes fade-in-late { 0%{opacity:0;transform:translateY(10px);}60%{opacity:0;}100%{opacity:1;transform:translateY(0);} }
//         @keyframes slide-fade { from{opacity:0;transform:translateY(24px);}to{opacity:1;transform:translateY(0);} }
//         @keyframes whatsapp-popup { from{transform:translateY(32px);opacity:0;}to{transform:translateY(0);opacity:1;} }
//         @keyframes whatsapp-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(64,226,123,0.27);}50%{box-shadow:0 0 12px 8px #22C55E33;} }
//         .animate-ai-line { animation: ai-line 4s linear forwards; }
//         .animate-ai-node { animation: ai-node 2.8s ease-in-out infinite; }
//         .animate-ai-accent { animation: ai-accent 3.4s ease-in-out infinite; }
//         .animate-fade-in { animation: fade-in 0.95s 0.05s both; }
//         .animate-fade-in-late { animation: fade-in-late 1.3s 0.3s both; }
//         .animate-slide-fade { animation: slide-fade 0.67s both; }
//         .animate-whatsapp-popup { animation: whatsapp-popup 0.42s cubic-bezier(.31,.7,.56,.93); }
//         .animate-whatsapp-pulse { animation: whatsapp-pulse 3s infinite; }
//         .themed-button-primary { background: var(--primary-color,#1e40af)!important; color: var(--background-color,#fff)!important; }
//       `}</style>
//     </>
//   );
// };

// export default Hero;

























// // src/components/Hero.jsx
// "use client";

// import { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { Card } from "./ui/card";
// import { useTheme } from "../contexts/ThemeContext";

// // Theme background helpers (unchanged)
// const getThemeBackgroundClass = (theme) => {
//   switch (theme) {
//     case "blue":   return "bg-blue-light";
//     case "purple": return "bg-purple-light";
//     case "green":  return "bg-green-light";
//     case "dark":   return "bg-dark-light";
//     default:       return "bg-white";
//   }
// };
// const getNeuralOverlayColor = (theme) => {
//   switch (theme) {
//     case "blue":   return "rgba(30,58,138,0.18)";
//     case "purple": return "rgba(91,33,182,0.17)";
//     case "green":  return "rgba(4,120,87,0.16)";
//     case "dark":   return "rgba(31,41,55,0.23)";
//     default:       return "rgba(234,88,12,0.14)";
//   }
// };

// // auto-slide hook (unchanged)
// function useAutoSlide(length, current, setCurrent, interval = 7000) {
//   useEffect(() => {
//     const t = setTimeout(() => setCurrent((i) => (i + 1) % length), interval);
//     return () => clearTimeout(t);
//   }, [length, current, setCurrent, interval]);
// }

// // neural grid background (unchanged)
// function GradientGridBackground({ theme }) {
//   const overlay = getNeuralOverlayColor(theme);
//   return (
//     <div className="pointer-events-none absolute inset-0 z-0">
//       <div
//         aria-hidden
//         className="absolute inset-0"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)," +
//             "linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
//           backgroundSize: "44px 44px",
//           opacity: 0.16,
//         }}
//       />
//       <svg
//         className="absolute inset-0 w-full h-full"
//         viewBox="0 0 1440 900"
//         fill="none"
//         style={{ mixBlendMode: "multiply" }}
//         aria-hidden
//       >
//         <defs>
//           <linearGradient id="neuralLine" x1="0" y1="0" x2="800" y2="870">
//             <stop stopColor={overlay} />
//             <stop offset="1" stopColor={overlay} />
//           </linearGradient>
//         </defs>
//         <polyline
//           points="30,600 260,220 420,340 660,140 980,340 1200,210 1400,430"
//           stroke="url(#neuralLine)"
//           strokeWidth="7"
//           strokeDasharray="6 16"
//           className="animate-ai-line"
//         />
//         {[260, 420, 660, 980, 1200].map((x, i) => (
//           <circle
//             key={x}
//             cx={x}
//             cy={i % 2 === 0 ? 220 : 340}
//             r={12}
//             fill={overlay}
//             className="animate-ai-node"
//           />
//         ))}
//       </svg>
//       <span
//         className="absolute right-4 sm:right-10 top-2/3 font-mono animate-fade-in-late"
//         style={{ color: overlay, opacity: 0.18 }}
//       >
//         &lt;/ai&gt;
//       </span>
//     </div>
//   );
// }

// export default function Hero() {
//   const { t } = useTranslation();
//   const { currentTheme } = useTheme();
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

//   // pull all strings from your translation.json
//   const rawSlides  = t("hero.slides",              { returnObjects: true }) || [];
//   const discuss    = t("hero.discussionSection",   { returnObjects: true });
//   const impact     = t("hero.impactSection",       { returnObjects: true });

//   // merge in your images/static props
//   const slides = rawSlides.map((s, i) => ({
//     ...s,
//     ...(i === 0
//       ? { type: "content", ceoImage: "/Images/instructor.png" }
//       : { type: "image", image: i === 1 ? "/home_page.png" : "/students.jpeg" }
//     ),
//   }));

//   useAutoSlide(slides.length, slideIndex, setSlideIndex);

//   useEffect(() => {
//     const m = (e) =>
//       setMousePos({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     window.addEventListener("mousemove", m);
//     return () => window.removeEventListener("mousemove", m);
//   }, []);

//   const slide = slides[slideIndex] || {};
//   const bgClass = getThemeBackgroundClass(currentTheme);

//   // two render functions identical to your originals:
//   const renderContentSlide = (s) => (
//     <div className="flex flex-col md:flex-row w-full min-h-[80vh] items-center justify-center px-4 sm:px-6 lg:px-24">
//       <div className="flex-1 py-10 sm:py-16 flex flex-col gap-2 z-10">
//         <p className="text-lg sm:text-xl font-medium tracking-wider animate-fade-in"
//            style={{ animationDelay: "0.1s", color: "var(--accent-color,#60a5fa)" }}>
//           {s.subtitle}
//         </p>
//         <h1
//           className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent animate-fade-in mb-1"
//           style={{
//             animationDelay: "0.2s",
//             backgroundImage:
//               "linear-gradient(90deg, var(--primary-color,#1e40af), var(--secondary-color,#3b82f6))",
//           }}
//         >
//           {s.title}
//         </h1>
//         <p className="text-sm sm:text-base md:text-lg mb-1 animate-fade-in"
//            style={{ animationDelay: "0.3s", color: "var(--text-color,#1e3a8a)" }}>
//           {s.description}
//         </p>
//         <p className="text-xs sm:text-sm font-semibold mt-1 animate-fade-in"
//            style={{ animationDelay: "0.35s", color: "var(--secondary-color,#3b82f6)" }}>
//           {s.sponsor}
//         </p>
//         <div className="mt-5 sm:mt-7">
//           <button
//             className="rounded-lg px-5 sm:px-7 py-2 sm:py-3 font-bold shadow hover:scale-105 transition-transform duration-200 animate-fade-in themed-button-primary"
//             style={{ animationDelay: "0.55s" }}
//           >
//             {s.button}
//           </button>
//         </div>
//       </div>
//       <div className="flex-1 hidden md:flex justify-center items-center relative">
//         <Card
//           className="rounded-full overflow-hidden shadow-lg w-40 h-40 sm:w-52 sm:h-52 p-1.5 sm:p-2"
//           style={{
//             border: "3px solid var(--primary-color,#1e40af)",
//             background:
//               "linear-gradient(135deg,var(--primary-color,#1e40af)11 60%,transparent)",
//           }}
//         >
//           <img
//             src={s.ceoImage}
//             alt="Instructor"
//             className="w-full h-full object-cover rounded-full"
//           />
//         </Card>
//         <span
//           className="absolute -bottom-1 -right-1 font-mono px-3 py-1.5 rounded-xl animate-ai-accent"
//           style={{ background: "var(--secondary-color,#3b82f6)", color: "#fff", opacity: 0.8 }}
//         >
//           AI
//         </span>
//       </div>
//     </div>
//   );

//   const renderImageSlide = (s) => (
//     <div className="flex flex-col md:flex-row w-full min-h-[80vh] items-center px-4 sm:px-6 lg:px-16 mx-auto max-w-[1400px]">
//       <div className="w-full md:w-2/5 flex justify-center items-center py-8 md:py-0">
//         <Card
//           className="rounded-xl overflow-hidden shadow-2xl w-full md:w-[85%] animate-fade-in"
//           style={{
//             background: "var(--surface-color,#dbeafe)",
//             border: "1px solid var(--border-color,#93c5fd)",
//           }}
//         >
//           <img
//             src={s.image}
//             alt={s.title}
//             className="w-full h-48 sm:h-56 md:h-64 object-cover"
//             style={{ filter: "brightness(0.89)", borderRadius: "16px 16px 0 0" }}
//           />
//           <div className="px-4 py-4 sm:px-6 sm:py-5">
//             <h2
//               className="text-lg sm:text-xl md:text-2xl font-bold mb-1"
//               style={{ color: "var(--primary-color,#1e40af)" }}
//             >
//               {s.title}
//             </h2>
//             <p
//               className="text-xs sm:text-sm md:text-base mb-2"
//               style={{ color: "var(--text-secondary,#3730a3)" }}
//             >
//               {s.subtitle}
//             </p>
//             <button className="rounded px-4 sm:px-5 py-1.5 sm:py-2 font-bold shadow hover:scale-105 transition-all themed-button-primary">
//               {s.button}
//             </button>
//           </div>
//         </Card>
//       </div>
//       <div className="w-full md:w-3/5 flex flex-col items-center justify-center py-4 md:py-0">
//         {slideIndex === 1 && (
//           <div
//             className="rounded-xl shadow-md p-6 border animate-fade-in-late"
//             style={{
//               background: "var(--background-color,#eff6ff)",
//               border: "1.5px solid var(--border-color,#93c5fd)",
//             }}
//           >
//             <h3
//               className="text-xl font-extrabold mb-3"
//               style={{ color: "var(--primary-color,#1e40af)" }}
//             >
//               {discuss.title}
//             </h3>
//             <ul
//               className="list-disc ml-5 text-sm leading-relaxed"
//               style={{ color: "var(--text-secondary,#3730a3)" }}
//             >
//               {discuss.points.map((pt, i) => (
//                 <li key={i}>{pt}</li>
//               ))}
//             </ul>
//             <p className="mt-3 text-xs" style={{ color: "var(--text-secondary,#3730a3)" }}>
//               {discuss.description}
//             </p>
//           </div>
//         )}
//         {slideIndex === 2 && (
//           <div
//             className="rounded-xl shadow-md p-6 border animate-fade-in-late"
//             style={{
//               background: "var(--background-color,#eff6ff)",
//               border: "1.5px solid var(--border-color,#93c5fd)",
//             }}
//           >
//             <h3
//               className="text-xl font-extrabold mb-3"
//               style={{ color: "var(--primary-color,#1e40af)" }}
//             >
//               {impact.title}
//             </h3>
//             <ul
//               className="list-disc ml-5 text-sm leading-relaxed"
//               style={{ color: "var(--text-secondary,#3730a3)" }}
//             >
//               {impact.points.map((pt, i) => (
//                 <li key={i}>{pt}</li>
//               ))}
//             </ul>
//             <p className="mt-3 text-xs" style={{ color: "var(--text-secondary,#3730a3)" }}>
//               {impact.description}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <>
//       <section
//         className={`${bgClass} relative w-full flex flex-col justify-center overflow-hidden transition-colors duration-300`}
//         style={{ minHeight: "80vh", color: "var(--text-color,#1e3a8a)" }}
//       >
//         <GradientGridBackground theme={currentTheme} />
//         <div
//           aria-hidden
//           className="pointer-events-none absolute inset-0 z-10"
//           style={{
//             background: `radial-gradient(600px at ${mousePos.x}% ${mousePos.y}%, var(--accent-color,#60a5fa) 15%, transparent 100%)`,
//             opacity: 0.30,
//           }}
//         />
//         <div
//           key={slideIndex}
//           className="relative z-20 w-full h-full transition-opacity duration-800 animate-slide-fade"
//           style={{ minHeight: "80vh" }}
//         >
//           {slide.type === "content" ? renderContentSlide(slide) : renderImageSlide(slide)}
//         </div>
//         <div className="absolute z-30 bottom-8 left-1/2 -translate-x-1/2 flex gap-3 md:bottom-auto md:left-4 lg:left-8 md:top-1/2 md:-translate-y-1/2 md:flex-col">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setSlideIndex(i)}
//               className={`relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-colors duration-300 ${
//                 slideIndex === i ? "shadow-md bg-opacity-20" : "opacity-60 hover:bg-opacity-15"
//               }`}
//               style={{
//                 borderColor: "var(--primary-color,#1e40af)",
//                 background: slideIndex === i
//                   ? "var(--accent-color,#60a5fa)"
//                   : "var(--surface-color,#dbeafe)",
//               }}
//             >
//               <span
//                 className="absolute left-1/2 top-1/2 block rounded-full transition-all duration-300"
//                 style={{
//                   width: slideIndex === i ? 12 : 8,
//                   height: slideIndex === i ? 12 : 8,
//                   background: "var(--primary-color,#1e40af)",
//                   transform: "translate(-50%,-50%)",
//                   opacity: slideIndex === i ? 0.92 : 0.44,
//                 }}
//               />
//             </button>
//           ))}
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes ai-line      { to { stroke-dashoffset: 0; } }
//         @keyframes ai-node      { 50% { opacity: 1; r: 13; } }
//         @keyframes ai-accent    { 50% { opacity: 1; transform: translateY(-7px); } }
//         @keyframes fade-in      { to { opacity: 1; filter: blur(0); } }
//         @keyframes fade-in-late { to { opacity: 1; transform: translateY(0); } }
//         @keyframes slide-fade   { to { opacity: 1; transform: translateY(0); } }
//         .animate-ai-line       { animation: ai-line 4s linear forwards; }
//         .animate-ai-node       { animation: ai-node 2.8s ease-in-out infinite; }
//         .animate-ai-accent     { animation: ai-accent 3.4s ease-in-out infinite; }
//         .animate-fade-in       { animation: fade-in 0.95s 0.05s both; }
//         .animate-fade-in-late  { animation: fade-in-late 1.3s 0.3s both; }
//         .animate-slide-fade    { animation: slide-fade 0.67s both; }
//         .themed-button-primary { background: var(--primary-color,#1e40af)!important; color: var(--background-color,#fff)!important; }
//       `}</style>
//     </>
//   );
// }
























// src/components/Hero.jsx
"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "./ui/card";
import { useTheme } from "../contexts/ThemeContext";

// Theme background helpers (unchanged)
const getThemeBackgroundClass = (theme) => {
  switch (theme) {
    case "blue":
      return "bg-blue-light";
    case "purple":
      return "bg-purple-light";
    case "green":
      return "bg-green-light";
    case "dark":
      return "bg-dark-light";
    default:
      return "bg-white";
  }
};
const getNeuralOverlayColor = (theme) => {
  switch (theme) {
    case "blue":
      return "rgba(30,58,138,0.18)";
    case "purple":
      return "rgba(91,33,182,0.17)";
    case "green":
      return "rgba(4,120,87,0.16)";
    case "dark":
      return "rgba(31,41,55,0.23)";
    default:
      return "rgba(234,88,12,0.14)";
  }
};

// auto-slide hook (unchanged)
function useAutoSlide(length, current, setCurrent, interval = 7000) {
  useEffect(() => {
    const t = setTimeout(() => setCurrent((i) => (i + 1) % length), interval);
    return () => clearTimeout(t);
  }, [length, current, setCurrent, interval]);
}

// neural grid background (unchanged)
function GradientGridBackground({ theme }) {
  const overlay = getNeuralOverlayColor(theme);
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          opacity: 0.16,
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        style={{ mixBlendMode: "multiply" }}
        aria-hidden
      >
        <defs>
          <linearGradient id="neuralLine" x1="0" y1="0" x2="800" y2="870">
            <stop stopColor={overlay} />
            <stop offset="1" stopColor={overlay} />
          </linearGradient>
        </defs>
        <polyline
          points="30,600 260,220 420,340 660,140 980,340 1200,210 1400,430"
          stroke="url(#neuralLine)"
          strokeWidth="7"
          strokeDasharray="6 16"
          className="animate-ai-line"
        />
        {[260, 420, 660, 980, 1200].map((x, i) => (
          <circle
            key={x}
            cx={x}
            cy={i % 2 === 0 ? 220 : 340}
            r={12}
            fill={overlay}
            className="animate-ai-node"
          />
        ))}
      </svg>
      <span
        className="absolute right-4 sm:right-10 top-2/3 font-mono animate-fade-in-late"
        style={{ color: overlay, opacity: 0.18 }}
      >
        &lt;/ai&gt;
      </span>
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const { currentTheme } = useTheme();
  const [slideIndex, setSlideIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const rawSlides = t("hero.slides", { returnObjects: true }) || [];
  const discuss = t("hero.discussionSection", { returnObjects: true });
  const impact = t("hero.impactSection", { returnObjects: true });

  const slides = rawSlides.map((s, i) => ({
    ...s,
    ...(i === 0
      ? { type: "content", ceoImage: "/Images/instructor.png" }
      : { type: "image", image: i === 1 ? "/home_page.png" : "/students.jpeg" }),
  }));

  useAutoSlide(slides.length, slideIndex, setSlideIndex);

  useEffect(() => {
    const m = (e) =>
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, []);

  const slide = slides[slideIndex] || {};
  const bgClass = getThemeBackgroundClass(currentTheme);

  const gradientBtn =
    "bg-gradient-to-r from-orange-600 to-amber-600 " +
    "hover:from-orange-700 hover:to-amber-500 " +
    "text-white font-semibold";

  const renderContentSlide = (s) => (
    <div className="flex flex-col md:flex-row w-full min-h-[80vh] items-center justify-center px-4 sm:px-6 lg:px-24">
      <div className="flex-1 py-10 sm:py-16 flex flex-col gap-2 z-10">
        <p
          className="text-lg sm:text-xl font-medium tracking-wider animate-fade-in"
          style={{ animationDelay: "0.1s", color: "var(--accent-color,#60a5fa)" }}
        >
          {s.subtitle}
        </p>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent animate-fade-in mb-1"
          style={{
            animationDelay: "0.2s",
            backgroundImage:
              "linear-gradient(90deg, var(--primary-color,#1e40af), var(--secondary-color,#3b82f6))",
          }}
        >
          {s.title}
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg mb-1 animate-fade-in"
          style={{ animationDelay: "0.3s", color: "var(--text-color,#1e3a8a)" }}
        >
          {s.description}
        </p>
        <p
          className="text-xs sm:text-sm font-semibold mt-1 animate-fade-in"
          style={{ animationDelay: "0.35s", color: "var(--secondary-color,#3b82f6)" }}
        >
          {s.sponsor}
        </p>
        <div className="mt-5 sm:mt-7">
          <button
            className={`rounded-lg px-5 sm:px-7 py-2 sm:py-3 font-bold shadow hover:scale-105 transition-transform duration-200 animate-fade-in ${gradientBtn}`}
            style={{ animationDelay: "0.55s" }}
          >
            {s.button}
          </button>
        </div>
      </div>
      <div className="flex-1 hidden md:flex justify-center items-center relative">
        <Card
          className="rounded-full overflow-hidden shadow-lg w-40 h-40 sm:w-52 sm:h-52 p-1.5 sm:p-2"
          style={{
            border: "3px solid var(--primary-color,#1e40af)",
            background:
              "linear-gradient(135deg,var(--primary-color,#1e40af)11 60%,transparent)",
          }}
        >
          <img
            src={s.ceoImage}
            alt="Instructor"
            className="w-full h-full object-cover rounded-full"
          />
        </Card>
        <span
          className="absolute -bottom-1 -right-1 font-mono px-3 py-1.5 rounded-xl animate-ai-accent"
          style={{ background: "var(--secondary-color,#3b82f6)", color: "#fff", opacity: 0.8 }}
        >
          AI
        </span>
      </div>
    </div>
  );

  const renderImageSlide = (s) => (
    <div className="flex flex-col md:flex-row w-full min-h-[80vh] items-center px-4 sm:px-6 lg:px-16 mx-auto max-w-[1400px]">
      <div className="w-full md:w-2/5 flex justify-center items-center py-8 md:py-0">
        <Card
          className="rounded-xl overflow-hidden shadow-2xl w-full md:w-[85%] animate-fade-in"
          style={{
            background: "var(--surface-color,#dbeafe)",
            border: "1px solid var(--border-color,#93c5fd)",
          }}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
            style={{ filter: "brightness(0.89)", borderRadius: "16px 16px 0 0" }}
          />
          <div className="px-4 py-4 sm:px-6 sm:py-5">
            <h2
              className="text-lg sm:text-xl md:text-2xl font-bold mb-1"
              style={{ color: "var(--primary-color,#1e40af)" }}
            >
              {s.title}
            </h2>
            <p
              className="text-xs sm:text-sm md-text-base mb-2"
              style={{ color: "var(--text-secondary,#3730a3)" }}
            >
              {s.subtitle}
            </p>
            <button
              className={`rounded px-4 sm:px-5 py-1.5 sm:py-2 font-bold shadow hover:scale-105 transition-all ${gradientBtn}`}
            >
              {s.button}
            </button>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-3/5 flex flex-col items-center justify-center py-4 md:py-0">
        {slideIndex === 1 && (
          <div
            className="rounded-xl shadow-md p-6 border animate-fade-in-late"
            style={{
              background: "var(--background-color,#eff6ff)",
              border: "1.5px solid var(--border-color,#93c5fd)",
            }}
          >
            <h3
              className="text-xl font-extrabold mb-3"
              style={{ color: "var(--primary-color,#1e40af)" }}
            >
              {discuss.title}
            </h3>
            <ul
              className="list-disc ml-5 text-sm leading-relaxed"
              style={{ color: "var(--text-secondary,#3730a3)" }}
            >
              {discuss.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs" style={{ color: "var(--text-secondary,#3730a3)" }}>
              {discuss.description}
            </p>
          </div>
        )}
        {slideIndex === 2 && (
          <div
            className="rounded-xl shadow-md p-6 border animate-fade-in-late"
            style={{
              background: "var(--background-color,#eff6ff)",
              border: "1.5px solid var(--border-color,#93c5fd)",
            }}
          >
            <h3
              className="text-xl font-extrabold mb-3"
              style={{ color: "var(--primary-color,#1e40af)" }}
            >
              {impact.title}
            </h3>
            <ul
              className="list-disc ml-5 text-sm leading-relaxed"
              style={{ color: "var(--text-secondary,#3730a3)" }}
            >
              {impact.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs" style={{ color: "var(--text-secondary,#3730a3)" }}>
              {impact.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      <section
        className={`${bgClass} relative w-full flex flex-col justify-center overflow-hidden transition-colors duration-300`}
        style={{ minHeight: "80vh", color: "var(--text-color,#1e3a8a)" }}
      >
        <GradientGridBackground theme={currentTheme} />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `radial-gradient(600px at ${mousePos.x}% ${mousePos.y}%, var(--accent-color,#60a5fa) 15%, transparent 100%)`,
            opacity: 0.3,
          }}
        />
        <div
          key={slideIndex}
          className="relative z-20 w-full h-full transition-opacity duration-800 animate-slide-fade"
          style={{ minHeight: "80vh" }}
        >
          {slide.type === "content" ? renderContentSlide(slide) : renderImageSlide(slide)}
        </div>

        {/* indicators */}
        <div className="
            absolute z-30
            bottom-8 left-1/2 -translate-x-1/2
            flex gap-3
            lg:bottom-auto lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:flex-col
          ">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className={`
                relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-colors duration-300
                ${slideIndex === i ? "shadow-md bg-opacity-20" : "opacity-60 hover:bg-opacity-15"}
              `}
              style={{
                borderColor: "var(--primary-color,#1e40af)",
                background: slideIndex === i
                  ? "var(--accent-color,#60a5fa)"
                  : "var(--surface-color,#dbeafe)",
              }}
            >
              <span
                className="absolute left-1/2 top-1/2 block rounded-full transition-all duration-300"
                style={{
                  width: slideIndex === i ? 12 : 8,
                  height: slideIndex === i ? 12 : 8,
                  background: "var(--primary-color,#1e40af)",
                  transform: "translate(-50%,-50%)",
                  opacity: slideIndex === i ? 0.92 : 0.44,
                }}
              />
            </button>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes ai-line { to { stroke-dashoffset: 0; } }
        @keyframes ai-node { 50% { opacity: 1; r: 13; } }
        @keyframes ai-accent { 50% { opacity: 1; transform: translateY(-7px); } }
        @keyframes fade-in { to { opacity: 1; filter: blur(0); } }
        @keyframes fade-in-late { to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-fade { to { opacity: 1; transform: translateY(0); } }
        .animate-ai-line { animation: ai-line 4s linear forwards; }
        .animate-ai-node { animation: ai-node 2.8s ease-in-out infinite; }
        .animate-ai-accent { animation: ai-accent 3.4s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.95s 0.05s both; }
        .animate-fade-in-late { animation: fade-in-late 1.3s 0.3s both; }
        .animate-slide-fade { animation: slide-fade 0.67s both; }
      `}</style>
    </>
  );
}
