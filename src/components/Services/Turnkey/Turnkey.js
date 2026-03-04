import React, { useState } from 'react';
import './Turnkey.css';

const TurnkeyProjects = () => {

  const [whatsappOpen, setWhatsappOpen] = useState(false);

  return (
    <section className="turnkey-section">
      <div className="turnkey-container">

        {/* Hero with New Wider Background Image */}
        <header className="turnkey-hero">
          <div className="turnkey-hero-content">
            <h1 className="turnkey-hero-title">Turnkey Projects</h1>
            <p className="turnkey-hero-subtitle">
              Vision to Reality — Delivered Seamlessly
            </p>

            <div className="turnkey-hero-description">
              <p>
                Our turnkey interior solutions take care of everything — from initial concept and detailed planning to flawless execution and final handover. Whether it's your dream home, modern office, retail outlet, restaurant, or large commercial space, we deliver stress-free results on time, within budget, and with uncompromising quality.
              </p>
            </div>
          </div>
        </header>

        {/* What We Offer */}
        <section className="turnkey-offer-section">
          <h2 className="turnkey-section-heading">What We Offer in Turnkey Projects</h2>

          <div className="turnkey-offer-cards">
            <div className="turnkey-offer-card">
              <div className="turnkey-offer-media">
                <img
                  src="https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team reviewing blueprints and timeline on construction site"
                  loading="lazy"
                />
              </div>
              <h3>Concept to Completion</h3>
              <p>Full-cycle handling: design, planning, approvals, execution, and final styling.</p>
            </div>

            <div className="turnkey-offer-card">
              <div className="turnkey-offer-media">
                <img
                  src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Modern modular kitchen installation in progress"
                  loading="lazy"
                />
              </div>
              <h3>Time-Bound Delivery</h3>
              <p>Structured timelines and efficient coordination to meet every deadline.</p>
            </div>

            <div className="turnkey-offer-card">
              <div className="turnkey-offer-media">
                <img
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Architects and engineers discussing project budget and scope"
                  loading="lazy"
                />
              </div>
              <h3>Budget Transparency</h3>
              <p>Clear, detailed estimates — no hidden costs or surprises.</p>
            </div>

            <div className="turnkey-offer-card">
              <div className="turnkey-offer-media">
                <img
                  src="https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Quality inspection of premium finishes and materials"
                  loading="lazy"
                />
              </div>
              <h3>Quality Assurance</h3>
              <p>Only premium materials, expert craftsmanship, and rigorous inspections.</p>
            </div>

            <div className="turnkey-offer-card">
              <div className="turnkey-offer-media">
                <img
                  src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Single coordinator managing multiple vendors on site"
                  loading="lazy"
                />
              </div>
              <h3>Single Point of Contact</h3>
              <p>One dedicated team manages vendors, site, and progress — hassle-free for you.</p>
            </div>
          </div>
        </section>

        {/* Why Stand Out */}
        <section className="turnkey-standout-section">
          <h2 className="turnkey-section-heading">Why Our Turnkey Services Stand Out</h2>

          <div className="turnkey-standout-grid">
            <div className="turnkey-standout-features">
              <ul className="turnkey-features-list">
                <li><strong>Expert Coordination</strong> — Architects, designers, engineers & contractors working in perfect sync.</li>
                <li><strong>Custom-Built for You</strong> — Every design tailored to your brand, lifestyle, or functional needs.</li>
                <li><strong>Hassle-Free Process</strong> — We manage supervision, vendors, procurement — you stay relaxed.</li>
                <li><strong>Move-in Ready</strong> — Fully furnished, equipped, and styled spaces delivered on time.</li>
              </ul>
            </div>

            <div className="turnkey-standout-visual">
              <img
                src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Luxurious completed modern Indian living room with clean lines and premium finishes"
                loading="lazy"
              />
            </div>
          </div>

          <blockquote className="turnkey-quote">
            “From the very first sketch to the final finishing touch — we bring your vision to life while you focus on what matters most.”
          </blockquote>
        </section>

        {/* CTA */}
        <div className="turnkey-cta-area">
          <a href="/contact-us" className="turnkey-cta-button">SCHEDULE A CALL</a>
        </div>

        {/* Footer */}
        {/* <footer className="turnkey-page-footer">
          <p>Privacy Policy • Terms & Conditions</p>
          <p className="turnkey-contact-info">
            DEAR INTERIORS<br />
            PLOT NO. 115, ABOVE TRENDS FOOTWEAR, SUCHITRA CIRCLE, BACHUPALLY ROAD,<br />
            HYDERABAD, TS 500090<br />
            +91 9000705000
          </p>
        </footer> */}

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
            <input type="text" placeholder="Project Type (Turnkey / Home / Office)" id="wa-project" />
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
                  `I am interested in discussing a turnkey interior project.`;

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
        <span className="di-footer-branch">Main Branch</span>
        <p>
          PLOT 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br/>
          SUCHITRA CIRCLE, PET BASHEERABAD,<br/>
          HYDERABAD, TS 500067
        </p>
      </div>

      <div className="di-footer-address-card">
        <span className="di-footer-branch">Second Branch</span>
        <p>
          PLOT 205, BESIDE HYPOTHETICAL PLAZA,<br/>
          JUBILEE HILLS CHECKPOST,<br/>
          HYDERABAD, TS 500033
        </p>
      </div>

    </div>

    <p className="di-footer-phone">+91 9000700910 / 9000700930</p>

    <p className="di-footer-copy">
      COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED.
    </p>
  </div>
</footer>

    </section>
  );
};

export default TurnkeyProjects;