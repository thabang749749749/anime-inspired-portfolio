import { useState } from 'react';
import React from 'react';
import { Home, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-cyan-400 font-bold text-xl hover:text-cyan-300 transition-colors duration-200">
              [ <span className="text-fuchsia-400 hover:text-fuchsia-300">thabang_xaba</span> ]
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6">
            <li className="flex items-center gap-1 text-gray-300 hover:text-pink-400 cursor-pointer transition-colors duration-200">
              <Home size={20} />
              Home
            </li>
            <li className="flex items-center gap-1 text-gray-300 hover:text-pink-400 cursor-pointer transition-colors duration-200">
              <Mail size={20} />
              Mail Me
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md
              text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <ul className="flex flex-col gap-6 items-center p-4 bg-gray-800 border-b border-gray-700">
          <li className="flex items-center gap-1 text-gray-300 hover:text-pink-400 cursor-pointer transition-colors duration-200">
            <Home size={20} />
            Home
          </li>
          <li className="flex items-center gap-1 text-gray-300 hover:text-pink-400 cursor-pointer transition-colors duration-200">
            <Mail size={20} />
            Mail Me
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
