import { useState } from "react"
import { useTranslation } from "react-i18next"


export default function Hero() {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

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
  ]

  return (
    <section className="relative h-[70vh] md:h-screen w-full overflow-hidden flex flex-col">
      <div className="absolute inset-0 transition-all duration-700">
        <img
          src={slides[currentSlide].image || "/placeholder.svg"}
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover brightness-75 transition-all duration-700"
        />
      </div>
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-5 sm:px-10 md:px-16 text-white">
        <p className="text-xs sm:text-sm md:text-lg font-light mb-1 md:mb-2 uppercase drop-shadow-md">
          {slides[currentSlide].subtitle}
        </p>
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-3 sm:mb-6 max-w-sm sm:max-w-lg md:max-w-xl leading-tight drop-shadow-lg">
          {slides[currentSlide].title}
        </h1>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded transition shadow-lg text-sm sm:text-base mt-2">
          {slides[currentSlide].button}
        </button>
      </div>
      {/* Dot Navigation */}
      <div className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-2 sm:gap-3 z-10">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-7 h-7 sm:w-10 sm:h-10 rounded-full border-2 transition ${
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
