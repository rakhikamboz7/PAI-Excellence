"use client"
import { useTranslation } from "react-i18next"
import { useTheme } from "../contexts/ThemeContext"

const ProgramDetails = () => {
  const { t } = useTranslation()
  const { currentTheme } = useTheme()

  const navigateToLink = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdFRF4LeWk9J-61II-J5-nzyDTRL9808096UavLGplhQlTtvg/viewform?pli=1",
      "_blank",
    )
  }

  const ToLink = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdaMtd_CVVT_iGR5LCNqKOmdLX_PiT4uM5_-mzwDbQvUqI1gg/viewform",
      "_blank",
    )
  }

  // Get theme-specific classes
  const getThemeClasses = () => {
    switch (currentTheme) {
      case "blue":
        return {
          background: "bg-blue-light",
          title: "text-blue-primary",
          text: "text-blue-text",
          button: "bg-blue-primary hover:bg-blue-dark",
          buttonSecondary: "bg-blue-50 text-blue-primary border-blue-primary hover:bg-blue-100",
        }
      case "purple":
        return {
          background: "bg-purple-light",
          title: "text-purple-primary",
          text: "text-purple-text",
          button: "bg-purple-primary hover:bg-purple-dark",
          buttonSecondary: "bg-purple-50 text-purple-primary border-purple-primary hover:bg-purple-100",
        }
      case "green":
        return {
          background: "bg-green-light",
          title: "text-green-primary",
          text: "text-green-text",
          button: "bg-green-primary hover:bg-green-dark",
          buttonSecondary: "bg-green-50 text-green-primary border-green-primary hover:bg-green-100",
        }
      case "dark":
        return {
          background: "bg-dark-light",
          title: "text-dark-primary",
          text: "text-dark-text",
          button: "bg-dark-primary hover:bg-amber-600",
          buttonSecondary: "bg-dark-dark text-dark-primary border-dark-primary hover:bg-gray-800",
        }
      default:
        return {
          background: "bg-white",
          title: "text-orange-600",
          text: "text-gray-800",
          button: "bg-orange-600 hover:bg-orange-700",
          buttonSecondary: "bg-orange-200 text-black border-orange-600 hover:bg-orange-300",
        }
    }
  }

  const themeClasses = getThemeClasses()

  return (
    <section className={`py-12 px-6 md:px-16 ${themeClasses.background} themed-surface transition-colors duration-300`}>
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-start">
        {/* LEFT SIDE: Text and Buttons */}
        <div>
          <h2 className={`text-3xl md:text-4xl font-bold ${themeClasses.title} mb-6 themed-text-primary`}>
            {t("programDetailsSection.title")}
          </h2>

          <ul className={`space-y-4 ${themeClasses.text} themed-text-secondary`}>
            <li>✔️ {t("programDetailsSection.points[0]")}</li>
            <li>✔️ {t("programDetailsSection.details[1]")}</li>
            <li>✔️ {t("programDetailsSection.details[2]")}</li>
            <li>✔️ {t("programDetailsSection.details[3]")}</li>
            <li>✔️ {t("programDetailsSection.details[4]")}</li>
          </ul>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={navigateToLink}
              className={`${themeClasses.button} text-white font-medium py-2 px-4 rounded themed-button-primary transition-colors duration-300`}
            >
              {t("programDetailsSection.button1")}
            </button>
            <button
              onClick={() => (window.location.href = "/course-details")}
              className={`${themeClasses.buttonSecondary} font-medium py-2 px-4 rounded transition-colors duration-300`}
            >
              {t("programDetailsSection.button2")}
            </button>
            <button
              onClick={() => (window.location.href = "/media-coverage")}
              className={`border ${themeClasses.buttonSecondary} font-medium py-2 px-4 rounded transition-colors duration-300`}
            >
              {t("programDetailsSection.button3")}
            </button>
            <button
              onClick={ToLink}
              className={`border ${themeClasses.buttonSecondary} font-medium py-2 px-4 rounded transition-colors duration-300`}
            >
              {t("programDetailsSection.button4")}
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Video */}
        <div className="relative w-full pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg mt-6 md:mt-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/WEmcjN655Bw"
            title="ਬੱਚਿਆਂ ਨੂੰ ਭਵਿੱਖ ਲਈ ਤਿਆਰ ਕਰੋ – Practical AI Classes"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default ProgramDetails
