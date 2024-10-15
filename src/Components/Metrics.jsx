import React from 'react';
import './Offerings.css';
import { MonetizationOn, TrendingUp, TrendingDown } from '@mui/icons-material'; // Import MUI icons

const Offerings = () => {
  return (
    <>
      <h2 style={{ marginTop: "22px" }}>Metrics</h2>

      <div className="offerings-container">
        <div className="cards-wrapper"> {/* Wrapper for the cards */}
          <div className="card">
            <MonetizationOn className="card-icon" />
            <h3>3-5X Growth in ARR</h3>
            <p>
              Capture new revenue opportunities by delivering market-relevant features faster,
              leading to a 3-5X increase in predictable ARR.
            </p>
          </div>

          <div className="card">
            <TrendingUp className="card-icon" />
            <h3>Upto 125% Increase in NRR & NPS</h3>
            <p>
              Prioritise high-impact features to reduce churn and improve customer satisfaction,
              driving up to a 125% boost in NRR.
            </p>
          </div>

          <div className="card">
            <TrendingDown className="card-icon" />
            <h3>20% Drop in Churn</h3>
            <p>
              Achieve 3.5X ROI through optimised feature prioritisation and faster go-to-market
              execution, with a 20% drop in churn rate using AI-driven insights.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offerings;
