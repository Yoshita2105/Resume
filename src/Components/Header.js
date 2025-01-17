import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white py-3 fixed w-full z-10 top-0 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Name */}
        <h1 className="text-3xl font-extrabold tracking-wide whitespace-nowrap" >
          YOSHITA JAIN
        </h1>

        {/* Hamburger Icon */}
        <button
  className="lg:hidden text-gray-100 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
  onClick={() => setIsMenuOpen((prev) => !prev)}
  aria-label="Toggle Navigation Menu"
  aria-expanded={isMenuOpen}
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
      d={
        isMenuOpen
          ? 'M6 18L18 6M6 6l12 12' // X icon
          : 'M4 6h16M4 12h16M4 18h16' // Hamburger icon
      }
    />
  </svg>
</button>


        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:items-center lg:space-x-8 absolute lg:static top-full left-0 w-full lg:w-auto bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 lg:bg-transparent shadow-lg lg:shadow-none`}
          role="menu"
        >
          {[
            { href: '#about', label: 'About' },
            { href: '#resume', label: 'Resume' },
            { href: '#skills', label: 'Skills' },
            { href: '#projects', label: 'Projects' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="block text-lg text-gray-100 hover:text-white transform hover:scale-105 px-4 py-2 lg:px-0"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
