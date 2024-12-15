import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/img/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="flex header items-center justify-between lg:justify-evenly px-6 py-4 lg:py-1 bg-dark text-white sticky top-0 z-50">
      {/* Logo */}
      <div>
        <img src={logo} className="h-12 my-1" alt="Logo" />
      </div>

      {/* Links for Larger Screens */}
      <div className="hidden md:flex text-grey font-medium">
        {['Home', 'About', 'Services', 'Experience', 'My Projects', 'Get in touch'].map((link, index) => (
          <a
            key={index}
            className="m-3 hover:text-light hover:border-b-2 py-1 hover:border-b-main transition-all duration-300"
            href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Hamburger Icon for Small Screens */}
      <div
        className="md:hidden cursor-pointer text-light"
        onClick={() => setIsMenuOpen(true)}
      >
        <BiMenuAltRight className="text-3xl" />
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-3/4 bg-dark text-white shadow-lg transform transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Icon */}
        <div
          className="flex justify-end p-4 cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        >
          <FaTimes className="h-6 w-6" />
        </div>

        {/* Mobile Links */}
        <div className="flex flex-col items-center mt-8 space-y-6 text-grey font-medium">
          {['Home', 'About', 'Services', 'Experience', 'My Projects', 'Get in touch'].map((link, index) => (
            <a
              key={index}
              className="hover:text-light hover:border-b-2 py-1 hover:border-b-main transition-all duration-300"
              href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
