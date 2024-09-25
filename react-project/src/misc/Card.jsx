// import data as backendData from '../json/cards.json'
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom';


function Card() {
    // const data = backendData
    const [cards, setCards] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        if (!isFlipped)
          setCurrentIndex((currentIndex + 1) % cards.length)
      }, 5000)

      return () => clearInterval(interval)
    })

    useEffect(() => {
      async function getCards() {
        const cards = await fetch('http://localhost:8080/api/v1/cards/')
            .then(response => response.json())
            .then(data => data)
        console.log(cards)
        setCards(cards)
      }
      getCards()
    }, [])

    const changeFlipped = () => {
      console.log('Changing Flipped')
      setIsFlipped(!isFlipped)
    }

    if (!cards?.length)
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
                  src={cards[currentIndex]['img']}
                  alt={cards[currentIndex]['card']}
                />
                <button className="help-btn" onClick={changeFlipped}>?</button>
              </div>
              <div className="card-lower">
                <p>{cards[currentIndex]['card']}</p>
                <Link to="/profile"className="action-btn">Accept</Link>
              </div>
            </div>
            {/* <!-- Card Back --> */}
            <div className="card-back">
              <button className="help-btn" onClick={changeFlipped}>Х</button>
              <div className="card-back-content">
                <div className="section orange-section">
                  <h3>Boost Your Health:</h3>
                  <p id="mission-text">
                    {cards[currentIndex]['missiont']}
                  </p>
                </div>
                <div className="section blue-section">
                  <h3>Protect the Environment:</h3>
                  <p id="challenge-text">
                  {cards[currentIndex]['challenget']}
                  </p>
                </div>
                <div className="section pink-section">
                  <h3>Feel Better, Live Better:</h3>
                  <p id="life-text">
                  {cards[currentIndex]['lifet']}
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
          {cards.map((card, index) => {
            return <span className={currentIndex == index ? "dot active" : "dot"} onClick={currentIndex == index + "dot active"} key={card.card_id}></span>
          }
          )}
        </div>
        </div>
    </>
  )
}

export default Card