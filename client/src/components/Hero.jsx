"use client"

import { useState } from "react"


const slides = [
  {
    id: 0,
    title: "Punjab AI Excellence",
    subtitle: "Pioneering the future of AI education in Punjab",
    button: "Learn More",
    image: "/ai-image.jpg", // You should place your images in `public/`
  },
  {
    id: 1,
    title: "Upgrade Your Skills Remotely",
    subtitle: "TOP CERTIFICATION PROGRAMS",
    button: "Explore Courses",
    image: "/students.jpeg",
  },
  {
    id: 2,
    title: "Learn From Industry Experts",
    subtitle: "EXPERT-GUIDED LEARNING",
    button: "Get Started",
    image: "/home_page.png",
  },
]

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 transition-all duration-700">
       <img
  src={slides[currentSlide].image}
  alt="Hero Background"
  className="absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-700"
/>

      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-start px-10 md:px-20 text-white">
        <p className="text-sm md:text-lg font-light mb-2 uppercase">{slides[currentSlide].subtitle}</p>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 max-w-[600px] leading-tight">
          {slides[currentSlide].title}
        </h1>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded transition">
          {slides[currentSlide].button}
        </button>
      </div>

      {/* Dot Navigation */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-10">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-10 h-10 rounded-full border-2 ${
              currentSlide === index
                ? "bg-orange-600 border-orange-600"
                : "bg-transparent border-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroCarousel
