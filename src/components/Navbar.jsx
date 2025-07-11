import { useState } from 'react';
import React from 'react';
import { Home, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-responsive">
        <div className="navbar-flex">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="logo">
              [ <span className="text-fuchsia-400 hover:text-fuchsia-300">thabang_xaba</span> ]
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6">
            <li className="navbar-desktop-items">
              <a href="/" className="flex items-center">
                <Home size={20} />
                Home
              </a>
            </li>
            <li className="navbar-desktop-items">
              <a href="mailto:xabathabang11@gmail.com" className="flex items-center">
                <Mail size={20} />
                Mail Me
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="nav-toggle-menu"
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
          <li className="navbar-items">
            <a href="/" className="flex items-center">
              <Home size={20} />
              Home
            </a>
          </li>
          <li className="navbar-items">
            <a href="mailto:xabathabang11@gmail.com" className="flex items-center">
              <Mail size={20} />
              Mail Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
