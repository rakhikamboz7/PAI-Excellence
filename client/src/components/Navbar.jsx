import React from 'react'
import { NavLink } from 'react-router-dom'

const tabs = [
  { name: 'Home', path: '/' },
  { name: 'Course Details', path: '/courses' },
  { name: 'Media Coverage', path: '/media' },
  { name: 'Events', path: '/events' },
]

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6 lg:px-20">
        <ul className="flex space-x-8 py-4 font-medium items-center">
          <li className="text-xl font-bold text-[#44425A]">
            Punjab AI Excellence
          </li>
          {tabs.map((tab) => (
            <li key={tab.name} className="relative">
              <NavLink
                to={tab.path}
                end
                className={({ isActive }) =>
                  `block px-2 pb-1 ${
                    isActive ? 'text-[#FF6600]' : 'text-[#44425A]'
                  }`
                }
              >
                {tab.name}
                <span
                  className={({ isActive }) =>
                    isActive
                      ? 'absolute bottom-0 left-0 w-full h-1 rounded-t-full bg-[#FF6600]'
                      : ''
                  }
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
