

function Profile() {

    return (
      <>
      {<link rel="stylesheet" href="css/stylesMainProfile.css" />}
      {/* <!-- Main Section --> */}
    <main className="profile">
      <section className="header__1">
        <div className="container" >
        <div class="left">
            <h1>Tips for Success:</h1>
            <ul class="List">
              <li>1. Plan Ahead: Map your walking routes.</li>
              <li>2. Dress Comfortably: Wear suitable shoes and weather-appropriate clothes.</li>
              <li>3. Stay Hydrated: Carry a reusable water bottle.</li>
              <li>4. Allow Extra Time: Start earlier to account for walking time.</li>
              <li>5. Combine Errands: Group tasks into one walk.</li>
              <li>6. Track Progress: Use a fitness app or tracker.</li>
              <li>7. Enjoy It: Listen to music or podcasts.</li>
              <li>8. Walk with a Friend: Make it social..</li>
              <li>9. Take Breaks: Rest when needed.</li>
              <li>10. Explore: Discover new routes and enjoy nature.</li>
            </ul>
          </div>
          <div className="right">
            <header className="header__2">
              <div className="header__left">  
                <p>Timer Left</p>
                <p>00:23:45 hs</p>
              </div>
              <div className="header__right">
                <p>Today</p>
                <p>2 places</p>
              </div>
            </header>
            <div className="Content">
              <ul className="ranking">
                <li className="li__ranking">
                  <span>1.</span>
                  <span>Anastassia</span>
                  <span>120</span>
                </li>
                <li className="li__ranking">
                  <span>2.</span>
                  <span>Anastassia</span>
                  <span>90</span>
                </li>
                <li className="li__ranking">
                  <span>3.</span>
                  <span>Anastassia</span>
                  <span>70</span>
                </li>
                <li className="li__ranking">
                  <span>4.</span>
                  <span>Anastassia</span>
                  <span>50</span>
                </li>
                <li className="li__ranking">
                  <span>5.</span>
                  <span>Anastassia</span>
                  <span>100</span>
                </li>
                <li className="li__ranking">
                  <span>6.</span>
                  <span>Anastassia</span>
                  <span>60</span>
                </li>
                <li className="li__ranking">
                  <span>7.</span>
                  <span>Anastassia</span>
                  <span>80</span>
                </li>
                <li className="li__ranking">
                  <span>8.</span>
                  <span>Anastassia</span>
                  <span>25</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="header__3">
        <div className="card-contenedor2">
          <div className="product-card">
            <img src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/Image1.png" alt="Producto"/>
              <div className="product-details">
                <div>
                  <div className="product-title">Don’t use any transport today (only walk)</div>
                </div>
                <button className="accept-btn">Aceptar</button>
              </div>
          </div>
          <div className="product-card">
            <img src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/Image1.png" alt="Producto"/>
            <div className="product-details">
              <div>
                <div className="product-title">Don’t use any transport today (only walk)</div>
              </div>
              <button className="accept-btn">Aceptar</button>
            </div>
          </div>
        </div>
      </section>
    </main>
</>
      )
    }
    
    export default Profile