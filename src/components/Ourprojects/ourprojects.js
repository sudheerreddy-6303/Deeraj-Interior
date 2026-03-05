// src/components/ourprojects/ourprojects.js
import React, { useState } from 'react';
import './ourprojects.css';

const projects = [
  {
    title: "NCL Sindhu 3BHK Kompally Hyderabad",
    youtubeId: "mHPCmdXdE24",
    description: "Deeraj Interiors - NCL Sindhu Kompally Hyderabad",
    location: "Kompally, Hyderabad",
  },
  {
    title: "Gorgeous Makeover of Mr. Mahender Independent Flat Alwal Hyderabad",
    youtubeId: "7OiztXQrRcQ",
    description: "Gorgeous Makeover of Mr. Mahender Independent Flat Alwal Hyderabad",
    location: "Alwal, Hyderabad",
  },
  {
    title: "Beautifully Crafted Modular Kitchens",
    youtubeId: "P31tLqpvEtw",
    description: "Deeraj Interiors Kitchens - Premium modular kitchen designs",
    location: "Hyderabad & Andhra Pradesh",
  },
  {
    title: "LG Classic Home Interiors Hyderabad",
    youtubeId: "PxyZkSwWJ84",
    description: "LG Classic Home Interiors Promotion - Hyderabad",
    location: "Hyderabad",
  },
  {
    title: "Srinivasa Rao Beautiful Abode Uppal Hyderabad",
    youtubeId: "4gB_37HzH-4",
    description: "Elegant full home interiors for Mr. Srinivasa Rao - Luxury living in Uppal",
    location: "Uppal, Hyderabad",
  },
  {
    title: "Mr. Krishnamurthy & Mrs. Divya Madam 2BHK Alwal Hyderabad",
    youtubeId: "v-ILQISMb-I",
    description: "Stylish 2BHK home transformation with modern furnishings and false ceiling",
    location: "Alwal, Hyderabad",
  },
  {
    title: "Aparna Serenity 3BHK Render Video",
    youtubeId: "mVBJ4BrYV_w",
    description: "3BHK interior design render - Blending elegance, functionality, and comfort",
    location: "Hyderabad",
  },
  {
    title: "Deeraj Interiors - Beautiful Art Work & Deco Painting",
    youtubeId: "xqK0gUujh5U",
    description: "Showcasing stunning wall art, deco painting, and creative interior details",
    location: "Hyderabad",
  },
  {
    title: "Deeraj Interiors Home Furnishings & Decor Kompally",
    youtubeId: "pppQxUat30g",
    description: "Overview of home furnishings, interior decor services in Kompally",
    location: "Kompally, Hyderabad",
  },
];

const shorts = [
  {
    title: "Deeraj Interiors We Build Lives with Best Interiors",
    shortId: "dDqDsftrbwo",
    description: "Quick glimpse of how we transform homes with elegance",
  },
  {
    title: "Deeraj Interiors for Best Interiors",
    shortId: "S9B5kBucW4Q",
    description: "Discover premium interior solutions in seconds",
  },
  {
    title: "Home Decor Products for Sale",
    shortId: "oGQZBanPFMI",
    description: "Stylish decor items available now",
  },
  {
    title: "Wall Elevation with Helios Stone",
    shortId: "bWUV6fjJH1g",
    description: "Enhance your home with premium stone elevations",
  },
  {
    title: "Modular Work with Multi Boring Machine",
    shortId: "22BeoBm22wM",
    description: "Precision modular craftsmanship at Deeraj Interiors",
  },
  {
    title: "From Concept to Creation",
    shortId: "ZjAFOAHf0v4",
    description: "See how ideas turn into beautiful realities",
  },
];

const ITEMS_PER_PAGE = 6;

function OurProjects() {
  const [currentPage, setCurrentPage] = useState(1);
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const prevPage = () => goToPage(currentPage - 1);
  const nextPage = () => goToPage(currentPage + 1);

  return (
    <div className="our-projects-page">
      <div className="projects-container">
        <h1 className="page-title">OUR PROJECTS</h1>
        <p className="page-subtitle">Transforming Spaces with Elegance & Style</p>

        <div className="projects-grid">
          {visibleProjects.map((project, index) => (
            <div key={index} className="project-item">
              <div className="video-thumbnail-wrapper">
                <img
                  src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
                  alt={project.title}
                  className="thumbnail"
                  loading="lazy"
                />
                <a
                  href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="play-overlay"
                >
                  <div className="play-icon">▶</div>
                </a>
              </div>
              <div className="project-details">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <p className="project-brand">Deeraj Interiors</p>
                <p className="project-location">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination-controls">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="pagination-btn"
            >
              « Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="pagination-btn"
            >
              Next »
            </button>
          </div>
        )}

        {/* Shorts Section - Right to Left Marquee */}
        <div className="ourprojects-shorts-section">
          <h2 className="ourprojects-shorts-title">YOUTUBE SHORTS</h2>
          <p className="ourprojects-shorts-subtitle">Quick Inspiring Glimpses of Our Work</p>

          <div className="ourprojects-marquee-wrapper">
            <div className="ourprojects-marquee-track">
              {/* First set */}
              {shorts.map((short, index) => (
                <div key={index} className="ourprojects-short-item">
                  <div className="video-thumbnail-wrapper">
                    <img
                      src={`https://img.youtube.com/vi/${short.shortId}/hqdefault.jpg`}
                      alt={short.title}
                      className="thumbnail"
                      loading="lazy"
                    />
                    <a
                      href={`https://www.youtube.com/shorts/${short.shortId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="play-overlay"
                    >
                      <div className="play-icon">▶</div>
                    </a>
                  </div>
                  <div className="project-details">
                    <h3 className="project-title">{short.title}</h3>
                    <p className="project-desc">{short.description}</p>
                    <p className="project-brand">Deeraj Interiors</p>
                  </div>
                </div>
              ))}

              {/* Duplicate set for seamless infinite loop */}
              {shorts.map((short, index) => (
                <div key={`duplicate-${index}`} className="ourprojects-short-item">
                  <div className="video-thumbnail-wrapper">
                    <img
                      src={`https://img.youtube.com/vi/${short.shortId}/hqdefault.jpg`}
                      alt={short.title}
                      className="thumbnail"
                      loading="lazy"
                    />
                    <a
                      href={`https://www.youtube.com/shorts/${short.shortId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="play-overlay"
                    >
                      <div className="play-icon">▶</div>
                    </a>
                  </div>
                  <div className="project-details">
                    <h3 className="project-title">{short.title}</h3>
                    <p className="project-desc">{short.description}</p>
                    <p className="project-brand">Deeraj Interiors</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <footer className="company-page-footer">
          <div className="company-footer-content">
            <p className="company-footer-brand">DEERAJ INTERIORS</p>
            <p className="company-footer-address">
              PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR, <br />
              SUCHITRA CIRCLE, PET BASHEERABAD, HYDERABAD, TS 500067
            </p>
            <p className="company-footer-contact">+91 9000700930 / 9000700910</p>
          </div>
        </footer> */}
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

    </div>
  );
}

export default OurProjects;