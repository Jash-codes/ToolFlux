// src/components/Home.jsx

import React, { useState } from 'react';
import './Home.css';
import { FaSearch } from 'react-icons/fa';

const Home = () => {
  const quickCategories = ['AI Detection', 'Chat', 'Content Making', 'Image Editing', 'Text to Video'];

  const allCategories = [
    'Copywriting', 'Deals', 'Design Generators', 'Education', 'Gaming', 'Generative Art',
    'Generative Text', 'Generative Video', 'Graphic Design', 'Image Editing', 'Investing',
    'Marketing', 'Music', 'No Code', 'Podcasting', 'Productivity', 'Recruitment', 'SEO',
    'Social Media', 'Text-to-Video', 'Text-to-Voice', 'Translation', 'Video Editing',
    'Video Generation', 'Transcription', 'Advertising', 'Automation', 'Business Intelligence',
    'Chat', 'Coding', 'Content Marketing', 'Audio', 'Search'
  ];

  const [showAllCategories, setShowAllCategories] = useState(false);

  const toggleCategories = () => {
    setShowAllCategories(!showAllCategories);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">ToolFlux</h1>

      <div className="search-bar">
        <input type="text" placeholder="Search AI Tools..." />
        <button><FaSearch /></button>
      </div>

      <div className="quick-categories">
        {quickCategories.map((cat, index) => (
          <button key={index} className="category-btn">{cat}</button>
        ))}
      </div>

      <button className="toggle-button" onClick={toggleCategories}>
        {showAllCategories ? "Hide Categories" : "View All Categories"}
      </button>

      {showAllCategories && (
        <div className="all-categories">
          {allCategories.map((cat, index) => (
            <button key={index} className="category-btn">{cat}</button>
          ))}
        </div>
      )}
 <p className="footer-text">
        © {new Date().getFullYear()} ToolFlux | Developed by Jashwanth
      </p>
    </div>
  );
};

     


export default Home;
