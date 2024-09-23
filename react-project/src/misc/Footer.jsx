import { Link } from "react-router-dom"

function Footer() {

    return (
      <>

<footer className="footer">
  <div className="footer-content">
    
    {/* <!-- First Column: Logo and Social Links --> */}
    <div className="footer-column">
      <img src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/IconBlack.png" alt="Path Logo" className="footer-logo"/>
      <div className="social-links">
        <a href="#"><img src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/inst.png" alt="Instagram"/></a>
        <a href="#"><img src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/twitter.png" alt="Twitter"/></a>
        <a href="#"><img src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/linkedIn.png" alt="LinkedIn"/></a>
      </div>
    </div>
    
    {/* <!-- Second Column: Links --> */}
    <div className="footer-column">
      <ul className="footer-links">
        <li><Link to="/theapp">The App</Link></li>
        <li><Link to="/aboutus">About us</Link></li>
        <li><Link to="/help">Help</Link></li>
      </ul>
    </div>
    
    {/* <!-- Third Column: About Text --> */}
    <div className="footer-column">
      <p>
        At Path, we are dedicated to delivering excellence and innovation. We strive to create value and make a positive impact on the lives of our customers, employees, and communities through our commitment to quality and integrity.
      </p>
    </div>
  
  </div>
</footer>

</>
    )
  }
  
  export default Footer