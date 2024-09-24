/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import Card from "../misc/Card";
import { FaqItem } from "../misc/FaqItem";



function Home({openPopupLogin, closePopup}) {

  return (
    <>
      <link rel="stylesheet" href="css/stylesMain.css" />
        {/* <!-- Main Section --> */}
    <section className="main-container">
      <div className="left-section">
      <div className="content">
        <h1>Welcome To Your Daily Challenge Hub!</h1>
        <div className="content-h2">
          <h2>We&apos;re here to help you become the best version of yourself:</h2>
          <button className="btn-try" onClick={openPopupLogin} closePopup={closePopup} >Try It Now</button>
        </div>
        </div>
        <div className="button-group">
          <a href="#" className="btn-orange">1. Get Daily Missions</a>
          <a href="#" className="btn-blue">2. Accept Challenges</a>
          <a href="#" className="btn-pink">3. Improve Your Life</a>
        </div>
      </div>

      {/* <!-- Right Section with Cards --> */}
      <div className="right-section">
        <img
          id="card_background"
          src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/bef898ff58348c828afc1ca2be1182cf688120f1/assets/images/card_background.svg"
        />

        <Card openPopupLogin={openPopupLogin} closePopup={closePopup}/>
      </div>
    </section>
              {/* <!-- New Blue Section with Circles --> */}
            <div className="container">  
              <div className="blue-block">
                <div className="blue-section-block">
                  <div className="circle">
                    <img src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/1emoji.png" alt="Icon 1"/>
                  </div>
                  <h4>Start each day with a unique mission</h4>
                  <p>Our carefully curated tasks are meant to push you out of your comfort zone and encourage personal growth.</p>
                </div>
                <div className="blue-section-block">
                  <div className="circle">
                    <img src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/2emoji.png" alt="Icon 2"/>
                  </div>
                  <h4>Gain new perspectives and skills</h4>
                  <p>Each mission is crafted to help you develop new abilities and broaden your horizons.</p>
                </div>
                <div className="blue-section-block">
                  <div className="circle">
                    <img src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/3emoji.png" alt="Icon 3"/>
                  </div>
                  <h4>Stay motivated with exciting and achievable goals</h4>
                  <p>Our missions are designed to be engaging and within reach, ensuring you stay driven and committed.</p>
                </div>
              </div>
            </div>

            <div className="container">
              <section className="faq-section">
                <h2>Frequent Ask Questions</h2>
                {/* <p className="faq-help-text">Still need help? <a href="#">Get Help Now</a></p> */}

                <FaqItem title="What is the Daily Challenge program?">
                  <p>The Daily Challenge program is designed to help you improve various aspects of your life through simple, daily missions. Each day, you receive a new challenge aimed at enhancing your health, well-being, and productivity. It’s about making small, achievable changes that lead to significant benefits over time.</p>
                </FaqItem>
                <FaqItem title="How do I participate in a Daily Challenge?">
                  <p>Participation is easy! Sign up on our website to receive your daily mission via email. Follow the task for the day, and track your progress directly on our platform. You can also engage with our community for support and motivation.</p>
                </FaqItem>
                <FaqItem title="Are the Daily Challenges customizable?">
                  <p>While the daily missions are designed to be universally beneficial, they are crafted to be adaptable. If you have specific goals or needs, you can choose from various categories to tailor the challenges to better suit your lifestyle and preferences.</p>
                </FaqItem>
                <FaqItem title="How do the challenges benefit me?">
                  <p>Each challenge is crafted to address different aspects of personal growth, including physical health, mental well-being, and environmental sustainability. By participating, you’ll boost your overall health, develop positive habits, and contribute to a greener planet.</p>
                </FaqItem>
                <FaqItem title="What if I miss a day?">
                  <p>Don’t worry! You can always catch up on missed challenges. Our platform allows you to view previous missions and complete them at your own pace. The key is consistency, but life happens—so just pick up where you left off.</p>
                </FaqItem>
              </section>
            </div>
            {/* <script src="../misc/PopUp.jsx"></script> */}
      
    </>
  )
}

export default Home
