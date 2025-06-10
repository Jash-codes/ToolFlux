import React from 'react';
import './About.css';

const About = () => {
  const categoryCount = 33;
  const toolCount = 1000; // or dynamically pass it if available

  return (
    <div className="about-section" id="about">
      <h2>About ToolFlux</h2>
      <p>
        ToolFlux is an AI tools directory platform built to help users discover and explore powerful AI applications.
        Our platform features a wide variety of tools across {categoryCount} different categories, 
        with over {toolCount}+ tools and counting!
      </p>
      <p>
        Whether you're into image generation, AI chat, content creation, coding tools, or automation – ToolFlux has you covered.
      </p>
      <p className="dev-credit">© 2025 ToolFlux | Developed by Jashwanth</p>
    </div>
  );
};

export default About;
