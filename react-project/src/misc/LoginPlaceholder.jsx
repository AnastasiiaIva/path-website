
import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Login from './Login';
import Register from './Register';


import '../../css/popups.css'




function LoginPlaceholder() {
  const [tabIndex, setTabIndex] = useState(0);
  const [isPopupOpen, setPopupOpen] = useState(false);

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

  const updateTabIndex = (index) => {
    setTabIndex(index)
  }





  return (
    <>
    <link rel="stylesheet" href="css/popups.css" />
    
    <div id="login-popup"   className="popup" >
        {/* Botón para abrir el popup */}
      <button className='btn1' onClick={openPopupLogin}>Log in</button>
      <button className='btn2' onClick={openPopupRegister}>Sign up</button>
      {isPopupOpen ? (
        <>
          {<div className="popup-overlay"></div>}<div className="popup-content">
              <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} >
            <div className="popup-header">
                <TabList className="tabs">
                  <Tab >Log in</Tab>
                  <Tab >Register</Tab>
                </TabList>
                </div>
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
        </>
      ) : <></>}
</div>
    </>
  );
}

export default LoginPlaceholder;
