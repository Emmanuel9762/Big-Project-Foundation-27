import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard = ({ image, title, description, readMoreLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href={readMoreLink}
          className="text-green-600 font-medium hover:text-green-800 transition-colors duration-200"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

const FeaturedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      image: "../src/assets/man-watering-small-plant.jpg",
      title: "Sustainable Water Initiative",
      description: "Providing clean water access to rural communities through innovative water filtration systems.",
      readMoreLink: "#"
    },
    {
      image: "../src/assets/Solar.jpeg",
      title: "Renewable Energy Cooperative",
      description: "Empowering local businesses to transition to renewable energy sources and reduce their carbon footprint.",
      readMoreLink: "#"
    },
    {
      image: "../src/assets/Youth-lead.jpg",
      title: "Youth Leadership Program",
      description: "Cultivating the next generation of community leaders through skill-building workshops and mentorship.",
      readMoreLink: "#"
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our ongoing initiatives that are making a difference in communities.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                readMoreLink={project.readMoreLink}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
            <button
              onClick={handlePrev}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-200 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;