import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const CircularProgress = ({ percentage, label, value, color }) => {
  const [progress, setProgress] = useState(0);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeWidth = 12;

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center transform hover:scale-105 transition-transform duration-300">
      <div className="relative w-40 h-40 group">
        {/* Outer glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-orange-200 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
        
        {/* Background circle with pulse effect */}
        <div className="absolute inset-0 animate-ping opacity-10 rounded-full bg-green-500" 
             style={{ animationDuration: '3s' }} />
        
        <svg className="w-full h-full transform -rotate-90">
          {/* Background track */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="rgba(229, 231, 235, 0.4)"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset,
              transition: 'stroke-dashoffset 1.5s ease-out',
              filter: 'drop-shadow(0 0 6px rgba(34, 197, 94, 0.3))'
            }}
          />
        </svg>
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
            {value}
          </span>
          <span className="text-sm text-gray-600 mt-1">
            {progress}%
          </span>
        </div>
      </div>
      <span className="mt-4 text-lg font-medium text-gray-700 text-center">
        {label}
      </span>
    </div>
  );
};

const AnimatedStats = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const stats = [
    { 
      percentage: 85, 
      label: "Communities Reached", 
      value: "50+",
      color: "#22c55e"
    },
    { 
      percentage: 92, 
      label: "Training Programs", 
      value: "120",
      color: "#16a34a"
    },
    { 
      percentage: 78, 
      label: "Research Projects", 
      value: "45",
      color: "#15803d"
    },
    { 
      percentage: 88, 
      label: "Partner Organizations", 
      value: "30+",
      color: "#166534"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Same as before */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        {/* ... Navigation content remains the same ... */}
      </nav>

      {/* Hero Section - Same as before */}
      <div className="relative pt-16">
        {/* ... Hero content remains the same ... */}
      </div>

      {/* Enhanced Stats Section */}
      <div className="bg-gray-50/80 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
            Our Impact
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Transforming communities through sustainable development and impactful initiatives
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <CircularProgress
                key={index}
                percentage={stat.percentage}
                label={stat.label}
                value={stat.value}
                color={stat.color}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mission Statement Section - Same as before */}
      <div className="bg-white py-16">
        {/* ... Mission statement content remains the same ... */}
      </div>
    </div>
  );
};

export default AnimatedStats;