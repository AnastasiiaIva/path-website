/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
 


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsBurgerOpen(!isBurgerOpen);

  };

  
  
  const menuClasses = `navbar-menu ${isMenuOpen ? "active" : ""}`; // Combine menu and active class

  const burgerClasses = `burger-menu ${isBurgerOpen ? "change" : ""}`;

  
 

  return (
    <>
      <link rel="stylesheet" href="css/styles.css" />

      <div className="container">
        <header>
          <nav className="navbar">
            {/* Logo */}
            <Link to="/home" className="navbar-logo">
              <img
                src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/c57e3b5fcaa2296d14386dd2b48d457f4448adf6/assets/images/IconBlue.png"
                alt="Logo - Path"
              />
            </Link>

            {/* Menu Items */}
            <div className={menuClasses}> {/* Apply combined class conditionally */}
              <div className="navbar-menu-text">
                <Link to="/home" onClick={toggleMenu}>Home</Link>
                <Link to="/theapp" onClick={toggleMenu}>The App</Link>
                <Link to="/aboutus" onClick={toggleMenu}>About us</Link>
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                <Link to="/help" onClick={toggleMenu}>Help</Link>
              </div>

              {/* Action Buttons (optional) */}
              {/* <div className="navbar-menu-btn" > */}
                <Dashboard/>
                {/* <a href="#" className="btn2">Sign Up</a> */}
              {/* </div> */}
            </div>

            {/* Burger Menu */}
            <button className={burgerClasses} onClick={toggleMenu}>
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

export default Header2;