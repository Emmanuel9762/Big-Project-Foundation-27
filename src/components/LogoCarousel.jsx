import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LogoCarousel = ({ logos = [] }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  // Sample logos array if none provided
  const defaultLogos = [
    {
      id: 1,
      name: "Partner 1",
      imageUrl: "src/assets/Logo1.jpeg",
      alt: "Partner 1 logo"
    },
    {
      id: 2,
      name: "Partner 2",
      imageUrl: "src/assets/logo2.jpeg",
      alt: "Partner 2 logo"
    },
    {
      id: 3,
      name: "Partner 3",
      imageUrl: "src/assets/logo3.jpeg",
      alt: "Partner 3 logo"
    },
    {
      id: 4,
      name: "Partner 4",
      imageUrl: "src/assets/logo4.jpeg",
      alt: "Partner 4 logo"
    },
    {
      id: 5,
      name: "Partner 5",
      imageUrl: "src/assets/logo5.jpeg",
      alt: "Partner 5 logo"
    },
    {
      id: 6,
      name: "Partner 6",
      imageUrl: "src/assets/logo6.jpeg",
      alt: "Partner 6 logo"
    }
  ];

  const displayLogos = logos.length > 0 ? logos : defaultLogos;

  // Auto-scroll effect
  useEffect(() => {
    let scrollInterval;

    if (!isPaused) {
      scrollInterval = setInterval(() => {
        if (scrollContainerRef.current) {
          const maxScroll = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth;
          
          if (currentPosition >= maxScroll) {
            setCurrentPosition(0);
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'auto' });
          } else {
            setCurrentPosition(prev => prev + 1);
            scrollContainerRef.current.scrollTo({
              left: currentPosition + 1,
              behavior: 'auto'
            });
          }
        }
      }, 30);
    }

    return () => clearInterval(scrollInterval);
  }, [isPaused, currentPosition]);

  // Scroll handlers
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const newPosition = direction === 'left' 
        ? currentPosition - 300
        : currentPosition + 300;
        
      setCurrentPosition(Math.max(0, newPosition));
      scrollContainerRef.current.scrollTo({
        left: Math.max(0, newPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-heading font-bold text-center mb-8">
          Our Partners & Sponsors
        </h2>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Logo Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-hidden mx-12"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex items-center space-x-12 py-4">
              {/* Duplicate logos for infinite scroll effect */}
              {[...displayLogos, ...displayLogos].map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex-shrink-0 flex flex-col items-center"
                >
                  <div className="w-40 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-4 hover:shadow-md transition-shadow duration-300">
                    <img
                      src={logo.imageUrl}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <span className="mt-2 text-sm text-gray-600">{logo.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;