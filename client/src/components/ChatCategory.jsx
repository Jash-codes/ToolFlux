// src/components/ChatCategory.jsx

import React from 'react';
import './ChatCategory.css';
import { useNavigate } from 'react-router-dom';

const chatTools = [
  { name: "ChatGPT (OpenAI)", link: "https://chat.openai.com", pricing: "Freemium; Paid ChatGPT Plus $20/mo" },
  { name: "Dialogflow (Google)", link: "https://dialogflow.cloud.google.com", pricing: "Freemium; Paid usage-based" },
  { name: "Microsoft Bot Framework", link: "https://dev.botframework.com", pricing: "Free + paid Azure services" },
  { name: "Rasa", link: "https://rasa.com", pricing: "Open-source Free + Enterprise" },
  { name: "ManyChat", link: "https://manychat.com", pricing: "Freemium; Paid from $15/month" },
  { name: "Tidio", link: "https://tidio.com", pricing: "Freemium; Paid from $18/month" },
  { name: "Landbot", link: "https://landbot.io", pricing: "Freemium; Paid from ~$30/month" },
  { name: "Botsify", link: "https://botsify.com", pricing: "Paid plans from $50/month" },
  { name: "Chatfuel", link: "https://chatfuel.com", pricing: "Freemium; Paid from $15/month" },
  { name: "Intercom", link: "https://intercom.com", pricing: "Paid custom pricing" },
  { name: "Drift", link: "https://drift.com", pricing: "Paid custom pricing" },
  { name: "Freshchat", link: "https://freshworks.com/freshchat", pricing: "Freemium; Paid from $15/month" },
  { name: "SnatchBot", link: "https://snatchbot.me", pricing: "Freemium; Paid tiers available" },
  { name: "Bold360 (LogMeIn)", link: "https://bold360.com", pricing: "Paid custom pricing" },
  { name: "LivePerson", link: "https://liveperson.com", pricing: "Paid custom pricing" },
  { name: "Kommunicate", link: "https://kommunicate.io", pricing: "Freemium; Paid from $40/month" },
  { name: "Quriobot", link: "https://quriobot.com", pricing: "Freemium; Paid from $19/month" },
  { name: "Zoho SalesIQ", link: "https://zoho.com/salesiq", pricing: "Freemium; Paid from $19/month" },
  { name: "Verloop.io", link: "https://verloop.io", pricing: "Paid custom pricing" },
  { name: "Ada", link: "https://ada.support", pricing: "Paid custom pricing" },
  { name: "Flow XO", link: "https://flowxo.com", pricing: "Freemium; Paid from $19/month" },
  { name: "IBM Watson Assistant", link: "https://ibm.com/cloud/watson-assistant", pricing: "Freemium; Paid per API call" },
  { name: "Pandorabots", link: "https://pandorabots.com", pricing: "Freemium; Paid tiers available" },
  { name: "Meta AI Chatbots", link: "https://about.fb.com/research/ai", pricing: "Internal/Partner Access" },
  { name: "Deepseek AI Chat", link: "https://deepseek.ai", pricing: "Paid; details on request" }
];

const ChatCategory = () => {
  const navigate = useNavigate();

  return (
    <div className="chat-category-page">
      <button className="back-button" onClick={() => navigate("/")}>← Back to Home</button>
      <h1 className="category-title">Chat Tools</h1>
      <div className="tool-grid">
        {chatTools.map((tool, index) => (
          <a
            key={index}
            href={tool.link}
            className="tool-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="tool-name">{tool.name}</div>
            <div className="tool-category">Chat</div>
            <div className="tool-price">{tool.pricing}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ChatCategory;
