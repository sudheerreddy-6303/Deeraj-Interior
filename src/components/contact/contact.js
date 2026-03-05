// import React, { useState, useEffect } from 'react';
// import './contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     propertyType: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [whatsappOpen, setWhatsappOpen] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState('');
//   const [messageType, setMessageType] = useState(''); // 'success' | 'error' | ''

//   // Auto-hide success message after 3 seconds
//   useEffect(() => {
//     let timer;
//     if (messageType === 'success' && submitMessage) {
//       timer = setTimeout(() => {
//         setSubmitMessage('');
//         setMessageType('');
//       }, 3000);
//     }
//     return () => clearTimeout(timer);
//   }, [submitMessage, messageType]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitMessage('');
//     setMessageType('');

//     // Validate required fields
//     if (!formData.fullName || !formData.email || !formData.propertyType) {
//       setSubmitMessage('Please fill in all required fields');
//       setMessageType('error');
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:5000/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData)
//       });

//       const result = await response.json();

//       if (response.ok && result.success) {
//         setSubmitMessage('Thank you! Your request has been received. We will get back to you soon.');
//         setMessageType('success');
        
//         // Reset form
//         setFormData({
//           fullName: '',
//           email: '',
//           phone: '',
//           propertyType: '',
//           message: ''
//         });
//       } else {
//         setSubmitMessage(result.message || 'Failed to send request. Please try again.');
//         setMessageType('error');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setSubmitMessage('Network error. Please check your connection and try again.');
//       setMessageType('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="contact-hero">
//       {/* Full background video */}
//       <video
//         className="hero-background-video"
//         autoPlay
//         loop
//         muted
//         playsInline
//         poster="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1974"
//       >
//         <source
//           src="https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_30fps.mp4"
//           type="video/mp4"
//         />
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay gradient for better readability */}
//       <div className="hero-overlay"></div>

//       <div className="split-layout">
//         {/* LEFT: Form Panel */}
//         <div className="form-panel">
//           <div className="form-content">
//             <h1>Contact Us</h1>
//             <p className="lead">
//               Transform your home, office, retail space, or hospitality venue with 
//               bespoke interior design that reflects your vision and lifestyle.
//             </p>

//             <form onSubmit={handleSubmit} className="quote-form">
//               {/* ─── Single Full Name field ─── */}
//               <div className="form-field">
//                 <label>Full Name *</label>
//                 <input 
//                   type="text" 
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required 
//                   placeholder="Sudheer Reddy" 
//                 />
//               </div>

//               <div className="form-field">
//                 <label>Email Address *</label>
//                 <input 
//                   type="email" 
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required 
//                   placeholder="sudheerreddy@gmail.com" 
//                 />
//               </div>

//               <div className="form-field">
//                 <label>Phone Number</label>
//                 <input 
//                   type="tel" 
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="+91 98765 43210" 
//                 />
//               </div>

//               <div className="form-field">
//                 <label>Property Type *</label>
//                 <select 
//                   name="propertyType"
//                   value={formData.propertyType}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Type</option>
//                   <option value="Bedroom Design">2BHK PLOT</option>
//                   <option value="Kitchen Design">3BHK PLOT</option>
//                   <option value="Living room Design">4BHK PLOT</option>
//                   <option value="Home office Design">Villa 3 BHK</option>
//                   <option value="Outdoor Design">Villa 4 BHK</option>
//                   <option value="Bathroom Design">Corporate Office Interiors</option>
//                   <option value="Others">School  Interiors</option>
//                    <option value="Others">Hospital interiors</option>
//                     <option value="Others">Other comercial interiors</option>
//                     <option value="Others">Banglow</option>
//                     <option value="Others">Others</option>
//                 </select>
//               </div>

//               <div className="form-field">
//                 <label>Tell Us About Your Project</label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="5"
//                   placeholder="Describe your space, style preferences, approximate budget, timeline, and any inspiration..."
//                 ></textarea>
//               </div>

//               {/* Message display with auto-hide for success */}
//               {submitMessage && (
//                 <div className={`submit-message ${messageType}`}>
//                   {messageType === 'success' && <span className="success-icon">✓ </span>}
//                   {submitMessage}
//                 </div>
//               )}

//               <button 
//                 type="submit" 
//                 className="primary-btn"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Sending...' : 'Request Quote →'}
//               </button>

//               <p className="privacy-note">
//                 We respect your privacy — your details are secure and we'll reply within 1–2 business days.
//               </p>
//             </form>
//           </div>
//         </div>

//         {/* RIGHT: Overlay text + social icons (unchanged) */}
//         <div className="visual-panel">
//           <div className="gallery-overlay">
//             <h2>Elevate Your Space</h2>
//             <p>Timeless elegance meets modern sophistication</p>

//             <div className="social-icons">
//               <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
//                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
//                 </svg>
//               </a>

//               <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
//                   <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
//                 </svg>
//               </a>

//               <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
//                 </svg>
//               </a>

//               <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                   <rect x="2" y="9" width="4" height="12"></rect>
//                   <circle cx="4" cy="4" r="2"></circle>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* ================= WHATSAPP FLOAT ================= */}
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
//     </section>
    
//   );
// };

// export default Contact;



import React, { useState, useEffect } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState(''); 
  const [isSuccess, setIsSuccess] = useState(false); // <-- NEW STATE FOR SUCCESS CARD

  // Auto-hide error messages after 3 seconds (removed success auto-hide so the card stays)
  useEffect(() => {
    let timer;
    if (messageType === 'error' && submitMessage) {
      timer = setTimeout(() => {
        setSubmitMessage('');
        setMessageType('');
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [submitMessage, messageType]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('Sending request...');
    setMessageType('info');

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.propertyType) {
      setSubmitMessage('Please fill in all required fields');
      setMessageType('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare Web3Forms payload
      const payload = {
        ...formData,
        access_key: "bf35444b-1501-49ba-9600-c7ed4ee291a6", 
        subject: "New Interior Design Quote Request",
        from_name: "Deeraj Interiors Website"
      };

      // Send the request to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        // Trigger the Success Card UI
        setIsSuccess(true);
        setSubmitMessage('');
        
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          propertyType: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitMessage('Failed to send request. Please try again later.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-hero">
      {/* Full background video */}
      <video
        className="hero-background-video"
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=1974"
      >
        <source
          src="https://videos.pexels.com/video-files/7578552/7578552-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay"></div>

      <div className="split-layout">
        {/* LEFT: Form Panel */}
        <div className="form-panel">
          <div className="form-content">
            
            {/* CONDITIONAL RENDERING: Show Card if Success, otherwise show Form */}
            {isSuccess ? (
              <div className="success-card" style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}>
                <div style={{ fontSize: '50px', color: '#4BB543', marginBottom: '15px' }}>✓</div>
                <h2 style={{ marginBottom: '15px' }}>Request Sent!</h2>
                <p style={{ marginBottom: '25px', lineHeight: '1.6' }}>
                  Thank you! Your quote request has been successfully sent to Deeraj Interiors. We will contact you on WhatsApp or Email shortly.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)} 
                  className="primary-btn"
                  style={{ width: '100%' }}
                >
                  Send Another Request
                </button>
              </div>
            ) : (
              <>
                <h1>Request Quote</h1>
                <p className="lead">
                  Transform your home, office, retail space, or hospitality venue with 
                  bespoke interior design that reflects your vision and lifestyle.
                </p>

                <form onSubmit={handleSubmit} className="quote-form">
                  <div className="form-field">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                      placeholder="Sudheer Reddy" 
                    />
                  </div>

                  <div className="form-field">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      placeholder="sudheerreddy@gmail.com" 
                    />
                  </div>

                  <div className="form-field">
                    <label>Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210" 
                    />
                  </div>

                  <div className="form-field">
                    <label>Property Type *</label>
                    <select 
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="2BHK PLOT">2BHK PLOT</option>
                      <option value="3BHK PLOT">3BHK PLOT</option>
                      <option value="4BHK PLOT">4BHK PLOT</option>
                      <option value="Villa 3 BHK">Villa 3 BHK</option>
                      <option value="Villa 4 BHK">Villa 4 BHK</option>
                      <option value="Corporate Office Interiors">Corporate Office Interiors</option>
                      <option value="School Interiors">School Interiors</option>
                      <option value="Hospital interiors">Hospital interiors</option>
                      <option value="Other comercial interiors">Other comercial interiors</option>
                      <option value="Banglow">Banglow</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Tell Us About Your Project</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Describe your space, style preferences, approximate budget, timeline, and any inspiration..."
                    ></textarea>
                  </div>

                  {/* Display error or loading message */}
                  {submitMessage && !isSuccess && (
                    <div style={{ color: messageType === 'error' ? '#ff4d4d' : '#fff', marginBottom: '15px' }}>
                      {submitMessage}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="primary-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Request Quote →'}
                  </button>

                  <p className="privacy-note">
                    We respect your privacy — your details are secure and we'll reply within 1–2 business days.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

        {/* RIGHT: Overlay text + social icons */}
        <div className="visual-panel">
          <div className="gallery-overlay">
            <h2>Elevate Your Space</h2>
            <p>Timeless elegance meets modern sophistication</p>

            <div className="social-icons">
              <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a href="https://youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>

              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
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
      
    </section>
    
  );
};

export default Contact;