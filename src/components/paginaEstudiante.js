import React from "react";
import Navbar from "./navbar";
import Carousel from "./CarouselStudent";
import CardsEstudianteUno from "./cardsEstudianteUno";
import CardsEstudianteDos from "./cardsEstudianteDos";


const PaginaEstudiante = () => {
    return (
        <div>
            <h1 style={{padding: "10px"}}>Soy Estudiante</h1>
            <br />
            <p style={{ fontSize: "150%", padding: "10px"}}>
                El Diseño Centrado en el Usuario, también conocido como DCU,  es una metodología de diseño que coloca a las personas que van a usar un producto,
                servicio o aplicación en el centro de todo el proceso. Imagina que estás diseñando una aplicación para ayudar a los
                estudiantes a estudiar de manera más efectiva.
            </p>
            <Carousel />
            <h2><br />Proceso del Diseño Centrado en el Usuario</h2>
            <CardsEstudianteUno />
            <h2><br />El Diseño Atómico</h2>
            <CardsEstudianteDos />
        </div>
    );
};

export default PaginaEstudiante;