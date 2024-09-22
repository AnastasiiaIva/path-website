import React, { useState } from 'react';

function NavbarResp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-menu">   

        {/* Your menu items here */}
      </div>
      <button className={`burger-menu ${isMenuOpen ? 'change' : ''}`} onClick={toggleMenu}>
        {/* Your burger icon here */}
      </button>
    </nav>
  );
}

export default NavbarResp;