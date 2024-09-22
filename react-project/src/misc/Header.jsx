import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);   


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);   

  };

  const menuClasses = `navbar-menu ${isMenuOpen ? 'active' : ''}`; // Combine menu and active class

  return (
    <>
      <link rel="stylesheet" href="css/styles.css" />

      <div className="container">
        <header>
          <nav className="navbar">
            {/* Logo */}
            <Link to="/" className="navbar-logo">
              <img
                src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/c57e3b5fcaa2296d14386dd2b48d457f4448adf6/assets/images/IconBlue.png"
                alt="Logo - Path"
              />
            </Link>

            {/* Menu Items */}
            <div className={menuClasses}> {/* Apply combined class conditionally */}
              <div className="navbar-menu-text">
                <Link to="/">Home</Link>
                <Link to="/theapp">The App</Link>
                <Link to="/aboutus">About us</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/">Help</Link>
              </div>

              {/* Action Buttons (optional) */}
              <div className="navbar-menu-btn">
                <Link to="/login" className="btn1">
                  Login
                </Link>
                <a href="#" className="btn2">Sign Up</a>
              </div>
            </div>

            {/* Burger Menu */}
            <button className="burger-menu" onClick={toggleMenu}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </button>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;