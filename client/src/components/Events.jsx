"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";

export default function Events() {
  const { t } = useTranslation();
  const [expandedId, setExpandedId] = useState(null);
  const { currentTheme } = useTheme();

  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return {
          background: "bg-blue-50",
          title: "text-blue-800",
          text: "text-blue-600",
          button: "bg-blue-600 hover:bg-blue-700"
        };
      case "purple":
        return {
          background: "bg-purple-50",
          title: "text-purple-800",
          text: "text-purple-600",
          button: "bg-purple-600 hover:bg-purple-700"
        };
      case "green":
        return {
          background: "bg-green-50",
          title: "text-green-800",
          text: "text-green-600",
          button: "bg-green-600 hover:bg-green-700"
        };
      case "dark":
        return {
          background: "bg-gray-900",
          title: "text-yellow-400",
          text: "text-gray-300",
          button: "bg-yellow-600 hover:bg-yellow-700"
        };
      default: // orange theme
        return {
          background: "bg-[#FFF7ED]", // updated here
          title: "text-[#44425A]",
          text: "text-[#6C6A74]",
          button: "bg-[#FF6600] hover:bg-[#e65c00]"
        };
    }
  };

  const themeClasses = getThemeClasses();
  const eventsData = t("events.events", { returnObjects: true }) || [];

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`space-y-12 px-6 lg:px-20 py-12 ${themeClasses.background} transition-colors duration-300`}>
      {eventsData.map((evt, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:flex-row items-center md:items-start gap-6 ${
            idx % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Event Image */}
          <div className="w-full md:w-1/2">
            <img 
              src={`/Images/Event${idx + 1}.png`} 
              alt={evt.title} 
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <h3 className={`text-2xl font-semibold ${themeClasses.title} mb-2`}>
              {evt.title}
            </h3>
            <p className={`${themeClasses.text} mb-4`}>{evt.description}</p>
            {expandedId === idx && (
              <p className={`${themeClasses.text} mb-4`}>{evt.moreInfo}</p>
            )}
            <button
              onClick={() => toggleExpand(idx)}
              className={`${themeClasses.button} text-white font-semibold py-2 px-6 rounded-full transition`}
            >
              {expandedId === idx ? t("events.showLess") : t("events.knowMore")}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
