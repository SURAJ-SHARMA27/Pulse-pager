// Offerings.js
import React from 'react';
import './Offerings.css';
import { 
  Insights, 
  Lightbulb, 
  Analytics 
} from '@mui/icons-material'; // Import your MUI icons

const Offerings = () => {
  return (
    <>
      <h2 style={{ marginTop: "22px" }}>Offerings</h2>

      <div className="offerings-container">
        <div className="cards-wrapper"> {/* Wrapper for the cards */}
          <div className="card">
            <Insights className="card-icon" />
            <h3>Centralized Customer Insights</h3>
            <p>
              Pulse consolidates customer conversations, feature requests, and internal feedback into one platform,
              giving product teams a unified 360° view of customer needs.
            </p>
          </div>

          <div className="card">
            <Lightbulb className="card-icon" />
            <h3>AI-Driven Feature Suggestions</h3>
            <p>
              Our AI extracts actionable insights from unstructured data, intelligently linking feature requests to
              customer pain points for faster, more relevant decisions.
            </p>
          </div>

          <div className="card">
            <Analytics className="card-icon" />
            <h3>Smarter, Faster Prioritization</h3>
            <p>
              Using AI-powered scoring models, Pulse helps product teams prioritize features with precision,
              combining qualitative and quantitative data for clear, strategic decisions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerings;
