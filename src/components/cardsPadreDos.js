import React from "react";
// import {Link} from "react-router-dom";

const CardsPadreDos = () => {
    return (
        <div class="card-group" style={{ height: "auto", margin: 10, padding: 10 }} >
            <div class="card">
                <div class="card-header">
                Feedback Constante
                </div>
                <div class="card-body">
                    <p class="card-text">El diseño no se detiene después del lanzamiento. Se establecen canales para que ustedes y sus hijos proporcionen comentarios continuos. ¿Hay algo que les preocupe? ¿Hay funciones adicionales que podrían ser útiles?</p>
                
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                Diseño Atractivo y Seguro
                </div>
                <div class="card-body">
                    <p class="card-text">Además de ser educativa, la aplicación se diseña para ser visualmente atractiva y segura para sus hijos. La estética y la seguridad son elementos clave en el proceso de diseño.</p>
                
                </div>
            </div>
        </div>
    );
};

export default CardsPadreDos;