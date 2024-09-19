function Card() {

    return (
      <>

{/* <!-- Card Container --> */}
<div className="card-container">
<div className="card" id="card">
  {/* <!-- Card Front --> */}
  <div className="card-inner">
    <div className="card-front">
      <div className="card-upper">
        <img
          src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/Image1.png"
          alt="Image 1"
        />
        <button className="help-btn">?</button>
      </div>
      <div className="card-lower">
        <p>Don’t use any transport today (only walk)</p>
        <button className="action-btn">Accept</button>
      </div>
    </div>
    {/* <!-- Card Back --> */}
    <div className="card-back">
      <button className="help-btn">Х</button>
      <div className="card-back-content">
        <div className="section orange-section">
          <h3>Boost Your Health:</h3>
          <p id="mission-text">
            Walking increases your cardiovascular fitness, strengthens
            muscles, and improves mood. Science shows that just 30
            minutes of walking daily can reduce the risk of heart
            disease.
          </p>
        </div>
        <div className="section blue-section">
          <h3>Protect the Environment:</h3>
          <p id="challenge-text">
            Walking increases your cardiovascular fitness, strengthens
            muscles, and improves mood. Science shows that just 30
            minutes of walking daily can reduce the risk of heart
            disease.
          </p>
        </div>
        <div className="section pink-section">
          <h3>Feel Better, Live Better:</h3>
          <p id="life-text">
            Walking increases your cardiovascular fitness, strengthens
            muscles, and improves mood. Science shows that just 30
            minutes of walking daily can reduce the risk of heart
            disease.
          </p>
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

</>
  )
}

export default Card