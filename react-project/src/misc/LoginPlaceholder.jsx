import { useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Login from './Login';
import Register from './Register';





function LoginPlaceholder() {
  const [tabIndex, setTabIndex] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(false);


  // Funciónes para abrir el popup
  const openPopupLogin = () => {
    setPopupOpen(true);
  };

  const openPopupRegister = () => {
    setPopupOpen(true);
    setTabIndex(1);
  };


  // Función para cerrar el popup
  const closePopup = () => {
    setPopupOpen(false);
    setTabIndex(0);
  };


  

  return (
    <>
    <link rel="stylesheet" href="css/popups.css" />
    
    <div id="login-popup" className="popup">
        {/* Botón para abrir el popup */}
      <button className='btn1' onClick={openPopupLogin}>Log in</button>
      <button className='btn2' onClick={openPopupRegister} >Sign up</button>
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
                          <button className="close-btn" onClick={closePopup}>X</button>

                      </div>
                  </div></>
    )}
</div>

    </>
  );
}

export default LoginPlaceholder;