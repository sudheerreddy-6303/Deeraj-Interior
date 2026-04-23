// // src/components/ourprojects/ourprojects.js
// import React, { useState } from 'react';
// import './ourprojects.css';

// const projects = [
//   {
//     title: "NCL Sindhu 3BHK Kompally Hyderabad",
//     youtubeId: "mHPCmdXdE24",
//     description: "Deeraj Interiors - NCL Sindhu Kompally Hyderabad",
//     location: "Kompally, Hyderabad",
//   },
//   {
//     title: "Gorgeous Makeover of Mr. Mahender Independent Flat Alwal Hyderabad",
//     youtubeId: "7OiztXQrRcQ",
//     description: "Gorgeous Makeover of Mr. Mahender Independent Flat Alwal Hyderabad",
//     location: "Alwal, Hyderabad",
//   },
//   {
//     title: "Beautifully Crafted Modular Kitchens",
//     youtubeId: "P31tLqpvEtw",
//     description: "Deeraj Interiors Kitchens - Premium modular kitchen designs",
//     location: "Hyderabad & Andhra Pradesh",
//   },
//   {
//     title: "LG Classic Home Interiors Hyderabad",
//     youtubeId: "PxyZkSwWJ84",
//     description: "LG Classic Home Interiors Promotion - Hyderabad",
//     location: "Hyderabad",
//   },
//   {
//     title: "Srinivasa Rao Beautiful Abode Uppal Hyderabad",
//     youtubeId: "4gB_37HzH-4",
//     description: "Elegant full home interiors for Mr. Srinivasa Rao - Luxury living in Uppal",
//     location: "Uppal, Hyderabad",
//   },
//   {
//     title: "Mr. Krishnamurthy & Mrs. Divya Madam 2BHK Alwal Hyderabad",
//     youtubeId: "v-ILQISMb-I",
//     description: "Stylish 2BHK home transformation with modern furnishings and false ceiling",
//     location: "Alwal, Hyderabad",
//   },
//   {
//     title: "Aparna Serenity 3BHK Render Video",
//     youtubeId: "mVBJ4BrYV_w",
//     description: "3BHK interior design render - Blending elegance, functionality, and comfort",
//     location: "Hyderabad",
//   },
//   {
//     title: "Deeraj Interiors - Beautiful Art Work & Deco Painting",
//     youtubeId: "xqK0gUujh5U",
//     description: "Showcasing stunning wall art, deco painting, and creative interior details",
//     location: "Hyderabad",
//   },
//   {
//     title: "Deeraj Interiors Home Furnishings & Decor Kompally",
//     youtubeId: "pppQxUat30g",
//     description: "Overview of home furnishings, interior decor services in Kompally",
//     location: "Kompally, Hyderabad",
//   },
// ];

// const shorts = [
//   {
//     title: "Deeraj Interiors We Build Lives with Best Interiors",
//     shortId: "dDqDsftrbwo",
//     description: "Quick glimpse of how we transform homes with elegance",
//   },
//   {
//     title: "Deeraj Interiors for Best Interiors",
//     shortId: "S9B5kBucW4Q",
//     description: "Discover premium interior solutions in seconds",
//   },
//   {
//     title: "Home Decor Products for Sale",
//     shortId: "oGQZBanPFMI",
//     description: "Stylish decor items available now",
//   },
//   {
//     title: "Wall Elevation with Helios Stone",
//     shortId: "bWUV6fjJH1g",
//     description: "Enhance your home with premium stone elevations",
//   },
//   {
//     title: "Modular Work with Multi Boring Machine",
//     shortId: "22BeoBm22wM",
//     description: "Precision modular craftsmanship at Deeraj Interiors",
//   },
//   {
//     title: "From Concept to Creation",
//     shortId: "ZjAFOAHf0v4",
//     description: "See how ideas turn into beautiful realities",
//   },
// ];

// const ITEMS_PER_PAGE = 6;

// function OurProjects() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [whatsappOpen, setWhatsappOpen] = useState(false);

//   const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
//   const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//   const visibleProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

//   const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   const prevPage = () => goToPage(currentPage - 1);
//   const nextPage = () => goToPage(currentPage + 1);

//   return (
//     <div className="our-projects-page">
//       <div className="projects-container">
//         <h1 className="page-title">OUR PROJECTS</h1>
//         <p className="page-subtitle">Transforming Spaces with Elegance & Style</p>

//         <div className="projects-grid">
//           {visibleProjects.map((project, index) => (
//             <div key={index} className="project-item">
//               <div className="video-thumbnail-wrapper">
//                 <img
//                   src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
//                   alt={project.title}
//                   className="thumbnail"
//                   loading="lazy"
//                 />
//                 <a
//                   href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="play-overlay"
//                 >
//                   <div className="play-icon">▶</div>
//                 </a>
//               </div>
//               <div className="project-details">
//                 <h3 className="project-title">{project.title}</h3>
//                 <p className="project-desc">{project.description}</p>
//                 <p className="project-brand">Deeraj Interiors</p>
//                 <p className="project-location">{project.location}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {totalPages > 1 && (
//           <div className="pagination-controls">
//             <button
//               onClick={prevPage}
//               disabled={currentPage === 1}
//               className="pagination-btn"
//             >
//               « Prev
//             </button>

//             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
//               <button
//                 key={page}
//                 onClick={() => goToPage(page)}
//                 className={`pagination-btn ${currentPage === page ? 'active' : ''}`}
//               >
//                 {page}
//               </button>
//             ))}

//             <button
//               onClick={nextPage}
//               disabled={currentPage === totalPages}
//               className="pagination-btn"
//             >
//               Next »
//             </button>
//           </div>
//         )}

//         {/* Shorts Section - Right to Left Marquee */}
//         <div className="ourprojects-shorts-section">
//           <h2 className="ourprojects-shorts-title">YOUTUBE SHORTS</h2>
//           <p className="ourprojects-shorts-subtitle">Quick Inspiring Glimpses of Our Work</p>

//           <div className="ourprojects-marquee-wrapper">
//             <div className="ourprojects-marquee-track">
//               {/* First set */}
//               {shorts.map((short, index) => (
//                 <div key={index} className="ourprojects-short-item">
//                   <div className="video-thumbnail-wrapper">
//                     <img
//                       src={`https://img.youtube.com/vi/${short.shortId}/hqdefault.jpg`}
//                       alt={short.title}
//                       className="thumbnail"
//                       loading="lazy"
//                     />
//                     <a
//                       href={`https://www.youtube.com/shorts/${short.shortId}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="play-overlay"
//                     >
//                       <div className="play-icon">▶</div>
//                     </a>
//                   </div>
//                   <div className="project-details">
//                     <h3 className="project-title">{short.title}</h3>
//                     <p className="project-desc">{short.description}</p>
//                     <p className="project-brand">Deeraj Interiors</p>
//                   </div>
//                 </div>
//               ))}

//               {/* Duplicate set for seamless infinite loop */}
//               {shorts.map((short, index) => (
//                 <div key={`duplicate-${index}`} className="ourprojects-short-item">
//                   <div className="video-thumbnail-wrapper">
//                     <img
//                       src={`https://img.youtube.com/vi/${short.shortId}/hqdefault.jpg`}
//                       alt={short.title}
//                       className="thumbnail"
//                       loading="lazy"
//                     />
//                     <a
//                       href={`https://www.youtube.com/shorts/${short.shortId}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="play-overlay"
//                     >
//                       <div className="play-icon">▶</div>
//                     </a>
//                   </div>
//                   <div className="project-details">
//                     <h3 className="project-title">{short.title}</h3>
//                     <p className="project-desc">{short.description}</p>
//                     <p className="project-brand">Deeraj Interiors</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* <footer className="company-page-footer">
//           <div className="company-footer-content">
//             <p className="company-footer-brand">DEERAJ INTERIORS</p>
//             <p className="company-footer-address">
//               PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR, <br />
//               SUCHITRA CIRCLE, PET BASHEERABAD, HYDERABAD, TS 500067
//             </p>
//             <p className="company-footer-contact">+91 9000700930 / 9000700910</p>
//           </div>
//         </footer> */}
//         {/* ================= WHATSAPP FLOAT ================= */}
// <div className="whatsapp-container">

//   <div
//     className="whatsapp-float"
//     onClick={() => setWhatsappOpen(!whatsappOpen)}
//   >
//     <img
//       src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//       alt="WhatsApp"
//     />
//   </div>

//   {whatsappOpen && (
//     <div className="whatsapp-popup">
//       <h3>Start WhatsApp Chat</h3>

//       <input type="text" placeholder="Your Name" id="wa-name" />
//       <input type="text" placeholder="Project Type (Home / Office / Consultation)" id="wa-project" />
//       <textarea placeholder="Your Message" id="wa-message"></textarea>

//       <button
//         onClick={() => {
//           const name = document.getElementById("wa-name").value;
//           const project = document.getElementById("wa-project").value;
//           const message = document.getElementById("wa-message").value;

//           const finalMessage =
//             `Hello Deeraj Interiors,%0A%0A` +
//             `Name: ${name}%0A` +
//             `Project: ${project}%0A` +
//             `Message: ${message}%0A%0A` +
//             `I am interested in discussing my interior project.`;

//           window.open(
//             `https://wa.me/919000700930?text=${finalMessage}`,
//             "_blank"
//           );
//         }}
//       >
//         Chat on WhatsApp
//       </button>
//     </div>
//   )}
// </div>
//       </div>

// <footer className="di-footer">
//   <div className="di-footer-container">
//     <p className="di-footer-links">Privacy Policy | Terms and Conditions</p>
//     <p className="di-footer-title"><strong>DEERAJ INTERIORS</strong></p>

//     {/* Split Address Section */}
//     <div className="di-footer-addresses">
      
//       <div className="di-footer-address-card">
//         <span className="di-footer-branch">Experience Center</span>
//         <p>
//           PLOT 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br/>
//           SUCHITRA CIRCLE, PET BASHEERABAD,<br/>
//           HYDERABAD, TS 500067
//         </p>
//       </div>

//       <div className="di-footer-address-card">
//         <span className="di-footer-branch">Modular Factory</span>
//         <p>
//           PLOT 205, BESIDE HYPOTHETICAL PLAZA,<br/>
//           JUBILEE HILLS CHECKPOST,<br/>
//           HYDERABAD, TS 500033
//         </p>
//       </div>

//     </div>

//     <p className="di-footer-phone">+91 9000700910 / 9000700930</p>

//     <p className="di-footer-copy">
//       COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED.
//     </p>
//   </div>
// </footer>

// {/* ── NEW: Phone Call Floating Button ── */}
//    {/* ── Phone Call Floating Button ── */}
// <div className="home-phone-container">
//   <a 
//     href="/contact-us" 
//     className="home-phone-float"
//     title="Contact Us / Call"
//   >
//     <svg 
//       width="32" 
//       height="32" 
//       viewBox="0 0 24 24" 
//       fill="none" 
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path 
//         d="M20.9999 15.46C20.1199 15.46 19.2499 15.3 18.4099 15.06C18.1199 14.99 17.8099 15.05 17.5799 15.29L15.4099 18.12C12.2499 16.67 7.32988 11.79 5.87988 8.61998L8.70988 6.41998C8.95988 6.16998 9.01988 5.85998 8.94988 5.58998C8.69988 4.74998 8.53988 3.87998 8.53988 2.99998C8.53988 2.44998 8.08988 1.99998 7.53988 1.99998H4.49988C3.94988 1.99998 3.49988 2.44998 3.49988 2.99998C3.49988 13.28 10.7199 20.5 20.9999 20.5C21.5499 20.5 21.9999 20.05 21.9999 19.5V16.46C21.9999 15.91 21.5499 15.46 20.9999 15.46Z" 
//         fill="#ffffff"
//       />
//     </svg>
//   </a>
// </div>

//     </div>
//   );
// }

// export default OurProjects;


// src/components/ourprojects/ourprojects.js
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './ourprojects.css';

const projects = [
  {
    title: "3BHK Interior – My Home Tridasa",
    youtubeId: "mHPCmdXdE24",
    client: "Mr. Moin",
    location: "Kukatpally, Hyderabad",
    projectValue: "₹13 Lakhs",
    testimonial: "Deeraj Interiors completed 3BHK interiors with excellent modular finish and installation quality was impressive. The team maintained good workmanship and delivered full project on time.",
    ctaText: "Watch Full Walkthrough →",
  },
  {
    title: "NCL Sindhu 3BHK Kompally Hyderabad",
    youtubeId: "mHPCmdXdE24",
    client: "Client Name",
    location: "Kompally, Hyderabad",
    projectValue: "₹12.5 Lakhs",
    testimonial: "Very professional approach, excellent finishing touches and on-time handover. Highly recommended.",
    ctaText: "Watch Full Walkthrough →",
  },
  {
    title: "Gorgeous Makeover of Mr. Mahender Independent Flat Alwal Hyderabad",
    youtubeId: "7OiztXQrRcQ",
    client: "Mr. Mahender",
    location: "Alwal, Hyderabad",
    projectValue: "₹11 Lakhs",
    testimonial: "Transformed our old flat into a modern dream home. Superb work and cooperative team.",
    ctaText: "Watch Full Walkthrough →",
  },
  {
    title: "Beautifully Crafted Modular Kitchens",
    youtubeId: "P31tLqpvEtw",
    client: "Vignan Reddy",
    location: "Hyderabad & Andhra Pradesh",
    projectValue: "₹13 Lakhs",
    testimonial: "Deeraj Interiors completed 3BHK interiors with excellent modular finish and installation quality was impressive. The team maintained good workmanship and delivered full project on time.",
    ctaText: "Watch Full Walkthrough →",  
  },
  {
    title: "LG Classic Home Interiors Hyderabad",
    youtubeId: "PxyZkSwWJ84",
    client: "Ramesh Reddy",
    location: "Hyderabad",
    projectValue: "₹10 Lakhs",
    testimonial: "Luxury interiors executed with great attention to detail. Truly satisfied with the final outcome.",
    ctaText: "Watch Full Walkthrough →",
  },
  {
    title: "Srinivasa Rao Beautiful Abode Uppal Hyderabad",
    youtubeId: "4gB_37HzH-4",
    client: "Mr. Srinivasa Rao",
    location: "Uppal, Hyderabad",
    projectValue: "₹18 Lakhs",
    testimonial: "Luxury interiors executed with great attention to detail. Truly satisfied with the final outcome.",
    ctaText: "Watch Full Walkthrough →",
  },
  {
    title: "Mr. Krishnamurthy & Mrs. Divya Madam 2BHK Alwal Hyderabad",
    youtubeId: "v-ILQISMb-I",
    client: "Mr. Krishnamurthy & Mrs. Divya",
    location: "Alwal, Hyderabad",
    projectValue: "₹9.5 Lakhs",
    testimonial: "Beautiful false ceiling and modern furniture layout. Team was very punctual.",
    ctaText: "Watch Full Walkthrough →",
  },
  {
    title: "Aparna Serenity 3BHK Render Video",
    youtubeId: "mVBJ4BrYV_w",
    client: "Leena Teresa",
    location: "Hyderabad",
    projectValue: "₹9.5 Lakhs",
    testimonial: "Beautiful false ceiling and modern furniture layout. Team was very punctual.",
    ctaText: "Watch Full Walkthrough →",
  },
  {
    title: "Deeraj Interiors - Beautiful Art Work & Deco Painting",
    youtubeId: "xqK0gUujh5U",
    client: "Jairam Rao",
    location: "Hyderabad",
    projectValue: "₹10 Lakhs",
    testimonial: "Luxury interiors executed with great attention to detail. Truly satisfied with the final outcome.",
    ctaText: "Watch Full Walkthrough →",
  },
  {
    title: "Deeraj Interiors Home Furnishings & Decor Kompally",
    youtubeId: "Ae46w9YIJHQ",
    client: "Dr.Ratnakar&Dr.Lalitha",
    location: "Kompally, Hyderabad",
    projectValue: null,
    testimonial: "Beautiful false ceiling and modern furniture layout. Team was very punctual.",
    ctaText: "Watch Video →",
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
                {project.client && (
                  <div className="client-header">
                    <div className="client-icon">
                      <FaUserCircle />
                    </div>
                    <h4 className="client-name">{project.client}</h4>
                  </div>
                )}

                {project.testimonial && (
                  <div className="testimonial">
                    <p className="testimonial-text">
                      {project.testimonial}
                    </p>
                  </div>
                )}

                <h3 className="project-title">{project.title}</h3>

                <div className="project-meta">
                  <span className="project-location">{project.location}</span>
                </div>

                <a
                  href={`https://www.youtube.com/watch?v=${project.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="watch-cta"
                >
                  {project.ctaText || "Watch Full Walkthrough →"}
                </a>
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

        <div className="ourprojects-shorts-section">
          <h2 className="ourprojects-shorts-title">YOUTUBE SHORTS</h2>
          <p className="ourprojects-shorts-subtitle">Quick Inspiring Glimpses of Our Work</p>

          <div className="ourprojects-marquee-wrapper">
            <div className="ourprojects-marquee-track">
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
              <input type="text" placeholder="Project Type" id="wa-project" />
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
          <p className="di-footer-phone">+91 9000700910 / 9000700930 /9014300930 </p>
          <p className="di-footer-copy">
            COPYRIGHT © DEERAJ TECHNOLOGIES PRIVATE LIMITED - ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default OurProjects;