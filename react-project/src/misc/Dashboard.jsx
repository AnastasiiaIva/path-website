import React, { useState } from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  background-color: #f0f0f0;
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
`;

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Botón para abrir/cerrar el dashboard
  const toggleDashboard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Botón para abrir el dashboard */}
      <button onClick={toggleDashboard}>Abrir Dashboard</button>
      <DashboardContainer isOpen={isOpen}>
        {/* Contenido del dashboard (nombre de usuario, notificaciones, etc.) */}
        <p>Hola, Usuario!</p>
        {/* Otras secciones del dashboard */}
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;