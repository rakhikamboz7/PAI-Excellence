"use client"

import { useTranslation } from "react-i18next"

const Mission = () => {
  const { t } = useTranslation()
  const achievements = t("mission.achievements", { returnObjects: true })

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Images on the Left */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-xl mx-auto mt-10">
            {/* Large Image */}
            <img
              src="/students.jpeg" // Replace with your image path
              alt="Main Mission"
              className="w-full h-auto rounded-lg shadow-lg"
            />

            {/* Small Overlapping Image */}
            <img
              src="/images.jpg" // Replace with your image path
              alt="Top Overlap"
              className="absolute top-[-40px] left-[-40px] w-120 h-40 object-cover rounded-lg shadow-2xl border-4 border-white"
            />
          </div>
        </div>

        {/* Content on the Right */}
        <div className="w-full lg:w-1/2">
          <p className="text-2xl text-orange-600 font-semibold mb-2 uppercase">{t("mission.title")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-black-300 mb-6 leading-snug">
            {t("mission.description").split(".")[0]}.
          </h2>
          <p className="text-gray-600 mb-4">{t("mission.description").split(".").slice(1).join(".")}</p>
          <ul className="text-gray-700 space-y-2 list-disc pl-5">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Mission
