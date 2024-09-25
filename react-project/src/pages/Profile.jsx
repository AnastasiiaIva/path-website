//import data as backendData from '../json/users.json'
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import Header2 from "../misc/Header2"
import { useState, useEffect } from 'react';

function Profile() {
     // const data = backendData
  const [tiempoRestante, setTiempoRestante] = useState(24 * 60 * 60); // Tiempo en segundos
  const [acceptedTask, setAcceptedTask] = useState(false);
  const [users, setUsers] = useState([])
 

  useEffect(() => {
    async function getUsers() {
      const users = await fetch('http://localhost:8080/api/v1/users/')
          .then(response => response.json())
          .then(data => data)
      console.log(users)
      setUsers(users)
    }
    getUsers()
  }, [])

  const aceptarTarea = () => {
    // Call to backend
    setAcceptedTask(true)
  }

  const completarTarea = () => {
    // TODO: call to backend, complete task and add points
    setAcceptedTask(false)
  }

  useEffect(() => {
    let intervalId;

    if (acceptedTask) {
      intervalId = setInterval(() => {
      if (tiempoRestante > 0) {
        setTiempoRestante(tiempoRestante - 1);
      } else {
        clearInterval(intervalId);
        // Aquí puedes agregar acciones al finalizar la cuenta atrás
        console.log('¡Tiempo agotado!');
      }
    }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [acceptedTask, tiempoRestante]);

  const horas = Math.floor(tiempoRestante / 3600);
  const minutos = Math.floor((tiempoRestante % 3600) / 60);
  const segundos = tiempoRestante % 60;



  if (!users?.length)
    return null

  
    return (
      <>
      <Header2/>
      <link rel="stylesheet" href="css/stylesMainProfile.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer"></link>
      {/* <!-- Main Section --> */}
    <main className="profile">
    <section className="header__3">
        <div className="card-contenedor2">
          <div className="product-card">
            <img src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/Image1.png" alt="Producto"/>
              <div className="product-details">
                <div>
                  <div className="product-title">Don’t use any transport today (only walk)</div>
                </div>
                {acceptedTask ? (
        <button className="accept-btn"style={{ backgroundColor: '#93DB70' }}
          onClick={completarTarea}>
            Completar
            <p>{horas}:{minutos}:{segundos}</p>
        </button>
                ) : (
        <button className="accept-btn"style={{ backgroundColor: '#5bb4f4cf' }}
          onClick={aceptarTarea}>
            Aceptar
        </button>)}
              </div>
          </div>
         </div>
      </section>
      <section className="header__1">
        <div className="container" >
        <div className="left">
            <h1>Tips for Success:</h1>
            <ul className="List">
              <li>1. Plan Ahead: Map your walking routes.</li>
              <li>2. Dress Comfortably: Wear suitable shoes and weather-appropriate clothes.</li>
              <li>3. Stay Hydrated: Carry a reusable water bottle.</li>
              <li>4. Allow Extra Time: Start earlier to account for walking time.</li>
              <li>5. Combine Errands: Group tasks into one walk.</li>
              <li>6. Track Progress: Use a fitness app or tracker.</li>
              <li>7. Enjoy It: Listen to music or podcasts.</li>
              <li>8. Walk with a Friend: Make it social.</li>
              <li>9. Take Breaks: Rest when needed.</li>
              <li>10. Explore: Discover new routes and enjoy nature.</li>
            </ul>
          </div>
          <div className="right">
            <header className="header__2">
              <div className="header__left">  
                <p><i className="fa-regular fa-clock"></i>Timer Left</p>
                
              </div>
              <div className="header__right">
                <p><i className="fa-regular fa-calendar"></i>Today</p>
                <p>2 places</p>
              </div>
            </header>
            <div className="Content">
              <ul className="ranking">
                <li className="li__ranking">
                  <span>1.</span>
                  <span>{users[0]['username']}</span>
                  <span>{users[0]['points']}</span>
                </li>
                <li className="li__ranking">
                  <span>2.</span>
                  <span>Martin</span>
                  <span>720</span>
                </li>
                <li className="li__ranking">
                  <span>3.</span>
                  <span>Alejandro</span>
                  <span>700</span>
                </li>
                <li className="li__ranking">
                  <span>4.</span>
                  <span>Maria</span>
                  <span>675</span>
                </li>
                <li className="li__ranking">
                  <span>5.</span>
                  <span>Anastasiia</span>
                  <span>630</span>
                </li>
                <li className="li__ranking">
                  <span>6.</span>
                  <span>Luis</span>
                  <span>600</span>
                </li>
                <li className="li__ranking">
                  <span>7.</span>
                  <span>Celia</span>
                  <span>580</span>
                </li>
                <li className="li__ranking">
                  <span>8.</span>
                  <span>Ivan</span>
                  <span>525</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
</>
      )
    }
    
    export default Profile