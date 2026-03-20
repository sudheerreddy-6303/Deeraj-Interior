// // src/components/home/Home.jsx
// import React from 'react';
// import './home.css';

// export default function Home() {
//   return (
//     <div className="home-container">
//       <header className="hero">
//         <div className="hero-content">
          
//           <h1 className="hero-title">
//             {/* <h3>Deeraj</h3> */}
//             Interior <span className="highlight">Studio</span>
//           </h1>
//           <p className="hero-subtitle">
//             Creating timeless spaces with soul, elegance and modern comfort
//           </p>
//           <div className="hero-buttons">
//             <button className="btn primary" onClick={() => (window.location.href = "/contact-us")}
//             >View Projects</button>
//             <button className="btn outline"  onClick={() => (window.location.href = "/contact-us")}>Get in Touch</button>
//           </div>
//         </div>
//       </header>

//       {/* About Section */}
//       <section className="about-section">
//         <div className="about-wrapper">
//           <div className="about-image-container">
//             <div
//               className="about-image"
//               style={{
//                 backgroundImage: `url('https://s3.ap-south-1.amazonaws.com/images.woodenstreet.de/image/data/blog-images/partition-design/wooden-living-room-partition.jpg')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }}
//             ></div>
//           </div>
//           <div className="about-content">
//             <h2>ABOUT DEERAJ INTERIORS</h2>
//             <h1>Designing Dreams. Delivering Elegance</h1>
//             <p>
//               At Deeraj Interiors, we believe that every space has a story — and we're here to design it beautifully. With over 5 years of experience, we've transformed homes, offices, and commercial spaces into functional, aesthetic, and personalized environments that reflect the dreams of our clients.
//             </p>
//             <p>
//               From cozy 2BHK apartments to expansive villas, and from boutique offices to large-scale commercial interiors, our journey has been driven by word-of-mouth trust and design excellence. We've had the privilege to work with individual homeowners as well as renowned companies, bringing creativity, precision, and passion to every square foot.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us - Fade Carousel */}
//       <section className="why-choose-section">
//         <div className="why-wrapper">
//           <div className="why-content">
//             <h2>WHY CHOOSE US</h2>
//             <h1>Designed with Passion. Delivered with Precision</h1>

//             <p>
//               From concept to creation, our work speaks of trust, timelines, and tailored excellence. With 5+ years of word-of-mouth success, we now bring our promise to you online — better, faster, and more inspired than ever.
//             </p>

//            <button
//   className="btn primary explore-btn"
//   onClick={() => (window.location.href = "/contact-us")}
// >
//   EXPLORE OUR EDGE →
// </button>
//           </div>

//           <div className="why-image-slider">
//             <div className="slides">
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4cb0d?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438905-a9e3e6a5d6d8?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792508a6e?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221710640-c0eaaa2adb66?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4f?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616594039964-ae1f457de8c1?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438930-7e6d5a8d8e0?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792508a6e?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80')` }}></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Overview Section */}
//       <section className="services-section">
//         <div className="services-wrapper">
//           <h2>OUR DESIGN SERVICES</h2>
//           <p className="section-subtitle">
//             Everything you need. All under one roof.
//           </p>

//           <div className="services-grid">
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Bedroom Design</div>
//               <div className="service-hover-content">
//                 <p>Create a peaceful and restful sanctuary with our expert bedroom design services. From custom bed frames to luxurious bedding, we help you create a space that's both comfortable and stylish.</p>
//                 <button className="btn primary"    onClick={() => (window.location.href = "/contact-us")}
// >Know More</button>
//               </div>
//             </div>

//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Living Room Design</div>
//               <div className="service-hover-content">
//                 <p>Whether you're looking for a cozy space to relax with family or a stylish entertaining area for guests, we can create a living room that suits your lifestyle and reflects your personality.</p>
//                 <button className="btn primary"   onClick={() => (window.location.href = "/contact-us")}
//  >Know More</button>
//               </div>
//             </div>

//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Kitchen Design</div>
//               <div className="service-hover-content">
//                 <p>At Deeraj Interiors, we specialize in crafting kitchen interiors that are as beautiful as they are functional — thoughtfully designed to reflect your style and suit your everyday needs.</p>
//                 <button className="btn primary"   onClick={() => (window.location.href = "/contact-us")}
//  >Know More</button>
//               </div>
//             </div>

//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Home Office Design</div>
//               <div className="service-hover-content">
//                 <p>With more people working from home, it's important to have a functional and inspiring home office. Let us help you create a space that's both productive and stylish.</p>
//                 <button className="btn primary"    onClick={() => (window.location.href = "/contact-us")}
//  >Know More</button>
//               </div>
//             </div>

//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Bathroom Design</div>
//               <div className="service-hover-content">
//                 <p>Transform your bathroom into a spa-like retreat with our expert design services. From luxurious showers to elegant fixtures, we create a space that's both beautiful and functional.</p>
//                 <button className="btn primary"   onClick={() => (window.location.href = "/contact-us")}
//  >Know More</button>
//               </div>
//             </div>

//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Outdoor Living Design</div>
//               <div className="service-hover-content">
//                 <p>Extend your living space to the outdoors with our expert outdoor living design services. From cozy fire pits to luxurious outdoor kitchens, we help you create a space that's perfect for entertaining and relaxation.</p>
//                 <button className="btn primary"    onClick={() => (window.location.href = "/contact-us")}
//  >Know More</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section - Continuous Scroll with Background */}
//       <section className="testimonials-section" style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}>
//         <div className="testimonials-wrapper">
//           <h2 className="testimonials-title">Loved by Families Across the City.</h2>
          
//           <div className="testimonials-scroll-container">
//             <div className="testimonials-track">
//               {/* First set of testimonials */}
//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Excellent</h3>
//                 <p className="testimonial-text">
//                   "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!"
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">R</div>
//                   <span>Rajesh</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Fantastic style</h3>
//                 <p className="testimonial-text">
//                   "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">N</div>
//                   <span>Nagadivya Goli</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Great teamwork</h3>
//                 <p className="testimonial-text">
//                   "Great teamwork! They offered a wide range of designs and executed everything perfectly on time."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">P</div>
//                   <span>P Karunakar</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Outstanding Service</h3>
//                 <p className="testimonial-text">
//                   "Professional team with amazing attention to detail. Our new kitchen is the heart of our home now."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">S</div>
//                   <span>Sunita Reddy</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Perfect Execution</h3>
//                 <p className="testimonial-text">
//                   "From design to execution, everything was flawless. Highly recommend Deeraj Interiors to everyone."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">A</div>
//                   <span>Arjun Mehta</span>
//                 </div>
//               </div>

//               {/* Duplicate set for continuous scroll */}
//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Excellent</h3>
//                 <p className="testimonial-text">
//                   "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!"
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">R</div>
//                   <span>Rajesh</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Fantastic style</h3>
//                 <p className="testimonial-text">
//                   "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">N</div>
//                   <span>Nagadivya Goli</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Great teamwork</h3>
//                 <p className="testimonial-text">
//                   "Great teamwork! They offered a wide range of designs and executed everything perfectly on time."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">P</div>
//                   <span>P Karunakar</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Outstanding Service</h3>
//                 <p className="testimonial-text">
//                   "Professional team with amazing attention to detail. Our new kitchen is the heart of our home now."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">S</div>
//                   <span>Sunita Reddy</span>
//                 </div>
//               </div>

//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Perfect Execution</h3>
//                 <p className="testimonial-text">
//                   "From design to execution, everything was flawless. Highly recommend Deeraj Interiors to everyone."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">A</div>
//                   <span>Arjun Mehta</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <div className="cta-content">
//           <h2>Ready to transform your space?</h2>
//           <p>Let's create something beautiful together</p>
//           <button className="btn primary large">Start Your Project →</button>
//         </div>
//       </section>

//            {/* NEW: Contact/Footer Section */}
//       <footer className="contact-section">
//   <div className="contact-wrapper">
//     <h2 className="connect-title">CONNECT WITH US</h2>

//     <div className="footer-main-content">
//       {/* Left: GIF */}
//       <div className="footer-gif-side">
//         <div className="company-gif-container">
//           <img
//             src="https://i.pinimg.com/originals/b7/38/e8/b738e85cad3d9aee9fa1ff15b6e4faaf.gif"
//             alt="Our Design Philosophy in Motion"
//             className="company-gif-image"
//           />
//           <p className="gif-caption">Our Design Philosophy in Motion</p>
//         </div>
//       </div>

//       {/* Right: Company Info + Newsletter */}
//       <div className="footer-info-side">
//         <div className="company-info-block">
//           <h1 className="company-name">DEERAJ INTERIORS</h1>
//           <p className="company-address">
//             PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br />
//             SUCHITRA CIRCLE, PET BASHEERABAD,<br />
//             HYDERABAD, TS 500067
//           </p>
//           <p className="company-phone">+91 90007 00930</p>
//         </div>

// <div className="newsletter-box">

//   {/* Google Map */}
//   <div className="map-container">
//     <iframe
//       title="Deeraj Interiors Location"
//       src="https://www.google.com/maps?q=Suchitra%20Circle%20Hyderabad&output=embed"
//       width="100%"
//       height="180"
//       style={{ border: 0, borderRadius: "10px", marginBottom: "15px" }}
//       allowFullScreen=""
//       loading="lazy"
//       referrerPolicy="no-referrer-when-downgrade"
//     ></iframe>
//   </div>

//   {/* Existing Content - Do Not Remove */}
//   <h3>Subscribe</h3>
//   <p>
//     Get 10% off your first purchase when you sign up for our newsletter!
//   </p>
//   <button className="btn primary">SIGN UP</button>

// </div>


//         <div className="newsletter-box">
//           <h3>Subscribe</h3>
//           <p>
//             Get 10% off your first purchase when you sign up for our newsletter!
//           </p>
//           <button className="btn primary">SIGN UP</button>
//         </div>
//       </div>
//     </div>

//     <div className="footer-bottom">
//       <div className="legal-links">
//         <a href="/privacy-policy">Privacy Policy</a>
//         <span className="separator"> • </span>
//         <a href="/terms-and-conditions">Terms and Conditions</a>
//       </div>
//       <p className="copyright">
//         COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED
//       </p>
//     </div>
//   </div>
// </footer>

//       {/* Remove the separate GIF section since it's now in the footer */}

//       {/* GIF Section at the very bottom */}
     
//     </div>
//   );
// }

// src/components/home/Home.jsx
// import React from 'react';
// import { useNavigate } from "react-router-dom";
// import './home.css';

// export default function Home() {

//   const navigate = useNavigate();
//   return (
//     <div className="home-container">
//       <header className="hero">
//         <div className="hero-content">
//           <h1 className="hero-title">
//             {/* <h3>Deeraj</h3> */}
//             Interior <span className="highlight">Studio</span>
//           </h1>
//           <p className="hero-subtitle">
//             Creating timeless spaces with soul, elegance and modern comfort
//           </p>
//           <div className="hero-buttons">
//           <button
//               className="btn primary"
//               onClick={() => navigate("/contact-us")}
//             >
//               View Projects
//             </button>
//              <button
//               className="btn outline"
//               onClick={() => navigate("/contact-us")}
//             >
//               Get in Touch
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* About Section */}
//       <section className="about-section">
//         <div className="about-wrapper">
//           <div className="about-image-container">
//             <div
//               className="about-image"
//               style={{
//                 backgroundImage: `url('https://s3.ap-south-1.amazonaws.com/images.woodenstreet.de/image/data/blog-images/partition-design/wooden-living-room-partition.jpg')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }}
//             ></div>
//           </div>
//           <div className="about-content">
//             <h2>ABOUT DEERAJ INTERIORS</h2>
//             <h1>Designing Dreams. Delivering Elegance</h1>
//             <p>
//               At Deeraj Interiors, we believe that every space has a story — and we're here to design it beautifully. With over 5 years of experience, we've transformed homes, offices, and commercial spaces into functional, aesthetic, and personalized environments that reflect the dreams of our clients.
//             </p>
//             <p>
//               From cozy 2BHK apartments to expansive villas, and from boutique offices to large-scale commercial interiors, our journey has been driven by word-of-mouth trust and design excellence. We've had the privilege to work with individual homeowners as well as renowned companies, bringing creativity, precision, and passion to every square foot.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us - Fade Carousel */}
//       <section className="why-choose-section">
//         <div className="why-wrapper">
//           <div className="why-content">
//             <h2>WHY CHOOSE US</h2>
//             <h1>Designed with Passion. Delivered with Precision</h1>
//             <p>
//               From concept to creation, our work speaks of trust, timelines, and tailored excellence. With 5+ years of word-of-mouth success, we now bring our promise to you online — better, faster, and more inspired than ever.
//             </p>
//               <button
//               className="btn primary explore-btn"
//               onClick={() => navigate("/contact-us")}
//             >
//               EXPLORE OUR EDGE →
//             </button>
//           </div>
//           <div className="why-image-slider">
//             <div className="slides">
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4cb0d?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438905-a9e3e6a5d6d8?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792508a6e?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221710640-c0eaaa2adb66?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4f?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616594039964-ae1f457de8c1?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438930-7e6d5a8d8e0?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792508a6e?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}></div>
//               <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80')` }}></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Overview Section */}
//       <section className="services-section">
//         <div className="services-wrapper">
//           <h2>OUR DESIGN SERVICES</h2>
//           <p className="section-subtitle">
//             Everything you need. All under one roof.
//           </p>
//           <div className="services-grid">
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Bedroom Design</div>
//               <div className="service-hover-content">
//                 <p>Create a peaceful and restful sanctuary with our expert bedroom design services. From custom bed frames to luxurious bedding, we help you create a space that's both comfortable and stylish.</p>
//                    <button
//                   className="btn primary"
//                   onClick={() => navigate("/contact-us")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Living Room Design</div>
//               <div className="service-hover-content">
//                 <p>Whether you're looking for a cozy space to relax with family or a stylish entertaining area for guests, we can create a living room that suits your lifestyle and reflects your personality.</p>
//                 <button className="btn primary" onClick={() => navigate("/contact-us")}>Know More</button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Kitchen Design</div>
//               <div className="service-hover-content">
//                 <p>At Deeraj Interiors, we specialize in crafting kitchen interiors that are as beautiful as they are functional — thoughtfully designed to reflect your style and suit your everyday needs.</p>
//                 <button className="btn primary" onClick={() => navigate("/contact-us")}>Know More</button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Home Office Design</div>
//               <div className="service-hover-content">
//                 <p>With more people working from home, it's important to have a functional and inspiring home office. Let us help you create a space that's both productive and stylish.</p>
//                 <button className="btn primary" onClick={() => navigate("/contact-us")}>Know More</button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Bathroom Design</div>
//               <div className="service-hover-content">
//                 <p>Transform your bathroom into a spa-like retreat with our expert design services. From luxurious showers to elegant fixtures, we create a space that's both beautiful and functional.</p>
//                 <button className="btn primary" onClick={() => navigate("/contact-us")}>Know More</button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Outdoor Living Design</div>
//               <div className="service-hover-content">
//                 <p>Extend your living space to the outdoors with our expert outdoor living design services. From cozy fire pits to luxurious outdoor kitchens, we help you create a space that's perfect for entertaining and relaxation.</p>
//                 <button className="btn primary"onClick={() => navigate("/contact-us")}>Know More</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section - Continuous Scroll with Background */}
//       <section className="testimonials-section" style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}>
//         <div className="testimonials-wrapper">
//           <h2 className="testimonials-title">Loved by Families Across the City.</h2>
         
//           <div className="testimonials-scroll-container">
//             <div className="testimonials-track">
//               {/* First set of testimonials */}
//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Excellent</h3>
//                 <p className="testimonial-text">
//                   "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!"
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">R</div>
//                   <span>Rajesh</span>
//                 </div>
//               </div>
//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Fantastic style</h3>
//                 <p className="testimonial-text">
//                   "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">N</div>
//                   <span>Nagadivya Goli</span>
//                 </div>
//               </div>
//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Great teamwork</h3>
//                 <p className="testimonial-text">
//                   "Great teamwork! They offered a wide range of designs and executed everything perfectly on time."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">P</div>
//                   <span>P Karunakar</span>
//                 </div>
//               </div>
//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Outstanding Service</h3>
//                 <p className="testimonial-text">
//                   "Professional team with amazing attention to detail. Our new kitchen is the heart of our home now."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">S</div>
//                   <span>Sunita Reddy</span>
//                 </div>
//               </div>
//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Perfect Execution</h3>
//                 <p className="testimonial-text">
//                   "From design to execution, everything was flawless. Highly recommend Deeraj Interiors to everyone."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">A</div>
//                   <span>Arjun Mehta</span>
//                 </div>
//               </div>
//               {/* Duplicate set for continuous scroll */}
//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Excellent</h3>
//                 <p className="testimonial-text">
//                   "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!"
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">R</div>
//                   <span>Rajesh</span>
//                 </div>
//               </div>
//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Fantastic style</h3>
//                 <p className="testimonial-text">
//                   "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">N</div>
//                   <span>Nagadivya Goli</span>
//                 </div>
//               </div>
//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Great teamwork</h3>
//                 <p className="testimonial-text">
//                   "Great teamwork! They offered a wide range of designs and executed everything perfectly on time."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">P</div>
//                   <span>P Karunakar</span>
//                 </div>
//               </div>
//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Outstanding Service</h3>
//                 <p className="testimonial-text">
//                   "Professional team with amazing attention to detail. Our new kitchen is the heart of our home now."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">S</div>
//                   <span>Sunita Reddy</span>
//                 </div>
//               </div>
//               <div className="testimonial-card">
//                 <div className="stars">
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                   <span className="star">★</span>
//                 </div>
//                 <h3 className="testimonial-rating">Perfect Execution</h3>
//                 <p className="testimonial-text">
//                   "From design to execution, everything was flawless. Highly recommend Deeraj Interiors to everyone."
//                 </p>
//                 <div className="testimonial-author">
//                   <div className="author-avatar">A</div>
//                   <span>Arjun Mehta</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="cta-section">
//         <div className="cta-content">
//           <h2>Ready to transform your space?</h2>
//           <p>Let's create something beautiful together</p>
//           <button className="btn primary large" onClick={() => navigate("/contact-us")} >Start Your Project →</button>
//         </div>
//       </section>

//       {/* Contact/Footer Section */}
//       <footer className="contact-section">
//         <div className="contact-wrapper">
//           <h2 className="connect-title">CONNECT WITH US</h2>
//           <div className="footer-main-content">
//             {/* Left column: GIF + Map underneath */}
//             <div className="footer-gif-side">
//               <div className="company-gif-container">
//                 <img
//                   src="https://i.pinimg.com/originals/b7/38/e8/b738e85cad3d9aee9fa1ff15b6e4faaf.gif"
//                   alt="Our Design Philosophy in Motion"
//                   className="company-gif-image"
//                 />
//                 <p className="gif-caption">Our Design Philosophy in Motion</p>
//               </div>

//               {/* Google Map - placed under the GIF, left side relative to subscribe */}
//               <div className="map-container" style={{ marginTop: '20px' }}>
//                 <iframe
//                   title="Deeraj Interiors Location - Suchitra Circle, Hyderabad"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.314!2d78.478!3d17.5108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb999bffffffff%3A0x0!2zMTfCsDMwJzM5LjEiTiA3OMKwMjgnNDAuOCJF!5e0!3m2!1sen!2sin!4v1738944000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="320"
//                   style={{ border: 0, borderRadius: "10px" }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </div>

//             {/* Right column: Company info + Subscribe */}
//             <div className="footer-info-side">
//               <div className="company-info-block">
//                 <h1 className="company-name">DEERAJ INTERIORS</h1>
//                 <p className="company-address">
//                   PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br />
//                   SUCHITRA CIRCLE, PET BASHEERABAD,<br />
//                   HYDERABAD, TS 500067
//                 </p>
//                 <p className="company-phone">+91 90007 00930</p>
//               </div>

//               <div className="newsletter-box">
//                 <h3>Subscribe</h3>
//                 <p>
//                   Get 10% off your first purchase when you sign up for our newsletter!
//                 </p>
//                 <button className="btn primary"  onClick={() => navigate("/contact-us")} >SIGN UP</button>
//               </div>
//             </div>
//           </div>

//           <div className="footer-bottom">
//             <div className="legal-links">
//               <a href="/privacy-policy">Privacy Policy</a>
//               <span className="separator"> • </span>
//               <a href="/terms-and-conditions">Terms and Conditions</a>
//             </div>
//             <p className="copyright">
//               COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED
//             </p>
//           </div>
//         </div>
//       </footer>

//     </div>
//   );
// }







//  {/* Updated Testimonials */}
//       <section className="testimonials-section" style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}>
//         <div className="testimonials-wrapper">
//           <h2 className="testimonials-title">Loved by Families Across the City.</h2>

//           <div className="testimonials-horizontal-container">
//             {(() => {
//               const cards = [];
//               const total = testimonials.length;
//               let idx1 = currentPair % total;
//               let idx2 = (currentPair + 1) % total;

//               cards.push(testimonials[idx1]);

//               if (total > 1) {
//                 cards.push(testimonials[idx2]);
//               }

//               return cards.map((item, index) => (
//                 <div key={index} className="testimonial-horizontal-card">
//                   <div className="testimonial-left">
//                     <div className="avatar-circle">
//                       <img 
//                         src={item.avatar} 
//                         alt={item.name} 
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'cover',
//                           borderRadius: '15%'
//                         }}
//                       />
//                     </div>
//                     <div className="testimonial-name-below">
//                       {item.name}
//                     </div>
//                   </div>

//                   <div className="testimonial-right">
//                     <div className="stars">
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                     </div>

//                     <h3 className="testimonial-rating">
//                       {item.rating}
//                     </h3>

//                     <p className="testimonial-text">
//                       "{item.text}"
//                     </p>

//                     <div className="testimonial-address">
//                       {item.address}
//                     </div>
//                   </div>
//                 </div>
//               ));
//             })()}
//           </div>

//           {/* Navigation dots */}
//           <div className="testimonial-dots">
//             {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
//               <span
//                 key={index}
//                 className={`dot ${index === Math.floor(currentPair / 2) ? 'active' : ''}`}
//                 onClick={() => setCurrentPair(index * 2)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>




//  const testimonials = [
//     {
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
//       rating: "Excellent",
//       text: "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!",
//       name: "Rajesh",
//       address: "Kukatpally, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces",
//       rating: "Fantastic style",
//       text: "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now.",
//       name: "Nagadivya Goli",
//       address: "Gachibowli, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces",
//       rating: "Outstanding",
//       text: "Very professional team. They understood our requirements perfectly and delivered the 3BHK exactly on time with premium finishes.",
//       name: "Srinivas Reddy",
//       address: "Madhapur, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces",
//       rating: "Highly Recommended",
//       text: "Best interior designers in Hyderabad! Great attention to detail, excellent communication and value for money.",
//       name: "Priya Sharma",
//       address: "Jubilee Hills, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop&crop=faces",
//       rating: "Perfect Execution",
//       text: "From 3D design to final handover — everything was flawless. Our modular kitchen is a dream now. Thank you team!",
//       name: "Anjali Mehta",
//       address: "Banjara Hills, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces",
//       rating: "Superb Work",
//       text: "We were worried about renovating our old house, but Deeraj Interiors made it look completely modern and spacious. Super happy!",
//       name: "Karthik Rao",
//       address: "Ameerpet, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=faces",
//       rating: "Elegant & Functional",
//       text: "They created a beautiful yet practical living + dining space for our family. Guests keep asking who did the interiors!",
//       name: "Meghana Varma",
//       address: "Manikonda, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=300&h=300&fit=crop&crop=faces",
//       rating: "Top Class",
//       text: "Premium materials, clean workmanship, and on-time completion. Our office cabin looks like a high-end corporate setup now.",
//       name: "Vikram Singh",
//       address: "Hitech City, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=faces",
//       rating: "Beyond Expectations",
//       text: "We just wanted minor changes but they suggested better ideas that completely transformed our 2BHK. Truly impressive!",
//       name: "Lakshmi Iyer",
//       address: "Uppal, Hyderabad"
//     },
//     {
//       avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces",
//       rating: "Creative & Reliable",
//       text: "Loved the creative wall panels and lighting concepts. Team was very patient and completed everything within budget.",
//       name: "Harsha Vardhan",
//       address: "Secunderabad, Hyderabad"
//     }
//   ];




// import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import './home.css';

// const testimonials = [
//   {
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
//     rating: "Excellent",
//     text: "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!",
//     name: "Rajesh",
//     address: "Kukatpally, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces",
//     rating: "Fantastic style",
//     text: "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now.",
//     name: "Nagadivya Goli",
//     address: "Gachibowli, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces",
//     rating: "Outstanding",
//     text: "Very professional team. They understood our requirements perfectly and delivered the 3BHK exactly on time with premium finishes.",
//     name: "Srinivas Reddy",
//     address: "Madhapur, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces",
//     rating: "Highly Recommended",
//     text: "Best interior designers in Hyderabad! Great attention to detail, excellent communication and value for money.",
//     name: "Priya Sharma",
//     address: "Jubilee Hills, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop&crop=faces",
//     rating: "Perfect Execution",
//     text: "From 3D design to final handover — everything was flawless. Our modular kitchen is a dream now. Thank you team!",
//     name: "Anjali Mehta",
//     address: "Banjara Hills, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces",
//     rating: "Superb Work",
//     text: "We were worried about renovating our old house, but Deeraj Interiors made it look completely modern and spacious. Super happy!",
//     name: "Karthik Rao",
//     address: "Ameerpet, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=faces",
//     rating: "Elegant & Functional",
//     text: "They created a beautiful yet practical living + dining space for our family. Guests keep asking who did the interiors!",
//     name: "Meghana Varma",
//     address: "Manikonda, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=300&h=300&fit=crop&crop=faces",
//     rating: "Top Class",
//     text: "Premium materials, clean workmanship, and on-time completion. Our office cabin looks like a high-end corporate setup now.",
//     name: "Vikram Singh",
//     address: "Hitech City, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=faces",
//     rating: "Beyond Expectations",
//     text: "We just wanted minor changes but they suggested better ideas that completely transformed our 2BHK. Truly impressive!",
//     name: "Lakshmi Iyer",
//     address: "Uppal, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces",
//     rating: "Creative & Reliable",
//     text: "Loved the creative wall panels and lighting concepts. Team was very patient and completed everything within budget.",
//     name: "Harsha Vardhan",
//     address: "Secunderabad, Hyderabad"
//   }
// ];

// export default function Home() {
//   const navigate = useNavigate();
//   const [currentPair, setCurrentPair] = React.useState(0);
//   const [whatsappOpen, setWhatsappOpen] = useState(false);

//   // Helper function to open WhatsApp with pre-filled message
//   const openWhatsApp = (message) => {
//     const phone = "919000700930";
//     const encodedMessage = encodeURIComponent(message);
//     window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPair((prev) => (prev + 2) % testimonials.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="home-container">
//       <header className="hero">
//         <div className="hero-content">
//           <h1 className="hero-title-home">
//             {/* <h3>Deeraj</h3> */}
//             Interior <span className="highlight">Studio</span>
//           </h1>
//           <p className="hero-subtitle">
//             Creating timeless spaces with soul, elegance and modern comfort
//           </p>
//           <div className="hero-buttons">
//             <button
//               className="btn primary"
//               onClick={() => navigate("/portfolio/our-project")}
//             >
//               View Projects
//             </button>
//             <button
//               className="btn outline"
//               onClick={() => openWhatsApp("Hello Deeraj Interiors! I visited your website and would like to discuss my interior project.")}
//             >
//               Get in Touch
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* About Section */}
//       <section className="about-section">
//         <div className="about-wrapper">
//           <div className="about-image-container">
//             <div
//               className="about-image"
//               style={{
//                 backgroundImage: `url('https://s3.ap-south-1.amazonaws.com/images.woodenstreet.de/image/data/blog-images/partition-design/wooden-living-room-partition.jpg')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }}
//             ></div>
//           </div>
//           <div className="about-content">
//             <h2>ABOUT DEERAJ INTERIORS</h2>
//             <h1>Designing Dreams. Delivering Elegance</h1>
//             <p>
//               At Deeraj Interiors, we believe that every space has a story — and we're here to design it beautifully. With over 5 years of experience, we've transformed homes, offices, and commercial spaces into functional, aesthetic, and personalized environments that reflect the dreams of our clients.
//             </p>
//             <p>
//               From cozy 2BHK apartments to expansive villas, and from boutique offices to large-scale commercial interiors, our journey has been driven by word-of-mouth trust and design excellence. We've had the privilege to work with individual homeowners as well as renowned companies, bringing creativity, precision, and passion to every square foot.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us - Fade Carousel */}
//       <section className="why-choose-section">
//         <div className="why-wrapper">
//           <div className="why-content">
//             <h2>WHY CHOOSE US</h2>
//             <h1>Designed with Passion. Delivered with Precision</h1>
//             <p>
//               From concept to creation, our work speaks of trust, timelines, and tailored excellence. With 5+ years of word-of-mouth success, we now bring our promise to you online — better, faster, and more inspired than ever.
//             </p>
//             <button
//               className="btn primary explore-btn"
//               onClick={() => openWhatsApp("Hi Deeraj team! I'm interested in knowing more about your unique edge and recent work. Can we discuss?")}
//             >
//               EXPLORE OUR EDGE →
//             </button>
//           </div>
//           <div className="why-image-slider">
//   <div className="slides">
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     {/* <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4cb0d?auto=format&fit=crop&w=1200&q=80')` }}></div> */}
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438905-a9e3e6a5d6d8?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792508a6e?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221710640-c0eaaa2adb66?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4f?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616594039964-ae1f457de8c1?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210491893-03d54c0aaf87?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}></div> 
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585153490-8d2a2280d648?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438930-7e6d5a8d8e0?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd2dabb60b29?auto=format&fit=crop&w=1200&q=80')` }}></div> 
   
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80')` }}></div>
    
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154526-990dced4cb0d?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611892440504-42a792508a6e?auto=format&fit=crop&w=1200&q=80')` }}></div>
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438905-a9e3e6a5d6d8?auto=format&fit=crop&w=1200&q=80')` }}></div>

//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1616594039964-ae1f457de8c1?auto=format&fit=crop&w=1200&q=80')` }}></div>

//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}></div>
  
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80')` }}></div>
    
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80')` }}></div>
   
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}></div>
    
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}></div>
    
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1618221710640-c0eaaa2adb66?auto=format&fit=crop&w=1200&q=80')` }}></div>
   
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556910103-1c02745aae4f?auto=format&fit=crop&w=1200&q=80')` }}></div>
   
//     <div className="slide" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600563438930-7e6d5a8d8e0?auto=format&fit=crop&w=1200&q=80')` }}></div>
//   </div>
// </div>
//         </div>
//       </section>

//       {/* Our Products Section */}
//       <section className="products-section">
//         <div className="products-wrapper">
//           <h2>OUR PRODUCTS</h2>
//           <p className="section-subtitle">
//             Premium ready-to-use interior products crafted with quality & style
//           </p>
//           <div className="products-grid">
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/81irP73vuqL.jpg')` }}
//               ></div>
//               <h3>Book Shelf</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/H600000035_2?fit=fit&wid=1200&hei=900')` }}
//               ></div>
//               <h3>Book Shelf</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/51Oht6zQFML._AC_UF894,1000_QL80_.jpg')` }}
//               ></div>
//               <h3>Modern Center Table</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71tFMmZr3dL._AC_UF894,1000_QL80_.jpg')` }}
//               ></div>
//               <h3>Printed Melamine Dinner Plate</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71R33gKo8hL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg')` }}
//               ></div>
//               <h3>Flower Vase</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/91FtfQJ-hfL._AC_UF894,1000_QL80_.jpg')` }}
//               ></div>
//               <h3>Classic Wall Art</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/dbfff93e-7141-4777-84dc-9b7220c66674.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}
//               ></div>
//               <h3>Green Aluminium Deer Sculpture</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/03870a4f-9af8-4a26-b94f-10f922dd6a01.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}
//               ></div>
//               <h3>Decoration Leaf</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71yIOkGTTIL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg')` }}
//               ></div>
//               <h3>Beautiful Wall Mirror</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://salsify-ecdn.com/images/0de564332f8386e2f3c73905415624e8.jpg')` }}
//               ></div>
//               <h3>Gold Aluminium Face Sculpture</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/b3b53ac2-4451-48a4-b85e-ffff6650c5c0.__CR0,0,800,600_PT0_SX800_V1___.jpg')` }}
//               ></div>
//               <h3>Black Alloy Metal Floral Shape</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//             <div className="product-card">
//               <div
//                 className="product-image"
//                 style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/7f63a722-0f87-4268-9127-9667b2109201.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}
//               ></div>
//               <h3>Gold Aluminium Antique Leaf</h3>
//               <button
//                 className="btn primary small"
//                 onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}
//               >
//                 View in Store →
//               </button>
//             </div>
//           </div>
//           <div className="products-cta">
//             <button
//               className="btn primary explore-btn"
//               onClick={() => window.open(`https://id.vyaparify.com/deeraj-interiors`, "_blank")}
//             >
//               View All Products →
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Services Overview Section */}
//       <section className="services-section">
//         <div className="services-wrapper">
//           <h2>OUR DESIGN SERVICES</h2>
//           <p className="section-subtitle">
//             Everything you need. All under one roof.
//           </p>
//           <div className="services-grid">
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Bedroom Design</div>
//               <div className="service-hover-content">
//                 <p>Create a peaceful and restful sanctuary with our expert bedroom design services. From custom bed frames to luxurious bedding, we help you create a space that's both comfortable and stylish.</p>
//                 <button
//                   className="btn primary"
//                   onClick={() => openWhatsApp("Hello! I'm interested in your Bedroom Design services. Can we discuss possibilities?")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Living Room Design</div>
//               <div className="service-hover-content">
//                 <p>Whether you're looking for a cozy space to relax with family or a stylish entertaining area for guests, we can create a living room that suits your lifestyle and reflects your personality.</p>
//                 <button
//                   className="btn primary"
//                   onClick={() => openWhatsApp("Hi! Looking to redesign my Living Room. Interested in your designs.")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Kitchen Design</div>
//               <div className="service-hover-content">
//                 <p>At Deeraj Interiors, we specialize in crafting kitchen interiors that are as beautiful as they are functional — thoughtfully designed to reflect your style and suit your everyday needs.</p>
//                 <button
//                   className="btn primary"
//                   onClick={() => openWhatsApp("Hello! Interested in your modular Kitchen design services. Can we talk?")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Home Office Design</div>
//               <div className="service-hover-content">
//                 <p>With more people working from home, it's important to have a functional and inspiring home office. Let us help you create a space that's both productive and stylish.</p>
//                 <button
//                   className="btn primary"
//                   onClick={() => openWhatsApp("Hi! I need help designing a Home Office. Interested in your work.")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Bathroom Design</div>
//               <div className="service-hover-content">
//                 <p>Transform your bathroom into a spa-like retreat with our expert design services. From luxurious showers to elegant fixtures, we create a space that's both beautiful and functional.</p>
//                 <button
//                   className="btn primary"
//                   onClick={() => openWhatsApp("Hello! Looking to redesign my Bathroom. Can we discuss your services?")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//             <div className="service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="service-title">Outdoor Living Design</div>
//               <div className="service-hover-content">
//                 <p>Extend your living space to the outdoors with our expert outdoor living design services. From cozy fire pits to luxurious outdoor kitchens, we help you create a space that's perfect for entertaining and relaxation.</p>
//                 <button
//                   className="btn primary"
//                   onClick={() => openWhatsApp("Hi! Interested in Outdoor Living / Terrace design. Let's talk!")}
//                 >
//                   Know More
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Updated Testimonials - Horizontal Cards with Dots */}
//       <section className="testimonials-section" style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}>
//         <div className="testimonials-wrapper">
//           <h2 className="testimonials-title-home">Loved by Families Across the City.</h2>
//           <div className="testimonials-horizontal-container">
//             {(() => {
//               const cards = [];
//               const total = testimonials.length;
//               let idx1 = currentPair % total;
//               let idx2 = (currentPair + 1) % total;
//               cards.push(testimonials[idx1]);
//               if (total > 1) {
//                 cards.push(testimonials[idx2]);
//               }
//               return cards.map((item, index) => (
//                 <div key={index} className="testimonial-horizontal-card">
//                   <div className="testimonial-left">
//                     <div className="avatar-circle">
//                       <img
//                         src={item.avatar}
//                         alt={item.name}
//                         style={{
//                           width: '100%',
//                           height: '100%',
//                           objectFit: 'cover',
//                           borderRadius: '15%'
//                         }}
//                       />
//                     </div>
//                     <div className="testimonial-name-below">
//                       {item.name}
//                     </div>
//                   </div>
//                   <div className="testimonial-right">
//                     <div className="stars">
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                       <span className="star">★</span>
//                     </div>
//                     <h3 className="testimonial-rating">
//                       {item.rating}
//                     </h3>
//                     <p className="testimonial-text">
//                       "{item.text}"
//                     </p>
//                     <div className="testimonial-address">
//                       {item.address}
//                     </div>
//                   </div>
//                 </div>
//               ));
//             })()}
//           </div>
//           {/* Navigation dots */}
//           <div className="testimonial-dots">
//             {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
//               <span
//                 key={index}
//                 className={`dot ${index === Math.floor(currentPair / 2) ? 'active' : ''}`}
//                 onClick={() => setCurrentPair(index * 2)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact/Footer Section */}
//       <footer className="contact-section">
//         <div className="contact-wrapper">
//           <h2 className="connect-title">CONNECT WITH US</h2>
//           <div className="footer-main-content">
//             {/* Left column: GIF + Map underneath */}
//             <div className="footer-gif-side">
//               <div className="company-gif-container">
//                 <img
//                   src="https://i.pinimg.com/originals/b7/38/e8/b738e85cad3d9aee9fa1ff15b6e4faaf.gif"
//                   alt="Our Design Philosophy in Motion"
//                   className="company-gif-image"
//                 />
//                 <p className="gif-caption">Our Design Philosophy in Motion</p>
//               </div>
//               {/* Google Map */}
//               <div className="map-container" style={{ marginTop: '20px' }}>
//                 <iframe
//                   title="Deeraj Interiors Location - Suchitra Circle, Hyderabad"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.314!2d78.478!3d17.5108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb999bffffffff%3A0x0!2zMTfCsDMwJzM5LjEiTiA3OMKwMjgnNDAuOCJF!5e0!3m2!1sen!2sin!4v1738944000000!5m2!1sen!2sin"
//                   width="100%"
//                   height="320"
//                   style={{ border: 0, borderRadius: "10px" }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </div>
//             {/* Right column: Company info + Subscribe */}
//             <div className="footer-info-side">
//               <div className="company-info-block">
//                 <h1 className="company-name">DEERAJ INTERIORS</h1>
//                 <p className="company-address">
//                   PLOT NO 119, ABOVE RELIANCE TRENDS FOOTWEAR,<br />
//                   SUCHITRA CIRCLE, PET BASHEERABAD,<br />
//                   HYDERABAD, TS 500067
//                 </p>
//                 <p className="company-phone">+91 90007 00910 / 90007 00930</p>
//               </div>
//               <div className="newsletter-box">
//                 <h3>Subscribe</h3>
//                 <p>
//               Design your dream home with elegance and style
// Contact now and enjoy 10% savings on your first booking!
//                 </p>
//                 {/* <button className="btn primary" onClick={() => navigate("/contact-us")}>
//                   SIGN UP
//                 </button> */}
//               </div>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <div className="legal-links">
//               <a href="/privacy-policy">Privacy Policy</a>
//               <span className="separator"> • </span>
//               <a href="/terms-and-conditions">Terms and Conditions</a>
//             </div>
//             <p className="copyright">
//               COPYRIGHT © 2025 DEERAJ INTERIORS - ALL RIGHTS RESERVED
//             </p>
//           </div>
//         </div>
//       </footer>

//       {/* WhatsApp Floating Button + Popup */}
//       <div className="whatsapp-container">
//         {/* Floating Button */}
//         <div
//           className="whatsapp-float"
//           onClick={() => setWhatsappOpen(!whatsappOpen)}
//         >
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
//             alt="WhatsApp"
//           />
//         </div>
//         {/* Popup */}
//         {whatsappOpen && (
//           <div className="whatsapp-popup">
//             <h3>Start WhatsApp Chat</h3>
//             <input type="text" placeholder="Your Name" id="wa-name" />
//             <input type="text" placeholder="Project Type (2BHK / Kitchen / Office)" id="wa-project" />
//             <textarea placeholder="Your Message" id="wa-message"></textarea>
//             <button
//               onClick={() => {
//                 const name = document.getElementById("wa-name").value;
//                 const project = document.getElementById("wa-project").value;
//                 const message = document.getElementById("wa-message").value;
//                 const finalMessage =
//                   `Hello Deeraj Interiors,%0A%0A` +
//                   `Name: ${name}%0A` +
//                   `Project: ${project}%0A` +
//                   `Message: ${message}%0A%0A` +
//                   `I am interested in discussing my interior project.`;
//                 window.open(
//                   `https://wa.me/919000700930?text=${finalMessage}`,
//                   "_blank"
//                 );
//               }}
//             >
//               Chat on WhatsApp
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import './home.css';

// const testimonials = [
//   {
//     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
//     rating: "Excellent",
//     text: "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!",
//     name: "Rajesh",
//     address: "Kukatpally, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces",
//     rating: "Fantastic style",
//     text: "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now.",
//     name: "Nagadivya Goli",
//     address: "Gachibowli, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces",
//     rating: "Outstanding",
//     text: "Very professional team. They understood our requirements perfectly and delivered the 3BHK exactly on time with premium finishes.",
//     name: "Srinivas Reddy",
//     address: "Madhapur, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces",
//     rating: "Highly Recommended",
//     text: "Best interior designers in Hyderabad! Great attention to detail, excellent communication and value for money.",
//     name: "Priya Sharma",
//     address: "Jubilee Hills, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop&crop=faces",
//     rating: "Perfect Execution",
//     text: "From 3D design to final handover — everything was flawless. Our modular kitchen is a dream now. Thank you team!",
//     name: "Anjali Mehta",
//     address: "Banjara Hills, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces",
//     rating: "Superb Work",
//     text: "We were worried about renovating our old house, but Deeraj Interiors made it look completely modern and spacious. Super happy!",
//     name: "Karthik Rao",
//     address: "Ameerpet, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=faces",
//     rating: "Elegant & Functional",
//     text: "They created a beautiful yet practical living + dining space for our family. Guests keep asking who did the interiors!",
//     name: "Meghana Varma",
//     address: "Manikonda, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=300&h=300&fit=crop&crop=faces",
//     rating: "Top Class",
//     text: "Premium materials, clean workmanship, and on-time completion. Our office cabin looks like a high-end corporate setup now.",
//     name: "Vikram Singh",
//     address: "Hitech City, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=faces",
//     rating: "Beyond Expectations",
//     text: "We just wanted minor changes but they suggested better ideas that completely transformed our 2BHK. Truly impressive!",
//     name: "Lakshmi Iyer",
//     address: "Uppal, Hyderabad"
//   },
//   {
//     avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces",
//     rating: "Creative & Reliable",
//     text: "Loved the creative wall panels and lighting concepts. Team was very patient and completed everything within budget.",
//     name: "Harsha Vardhan",
//     address: "Secunderabad, Hyderabad"
//   }
// ];

// const heroSlides = [
//   { type: 'image', image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=2340&q=100", tagline: "Luxury Living Spaces Tailored to Your Taste" },
//   { type: 'image', image: "https://www.mydomaine.com/thmb/kqpD_FfR-tqNAxxWuDCBVgZUpmY=/2000x0/filters:no_upscale():strip_icc()/RD_LaurelWay_0111_F-43c9ae05930b4c0682d130eee3ede5df.jpg", tagline: "Modern Kitchens Where Memories Are Made" },
//   { type: 'image', image: "https://www.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_33053395.htm#fromView=search&page=1&position=4&uuid=28d0ee48-c6b6-4b91-8308-302e94fb0ca0&query=INTERIOR+DESIGN+", tagline: "Every Corner Crafted with Passion" },
//   { type: 'image', image: "https://www.mydomaine.com/thmb/aJrVHaGS-hJNZbCod1-hGgDTQvE=/1500x0/filters:no_upscale():strip_icc()/rustic-bedrooms-8-44cbcb704764478a9c8af7bc5ecd9d63.jpg", tagline: "Dreamy Bedrooms Designed for Deep Rest" },
//   { type: 'image', image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=2340&q=100", tagline: "Timeless Dining Spaces for Cherished Moments" },
//   { type: 'image', image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=2340&q=100", tagline: "Refined Aesthetics for the Modern Home" },
//   { type: 'image', image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=2340&q=100", tagline: "Sophisticated Interiors for Discerning Homeowners" },
//   { type: 'image', image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=2340&q=100", tagline: "Craftsmanship & Detail in Every Corner" },
//   { type: 'image', image: "https://cdn.home-designing.com/wp-content/uploads/2018/03/home-office-setup.jpg", tagline: "Inspired Workspaces That Fuel Creativity" },
//   { type: 'image', image: "https://www.thespruce.com/thmb/SDKwWDl5Qf0OchfS0wepZn3AEvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-spa-retreat-style-bathrooms-1975792-hero-f565696830d147c08dae9d0ef8c8a59c.jpg", tagline: "Spa-Like Bathrooms for Ultimate Relaxation" },
//   { type: 'image', image: "https://germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg", tagline: "Elegant Spaces That Tell Your Story" },
//   { type: 'image', image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=2340&q=100", tagline: "Where Comfort Meets Contemporary Design" },
//   { type: 'image', image: "https://images.squarespace-cdn.com/content/v1/65a8583b3f2bb32732bff587/fa5d488b-e385-4c3b-a80a-5b2a40ba968c/1897+Lilac+Ln-44.jpg", tagline: "Transforming Houses into Dream Homes" },
//   { type: 'image', image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2340&q=100", tagline: "Bold Statements in Every Room We Design" },
//   { type: 'image', image: "https://www.bhg.com/thmb/tMC_sOM2oF-NhItXBZOChTXSFUs=/4000x0/filters:no_upscale():strip_icc()/Open-concept-living-room-TWP0380-CV1hghhEaBBAkX_uv8K9cw-3313dfd39e2b42f5b37f43b8dfa14e08.jpg", tagline: "Where Architecture Meets Artistic Vision" },
//   { type: 'image', image: "https://www.decorilla.com/online-decorating/wp-content/uploads/2022/10/Modern-open-floor-plan-design-by-Decorilla-designer-Alessia-G.jpeg", tagline: "Living Rooms Designed for Life & Laughter" },
//   { type: 'image', image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=2340&q=100", tagline: "Spaces That Inspire, Rooms That Delight" },
//   { type: 'image', image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2340&q=100", tagline: "Premium Finishes, Timeless Design" },
//   { type: 'image', image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=2340&q=100", tagline: "Kitchens Built for Culinary Dreams" },
// ];

// export default function Home() {
//   const navigate = useNavigate();
//   const [currentPair, setCurrentPair] = React.useState(0);
//   const [whatsappOpen, setWhatsappOpen] = useState(false);

//   // Hero slideshow state
//   const [heroIndex, setHeroIndex] = useState(0);
//   const [heroFading, setHeroFading] = useState(false);

//   // Helper function to open WhatsApp with pre-filled message
//   const openWhatsApp = (message) => {
//     const phone = "919000700930";
//     const encodedMessage = encodeURIComponent(message);
//     window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
//   };

//   // Testimonials auto-rotate
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentPair((prev) => (prev + 2) % testimonials.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Hero slideshow auto-rotate — 2s per image
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setHeroFading(true);
//       setTimeout(() => {
//         setHeroIndex((prev) => (prev + 1) % heroSlides.length);
//         setHeroFading(false);
//       }, 500);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, [heroIndex]);

//   return (
//     <div className="home-container">

//       {/* ── UPDATED HERO SECTION with slideshow ── */}
//       <header className="home-hero" style={{ position: 'relative', overflow: 'hidden' }}>

//         {/* Background image layers — crossfade via opacity */}
//         {heroSlides.map((slide, i) => (
//           <div
//             key={i}
//             style={{
//               position: 'absolute',
//               inset: 0,
//               backgroundImage: `url('${slide.image}')`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               opacity: i === heroIndex ? 1 : 0,
//               transition: 'opacity 0.5s ease-in-out',
//               zIndex: 0
//             }}
//           />
//         ))}

//         {/* Dark overlay */}
//         <div style={{
//           position: 'absolute',
//           inset: 0,
//           background: 'linear-gradient(rgba(0,0,0,0.48), rgba(0,0,0,0.58))',
//           zIndex: 1
//         }} />

//         {/* Hero content */}
//         <div className="home-hero-content" style={{ position: 'relative', zIndex: 2 }}>
//           <h1 className="home-hero-title-home">
//             Interior <span className="home-highlight">Studio</span>
//           </h1>

//           {/* Animated tagline that changes with slide */}
//           <p
//             className="home-hero-subtitle"
//             style={{
//               opacity: heroFading ? 0 : 1,
//               transform: heroFading ? 'translateY(8px)' : 'translateY(0)',
//               transition: 'opacity 0.3s ease, transform 0.3s ease'
//             }}
//           >
//             {heroSlides[heroIndex].tagline}
//           </p>

//           <div className="home-hero-buttons">
//             <button
//               className="home-btn home-primary"
//               onClick={() => navigate("/portfolio/our-project")}
//             >
//               View Projects
//             </button>
//             <button
//               className="home-btn home-outline"
//               onClick={() => openWhatsApp("Hello Deeraj Interiors! I visited your website and would like to discuss my interior project.")}
//             >
//               Get in Touch
//             </button>
//           </div>

//           {/* Slide indicator dots */}
//           <div style={{
//             display: 'flex',
//             justifyContent: 'center',
//             gap: '10px',
//             marginTop: '2.5rem'
//           }}>
//             {heroSlides.map((_, i) => (
//               <span
//                 key={i}
//                 onClick={() => { setHeroFading(true); setTimeout(() => { setHeroIndex(i); setHeroFading(false); }, 800); }}
//                 style={{
//                   width: i === heroIndex ? '28px' : '10px',
//                   height: '10px',
//                   borderRadius: '5px',
//                   background: i === heroIndex ? 'orangered' : 'rgba(255,255,255,0.5)',
//                   cursor: 'pointer',
//                   transition: 'all 0.4s ease',
//                   display: 'inline-block'
//                 }}
//               />
//             ))}
//           </div>
//         </div>
//       </header>
//       {/* ── END UPDATED HERO SECTION ── */}

//       {/* About Section */}
//       <section className="home-about-section">
//         <div className="home-about-wrapper">
//           <div className="home-about-image-container">
//             <div
//               className="home-about-image"
//               style={{
//                 backgroundImage: `url('https://s3.ap-south-1.amazonaws.com/images.woodenstreet.de/image/data/blog-images/partition-design/wooden-living-room-partition.jpg')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center'
//               }}
//             ></div>
//           </div>
//           <div className="home-about-content">
//             <h2>ABOUT DEERAJ INTERIORS</h2>
//             <h1>Designing Dreams. Delivering Elegance</h1>
//             <p>
//               At Deeraj Interiors, we believe that every space has a story — and we're here to design it beautifully. With over 5 years of experience, we've transformed homes, offices, and commercial spaces into functional, aesthetic, and personalized environments that reflect the dreams of our clients.
//             </p>
//             <p>
//               From cozy 2BHK apartments to expansive villas, and from boutique offices to large-scale commercial interiors, our journey has been driven by word-of-mouth trust and design excellence. We've had the privilege to work with individual homeowners as well as renowned companies, bringing creativity, precision, and passion to every square foot.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us - Fade Carousel */}
//       <section className="home-why-choose-section">
//         <div className="home-why-wrapper">
//           <div className="home-why-content">
//             <h2>WHY CHOOSE US</h2>
//             <h1>Designed with Passion. Delivered with Precision</h1>
//             <p>
//               From concept to creation, our work speaks of trust, timelines, and tailored excellence. With 5+ years of word-of-mouth success, we now bring our promise to you online — better, faster, and more inspired than ever.
//             </p>
//             <button
//               className="home-btn home-primary home-explore-btn"
//               onClick={() => openWhatsApp("Hi Deeraj team! I'm interested in knowing more about your unique edge and recent work. Can we discuss?")}
//             >
//               EXPLORE OUR EDGE →
//             </button>
//           </div>
//        <div className="single-image-container">
//   <div
//     className="single-image"
//     style={{
//       backgroundImage:
//         "url('https://images.unsplash.com/photo-1648881806148-e5c51179c826?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//     }}
//   ></div>
// </div>
// </div>
//       </section>

//       {/* Our Products Section */}
//       {/* <section className="home-products-section">
//         <div className="home-products-wrapper">
//           <h2>OUR PRODUCTS</h2>
//           <p className="home-section-subtitle">
//             Premium ready-to-use interior products crafted with quality & style
//           </p>
//           <div className="home-products-grid">
//             <div className="home-product-card">
//               <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/81irP73vuqL.jpg')` }}></div>
//               <h3>Book Shelf</h3>
//               <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
//             </div>
//             <div className="home-product-card">
//               <div className="home-product-image" style={{ backgroundImage: `url('https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/H600000035_2?fit=fit&wid=1200&hei=900')` }}></div>
//               <h3>Book Shelf</h3>
//               <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
//             </div>
//             <div className="home-product-card">
//               <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/51Oht6zQFML._AC_UF894,1000_QL80_.jpg')` }}></div>
//               <h3>Modern Center Table</h3>
//               <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
//             </div>
//             <div className="home-product-card">
//               <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71tFMmZr3dL._AC_UF894,1000_QL80_.jpg')` }}></div>
//               <h3>Printed Melamine Dinner Plate</h3>
//               <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
//             </div>
//             <div className="home-product-card">
//               <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71R33gKo8hL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg')` }}></div>
//               <h3>Flower Vase</h3>
//               <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
//             </div>
//             <div className="home-product-card">
//               <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/91FtfQJ-hfL._AC_UF894,1000_QL80_.jpg')` }}></div>
//               <h3>Classic Wall Art</h3>
//               <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
//             </div>
//             <div className="home-product-card">
//               <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/dbfff93e-7141-4777-84dc-9b7220c66674.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}></div>
//               <h3>Green Aluminium Deer Sculpture</h3>
//               <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
//             </div>
//             <div className="home-product-card">
//               <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/03870a4f-9af8-4a26-b94f-10f922dd6a01.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}></div>
//               <h3>Decoration Leaf</h3>
//               <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
//             </div>
//             <div className="home-product-card">
//               <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71yIOkGTTIL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg')` }}></div>
//               <h3>Beautiful Wall Mirror</h3>
//               <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
//             </div>
//             <div className="home-product-card">
//               <div className="home-product-image" style={{ backgroundImage: `url('https://salsify-ecdn.com/images/0de564332f8386e2f3c73905415624e8.jpg')` }}></div>
//               <h3>Gold Aluminium Face Sculpture</h3>
//               <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
//             </div>
//             <div className="home-product-card">
//               <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/b3b53ac2-4451-48a4-b85e-ffff6650c5c0.__CR0,0,800,600_PT0_SX800_V1___.jpg')` }}></div>
//               <h3>Black Alloy Metal Floral Shape</h3>
//               <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
//             </div>
//             <div className="home-product-card">
//               <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/7f63a722-0f87-4268-9127-9667b2109201.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}></div>
//               <h3>Gold Aluminium Antique Leaf</h3>
//               <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
//             </div>
//           </div>
//           <div className="home-products-cta">
//             <button className="home-btn home-primary home-explore-btn" onClick={() => window.open(`https://id.vyaparify.com/deeraj-interiors`, "_blank")}>
//               View All Products →
//             </button>
//           </div>
//         </div>
//       </section> */}

//       {/* Services Overview Section */}
//       <section className="home-services-section">
//         <div className="home-services-wrapper">
//           <h2>OUR DESIGN SERVICES</h2>
//           <p className="home-section-subtitle">Everything you need. All under one roof.</p>
//           <div className="home-services-grid">
//             <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="home-service-title">Bedroom Design</div>
//               <div className="home-service-hover-content">
//                 <p>Create a peaceful and restful sanctuary with our expert bedroom design services. From custom bed frames to luxurious bedding, we help you create a space that's both comfortable and stylish.</p>
//                 <button className="home-btn home-primary" onClick={() => openWhatsApp("Hello! I'm interested in your Bedroom Design services. Can we discuss possibilities?")}>Know More</button>
//               </div>
//             </div>
//             <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
//               <div className="home-service-title">Living Room Design</div>
//               <div className="home-service-hover-content">
//                 <p>Whether you're looking for a cozy space to relax with family or a stylish entertaining area for guests, we can create a living room that suits your lifestyle and reflects your personality.</p>
//                 <button className="home-btn home-primary" onClick={() => openWhatsApp("Hi! Looking to redesign my Living Room. Interested in your designs.")}>Know More</button>
//               </div>
//             </div>
//             <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1722605090433-41d1183a792d?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
//               <div className="home-service-title">Kitchen Design</div>
//               <div className="home-service-hover-content">
//                 <p>At Deeraj Interiors, we specialize in crafting kitchen interiors that are as beautiful as they are functional — thoughtfully designed to reflect your style and suit your everyday needs.</p>
//                 <button className="home-btn home-primary" onClick={() => openWhatsApp("Hello! Interested in your modular Kitchen design services. Can we talk?")}>Know More</button>
//               </div>
//             </div>
//             <div className="home-service-card" style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
//               <div className="home-service-title">Home Office Design</div>
//               <div className="home-service-hover-content">
//                 <p>With more people working from home, it's important to have a functional and inspiring home office. Let us help you create a space that's both productive and stylish.</p>
//                 <button className="home-btn home-primary" onClick={() => openWhatsApp("Hi! I need help designing a Home Office. Interested in your work.")}>Know More</button>
//               </div>
//             </div>
//             <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="home-service-title">Bathroom Design</div>
//               <div className="home-service-hover-content">
//                 <p>Transform your bathroom into a spa-like retreat with our expert design services. From luxurious showers to elegant fixtures, we create a space that's both beautiful and functional.</p>
//                 <button className="home-btn home-primary" onClick={() => openWhatsApp("Hello! Looking to redesign my Bathroom. Can we discuss your services?")}>Know More</button>
//               </div>
//             </div>
//             <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
//               <div className="home-service-title">Outdoor Living Design</div>
//               <div className="home-service-hover-content">
//                 <p>Extend your living space to the outdoors with our expert outdoor living design services. From cozy fire pits to luxurious outdoor kitchens, we help you create a space that's perfect for entertaining and relaxation.</p>
//                 <button className="home-btn home-primary" onClick={() => openWhatsApp("Hi! Interested in Outdoor Living / Terrace design. Let's talk!")}>Know More</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Updated Testimonials - Horizontal Cards with Dots */}
//       <section className="home-testimonials-section" style={{
//         backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundAttachment: 'fixed'
//       }}>
//         <div className="home-testimonials-wrapper">
//           <h2 className="home-testimonials-title-home">Loved by Families Across the City.</h2>
//           <div className="home-testimonials-horizontal-container">
//             {(() => {
//               const cards = [];
//               const total = testimonials.length;
//               let idx1 = currentPair % total;
//               let idx2 = (currentPair + 1) % total;
//               cards.push(testimonials[idx1]);
//               if (total > 1) { cards.push(testimonials[idx2]); }
//               return cards.map((item, index) => (
//                 <div key={index} className="home-testimonial-horizontal-card">
//                   <div className="home-testimonial-left">
//                     <div className="home-avatar-circle">
//                       <img src={item.avatar} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15%' }} />
//                     </div>
//                     <div className="home-testimonial-name-below">{item.name}</div>
//                   </div>
//                   <div className="home-testimonial-right">
//                     <div className="home-stars">
//                       <span className="home-star">★</span><span className="home-star">★</span><span className="home-star">★</span><span className="home-star">★</span><span className="home-star">★</span>
//                     </div>
//                     <h3 className="home-testimonial-rating">{item.rating}</h3>
//                     <p className="home-testimonial-text">"{item.text}"</p>
//                     <div className="home-testimonial-address">{item.address}</div>
//                   </div>
//                 </div>
//               ));
//             })()}
//           </div>
//           <div className="home-testimonial-dots">
//             {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
//               <span
//                 key={index}
//                 className={`home-dot ${index === Math.floor(currentPair / 2) ? 'home-active' : ''}`}
//                 onClick={() => setCurrentPair(index * 2)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact/Footer Section */}
//  <footer className="di-footer">
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

//       {/* WhatsApp Floating Button + Popup */}
//       <div className="home-whatsapp-container">
//         <div className="home-whatsapp-float" onClick={() => setWhatsappOpen(!whatsappOpen)}>
//           <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
//         </div>
//         {whatsappOpen && (
//           <div className="home-whatsapp-popup">
//             <h3>Start WhatsApp Chat</h3>
//             <input type="text" placeholder="Your Name" id="wa-name" />
//             <input type="text" placeholder="Project Type (2BHK / Kitchen / Office)" id="wa-project" />
//             <textarea placeholder="Your Message" id="wa-message"></textarea>
//             <button
//               onClick={() => {
//                 const name = document.getElementById("wa-name").value;
//                 const project = document.getElementById("wa-project").value;
//                 const message = document.getElementById("wa-message").value;
//                 const finalMessage =
//                   `Hello Deeraj Interiors,%0A%0A` +
//                   `Name: ${name}%0A` +
//                   `Project: ${project}%0A` +
//                   `Message: ${message}%0A%0A` +
//                   `I am interested in discussing my interior project.`;
//                 window.open(`https://wa.me/919000700930?text=${finalMessage}`, "_blank");
//               }}
//             >
//               Chat on WhatsApp
//             </button>
//           </div>
//         )}
//       </div>
// {/* ── Phone Call Floating Button ── */}
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





// ==================
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './home.css';

const testimonials = [
  {
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
    rating: "Excellent",
    text: "The work is excellent, and there's absolutely no complaints. They transformed our home beautifully!",
    name: "Rajesh",
    address: "Kukatpally, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=faces",
    rating: "Fantastic style",
    text: "A big thanks to everyone at Deeraj Interiors! My tired old apartment looks like a luxury hotel now.",
    name: "Nagadivya Goli",
    address: "Gachibowli, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=faces",
    rating: "Outstanding",
    text: "Very professional team. They understood our requirements perfectly and delivered the 3BHK exactly on time with premium finishes.",
    name: "Srinivas Reddy",
    address: "Madhapur, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces",
    rating: "Highly Recommended",
    text: "Best interior designers in Hyderabad! Great attention to detail, excellent communication and value for money.",
    name: "Priya Sharma",
    address: "Jubilee Hills, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=300&fit=crop&crop=faces",
    rating: "Perfect Execution",
    text: "From 3D design to final handover — everything was flawless. Our modular kitchen is a dream now. Thank you team!",
    name: "Anjali Mehta",
    address: "Banjara Hills, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces",
    rating: "Superb Work",
    text: "We were worried about renovating our old house, but Deeraj Interiors made it look completely modern and spacious. Super happy!",
    name: "Karthik Rao",
    address: "Ameerpet, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=faces",
    rating: "Elegant & Functional",
    text: "They created a beautiful yet practical living + dining space for our family. Guests keep asking who did the interiors!",
    name: "Meghana Varma",
    address: "Manikonda, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=300&h=300&fit=crop&crop=faces",
    rating: "Top Class",
    text: "Premium materials, clean workmanship, and on-time completion. Our office cabin looks like a high-end corporate setup now.",
    name: "Vikram Singh",
    address: "Hitech City, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=faces",
    rating: "Beyond Expectations",
    text: "We just wanted minor changes but they suggested better ideas that completely transformed our 2BHK. Truly impressive!",
    name: "Lakshmi Iyer",
    address: "Uppal, Hyderabad"
  },
  {
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces",
    rating: "Creative & Reliable",
    text: "Loved the creative wall panels and lighting concepts. Team was very patient and completed everything within budget.",
    name: "Harsha Vardhan",
    address: "Secunderabad, Hyderabad"
  }
];

const heroSlides = [
  { type: 'image', image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=2340&q=100", tagline: "Luxury Living Spaces Tailored to Your Taste" },
  { type: 'image', image: "https://www.mydomaine.com/thmb/kqpD_FfR-tqNAxxWuDCBVgZUpmY=/2000x0/filters:no_upscale():strip_icc()/RD_LaurelWay_0111_F-43c9ae05930b4c0682d130eee3ede5df.jpg", tagline: "Modern Kitchens Where Memories Are Made" },
  { type: 'image', image: "https://www.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_33053395.htm#fromView=search&page=1&position=4&uuid=28d0ee48-c6b6-4b91-8308-302e94fb0ca0&query=INTERIOR+DESIGN+", tagline: "Every Corner Crafted with Passion" },
  { type: 'image', image: "https://www.mydomaine.com/thmb/aJrVHaGS-hJNZbCod1-hGgDTQvE=/1500x0/filters:no_upscale():strip_icc()/rustic-bedrooms-8-44cbcb704764478a9c8af7bc5ecd9d63.jpg", tagline: "Dreamy Bedrooms Designed for Deep Rest" },
  { type: 'image', image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=2340&q=100", tagline: "Timeless Dining Spaces for Cherished Moments" },
  { type: 'image', image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&w=2340&q=100", tagline: "Refined Aesthetics for the Modern Home" },
  { type: 'image', image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=2340&q=100", tagline: "Sophisticated Interiors for Discerning Homeowners" },
  { type: 'image', image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=2340&q=100", tagline: "Craftsmanship & Detail in Every Corner" },
  { type: 'image', image: "https://cdn.home-designing.com/wp-content/uploads/2018/03/home-office-setup.jpg", tagline: "Inspired Workspaces That Fuel Creativity" },
  { type: 'image', image: "https://www.thespruce.com/thmb/SDKwWDl5Qf0OchfS0wepZn3AEvE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/perfect-spa-retreat-style-bathrooms-1975792-hero-f565696830d147c08dae9d0ef8c8a59c.jpg", tagline: "Spa-Like Bathrooms for Ultimate Relaxation" },
  { type: 'image', image: "https://germaniaconstruction.com/wp-content/uploads/2022/11/park-city-custom-home-builder-great-room.jpg", tagline: "Elegant Spaces That Tell Your Story" },
  { type: 'image', image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=2340&q=100", tagline: "Where Comfort Meets Contemporary Design" },
  { type: 'image', image: "https://images.squarespace-cdn.com/content/v1/65a8583b3f2bb32732bff587/fa5d488b-e385-4c3b-a80a-5b2a40ba968c/1897+Lilac+Ln-44.jpg", tagline: "Transforming Houses into Dream Homes" },
  { type: 'image', image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2340&q=100", tagline: "Bold Statements in Every Room We Design" },
  { type: 'image', image: "https://www.bhg.com/thmb/tMC_sOM2oF-NhItXBZOChTXSFUs=/4000x0/filters:no_upscale():strip_icc()/Open-concept-living-room-TWP0380-CV1hghhEaBBAkX_uv8K9cw-3313dfd39e2b42f5b37f43b8dfa14e08.jpg", tagline: "Where Architecture Meets Artistic Vision" },
  { type: 'image', image: "https://www.decorilla.com/online-decorating/wp-content/uploads/2022/10/Modern-open-floor-plan-design-by-Decorilla-designer-Alessia-G.jpeg", tagline: "Living Rooms Designed for Life & Laughter" },
  { type: 'image', image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=2340&q=100", tagline: "Spaces That Inspire, Rooms That Delight" },
  { type: 'image', image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=2340&q=100", tagline: "Premium Finishes, Timeless Design" },
  { type: 'image', image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=2340&q=100", tagline: "Kitchens Built for Culinary Dreams" },
];

export default function Home() {
  const navigate = useNavigate();
  const [currentPair, setCurrentPair] = React.useState(0);
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  // Hero slideshow state
  const [heroIndex, setHeroIndex] = useState(0);
  const [heroFading, setHeroFading] = useState(false);

  // Poster + popup state
  const [showPoster, setShowPoster] = useState(true);
  const [posterClosed, setPosterClosed] = useState(false);
  const [showOfferPopup, setShowOfferPopup] = useState(false);
  const [offerName, setOfferName] = useState('');
  const [offerPhone, setOfferPhone] = useState('');
  const [offerSubmitted, setOfferSubmitted] = useState(false);

  // Helper function to open WhatsApp with pre-filled message
  const openWhatsApp = (message) => {
    const phone = "919000700930";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, "_blank");
  };

  // After poster is closed, wait 40 seconds then show popup
  useEffect(() => {
    if (posterClosed) {
      const timer = setTimeout(() => {
        setShowOfferPopup(true);
      }, 40000);
      return () => clearTimeout(timer);
    }
  }, [posterClosed]);

  const handleClosePoster = () => {
    setShowPoster(false);
    setPosterClosed(true);
  };

  const handleClosePopup = () => {
    setShowOfferPopup(false);
  };

  const handleOfferSubmit = () => {
    if (offerName && offerPhone) {
      const msg = `Hello Deeraj Interiors! I'm ${offerName} (Phone: ${offerPhone}). I saw your special offer on the website and I'd like to claim my FREE 3D design + 10% discount. Please get in touch!`;
      openWhatsApp(msg);
      setOfferSubmitted(true);
      setTimeout(() => handleClosePopup(), 2500);
    }
  };

  // Testimonials auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPair((prev) => (prev + 2) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Hero slideshow auto-rotate — 2s per image
  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroFading(true);
      setTimeout(() => {
        setHeroIndex((prev) => (prev + 1) % heroSlides.length);
        setHeroFading(false);
      }, 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, [heroIndex]);

  return (
    <div className="home-container">

      {/* ── OFFER POSTER (shows on page load) ── */}
      {showPoster && (
        <div className="offer-poster-overlay" onClick={handleClosePoster}>
          <div className="offer-poster-container" onClick={(e) => e.stopPropagation()}>
            <button className="offer-poster-close" onClick={handleClosePoster}>✕</button>
            <div className="offer-poster-built">
              <div className="offer-poster-bg">
                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80" alt="Modern Kitchen" className="offer-poster-kitchen" />
                <div className="offer-poster-logo-bar">
                  <img src="https://img1.wsimg.com/isteam/ip/e7e3142b-3f26-4173-bc29-b2315178edb8/DI%20logo%20(2).png/:/rs=w:559,h:192,cg:true,m/cr=w:559,h:192/qt=q:95" alt="Deeraj Interiors" className="offer-poster-logo" />
                </div>
              </div>
              <div className="offer-poster-badge-wrap">
                <div className="offer-poster-badge">
                  <span className="opb-save">Save up to</span>
                  <span className="opb-percent">20<sup>%</sup></span>
                  <span className="opb-off">OFF</span>
                  <span className="opb-limited">Limited Period Offer</span>
                  <span className="opb-month">This Month Only</span>
                </div>
              </div>
              <div className="offer-poster-black">
                <p className="opb-luxury">Luxury Interiors for Your</p>
                <p className="opb-dream">Dream Home</p>
                <div className="opb-book-pill">Book Now – Move Into a Ready Home</div>
                <p className="opb-phone">📞 +91 9000700910 / 930, 9014300930</p>
              </div>
            </div>
            <div className="offer-poster-footer">
              <button className="offer-poster-cta" onClick={() => { window.open('https://wa.me/919000700930?text=Hello%20Deeraj%20Interiors!%20I%20saw%20your%20offer%20and%20want%20to%20book%20now!', '_blank'); }}>
                📞 Book Now — Get 20% Off
              </button>
              <button className="offer-poster-skip" onClick={handleClosePoster}>Skip for now</button>
            </div>
          </div>
        </div>
      )}

      {/* ── OFFER POPUP (shows after 30 seconds) ── */}
      {showOfferPopup && (
        <div className="offer-overlay" onClick={(e) => { if (e.target.classList.contains('offer-overlay')) handleClosePopup(); }}>
          <div className="offer-popup">
            <button className="offer-close-btn" onClick={handleClosePopup}>✕</button>
            <div className="offer-popup-badge">🎉 LIMITED TIME OFFER</div>
            <div className="offer-popup-header">
              <img
                src="https://img1.wsimg.com/isteam/ip/e7e3142b-3f26-4173-bc29-b2315178edb8/DI%20logo%20(2).png/:/rs=w:559,h:192,cg:true,m/cr=w:559,h:192/qt=q:95"
                alt="Deeraj Interiors"
                className="offer-popup-logo"
              />
              <h2 className="offer-popup-title">Transform Your Home<br /><span>in Just 45 Days!</span></h2>
            </div>
            <div className="offer-popup-perks">
              <div className="offer-perk-item"><span>⚡</span><span>45-Day<br />Delivery</span></div>
              <div className="offer-perk-item"><span>🎨</span><span>FREE<br />3D Design</span></div>
              <div className="offer-perk-item"><span>💰</span><span>10% OFF<br />First Order</span></div>
              <div className="offer-perk-item"><span>🛡️</span><span>5-Year<br />Warranty</span></div>
            </div>
            {!offerSubmitted ? (
              <>
                <p className="offer-popup-desc">
                  Book a <strong>FREE consultation</strong> today and get your dream interior delivered — guaranteed within <strong>45 days</strong> or we pay the penalty!
                </p>
                <div className="offer-popup-form">
                  <input type="text" placeholder="Your Name *" value={offerName} onChange={(e) => setOfferName(e.target.value)} />
                  <input type="tel" placeholder="Your Phone Number *" value={offerPhone} onChange={(e) => setOfferPhone(e.target.value)} />
                  <button className="offer-popup-cta" onClick={handleOfferSubmit}>
                    Claim My Free Consultation 🚀
                  </button>
                </div>
                <p className="offer-popup-fine">✓ No spam &nbsp;|&nbsp; ✓ No obligation &nbsp;|&nbsp; ✓ Response within 1 hour</p>
              </>
            ) : (
              <div className="offer-popup-success">
                <div>🎊</div>
                <h3>Thank You!</h3>
                <p>Our team will contact you within 1 hour. Get ready to transform your space!</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── UPDATED HERO SECTION with slideshow ── */}
      <header className="home-hero" style={{ position: 'relative', overflow: 'hidden' }}>

        {/* Background image layers — crossfade via opacity */}
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url('${slide.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: i === heroIndex ? 1 : 0,
              transition: 'opacity 0.5s ease-in-out',
              zIndex: 0
            }}
          />
        ))}

        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(0,0,0,0.48), rgba(0,0,0,0.58))',
          zIndex: 1
        }} />

        {/* Hero content */}
        <div className="home-hero-content" style={{ position: 'relative', zIndex: 2 }}>
          <h1 className="home-hero-title-home">
            Interior <span className="home-highlight">Studio</span>
          </h1>

          {/* Animated tagline that changes with slide */}
          <p
            className="home-hero-subtitle"
            style={{
              opacity: heroFading ? 0 : 1,
              transform: heroFading ? 'translateY(8px)' : 'translateY(0)',
              transition: 'opacity 0.3s ease, transform 0.3s ease'
            }}
          >
            {heroSlides[heroIndex].tagline}
          </p>

          <div className="home-hero-buttons">
            <button
              className="home-btn home-primary"
              onClick={() => navigate("/portfolio/our-project")}
            >
              View Projects
            </button>
            <button
              className="home-btn home-outline"
              onClick={() => openWhatsApp("Hello Deeraj Interiors! I visited your website and would like to discuss my interior project.")}
            >
              Get in Touch
            </button>
          </div>

          {/* Slide indicator dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '2.5rem'
          }}>
            {heroSlides.map((_, i) => (
              <span
                key={i}
                onClick={() => { setHeroFading(true); setTimeout(() => { setHeroIndex(i); setHeroFading(false); }, 800); }}
                style={{
                  width: i === heroIndex ? '28px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: i === heroIndex ? 'orangered' : 'rgba(255,255,255,0.5)',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  display: 'inline-block'
                }}
              />
            ))}
          </div>
        </div>
      </header>
      {/* ── END UPDATED HERO SECTION ── */}

      {/* About Section */}
      <section className="home-about-section">
        <div className="home-about-wrapper">
          <div className="home-about-image-container">
            <div
              className="home-about-image"
              style={{
                backgroundImage: `url('https://s3.ap-south-1.amazonaws.com/images.woodenstreet.de/image/data/blog-images/partition-design/wooden-living-room-partition.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            ></div>
          </div>
          <div className="home-about-content">
            <h2>ABOUT DEERAJ INTERIORS</h2>
            <h1>Designing Dreams. Delivering Elegance</h1>
            <p>
              At Deeraj Interiors, we believe that every space has a story — and we're here to design it beautifully. With over 5 years of experience, we've transformed homes, offices, and commercial spaces into functional, aesthetic, and personalized environments that reflect the dreams of our clients.
            </p>
            <p>
              From cozy 2BHK apartments to expansive villas, and from boutique offices to large-scale commercial interiors, our journey has been driven by word-of-mouth trust and design excellence. We've had the privilege to work with individual homeowners as well as renowned companies, bringing creativity, precision, and passion to every square foot.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Fade Carousel */}
      <section className="home-why-choose-section">
        <div className="home-why-wrapper">
          <div className="home-why-content">
            <h2>WHY CHOOSE US</h2>
            <h1>Designed with Passion. Delivered with Precision</h1>
            <p>
              From concept to creation, our work speaks of trust, timelines, and tailored excellence. With 5+ years of word-of-mouth success, we now bring our promise to you online — better, faster, and more inspired than ever.
            </p>
            <button
              className="home-btn home-primary home-explore-btn"
              onClick={() => openWhatsApp("Hi Deeraj team! I'm interested in knowing more about your unique edge and recent work. Can we discuss?")}
            >
              EXPLORE OUR EDGE →
            </button>
          </div>
       <div className="single-image-container">
  <div
    className="single-image"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1648881806148-e5c51179c826?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    }}
  ></div>
</div>
</div>
      </section>

      {/* Our Products Section */}
      <section className="home-products-section">
        <div className="home-products-wrapper">
          <h2>OUR PRODUCTS</h2>
          <p className="home-section-subtitle">
            Premium ready-to-use interior products crafted with quality & style
          </p>
          <div className="home-products-grid">
            <div className="home-product-card">
              <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/81irP73vuqL.jpg')` }}></div>
              <h3>Book Shelf</h3>
              <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
            </div>
            <div className="home-product-card">
              <div className="home-product-image" style={{ backgroundImage: `url('https://ashleyfurniture.scene7.com/is/image/AshleyFurniture/H600000035_2?fit=fit&wid=1200&hei=900')` }}></div>
              <h3>Book Shelf</h3>
              <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
            </div>
            <div className="home-product-card">
              <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/51Oht6zQFML._AC_UF894,1000_QL80_.jpg')` }}></div>
              <h3>Modern Center Table</h3>
              <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
            </div>
            <div className="home-product-card">
              <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71tFMmZr3dL._AC_UF894,1000_QL80_.jpg')` }}></div>
              <h3>Printed Melamine Dinner Plate</h3>
              <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
            </div>
            <div className="home-product-card">
              <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71R33gKo8hL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg')` }}></div>
              <h3>Flower Vase</h3>
              <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
            </div>
            <div className="home-product-card">
              <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/91FtfQJ-hfL._AC_UF894,1000_QL80_.jpg')` }}></div>
              <h3>Classic Wall Art</h3>
              <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
            </div>
            <div className="home-product-card">
              <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/dbfff93e-7141-4777-84dc-9b7220c66674.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}></div>
              <h3>Green Aluminium Deer Sculpture</h3>
              <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
            </div>
            <div className="home-product-card">
              <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/03870a4f-9af8-4a26-b94f-10f922dd6a01.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}></div>
              <h3>Decoration Leaf</h3>
              <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
            </div>
            <div className="home-product-card">
              <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/I/71yIOkGTTIL.jpg_BO30,255,255,255_UF750,750_SR1910,1000,0,C_QL100_.jpg')` }}></div>
              <h3>Beautiful Wall Mirror</h3>
              <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
            </div>
            <div className="home-product-card">
              <div className="home-product-image" style={{ backgroundImage: `url('https://salsify-ecdn.com/images/0de564332f8386e2f3c73905415624e8.jpg')` }}></div>
              <h3>Gold Aluminium Face Sculpture</h3>
              <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
            </div>
            <div className="home-product-card">
              <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/b3b53ac2-4451-48a4-b85e-ffff6650c5c0.__CR0,0,800,600_PT0_SX800_V1___.jpg')` }}></div>
              <h3>Black Alloy Metal Floral Shape</h3>
              <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
            </div>
            <div className="home-product-card">
              <div className="home-product-image" style={{ backgroundImage: `url('https://m.media-amazon.com/images/S/aplus-media-library-service-media/7f63a722-0f87-4268-9127-9667b2109201.__CR0,0,970,600_PT0_SX970_V1___.jpg')` }}></div>
              <h3>Gold Aluminium Antique Leaf</h3>
              <button className="home-btn home-primary home-small" onClick={() => window.open("https://id.vyaparify.com/deeraj-interiors", "_blank")}>View in Store →</button>
            </div>
          </div>
          <div className="home-products-cta">
            <button className="home-btn home-primary home-explore-btn" onClick={() => window.open(`https://id.vyaparify.com/deeraj-interiors`, "_blank")}>
              View All Products →
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="home-services-section">
        <div className="home-services-wrapper">
          <h2>OUR DESIGN SERVICES</h2>
          <p className="home-section-subtitle">Everything you need. All under one roof.</p>
          <div className="home-services-grid">
            <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="home-service-title">Bedroom Design</div>
              <div className="home-service-hover-content">
                <p>Create a peaceful and restful sanctuary with our expert bedroom design services. From custom bed frames to luxurious bedding, we help you create a space that's both comfortable and stylish.</p>
                <button className="home-btn home-primary" onClick={() => openWhatsApp("Hello! I'm interested in your Bedroom Design services. Can we discuss possibilities?")}>Know More</button>
              </div>
            </div>
            <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1611048267451-e6ed903d4a38?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
              <div className="home-service-title">Living Room Design</div>
              <div className="home-service-hover-content">
                <p>Whether you're looking for a cozy space to relax with family or a stylish entertaining area for guests, we can create a living room that suits your lifestyle and reflects your personality.</p>
                <button className="home-btn home-primary" onClick={() => openWhatsApp("Hi! Looking to redesign my Living Room. Interested in your designs.")}>Know More</button>
              </div>
            </div>
            <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1722605090433-41d1183a792d?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
              <div className="home-service-title">Kitchen Design</div>
              <div className="home-service-hover-content">
                <p>At Deeraj Interiors, we specialize in crafting kitchen interiors that are as beautiful as they are functional — thoughtfully designed to reflect your style and suit your everyday needs.</p>
                <button className="home-btn home-primary" onClick={() => openWhatsApp("Hello! Interested in your modular Kitchen design services. Can we talk?")}>Know More</button>
              </div>
            </div>
            <div className="home-service-card" style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
              <div className="home-service-title">Home Office Design</div>
              <div className="home-service-hover-content">
                <p>With more people working from home, it's important to have a functional and inspiring home office. Let us help you create a space that's both productive and stylish.</p>
                <button className="home-btn home-primary" onClick={() => openWhatsApp("Hi! I need help designing a Home Office. Interested in your work.")}>Know More</button>
              </div>
            </div>
            <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="home-service-title">Bathroom Design</div>
              <div className="home-service-hover-content">
                <p>Transform your bathroom into a spa-like retreat with our expert design services. From luxurious showers to elegant fixtures, we create a space that's both beautiful and functional.</p>
                <button className="home-btn home-primary" onClick={() => openWhatsApp("Hello! Looking to redesign my Bathroom. Can we discuss your services?")}>Know More</button>
              </div>
            </div>
            <div className="home-service-card" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')` }}>
              <div className="home-service-title">Outdoor Living Design</div>
              <div className="home-service-hover-content">
                <p>Extend your living space to the outdoors with our expert outdoor living design services. From cozy fire pits to luxurious outdoor kitchens, we help you create a space that's perfect for entertaining and relaxation.</p>
                <button className="home-btn home-primary" onClick={() => openWhatsApp("Hi! Interested in Outdoor Living / Terrace design. Let's talk!")}>Know More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Testimonials - Horizontal Cards with Dots */}
      <section className="home-testimonials-section" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.75)), url('https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="home-testimonials-wrapper">
          <h2 className="home-testimonials-title-home">Loved by Families Across the City.</h2>
          <div className="home-testimonials-horizontal-container">
            {(() => {
              const cards = [];
              const total = testimonials.length;
              let idx1 = currentPair % total;
              let idx2 = (currentPair + 1) % total;
              cards.push(testimonials[idx1]);
              if (total > 1) { cards.push(testimonials[idx2]); }
              return cards.map((item, index) => (
                <div key={index} className="home-testimonial-horizontal-card">
                  <div className="home-testimonial-left">
                    <div className="home-avatar-circle">
                      <img src={item.avatar} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15%' }} />
                    </div>
                    <div className="home-testimonial-name-below">{item.name}</div>
                  </div>
                  <div className="home-testimonial-right">
                    <div className="home-stars">
                      <span className="home-star">★</span><span className="home-star">★</span><span className="home-star">★</span><span className="home-star">★</span><span className="home-star">★</span>
                    </div>
                    <h3 className="home-testimonial-rating">{item.rating}</h3>
                    <p className="home-testimonial-text">"{item.text}"</p>
                    <div className="home-testimonial-address">{item.address}</div>
                  </div>
                </div>
              ));
            })()}
          </div>
          <div className="home-testimonial-dots">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
              <span
                key={index}
                className={`home-dot ${index === Math.floor(currentPair / 2) ? 'home-active' : ''}`}
                onClick={() => setCurrentPair(index * 2)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Footer Section */}
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

      {/* WhatsApp Floating Button + Popup */}
      <div className="home-whatsapp-container">
        <div className="home-whatsapp-float" onClick={() => setWhatsappOpen(!whatsappOpen)}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </div>
        {whatsappOpen && (
          <div className="home-whatsapp-popup">
            <h3>Start WhatsApp Chat</h3>
            <input type="text" placeholder="Your Name" id="wa-name" />
            <input type="text" placeholder="Project Type (2BHK / Kitchen / Office)" id="wa-project" />
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
                window.open(`https://wa.me/919000700930?text=${finalMessage}`, "_blank");
              }}
            >
              Chat on WhatsApp
            </button>
          </div>
        )}
      </div>
{/* ── Phone Call Floating Button ── */}
<div className="home-phone-container">
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
</div>


    </div>
  );
}