import { Link } from "react-router-dom"
import Header2 from "../misc/Header2"

function TheApp() {

    return (
      <>
      <Header2/>
<link rel="stylesheet" href="css/theapp.css" />

<section className="hero-app">
<div className="hero-content-app">
  <div className="hero-text-app">
    <h1>Welcome to Path, start enjoying your well-being and that of others.</h1>
    <p>Discover the advantages of using Path in your daily life where you can improve your 
      healthy habits and daily goals that help your well-being.</p>
    <div className="hero-buttons-app">
      <Link to="/aboutus" className="btn" id="conocenos">About us</Link>
      <Link to="/contact" className="btn" id="contactanos">Contact us</Link>
    </div>
  </div>
  <div className="hero-image-app">
    <img src="images/realistic-phone-studio-social-media-concept.jpg" alt="Descripción de la imagen"/>
  </div>
</div>
</section>


{/* <!--Section 3 columns--> */}
<section className="three-columns-section">
<div className="feature">
  <img className="zoom" src="images/10.jpg" alt="Exercise image"/>
  <h3><i className="fa-solid fa-person-walking"></i> Exercise</h3>
  <p>Engage in regular physical activity to boost your energy levels and improve your overall health. Exercise helps in maintaining a healthy weight, reducing stress, and enhancing your mood.</p>
</div>
<div className="feature">
  <img className="zoom" src="images/10741559.jpg" alt="Nature and work activity image"/>
  <h3><i className="fa-solid fa-tree"></i> Nature and Work </h3>
  <p>Combine your work with outdoor activities to benefit from the natural environment. Working in nature can enhance creativity, reduce stress, and improve mental well-being.</p>
</div>
<div className="feature">
  <img className="zoom" src="images/8202585.jpg" alt="Good habits image"/>
  <h3> <i className="fa-solid fa-stopwatch-20"></i> Good Habits</h3>
  <p>Developing good habits like organizing your home can lead to a more productive and stress-free environment. Keeping your space tidy can help improve focus and create a positive atmosphere.</p>
</div>
</section>


      </>
  )
}

export default TheApp