import React from 'react';
import { FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
 
export default function Footer() {
  const location = useLocation();
 
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
 
  const linkClass = (path) =>
    `hover:underline ${
      location.pathname === path ? 'underline text-[#FF6600] font-semibold' : ''
    }`;
 
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6 lg:px-20 text-sm">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
       
        {/* Left Column - Branding */}
        <div>
          <h2 className="text-[#44425A] text-lg font-semibold mb-2">PAI-Excel</h2>
          <p className="text-[#6C6A74] mb-4">
            Empowering innovation in AI <br /> excellence across Punjab and beyond.
          </p>
          <div className="flex gap-3">
            <a href="#" className="text-[#FF6600]"><FaFacebookF /></a>
            <a href="#" className="text-[#FF6600]"><FaYoutube /></a>
            <a href="#" className="text-[#FF6600]"><FaLinkedinIn /></a>
          </div>
        </div>
 
        {/* Quick Links */}
        <div>
          <h3 className="text-[#44425A] font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-[#6C6A74]">
            <li><NavLink to="/" className={() => linkClass('/')}>Home</NavLink></li>
            <li><NavLink to="/courses" className={() => linkClass('/courses')}>Courses</NavLink></li>
            <li><NavLink to="/media" className={() => linkClass('/media')}>Media coverage</NavLink></li>
            <li><NavLink to="/events" className={() => linkClass('/events')}>Events</NavLink></li>
          </ul>
        </div>
 
        {/* Resources */}
        <div>
          <h3 className="text-[#44425A] font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-[#6C6A74]">
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
 
        {/* Subscribe */}
        <div>
          <h3 className="text-[#44425A] font-semibold mb-3">Subscribe</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded text-[#6C6A74] mb-3 focus:outline-none"
          />
          <button className="w-full bg-[#FF6600] text-white font-semibold py-2 rounded hover:bg-[#e65c00] transition">
            Subscribe
          </button>
        </div>
      </div>
 
      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-[#6C6A74] text-xs">
        © 2025 PAI-Excel. All rights reserved.
      </div>
    </footer>
  );
}
 
 