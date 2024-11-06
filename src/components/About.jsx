import React from 'react';

const CoreValue = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="text-green-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TeamMember = ({ name, role, image }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-48 h-48 mb-4 rounded-full overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

const About = () => {
  const coreValues = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Community Empowerment",
      description: "Building stronger communities through education, resources, and support."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Transparency",
      description: "Open communication and accountability in all our initiatives."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Innovation",
      description: "Finding creative solutions to community challenges."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Partnership",
      description: "Collaborating with stakeholders to achieve lasting impact."
    }
  ];

  const teamMembers = [
    {
      name: "L Fanana",
      role: "Executive Director",
      image: "../src/assets/Headshot1.jpeg"
    },
    {
      name: "N Rasmeni",
      role: "Program Director",
      image: "../src/assets/headshot2.jpeg"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Statement */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our mission is to uplift communities through hands-on projects that align with the Sustainable Development Goals (SDGs).
          </p>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <CoreValue
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;