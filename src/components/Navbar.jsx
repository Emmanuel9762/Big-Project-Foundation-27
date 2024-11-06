import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: 'src\components\Hero.jsx' },
    { name: 'About Us', href: 'src\components\sections\About.jsx' },
    { name: 'Projects', href: 'src\components\FeaturedProjects.jsx' },
    { name: 'Get Involved', href: 'src\components\GetInvolved.jsx' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-xl font-bold text-green-600">Big Project Foundation</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
              Donate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-green-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="px-3 py-2">
            <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
              Donate
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;