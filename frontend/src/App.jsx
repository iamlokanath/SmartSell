// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Sell from "./pages/Sell";
// import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import HomePage from "./pages/HomePage";
import WhySell from "./components/WhySell";
import Features from "./components/Features";
import Sell from "./pages/Sell";
import PricePrediction from "./pages/PricePrediction";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/sell" element={<Sell/>}/>
          <Route path="/prediction" element={<PricePrediction/>}/>
          
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/landing" element = {<LandingPage/>}/>
          <Route path="/whysell" element = {<WhySell/>}/>
          <Route path="/features" element = {<Features/>}/>
        </Routes>
      </BrowserRouter>

      {/* <CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <Sell />
        </Paper>
      </Container> */}
    </>
  );
}

export default App;
