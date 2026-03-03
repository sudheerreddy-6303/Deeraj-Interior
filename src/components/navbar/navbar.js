// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // Adjust path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isOpen ? 'open' : ''}`}>
      {/* Logo */}
      <NavLink to="/" className="logo-link" onClick={closeMenu}>
        <img
          src="https://img1.wsimg.com/isteam/ip/e7e3142b-3f26-4173-bc29-b2315178edb8/DI%20logo%20(2).png/:/rs=w:559,h:192,cg:true,m/cr=w:559,h:192/qt=q:95"
          alt="Interior Studio Logo"
          className="logo-image"
        />
      </NavLink>

      {/* Navigation Links + Hamburger */}
      <div className="nav-container">
        <ul className="nav-links">
          {/* Home */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>

          {/* About Us Dropdown */}
          <li className="dropdown">
          <NavLink
  to="/about-us"
  className={({ isActive }) =>
    isActive ? 'nav-link active dropdown-toggle' : 'nav-link dropdown-toggle'
  }
  onClick={closeMenu}
>
  About Us
</NavLink>

            <ul className="dropdown-menu">
              <li>
                <NavLink
                  to="/about-us/company-story"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Company Story
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us/our-team"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Our Team
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/about-us/our-process"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Our Process
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  to="/about-us/infrastructure-studio"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Infrastructure / Studio
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  to="/about-us/careers"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Careers
                </NavLink>
              </li> */}
            </ul>
          </li>

          {/* Services Dropdown */}
          <li className="dropdown">
            <NavLink
              to="/services/office-commercial"
              className={({ isActive }) =>
                isActive ? 'nav-link active dropdown-toggle' : 'nav-link dropdown-toggle'
              }
              onClick={closeMenu}
            >
              Services
            </NavLink>

            <ul className="dropdown-menu">
              <li>
                <NavLink
                  to="/services/office-commercial"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Office/Commercial spaces
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/turnkey-projects"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Turnkey Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services/renovation"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Renovation & Re-modelling
                </NavLink>
              </li>
                <li>
                <NavLink
                  to="/about-us/our-process"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Our Process
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Modular Factory (currently no submenu) */}
          <li className="dropdown">
            <NavLink
              to="/services/modular-factory"
              className={({ isActive }) =>
                isActive ? 'nav-link active dropdown-toggle' : 'nav-link dropdown-toggle'
              }
              onClick={closeMenu}
            >
              Modular Factory
            </NavLink>
          </li>

          {/* Portfolio Dropdown */}
          <li className="dropdown">
            <NavLink
              to="/portfolio/our-project"
              className={({ isActive }) =>
                isActive ? 'nav-link active dropdown-toggle' : 'nav-link dropdown-toggle'
              }
              onClick={closeMenu}
            >
              Our Projects
            </NavLink>

          
            

            {/* <ul className="dropdown-menu"> */}
              {/* <li>
                <NavLink
                  to="/portfolio/our-customers"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Our Customers
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  to="/portfolio/our-projects"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Our Projects
                </NavLink>
              </li> */}
            {/* </ul> */}
          </li>
                 <li>
            <NavLink
              to="Gallery"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
          </li>

          {/* Partner Us Dropdown */}
          <li className="dropdown">
            <NavLink
              to="/partner-us"
              className={({ isActive }) =>
                isActive ? 'nav-link active dropdown-toggle' : 'nav-link dropdown-toggle'
              }
              onClick={closeMenu}
            >
              Partner Us
            </NavLink>

            <ul className="dropdown-menu">
              <li>
                <NavLink
                  to="/partner-us/franchise"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Franchise
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/partner-us/BusinessAssociate"
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Business Associate
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <a
              href="https://id.vyaparify.com/deeraj-interiors"
              className="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Online Store
            </a>
          </li>

          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Hamburger Menu Toggle */}
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}