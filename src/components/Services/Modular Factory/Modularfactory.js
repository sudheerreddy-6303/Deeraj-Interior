import React from 'react';
import './Modularfactory.css';

const ModularFactory = () => {
  return (
    <div className="mf-page">

      {/* Hero Section with Background Image + Overlay Text */}
      <header className="mf-hero">
        <div className="mf-hero-overlay">
          <h1>Modular Factory</h1>
          <p className="mf-hero-subtitle">
            Our State of Art manufacturing facility has spreads over 7000+ sqft. of covered area equipped with latest technology and most sophisticated European machine and technology. Our unit is designed and maintained as per industrial norms to ensure optimum utilisation of resources. Deeraj Interiors is one of the renowned manufacturers of modular furniture in South India with almost 5 years of manufacturing experience.
          </p>
        </div>
      </header>

      {/* Main Content - Text with Inline Images */}
      <section className="mf-main-content">
        <div className="mf-content-wrapper">
          <div className="mf-text-column">
            <h2>Modular Factory</h2>
            <p>
              We have a skilled workforce of more than 50 people and over 500-1000 modular sets are manufactured every month. Our furniture is built for convenience, comfort and durability. Deeraj Interiors uses nothing but the best materials and latest technologies to create beautiful and comfortable furniture of premium quality that’s designed to last! 
            </p>
            <p>
              The end goal is to produce highly durable, customizable, limited edition, bespoke pieces of furniture with materials of contrasting textures and forms. At Deeraj Interiors, we rely only on our in-house resources while furnishing goods. Our industry experts have carefully studied furniture in terms of form, design, essences, and finishes and will always choose the best option for you. With excellent work ethics and high production standards, we manufacture best modular furniture for residential & commercial sector.
            </p>
          </div>

          <div className="mf-image-column">
            <img 
              src="https://nishaninterio.com/wp-content/uploads/2025/04/Seo-Banner-Nishan-1024x576.webp" 
              alt="Modular furniture production line overview" 
              className="mf-inline-image mf-large"
            />
            <img 
              src="https://bizimages.withfloats.com/actual/4850dc4f3f11421aa3ecd0d85e36c965.jpg" 
              alt="Workers in modular factory assembling pieces" 
              className="mf-inline-image"
            />
          </div>
        </div>
      </section>

      {/* Bottom Gallery - OUR STATE-OF-THE-ART MODULAR FACTORY */}
      <section className="mf-gallery">
        <h2 className="mf-gallery-title">OUR STATE-OF-THE-ART MODULAR FACTORY</h2>
        <div className="mf-gallery-grid">
          <img 
            src="https://thumbs.dreamstime.com/b/advanced-cnc-wood-cutting-machine-precision-efficiency-action-showcases-modern-woodworking-technology-intricate-369820288.jpg" 
            alt="Advanced CNC machine in modular production" 
          />
          <img 
            src="https://www.techpro-cnc.com/wp-content/uploads/2024/10/CNC-router-panel-production-line-spindle.webp" 
            alt="Precision panel cutting CNC router" 
          />
          <img 
            src="https://thumbs.dreamstime.com/b/inside-large-bright-wooden-furniture-factory-woodworking-industry-spacious-well-lit-features-rows-worktables-wood-367434135.jpg" 
            alt="Spacious modular furniture factory interior" 
          />
          <img 
            src="https://apricotindia.com/AF_Front_About_Craft_1.jpg" 
            alt="Craftsmanship and machinery in factory" 
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mf-footer">
        <div className="mf-footer-links">
          Privacy Policy  •  Terms and Conditions
        </div>
        <div className="mf-company-info">
          <h3>DEERAJ INTERIORS</h3>
          <p>PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR, SUCHITRA CIRCLE, PET BASHEERABAD, HYDERABAD, TS 500067</p>
          <p>+91 9000700930</p>
          <p className="mf-copyright">COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default ModularFactory;