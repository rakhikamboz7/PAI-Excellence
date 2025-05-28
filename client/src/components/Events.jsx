"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Events() {
  const { t } = useTranslation()
  const [expandedId, setExpandedId] = useState(null)

  const eventsData = t("events.events", { returnObjects: true })

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id))
  }

  return (
    <div className="space-y-12 px-6 lg:px-20 py-12">
      {eventsData.map((evt, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Event Image */}
          <div className="w-full md:w-1/2">
            <img src={`/Images/Event${idx + 1}.png`} alt={evt.title} className="w-full h-48 object-cover rounded-lg" />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-semibold text-[#44425A] mb-2">{evt.title}</h3>
            <p className="text-[#6C6A74] mb-4">{evt.description}</p>

            {expandedId === idx && <p className="text-[#6C6A74] mb-4">{evt.moreInfo}</p>}

            <button
              onClick={() => toggleExpand(idx)}
              className="bg-[#FF6600] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#e65c00] transition"
            >
              {expandedId === idx ? t("events.showLess") : t("events.knowMore")}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
