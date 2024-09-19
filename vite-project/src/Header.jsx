import { Link } from "react-router-dom"

function Header() {

    return (
      <>
        
        <div className="container">
      <header>
        <nav className="navbar">
          {/* <!-- Logo --> */}
          <a href="#" className="navbar-logo">
            <img
              src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/c57e3b5fcaa2296d14386dd2b48d457f4448adf6/assets/images/IconBlue.png"
              alt="Logo - Path"
            />
          </a>

          {/* <!-- Menu Items --> */}
          <div className="navbar-menu">
            <div className="navbar-menu-text">
              <Link to="/">Home</Link>
              <Link to="/theapp">The App</Link>
              <Link to="/aboutus">About us</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/">Help</Link>
            </div>
            {/* <!-- Action Buttons --> */}
            <div className="navbar-menu-btn">
              <a href="#" className="btn1">Login</a>
              <a href="#" className="btn2">Sign Up</a>
            </div>
          </div>

          {/* <!-- Burger Menu --> */}
          <div className="burger-menu" onClick="toggleMenu()">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    </div>
          
          
      </>
    )
  }
  
  export default Header