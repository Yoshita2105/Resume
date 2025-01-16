import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white py-3 fixed w-full z-10 top-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Name */}
        <h1 className="text-3xl text-white font-extrabold tracking-wide whitespace-nowrap">
          YOSHITA JAIN
        </h1>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden text-gray-100 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center  space-x-6 lg:space-x-8 lg:static absolute top-full left-0 w-full  bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 lg:bg-transparent shadow-lg lg:shadow-none`}
        >
          <a
            href="#about"
            className="block text-lg  text-gray-100 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </a>
          <a
            href="#resume"
            className="block text-lg text-gray-100 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Resume
          </a>
          <a
            href="#skills"
            className="block text-lg text-gray-100 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="block text-lg text-gray-100 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Projects
          </a>
        
          <a
            href="#contact"
            className="block text-lg text-gray-100 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
