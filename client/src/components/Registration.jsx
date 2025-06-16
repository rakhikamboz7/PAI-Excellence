// src/components/Registration.jsx
"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeContext";

const Registration = () => {
  const { t } = useTranslation();
  const { currentTheme } = useTheme();

  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return {
          bg: "bg-blue-light",
          title: "text-blue-primary",
          sub: "text-blue-text",
          btnPrimary:
            "bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold",
          btnSecondary: "bg-blue-50 text-blue-primary hover:bg-blue-100",
        };
      case "purple":
        return {
          bg: "bg-purple-light",
          title: "text-purple-primary",
          sub: "text-purple-text",
          btnPrimary:
            "bg-gradient-to-r from-purple-600 to-purple-400 hover:from-purple-700 hover:to-purple-500 text-white font-semibold",
          btnSecondary: "bg-purple-50 text-purple-primary hover:bg-purple-100",
        };
      case "green":
        return {
          bg: "bg-green-light",
          title: "text-green-primary",
          sub: "text-green-text",
          btnPrimary:
            "bg-gradient-to-r from-green-600 to-green-400 hover:from-green-700 hover:to-green-500 text-white font-semibold",
          btnSecondary: "bg-green-50 text-green-primary hover:bg-green-100",
        };
      case "dark":
        return {
          bg: "bg-dark-light",
          title: "text-dark-primary",
          sub: "text-dark-text",
          btnPrimary:
            "bg-gradient-to-r from-yellow-600 to-yellow-400 hover:from-yellow-700 hover:to-yellow-500 text-gray-900 font-semibold",
          btnSecondary: "bg-dark-dark text-dark-primary hover:bg-gray-800",
        };
      default: // orange & any other theme
        return {
          bg: "bg-white",
          title: "text-orange-600",
          sub: "text-gray-800",
          btnPrimary:
            "bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-500 text-white font-semibold",
          btnSecondary: "bg-orange-200 text-black hover:bg-orange-300",
        };
    }
  };

  const cls = getThemeClasses();

  return (
    <section
      className={`${cls.bg} py-16 px-6 md:px-12 transition-colors duration-300`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className={`text-4xl font-extrabold ${cls.title} mb-4`}>
          {t("registration.title")}
        </h2>
        <p className={`mb-8 text-lg ${cls.sub}`}>
          {t("registration.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Register for practical ai courses button */}
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdFRF4LeWk9J-61II-J5-nzyDTRL9808096UavLGplhQlTtvg/viewform?pli=1",
                "_blank"
              )
            }
            className={`${cls.btnPrimary} font-medium py-3 px-6 rounded-lg transition-colors duration-200`}
          >
            Register for practical ai courses
          </button>

          {/* Apply for internship button */}
          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdaMtd_CVVT_iGR5LCNqKOmdLX_PiT4uM5_-mzwDbQvUqI1gg/viewform",
                "_blank"
              )
            }
            className={`${cls.btnSecondary} font-medium py-3 px-6 rounded-lg transition-colors duration-200`}
          >
            {t("registration.buttons.applyInternship")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Registration;
