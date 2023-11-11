import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes

import CardGroup from "./components/cards";
import paginaPadres from "./components/pagina-padre";
import paginaEstudiante from "./components/pagina-estudiante";
import Navbar from "./components/navbar";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes> {/* Wrap Routes around your Route components */}
                    <Route path="/" element={<CardGroup />} /> {/* Use element prop instead of component */}
                    <Route path="/pagina-padre" component={paginaPadres} />
                    <Route path="/pagina-estudiante" component={paginaEstudiante} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
