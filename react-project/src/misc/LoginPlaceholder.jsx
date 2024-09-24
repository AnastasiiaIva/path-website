/* eslint-disable react/prop-types */
/* import { useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Login from './Login';
import Register from './Register';
 */




function LoginPlaceholder({openPopupLogin, openPopupRegister/* closePopup, updateTabIndex */}) {
  // const [tabIndex, setTabIndex] = useState(0);
  // const [isPopupOpen, setPopupOpen] = useState(false);


  // Funciónes para abrir el popup
  
/*
  const openPopupRegister = () => {
    setPopupOpen(true);
    setTabIndex(1);
  };

*/
  

  return (
    <>
    <link rel="stylesheet" href="css/popups.css" />
    
    <div id="login-popup" className="popup">
        {/* Botón para abrir el popup */}
      <button className='btn1' onClick={openPopupLogin}>Log in</button>
      <button className='btn2' onClick={openPopupRegister}>Sign up</button>
</div>

    </>
  );
}

export default LoginPlaceholder;
