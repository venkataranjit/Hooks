import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Ensure this file is in the same directory
import Home from "./components/Home"; // Example components
import PropsC1 from "./components/PropsC1";
import PropsC2 from "./components/PropsC2";
import PropsC3 from "./components/PropsC3";
import PropsC4 from "./components/PropsC4";
import PropsC5 from "./components/PropsC5";
import "./App.scss";
import Footer from "./components/Footer";
import BgChange from "./components/BgChange";

function App() {
  return (
    <>
      
      <Router>
        <Navbar />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propsc1" element={<PropsC1 />} />
          <Route path="/propsc2" element={<PropsC2 />} />
          <Route path="/propsc3" element={<PropsC3 />} />
          <Route path="/propsc4" element={<PropsC4 />} />
          <Route path="/propsc5" element={<PropsC5 />} />
          <Route path="/BgChange" element={<BgChange />} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
