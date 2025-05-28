import { useTranslation } from "react-i18next";

export default function ProgramDetails() {
  const { t } = useTranslation()
  const navigateToLink = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdFRF4LeWk9J-61II-J5-nzyDTRL9808096UavLGplhQlTtvg/viewform?pli=1",
      "_blank"
    );
  };
  const ToLink = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSdaMtd_CVVT_iGR5LCNqKOmdLX_PiT4uM5_-mzwDbQvUqI1gg/viewform",
      "_blank"
    );
  };
  const programPoints = t("programDetailsSection.points", { returnObjects: true }) || []

  return (
    <section className="py-10 sm:py-12 md:py-16 px-2 sm:px-6 md:px-12 bg-white">
      <div className="container mx-auto flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-start">
        {/* LEFT SIDE */}
        <div className="order-2 md:order-1 w-full">
          {t("programDetailsSection.title") && (
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-600 mb-3 sm:mb-4">
              {t("programDetailsSection.title")}
            </h2>
          )}
          <ul className="space-y-2 sm:space-y-4 text-gray-800 text-base sm:text-lg">
            {programPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3 sm:gap-4">
            <button
              onClick={navigateToLink}
              className="bg-orange-600 hover:bg-[#7c5310] text-white font-medium py-2 px-4 rounded text-sm sm:text-base"
            >
              {t("programDetailsSection.button1")}
            </button>
            <button
              onClick={() => window.location.href = "/CourseDetails"}
              className="bg-orange-200 text-black font-medium py-2 px-4 rounded text-sm sm:text-base"
            >
              {t("programDetailsSection.button2")}
            </button>
            <button
              onClick={() => window.location.href = "/MediaCoverage"}
              className="border border-orange-600 text-[#593A08] hover:bg-[#f8f1e7] font-medium py-2 px-4 rounded text-sm sm:text-base"
            >
              {t("programDetailsSection.button3")}
            </button>
            <button
              onClick={ToLink}
              className="border border-orange-700 text-[#593A08] hover:bg-[#f8f1e7] font-medium py-2 px-4 rounded text-sm sm:text-base"
            >
              {t("programDetailsSection.button4")}
            </button>
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="order-1 md:order-2 w-full relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg mt-4 md:mt-0">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/WEmcjN655Bw"
            title={t("programDetailsSection.videoTitle")}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
