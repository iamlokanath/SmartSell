// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import HomePage from "./pages/HomePage";
import WhySell from "./components/WhySell";
import Features from "./components/Features";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/landing" element = {<LandingPage/>}/>
          <Route path="/whysell" element = {<WhySell/>}/>
          <Route path="/features" element = {<Features/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
