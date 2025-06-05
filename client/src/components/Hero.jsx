
// import { useState, useEffect } from "react";
// import { MessageCircle, X } from "lucide-react";
// import { Card } from "./ui/card";
// import { useTheme } from "../contexts/ThemeContext";

// // Theme-specific background class map matching your Mission
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
//       return "rgba(30, 58, 138, 0.18)"; // Deep blue
//     case "purple":
//       return "rgba(91, 33, 182, 0.17)"; // Deep purple
//     case "green":
//       return "rgba(4, 120, 87, 0.16)"; // Deep green
//     case "dark":
//       return "rgba(31, 41, 55, 0.23)"; // Very dark
//     default:
//       return "rgba(234, 88, 12, 0.14)"; // Muted orange for default
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
//     ceoImage: "/ceo-image.jpg",
//   },
//   {
//     id: 1,
//     type: "image",
//     title: "AI for Everyone",
//     subtitle: "Real Students, Real Impact",
//     button: "See Our Impact",
//     image: "/students.jpeg",
//   },
//   {
//     id: 2,
//     type: "image",
//     title: "Interactive Learning",
//     subtitle: "Your AI Playground",
//     button: "Explore Courses",
//     image: "/home_page.png",
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
//       {/* Neural Network SVG accent (overlay color) */}
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
//       {/* AI motif, only one subtle symbol on the right */}
//       <span
//         className="absolute right-14 top-2/3 text-[1.2rem] font-mono select-none animate-fade-in-late"
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

//   useAutoSlide(SLIDES.length, currentSlide, setCurrentSlide, 7000);

//   const handleWhatsAppClick = () => {
//     const message = encodeURIComponent(
//       "Hello! I'm interested in learning more about PAI Excel's AI courses."
//     );
//     const whatsappUrl = `https://wa.me/+919876543210?text=${message}`;
//     window.open(whatsappUrl, "_blank");
//     setShowWhatsAppPopup(false);
//   };

//   function renderContentSlide(slide) {
//     return (
//       <div className="flex flex-col md:flex-row h-full items-center justify-center w-full relative px-6 md:px-24">
//         {/* Text Left */}
//         <div className="flex-1 py-16 flex flex-col gap-3 md:gap-6 z-10">
//           <p
//             className="text-2xl md:text-xl font-medium tracking-wider animate-fade-in"
//             style={{
//               animationDelay: "0.1s",
//               color: "var(--accent-color, #60a5fa)",
//               opacity: 1,
//             }}
//           >
//             {slide.subtitle}
//           </p>
//           <h1
//             className="text-4xl md:text-5xl mb-2 md:mb-4 font-extrabold bg-gradient-to-r bg-clip-text text-transparent animate-fade-in"
//             style={{
//               animationDelay: "0.2s",
//               backgroundImage:
//                 "linear-gradient(90deg, var(--primary-color, #1e40af), var(--secondary-color, #3b82f6))",
//             }}
//           >
//             {slide.title}
//           </h1>
//           <p
//             className="text-base md:text-lg mb-1 md:mb-2 animate-fade-in"
//             style={{
//               animationDelay: "0.3s",
//               color: "var(--text-color, #1e3a8a)",
//               opacity: 0.92,
//             }}
//           >
//             {slide.description}
//           </p>
//           <p
//             className="text-xs font-semibold mt-2 animate-fade-in"
//             style={{
//               animationDelay: "0.35s",
//               color: "var(--secondary-color, #3b82f6)",
//               opacity: 0.7,
//             }}
//           >
//             {slide.sponsor}
//           </p>
//           <div className="mt-7">
//             <button
//               className="rounded-lg px-7 py-3 text-base font-bold shadow hover:scale-105 transition-transform duration-200 animate-fade-in themed-button-primary"
//               style={{
//                 animationDelay: "0.55s",
//                 outline: "none",
//                 border: "none",
//               }}
//             >
//               {slide.button}
//             </button>
//           </div>
//         </div>
//         {/* Headshot/image right */}
//         <div className="flex-1 hidden md:flex justify-center items-center">
//           <div className="relative">
//             <div
//               className="w-60 h-60 rounded-full p-2 shadow-lg overflow-hidden"
//               style={{
//                 border: "4px solid var(--primary-color, #1e40af)",
//                 background: "linear-gradient(135deg, var(--primary-color, #1e40af)11 60%, transparent)",
//               }}
//             >
//               <img
//                 src={slide.ceoImage || "/placeholder.svg"}
//                 alt="CEO"
//                 className="w-50 h-50 rounded-full object-cover"
//                 style={{ filter: "brightness(0.92)" }}
//               />
//             </div>
//             <div
//               className="absolute -bottom-0 -right-0 px-4 py-2 rounded-2xl font-mono shadow-md text-lg font-medium select-none opacity-80 animate-ai-accent"
//               style={{
//                 color: "#fff",
//                 background: "var(--secondary-color,rgb(13, 50, 109))",
//               }}
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
      
//   <div className="flex flex-col md:flex-row h-full items-center min-h-[80vh] relative px-4 md:px-16 max-w-[1400px] mx-auto">
//     {/* Slide image left - Made narrower */}
//     <div className="w-full md:w-2/5 flex justify-center items-center">
//       <Card
//         className="rounded-xl overflow-hidden shadow-2xl w-[85%] mx-auto animate-fade-in"
//         style={{
//           background: "var(--surface-color, #dbeafe)",
//           border: "1px solid var(--border-color, #93c5fd)"
//         }}
//       >
//         <img
//           src={slide.image || "/placeholder.svg"}
//           alt="Hero"
//           className="w-full h-64 object-cover" // Reduced height
//           style={{
//             filter: "brightness(0.89)",
//             borderRadius: "16px 16px 0 0"
//           }}
//         />
//         <div className="p-4"> {/* Reduced padding */}
//           <h2
//             className="text-xl md:text-2xl font-bold mb-2" // Smaller text
//             style={{ color: "var(--primary-color, #1e40af)" }}
//           >
//             {slide.title}
//           </h2>
//           <p
//             className="text-sm mb-3" // Smaller text
//             style={{ color: "var(--text-secondary, #3730a3)" }}
//           >
//             {slide.subtitle}
//           </p>
//           <button
//             className="rounded px-5 py-1.5 text-sm font-bold shadow hover:scale-105 transition-all themed-button-primary" // Smaller button
//             style={{
//               border: "none",
//               outline: "none",
//             }}
//           >
//             {slide.button}
//           </button>
//         </div>
//       </Card>
//     </div>

//     {/* AI accent right - Wider for instructor info */}
//     <div className="hidden md:flex w-full md:w-3/5 items-start justify-center pl-8">
//       <div
//         className="rounded-xl shadow-md flex flex-col items-start gap-2 p-6 border animate-fade-in-late"
//         style={{
//           background: "var(--background-color,#eff6ff)",
//           border: "1.5px solid var(--border-color,#93c5fd)",
//           maxWidth: "600px" // Control maximum width
//         }}
//       >
//         <span
//           className="text-2xl font-extrabold tracking-tight font-mono mb-2"
//           style={{ color: "var(--primary-color,#1e40af)" }}
//         >
//           Know About Instructors
//         </span>
//         <span
//           className="text-sm leading-relaxed" // Better line height for readability
//           style={{ color: "var(--text-secondary,#3730a3)", opacity: 0.75 }}
//         >
//           Dr. Sandeep Singh Sandha holds a Ph.D. in Computer Science from UCLA and a B.Tech from IIT Roorkee. 
//           Dr. Inderjot Kaur holds a Ph.D. and has completed a postdoctoral fellowship at Mississippi State University, 
//           along with a B.Tech from NIT Jalandhar.
          
//           <br/><br/> {/* Added spacing between paragraphs */}
          
//           With over a decade of experience, they have worked at top technology companies like Amazon, 
//           Caterpillar, Oracle, IBM, ARM, Abacus.AI, and Teradata, leading advancements in AI and 
//           machine learning. Both instructors combine strong academic credentials, extensive industry 
//           experience, and groundbreaking research to deliver high-impact education.
//         </span>
//       </div>
//     </div>
//   </div>
// );
// }

//   const bgClass = getThemeBackgroundClass(currentTheme);

//   return (
//     <>
//       <section
//         className={`${bgClass} relative min-h-[80vh] h-screen w-full flex flex-col justify-center overflow-hidden transition-colors duration-300`}
//         style={{
//           color: "var(--text-color, #1e3a8a)"
//         }}
//       >
//         {/* Themed background grid/AI accents */}
//         <GradientGridBackground theme={currentTheme} />

//         {/* Subtle animated spot gradient following mouse */}
//         <div
//           aria-hidden
//           className="pointer-events-none absolute inset-0 z-10 transition-all"
//           style={{
//             background: `radial-gradient(600px at ${mousePos.x}% ${mousePos.y}%, var(--accent-color, #60a5fa)15 0%, transparent 100%)`,
//             opacity: 0.30,
//           }}
//         />
//         {/* Slide container with transition */}
//         <div key={currentSlide} className="relative z-20 w-full h-full min-h-[80vh] flex flex-col transition-opacity duration-800 animate-slide-fade">
//           {SLIDES[currentSlide].type === "content"
//             ? renderContentSlide(SLIDES[currentSlide])
//             : renderImageSlide(SLIDES[currentSlide])}
//         </div>
//         {/* Dots navigation */}
//         <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-30">
//           {SLIDES.map((slide, idx) => (
//             <button
//               key={slide.id}
//               onClick={() => setCurrentSlide(idx)}
//               aria-label={`Go to slide ${idx + 1}`}
//               className={`
//                 relative w-5 h-5 rounded-full border-2 transition-colors duration-300
//                 flex items-center justify-center group
//                 ${currentSlide === idx
//                   ? "shadow-md bg-opacity-20"
//                   : "opacity-60 hover:bg-opacity-15"
//                 }
//               `}
//               style={{
//                 borderColor: "var(--primary-color, #1e40af)",
//                 background: currentSlide === idx ? "var(--accent-color, #60a5fa)" : "var(--surface-color, #dbeafe)"
//               }}
//             >
//               <span
//                 aria-hidden
//                 className={`block transition-all duration-300 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
//                 style={{
//                   width: currentSlide === idx ? 12 : 8,
//                   height: currentSlide === idx ? 12 : 8,
//                   background: "var(--primary-color, #1e40af)",
//                   opacity: currentSlide === idx ? 0.92 : 0.44,
//                 }}
//               />
//             </button>
//           ))}
//         </div>
//       </section>
//       {/* WhatsApp floating button */}
//       <div className="fixed bottom-8 right-8 z-50">
//         <button
//           onClick={() => setShowWhatsAppPopup(true)}
//           aria-label="Contact via WhatsApp"
//           className="rounded-full p-4 shadow-xl ring-2 ring-white/50 focus:outline-none focus:ring-4 transition-all animate-whatsapp-pulse"
//           style={{
//             background: "var(--primary-color, #059669)",
//             color: "var(--background-color, #fff)",
//           }}
//         >
//           <MessageCircle size={26} />
//         </button>
//       </div>
//       {/* WhatsApp popup */}
//       {showWhatsAppPopup && (
//         <div className="fixed bottom-28 right-8 z-50 w-[328px] max-w-full animate-whatsapp-popup">
//           <Card
//             className="rounded-lg shadow-2xl border"
//             style={{
//               background: "var(--surface-color,rgb(218, 168, 107))",
//               color: "var(--text-color, #1e3a8a)",
//               borderColor: "var(--border-color,rgb(192, 128, 54))"
//             }}
//           >
//             <div
//               className="flex px-4 py-3 rounded-t-lg items-center justify-between"
//               style={{ background: "var(--primary-color, #1e40af)", color: "var(--background-color, #fff)" }}
//             >
//               <div className="flex items-center gap-2">
//                 <div
//                   className="w-9 h-9 flex items-center justify-center rounded-full font-extrabold text-sm shadow"
//                   style={{
//                     background: "var(--secondary-color, #3b82f6)",
//                     color: "var(--background-color, #fff)",
//                   }}
//                 >
//                   PAI
//                 </div>
//                 <div>
//                   <span className="font-bold text-base">PAI Excel</span>
//                   <span className="block text-xs opacity-80">Online</span>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setShowWhatsAppPopup(false)}
//                 className="p-1 ml-2 hover:opacity-60 transition-colors rounded"
//                 aria-label="Close chat popup"
//                 style={{
//                   color: "var(--background-color, #fff)"
//                 }}
//               >
//                 <X size={18} />
//               </button>
//             </div>
//             <div className="px-4 py-5">
//               <div
//                 className="rounded-lg p-3 mb-4"
//                 style={{
//                   background: "var(--background-color, #fff)",
//                   color: "var(--text-color, #1e3a8a)"
//                 }}
//               >
//                 <p className="text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>Hello!</p>
//                 <p className="text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>Need help with something?</p>
//                 <p className="text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>We're just a message away.</p>
//               </div>
//               <button
//                 onClick={handleWhatsAppClick}
//                 className="w-full rounded-lg font-semibold text-base py-3 transition-all shadow-lg"
//                 style={{
//                   background: "var(--primary-color, #059669)",
//                   color: "var(--background-color, #fff)",
//                   border: "none"
//                 }}
//                 aria-label="Start WhatsApp Chat"
//               >
//                 Start Chat
//               </button>
//               <p className="text-xs mt-3 text-center" style={{ color: "var(--text-secondary, #6b7280)", opacity: 0.6 }}>
//                 ⚡ by PAI Excel
//               </p>
//             </div>
//           </Card>
//         </div>
//       )}
//       {/* Custom animation keyframes */}
//       <style jsx>{`
//         @keyframes ai-line {
//           0% { stroke-dashoffset: 60; }
//           100% { stroke-dashoffset: 0; }
//         }
//         @keyframes ai-node {
//           0%, 100% { opacity: 0.7; r: 10; }
//           50% { opacity: 1; r: 13; }
//         }
//         @keyframes ai-accent {
//           0%, 100% { opacity: 0.7; transform: translateY(0); }
//           50% { opacity: 1; transform: translateY(-7px);}
//         }
//         @keyframes fade-in {
//           from { opacity:0; filter: blur(3px);}
//           to { opacity:1; filter: blur(0);}
//         }
//         @keyframes fade-in-late {
//           0% { opacity:0; transform: translateY(10px);}
//           60% { opacity:0; }
//           100% { opacity:1; transform: translateY(0);}
//         }
//         @keyframes slide-fade {
//           from {opacity: 0; transform: translateY(24px);}
//           to {opacity: 1; transform: translateY(0);}
//         }
//         @keyframes whatsapp-popup {
//           from { transform: translateY(32px); opacity: 0;}
//           to { transform: translateY(0); opacity: 1;}
//         }
//         @keyframes whatsapp-pulse {
//           0%, 100% { box-shadow: 0 0 0 0rgba(64, 226, 123, 0.27);}
//           50% { box-shadow: 0 0 12px 8px #22C55E33;}
//         }
//         .animate-ai-line { animation: ai-line 4s linear forwards; }
//         .animate-ai-node { animation: ai-node 2.8s ease-in-out infinite; }
//         .animate-ai-accent { animation: ai-accent 3.4s ease-in-out infinite; }
//         .animate-fade-in { animation: fade-in 0.95s 0.05s both;}
//         .animate-fade-in-late{animation:fade-in-late 1.3s 0.3s both;}
//         .animate-slide-fade{animation:slide-fade 0.67s both;}
//         .animate-whatsapp-popup{animation:whatsapp-popup 0.42s cubic-bezier(.31,.7,.56,.93);}
//         .animate-whatsapp-pulse{animation:whatsapp-pulse 3s infinite;}
//         .themed-button-primary {
//           background: var(--primary-color, #1e40af) !important;
//           color: var(--background-color, #fff) !important;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Hero;















































// "use client";
// import { useState, useEffect } from "react";
// import { MessageCircle, X } from "lucide-react";
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
//     ceoImage: "/ceo-image.jpg",
//   },
//   {
//     id: 1,
//     type: "image",
//     title: "AI for Everyone",
//     subtitle: "Real Students, Real Impact",
//     button: "See Our Impact",
//     image: "/students.jpeg",
//   },
//   {
//     id: 2,
//     type: "image",
//     title: "Interactive Learning",
//     subtitle: "Your AI Playground",
//     button: "Explore Courses",
//     image: "/home_page.png",
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
//       {/* Neural Network SVG accent (overlay color) */}
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
//       {/* AI motif, subtle symbol on the right */}
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

//   useAutoSlide(SLIDES.length, currentSlide, setCurrentSlide, 7000);

//   const handleWhatsAppClick = () => {
//     const message = encodeURIComponent(
//       "Hello! I'm interested in learning more about PAI Excel's AI courses."
//     );
//     const whatsappUrl = `https://wa.me/+919876543210?text=${message}`;
//     window.open(whatsappUrl, "_blank");
//     setShowWhatsAppPopup(false);
//   };

//   function renderContentSlide(slide) {
//     return (
//       <div className="flex flex-col md:flex-row w-full h-full min-h-[80vh] items-center justify-center relative px-4 sm:px-6 lg:px-24">
//         {/* Text Left */}
//         <div className="flex-1 py-10 sm:py-16 flex flex-col gap-2 sm:gap-4 z-10">
//           <p
//             className="text-lg sm:text-xl font-medium tracking-wider animate-fade-in"
//             style={{
//               animationDelay: "0.1s",
//               color: "var(--accent-color, #60a5fa)",
//               opacity: 1,
//             }}
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
//             style={{
//               animationDelay: "0.3s",
//               color: "var(--text-color, #1e3a8a)",
//               opacity: 0.92,
//             }}
//           >
//             {slide.description}
//           </p>
//           <p
//             className="text-xs sm:text-sm font-semibold mt-1 animate-fade-in"
//             style={{
//               animationDelay: "0.35s",
//               color: "var(--secondary-color, #3b82f6)",
//               opacity: 0.7,
//             }}
//           >
//             {slide.sponsor}
//           </p>
//           <div className="mt-5 sm:mt-7">
//             <button
//               className="rounded-lg px-5 sm:px-7 py-2 sm:py-3 text-sm sm:text-base font-bold shadow hover:scale-105 transition-transform duration-200 animate-fade-in themed-button-primary"
//               style={{
//                 animationDelay: "0.55s",
//                 outline: "none",
//                 border: "none",
//               }}
//             >
//               {slide.button}
//             </button>
//           </div>
//         </div>

//         {/* Headshot/image right */}
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
//                 src={slide.ceoImage || "/placeholder.svg"}
//                 alt="CEO"
//                 className="w-full h-full rounded-full object-cover"
//                 style={{ filter: "brightness(0.92)" }}
//               />
//             </div>
//             <div
//               className="absolute -bottom-1 -right-1 px-3 sm:px-4 py-1 sm:py-2 rounded-xl font-mono shadow-md text-sm sm:text-base font-medium select-none opacity-80 animate-ai-accent"
//               style={{
//                 color: "#fff",
//                 background: "var(--secondary-color,rgb(13, 50, 109))",
//               }}
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
//         {/* Slide image left */}
//         <div className="w-full md:w-2/5 flex justify-center items-center py-8 md:py-0">
//           <Card
//             className="rounded-xl overflow-hidden shadow-2xl w-full md:w-[85%] animate-fade-in"
//             style={{
//               background: "var(--surface-color, #dbeafe)",
//               border: "1px solid var(--border-color, #93c5fd)",
//             }}
//           >
//             <img
//               src={slide.image || "/placeholder.svg"}
//               alt="Hero"
//               className="w-full h-48 sm:h-56 md:h-64 object-cover"
//               style={{
//                 filter: "brightness(0.89)",
//                 borderRadius: "16px 16px 0 0",
//               }}
//             />
//             <div className="px-4 py-4 sm:px-6 sm:py-5">
//               <h2
//                 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2"
//                 style={{ color: "var(--primary-color, #1e40af)" }}
//               >
//                 {slide.title}
//               </h2>
//               <p
//                 className="text-xs sm:text-sm md:text-base mb-2"
//                 style={{ color: "var(--text-secondary, #3730a3)" }}
//               >
//                 {slide.subtitle}
//               </p>
//               <button
//                 className="rounded px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-sm font-bold shadow hover:scale-105 transition-all themed-button-primary"
//                 style={{
//                   border: "none",
//                   outline: "none",
//                 }}
//               >
//                 {slide.button}
//               </button>
//             </div>
//           </Card>
//         </div>

//         {/* AI accent / Instructor Info right */}
//         <div className="w-full md:w-3/5 flex flex-col items-center justify-center py-4 md:py-0">
//           <div
//             className="rounded-xl shadow-md flex flex-col items-start gap-2 p-4 sm:p-6 border animate-fade-in-late max-w-full"
//             style={{
//               background: "var(--background-color,#eff6ff)",
//               border: "1.5px solid var(--border-color,#93c5fd)",
//             }}
//           >
//             <span
//               className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight font-mono mb-2"
//               style={{ color: "var(--primary-color,#1e40af)" }}
//             >
//               Know About Instructors
//             </span>
//             <span
//               className="text-xs sm:text-sm leading-relaxed"
//               style={{ color: "var(--text-secondary,#3730a3)", opacity: 0.75 }}
//             >
//               Dr. Sandeep Singh Sandha holds a Ph.D. in Computer Science from UCLA and a B.Tech from IIT Roorkee. 
//               Dr. Inderjot Kaur holds a Ph.D. and has completed a postdoctoral fellowship at Mississippi State University, 
//               along with a B.Tech from NIT Jalandhar.
//               <br />
//               <br />
//               With over a decade of experience, they have worked at top technology companies like Amazon, 
//               Caterpillar, Oracle, IBM, ARM, Abacus.AI, and Teradata, leading advancements in AI and 
//               machine learning. Both instructors combine strong academic credentials, extensive industry 
//               experience, and groundbreaking research to deliver high-impact education.
//             </span>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const bgClass = getThemeBackgroundClass(currentTheme);

//   return (
//     <>
//       <section
//         className={`${bgClass} relative w-full flex flex-col justify-center overflow-hidden transition-colors duration-300`}
//         style={{
//           color: "var(--text-color, #1e3a8a)",
//           minHeight: "80vh",
//         }}
//       >
//         {/* Themed background grid/AI accents */}
//         <GradientGridBackground theme={currentTheme} />

//         {/* Subtle animated spot gradient following mouse */}
//         <div
//           aria-hidden
//           className="pointer-events-none absolute inset-0 z-10 transition-all"
//           style={{
//             background: `radial-gradient(600px at ${mousePos.x}% ${mousePos.y}%, var(--accent-color, #60a5fa) 15%, transparent 100%)`,
//             opacity: 0.30,
//           }}
//         />

//         {/* Slide container */}
//         <div
//           key={currentSlide}
//           className="relative z-20 w-full h-full flex flex-col transition-opacity duration-800 animate-slide-fade"
//           style={{ minHeight: "80vh" }}
//         >
//           {SLIDES[currentSlide].type === "content"
//             ? renderContentSlide(SLIDES[currentSlide])
//             : renderImageSlide(SLIDES[currentSlide])}
//         </div>

//         {/* Dots navigation (left side, vertically centered) */}
//         <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-30">
//           {SLIDES.map((slide, idx) => (
//             <button
//               key={slide.id}
//               onClick={() => setCurrentSlide(idx)}
//               aria-label={`Go to slide ${idx + 1}`}
//               className={`
//                 relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-colors duration-300
//                 flex items-center justify-center group
//                 ${currentSlide === idx ? "shadow-md bg-opacity-20" : "opacity-60 hover:bg-opacity-15"}
//               `}
//               style={{
//                 borderColor: "var(--primary-color, #1e40af)",
//                 background: currentSlide === idx
//                   ? "var(--accent-color, #60a5fa)"
//                   : "var(--surface-color, #dbeafe)",
//               }}
//             >
//               <span
//                 aria-hidden
//                 className="block transition-all duration-300 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//                 style={{
//                   width: currentSlide === idx ? 12 : 8,
//                   height: currentSlide === idx ? 12 : 8,
//                   background: "var(--primary-color, #1e40af)",
//                   opacity: currentSlide === idx ? 0.92 : 0.44,
//                 }}
//               />
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* WhatsApp floating button */}
//       <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
//         <button
//           onClick={() => setShowWhatsAppPopup(true)}
//           aria-label="Contact via WhatsApp"
//           className="rounded-full p-3 sm:p-4 shadow-xl ring-2 ring-white/50 focus:outline-none focus:ring-4 transition-all animate-whatsapp-pulse"
//           style={{
//             background: "var(--primary-color, #059669)",
//             color: "var(--background-color, #fff)",
//           }}
//         >
//           <MessageCircle size={24} />
//         </button>
//       </div>

//       {/* WhatsApp popup */}
//       {showWhatsAppPopup && (
//         <div className="fixed bottom-20 right-6 sm:bottom-24 sm:right-8 z-50 w-[280px] sm:w-[328px] max-w-full animate-whatsapp-popup">
//           <Card
//             className="rounded-lg shadow-2xl border"
//             style={{
//               background: "var(--surface-color,rgb(218, 168, 107))",
//               color: "var(--text-color, #1e3a8a)",
//               borderColor: "var(--border-color,rgb(192, 128, 54))",
//             }}
//           >
//             <div
//               className="flex px-3 sm:px-4 py-2 sm:py-3 rounded-t-lg items-center justify-between"
//               style={{ background: "var(--primary-color, #1e40af)", color: "var(--background-color, #fff)" }}
//             >
//               <div className="flex items-center gap-2">
//                 <div
//                   className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full font-extrabold text-xs sm:text-sm shadow"
//                   style={{
//                     background: "var(--secondary-color, #3b82f6)",
//                     color: "var(--background-color, #fff)",
//                   }}
//                 >
//                   PAI
//                 </div>
//                 <div>
//                   <span className="font-bold text-sm sm:text-base">PAI Excel</span>
//                   <span className="block text-[10px] sm:text-xs opacity-80">Online</span>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setShowWhatsAppPopup(false)}
//                 className="p-1 ml-2 hover:opacity-60 transition-colors rounded"
//                 aria-label="Close chat popup"
//                 style={{
//                   color: "var(--background-color, #fff)",
//                 }}
//               >
//                 <X size={16} />
//               </button>
//             </div>
//             <div className="px-3 sm:px-4 py-3 sm:py-4">
//               <div
//                 className="rounded-lg p-2 sm:p-3 mb-3"
//                 style={{
//                   background: "var(--background-color, #fff)",
//                   color: "var(--text-color, #1e3a8a)",
//                 }}
//               >
//                 <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
//                   Hello!
//                 </p>
//                 <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
//                   Need help with something?
//                 </p>
//                 <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
//                   We're just a message away.
//                 </p>
//               </div>
//               <button
//                 onClick={handleWhatsAppClick}
//                 className="w-full rounded-lg font-semibold text-sm sm:text-base py-2 sm:py-3 transition-all shadow-lg"
//                 style={{
//                   background: "var(--primary-color, #059669)",
//                   color: "var(--background-color, #fff)",
//                   border: "none",
//                 }}
//                 aria-label="Start WhatsApp Chat"
//               >
//                 Start Chat
//               </button>
//               <p className="text-[10px] sm:text-xs mt-2 text-center" style={{ color: "var(--text-secondary, #6b7280)", opacity: 0.6 }}>
//                 ⚡ by PAI Excel
//               </p>
//             </div>
//           </Card>
//         </div>
//       )}

//       {/* Custom animation keyframes */}
//       <style jsx>{`
//         @keyframes ai-line {
//           0% { stroke-dashoffset: 60; }
//           100% { stroke-dashoffset: 0; }
//         }
//         @keyframes ai-node {
//           0%, 100% { opacity: 0.7; r: 10; }
//           50% { opacity: 1; r: 13; }
//         }
//         @keyframes ai-accent {
//           0%, 100% { opacity: 0.7; transform: translateY(0); }
//           50% { opacity: 1; transform: translateY(-7px); }
//         }
//         @keyframes fade-in {
//           from { opacity: 0; filter: blur(3px); }
//           to { opacity: 1; filter: blur(0); }
//         }
//         @keyframes fade-in-late {
//           0% { opacity: 0; transform: translateY(10px); }
//           60% { opacity: 0; }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slide-fade {
//           from { opacity: 0; transform: translateY(24px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes whatsapp-popup {
//           from { transform: translateY(32px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes whatsapp-pulse {
//           0%, 100% { box-shadow: 0 0 0 0 rgba(64, 226, 123, 0.27); }
//           50% { box-shadow: 0 0 12px 8px #22C55E33; }
//         }
//         .animate-ai-line {
//           animation: ai-line 4s linear forwards;
//         }
//         .animate-ai-node {
//           animation: ai-node 2.8s ease-in-out infinite;
//         }
//         .animate-ai-accent {
//           animation: ai-accent 3.4s ease-in-out infinite;
//         }
//         .animate-fade-in {
//           animation: fade-in 0.95s 0.05s both;
//         }
//         .animate-fade-in-late {
//           animation: fade-in-late 1.3s 0.3s both;
//         }
//         .animate-slide-fade {
//           animation: slide-fade 0.67s both;
//         }
//         .animate-whatsapp-popup {
//           animation: whatsapp-popup 0.42s cubic-bezier(.31,.7,.56,.93);
//         }
//         .animate-whatsapp-pulse {
//           animation: whatsapp-pulse 3s infinite;
//         }
//         .themed-button-primary {
//           background: var(--primary-color, #1e40af) !important;
//           color: var(--background-color, #fff) !important;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Hero;














































// "use client";
// import { useState, useEffect } from "react";
// import { MessageCircle, X } from "lucide-react";
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
//     ceoImage: "/ceo-image.jpg",
//   },
//   {
//     id: 1,
//     type: "image",
//     title: "AI for Everyone",
//     subtitle: "Real Students, Real Impact",
//     button: "See Our Impact",
//     image: "/students.jpeg",
//   },
//   {
//     id: 2,
//     type: "image",
//     title: "Interactive Learning",
//     subtitle: "Your AI Playground",
//     button: "Explore Courses",
//     image: "/home_page.png",
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
//       {/* Neural Network SVG accent (overlay color) */}
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
//       {/* AI motif, subtle symbol on the right */}
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

//   useAutoSlide(SLIDES.length, currentSlide, setCurrentSlide, 7000);

//   const handleWhatsAppClick = () => {
//     const message = encodeURIComponent(
//       "Hello! I'm interested in learning more about PAI Excel's AI courses."
//     );
//     const whatsappUrl = `https://wa.me/+919876543210?text=${message}`;
//     window.open(whatsappUrl, "_blank");
//     setShowWhatsAppPopup(false);
//   };

//   function renderContentSlide(slide) {
//     return (
//       <div className="flex flex-col md:flex-row w-full h-full min-h-[80vh] items-center justify-center relative px-4 sm:px-6 lg:px-24">
//         {/* Text Left */}
//         <div className="flex-1 py-10 sm:py-16 flex flex-col gap-2 sm:gap-4 z-10">
//           <p
//             className="text-lg sm:text-xl font-medium tracking-wider animate-fade-in"
//             style={{
//               animationDelay: "0.1s",
//               color: "var(--accent-color, #60a5fa)",
//               opacity: 1,
//             }}
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
//             style={{
//               animationDelay: "0.3s",
//               color: "var(--text-color, #1e3a8a)",
//               opacity: 0.92,
//             }}
//           >
//             {slide.description}
//           </p>
//           <p
//             className="text-xs sm:text-sm font-semibold mt-1 animate-fade-in"
//             style={{
//               animationDelay: "0.35s",
//               color: "var(--secondary-color, #3b82f6)",
//               opacity: 0.7,
//             }}
//           >
//             {slide.sponsor}
//           </p>
//           <div className="mt-5 sm:mt-7">
//             <button
//               className="rounded-lg px-5 sm:px-7 py-2 sm:py-3 text-sm sm:text-base font-bold shadow hover:scale-105 transition-transform duration-200 animate-fade-in themed-button-primary"
//               style={{
//                 animationDelay: "0.55s",
//                 outline: "none",
//                 border: "none",
//               }}
//             >
//               {slide.button}
//             </button>
//           </div>
//         </div>

//         {/* Headshot/image right */}
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
//                 src={slide.ceoImage || "/placeholder.svg"}
//                 alt="CEO"
//                 className="w-full h-full rounded-full object-cover"
//                 style={{ filter: "brightness(0.92)" }}
//               />
//             </div>
//             <div
//               className="absolute -bottom-1 -right-1 px-3 sm:px-4 py-1 sm:py-2 rounded-xl font-mono shadow-md text-sm sm:text-base font-medium select-none opacity-80 animate-ai-accent"
//               style={{
//                 color: "#fff",
//                 background: "var(--secondary-color,rgb(13, 50, 109))",
//               }}
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
//         {/* Slide image left */}
//         <div className="w-full md:w-2/5 flex justify-center items-center py-8 md:py-0">
//           <Card
//             className="rounded-xl overflow-hidden shadow-2xl w-full md:w-[85%] animate-fade-in"
//             style={{
//               background: "var(--surface-color, #dbeafe)",
//               border: "1px solid var(--border-color, #93c5fd)",
//             }}
//           >
//             <img
//               src={slide.image || "/placeholder.svg"}
//               alt="Hero"
//               className="w-full h-48 sm:h-56 md:h-64 object-cover"
//               style={{
//                 filter: "brightness(0.89)",
//                 borderRadius: "16px 16px 0 0",
//               }}
//             />
//             <div className="px-4 py-4 sm:px-6 sm:py-5">
//               <h2
//                 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2"
//                 style={{ color: "var(--primary-color, #1e40af)" }}
//               >
//                 {slide.title}
//               </h2>
//               <p
//                 className="text-xs sm:text-sm md:text-base mb-2"
//                 style={{ color: "var(--text-secondary, #3730a3)" }}
//               >
//                 {slide.subtitle}
//               </p>
//               <button
//                 className="rounded px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-sm font-bold shadow hover:scale-105 transition-all themed-button-primary"
//                 style={{
//                   border: "none",
//                   outline: "none",
//                 }}
//               >
//                 {slide.button}
//               </button>
//             </div>
//           </Card>
//         </div>

//         {/* AI accent / Instructor Info right */}
//         <div className="w-full md:w-3/5 flex flex-col items-center justify-center py-4 md:py-0">
//           <div
//             className="rounded-xl shadow-md flex flex-col items-start gap-2 p-4 sm:p-6 border animate-fade-in-late max-w-full"
//             style={{
//               background: "var(--background-color,#eff6ff)",
//               border: "1.5px solid var(--border-color,#93c5fd)",
//             }}
//           >
//             <span
//               className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight font-mono mb-2"
//               style={{ color: "var(--primary-color,#1e40af)" }}
//             >
//               Know About Instructors
//             </span>
//             <span
//               className="text-xs sm:text-sm leading-relaxed"
//               style={{ color: "var(--text-secondary,#3730a3)", opacity: 0.75 }}
//             >
//               Dr. Sandeep Singh Sandha holds a Ph.D. in Computer Science from UCLA and a B.Tech from IIT Roorkee. 
//               Dr. Inderjot Kaur holds a Ph.D. and has completed a postdoctoral fellowship at Mississippi State University, 
//               along with a B.Tech from NIT Jalandhar.
//               <br />
//               <br />
//               With over a decade of experience, they have worked at top technology companies like Amazon, 
//               Caterpillar, Oracle, IBM, ARM, Abacus.AI, and Teradata, leading advancements in AI and 
//               machine learning. Both instructors combine strong academic credentials, extensive industry 
//               experience, and groundbreaking research to deliver high-impact education.
//             </span>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const bgClass = getThemeBackgroundClass(currentTheme);

//   return (
//     <>
//       <section
//         className={`${bgClass} relative w-full flex flex-col justify-center overflow-hidden transition-colors duration-300`}
//         style={{
//           color: "var(--text-color, #1e3a8a)",
//           minHeight: "80vh",
//         }}
//       >
//         {/* Themed background grid/AI accents */}
//         <GradientGridBackground theme={currentTheme} />

//         {/* Subtle animated spot gradient following mouse */}
//         <div
//           aria-hidden
//           className="pointer-events-none absolute inset-0 z-10 transition-all"
//           style={{
//             background: `radial-gradient(600px at ${mousePos.x}% ${mousePos.y}%, var(--accent-color, #60a5fa) 15%, transparent 100%)`,
//             opacity: 0.30,
//           }}
//         />

//         {/* Slide container */}
//         <div
//           key={currentSlide}
//           className="relative z-20 w-full h-full flex flex-col transition-opacity duration-800 animate-slide-fade"
//           style={{ minHeight: "80vh" }}
//         >
//           {SLIDES[currentSlide].type === "content"
//             ? renderContentSlide(SLIDES[currentSlide])
//             : renderImageSlide(SLIDES[currentSlide])}
//         </div>

//         {/* Responsive dot navigation */}
//         <div
//           className={`
//             absolute z-30
//             /* Small screens: bottom-center, horizontal row */
//             bottom-4 left-1/2 -translate-x-1/2 flex flex-row gap-3

//             /* md+ screens: reset bottom/translate, move to left middle and use column */
//             md:bottom-auto md:left-4 md:top-1/2 md:-translate-y-1/2 md:flex-col
//           `}
//         >
//           {SLIDES.map((slide, idx) => (
//             <button
//               key={slide.id}
//               onClick={() => setCurrentSlide(idx)}
//               aria-label={`Go to slide ${idx + 1}`}
//               className={`
//                 relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-colors duration-300
//                 flex items-center justify-center group
//                 ${currentSlide === idx ? "shadow-md bg-opacity-20" : "opacity-60 hover:bg-opacity-15"}
//               `}
//               style={{
//                 borderColor: "var(--primary-color, #1e40af)",
//                 background:
//                   currentSlide === idx
//                     ? "var(--accent-color, #60a5fa)"
//                     : "var(--surface-color, #dbeafe)",
//               }}
//             >
//               <span
//                 aria-hidden
//                 className="block transition-all duration-300 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//                 style={{
//                   width: currentSlide === idx ? 12 : 8,
//                   height: currentSlide === idx ? 12 : 8,
//                   background: "var(--primary-color, #1e40af)",
//                   opacity: currentSlide === idx ? 0.92 : 0.44,
//                 }}
//               />
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* WhatsApp floating button */}
//       <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
//         <button
//           onClick={() => setShowWhatsAppPopup(true)}
//           aria-label="Contact via WhatsApp"
//           className="rounded-full p-3 sm:p-4 shadow-xl ring-2 ring-white/50 focus:outline-none focus:ring-4 transition-all animate-whatsapp-pulse"
//           style={{
//             background: "var(--primary-color, #059669)",
//             color: "var(--background-color, #fff)",
//           }}
//         >
//           <MessageCircle size={24} />
//         </button>
//       </div>

//       {/* WhatsApp popup */}
//       {showWhatsAppPopup && (
//         <div className="fixed bottom-20 right-6 sm:bottom-24 sm:right-8 z-50 w-[280px] sm:w-[328px] max-w-full animate-whatsapp-popup">
//           <Card
//             className="rounded-lg shadow-2xl border"
//             style={{
//               background: "var(--surface-color,rgb(218, 168, 107))",
//               color: "var(--text-color, #1e3a8a)",
//               borderColor: "var(--border-color,rgb(192, 128, 54))",
//             }}
//           >
//             <div
//               className="flex px-3 sm:px-4 py-2 sm:py-3 rounded-t-lg items-center justify-between"
//               style={{ background: "var(--primary-color, #1e40af)", color: "var(--background-color, #fff)" }}
//             >
//               <div className="flex items-center gap-2">
//                 <div
//                   className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full font-extrabold text-xs sm:text-sm shadow"
//                   style={{
//                     background: "var(--secondary-color, #3b82f6)",
//                     color: "var(--background-color, #fff)",
//                   }}
//                 >
//                   PAI
//                 </div>
//                 <div>
//                   <span className="font-bold text-sm sm:text-base">PAI Excel</span>
//                   <span className="block text-[10px] sm:text-xs opacity-80">Online</span>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setShowWhatsAppPopup(false)}
//                 className="p-1 ml-2 hover:opacity-60 transition-colors rounded"
//                 aria-label="Close chat popup"
//                 style={{
//                   color: "var(--background-color, #fff)",
//                 }}
//               >
//                 <X size={16} />
//               </button>
//             </div>
//             <div className="px-3 sm:px-4 py-3 sm:py-4">
//               <div
//                 className="rounded-lg p-2 sm:p-3 mb-3"
//                 style={{
//                   background: "var(--background-color, #fff)",
//                   color: "var(--text-color, #1e3a8a)",
//                 }}
//               >
//                 <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
//                   Hello!
//                 </p>
//                 <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
//                   Need help with something?
//                 </p>
//                 <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
//                   We're just a message away.
//                 </p>
//               </div>
//               <button
//                 onClick={handleWhatsAppClick}
//                 className="w-full rounded-lg font-semibold text-sm sm:text-base py-2 sm:py-3 transition-all shadow-lg"
//                 style={{
//                   background: "var(--primary-color, #059669)",
//                   color: "var(--background-color, #fff)",
//                   border: "none",
//                 }}
//                 aria-label="Start WhatsApp Chat"
//               >
//                 Start Chat
//               </button>
//               <p className="text-[10px] sm:text-xs mt-2 text-center" style={{ color: "var(--text-secondary, #6b7280)", opacity: 0.6 }}>
//                 ⚡ by PAI Excel
//               </p>
//             </div>
//           </Card>
//         </div>
//       )}

//       {/* Custom animation keyframes */}
//       <style jsx>{`
//         @keyframes ai-line {
//           0% { stroke-dashoffset: 60; }
//           100% { stroke-dashoffset: 0; }
//         }
//         @keyframes ai-node {
//           0%, 100% { opacity: 0.7; r: 10; }
//           50% { opacity: 1; r: 13; }
//         }
//         @keyframes ai-accent {
//           0%, 100% { opacity: 0.7; transform: translateY(0); }
//           50% { opacity: 1; transform: translateY(-7px); }
//         }
//         @keyframes fade-in {
//           from { opacity: 0; filter: blur(3px); }
//           to { opacity: 1; filter: blur(0); }
//         }
//         @keyframes fade-in-late {
//           0% { opacity: 0; transform: translateY(10px); }
//           60% { opacity: 0; }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slide-fade {
//           from { opacity: 0; transform: translateY(24px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes whatsapp-popup {
//           from { transform: translateY(32px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes whatsapp-pulse {
//           0%, 100% { box-shadow: 0 0 0 0 rgba(64, 226, 123, 0.27); }
//           50% { box-shadow: 0 0 12px 8px #22C55E33; }
//         }
//         .animate-ai-line {
//           animation: ai-line 4s linear forwards;
//         }
//         .animate-ai-node {
//           animation: ai-node 2.8s ease-in-out infinite;
//         }
//         .animate-ai-accent {
//           animation: ai-accent 3.4s ease-in-out infinite;
//         }
//         .animate-fade-in {
//           animation: fade-in 0.95s 0.05s both;
//         }
//         .animate-fade-in-late {
//           animation: fade-in-late 1.3s 0.3s both;
//         }
//         .animate-slide-fade {
//           animation: slide-fade 0.67s both;
//         }
//         .animate-whatsapp-popup {
//           animation: whatsapp-popup 0.42s cubic-bezier(.31,.7,.56,.93);
//         }
//         .animate-whatsapp-pulse {
//           animation: whatsapp-pulse 3s infinite;
//         }
//         .themed-button-primary {
//           background: var(--primary-color, #1e40af) !important;
//           color: var(--background-color, #fff) !important;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Hero;



























// "use client";
// import { useState, useEffect } from "react";
// import { MessageCircle, X } from "lucide-react";
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
//     ceoImage: "/ceo-image.jpg",
//   },
//   {
//     id: 1,
//     type: "image",
//     title: "AI for Everyone",
//     subtitle: "Real Students, Real Impact",
//     button: "See Our Impact",
//     image: "/students.jpeg",
//   },
//   {
//     id: 2,
//     type: "image",
//     title: "Interactive Learning",
//     subtitle: "Your AI Playground",
//     button: "Explore Courses",
//     image: "/home_page.png",
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
//       {/* Neural Network SVG accent (overlay color) */}
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
//       {/* AI motif, subtle symbol on the right */}
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

//   useAutoSlide(SLIDES.length, currentSlide, setCurrentSlide, 7000);

//   const handleWhatsAppClick = () => {
//     const message = encodeURIComponent(
//       "Hello! I'm interested in learning more about PAI Excel's AI courses."
//     );
//     const whatsappUrl = `https://wa.me/+919876543210?text=${message}`;
//     window.open(whatsappUrl, "_blank");
//     setShowWhatsAppPopup(false);
//   };

//   function renderContentSlide(slide) {
//     return (
//       <div className="flex flex-col md:flex-row w-full h-full min-h-[80vh] items-center justify-center relative px-4 sm:px-6 lg:px-24">
//         {/* Text Left */}
//         <div className="flex-1 py-10 sm:py-16 flex flex-col gap-2 sm:gap-4 z-10">
//           <p
//             className="text-lg sm:text-xl font-medium tracking-wider animate-fade-in"
//             style={{
//               animationDelay: "0.1s",
//               color: "var(--accent-color, #60a5fa)",
//               opacity: 1,
//             }}
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
//             style={{
//               animationDelay: "0.3s",
//               color: "var(--text-color, #1e3a8a)",
//               opacity: 0.92,
//             }}
//           >
//             {slide.description}
//           </p>
//           <p
//             className="text-xs sm:text-sm font-semibold mt-1 animate-fade-in" 
//             style={{
//               animationDelay: "0.35s",
//               color: "var(--secondary-color, #3b82f6)",
//               opacity: 0.7,
//             }}
//           >
//             {slide.sponsor}
//           </p>
//           <div className="mt-5 sm:mt-7">
//             <button
//               className="rounded-lg px-5 sm:px-7 py-2 sm:py-3 text-sm sm:text-base font-bold shadow hover:scale-105 transition-transform duration-200 animate-fade-in themed-button-primary"
//               style={{
//                 animationDelay: "0.55s",
//                 outline: "none",
//                 border: "none",
//               }}
//             >
//               {slide.button}
//             </button>
//           </div>
//         </div>

//         {/* Headshot/image right */}
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
//                 src={slide.ceoImage || "/placeholder.svg"}
//                 alt="CEO"
//                 className="w-full h-full rounded-full object-cover"
//                 style={{ filter: "brightness(0.92)" }}
//               />
//             </div>
//             <div
//               className="absolute -bottom-1 -right-1 px-3 sm:px-4 py-1 sm:py-2 rounded-xl font-mono shadow-md text-sm sm:text-base font-medium select-none opacity-80 animate-ai-accent"
//               style={{
//                 color: "#fff",
//                 background: "var(--secondary-color,rgb(13, 50, 109))",
//               }}
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
//         {/* Slide image left */}
//         <div className="w-full md:w-2/5 flex justify-center items-center py-8 md:py-0">
//           <Card
//             className="rounded-xl overflow-hidden shadow-2xl w-full md:w-[85%] animate-fade-in"
//             style={{
//               background: "var(--surface-color, #dbeafe)",
//               border: "1px solid var(--border-color, #93c5fd)",
//             }}
//           >
//             <img
//               src={slide.image || "/placeholder.svg"}
//               alt="Hero"
//               className="w-full h-48 sm:h-56 md:h-64 object-cover"
//               style={{
//                 filter: "brightness(0.89)",
//                 borderRadius: "16px 16px 0 0",
//               }}
//             />
//             <div className="px-4 py-4 sm:px-6 sm:py-5">
//               <h2
//                 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2"
//                 style={{ color: "var(--primary-color, #1e40af)" }}
//               >
//                 {slide.title}
//               </h2>
//               <p
//                 className="text-xs sm:text-sm md:text-base mb-2"
//                 style={{ color: "var(--text-secondary, #3730a3)" }}
//               >
//                 {slide.subtitle}
//               </p>
//               <button
//                 className="rounded px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-sm font-bold shadow hover:scale-105 transition-all themed-button-primary"
//                 style={{
//                   border: "none",
//                   outline: "none",
//                 }}
//               >
//                 {slide.button}
//               </button>
//             </div>
//           </Card>
//         </div>

//         {/* AI accent / Instructor Info right */}
//         <div className="w-full md:w-3/5 flex flex-col items-center justify-center py-4 md:py-0">
//           <div
//             className="rounded-xl shadow-md flex flex-col items-start gap-2 p-4 sm:p-6 border animate-fade-in-late max-w-full"
//             style={{
//               background: "var(--background-color,#eff6ff)",
//               border: "1.5px solid var(--border-color,#93c5fd)",
//             }}
//           >
//             <span
//               className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight font-mono mb-2"
//               style={{ color: "var(--primary-color,#1e40af)" }}
//             >
//               Know About Instructors
//             </span>
//             <span
//               className="text-xs sm:text-sm leading-relaxed"
//               style={{ color: "var(--text-secondary,#3730a3)", opacity: 0.75 }}
//             >
//               Dr. Sandeep Singh Sandha holds a Ph.D. in Computer Science from UCLA and a B.Tech from IIT Roorkee. 
//               Dr. Inderjot Kaur holds a Ph.D. and has completed a postdoctoral fellowship at Mississippi State University, 
//               along with a B.Tech from NIT Jalandhar.
//               <br />
//               <br />
//               With over a decade of experience, they have worked at top technology companies like Amazon, 
//               Caterpillar, Oracle, IBM, ARM, Abacus.AI, and Teradata, leading advancements in AI and 
//               machine learning. Both instructors combine strong academic credentials, extensive industry 
//               experience, and groundbreaking research to deliver high-impact education.
//             </span>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const bgClass = getThemeBackgroundClass(currentTheme);

//   return (
//     <>
//       <section
//         className={`${bgClass} relative w-full flex flex-col justify-center overflow-hidden transition-colors duration-300`}
//         style={{
//           color: "var(--text-color, #1e3a8a)",
//           minHeight: "80vh",
//         }}
//       >
//         {/* Themed background grid/AI accents */}
//         <GradientGridBackground theme={currentTheme} />

//         {/* Subtle animated spot gradient following mouse */}
//         <div
//           aria-hidden
//           className="pointer-events-none absolute inset-0 z-10 transition-all"
//           style={{
//             background: `radial-gradient(600px at ${mousePos.x}% ${mousePos.y}%, var(--accent-color, #60a5fa) 15%, transparent 100%)`,
//             opacity: 0.30,
//           }}
//         />

//         {/* Slide container */}
//         <div
//           key={currentSlide}
//           className="relative z-20 w-full h-full flex flex-col transition-opacity duration-800 animate-slide-fade"
//           style={{ minHeight: "80vh" }}
//         >
//           {SLIDES[currentSlide].type === "content"
//             ? renderContentSlide(SLIDES[currentSlide])
//             : renderImageSlide(SLIDES[currentSlide])}
//         </div>

//         {/* Responsive dot navigation */}
//         <div
//           className={`
//             absolute z-30
//             /* Small screens: bottom-center, horizontal row */
//             bottom-8 left-1/2 -translate-x-1/2 flex flex-row gap-3

//             /* md+ screens: reset bottom/translate, move to left middle and use column */
//             md:bottom-auto md:left-4 md:top-1/2 md:-translate-y-1/2 md:flex-col
//           `}
//         >
//           {SLIDES.map((slide, idx) => (
//             <button
//               key={slide.id}
//               onClick={() => setCurrentSlide(idx)}
//               aria-label={`Go to slide ${idx + 1}`}
//               className={`
//                 relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-colors duration-300
//                 flex items-center justify-center group
//                 ${currentSlide === idx ? "shadow-md bg-opacity-20" : "opacity-60 hover:bg-opacity-15"}
//               `}
//               style={{
//                 borderColor: "var(--primary-color, #1e40af)",
//                 background:
//                   currentSlide === idx
//                     ? "var(--accent-color, #60a5fa)"
//                     : "var(--surface-color, #dbeafe)",
//               }}
//             >
//               <span
//                 aria-hidden
//                 className="block transition-all duration-300 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//                 style={{
//                   width: currentSlide === idx ? 12 : 8,
//                   height: currentSlide === idx ? 12 : 8,
//                   background: "var(--primary-color, #1e40af)",
//                   opacity: currentSlide === idx ? 0.92 : 0.44,
//                 }}
//               />
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* WhatsApp floating button */}
//       <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
//         <button
//           onClick={() => setShowWhatsAppPopup(true)}
//           aria-label="Contact via WhatsApp"
//           className="rounded-full p-3 sm:p-4 shadow-xl ring-2 ring-white/50 focus:outline-none focus:ring-4 transition-all animate-whatsapp-pulse"
//           style={{
//             background: "var(--primary-color, #059669)",
//             color: "var(--background-color, #fff)",
//           }}
//         >
//           <MessageCircle size={24} />
//         </button>
//       </div>

//       {/* WhatsApp popup */}
//       {showWhatsAppPopup && (
//         <div className="fixed bottom-20 right-6 sm:bottom-24 sm:right-8 z-50 w-[280px] sm:w-[328px] max-w-full animate-whatsapp-popup">
//           <Card
//             className="rounded-lg shadow-2xl border"
//             style={{
//               background: "var(--surface-color,rgb(218, 168, 107))",
//               color: "var(--text-color, #1e3a8a)",
//               borderColor: "var(--border-color,rgb(192, 128, 54))",
//             }}
//           >
//             <div
//               className="flex px-3 sm:px-4 py-2 sm:py-3 rounded-t-lg items-center justify-between"
//               style={{ background: "var(--primary-color, #1e40af)", color: "var(--background-color, #fff)" }}
//             >
//               <div className="flex items-center gap-2">
//                 <div
//                   className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full font-extrabold text-xs sm:text-sm shadow"
//                   style={{
//                     background: "var(--secondary-color, #3b82f6)",
//                     color: "var(--background-color, #fff)",
//                   }}
//                 >
//                   PAI
//                 </div>
//                 <div>
//                   <span className="font-bold text-sm sm:text-base">PAI Excel</span>
//                   <span className="block text-[10px] sm:text-xs opacity-80">Online</span>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setShowWhatsAppPopup(false)}
//                 className="p-1 ml-2 hover:opacity-60 transition-colors rounded"
//                 aria-label="Close chat popup"
//                 style={{
//                   color: "var(--background-color, #fff)",
//                 }}
//               >
//                 <X size={16} />
//               </button>
//             </div>
//             <div className="px-3 sm:px-4 py-3 sm:py-4">
//               <div
//                 className="rounded-lg p-2 sm:p-3 mb-3"
//                 style={{
//                   background: "var(--background-color, #fff)",
//                   color: "var(--text-color, #1e3a8a)",
//                 }}
//               >
//                 <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
//                   Hello!
//                 </p>
//                 <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
//                   Need help with something?
//                 </p>
//                 <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
//                   We're just a message away.
//                 </p>
//               </div>
//               <button
//                 onClick={handleWhatsAppClick}
//                 className="w-full rounded-lg font-semibold text-sm sm:text-base py-2 sm:py-3 transition-all shadow-lg"
//                 style={{
//                   background: "var(--primary-color, #059669)",
//                   color: "var(--background-color, #fff)",
//                   border: "none",
//                 }}
//                 aria-label="Start WhatsApp Chat"
//               >
//                 Start Chat
//               </button>
//               <p className="text-[10px] sm:text-xs mt-2 text-center" style={{ color: "var(--text-secondary, #6b7280)", opacity: 0.6 }}>
//                 ⚡ by PAI Excel
//               </p>
//             </div>
//           </Card>
//         </div>
//       )}

//       {/* Custom animation keyframes */}
//       <style jsx>{`
//         @keyframes ai-line {
//           0% { stroke-dashoffset: 60; }
//           100% { stroke-dashoffset: 0; }
//         }
//         @keyframes ai-node {
//           0%, 100% { opacity: 0.7; r: 10; }
//           50% { opacity: 1; r: 13; }
//         }
//         @keyframes ai-accent {
//           0%, 100% { opacity: 0.7; transform: translateY(0); }
//           50% { opacity: 1; transform: translateY(-7px); }
//         }
//         @keyframes fade-in {
//           from { opacity: 0; filter: blur(3px); }
//           to { opacity: 1; filter: blur(0); }
//         }
//         @keyframes fade-in-late {
//           0% { opacity: 0; transform: translateY(10px); }
//           60% { opacity: 0; }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slide-fade {
//           from { opacity: 0; transform: translateY(24px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes whatsapp-popup {
//           from { transform: translateY(32px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes whatsapp-pulse {
//           0%, 100% { box-shadow: 0 0 0 0 rgba(64, 226, 123, 0.27); }
//           50% { box-shadow: 0 0 12px 8px #22C55E33; }
//         }
//         .animate-ai-line {
//           animation: ai-line 4s linear forwards;
//         }
//         .animate-ai-node {
//           animation: ai-node 2.8s ease-in-out infinite;
//         }
//         .animate-ai-accent {
//           animation: ai-accent 3.4s ease-in-out infinite;
//         }
//         .animate-fade-in {
//           animation: fade-in 0.95s 0.05s both;
//         }
//         .animate-fade-in-late {
//           animation: fade-in-late 1.3s 0.3s both;
//         }
//         .animate-slide-fade {
//           animation: slide-fade 0.67s both;
//         }
//         .animate-whatsapp-popup {
//           animation: whatsapp-popup 0.42s cubic-bezier(.31,.7,.56,.93);
//         }
//         .animate-whatsapp-pulse {
//           animation: whatsapp-pulse 3s infinite;
//         }
//         .themed-button-primary {
//           background: var(--primary-color, #1e40af) !important;
//           color: var(--background-color, #fff) !important;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Hero;




















// "use client";
// import { useState, useEffect } from "react";
// import { MessageCircle, X } from "lucide-react";
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
//     ceoImage: "/ceo-image.jpg",
//   },
//   {
//     id: 1,
//     type: "image",
//     title: "AI for Everyone",
//     subtitle: "Real Students, Real Impact",
//     button: "See Our Impact",
//     image: "/students.jpeg",
//   },
//   {
//     id: 2,
//     type: "image",
//     title: "Interactive Learning",
//     subtitle: "Your AI Playground",
//     button: "Explore Courses",
//     image: "/home_page.png",
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
//       {/* Neural Network SVG accent (overlay color) */}
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
//       {/* AI motif, subtle symbol on the right */}
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

//   useAutoSlide(SLIDES.length, currentSlide, setCurrentSlide, 7000);

//   const handleWhatsAppClick = () => {
//     const message = encodeURIComponent(
//       "Hello! I'm interested in learning more about PAI Excel's AI courses."
//     );
//     const whatsappUrl = `https://wa.me/+919876543210?text=${message}`;
//     window.open(whatsappUrl, "_blank");
//     setShowWhatsAppPopup(false);
//   };

//   function renderContentSlide(slide) {
//     return (
//       <div className="flex flex-col md:flex-row w-full h-full min-h-[80vh] items-center justify-center relative px-4 sm:px-6 lg:px-24">
//         {/* Text Left */}
//         <div className="flex-1 py-10 sm:py-16 flex flex-col gap-2 sm:gap-4 z-10">
//           <p
//             className="text-lg sm:text-xl font-medium tracking-wider animate-fade-in"
//             style={{
//               animationDelay: "0.1s",
//               color: "var(--accent-color, #60a5fa)",
//               opacity: 1,
//             }}
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
//             style={{
//               animationDelay: "0.3s",
//               color: "var(--text-color, #1e3a8a)",
//               opacity: 0.92,
//             }}
//           >
//             {slide.description}
//           </p>
//           <p
//             className="text-xs sm:text-sm font-semibold mt-1 animate-fade-in"
//             style={{
//               animationDelay: "0.35s",
//               color: "var(--secondary-color, #3b82f6)",
//               opacity: 0.7,
//             }}
//           >
//             {slide.sponsor}
//           </p>
//           <div className="mt-5 sm:mt-7">
//             <button
//               className="rounded-lg px-5 sm:px-7 py-2 sm:py-3 text-sm sm:text-base font-bold shadow hover:scale-105 transition-transform duration-200 animate-fade-in themed-button-primary"
//               style={{
//                 animationDelay: "0.55s",
//                 outline: "none",
//                 border: "none",
//               }}
//             >
//               {slide.button}
//             </button>
//           </div>
//         </div>

//         {/* Headshot/image right */}
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
//                 src={slide.ceoImage || "/placeholder.svg"}
//                 alt="CEO"
//                 className="w-full h-full rounded-full object-cover"
//                 style={{ filter: "brightness(0.92)" }}
//               />
//             </div>
//             <div
//               className="absolute -bottom-1 -right-1 px-3 sm:px-4 py-1 sm:py-2 rounded-xl font-mono shadow-md text-sm sm:text-base font-medium select-none opacity-80 animate-ai-accent"
//               style={{
//                 color: "#fff",
//                 background: "var(--secondary-color,rgb(13, 50, 109))",
//               }}
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
//         {/* Slide image left */}
//         <div className="w-full md:w-2/5 flex justify-center items-center py-8 md:py-0">
//           <Card
//             className="rounded-xl overflow-hidden shadow-2xl w-full md:w-[85%] animate-fade-in"
//             style={{
//               background: "var(--surface-color, #dbeafe)",
//               border: "1px solid var(--border-color, #93c5fd)",
//             }}
//           >
//             <img
//               src={slide.image || "/placeholder.svg"}
//               alt="Hero"
//               className="w-full h-48 sm:h-56 md:h-64 object-cover"
//               style={{
//                 filter: "brightness(0.89)",
//                 borderRadius: "16px 16px 0 0",
//               }}
//             />
//             <div className="px-4 py-4 sm:px-6 sm:py-5">
//               <h2
//                 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2"
//                 style={{ color: "var(--primary-color, #1e40af)" }}
//               >
//                 {slide.title}
//               </h2>
//               <p
//                 className="text-xs sm:text-sm md:text-base mb-2"
//                 style={{ color: "var(--text-secondary, #3730a3)" }}
//               >
//                 {slide.subtitle}
//               </p>
//               <button
//                 className="rounded px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-sm font-bold shadow hover:scale-105 transition-all themed-button-primary"
//                 style={{
//                   border: "none",
//                   outline: "none",
//                 }}
//               >
//                 {slide.button}
//               </button>
//             </div>
//           </Card>
//         </div>

//         {/* AI accent / Instructor Info right */}
//         <div className="w-full md:w-3/5 flex flex-col items-center justify-center py-4 md:py-0">
//           <div
//             className="rounded-xl shadow-md flex flex-col items-start gap-2 p-4 sm:p-6 border animate-fade-in-late max-w-full"
//             style={{
//               background: "var(--background-color,#eff6ff)",
//               border: "1.5px solid var(--border-color,#93c5fd)",
//             }}
//           >
//             <span
//               className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight font-mono mb-2"
//               style={{ color: "var(--primary-color,#1e40af)" }}
//             >
//               Know About Instructors
//             </span>
//             <span
//               className="text-xs sm:text-sm leading-relaxed"
//               style={{ color: "var(--text-secondary,#3730a3)", opacity: 0.75 }}
//             >
//               Dr. Sandeep Singh Sandha holds a Ph.D. in Computer Science from UCLA and a B.Tech from IIT Roorkee. 
//               Dr. Inderjot Kaur holds a Ph.D. and has completed a postdoctoral fellowship at Mississippi State University, 
//               along with a B.Tech from NIT Jalandhar.
//               <br />
//               <br />
//               With over a decade of experience, they have worked at top technology companies like Amazon, 
//               Caterpillar, Oracle, IBM, ARM, Abacus.AI, and Teradata, leading advancements in AI and 
//               machine learning. Both instructors combine strong academic credentials, extensive industry 
//               experience, and groundbreaking research to deliver high-impact education.
//             </span>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const bgClass = getThemeBackgroundClass(currentTheme);

//   return (
//     <>
//       <section
//         className={`${bgClass} relative w-full flex flex-col justify-center overflow-hidden transition-colors duration-300`}
//         style={{
//           color: "var(--text-color, #1e3a8a)",
//           minHeight: "80vh",
//         }}
//       >
//         {/* Themed background grid/AI accents */}
//         <GradientGridBackground theme={currentTheme} />

//         {/* Subtle animated spot gradient following mouse */}
//         <div
//           aria-hidden
//           className="pointer-events-none absolute inset-0 z-10 transition-all"
//           style={{
//             background: `radial-gradient(600px at ${mousePos.x}% ${mousePos.y}%, var(--accent-color, #60a5fa) 15%, transparent 100%)`,
//             opacity: 0.30,
//           }}
//         />

//         {/* Slide container */}
//         <div
//           key={currentSlide}
//           className="relative z-20 w-full h-full flex flex-col transition-opacity duration-800 animate-slide-fade"
//           style={{ minHeight: "80vh" }}
//         >
//           {SLIDES[currentSlide].type === "content"
//             ? renderContentSlide(SLIDES[currentSlide])
//             : renderImageSlide(SLIDES[currentSlide])}
//         </div>

//         {/* Responsive dot navigation */}
//         <div
//           className={`
//             absolute z-30
//             /* Small screens: bottom-center, horizontal row */
//             bottom-8 left-1/2 -translate-x-1/2 flex flex-row gap-3

//             /* md+ screens: reset bottom/translate, move to left middle and use column */
//             md:bottom-auto md:left-4 lg:left-8 md:top-1/2 md:-translate-y-1/2 md:flex-col
//           `}
//         >
//           {SLIDES.map((slide, idx) => (
//             <button
//               key={slide.id}
//               onClick={() => setCurrentSlide(idx)}
//               aria-label={`Go to slide ${idx + 1}`}
//               className={`
//                 relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-colors duration-300
//                 flex items-center justify-center group
//                 ${currentSlide === idx ? "shadow-md bg-opacity-20" : "opacity-60 hover:bg-opacity-15"}
//               `}
//               style={{
//                 borderColor: "var(--primary-color, #1e40af)",
//                 background:
//                   currentSlide === idx
//                     ? "var(--accent-color, #60a5fa)"
//                     : "var(--surface-color, #dbeafe)",
//               }}
//             >
//               <span
//                 aria-hidden
//                 className="block transition-all duration-300 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
//                 style={{
//                   width: currentSlide === idx ? 12 : 8,
//                   height: currentSlide === idx ? 12 : 8,
//                   background: "var(--primary-color, #1e40af)",
//                   opacity: currentSlide === idx ? 0.92 : 0.44,
//                 }}
//               />
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* WhatsApp floating button */}
//       <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
//         <button
//           onClick={() => setShowWhatsAppPopup(true)}
//           aria-label="Contact via WhatsApp"
//           className="rounded-full p-3 sm:p-4 shadow-xl ring-2 ring-white/50 focus:outline-none focus:ring-4 transition-all animate-whatsapp-pulse"
//           style={{
//             background: "var(--primary-color, #059669)",
//             color: "var(--background-color, #fff)",
//           }}
//         >
//           <MessageCircle size={24} />
//         </button>
//       </div>

//       {/* WhatsApp popup */}
//       {showWhatsAppPopup && (
//         <div className="fixed bottom-20 right-6 sm:bottom-24 sm:right-8 z-50 w-[280px] sm:w-[328px] max-w-full animate-whatsapp-popup">
//           <Card
//             className="rounded-lg shadow-2xl border"
//             style={{
//               background: "var(--surface-color,rgb(218, 168, 107))",
//               color: "var(--text-color, #1e3a8a)",
//               borderColor: "var(--border-color,rgb(192, 128, 54))",
//             }}
//           >
//             <div
//               className="flex px-3 sm:px-4 py-2 sm:py-3 rounded-t-lg items-center justify-between"
//               style={{ background: "var(--primary-color, #1e40af)", color: "var(--background-color, #fff)" }}
//             >
//               <div className="flex items-center gap-2">
//                 <div
//                   className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full font-extrabold text-xs sm:text-sm shadow"
//                   style={{
//                     background: "var(--secondary-color, #3b82f6)",
//                     color: "var(--background-color, #fff)",
//                   }}
//                 >
//                   PAI
//                 </div>
//                 <div>
//                   <span className="font-bold text-sm sm:text-base">PAI Excel</span>
//                   <span className="block text-[10px] sm:text-xs opacity-80">Online</span>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setShowWhatsAppPopup(false)}
//                 className="p-1 ml-2 hover:opacity-60 transition-colors rounded"
//                 aria-label="Close chat popup"
//                 style={{
//                   color: "var(--background-color, #fff)",
//                 }}
//               >
//                 <X size={16} />
//               </button>
//             </div>
//             <div className="px-3 sm:px-4 py-3 sm:py-4">
//               <div
//                 className="rounded-lg p-2 sm:p-3 mb-3"
//                 style={{
//                   background: "var(--background-color, #fff)",
//                   color: "var(--text-color, #1e3a8a)",
//                 }}
//               >
//                 <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
//                   Hello!
//                 </p>
//                 <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
//                   Need help with something?
//                 </p>
//                 <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
//                   We're just a message away.
//                 </p>
//               </div>
//               <button
//                 onClick={handleWhatsAppClick}
//                 className="w-full rounded-lg font-semibold text-sm sm:text-base py-2 sm:py-3 transition-all shadow-lg"
//                 style={{
//                   background: "var(--primary-color, #059669)",
//                   color: "var(--background-color, #fff)",
//                   border: "none",
//                 }}
//                 aria-label="Start WhatsApp Chat"
//               >
//                 Start Chat
//               </button>
//               <p className="text-[10px] sm:text-xs mt-2 text-center" style={{ color: "var(--text-secondary, #6b7280)", opacity: 0.6 }}>
//                 ⚡ by PAI Excel
//               </p>
//             </div>
//           </Card>
//         </div>
//       )}

//       {/* Custom animation keyframes */}
//       <style jsx>{`
//         @keyframes ai-line {
//           0% { stroke-dashoffset: 60; }
//           100% { stroke-dashoffset: 0; }
//         }
//         @keyframes ai-node {
//           0%, 100% { opacity: 0.7; r: 10; }
//           50% { opacity: 1; r: 13; }
//         }
//         @keyframes ai-accent {
//           0%, 100% { opacity: 0.7; transform: translateY(0); }
//           50% { opacity: 1; transform: translateY(-7px); }
//         }
//         @keyframes fade-in {
//           from { opacity: 0; filter: blur(3px); }
//           to { opacity: 1; filter: blur(0); }
//         }
//         @keyframes fade-in-late {
//           0% { opacity: 0; transform: translateY(10px); }
//           60% { opacity: 0; }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slide-fade {
//           from { opacity: 0; transform: translateY(24px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes whatsapp-popup {
//           from { transform: translateY(32px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes whatsapp-pulse {
//           0%, 100% { box-shadow: 0 0 0 0 rgba(64, 226, 123, 0.27); }
//           50% { box-shadow: 0 0 12px 8px #22C55E33; }
//         }
//         .animate-ai-line {
//           animation: ai-line 4s linear forwards;
//         }
//         .animate-ai-node {
//           animation: ai-node 2.8s ease-in-out infinite;
//         }
//         .animate-ai-accent {
//           animation: ai-accent 3.4s ease-in-out infinite;
//         }
//         .animate-fade-in {
//           animation: fade-in 0.95s 0.05s both;
//         }
//         .animate-fade-in-late {
//           animation: fade-in-late 1.3s 0.3s both;
//         }
//         .animate-slide-fade {
//           animation: slide-fade 0.67s both;
//         }
//         .animate-whatsapp-popup {
//           animation: whatsapp-popup 0.42s cubic-bezier(.31,.7,.56,.93);
//         }
//         .animate-whatsapp-pulse {
//           animation: whatsapp-pulse 3s infinite;
//         }
//         .themed-button-primary {
//           background: var(--primary-color, #1e40af) !important;
//           color: var(--background-color, #fff) !important;
//         }
//       `}</style>
//     </>
//   );
// };

// export default Hero;













"use client";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { Card } from "./ui/card";
import { useTheme } from "../contexts/ThemeContext";

// Theme‐specific background class map
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

// Slightly darker overlay variant for the neural line background
const getNeuralOverlayColor = (theme) => {
  switch (theme) {
    case "blue":
      return "rgba(30, 58, 138, 0.18)";
    case "purple":
      return "rgba(91, 33, 182, 0.17)";
    case "green":
      return "rgba(4, 120, 87, 0.16)";
    case "dark":
      return "rgba(31, 41, 55, 0.23)";
    default:
      return "rgba(234, 88, 12, 0.14)";
  }
};

const SLIDES = [
  {
    id: 0,
    type: "content",
    title: "Welcome! Want to be an AI Expert?",
    subtitle: "Learn. Innovate. Excel.",
    description:
      "Our vision: To create AI experts in remote corners of India, with a focus on Punjab. We target school students and university graduates. So far, we've conducted live sessions for 50,000+ students. We are collaborating with Akal Academies to provide AI learning to 100+ schools across Punjab.",
    sponsor: "Sponsored by ML0.AI & SimpleMindSchool.com",
    button: "Start Your AI Journey Today",
    ceoImage: "/Images/instructor.png",
  },
  {
    id: 1,
    type: "image",
    title: "Interactive Learning",
    subtitle: "Your AI Playground",
    button: "Explore Courses",
    image: "/home_page.png",
  },
  {
    id: 2,
    type: "image",
    title: "AI for Everyone",
    subtitle: "Real Students, Real Impact",
    button: "See Our Impact",
    image: "/students.jpeg",
  },
];

function useAutoSlide(length, current, setFunc, interval = 7000) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setFunc((prev) => (prev + 1) % length);
    }, interval);
    return () => clearTimeout(timer);
  }, [current, length, setFunc, interval]);
}

function GradientGridBackground({ theme }) {
  const overlay = getNeuralOverlayColor(theme);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.09) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          opacity: 0.16,
        }}
      />
      {/* Neural Network SVG accent (overlay color) */}
      <svg
        className="absolute inset-0 w-full h-full"
        width="100%"
        height="100%"
        viewBox="0 0 1440 900"
        fill="none"
        style={{ opacity: 1, mixBlendMode: "multiply" }}
        aria-hidden
      >
        <defs>
          <linearGradient id="themedNeuralLine" x1="0" y1="0" x2="800" y2="870" gradientUnits="userSpaceOnUse">
            <stop stopColor={overlay} />
            <stop offset="1" stopColor={overlay} />
          </linearGradient>
        </defs>
        <polyline
          points="30,600 260,220 420,340 660,140 980,340 1200,210 1400,430"
          stroke="url(#themedNeuralLine)"
          strokeWidth="7"
          strokeDasharray="6 16"
          fill="none"
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
      {/* AI motif, subtle symbol on the right */}
      <span
        className="absolute right-4 sm:right-10 top-2/3 text-lg sm:text-xl font-mono select-none animate-fade-in-late"
        style={{ color: overlay, opacity: 0.18 }}
      >
        &lt;/ai&gt;
      </span>
    </div>
  );
}

const Hero = () => {
  const { currentTheme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showWhatsAppPopup, setShowWhatsAppPopup] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handle = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  useAutoSlide(SLIDES.length, currentSlide, setCurrentSlide, 7000);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in learning more about PAI Excel's AI courses."
    );
    const whatsappUrl = `https://wa.me/+919876543210?text=${message}`;
    window.open(whatsappUrl, "_blank");
    setShowWhatsAppPopup(false);
  };

  // Map the dot index to the desired slide index
  const mapIndex = (idx) => {
    if (idx === 1) return 1;    // second circle → slide with id: 1 (Explore Courses)
    if (idx === 2) return 2;    // third circle → slide with id: 2 (See Our Impact)
    return idx;                 // first circle stays the same
  };

  function renderContentSlide(slide) {
    return (
      <div className="flex flex-col md:flex-row w-full h-full min-h-[80vh] items-center justify-center relative px-4 sm:px-6 lg:px-24">
        {/* Text Left */}
        <div className="flex-1 py-10 sm:py-16 flex flex-col gap-2 sm:gap-4 z-10">
          <p
            className="text-lg sm:text-xl font-medium tracking-wider animate-fade-in"
            style={{
              animationDelay: "0.1s",
              color: "var(--accent-color, #60a5fa)",
              opacity: 1,
            }}
          >
            {slide.subtitle}
          </p>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl mb-1 sm:mb-2 font-extrabold bg-gradient-to-r bg-clip-text text-transparent animate-fade-in"
            style={{
              animationDelay: "0.2s",
              backgroundImage:
                "linear-gradient(90deg, var(--primary-color, #1e40af), var(--secondary-color, #3b82f6))",
            }}
          >
            {slide.title}
          </h1>
          <p
            className="text-sm sm:text-base md:text-lg mb-1 md:mb-2 animate-fade-in"
            style={{
              animationDelay: "0.3s",
              color: "var(--text-color, #1e3a8a)",
              opacity: 0.92,
            }}
          >
            {slide.description}
          </p>
          <p
            className="text-xs sm:text-sm font-semibold mt-1 animate-fade-in"
            style={{
              animationDelay: "0.35s",
              color: "var(--secondary-color, #3b82f6)",
              opacity: 0.7,
            }}
          >
            {slide.sponsor}
          </p>
          <div className="mt-5 sm:mt-7">
            <button
              className="rounded-lg px-5 sm:px-7 py-2 sm:py-3 text-sm sm:text-base font-bold shadow hover:scale-105 transition-transform duration-200 animate-fade-in themed-button-primary"
              style={{
                animationDelay: "0.55s",
                outline: "none",
                border: "none",
              }}
            >
              {slide.button}
            </button>
          </div>
        </div>

        {/* Headshot/image right */}
        <div className="flex-1 hidden md:flex justify-center items-center">
          <div className="relative">
            <div
              className="w-40 h-40 sm:w-52 sm:h-52 rounded-full p-1.5 sm:p-2 shadow-lg overflow-hidden"
              style={{
                border: "3px solid var(--primary-color, #1e40af)",
                background:
                  "linear-gradient(135deg, var(--primary-color, #1e40af)11 60%, transparent)",
              }}
            >
              <img
                src={slide.ceoImage || "/placeholder.svg"}
                alt="CEO"
                className="w-full h-full rounded-full object-cover"
                style={{ filter: "brightness(0.92)" }}
              />
            </div>
            <div
              className="absolute -bottom-1 -right-1 px-3 sm:px-4 py-1 sm:py-2 rounded-xl font-mono shadow-md text-sm sm:text-base font-medium select-none opacity-80 animate-ai-accent"
              style={{
                color: "#fff",
                background: "var(--secondary-color,rgb(13, 50, 109))",
              }}
            >
              AI
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderImageSlide(slide) {
    return (
      <div className="flex flex-col md:flex-row w-full h-full min-h-[80vh] items-center relative px-4 sm:px-6 lg:px-16 max-w-[1400px] mx-auto">
        {/* Slide image left */}
        <div className="w-full md:w-2/5 flex justify-center items-center py-8 md:py-0">
          <Card
            className="rounded-xl overflow-hidden shadow-2xl w-full md:w-[85%] animate-fade-in"
            style={{
              background: "var(--surface-color, #dbeafe)",
              border: "1px solid var(--border-color, #93c5fd)",
            }}
          >
            <img
              src={slide.image || "/placeholder.svg"}
              alt="Hero"
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
              style={{
                filter: "brightness(0.89)",
                borderRadius: "16px 16px 0 0",
              }}
            />
            <div className="px-4 py-4 sm:px-6 sm:py-5">
              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2"
                style={{ color: "var(--primary-color, #1e40af)" }}
              >
                {slide.title}
              </h2>
              <p
                className="text-xs sm:text-sm md:text-base mb-2"
                style={{ color: "var(--text-secondary, #3730a3)" }}
              >
                {slide.subtitle}
              </p>
              <button
                className="rounded px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm md:text-sm font-bold shadow hover:scale-105 transition-all themed-button-primary"
                style={{
                  border: "none",
                  outline: "none",
                }}
              >
                {slide.button}
              </button>
            </div>
          </Card>
        </div>

        {/* AI accent / Instructor Info right */}
        <div className="w-full md:w-3/5 flex flex-col items-center justify-center py-4 md:py-0">
          <div
            className="rounded-xl shadow-md flex flex-col items-start gap-2 p-4 sm:p-6 border animate-fade-in-late max-w-full"
            style={{
              background: "var(--background-color,#eff6ff)",
              border: "1.5px solid var(--border-color,#93c5fd)",
            }}
          >
            <span
              className="text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight font-mono mb-2"
              style={{ color: "var(--primary-color,#1e40af)" }}
            >
              Know About Instructors
            </span>
            <span
              className="text-xs sm:text-sm leading-relaxed"
              style={{ color: "var(--text-secondary,#3730a3)", opacity: 0.75 }}
            >
              Dr. Sandeep Singh Sandha holds a Ph.D. in Computer Science from UCLA and a B.Tech from IIT Roorkee. 
              Dr. Inderjot Kaur holds a Ph.D. and has completed a postdoctoral fellowship at Mississippi State University, 
              along with a B.Tech from NIT Jalandhar.
              <br />
              <br />
              With over a decade of experience, they have worked at top technology companies like Amazon, 
              Caterpillar, Oracle, IBM, ARM, Abacus.AI, and Teradata, leading advancements in AI and 
              machine learning. Both instructors combine strong academic credentials, extensive industry 
              experience, and groundbreaking research to deliver high-impact education.
            </span>
          </div>
        </div>
      </div>
    );
  }

  const bgClass = getThemeBackgroundClass(currentTheme);

  return (
    <>
      <section
        className={`${bgClass} relative w-full flex flex-col justify-center overflow-hidden transition-colors duration-300`}
        style={{
          color: "var(--text-color, #1e3a8a)",
          minHeight: "80vh",
        }}
      >
        {/* Themed background grid/AI accents */}
        <GradientGridBackground theme={currentTheme} />

        {/* Subtle animated spot gradient following mouse */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 transition-all"
          style={{
            background: `radial-gradient(600px at ${mousePos.x}% ${mousePos.y}%, var(--accent-color, #60a5fa) 15%, transparent 100%)`,
            opacity: 0.30,
          }}
        />

        {/* Slide container */}
        <div
          key={currentSlide}
          className="relative z-20 w-full h-full flex flex-col transition-opacity duration-800 animate-slide-fade"
          style={{ minHeight: "80vh" }}
        >
          {SLIDES[currentSlide].type === "content"
            ? renderContentSlide(SLIDES[currentSlide])
            : renderImageSlide(SLIDES[currentSlide])}
        </div>

        {/* Responsive dot navigation */}
        <div
          className={`
            absolute z-30
            /* Small screens: bottom-center, horizontal row */
            bottom-8 left-1/2 -translate-x-1/2 flex flex-row gap-3

            /* md+ screens: reset bottom/translate, move to left middle and use column */
            md:bottom-auto md:left-4 lg:left-8 md:top-1/2 md:-translate-y-1/2 md:flex-col
          `}
        >
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(mapIndex(idx))}
              aria-label={`Go to slide ${idx + 1}`}
              className={`
                relative w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 transition-colors duration-300
                flex items-center justify-center group
                ${currentSlide === mapIndex(idx) ? "shadow-md bg-opacity-20" : "opacity-60 hover:bg-opacity-15"}
              `}
              style={{
                borderColor: "var(--primary-color, #1e40af)",
                background:
                  currentSlide === mapIndex(idx)
                    ? "var(--accent-color, #60a5fa)"
                    : "var(--surface-color, #dbeafe)",
              }}
            >
              <span
                aria-hidden
                className="block transition-all duration-300 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: currentSlide === mapIndex(idx) ? 12 : 8,
                  height: currentSlide === mapIndex(idx) ? 12 : 8,
                  background: "var(--primary-color, #1e40af)",
                  opacity: currentSlide === mapIndex(idx) ? 0.92 : 0.44,
                }}
              />
            </button>
          ))}
        </div>
      </section>

      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
        <button
          onClick={() => setShowWhatsAppPopup(true)}
          aria-label="Contact via WhatsApp"
          className="rounded-full p-3 sm:p-4 shadow-xl ring-2 ring-white/50 focus:outline-none focus:ring-4 transition-all animate-whatsapp-pulse"
          style={{
            background: "var(--primary-color, #059669)",
            color: "var(--background-color, #fff)",
          }}
        >
          <MessageCircle size={24} />
        </button>
      </div>

      {/* WhatsApp popup */}
      {showWhatsAppPopup && (
        <div className="fixed bottom-20 right-6 sm:bottom-24 sm:right-8 z-50 w-[280px] sm:w-[328px] max-w-full animate-whatsapp-popup">
          <Card
            className="rounded-lg shadow-2xl border"
            style={{
              background: "var(--surface-color,rgb(218, 168, 107))",
              color: "var(--text-color, #1e3a8a)",
              borderColor: "var(--border-color,rgb(192, 128, 54))",
            }}
          >
            <div
              className="flex px-3 sm:px-4 py-2 sm:py-3 rounded-t-lg items-center justify-between"
              style={{ background: "var(--primary-color, #1e40af)", color: "var(--background-color, #fff)" }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full font-extrabold text-xs sm:text-sm shadow"
                  style={{
                    background: "var(--secondary-color, #3b82f6)",
                    color: "var(--background-color, #fff)",
                  }}
                >
                  PAI
                </div>
                <div>
                  <span className="font-bold text-sm sm:text-base">PAI Excel</span>
                  <span className="block text-[10px] sm:text-xs opacity-80">Online</span>
                </div>
              </div>
              <button
                onClick={() => setShowWhatsAppPopup(false)}
                className="p-1 ml-2 hover:opacity-60 transition-colors rounded"
                aria-label="Close chat popup"
                style={{
                  color: "var(--background-color, #fff)",
                }}
              >
                <X size={16} />
              </button>
            </div>
            <div className="px-3 sm:px-4 py-3 sm:py-4">
              <div
                className="rounded-lg p-2 sm:p-3 mb-3"
                style={{
                  background: "var(--background-color, #fff)",
                  color: "var(--text-color, #1e3a8a)",
                }}
              >
                <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
                  Hello!
                </p>
                <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
                  Need help with something?
                </p>
                <p className="text-xs sm:text-sm" style={{ color: "var(--text-secondary, #6b7280)" }}>
                  We're just a message away.
                </p>
              </div>
              <button
                onClick={handleWhatsAppClick}
                className="w-full rounded-lg font-semibold text-sm sm:text-base py-2 sm:py-3 transition-all shadow-lg"
                style={{
                  background: "var(--primary-color, #059669)",
                  color: "var(--background-color, #fff)",
                  border: "none",
                }}
                aria-label="Start WhatsApp Chat"
              >
                Start Chat
              </button>
              <p className="text-[10px] sm:text-xs mt-2 text-center" style={{ color: "var(--text-secondary, #6b7280)", opacity: 0.6 }}>
                ⚡ by PAI Excel
              </p>
            </div>
          </Card>
        </div>
      )}

      {/* Custom animation keyframes */}
      <style jsx>{`
        @keyframes ai-line {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes ai-node {
          0%, 100% { opacity: 0.7; r: 10; }
          50% { opacity: 1; r: 13; }
        }
        @keyframes ai-accent {
          0%, 100% { opacity: 0.7; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-7px); }
        }
        @keyframes fade-in {
          from { opacity: 0; filter: blur(3px); }
          to { opacity: 1; filter: blur(0); }
        }
        @keyframes fade-in-late {
          0% { opacity: 0; transform: translateY(10px); }
          60% { opacity: 0; }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-fade {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes whatsapp-popup {
          from { transform: translateY(32px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes whatsapp-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(64, 226, 123, 0.27); }
          50% { box-shadow: 0 0 12px 8px #22C55E33; }
        }
        .animate-ai-line {
          animation: ai-line 4s linear forwards;
        }
        .animate-ai-node {
          animation: ai-node 2.8s ease-in-out infinite;
        }
        .animate-ai-accent {
          animation: ai-accent 3.4s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.95s 0.05s both;
        }
        .animate-fade-in-late {
          animation: fade-in-late 1.3s 0.3s both;
        }
        .animate-slide-fade {
          animation: slide-fade 0.67s both;
        }
        .animate-whatsapp-popup {
          animation: whatsapp-popup 0.42s cubic-bezier(.31,.7,.56,.93);
        }
        .animate-whatsapp-pulse {
          animation: whatsapp-pulse 3s infinite;
        }
        .themed-button-primary {
          background: var(--primary-color, #1e40af) !important;
          color: var(--background-color, #fff) !important;
        }
      `}</style>
    </>
  );
};

export default Hero;
