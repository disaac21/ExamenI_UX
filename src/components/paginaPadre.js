import React from "react";
import Navbar from "./navbar";
import Carousel from "./carouselPadres";
import CardsPadreUno from "./cardsPadreUno";
import CardsPadreDos from "./cardsPadreDos";

const PaginaPadres = () => {
    return (
        <div>
            <h1 style={{padding: "10px"}}>Soy Padre</h1>
            <br />
            <p style={{ fontSize: "150%", padding: "10px"}}>
                El Diseño Centrado en el Usuario es un enfoque en el diseño de productos o servicios que beneficia a sus hijos y a usted como usuarios. 
                Imaginemos que están desarrollando una aplicación educativa para niños.
            </p>
            <Carousel />
            <CardsPadreUno />
            <CardsPadreDos />
        </div>
    )
};

export default PaginaPadres;