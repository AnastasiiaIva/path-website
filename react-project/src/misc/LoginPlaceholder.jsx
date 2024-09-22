import React, { useState, createContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Login from './Login';
import Register from './Register';

const ThemeContext = createContext('light'); // Valor por defecto



function LoginPlaceholder() {
  const [tabIndex, setTabIndex] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(false);


  // Función para abrir el popup
  const openPopup = () => {
    setPopupOpen(true);
  };

  // Función para cerrar el popup
  const closePopup = () => {
    setPopupOpen(false);
  };


  

  return (
    <>
    <link rel="stylesheet" href="css/popups.css" />
    
    <div id="login-popup" className="popup">
        {/* Botón para abrir el popup */}
      <button className='btn1' onClick={openPopup}>Log in</button>
      {/* Popup: se muestra si isPopupOpen es true */}
      {isPopupOpen && (
    <><div className="popup-overlay"></div><div className="popup-content">
                      <div className="popup-header">
                          <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

                              <TabList className="tabs">
                                  <Tab className="span">Log in</Tab>
                                  <Tab className="span">Register</Tab>
                              </TabList>



                              <TabPanel>

                                  <Login />

                              </TabPanel>



                              <TabPanel>

                                  <Register />

                              </TabPanel>


                          </Tabs>

                          {/* Botón para cerrar el popup */}
                          <button onClick={closePopup}>Cerrar</button>

                      </div>
                  </div></>
    )}
</div>

    </>
  );
}

export default LoginPlaceholder;