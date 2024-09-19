function AboutUs() {

    return (
      <>

      <main>
      <section className="team-intro">
      <div className="intro-content">
        <div className="intro-text">
          <h1>Meet Our Team</h1>
          <p>We are a passionate group of developers and designers working together to bring innovative solutions to life. Get to know more about us below.</p>
        </div>
        <div className="intro-image">
          <img src="/images/2151294501.jpg" alt="Team image"/>
        </div>
      </div>
    </section>

    <section className="team-profiles">
      <div className="profile-card">
        <img src="images/profile1.jpg" alt="Profile image 1"/>
        <h3>Anastasia</h3>
        <p>Frontend Developer</p>
        <p>John specializes in creating intuitive user interfaces and experiences. With a passion for responsive design, he ensures every project is optimized for mobile and desktop.</p>
        <div className="social-buttons">
          <a href="#" className="btn">LinkedIn</a>
          <a href="#" className="btn">GitHub</a>
        </div>
      </div>
    
      <div className="profile-card">
        <img src="images/profile2.jpg" alt="Profile image 2"/>
        <h3>Fernando</h3>
        <p>Backend Developer</p>
        <p>Jane excels in server-side logic and database management. She ensures that the backend is efficient and scalable for high-traffic applications.</p>
        <div className="social-buttons">
          <a href="#" className="btn">LinkedIn</a>
          <a href="#" className="btn">GitHub</a>
        </div>
      </div>
    
      <div className="profile-card">
        <img src="images/profile3.jpg" alt="Profile image 3"/>
        <h3>Luis</h3>
        <p>Fullstack Developer</p>
        <p>Michael is a versatile developer proficient in both frontend and backend technologies. His ability to manage full-stack projects makes him a key asset to the team.</p>
        <div className="social-buttons">
          <a href="#" className="btn">LinkedIn</a>
          <a href="#" className="btn">GitHub</a>
        </div>
      </div>
    
      <div className="profile-card">
        <img src="images/profile4.jpg" alt="Profile image 4"/>
        <h3>Martín</h3>
        <p>Frontend & UI/UX Designer</p>
        <p>Emily brings creative solutions to life with her UI/UX designs. She focuses on making interfaces that are both beautiful and user-friendly.</p>
        <div className="social-buttons">
          <a href="#" className="btn">LinkedIn</a>
          <a href="#" className="btn">Portfolio</a>
        </div>
      </div>
    </section>
    
    </main>

      </>
  )
}

export default AboutUs