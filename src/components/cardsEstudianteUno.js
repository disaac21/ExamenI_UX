import React from "react";
// import {Link} from "react-router-dom";

const CardsEstudianteUno = () => {
    return (
        <div class="card-group" style={{ height: "auto", margin: 10, padding: 10 }} >
            <div class="card">
                <div class="card-header">
                Comprender a tus Compañeros
                </div>
                <div class="card-body">
                    <p class="card-text">Antes de comenzar a diseñar, primero necesitas entender realmente a tus compañeros estudiantes. ¿Qué desafíos enfrentan al estudiar? ¿Cómo prefieren aprender? Esto implica hablar con ellos, realizar encuestas y observar cómo estudian.</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                Crear Prototipos y Probar
                </div>
                <div class="card-body">
                    <p class="card-text">En lugar de diseñar todo de una vez, crearías versiones experimentales llamadas prototipos. Luego, estos prototipos se probarían con otros estudiantes para ver si son fáciles de usar y si realmente ayudan en el proceso de estudio.</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                Hacerlo Juntos
                </div>
                <div class="card-body">
                    <p class="card-text">No estás solo en este proceso. Puedes involucrar a tus compañeros en el diseño. ¿Qué funciones les gustaría ver? ¿Cómo debería lucir la interfaz para ser más amigable? La colaboración asegura que lo que estás diseñando sea realmente útil para ellos.</p>
                
                </div>
            </div>
        </div>
    );
};

export default CardsEstudianteUno;