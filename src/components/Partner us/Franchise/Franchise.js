// src/components/Franchise.js
import React, { useState } from 'react';
import './Franchise.css';

const images = {
  heroBg: 'https://www.trustedfranchise.com/images/banner1.jpg',
  workspaceLaptop: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1200',
  modernLiving: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1200',
  whyChooseBg: 'https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?auto=format&fit=crop&q=85&w=2000',
  supportBg: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7df4a?auto=format&fit=crop&q=85&w=2000',
  investmentBg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=85&w=2000',
};

const Franchise = () => {
    const [whatsappOpen, setWhatsappOpen] = useState(false);
  return (
    <div className="franchise-page">
      {/* Hero */}
      <section className="franchise-hero-section" style={{ backgroundImage: `url(${images.heroBg})` }}>
        <div className="franchise-hero-overlay">
          <div className="franchise-hero-content">
            <h1 className="franchise-hero-title">Partner with Deeraj Interiors</h1>
            <p className="franchise-hero-subtitle">
              Join a proven leader in modular interiors • Build a profitable business with strong support and high demand
            </p>
            <a href="#contact" className="franchise-hero-cta">Explore Franchise Opportunity</a>
          </div>
        </div>
      </section>

      {/* Introduction & Growth */}
      <section className="franchise-intro-section">
        <div className="franchise-content-wrapper">
          <h2 className="franchise-section-title">Transforming Spaces • Empowering Entrepreneurs</h2>
          <div className="franchise-intro-content">
            <div className="franchise-intro-text">
              <p>
                The Indian interior design and modular solutions market is growing rapidly — driven by urbanization, rising disposable incomes, and demand for premium, functional spaces.
              </p>
              <p>
                Deeraj Interiors combines factory-precision manufacturing, design excellence, and structured execution — creating a scalable, low-risk franchise model with attractive margins and recurring revenue potential.
              </p>
            </div>
            <img
              src={images.workspaceLaptop}
              alt="Modern workspace representing efficient franchise operations"
              className="franchise-intro-image"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Why Become a Partner */}
      <section className="franchise-benefits-section">
        <div className="franchise-content-wrapper">
          <h2 className="franchise-section-title">Why Partner with Deeraj Interiors?</h2>
          <div className="franchise-benefits-grid">
            <div className="franchise-benefit-card">
              <h3>Proven & Low-Risk Model</h3>
              <p>Established systems, brand recognition, and minimal operational risk in one of India's fastest-growing sectors.</p>
            </div>
            <div className="franchise-benefit-card">
              <h3>Multiple Revenue Streams</h3>
              <p>Residential, commercial, bulk builder projects, renovations — diversified income with strong 30-45% margins.</p>
            </div>
            <div className="franchise-benefit-card">
              <h3>End-to-End Support</h3>
              <p>From showroom setup and staff training to marketing, procurement, and ongoing R&D — full central team backing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content – About + Fixed BG Sections */}
      <section className="franchise-main-content-section">
        <div className="franchise-content-wrapper">
          {/* About */}
          {/* <div className="franchise-about-grid">
            <div className="franchise-about-text">
              <h2 className="franchise-section-title franchise-text-left">About Deeraj Interiors</h2>
              <p>
                We are a process-driven modular interiors brand delivering precision-engineered, factory-finished solutions with unmatched quality and timelines.
              </p>
              <ul className="franchise-feature-list">
                <li>Modular Kitchens & Smart Wardrobes</li>
                <li>Commercial & Turnkey Interiors</li>
                <li>Home Décor & Furnishings</li>
                <li>Bulk Production for Builders & Developers</li>
              </ul>
            </div>
            <img
              src={images.modernLiving}
              alt="Premium modern living space showcasing our design expertise"
              className="franchise-about-image"
              loading="lazy"
            />
          </div> */}

          {/* Why Choose Us – full-width bg */}
          <div className="franchise-fixed-bg-section franchise-why-choose-section" style={{ backgroundImage: `url(${images.whyChooseBg})` }}>
            <div className="franchise-content-wrapper">
              <h2 className="franchise-section-title"> Our Franchise Model?</h2>
              <div className="franchise-why-grid">
                <div className="franchise-why-card">
                  <h3>Proven Growth Trajectory</h3>
                  <p>Fast-scaling business with successful replication across markets.</p>
                </div>
                <div className="franchise-why-card">
                  <h3>Exceptional Client Satisfaction</h3>
                  <p>High repeat & referral business driven by quality & service.</p>
                </div>
                <div className="franchise-why-card">
                  <h3>Modern Tools & Systems</h3>
                  <p>Advanced design software, ERP, and streamlined operations.</p>
                </div>
                <div className="franchise-why-card">
                  <h3>Strong ROI Potential</h3>
                  <p>30–40% returns achievable within 18–24 months.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Franchise Support */}
          <div className="franchise-fixed-bg-section franchise-support-section" style={{ backgroundImage: `url(${images.supportBg})` }}>
            <div className="franchise-content-wrapper">
              <h2 className="franchise-section-title">Comprehensive Franchise Support</h2>
              <div className="franchise-support-grid">
                <div className="franchise-support-card">
                  <h3>Showroom Design & Setup</h3>
                  <p>Professional layout, branding, and experience-center creation guidance.</p>
                  <img src="https://www.natrajfurniture.com/retail-furniture/digital-displays/digital-displays6.jpg" alt="Elegant showroom" className="franchise-support-img" loading="lazy" />
                </div>
                <div className="franchise-support-card">
                  <h3>Training & Operations</h3>
                  <p>Design, sales, project management, and customer service training programs.</p>
                  <img src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800" alt="Team training" className="franchise-support-img" loading="lazy" />
                </div>
                <div className="franchise-support-card">
                  <h3>Centralized Support</h3>
                  <p>Ongoing material innovation, national campaigns, and procurement support.</p>
                  <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" alt="R&D collaboration" className="franchise-support-img" loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          {/* Investment & Returns */}
          <div className="franchise-fixed-bg-section franchise-investment-section" style={{ backgroundImage: `url(${images.investmentBg})` }}>
            <div className="franchise-content-wrapper">
              <h2 className="franchise-section-title">Investment & Returns</h2>
              <p className="franchise-investment-intro">
                Our franchise model offers attractive financial prospects with clear investment parameters and strong earning potential. The numbers speak for themselves.
              </p>
             
              <div className="franchise-investment-metrics-grid">
                <div className="franchise-metric-card">
                  <h3>1,000-2,500 Square Feet</h3>
                  <p className="franchise-metric-label">Optimal store size for maximum impact</p>
                </div>
                <div className="franchise-metric-card">
                  <h3>₹25-35L CapEx Investment</h3>
                  <p className="franchise-metric-label">Initial capital expenditure range</p>
                </div>
                <div className="franchise-metric-card">
                  <h3>10-12 Break-even Months</h3>
                  <p className="franchise-metric-label">Quick path to profitability</p>
                </div>
                <div className="franchise-metric-card">
                  <h3>₹1Cr+ Annual Revenue</h3>
                  <p className="franchise-metric-label">Expected yearly revenue potential</p>
                </div>
              </div>
              <p className="franchise-investment-highlight">
                Speak with our team for detailed investment summary and territory availability.
              </p>
            </div>
          </div>

          {/* --- MARKET OPPORTUNITY --- */}
          <section className="franchise-section franchise-market-opportunity franchise-bg-white">
            <div className="franchise-container">
              <div className="franchise-market-flex-layout">
                <div className="franchise-market-text-box">
                  <h2 className="franchise-heading-md">Market Opportunity</h2>
                  <p className="franchise-lead-text">
                    The interior design and turnkey project market is experiencing explosive growth driven by urbanization,
                    rising disposable incomes, and changing lifestyle preferences.
                  </p>
                  <p className="franchise-description-text">
                    This presents an unprecedented opportunity for franchise partners.
                    Growing demand spans across residential renovations, commercial fit-outs, and new construction projects.
                    The market shows no signs of slowing down, with consistent year-over-year growth projections.
                  </p>
                </div>
                <div className="franchise-market-graphic-box">
                  <div className="franchise-floating-stat-card">
                    <strong>Explosive</strong>
                    <span>Market Growth</span>
                  </div>
                  <img
                    src="https://img.freepik.com/free-photo/future-visions-business-technology-concept_23-2151893450.jpg?semt=ais_user_personalization&w=740&q=80"
                    alt="Growth analytics"
                    className="franchise-market-img"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* --- HOW TO GET STARTED (PROCESS) --- */}
          <section className="franchise-section franchise-process-section franchise-bg-warm">
            <div className="franchise-container-franchise">
              <div className="franchise-section-header franchise-text-center">
                <span className="franchise-eyebrow">The Journey</span>
                <h2 className="franchise-heading-md">How to Get Started?</h2>
              </div>
              <div className="franchise-process-steps-grid">
                {/* Step 1 */}
                <div className="franchise-process-step-card">
                  <div className="franchise-step-image">
                    <img src="https://img.freepik.com/free-vector/online-survey-analysis-electronic-data-collection-digital-research-tool-computerized-study-analyst-considering-feedback-results-analysing-info_335657-854.jpg?semt=ais_user_personalization&w=740&q=80" alt="Submit Inquiry" />
                    <div className="franchise-step-number">01</div>
                  </div>
                  <div className="franchise-step-content">
                    <h3>Submit Inquiry</h3>
                    <p>Complete our franchise inquiry form with your professional details and preferred territory location.</p>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="franchise-process-step-card">
                  <div className="franchise-step-image">
                    <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800" alt="Consultation" />
                    <div className="franchise-step-number">02</div>
                  </div>
                  <div className="franchise-step-content">
                    <h3>Schedule Consultation</h3>
                    <p>Meet with our dedicated franchise team to discuss strategic opportunities, requirements, and scalability.</p>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="franchise-process-step-card">
                  <div className="franchise-step-image">
                    <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" alt="Sign Agreement" />
                    <div className="franchise-step-number">03</div>
                  </div>
                  <div className="franchise-step-content">
                    <h3>Sign Agreement</h3>
                    <p>Finalize the franchise partnership agreement and initiate the site selection and setup process.</p>
                  </div>
                </div>
                {/* Step 4 */}
                <div className="franchise-process-step-card">
                  <div className="franchise-step-image">
                    <img src="https://cdn.shopify.com/s/files/1/0610/4809/4897/files/lawyer_Office_Decoration_Ideas.jpg?v=1697755019" alt="Launch Store" />
                    <div className="franchise-step-number">04</div>
                  </div>
                  <div className="franchise-step-content">
                    <h3>Launch Store</h3>
                    <p>Open your premium franchise with full operational support, marketing kits, and expert team guidance.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div id="contact" className="franchise-cta-section">
            <div className="franchise-content-wrapper">
              <h2 className="franchise-section-title">Ready to Build Your Future with Deeraj Interiors?</h2>
              <p className="franchise-cta-text">
                Connect with us today to discuss franchise opportunities in your city.
              </p>
              <div className="franchise-cta-button-group">
                <a href="tel:+919876543210" className="franchise-cta-button franchise-primary">Contact Franchise Team In WhatsApp</a>
                {/* <a href="mailto:franchise@deerajinteriors.com" className="franchise-cta-button franchise-secondary">Send Inquiry</a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <input type="text" placeholder="Project Type (Home / Office / Consultation)" id="wa-project" />
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
                  `I am interested in discussing my interior project.`;
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

    <p className="di-footer-phone">+91 9000700910 / 9000700930 9014300930 </p>

    <p className="di-footer-copy">
     COPYRIGHT © DEERAJ TECHNOLOGIES PRIVATE LIMITED - ALL RIGHTS RESERVED.
    </p>
  </div>
</footer>

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
     
    </div>
  );
};

export default Franchise;