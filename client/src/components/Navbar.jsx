"use client"

import { useState } from "react"
import { useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Course Details", href: "/course-details" },
  { name: "Media Coverage", href: "/media-coverage" },
  { name: "Events", href: "/events" },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open)
  }

  return (
    <nav className="bg-white shadow-sm py-7 px-4 md:px-16 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-4xl font-bold text-orange-600">
            P<b>AI</b> Excel
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-gray-700 transition-all duration-200 pb-1 ${
                location.pathname === item.href
                  ? "font-bold border-b-4 border-orange-500"
                  : "hover:font-bold hover:border-b-4 hover:border-orange-500"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white shadow-md py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-gray-700 transition-all duration-200 pb-1 ${
                  location.pathname === item.href
                    ? "font-bold border-b-4 border-orange-500"
                    : "hover:font-bold hover:border-b-4 hover:border-orange-500"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
