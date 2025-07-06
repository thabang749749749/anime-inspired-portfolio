import { useState } from 'react';
import React from 'react';
import { Home, Mail, Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-cyan-400 font-bold text-xl">[ <span
              className="text-fuchsia-400">thabang_xaba</span> ]</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#hero" className="text-gray-300 hover:text-cyan-400 px-3
              py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:text-cyan-400 px-3
              py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>

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
      {isMenuOpen && (
        <ul className="md:hidden flex flex-col gap-6 items-center p-4 bg-gray-800">
          <li className="flex items-center gap-1 hover:text-pink-400">
            <Home size={18} />
            Home
          </li>
          <li className="flex items-center gap-1 hover:text-pink-400">
            <Menu size={24} />
            Menu
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
