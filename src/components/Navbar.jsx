import { useState } from 'react';
import logo from '../assets/logo-text.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center gap-4 md:justify-between">
        
        {/* Mobile: Hamburger Menu (Left) */}
        <button
          className="md:hidden text-gray-700 flex-shrink-0"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Logo (Centered on mobile, Left on desktop) */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
          <img src={logo} alt="Dev Stack Logo" className="h-8 w-auto" />
        </div>

        {/* Desktop: Nav Links (Center) */}
        <div className="hidden md:flex gap-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-pink-500 transition">Home</a>
          <a href="#" className="hover:text-pink-500 transition">Technologies</a>
          <a href="#" className="hover:text-pink-500 transition">Projects</a>
          <a href="#" className="hover:text-pink-500 transition">About</a>
          <a href="#" className="hover:text-pink-500 transition">Contact</a>
        </div>

        {/* Auth Buttons (Right - both mobile & desktop) */}
        <div className="flex gap-2 md:gap-4 items-center flex-shrink-0">
          <button className="text-gray-700 hover:text-pink-500 font-medium text-sm md:text-base transition">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white px-3 py-1.5 md:px-6 md:py-2 rounded-full font-medium text-sm md:text-base hover:opacity-90 transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4">
          <a href="#" className="text-gray-600 font-medium">Home</a>
          <a href="#" className="text-gray-600 font-medium">Technologies</a>
          <a href="#" className="text-gray-600 font-medium">Projects</a>
          <a href="#" className="text-gray-600 font-medium">About</a>
          <a href="#" className="text-gray-600 font-medium">Contact</a>
        </div>
      )}
    </nav>
  );
}