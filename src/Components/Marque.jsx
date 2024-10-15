import React from 'react';
import './Marque.css';

const Integrations = () => {
  const images = Array.from({ length: 12 }, (_, index) => (
    <img 
      key={index} 
      src={`./img${index + 1}.png`} 
      alt={`Integration ${index + 1}`} 
      className="integration-logo" 
    />
  ));

  return (
    <>
      <h2 className="integrations-heading">Integrations</h2>

      <div className="integrations-container">
        <div className="images-row">
          {images.slice(0, 6)} {/* First 6 images */}
        </div>
        <div className="images-row">
          {images.slice(6, 12)} {/* Next 6 images */}
        </div>
      </div>
    </>
  );
};

export default Integrations;
