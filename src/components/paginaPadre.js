import React from "react";
import Navbar from "./navbar";
import Carousel from "./carousel";

const PaginaPadres = () => {
    return (
        <div>
            <Navbar />
            <h1>Soy Padre</h1>
            <br />
            <p style={{ fontSize: "150%" }}>
                El Diseño Centrado en el Usuario es un enfoque en el diseño de productos o servicios que beneficia a sus hijos y a usted como usuarios. 
                Imaginemos que están desarrollando una aplicación educativa para niños.
            </p>
            <Carousel />
        </div>
    )
};

export default PaginaPadres;