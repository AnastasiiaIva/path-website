import React, { useState, useEffect } from 'react';

function CuentaAtras24Horas() {
  const [tiempoRestante, setTiempoRestante] = useState(24 * 60 * 60); // Tiempo en segundos
  const [cuentaActiva, setCuentaActiva] = useState(false);

  useEffect(() => {
    let intervalId;

    if (cuentaActiva) {
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
  }, [cuentaActiva, tiempoRestante]);

  const iniciarCuenta = () => {
    setCuentaActiva(true);
  };


  const horas = Math.floor(tiempoRestante / 3600);
  const minutos = Math.floor((tiempoRestante % 3600) / 60);
  const segundos = tiempoRestante   
 % 60;

  return (
    <div>
      <p>{horas}:{minutos}:{segundos}</p>
    </div>
  );
}

export default CuentaAtras24Horas;