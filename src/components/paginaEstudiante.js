import React from "react";
import Navbar from "./navbar";
import "./estilos.css";
import Contenido from "./contentEstudiante";

const paginaEstudiante = () => {
    return (
        <div>
            <Navbar />
            <Contenido />
        </div>
    );
};

export default paginaEstudiante;
