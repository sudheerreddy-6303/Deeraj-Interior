// src/components/Navbar/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* <div className="logo">
        <NavLink to="/" className="logo-link">
          Interior <span className="highlight">Studio</span>
        </NavLink>
      </div> */}


      <div className="logo">
  <NavLink to="/" className="logo-link">
    <img
      src="https://img1.wsimg.com/isteam/ip/e7e3142b-3f26-4173-bc29-b2315178edb8/DI%20logo%20(2).png/:/rs=w:559,h:192,cg:true,m/cr=w:559,h:192/qt=q:95" // paste your logo URL here
      alt="Interior Studio Logo"
      className="logo-image"
    />
  </NavLink>
</div>

      <ul className="nav-links">

{/* Home */}
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Home
          </NavLink>
        </li>


        {/* About Us Dropdown */}
        <li className="dropdown">
          <NavLink 
            to="/about-us/company-story" 
            
            className={({ isActive }) => 
              isActive ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle"
            }
          >
            About Us
          </NavLink>

          <ul className="dropdown-menu">
            <li>
              <NavLink 
                to="/about-us/company-story" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Company Story
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about-us/our-team" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about-us/our-process" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Our Process
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about-us/infrastructure-studio" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Infrastructure / Studio
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about-us/careers" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Careers
              </NavLink>
            </li>
          </ul>
        </li>

        
        {/* Services Dropdown */}
        <li className="dropdown">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle"
            }
          >
            Services
          </NavLink>

          <ul className="dropdown-menu">
            {/* <li>
              <NavLink 
                to="/services/modular-kitchen" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Modular Kitchen
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink 
                to="/services/living-room-interiors" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Living Room Interiors
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink 
                to="/services/bedroom-designs" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Bedroom Designs
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink 
                to="/services/full-home-designs" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Full Home Designs
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink 
                to="/services/full-home-interiors" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Full Home Interiors
              </NavLink>
            </li> */}
            <li>
              <NavLink 
                to="/services/office-commercial" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Office/Commercial spaces
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services/turnkey-projects" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Turnkey Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services/renovation" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Renovation & Re-modelling
              </NavLink>
            </li>
            {/* <li>
              <NavLink 
                to="/services/modular-factory" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Modular Factory
              </NavLink>
            </li> */}
          </ul>
        </li>

        {/* Home Decor Dropdown */}
        <li className="dropdown">
          <NavLink 
            to="/services/modular-factory" 
            className={({ isActive }) => 
              isActive ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle"
            }
          >
            Modular Factory
          </NavLink>

          {/* <ul className="dropdown-menu">
            <li>
              <NavLink 
                to="/home-decor/soft-furnishings" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Soft Furnishings
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/home-decor/curtains-window-decor" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Curtains & Window Decor
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/home-decor/wall-decor" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Wall Decor
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/home-decor/decor-accents" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Decor Accents
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/home-decor/storage-organizers" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Storage & Organizers
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/home-decor/plants-greenery" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Plants & Greenery
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/home-decor/lighting" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Lighting
              </NavLink>
            </li>
          </ul> */}
        </li>

        {/* Portfolio Dropdown - UPDATED */}
        <li className="dropdown">
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              isActive ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle"
            }
          >
            Portfolio
          </NavLink>

          <ul className="dropdown-menu">
            <li>
              <NavLink 
                to="/portfolio/our-customers" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Our Customers
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/portfolio/our-projects" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Our Projects
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Partner Us Dropdown - UPDATED */}
        <li className="dropdown">
          <NavLink 
            to="/partner-us" 
            className={({ isActive }) => 
              isActive ? "nav-link active dropdown-toggle" : "nav-link dropdown-toggle"
            }
          >
            Partner Us
          </NavLink>

          <ul className="dropdown-menu">
            <li>
              <NavLink 
                to="/partner-us/franchise" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Franchise
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/partner-us/business-associate" 
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
              >
                Business Associate
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink 
            to="https://id.vyaparify.com/deeraj-interiors" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Online Store
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact-us" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}