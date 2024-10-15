import React from 'react';
import './CompanyOverview.css';
import TrustedAndKeyOfferings from './Components/TrustedAndKeyOfferings';
import Marque from './Components/Marque';
import Metrics from './Components/Metrics';

const CompanyOverview = () => {
  return (
    <div className="container">
      {/* Header with Logo and Company Name */}
      <div className="header">
        {/* <img src={"./vite.svg"} alt="Company Logo" className="logo" /> */}
        <h1 className="company-name" style={{ color: "#001F3F" }}>Pulse.ai</h1>
      </div>

      {/* Company Overview Section */}
      <div className="section company-overview">
        <h2>Company Overview</h2>
        <p>
          <strong>Founded in 2024</strong> and headquartered in <strong>Hyderabad, India</strong>, 
          Pulse was established by alumni from <strong>IIT Patna</strong> and <strong>IIIT Hyderabad</strong> to address the underutilisation of customer data. 
          The company focuses on incorporating the <strong>"Voice of Customers"</strong> and feedback from customer-facing teams into the product development process.
        </p>
      </div>

      {/* About Us Section */}
      <div className="section about-us">
        <h2>About Us</h2>
        <p>
          <strong>Pulse is an AI-first Decision Intelligence Platform for SaaS Product teams.</strong> 
          It provides actionable insights to streamline product decisions by bridging the gap between customer feedback, customer-facing teams, and product development. 
          With AI-powered intelligence, Pulse helps boost key metrics like Net Retention Revenue (NRR), Net Promoter Score (NPS), and Annual Recurring Revenue (ARR), empowering teams to make data-backed decisions that drive growth and customer satisfaction.
        </p>
        <p>
          <strong>Geographies:</strong> India & United States
        </p>
        <p>
          <strong>Industries:</strong> Serving over 10 key SaaS verticals, including CRM, HRMS, Fintech, Sales & Marketing, VMS & ERP, AI & ML, and more.
        </p>
        <p>
          <strong>Employees:</strong> A tribe of 15+ passionate team members, collaborating closely to deliver high-impact outcomes for our customers.
        </p>
        <p>
          <strong>Funding:</strong> Pulse raised a seed round of $1.4M, backed by a distinguished blue-chip investor and several renowned angel investors.
        </p>
      </div>

      {/* Trusted and Key Offerings Section */}
      <TrustedAndKeyOfferings />
      <Marque />
      <Metrics />
    </div>
  );
};

export default CompanyOverview;
