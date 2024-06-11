import React, { useState } from 'react';
import './navbar.module.css';
import logo from '../assets/images/logo.png'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="AEROBOTT Logo" />
        <span className="logo-text"></span>
      </div>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
        <a href="lithium">Lithium</a>
        <a href="shop">Shop</a>
        <a href="contact">Contact</a>
        <a href="droneservice">Drone as a Service</a>
      </ul>
      <div className="user-icon">
        <i className="fas fa-user-circle"></i>
      </div>
      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </button>
    </nav>
  );
};

export default Navbar;
