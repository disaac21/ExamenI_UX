import React from "react";
// import {Link} from "react-router-dom";

const CardsEstudianteUno = () => {
    return (
        <div class="card-group" style={{ height: "auto", margin: 10, padding: 10 }} >
            <div class="card">
                <div class="card-header">
                    1. Supuestos y Requerimientos
                </div>
                <div class="card-body">
                    <p class="card-text">Se realiza la primera arquitectura del producto a partir de entrevistas con el sitio.</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    2. Análisis Referencial o Benchmarking
                </div>
                <div class="card-body">
                    <p class="card-text">Se investigan proyectos con patrones similares que hayan funcionado para satisfacer las necesidades del usuario target.</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    3. Análisis de Usuarios
                </div>
                <div class="card-body">
                    <p class="card-text"> Estudiar las características de nuestro usuario target para comprender mejor las necesidades. Entender como la edad, imagen o intereses personales afectan sus necesidades. </p>

                </div>
            </div>
        </div>
    );
};

export default CardsEstudianteUno;