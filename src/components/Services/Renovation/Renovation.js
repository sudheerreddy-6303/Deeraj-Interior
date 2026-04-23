// src/components/services/renovation/renovation.js
import React, { useState } from 'react';
import './Renovation.css';

const Renovation = () => {

  const [whatsappOpen, setWhatsappOpen] = useState(false);

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
  {/* Card 1: Home Renovations */}
  <div className="expertise-card">
    <div className="card-image-wrapper">
      <img
        src="https://images.unsplash.com/photo-1612935089040-89195ef54677?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Modern Kitchen Renovation"
        loading="lazy"
      />
    </div>
    <h3>Home Renovations</h3>
    <p>Modernising kitchens, upgrading bathrooms, living areas & more</p>
  </div>

  {/* Card 2: Office & Retail Upgrades */}
  <div className="expertise-card">
    <div className="card-image-wrapper">
      <img
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
        alt="Modern open-plan office renovation"
        loading="lazy"
      />
    </div>
    <h3>Office & Retail Upgrades</h3>
    <p>Enhancing aesthetics, flow, brand presence & boosting productivity</p>
  </div>

  {/* Card 3: Structural Modifications */}
  <div className="expertise-card">
    <div className="card-image-wrapper">
      <img
        src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800"
        alt="Open plan living space structural modification"
        loading="lazy"
      />
    </div>
    <h3>Structural Modifications</h3>
    <p>Space planning, wall reconfigurations, and architectural improvements</p>
  </div>

  {/* Card 4: Material & Finish Updates */}
  <div className="expertise-card">
    <div className="card-image-wrapper">
      <img
        src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&q=80&w=800"
        alt="Luxury material and wood flooring finishes"
        loading="lazy"
      />
    </div>
    <h3>Material & Finish Updates</h3>
    <p>Premium flooring, bespoke furniture, high-quality fixtures</p>
  </div>

  {/* Card 5: Lighting & Electrical Revamps */}
  <div className="expertise-card">
    <div className="card-image-wrapper">
      <img
        src="https://images.unsplash.com/photo-1547393947-a6a221f74e59?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Modern living room with warm ambient lighting"
        loading="lazy"
      />
    </div>
    <h3>Lighting & Electrical Revamps</h3>
    <p>Smart lighting layouts, energy-efficient solutions & ambiance-enhancing designs</p>
  </div>

  {/* Card 6: Bathroom Transformations */}
  <div className="expertise-card">
    <div className="card-image-wrapper">
      <img
        src="https://plus.unsplash.com/premium_photo-1720486620020-c70516e9b69f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Luxury bathroom remodel"
        loading="lazy"
      />
    </div>
    <h3>Bathroom Transformations</h3>
    <p>Converting outdated washrooms into luxurious, modern sanctuaries</p>
  </div>
</div>

 <div className="why-choose-us">
  <h2>Why Choose Us For Your Renovation?</h2>

  <div className="benefits-grid">
    {/* Card 1 */}
    <div className="benefit-item">
      <div className="benefit-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>
      <h3>SEAMLESS PROCESS</h3>
      <p>From design to execution — we handle every detail while you carry on with life.</p>
    </div>

    {/* Card 2 */}
    <div className="benefit-item">
      <div className="benefit-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      </div>
      <h3>CUSTOMISED DESIGN</h3>
      <p>Tailored concepts that reflect your style and needs — never cookie-cutter.</p>
    </div>

    {/* Card 3 */}
    <div className="benefit-item">
      <div className="benefit-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>
      <h3>PREMIUM QUALITY</h3>
      <p>Only the finest materials and skilled craftsmanship for lasting results.</p>
    </div>

    {/* Card 4 */}
    <div className="benefit-item">
      <div className="benefit-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="13" r="8" />
          <path d="M12 9v4l2 2" />
        </svg>
      </div>
      <h3>ON-TIME DELIVERY</h3>
      <p>We value your time as much as your satisfaction.</p>
    </div>

    {/* Card 5 */}
    <div className="benefit-item">
      <div className="benefit-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      </div>
      <h3>TRANSPARENT PRICING</h3>
      <p>Clear, upfront costs with no hidden fees or unexpected surprises.</p>
    </div>

    {/* --- NEW 6TH CARD --- */}
    <div className="benefit-item">
      <div className="benefit-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      </div>
      <h3>AFTER-CARE SUPPORT</h3>
      <p>Our commitment doesn't end at handover. We provide reliable warranties and support.</p>
    </div>

  </div>
</div>

       <div className="transform-section">
  <div className="transform-inner">
    <h2>Transform <span>Without Moving</span></h2>
    <p className="transform-text">
      A well-planned renovation can give you the feeling of a brand-new space
      without the hassle of relocating. Whether you dream of a sleek modern look,
      a warm rustic vibe, or a bold contemporary statement — our team ensures
      your renovated space matches your lifestyle & personality perfectly.
    </p>
  </div>
</div>

        <div className="cta-wrapper">
          <a href="/contact-us" className="btn-primary">
            REQUEST FOR A QUOTE
          </a>
        </div>

     

      </div>

      {/* ================= WHATSAPP FLOAT ================= */}
      <div className="whatsapp-container">

        <div
          className="whatsapp-float"
          onClick={() => setWhatsappOpen(!whatsappOpen)}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
        </div>

        {whatsappOpen && (
          <div className="whatsapp-popup">
            <h3>Start WhatsApp Chat</h3>

            <input type="text" placeholder="Your Name" id="wa-name" />
            <input type="text" placeholder="Project Type (Renovation / Remodeling)" id="wa-project" />
            <textarea placeholder="Your Message" id="wa-message"></textarea>

            <button
              onClick={() => {
                const name = document.getElementById("wa-name").value;
                const project = document.getElementById("wa-project").value;
                const message = document.getElementById("wa-message").value;

                const finalMessage =
                  `Hello Deeraj Interiors,%0A%0A` +
                  `Name: ${name}%0A` +
                  `Project: ${project}%0A` +
                  `Message: ${message}%0A%0A` +
                  `I am interested in renovation/remodelling services.`;

                window.open(
                  `https://wa.me/919000700930?text=${finalMessage}`,
                  "_blank"
                );
              }}
            >
              Chat on WhatsApp
            </button>
          </div>
        )}
      </div>
<footer className="di-footer">
  <div className="di-footer-container">
    <p className="di-footer-links">Privacy Policy | Terms and Conditions</p>
    <p className="di-footer-title"><strong>DEERAJ INTERIORS</strong></p>

    {/* Split Address Section */}
    <div className="di-footer-addresses">
      
      <div className="di-footer-address-card">
        <span className="di-footer-branch">Experience Center</span>
        <p>
          PLOT 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br/>
          SUCHITRA CIRCLE, PET BASHEERABAD,<br/>
          HYDERABAD, TS 500067
        </p>
      </div>

      <div className="di-footer-address-card">
        <span className="di-footer-branch">Modular Factory</span>
        <p>
          Pudur Medchal,<br/>
          5 Minutes From ORR Exit No:06,<br/>
          HYDERABAD, TS 500033
        </p>
      </div>

    </div>

    <p className="di-footer-phone">+91 9000700910 / 9000700930 /9014300930</p>

    <p className="di-footer-copy">
      COPYRIGHT © DEERAJ TECHNOLOGIES PRIVATE LIMITED - ALL RIGHTS RESERVED.
    </p>
  </div>
</footer>
{/* ── NEW: Phone Call Floating Button ── */}
   {/* ── Phone Call Floating Button ── */}
{/* <div className="home-phone-container">
  <a 
    href="/contact-us" 
    className="home-phone-float"
    title="Contact Us / Call"
  >
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M20.9999 15.46C20.1199 15.46 19.2499 15.3 18.4099 15.06C18.1199 14.99 17.8099 15.05 17.5799 15.29L15.4099 18.12C12.2499 16.67 7.32988 11.79 5.87988 8.61998L8.70988 6.41998C8.95988 6.16998 9.01988 5.85998 8.94988 5.58998C8.69988 4.74998 8.53988 3.87998 8.53988 2.99998C8.53988 2.44998 8.08988 1.99998 7.53988 1.99998H4.49988C3.94988 1.99998 3.49988 2.44998 3.49988 2.99998C3.49988 13.28 10.7199 20.5 20.9999 20.5C21.5499 20.5 21.9999 20.05 21.9999 19.5V16.46C21.9999 15.91 21.5499 15.46 20.9999 15.46Z" 
        fill="#ffffff"
      />
    </svg>
  </a>
</div> */}
    </section>
  );
};

export default Renovation;