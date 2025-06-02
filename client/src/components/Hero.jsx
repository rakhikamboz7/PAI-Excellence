// "use client"

// import { useState } from "react"
// import { useTranslation } from "react-i18next"
// import { useTheme } from "../contexts/ThemeContext"

// const Hero = () => {
//   const { t } = useTranslation()
//   const {  currentTheme } = useTheme()
//   const [currentSlide, setCurrentSlide] = useState(0)

//   const slides = [
//     {
//       id: 0,
//       title: t("hero.slides.0.title"),
//       subtitle: t("hero.slides.0.subtitle"),
//       button: t("hero.slides.0.button"),
//       image: "/ai-image.jpg",
//     },
//     {
//       id: 1,
//       title: t("hero.slides.1.title"),
//       subtitle: t("hero.slides.1.subtitle"),
//       button: t("hero.slides.1.button"),
//       image: "/students.jpeg",
//     },
//     {
//       id: 2,
//       title: t("hero.slides.2.title"),
//       subtitle: t("hero.slides.2.subtitle"),
//       button: t("hero.slides.2.button"),
//       image: "/home_page.png",
//     },
//   ]

//   // Get theme-specific button classes
//   const getButtonClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return "bg-blue-primary hover:bg-blue-dark"
//       case "purple":
//         return "bg-purple-primary hover:bg-purple-dark"
//       case "green":
//         return "bg-green-primary hover:bg-green-dark"
//       case "dark":
//         return "bg-dark-primary hover:bg-amber-600"
//       default:
//         return "bg-orange-600 hover:bg-orange-700"
//     }
//   }

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       <div className="absolute inset-0 transition-all duration-700">
//         <img
//           src={slides[currentSlide].image || "/placeholder.svg"}
//           alt="Hero Background"
//           className="absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-700"
//         />
//       </div>

//       <div className="relative z-10 h-full flex flex-col justify-center items-start px-10 md:px-20 text-white">
//         <p className="text-sm md:text-lg font-light mb-2 uppercase">{slides[currentSlide].subtitle}</p>
//         <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-[600px] leading-tight">
//           {slides[currentSlide].title}
//         </h1>
//         <button className={`${getButtonClasses()} text-white font-semibold px-6 py-3 rounded transition`}>
//           {slides[currentSlide].button}
//         </button>
//       </div>

//       {/* Dot Navigation */}
//       <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-10">
//         {slides.map((slide, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-10 h-10 rounded-full border-2 transition-all duration-300 ${
//               currentSlide === index
//                 ? `${getButtonClasses().split(" ")[0]} border-current`
//                 : "bg-transparent border-gray-300"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Hero








// "use client";

// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// const Hero = () => {
//   const { t } = useTranslation();
//   const { currentTheme } = useTheme();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       id: 0,
//       title: t("hero.slides.0.title"),
//       subtitle: t("hero.slides.0.subtitle"),
//       button: t("hero.slides.0.button"),
//       image: "/ai-image.jpg",
//     },
//     {
//       id: 1,
//       title: t("hero.slides.1.title"),
//       subtitle: t("hero.slides.1.subtitle"),
//       button: t("hero.slides.1.button"),
//       image: "/students.jpeg",
//     },
//     {
//       id: 2,
//       title: t("hero.slides.2.title"),
//       subtitle: t("hero.slides.2.subtitle"),
//       button: t("hero.slides.2.button"),
//       image: "/home_page.png",
//     },
//   ];

//   // Get theme-specific button classes
//   const getButtonClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return "bg-blue-primary hover:bg-blue-dark";
//       case "purple":
//         return "bg-purple-primary hover:bg-purple-dark";
//       case "green":
//         return "bg-green-primary hover:bg-green-dark";
//       case "dark":
//         return "bg-dark-primary hover:bg-amber-600";
//       default:
//         return "bg-orange-600 hover:bg-orange-700";
//     }
//   };

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 transition-all duration-700">
//         <img
//           src={slides[currentSlide].image || "/placeholder.svg"}
//           alt="Hero Background"
//           className="absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-700"
//         />
//       </div>

//       {/* Overlay Content */}
//       <div className="relative z-10 h-full flex flex-col justify-center items-start px-4 sm:px-6 md:px-10 lg:px-20 text-white">
//         <p className="text-xs sm:text-sm md:text-lg font-light mb-2 uppercase">
//           {slides[currentSlide].subtitle}
//         </p>
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[600px] leading-tight">
//           {slides[currentSlide].title}
//         </h1>
//         <button
//           className={`${getButtonClasses()} text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded transition`}
//         >
//           {slides[currentSlide].button}
//         </button>
//       </div>

//       {/* Dot Navigation */}
//       <div
//         className={`
//           absolute 
//           bottom-4 left-1/2 transform -translate-x-1/2 
//           flex flex-row gap-2 
//           sm:gap-3 
//           md:flex-col md:left-4 md:top-1/2 md:bottom-auto md:transform md:-translate-y-1/2 
//           z-10
//         `}
//       >
//         {slides.map((slide, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`
//               w-6 h-6 
//               md:w-10 md:h-10 
//               rounded-full 
//               border-2 
//               transition-all duration-300 
//               ${
//                 currentSlide === index
//                   ? `${getButtonClasses().split(" ")[0]} border-current`
//                   : "bg-transparent border-gray-300"
//               }
//             `}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;











// "use client";

// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useTheme } from "../contexts/ThemeContext";

// const Hero = () => {
//   const { t } = useTranslation();
//   const { currentTheme } = useTheme();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       id: 0,
//       title: t("hero.slides.0.title"),
//       subtitle: t("hero.slides.0.subtitle"),
//       button: t("hero.slides.0.button"),
//       image: "/ai-image.jpg",
//     },
//     {
//       id: 1,
//       title: t("hero.slides.1.title"),
//       subtitle: t("hero.slides.1.subtitle"),
//       button: t("hero.slides.1.button"),
//       image: "/students.jpeg",
//     },
//     {
//       id: 2,
//       title: t("hero.slides.2.title"),
//       subtitle: t("hero.slides.2.subtitle"),
//       button: t("hero.slides.2.button"),
//       image: "/home_page.png",
//     },
//   ];

//   // Get theme-specific button classes
//   const getButtonClasses = () => {
//     switch (currentTheme) {
//       case "blue":
//         return "bg-blue-primary hover:bg-blue-dark";
//       case "purple":
//         return "bg-purple-primary hover:bg-purple-dark";
//       case "green":
//         return "bg-green-primary hover:bg-green-dark";
//       case "dark":
//         return "bg-dark-primary hover:bg-amber-600";
//       default:
//         return "bg-orange-600 hover:bg-orange-700";
//     }
//   };

//   return (
//     <section className="relative h-screen w-full overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 transition-all duration-700">
//         <img
//           src={slides[currentSlide].image || "/placeholder.svg"}
//           alt="Hero Background"
//           className="absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-700"
//         />
//       </div>

//       {/* Overlay Content */}
//       <div className="relative z-10 h-full flex flex-col justify-center items-start px-4 sm:px-6 md:px-10 lg:px-20 text-white">
//         <p className="text-xs sm:text-sm md:text-lg font-light mb-2 uppercase">
//           {slides[currentSlide].subtitle}
//         </p>
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[600px] leading-tight">
//           {slides[currentSlide].title}
//         </h1>
//         <button
//           className={`${getButtonClasses()} text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded transition`}
//         >
//           {slides[currentSlide].button}
//         </button>
//       </div>

//       {/* Dot Navigation */}
//       <div
//         className={`
//           absolute 
//           bottom-4 left-1/2 transform -translate-x-1/2 
//           flex flex-row gap-2 
//           sm:gap-3 
//           md:flex-col md:left-8 md:top-1/2 md:bottom-auto md:transform md:-translate-y-1/2 
//           lg:left-10 
//           z-10
//         `}
//       >
//         {slides.map((slide, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`
//               w-6 h-6 
//               md:w-10 md:h-10 
//               rounded-full 
//               border-2 
//               transition-all duration-300 
//               ${
//                 currentSlide === index
//                   ? `${getButtonClasses().split(" ")[0]} border-current`
//                   : "bg-transparent border-gray-300"
//               }
//             `}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;












"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";

const Hero = () => {
  const { t } = useTranslation();
  const { currentTheme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: t("hero.slides.0.title"),
      subtitle: t("hero.slides.0.subtitle"),
      button: t("hero.slides.0.button"),
      image: "/ai-image.jpg",
    },
    {
      id: 1,
      title: t("hero.slides.1.title"),
      subtitle: t("hero.slides.1.subtitle"),
      button: t("hero.slides.1.button"),
      image: "/students.jpeg",
    },
    {
      id: 2,
      title: t("hero.slides.2.title"),
      subtitle: t("hero.slides.2.subtitle"),
      button: t("hero.slides.2.button"),
      image: "/home_page.png",
    },
  ];

  // Get theme-specific button classes
  const getButtonClasses = () => {
    switch (currentTheme) {
      case "blue":
        return "bg-blue-primary hover:bg-blue-dark";
      case "purple":
        return "bg-purple-primary hover:bg-purple-dark";
      case "green":
        return "bg-green-primary hover:bg-green-dark";
      case "dark":
        return "bg-dark-primary hover:bg-amber-600";
      default:
        return "bg-orange-600 hover:bg-orange-700";
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 transition-all duration-700">
        <img
          src={slides[currentSlide].image || "/placeholder.svg"}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-700"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center md:items-start px-4 sm:px-6 md:px-10 lg:px-20 text-white">
        <p className="text-center md:text-left text-xs sm:text-sm md:text-lg font-light mb-2 uppercase">
          {slides[currentSlide].subtitle}
        </p>
        <h1 className="text-center md:text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[600px] leading-tight">
          {slides[currentSlide].title}
        </h1>
        <button
          className={`${getButtonClasses()} text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded transition`}
        >
          {slides[currentSlide].button}
        </button>
      </div>

      {/* Dot Navigation */}
      <div
        className={`
          absolute 
          bottom-4 left-1/2 transform -translate-x-1/2 
          flex flex-row gap-2 
          sm:gap-3 
          md:flex-col md:left-8 md:top-1/2 md:bottom-auto md:transform md:-translate-y-1/2 
          lg:left-10 
          z-10
        `}
      >
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`
              w-6 h-6 
              md:w-10 md:h-10 
              rounded-full 
              border-2 
              transition-all duration-300 
              ${
                currentSlide === index
                  ? `${getButtonClasses().split(" ")[0]} border-current`
                  : "bg-transparent border-gray-300"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
