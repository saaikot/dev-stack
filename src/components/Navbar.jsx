import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 rounded-lg"></div>
          <span className="text-xl font-bold text-gray-800">Dev Stack</span>
        </div>

        <div className="hidden md:flex gap-6 text-gray-600 font-medium">
          <a href="#" className="hover:text-pink-500">Home</a>
          <a href="#" className="hover:text-pink-500">Technologies</a>
          <a href="#" className="hover:text-pink-500">Projects</a>
          <a href="#" className="hover:text-pink-500">About</a>
          <a href="#" className="hover:text-pink-500">Contact</a>
        </div>

        <div className="hidden md:flex gap-4 items-center">
          <button className="text-gray-600 hover:text-pink-500 font-medium">Sign In</button>
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 text-white px-6 py-2 rounded-full font-medium">
            Sign Up
          </button>
        </div>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4">
          <a href="#" className="text-gray-600">Home</a>
          <a href="#" className="text-gray-600">Technologies</a>
          <a href="#" className="text-gray-600">Projects</a>
          <a href="#" className="text-gray-600">About</a>
          <a href="#" className="text-gray-600">Contact</a>
        </div>
      )}
    </nav>
  );
}