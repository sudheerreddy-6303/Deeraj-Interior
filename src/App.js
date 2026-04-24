import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import BookingForm from './components/form/form';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import ContactUs from './components/contact/contact';
import CompanyStory from './components/About Us/Company Story/Company-story';
import ModularFactory from './components/Services/Modular Factory/Modularfactory';
import Renovation from "./components/Services/Renovation/Renovation";
import TurnkeyProjects from "./components/Services/Turnkey/Turnkey";
import Office from "./components/Services/Office/Office"
import OurTeam from './components/Services/Ourprocess/ourprocess';
import OurProjects from './components/Ourprojects/ourprojects';
// import Franchise from "./components/Partner us/Franchise/Franchise"
import AboutUs from "./components/About Us/About-us"
import Franchise from "./components/Partner us/Franchise/Franchise"
import Gallery from "./components/Gallery/Gallery";
import BusinessAssociate from "./components/Partner us/Business Associate/businessassociate"
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(true);

  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Floating Booking Form - Top Right Corner, visible on every page */}
        <div style={{
          position: 'fixed',
          top: '90px',
          right: '20px',
          zIndex: 9999,
        }}>
          {showForm ? (
            <BookingForm key={showForm} onClose={() => setShowForm(false)} />
          ) : (
           <button
  onClick={() => setShowForm(true)}
  style={{
    background: 'linear-gradient(135deg, orangered, #ff6b35)',
    color: 'white',
    border: 'none',
    borderRadius: '50px',
    padding: '12px 20px',
    fontWeight: '700',
    fontSize: '0.85rem',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(255, 69, 0, 0.4)',
    whiteSpace: 'nowrap',
    fontFamily: 'Inter, system-ui, sans-serif',

    position: 'fixed',
    bottom: '95px',
    right: '20px',   // change to left: '50%' + transform if you want center
    zIndex: 1000
  }}
>
  📅 Book Free Consultation
</button>
          )}
        </div>

        <div style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* <Route path="/about-us" element={<div><h1>About Us Page</h1></div>} /> */}
            <Route path="/services" element={<div><h1>Services Page</h1></div>} />
            <Route path="/home-decor" element={<div><h1>Home Decor Page</h1></div>} />
            {/* <Route path="/portfolio" element={<div><h1>Portfolio Page</h1></div>} /> */}
            <Route path="/partner-us" element={<div><h1>Partner With Us</h1></div>} />
            <Route path="/online-store" element={<div><h1>Online Store Coming Soon</h1></div>} />

            {/* ✅ REAL CONTACT FORM */}
            <Route path="/contact-us" element={<ContactUs />} />
             <Route path="/about-us/company-story" element={<CompanyStory />} />
            <Route path="services/modular-factory" element={<ModularFactory />} />
             <Route path="/services/Renovation" element={<Renovation />} />

             <Route path="/services/turnkey-projects" element={<TurnkeyProjects />} />
              <Route path="/services/office-commercial" element={<Office />} />
               <Route path="/about-us/our-process" element={<OurTeam />} />
                 <Route path="/portfolio/our-project" element={<OurProjects />} />
                  <Route path="/partner-us/franchise" element={<Franchise />} />
                  <Route path="/partner-us/BusinessAssociate" element={<BusinessAssociate />} />

                   <Route path="/about-us" element={<AboutUs />} />
                   
                   <Route path="/Gallery" element={<Gallery />} />

            <Route path="*" element={<div><h1>404 - Page Not Found</h1></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
