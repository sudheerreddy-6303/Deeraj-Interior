// import React from 'react';
import React, { useState } from 'react';
import './businessassociate.css';

const BusinessAssociate = () => {
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  return (
    <div className="business-associate-wrapper">
      
      {/* HERO SECTION FIX: Perfect Left/Right Split */}
      <div className="business-hero-section">
        
        {/* Left Side: All Text Content */}
        <div className="business-hero-content-left">
          <h1 className="business-main-title">
            Earn Additional Income
            <br />
            with Minimal Time Investment
          </h1>

          <div className="business-highlight-box">
            <h2>EARN ADDITIONAL INCOME WITH MINIMAL TIME INVESTMENT</h2>
            <p className="business-lead-text">
              Transform your entrepreneurial ambitions into a lucrative partnership with Deeraj Interiors — 
              a premier interior design company in the booming & sustainable home interior sector.
            </p>
          </div>

          <div className="business-freedom-content">
            <h2 style={{color: 'orangered'}}>YOUR GATEWAY TO FINANCIAL FREEDOM</h2>
            <p>
              Our Business Associate Program offers an extraordinary growth opportunity — expected to reach 
              <strong> ₹1.2 billion by 2026</strong>. Join a proven business model with comprehensive support.
            </p>
            <div className="business-growth-stat">
              <span className="business-big-number">₹1.2 Billion</span>
              <span className="business-by-year">by 2026</span>
            </div>
          </div>
        </div>

        {/* Right Side: Stacked Images */}
        <div className="business-hero-images-right">
          <img
            src="https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/11/commercial-interior-design-open-office-space-by-Decorilla-1024x683.jpeg?width=900"
            alt="Modern workspace"
            className="business-stacked-image business-top-image"
            loading="lazy"
          />
          <img 
            src="https://cdn.palmspringslife.com/media/2025/11/12222722/DSCF1933-cc.jpg" 
            alt="Financial growth luxury home" 
            className="business-stacked-image business-bottom-image"
            loading="lazy"
          />
        </div>

      </div>

      <section className="business-who-should-join">
        <h2>WHO SHOULD JOIN OUR ELITE NETWORK?</h2>
        <div className="business-cards-grid">
          <div className="business-card">
            <h3>Ambitious Entrepreneurs</h3>
            <img src="https://img.freepik.com/premium-photo/two-businessmen-shaking-hands-while-standing-modern-office_979520-65371.jpg" alt="Business professionals" className="business-card-image" loading="lazy" />
            <p>Business-minded individuals with a passion for growth and the drive to succeed in a competitive marketplace.</p>
          </div>
          <div className="business-card">
            <h3>Networking Professionals</h3>
            <img src="https://as1.ftcdn.net/jpg/04/49/75/24/1000_F_449752429_cBk7nGIq2lf9DGOZepoeNpDE4ZEmoqYt.jpg" alt="Group business meeting" className="business-card-image" loading="lazy" />
            <p>People with strong interpersonal skills and established connections — your network will be your greatest asset.</p>
          </div>
          <div className="business-card">
            <h3>Income Diversifiers</h3>
            <img src="https://res.cloudinary.com/zenbusiness/q_auto,w_6049,h_4033/v1/shared-assets/stk/home-office-business-name-idea.jpg" alt="Professional working" className="business-card-image" loading="lazy" />
            <p>Professionals seeking to supplement primary income with a scalable, sustainable stream that doesn’t disturb current commitments.</p>
          </div>
        </div>
      </section>

      <section className="business-why-choose-us">
        <h2>WHY THIS PROGRAM IS YOUR BEST INVESTMENT</h2>
        <div className="business-benefits-grid">
          <div className="business-benefit-card">
            <h3>Minimal Time Investment</h3>
            <img src="https://www.salesforce.com/blog/wp-content/uploads/sites/2/2025/06/Side-Hustle-SMB-1.jpg" alt="Side hustle" className="business-benefit-image" loading="lazy" />
            <p>2–3 hours/day effort maximum → measurable results with our streamlined processes & systems.</p>
          </div>
          <div className="business-benefit-card">
            <h3>Complete Business Support</h3>
            <img src="https://images.pexels.com/photos/7794078/pexels-photo-7794078.jpeg" alt="Happy professional" className="business-benefit-image" loading="lazy" />
            <p>Marketing, training, operational guidance — you're never alone on this journey.</p>
          </div>
          <div className="business-benefit-card business-highlight" >
            <h3 style={{color: 'orangered'}}>Premium Brand Association</h3>
            <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" alt="Brand association" className="business-benefit-image" loading="lazy" />
            <p>Leverage Deeraj Interiors' multi-brand premium market presence to instantly gain client credibility.</p>
          </div>
        </div>
      </section>

      <section className="business-about-company">
        <h2>ABOUT DEERAJ INTERIORS</h2>
        <div className="business-segments">
          <div className="business-segment">
            <h3>Home Interiors</h3>
            <img src="https://media.designcafe.com/wp-content/uploads/2024/02/22183423/luxury-kitchen-designs.jpg" alt="Home Interiors" className="business-segment-image" loading="lazy" />
            <ul>
              <li>Modular Kitchens</li>
              <li>Luxury Wardrobes</li>
              <li>Customised Solutions</li>
            </ul>
          </div>
          <div className="business-segment">
            <h3>Commercial Spaces</h3>
            <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Modern-Office-Interior-with-Open-Floor-Plan-scaled.jpeg" alt="Commercial Spaces" className="business-segment-image" loading="lazy" />
            <ul>
              <li>Corporate Offices</li>
              <li>Co-working Hubs</li>
              <li>Reception Areas</li>
            </ul>
          </div>
          <div className="business-segment">
            <h3>Institutional Projects</h3>
            <img src="https://www.flipspaces.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fm36fefkw%2Ffs-prod%2F51cabe54576f9c59be72bc83f9adf10a850747f9-917x638.webp&w=1920&q=75" alt="Institutional Projects" className="business-segment-image" loading="lazy" />
            <ul>
              <li>Educational Institutes</li>
              <li>Healthcare Facilities</li>
              <li>Public Spaces</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="business-why-stands-apart">
        <div className="business-stands-apart-header">
          <h2>WHY DEERAJ INTERIORS STANDS APART</h2>
          <div className="business-proven-model">
            <h3>Proven Business Model</h3>
            <p>Our stable, fast-growing approach has generated consistent returns for associates over 8+ years in the market.</p>
          </div>
          <div className="business-customer-satisfaction">
            <h3>Exceptional Customer Satisfaction</h3>
            <p>98% customer retention rate and 4.8/5 average rating demonstrate our commitment to quality and service excellence.</p>
          </div>
          <div className="business-tech-integration">
            <h3>Technology Integration</h3>
            <p>Advanced design software, project management tools, and CRM systems streamline operations and enhance client experience.</p>
          </div>
        </div>
        <div className="business-stands-apart-image">
          <img src="https://thumbs.dreamstime.com/b/happy-young-indian-arab-business-man-wearing-suit-headshot-portrait-ceo-leader-professional-manager-smiling-expert-businessman-257487832.jpg" alt="Businessman" className="business-stands-apart-img" loading="lazy" />
        </div>
      </section>

      <section className="business-your-role">
        <h2>YOUR ROLE AS A BUSINESS ASSOCIATE</h2>
        <div className="business-your-role-grid">
          <div className="business-role-image-left">
            <img src="https://www-cdn.usemotion.com/webflow-export/blog/best-daily-planner-apps/667ae085abae990ac0cd0edc_NotionCalendar_qj3n.webp" alt="Planner" className="business-role-img" loading="lazy" />
          </div>
          <div className="business-role-content-right">
            <p className="business-role-subtitle">Daily Commitment: 2-3 Hours</p>
            <p>Focus your efforts on high-impact activities that drive results. Your time will be spent on:</p>
            <ul className="business-role-list">
              <li><strong>Lead Generation:</strong> Utilise your network to identify potential clients</li>
              <li><strong>Client Engagement:</strong> Conduct initial consultations and present our comprehensive service offerings</li>
              <li><strong>Collaboration:</strong> Work closely with our design team to ensure seamless project delivery and client satisfaction</li>
            </ul>
            <p>Our structured approach maximises your earning potential while minimising time investment. It is fully supported by our proven systems and experienced team.</p>
          </div>
        </div>
      </section>

      <section className="business-rewards-recognition">
        <h2>LUCRATIVE REWARDS & RECOGNITION</h2>
        <div className="business-rewards-grid">
          <div className="business-reward-card">
            <h3>Average Monthly Incentives</h3>
            <div className="business-reward-value">25K</div>
            <p>Competitive commission structure on every successful project closure</p>
          </div>
          <div className="business-reward-card">
            <h3>Performance Bonuses</h3>
            <div className="business-reward-value">50K</div>
            <p>Additional rewards for achieving monthly closure targets and milestones</p>
          </div>
          <div className="business-reward-card">
            <h3>Annual Growth Rate</h3>
            <div className="business-reward-value">15%</div>
            <p>Typical associate income growth year-over-year with expanding client base</p>
          </div>
        </div>
      </section>

      <section className="business-investment-analysis">
        <h2>INVESTMENT & RETURNS ANALYSIS</h2>
        <div className="business-smart-strategy">
          {/* <h3 style={{color: 'orangered'}}>Smart Investment Strategy</h3> */}
          {/* <p>Unlike traditional business ventures requiring substantial capital investment in inventory, infrastructure, or equipment, our Business Associate Program requires only time and commitment.</p> */}
          <div className="business-strategy-grid">
            <div className="business-strategy-content-left">
              <div className="business-key-highlights">
                <h4>Key Financial Highlights</h4>
              <ul>
                  <li>Zero inventory investment required</li>
                  <li>No office rental or infrastructure costs</li>
                  <li>Performance-based earning structure</li>
                  <li>Investment recovery typically within 2-5 years</li>
                  <li>Scalable income potential with growing client base</li>
                  <li>Most associates achieve substantial returns by year two</li>
                  <li>High-margin returns driven by premium project ticket sizes</li>
                  <li>Zero hidden franchise fees or ongoing maintenance charges</li>
                  <li>Uncapped earning potential with accelerated payout structures.</li>
                </ul>
              </div>
            </div>
            <div className="business-strategy-image-right">
              <img src="https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/modern-office-design-for-a-large-conference-room.jpeg" alt="Workspace" className="business-strategy-img" loading="lazy" />
            </div>
          </div>
        </div>

        <h3 style={{marginTop: '60px', color: 'orangered'}}>SIMPLE ONBOARDING PROCESS</h3>
        <p>The entire process typically takes 10-14 days from application to active associate status.</p>

        <div className="business-onboarding-grid">
          <div className="business-onboarding-step">
            <img src="https://opengov.com/wp-content/uploads/2021/03/business-licensing-laptop-1024x589.png" alt="Application" className="business-onboarding-img" loading="lazy" />
            <h4>1. Submit Application</h4>
            <p>Complete our comprehensive inquiry form with your professional background, income expectations, and preferred operating location.</p>
          </div>
          <div className="business-onboarding-step">
            <img src="https://see-me-strapi.s3.eu-west-1.amazonaws.com/employee_orientation_2408ada6a8.jpg" alt="Orientation" className="business-onboarding-img" loading="lazy" />
            <h4>2. Orientation Session</h4>
            <p>Attend an interactive session covering our business model, market opportunities, professional guidance, and success strategies with current associates.</p>
          </div>
          <div className="business-onboarding-step">
            <img src="https://thumbs.dreamstime.com/b/close-up-handshake-over-signed-contract-pens-wooden-table-image-showing-symbolizing-agreement-partnership-two-386392396.jpg" alt="Agreement" className="business-onboarding-img" loading="lazy" />
            <h4>3. Agreement Signing</h4>
            <p>Formalize your partnership through our agreement, outlining terms, commitments, and mutual support.</p>
          </div>
          <div className="business-onboarding-step">
            <img src="https://thumbs.dreamstime.com/b/businessman-touching-virtual-startup-arrow-graph-target-icon-using-laptop-concept-business-growth-strategy-financial-429426050.jpg" alt="Earning" className="business-onboarding-img" loading="lazy" />
            <h4>4. Begin Earning</h4>
            <p>Start generating income immediately with full support from our experienced team and proven systems.</p>
          </div>
        </div>

        {/* <div className="business-ready-transform">
          <h3>READY TO TRANSFORM YOUR FUTURE?</h3>
          <div className="business-requirements">
            <h4>Application Requirements</h4>
            <p>To ensure the best fit for both parties, please provide:</p>
            <ul>
              <li><strong>Personal Details:</strong> Full name, email, phone number</li>
              <li><strong>Professional Background:</strong> Current income range and experience</li>
              <li><strong>Location Preferences:</strong> Address and preferred operating territory</li>
              <li><strong>Availability:</strong> Time commitment and start date preferences</li>
            </ul>
          </div>
          <div className="business-steps">
            <h4>Next Steps</h4>
            <p>Submit your application today within 48 hours to schedule your orientation session. Don't miss this opportunity to join India's fastest-growing interior design network!</p>
          </div>
        </div> */}

        <div className="business-connect-today">
          <h3>CONNECT WITH US TODAY</h3>
          <div className="business-connect-grid">
            <div className="business-connect-card">
              <img src="https://cdn-icons-png.flaticon.com/512/5968/5968898.png" alt="Phone Icon" className="business-connect-icon" />
              <h4>Phone Consultation</h4>
              <p>Schedule a personalized discussion about the Business Associate Program and how it aligns with your goals.</p>
            </div>
            <div className="business-connect-card">
              <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Email Icon" className="business-connect-icon" />
              <h4>Email Inquiry</h4>
              <p>Send your questions and receive detailed information about our program, requirements, and next steps.</p>
            </div>
            <div className="business-connect-card">
              <img src="https://cdn-icons-png.flaticon.com/512/684/684809.png" alt="Office Visit Icon" className="business-connect-icon" />
              <h4>Office Visit</h4>
              <p>Visit our showroom to experience our products firsthand and meet with our Business Development team.</p>
            </div>
          </div>

          <div className="business-success-story">
            <h3>YOUR SUCCESS STORY BEGINS NOW</h3>
            <p className="business-success-text">Take Action Today</p>
            <p>The interior design market won't wait, neither should you. With limited positions available in each territory, early applicants receive priority consideration and enhanced support during the initial months.</p>
            <div className="business-success-images">
              <img src="https://i.pinimg.com/originals/51/37/d8/5137d83126afa6c13fb63d919ff233b6.jpg" alt="Luxury interior" className="business-success-img" loading="lazy" />
              <img src="https://homeone.in/wp-content/uploads/2024/12/Premium-finish-kitchen-design.png" alt="Kitchen design" className="business-success-img" loading="lazy" />
            </div>
          </div>

          <div className="business-footer-info">
            <p>Privacy Policy | Terms & Conditions</p>
            <p>DEERAJ INTERIORS</p>
            <p>PLOT 119, ABOVE RELIANCE TRENDS FOOTWEAR, SUCHITRA CIRCLE, PET BASHEERABAD, HYDERABAD, 500067</p>
          </div>
        </div>
      </section>

      <div className="business-cta-final">
        <button className="business-cta-button">
          Join Our Business Associate Program Today
        </button>
        <p className="business-small-note">
          Limited slots • Proven model • Full training provided
        </p>
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
      COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED.
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

export default BusinessAssociate;