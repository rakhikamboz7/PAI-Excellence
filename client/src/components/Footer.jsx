"use client"
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa"
import { NavLink, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const location = useLocation()
  const { t } = useTranslation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const linkClass = (path) =>
    `hover:underline ${location.pathname === path ? "underline text-[#FF6600] font-semibold" : ""}`

  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6 lg:px-20 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Column - Branding */}
        <div>
          <h2 className="text-[#44425A] text-lg font-semibold mb-2">{t("footer.brand")}</h2>
          <p className="text-[#6C6A74] mb-4">{t("footer.description")}</p>
          <div className="flex gap-3">
            <a href="#" className="text-[#FF6600]">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#FF6600]">
              <FaYoutube />
            </a>
            <a href="#" className="text-[#FF6600]">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[#44425A] font-semibold mb-3">{t("footer.quickLinks")}</h3>
          <ul className="space-y-2 text-[#6C6A74]">
            <li>
              <NavLink to="/" className={() => linkClass("/")}>
                {t("footer.links.home")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/course-details" className={() => linkClass("/course-details")}>
                {t("footer.links.courses")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/media-coverage" className={() => linkClass("/media-coverage")}>
                {t("footer.links.mediaCoverage")}
              </NavLink>
            </li>
            <li>
              <NavLink to="/events" className={() => linkClass("/events")}>
                {t("footer.links.events")}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-[#44425A] font-semibold mb-3">{t("footer.resources")}</h3>
          <ul className="space-y-2 text-[#6C6A74]">
            <li>
              <a href="#">{t("footer.links.blog")}</a>
            </li>
            <li>
              <a href="#">{t("footer.links.faqs")}</a>
            </li>
            <li>
              <a href="#">{t("footer.links.support")}</a>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-[#44425A] font-semibold mb-3">{t("footer.subscribe")}</h3>
          <input
            type="email"
            placeholder={t("footer.emailPlaceholder")}
            className="w-full px-3 py-2 border border-gray-300 rounded text-[#6C6A74] mb-3 focus:outline-none"
          />
          <button className="w-full bg-[#FF6600] text-white font-semibold py-2 rounded hover:bg-[#e65c00] transition">
            {t("footer.subscribeButton")}
          </button>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-[#6C6A74] text-xs">{t("footer.copyright")}</div>
    </footer>
  )
}

