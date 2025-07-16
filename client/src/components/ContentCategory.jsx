// src/components/ContentCategory.jsx

import React from 'react';
import './AiDetection.css'; // Using same CSS for consistency
import { useNavigate } from 'react-router-dom';

const contentTools = [
  { name: "Jarvis (Jasper AI)", link: "https://www.jasper.ai", pricing: "Paid from ~$49/month" },
  { name: "Copy.ai", link: "https://www.copy.ai", pricing: "Freemium; Paid from $35/month" },
  { name: "Writesonic", link: "https://writesonic.com", pricing: "Freemium; Paid plans available" },
  { name: "Rytr", link: "https://rytr.me", pricing: "Freemium; Paid from $9/month" },
  { name: "ContentBot", link: "https://contentbot.ai", pricing: "Freemium; Paid plans available" },
  { name: "Anyword", link: "https://anyword.com", pricing: "Paid from ~$79/month" },
  { name: "Scalenut", link: "https://www.scalenut.com", pricing: "Paid from ~$39/month" },
  { name: "Copysmith", link: "https://copysmith.ai", pricing: "Paid from ~$19/month" },
  { name: "INK Editor", link: "https://inkforall.com", pricing: "Freemium; Paid plans available" },
  { name: "GrowthBar", link: "https://www.growthbarseo.com", pricing: "Paid from ~$29/month" },
  { name: "Peppertype.ai", link: "https://www.peppertype.ai", pricing: "Paid from ~$35/month" },
  { name: "LongShot AI", link: "https://www.longshot.ai", pricing: "Paid from ~$25/month" },
  { name: "Article Forge", link: "https://www.articleforge.com", pricing: "Paid from ~$57/month" },
  { name: "Copyleaks", link: "https://copyleaks.com", pricing: "Freemium; Paid plans available" },
];

const ContentCategory = () => {
  const navigate = useNavigate();

  return (
    <div className="ai-detection-container">
      <button className="back-button" onClick={() => navigate("/")}>← Back to Home</button>
      <h1 className="ai-detection-title">Content Making Tools</h1>
      <div className="tools-grid">
        {contentTools.map((tool, index) => (
          <a
            key={index}
            href={tool.link}
            className="tool-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{tool.name}</h3>
            <p className="tool-price">{tool.pricing}</p>
            <p className="tool-category">Content Making</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContentCategory;
