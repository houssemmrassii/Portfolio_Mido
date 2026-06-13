import React, { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-sm border-b border-gold/20">
      <div className="container flex items-center justify-between h-16 sm:h-20 md:h-24">
        {/* Logo */}
        <a href="#" className="text-gold font-light tracking-widest text-lg sm:text-xl md:text-2xl hover:opacity-80 transition-opacity" style={{fontWeight: 300}}>
          AG
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 lg:space-x-12 items-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-300 hover:text-gold transition-colors text-xs md:text-sm tracking-widest font-light"
              style={{fontWeight: 300}}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-sm border-t border-gray-800">
          <div className="container py-3 sm:py-4 space-y-3 sm:space-y-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block text-gray-300 hover:text-gold transition-colors text-xs sm:text-sm tracking-widest py-2 font-light"
                style={{fontWeight: 300}}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
