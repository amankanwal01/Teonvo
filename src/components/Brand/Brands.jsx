import React from "react";
import "./Brands.css";

const Brands = () => {
  // Using high-quality SVG/PNG placeholders for well-known tech brand styles
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  ];

  return (
    <div className="brands-container">
      <div className="brands-track">
        {/* We triple the array to ensure there's no "jump" during the infinite scroll */}
        {[...logos, ...logos, ...logos].map((logo, index) => (
          <div className="brand-item" key={index}>
            <img
              src={logo}
              alt={`Brand Logo ${index}`}
              className="brand-logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
