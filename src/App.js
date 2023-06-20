import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/header/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import Login from "./components/User/Login";
 
import "./index.css";
import Signup from "./components/User/Signup";
import AllPokemon from "./components/AllPokemon";
 
 

function App() {
  

  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
      
        <Route exact path="/signup" element={<Signup />} />
       
        <Route exact path="/pokemon" element={<AllPokemon />} />
      </Routes>
      <Footer />
      
    </Router>
  );
}

export default App;
