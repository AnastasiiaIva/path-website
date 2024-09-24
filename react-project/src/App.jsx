import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import TheApp from "./pages/TheApp";
import Footer from "./misc/Footer";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import Main from "./pages/Main2";


export default function App() {
 

  return (
    <BrowserRouter>
      
      <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/theapp" element={<TheApp />} />
          <Route path="/help" element={<Help/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/home" element={<Main/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}