import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="sticky top-0 bg-white px-4 sm:px-6 md:px-8 shadow-md z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="relative w-20 h-6 sm:w-32 sm:h-10 md:w-40 md:h-12">
          <Image
            src="/assets/images/logo.png"
            alt="Logo icon"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden sm:flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
