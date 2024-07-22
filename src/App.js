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
import UseState1 from "./components/UseState1";
import UseEffect1 from "./components/UseEffect1";
import UseContext1 from "./components/UseContext1";
import UseContext2 from "./components/UseContext2";
import UseContext3 from "./components/UseContext3";
import UseContext4 from "./components/UseContext4";
import UseContext5 from "./components/UseContext5";
import { CounterProvider } from "./components/CounterContext";
import PageTracker from "./components/PageTracker";

function App() {
  return (
    <>
      <CounterProvider>
        <Router>
          <Navbar />
          <div className="container">
            <PageTracker />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/propsc1" element={<PropsC1 />} />
              <Route path="/propsc2" element={<PropsC2 />} />
              <Route path="/propsc3" element={<PropsC3 />} />
              <Route path="/propsc4" element={<PropsC4 />} />
              <Route path="/propsc5" element={<PropsC5 />} />
              <Route path="/BgChange" element={<BgChange />} />
              <Route path="/UseState1" element={<UseState1 />} />
              <Route path="/UseEffect1" element={<UseEffect1 />} />
              <Route path="/useContext1" element={<UseContext1 />} />
              <Route path="/useContext2" element={<UseContext2 />} />
              <Route path="/useContext3" element={<UseContext3 />} />
              <Route path="/useContext4" element={<UseContext4 />} />
              <Route path="/useContext5" element={<UseContext5 />} />
            </Routes>
            <PageTracker />
          </div>
          <Footer />
        </Router>
      </CounterProvider>
    </>
  );
}

export default App;
