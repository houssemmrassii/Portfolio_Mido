import React from 'react';
import profileImage from '../Photo/image.png';

export default function MyApproach() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-dark">
      <div className="container px-3 sm:px-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="flex justify-center">
            <img src={profileImage} alt="Profile" className="w-24 sm:w-36 md:w-48 lg:w-64 aspect-[9/16] object-cover rounded-lg sm:rounded-2xl shadow-lg sm:shadow-2xl" />
          </div>

          {/* Right: Content */}
          <div className="space-y-3 sm:space-y-5 md:space-y-8 flex flex-col justify-center items-start text-left mr-4 sm:mr-8 md:mr-12 lg:mr-20">
            <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gold leading-tight" style={{fontWeight: 700, letterSpacing: '0em'}}>MY APPROACH</h2>
            <div className="space-y-3 sm:space-y-5 md:space-y-8">
              <p className="text-xs sm:text-lg md:text-2xl lg:text-3xl text-white leading-relaxed" style={{fontWeight: 500, letterSpacing: '0em'}}>Social & Advertising video edit</p>
              <p className="text-xs sm:text-sm md:text-lg text-gray-300 leading-relaxed max-w-md" style={{fontWeight: 300, letterSpacing: '0em'}}>i edit what you hear.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
