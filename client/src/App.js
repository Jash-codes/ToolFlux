import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import AiDetection from './components/AiDetection';
import ChatCategory from './components/ChatCategory'; 
import ContentCategory from './components/ContentCategory';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ai-detection" element={<AiDetection />} />
        <Route path="/chat" element={<ChatCategory />} /> {/* ✅ Corrected path */}
        <Route path="/content-making" element={<ContentCategory />} />
      </Routes>
    </Router>
  );
};

export default App;
