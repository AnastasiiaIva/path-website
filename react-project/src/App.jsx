import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import TheApp from "./pages/TheApp";
import Header from "./misc/Header";
import Footer from "./misc/Footer";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Login from "./misc/Login";
import Register from "./misc/Register";
import "../css/popups.css"


export default function App() {
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
    <BrowserRouter>
      <Header openPopupLogin={openPopupLogin} openPopupRegister={openPopupRegister} closePopup={closePopup} updateTabIndex={updateTabIndex} />
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

      <Routes>
          <Route index path="/" element={<Home openPopupLogin={openPopupLogin}  closePopup={closePopup} updateTabIndex={updateTabIndex}  />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/theapp" element={<TheApp />} />
          <Route path="/help" element={<Help/>}/>
          <Route path="/profile" element={<Profile/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}