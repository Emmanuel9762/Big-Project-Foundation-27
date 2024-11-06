// src/App.jsx
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProjects from './components/FeaturedProjects';
import AnimatedStats from './components/AnimatedStats';
import GetInvolved from './components/GetInvolved';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <FeaturedProjects />
      <AnimatedStats />
      <GetInvolved />
    </div>
  );
}

export default App;

