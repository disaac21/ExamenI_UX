import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardGroup from "./components/cards";
import PaginaPadres from "./components/paginaPadre";
import PaginaEstudiante from "./components/paginaEstudiante";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<CardGroup />} />
          <Route path="paginaPadre" element={<PaginaPadres />} />
          <Route path="paginaEstudiante" element={<PaginaEstudiante />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

