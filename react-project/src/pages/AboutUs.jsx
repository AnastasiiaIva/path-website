import '../../css/stylesMain.css'
import Header2 from '../misc/Header2'


function AboutUs() {

    return (
      <>
      <Header2/>
      {<link rel="stylesheet" href="css/aboutus.css" />}
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
        <img src="images/Imagen de WhatsApp 2024-09-23 a las 09.34.41_94048058.jpg" alt="Profile image 1"/>
        <h3>Anastasiia</h3>
        <p>Frontend Developer</p>
        <p>As a frontend developer, I’m eager to create seamless, user-friendly experiences. With experience in building my first website, I’m passionate about clean design and responsive layouts, and I’m excited to grow and deliver impactful products
        </p>
        <div className="social-buttons">
          {/* <a href="#" className="btn">LinkedIn</a>
          <a href="#" className="btn">GitHub</a> */}
        </div>
      </div>
    
      <div className="profile-card">
        <img src="images/Imagen de WhatsApp 2024-09-24 a las 16.28.52_76c8d83d.jpg" alt="Profile image 2"/>
        <h3>Fernando</h3>
        <p>Backend Developer</p>
        <p>As a backend developer, my job is to build the code that makes applications run. It's a constant challenge, but the reward of seeing your code in action is priceless.The developer community is incredibly supportive and there is always someone willing to help.</p>
        <div className="social-buttons">
          {/* <a href="#" className="btn">LinkedIn</a>
          <a href="#" className="btn">GitHub</a> */}
        </div>
      </div>
    
      <div className="profile-card">
        <img src="images/Imagen de WhatsApp 2024-09-23 a las 11.38.23_0eae18fe.jpg" alt="Profile image 3"/>
        <h3>Luis</h3>
        <p>Fullstack Developer</p>
        <p>Luis is a versatile developer proficient in both frontend and backend technologies. His ability to manage full-stack projects makes him a key asset to the team.</p>
        <div className="social-buttons">
          {/* <a href="#" className="btn">LinkedIn</a>
          <a href="#" className="btn">GitHub</a> */}
        </div>
      </div>
    
      <div className="profile-card">
        <img src="images/Imagen de WhatsApp 2024-09-23 a las 10.38.31_a667099ea.jpg" alt="Profile image 4"/>
        <h3>Martín</h3>
        <p>Frontend & UI/UX Designer</p>
        <p>Every product tells a story. It’s not just about aesthetics; it’s about solving real-world problems. I specialize in turning visions into reality by crafting products that not only look stunning but also function seamlessly.
        </p>
        <div className="social-buttons">
          {/* <a href="#" className="btn">LinkedIn</a>
          <a href="#" className="btn">Portfolio</a> */}
        </div>
      </div>
    </section>
    
    </main>

      </>
  )
}

export default AboutUs