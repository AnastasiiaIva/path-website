// import data as backendData from '../json/cards.json'
import { useEffect, useState } from 'react'
import backendData from '../../json/cards.json'
import { Link } from "react-router-dom"


function Card() {
    const data = backendData
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        if (!isFlipped)
          setCurrentIndex((currentIndex + 1) % data.cards.length)
      }, 5000)

      return () => clearInterval(interval)
    })

    const changeFlipped = () => {
      console.log('Changing Flipped')
      setIsFlipped(!isFlipped)
    }

    if (!data?.cards?.length)
        return null

    return (
      <>
      
        {/* <!-- Card Container --> */}
        <div className={isFlipped ? "card-container open" : "card-container"}>
        <div className={isFlipped ? "card flipped" : "card"} id="card">
          {/* <!-- Card Front --> */}
          <div className="card-inner">
            <div className="card-front">
              <div className="card-upper">
                <img
                  src={data['cards'][currentIndex]['image']}
                  alt={data['cards'][currentIndex]['text']}
                />
                <button className="help-btn" onClick={changeFlipped}>?</button>
              </div>
              <div className="card-lower">
                <p>{data['cards'][currentIndex]['text']}</p>
                <Link to="/" className="action-btn">Accept</Link>
              </div>
            </div>
            {/* <!-- Card Back --> */}
            <div className="card-back">
              <button className="help-btn" onClick={changeFlipped}>Х</button>
              <div className="card-back-content">
                <div className="section orange-section">
                  <h3>Boost Your Health:</h3>
                  <p id="mission-text">
                    {data['cards'][currentIndex]['missionText']}
                  </p>
                </div>
                <div className="section blue-section">
                  <h3>Protect the Environment:</h3>
                  <p id="challenge-text">
                  {data['cards'][currentIndex]['challengeText']}
                  </p>
                </div>
                <div className="section pink-section">
                  <h3>Feel Better, Live Better:</h3>
                  <p id="life-text">
                  {data['cards'][currentIndex]['lifeText']}
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
          {data.cards.map((card, index) => {
            return <span className={currentIndex == index ? "dot active" : "dot"} key={card.id}></span>
          }
          )}
        </div>
        </div>
    </>
  )
}

export default Card