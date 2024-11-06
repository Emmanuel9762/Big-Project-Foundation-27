import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="src\assets\hero.jpg"
          alt="Community project in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        {/* Mission Statement */}
        <p className="text-xl md:text-2xl text-white text-center max-w-3xl mb-12">
          Empowering communities through sustainable projects and inclusive leadership
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-105">
            Donate Now
          </button>
          <button className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200 transform hover:scale-105">
            Get Involved
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;