import Header2 from "../misc/Header2";
import { useState, useEffect } from "react";

function Profile() {
  // const data = backendData
  const [tiempoRestante, setTiempoRestante] = useState(24 * 60 * 60); // Tiempo en segundos
  const [acceptedTask, setAcceptedTask] = useState(false);
  const [users, setUsers] = useState([])
  const [points, setPoints] = useState(710) 
  const [estadoBoton, setEstadoBoton] = useState('Start'); // Estado inicial

  const cambiarEstado = () => {
    const nuevosEstados = ['Start', 'Complete' ,'Congrats','Congrats'];
    const indiceActual = nuevosEstados.indexOf(estadoBoton);
    const nuevoIndice = (indiceActual + 1) % nuevosEstados.length;
    setEstadoBoton(nuevosEstados[nuevoIndice]);
  };

  useEffect(() => {
    if (estadoBoton === 'Complete') {
      // Aquí va la función que quieres ejecutar
      aceptarTarea();
    }
  }, [estadoBoton]);

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
    setAcceptedTask(true);
  };

 /*  const completarTarea = () => {
    // TODO: call to backend, complete task and add points
    setAcceptedTask(false);
    setPoints(770)

  }; */

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

    if (!users?.length)
    return null
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
                    <button
      onClick={cambiarEstado}
      className={`accept-btn ${estadoBoton}`} // Aplica clases CSS dinámicas
    >
      {estadoBoton}

      <p className="contador">{horas}:{minutos}:{segundos}</p>
    </button>
                    {/* {acceptedTask ? (
                      <button
                        className="accept-btn"
                        style={{ backgroundColor: "#93DB70" }}
                        onClick={completarTarea}
                      >
                        Complete
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
                        Start
                      </button>
                    )} */}
                  </div>
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
                      <span id="medal">🥇</span>
                      <span>{users[1]['username']}</span>
                      <span id="points">{users[1]['points']}</span>
                    </li>
                    <li className="li__ranking">
                      <span id="medal">🥈</span>
                      <span>Fernando</span>
                      <span id="points">{points}</span>
                    </li>
                    <li className="li__ranking">
                      <span id="medal">🥉</span>
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
                  </ul>
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
                <li>
                  11. Stretch Beforehand: Warm up your muscles with light
                  stretches to avoid stiffness.
                </li>
                <li>
                  12. Pace Yourself: Walk at a comfortable speed to avoid
                  overexertion.
                </li>
                <li>
                  13. Break It Up: If it's a long distance, split it into
                  smaller, manageable walks throughout the day.
                </li>
                <li>
                  14. Mind Your Posture: Keep a good posture to avoid discomfort
                  or strain.
                </li>
                <li>
                  15. Reward Yourself: Treat yourself to something you enjoy
                  after completing the challenge to stay motivated.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;