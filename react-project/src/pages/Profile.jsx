import backendData from "../../json/users.json";
import Header2 from "../misc/Header2";
import React, { useState, useEffect } from "react";

function Profile() {
  // const data = backendData
  const [tiempoRestante, setTiempoRestante] = useState(24 * 60 * 60); // Tiempo en segundos
  const [acceptedTask, setAcceptedTask] = useState(false);

  const aceptarTarea = () => {
    // Call to backend
    setAcceptedTask(true);
  };

  const completarTarea = () => {
    // TODO: call to backend, complete task and add points
    setAcceptedTask(false);
  };

  useEffect(() => {
    let intervalId;

    if (acceptedTask) {
      intervalId = setInterval(() => {
        if (tiempoRestante > 0) {
          setTiempoRestante(tiempoRestante - 1);
        } else {
          clearInterval(intervalId);
          // Aquí puedes agregar acciones al finalizar la cuenta atrás
          console.log("¡Tiempo agotado!");
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [acceptedTask, tiempoRestante]);

  const horas = Math.floor(tiempoRestante / 3600);
  const minutos = Math.floor((tiempoRestante % 3600) / 60);
  const segundos = tiempoRestante % 60;
  return (
    <>
      <Header2 />
      <link rel="stylesheet" href="css/stylesMainProfile.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      ></link>
      {/* <!-- Main Section --> */}
      <main className="profile">
        <section className="header__3"></section>
        <section className="header__1">
          <div className="container">
            <div className="left">
              <div className="card-contenedor2">
                <div className="product-card">
                  <img
                    src="https://raw.githubusercontent.com/AnastasiiaIva/path-website/main/assets/images/Image1.png"
                    alt="Producto"
                  />
                  <div className="product-details">
                    <div>
                      <h3 className="product-title">
                        Don’t use any transport today (only walk)
                      </h3>
                    </div>
                    {acceptedTask ? (
                      <button
                        className="accept-btn"
                        style={{ backgroundColor: "#93DB70" }}
                        onClick={completarTarea}
                      >
                        Completar
                        <p>
                          {horas}:{minutos}:{segundos}
                        </p>
                      </button>
                    ) : (
                      <button
                        className="accept-btn"
                        style={{ backgroundColor: "#5bb4f4cf" }}
                        onClick={aceptarTarea}
                      >
                        Aceptar
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="Tips">
                <h1>Tips for Success:</h1>
                <ul className="List">
                  <li>1. Plan Ahead: Map your walking routes.</li>
                  <li>
                    2. Dress Comfortably: Wear suitable shoes and
                    weather-appropriate clothes.
                  </li>
                  <li>3. Stay Hydrated: Carry a reusable water bottle.</li>
                  <li>
                    4. Allow Extra Time: Start earlier to account for walking
                    time.
                  </li>
                  <li>5. Combine Errands: Group tasks into one walk.</li>
                  <li>6. Track Progress: Use a fitness app or tracker.</li>
                  <li>7. Enjoy It: Listen to music or podcasts.</li>
                  <li>8. Walk with a Friend: Make it social.</li>
                  <li>9. Take Breaks: Rest when needed.</li>
                  <li>10. Explore: Discover new routes and enjoy nature.</li>
                </ul>
              </div>
            </div>
            <div className="right">
              <div className="header__right">
                <h4>
                  <i className="fa-regular fa-calendar"></i> This week: 2nd
                  place
                </h4>
              </div>
              <div className="Content">
                <ul className="ranking">
                  <li className="li__ranking">
                    <span>1.</span>
                    <span>Sandra</span>
                    <span id="points">780</span>
                  </li>
                  <li className="li__ranking">
                    <span>2.</span>
                    <span>Martin</span>
                    <span id="points">720</span>
                  </li>
                  <li className="li__ranking">
                    <span>3.</span>
                    <span>Alejandro</span>
                    <span id="points">700</span>
                  </li>
                  <li className="li__ranking">
                    <span>4.</span>
                    <span>Maria</span>
                    <span id="points">675</span>
                  </li>
                  <li className="li__ranking">
                    <span>5.</span>
                    <span>Anastasiia</span>
                    <span id="points">630</span>
                  </li>
                  <li className="li__ranking">
                    <span>6.</span>
                    <span>Luis</span>
                    <span id="points">600</span>
                  </li>
                  <li className="li__ranking">
                    <span>7.</span>
                    <span>Celia</span>
                    <span id="points">580</span>
                  </li>
                  <li className="li__ranking">
                    <span>8.</span>
                    <span>Ivan</span>
                    <span id="points">525</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
