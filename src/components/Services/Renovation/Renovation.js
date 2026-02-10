// src/components/services/renovation/renovation.js
import React from 'react';
import './Renovation.css';

const Renovation = () => {
  return (
    <section className="renovation-section">
      <div className="container">

        <header className="section-header">
          <h1 className="main-title">Renovation & Re-modelling</h1>
          <p className="section-subtitle">Breathe New Life into Your Spaces</p>
        </header>

        <div className="intro-text">
          <p>
            Whether it’s a home that’s lost its spark or a commercial space that
            needs a fresh identity, our renovation and re-modelling services are
            designed to <strong>transform</strong> — not just rebuild.
          </p>
          <p>
            From subtle upgrades to complete makeovers, we deliver renewed
            comfort, style, and functionality — perfectly aligned with your
            brand, lifestyle or business identity.
          </p>
        </div>

        <div className="expertise-grid">
          <div className="expertise-card">
            <div className="card-image-wrapper">
              <img
                src="https://simpolo-web.s3.ap-south-1.amazonaws.com/uploads/media/blog/Indian-Kitchen-Design-Ideas-for-Modern-Homes.jpg"
                alt="Modern Indian-style renovated kitchen with island and warm lighting"
                loading="lazy"
              />
            </div>
            <h3>Home Renovations</h3>
            <p>Modernising kitchens, upgrading bathrooms, living areas & more</p>
          </div>

          <div className="expertise-card">
            <div className="card-image-wrapper">
              <img
                src="https://bryanconstruction.com/wp-content/uploads/2022/11/SRAM-website-1920-2.jpg"
                alt="Modern open-plan office renovation with contemporary workspace design"
                loading="lazy"
              />
            </div>
            <h3>Office & Retail Upgrades</h3>
            <p>Enhancing aesthetics, flow, brand presence & boosting productivity</p>
          </div>

          <div className="expertise-card">
            <div className="card-image-wrapper">
              <img
                src="https://structuralwallremoval.com.au/wp-content/uploads/2025/07/WA-Wall-Removal-before-vs-after-1024x683.png"
                alt="Before and after structural renovation - open plan living space"
                loading="lazy"
              />
            </div>
            <h3>Structural Modifications</h3>
            <p>Space planning, wall reconfigurations, and architectural improvements</p>
          </div>

          <div className="expertise-card">
            <div className="card-image-wrapper">
              <img
                src="https://www.edwardmartin.com/cdn/shop/articles/blog-which-marble-floor-color-is-the-best-01-2000x1300.jpg?v=1744293326&width=1920"
                alt="Luxury marble and wood flooring finishes in modern interior"
                loading="lazy"
              />
            </div>
            <h3>Material & Finish Updates</h3>
            <p>Premium flooring, bespoke furniture, high-quality fixtures</p>
          </div>

          <div className="expertise-card">
            <div className="card-image-wrapper">
              <img
                src="https://thumbs.dreamstime.com/b/modern-living-room-orange-ambient-lighting-view-384137725.jpg"
                alt="Modern living room with warm ambient LED lighting and city view"
                loading="lazy"
              />
            </div>
            <h3>Lighting & Electrical Revamps</h3>
            <p>Smart lighting layouts, energy-efficient solutions & ambiance-enhancing designs</p>
          </div>
        </div>

        <div className="why-choose-us">
          <h2>Why Choose Us For Your Renovation?</h2>

          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                {/* Gear / Settings - Seamless Process */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </div>
              <h3>SEAMLESS PROCESS</h3>
              <p>From design to execution — we handle every detail while you carry on with life.</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                {/* Pencil / Edit - Customised Design */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
              </div>
              <h3>CUSTOMISED DESIGN</h3>
              <p>Tailored concepts that reflect your style and needs — never cookie-cutter.</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                {/* Shield / Star - Premium Quality */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3>PREMIUM QUALITY</h3>
              <p>Only the finest materials and skilled craftsmanship for lasting results.</p>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">
                {/* Clock - On-Time Delivery */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="13" r="8" />
                  <path d="M12 9v4l2 2" />
                </svg>
              </div>
              <h3>ON-TIME DELIVERY</h3>
              <p>We value your time as much as your satisfaction.</p>
            </div>
          </div>
        </div>

        <div className="transform-section">
          <h2>Transform Without Moving</h2>
          <p className="transform-text">
            A well-planned renovation can give you the feeling of a brand-new space
            without the hassle of relocating. Whether you dream of a sleek modern look,
            a warm rustic vibe, or a bold contemporary statement — our team ensures
            your renovated space matches your lifestyle & personality perfectly.
          </p>
        </div>

        <div className="cta-wrapper">
          <a href="/contact-us" className="btn-primary">
            REQUEST FOR A QUOTE
          </a>
        </div>
 <footer className="company-page-footer">
        <div className="company-footer-content">
          <p className="company-footer-brand">DEERAJ INTERIORS</p>
          <p className="company-footer-address">
            PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR, <br />
            SUCHITRA CIRCLE, PET BASHEERABAD, HYDERABAD, TS 500067
          </p>
          <p className="company-footer-contact">+91 9000700930</p>
        </div>
      </footer>

      </div>
    </section>
  );
};

export default Renovation;