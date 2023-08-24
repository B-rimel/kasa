import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Fiche from "./pages/Fiche_Logement/Fiche.jsx";
import Error from "./pages/Error/Error.jsx";
import Home from "./pages/Home/Home.jsx";
import APropos from "./pages/A_Propos/APropos.jsx";

import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<APropos />} />
        <Route path="/logement/:id" element={<Fiche />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
