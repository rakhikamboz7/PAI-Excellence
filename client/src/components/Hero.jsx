/* eslint-disable no-unused-vars */
"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;
  const slideInterval = useRef(null);

  // ✅ Use correct public path
  const heroImages = [
     // Make sure this is in /public
    "/home_page.png",
    "/ai-image.jpg",
    "/students.jpeg",
    "/SBS_Session.jpeg",

    
  ];

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => {
      clearInterval(slideInterval.current);
    };
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    clearInterval(slideInterval.current);
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
  };

  return (
    <section className="py-12 px-6 md:px-16 bg-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl mt-5 text-orange-900 font-bold mb-3">
            Punjab AI Excellence
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Pioneering the future of AI education in Punjab
          </p>
          <p className="text-gray-800 mb-8">
            Join our comprehensive program designed to equip you with
            cutting-edge AI skills and knowledge.<b/>
            Unleasing digital potential for a Thriving Economy and Progressive Society. Join us on this transformative journey towards a Prospereous Punjab.
          </p>
          
          <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition duration-300 inline-block"
          >
            Learn More
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* ✅ Add fixed height to show images properly */}
          <div className="relative overflow-hidden rounded-lg shadow-lg h-96">
            {heroImages.map((image, index) => (
              <motion.div
                key={index}
                className="absolute w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentSlide === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={image}
                  alt={`AI Visualization ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? "bg-gray-500" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
