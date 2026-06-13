import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-darkGray border-t border-gray-800 py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 mb-8 md:mb-12">
          {/* About */}
          <div>
            <h4 className="text-white font-light tracking-widest mb-3 md:mb-4 text-xs md:text-sm" style={{fontWeight: 300}}>ABOUT</h4>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light" style={{fontWeight: 300}}>
              Creative Director and Visual Storyteller based in New York.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-light tracking-widest mb-3 md:mb-4 text-xs md:text-sm" style={{fontWeight: 300}}>SERVICES</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm font-light" style={{fontWeight: 300}}>
              <li><a href="#" className="hover:text-gold transition-colors">Direction</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Motion Design</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Photography</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Branding</a></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-light tracking-widest mb-3 md:mb-4 text-xs md:text-sm" style={{fontWeight: 300}}>LINKS</h4>
            <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm font-light" style={{fontWeight: 300}}>
              <li><a href="https://www.linkedin.com/in/abdelhamid-ghaoui-578748269/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-light tracking-widest mb-3 md:mb-4 text-xs md:text-sm" style={{fontWeight: 300}}>CONTACT</h4>
            <div className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm font-light" style={{fontWeight: 300}}>
              <p><a href="mailto:esmailabdelhamidghaouiii@gmail.com" className="hover:text-gold transition-colors">esmailabdelhamidghaouiii@gmail.com</a></p>
              <p><a href="tel:+21623583140" className="hover:text-gold transition-colors">+216 23 583 140</a></p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6 md:mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-left text-gray-500 text-xs tracking-wide font-light gap-4 sm:gap-0" style={{fontWeight: 300}}>
          <p>&copy; 2024 Abdelhamid Ghaoui. All rights reserved.</p>
          <div className="flex space-x-4 sm:space-x-6 font-light" style={{fontWeight: 300}}>
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
            <a href="#" className="hover:text-gold transition-colors">Credits</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
