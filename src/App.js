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
import UseState2 from "./components/UseState2";
import UseState3 from "./components/UseState3";
import UseEffect1 from "./components/UseEffect1";
import UseContext1 from "./components/UseContext1";
import UseContext2 from "./components/UseContext2";
import UseContext3 from "./components/UseContext3";
import UseContext4 from "./components/UseContext4";
import UseContext5 from "./components/UseContext5";
import UseRef1 from "./components/UseRef1";
import UseRef2 from "./components/UseRef2";
import UseRef3 from "./components/UseRef3";
import UseMemo1 from "./components/UseMemo1";
import UseMemo2 from "./components/UseMemo2";
import UseMemo3 from "./components/UseMemo3";
import UseCallBack1 from "./components/UseCallBack1";
import UseCallBack2 from "./components/UseCallBack2";
import UseReducer1 from "./components/UseReducer1";
import UseReducer2 from "./components/UseReducer2";
import UseReducer3 from "./components/UseReducer3";
import UseReducer4 from "./components/UseReducer4";
import UseReducer5 from "./components/UseReducer5";
import UseReducer6 from "./components/UseReducer6";
import CustomeHooks from "./components/CustomeHooks";
import CustomeHooks2 from "./components/CustomeHooks2";
import CustomeHooks3 from "./components/CustomeHooks3";
import LocationDisplay from "./components/LocationDisplay";
import PageTracker from "./components/PageTracker";
import { CounterProvider } from "./components/CounterContext";
import PropsParent from "./components/PropsParent";
import PlainForm from "./components/PlainForm";
import PlainFormCode from "./components/PlainFormCode";
import DesignedForm from "./components/DesignedForm";
import DesignedFormCode from "./components/DesignedFormCode";
import UseRef4 from "./components/UseRef4";

function App() {
  return (
    <>

      <CounterProvider>
        <Router>
          <LocationDisplay />
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
              <Route path="/UseState2" element={<UseState2 />} />
              <Route path="/UseState3" element={<UseState3 />} />
              <Route path="/UseEffect1" element={<UseEffect1 />} />
              <Route path="/useContext1" element={<UseContext1 />} />
              <Route path="/useContext2" element={<UseContext2 />} />
              <Route path="/useContext3" element={<UseContext3 />} />
              <Route path="/useContext4" element={<UseContext4 />} />
              <Route path="/useContext5" element={<UseContext5 />} />
              <Route path="/useRef1" element={<UseRef1 />} />
              <Route path="/useRef2" element={<UseRef2 />} />
              <Route path="/useRef3" element={<UseRef3 />} />
              <Route path="/useRef4" element={<UseRef4 />} />
              <Route path="/useMemo1" element={<UseMemo1 />} />
              <Route path="/useMemo2" element={<UseMemo2 />} />
              <Route path="/useMemo3" element={<UseMemo3 />} />
              <Route path="/useCallBack1" element={<UseCallBack1 />} />
              <Route path="/useCallBack2" element={<UseCallBack2 />} />
              <Route path="/useReducer1" element={<UseReducer1 />} />
              <Route path="/useReducer2" element={<UseReducer2 />} />
              <Route path="/useReducer3" element={<UseReducer3 />} />
              <Route path="/useReducer4" element={<UseReducer4 />} />
              <Route path="/useReducer5" element={<UseReducer5 />} />
              <Route path="/useReducer6" element={<UseReducer6 />} />
              <Route path="/customeHooks" element={<CustomeHooks />} />
              <Route path="/customeHooks2" element={<CustomeHooks2 />} />
              <Route path="/customeHooks3" element={<CustomeHooks3 />} />
              <Route path="/propsParent" element={<PropsParent />} />
              <Route path="/plainform" element={<PlainForm />} />
              <Route path="/plainformcode" element={<PlainFormCode />} />
              <Route path="/designedform" element={<DesignedForm />} />
              <Route path="/designedformcode" element={<DesignedFormCode />} />
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
