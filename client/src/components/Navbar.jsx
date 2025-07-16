// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const categories = [
  "AI Detection", "Chat", "Content Marketing", "Copywriting", "Deals",
  "Design Generators", "Education", "Gaming", "Generative Art", "Generative Text",
  "Generative Video", "Graphic Design", "Image Editing", "Investing", "Marketing",
  "Music", "No Code", "Podcasting", "Productivity", "Recruitment", "SEO",
  "Social Media", "Text-to-Video", "Text-to-Voice", "Translation", "Video Editing",
  "Video Generation", "Transcription", "Business Intelligence", "Automation",
  "Coding", "Audio", "Advertising"
];

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleCategories = () => {
    setShowCategories(!showCategories);
  };

  const handleCategoryClick = (cat) => {
  setShowCategories(false);
  if (cat === 'AI Detection') {
    navigate('/ai-detection');
  } else if (cat === 'Chat') {
    navigate('/chat');
  }
   else if (cat === 'Content Making') navigate('/content-making');
};


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCategories(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="brand">ToolFlux</Link>
      </div>
      <div className="navbar-right">
        <Link to="/">Home</Link>
        <div className="dropdown" ref={dropdownRef}>
          <button onClick={toggleCategories} className="dropdown-btn">
            Categories
          </button>
          {showCategories && (
            <div className="dropdown-content">
              {categories.map((cat, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat}
                </div>
              ))}
            </div>
          )}
        </div>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
