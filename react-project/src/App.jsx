import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Home from "./Home";
import TheApp from "./TheApp";
import Header from "./Header";
import Footer from "./Footer";
import PopUp from "./PopUp";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }