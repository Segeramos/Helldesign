import React, { useState } from 'react';
import { useLocation, useNavigate, Link as RouterLink } from 'react-router-dom';
import { FaXTwitter, FaInstagram, FaBars, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';

import { scroller } from 'react-scroll';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollOrNavigate = (target) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 500,
          offset: -60,
        });
      }, 100);
    } else {
      scroller.scrollTo(target, {
        smooth: true,
        duration: 500,
        offset: -60,
      });
    }
    setMenuOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-sm z-50 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <div>
          <img
            src="https://i.ibb.co/z8jcvms/avatar.png"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
          <span onClick={() => handleScrollOrNavigate('about')} className="cursor-pointer hover:text-purple-600">About Me</span>
          <span onClick={() => handleScrollOrNavigate('projects')} className="cursor-pointer hover:text-purple-600">Projects</span>
          <span onClick={() => handleScrollOrNavigate('client-projects')} className="cursor-pointer hover:text-purple-600">Client Projects</span>
          <span onClick={() => handleScrollOrNavigate('services')} className="cursor-pointer hover:text-purple-600">Services</span>
          <RouterLink to="/contact" className="hover:text-purple-600">Contact</RouterLink>
        </nav>


        {/* Social Icons + Hamburger */}

        <div className="flex items-center space-x-4 text-black-600 text-lg">
          <FaXTwitter className="cursor-pointer hover:text-blue-400" />
          <FaInstagram className="cursor-pointer hover:text-pink-800" />
          <FaLinkedin className="cursor-pointer hover:text-blue-800" />
          <FaGithub className="cursor-pointer hover:text-green-600" />
          <FaDiscord className="cursor-pointer hover:text-blue-600" />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white px-6 pb-4 shadow-lg z-40 animate-slideDown">
          <nav className="flex flex-col space-y-4 text-sm font-medium text-gray-700">
            <span onClick={() => handleScrollOrNavigate('about')} className="cursor-pointer hover:text-purple-600">About</span>
            <span onClick={() => handleScrollOrNavigate('projects')} className="cursor-pointer hover:text-purple-600">Projects</span>
            <span onClick={() => handleScrollOrNavigate('services')} className="cursor-pointer hover:text-purple-600">Services</span>
            <RouterLink to="/contact" className="hover:text-purple-600" onClick={() => setMenuOpen(false)}>Contact</RouterLink>
          </nav>
        </div>
      )}
    </header>
  );
}



