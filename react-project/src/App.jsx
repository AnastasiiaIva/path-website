import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import TheApp from "./pages/TheApp";
import Header from "./misc/Header";
import Footer from "./misc/Footer";
import PopUp from "./misc/PopUp";
import Profile from "./pages/Profile";

export default function App() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/theapp" element={<TheApp />} />
            <Route path="/login" element={<PopUp/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }