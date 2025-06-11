// src/components/AiDetection.jsx
import React from 'react';
import './AiDetection.css';
import { useNavigate } from 'react-router-dom';

const tools = [
  { name: "GPTZero", link: "https://gptzero.me", price: "Freemium → Paid" },
  { name: "Originality.AI", link: "https://originality.ai", price: "Paid ($12.95+/mo)" },
  { name: "Copyleaks", link: "https://copyleaks.com", price: "Freemium" },
  { name: "ZeroGPT", link: "https://zerogpt.com", price: "Freemium" },
  { name: "Winston AI", link: "https://winston.ai", price: "Freemium/Paid" },
  { name: "Surfer AI Detector", link: "https://surferseo.com", price: "Freemium" },
  { name: "QuillBot", link: "https://quillbot.com", price: "Freemium (Premium)" },
  { name: "Scribbr AI Detector", link: "https://scribbr.com", price: "Free" },
  { name: "SciSpace AI Detector", link: "https://scispace.com", price: "Freemium" },
  { name: "Editpad AI Detector", link: "https://editpad.org/ai-detector", price: "Free" },
  { name: "Crossplag", link: "https://crossplag.com", price: "Freemium" },
  { name: "ContentDetector.AI", link: "https://contentdetector.ai", price: "Free" },
  { name: "AI Checker", link: "https://toolerific.com", price: "Free" },
  { name: "GPT-Minus1", link: "https://aitoolmate.com", price: "Free" },
  { name: "AICheatCheck", link: "https://aitoolmate.com", price: "Free" },
  { name: "RoFT (Real or Fake)", link: "https://roft.io", price: "Free" },
  { name: "Turnitin/iThenticate", link: "https://turnitin.com", price: "Paid, institutional" },
  { name: "Unicheck", link: "https://unicheck.com", price: "Paid" },
  { name: "PlagiarismCheck.org", link: "https://plagiarismcheck.org", price: "Paid" },
  { name: "PlagScan", link: "https://plagscan.com", price: "Paid, trial credits" },
  { name: "Copyscape", link: "https://copyscape.com", price: "Freemium/Paid" },
  { name: "iThenticate", link: "https://ithenticate.com", price: "Paid" },
  { name: "AI Text Classifier", link: "https://platform.openai.com/ai-text-classifier", price: "Free" },
  { name: "Writer AI Detector", link: "https://writer.com/ai-content-detector", price: "Free" },
  { name: "Sapling AI Detector", link: "https://sapling.ai/ai-content-detector", price: "Freemium" }
];

const AiDetection = () => {
  const navigate = useNavigate();

  return (
    <div className="ai-detection-container">
      <button className="back-button" onClick={() => navigate("/")}>← Back to Home</button>
      <h1 className="category-title">Ai Detection Tools</h1>
      <div className="tool-grid">
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.link}
            className="tool-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="tool-name">{tool.name}</div>
            <div className="tool-category">Ai detection</div>
            <div className="tool-price">{tool.price}</div>
          </a>
        ))}
      </div>
    </div>
  );
};



export default AiDetection;
