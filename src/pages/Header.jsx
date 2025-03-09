import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Large screens (md and above) */}
      <header className="grid grid-cols-12 items-center px-8 py-4 text-white sm:hidden">
        {/* Logo Section */}
        <div className="col-span-2">
          <Link to="/" >
            <img src="/Img/JugIcon.svg" alt="Logo" />
          </Link>
        </div>

        {/* Navigation Section */}
        <nav className="col-span-8 flex pl-[130px]">
          <ul className="flex space-x-10">
            <li><a href="#" className="text-black hover:text-gray-400 transition">About</a></li>
            <li><a href="#" className="text-black hover:text-gray-400 transition">Speakers</a></li>
            <li><a href="/event" className="text-black hover:text-gray-400 transition">Sessions</a></li>
            <li><a href="#" className="text-black hover:text-gray-400 transition">Become a Volunteer</a></li>
            <li><a href="#" className="text-black hover:text-gray-400 transition">Reviews</a></li>
          </ul>
        </nav>

        {/* Button Section */}
        <div className="col-span-2 flex justify-end">
          <button className="bg-white text-black px-6 py-4 rounded-2xl transition border border-black">
            Join Community
          </button>
        </div>
      </header>

      {/* Mobile screens (sm) */}
      <header className="xl:hidden md:hidden lg:hidden px-4 py-3 flex justify-between items-center bg-white shadow-md  ">
        {/* Logo Section */}
        <div>
          <Link to="/" >
            <img src="/Img/JugIcon.svg" alt="Logo" className="w-8 h-8" />
          </Link>
        </div>

        {/* Menu Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="absolute top-16 left-0 w-full bg-white p-4 shadow-lg rounded-lg">
            <ul className="flex flex-col space-y-3">
              <li><a href="/" className="hover:text-gray-500 transition">About</a></li>
              <li><a href="#" className="hover:text-gray-500 transition">Speakers</a></li>
              <li><a href="/event" className="hover:text-gray-500 transition">Sessions</a></li>
              <li><a href="#" className="hover:text-gray-500 transition">Become a Volunteer</a></li>
              <li><a href="#" className="hover:text-gray-500 transition">Reviews</a></li>
            </ul>
            <button className="bg-black text-white px-5 py-2 rounded-lg transition hover:bg-gray-800 w-full mt-3">
              Join Community
            </button>
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
