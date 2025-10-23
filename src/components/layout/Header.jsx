import React, { useState } from 'react';
import Logo from './logo.png';


const Header = () => {
  const [open, setOpen] = useState(false);
  const scrollToId = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.hash = id;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-44 h-44 md:w-20 md:h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white p-1">
            <a
              href="#home"
              onClick={(e) => scrollToId(e, 'home')}
              aria-label="Go to home"
              className="block w-full h-full"
            >
              <img src={Logo} alt="EMAGE logo" className="w-full h-full object-contain" />
            </a>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="/home" onClick={(e) => scrollToId(e, 'home')} className="text-gray-700 hover:text-emerald-600 transition">Home</a>
          <a href="/about" onClick={(e) => scrollToId(e, 'about')} className="text-gray-700 hover:text-emerald-600 transition">About</a>
          <a href="/services" onClick={(e) => scrollToId(e, 'services')} className="text-gray-700 hover:text-emerald-600 transition">Services</a>
          <a href="/contact" onClick={(e) => scrollToId(e, 'contact')} className="text-gray-700 hover:text-emerald-600 transition">Contact Us</a>
        </div>
        
        {/* Mobile: hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          >
            <svg className={`w-6 h-6`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        <button
          onClick={(e) => scrollToId(e, 'contact')}
          className="hidden md:inline-block bg-[#FF7A59] hover:bg-emerald-600 text-white px-6 py-2 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none"
          aria-label="Get started"
        >
          Get Started
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden">
          <div className="px-6 pt-2 pb-6 space-y-2 bg-white border-t">
            <a href="#home" onClick={(e) => { setOpen(false); scrollToId(e, 'home'); }} className="block text-gray-700 hover:text-emerald-600 transition">Home</a>
            <a href="#about" onClick={(e) => { setOpen(false); scrollToId(e, 'about'); }} className="block text-gray-700 hover:text-emerald-600 transition">About</a>
            <a href="#services" onClick={(e) => { setOpen(false); scrollToId(e, 'services'); }} className="block text-gray-700 hover:text-emerald-600 transition">Services</a>
            <a href="#contact" onClick={(e) => { setOpen(false); scrollToId(e, 'contact'); }} className="block text-gray-700 hover:text-emerald-600 transition">Contact Us</a>
            <button
              onClick={(e) => { setOpen(false); scrollToId(e, 'contact'); }}
              className="w-full mt-2 bg-[#FF7A59] hover:bg-emerald-600 text-white px-6 py-2 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
