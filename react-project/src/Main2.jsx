import StepBar from "./StepBar"
import '../css/main2.css'

function Main2() {

    return (
      <>
      <StepBar/>
      {/* <!-- Main Section --> */}
<section className="main-section">
<div className="left-section">
{/* <!-- Card Container --> */}
  <div className="card-container">
        <div className="card">
          {/* <!-- Card Front --> */}
          <div className="card-inner">
            <div className="card-front">
              <div className="card-upper">
                <img
                  src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/Image1.png"
                  alt="Image 1"
                />
                <button className="help-btn">100pt <i className="fa-solid fa-trophy"></i>
                </button>
              </div>
              <div className="card-lower">
                <p>Don’t use any transport today (only walk)</p>
                <button className="action-btn">Accept</button>
              </div>
            </div>
           {/*  <!-- Card Back --> */}
            <div className="card-back">
              <button className="help-btn">Х</button>
              <div className="card-back-content">
                <div className="section orange-section">
                  <h3>Boost Your Health: </h3>
                  <p id="mission-text">Walking increases your cardiovascular fitness, strengthens muscles, and improves mood. Science shows that just 30 minutes of walking daily can reduce the risk of heart disease.</p>
                </div>
                <div className="section blue-section">
                  <h3>Protect the Environment:</h3>
                  <p id="challenge-text">Walking increases your cardiovascular fitness, strengthens muscles, and improves mood. Science shows that just 30 minutes of walking daily can reduce the risk of heart disease.</p>
                </div>
                <div className="section pink-section">
                  <h3>Feel Better, Live Better:</h3>
                  <p id="life-text">Walking increases your cardiovascular fitness, strengthens muscles, and improves mood. Science shows that just 30 minutes of walking daily can reduce the risk of heart disease.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Behind Card --> */}
        <div className="card-back-overlay"></div>
        {/* <!-- Dot Indicators --> */}
        <div className="dot-indicators">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </div>

  {/* <!-- Right Section --> */}
  <div className="right-section">
    <h1>Welcome To Your Daily Challenge Hub!</h1>
      <a className="accordion__button btn-orange__norotate">Boost Your Health:</a>
      <div className="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <a className="accordion__button btn-blue__norotate">Protect the Environment:</a>
      <div className="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <a className="accordion__button btn-pink__norotate">Feel Better, Live Better:</a>
      <div className="panel">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
</section>
    

      </>
  )
}

export default Main2