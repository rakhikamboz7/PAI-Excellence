"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = ["Home", "Course Details", "Media Coverage", "Events"]

  return (
    <nav className="bg-white shadow-sm py-7 px-16 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-orange-900">P<b>AI</b> Excel</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setActiveLink(item)}
              className={`text-gray-700 transition-all duration-200 ${
                activeLink === item
                  ? "font-bold border-b-4 border-orange-900"
                  : "hover:font-bold hover:border-b-4 hover:border-orange-900"
              } pb-1`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 z-50">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setActiveLink(item)}
                className={`text-gray-700 transition-all duration-200 ${
                  activeLink === item
                    ? "font-bold border-b-4 border-orange-900"
                    : "hover:font-bold hover:border-b-4 hover:border-orange-900"
                } pb-1`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
