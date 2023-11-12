import React from "react";
// import {Link} from "react-router-dom";

const CardsEstudiante = () => {
    return (
        <div class="card-group" style={{ height: "auto", margin: 10, padding: 10 }} >
            <div class="card">
                <div class="card-header">
                Escuchar Siempre
                </div>
                <div class="card-body">
                    <p class="card-text">El diseño no termina cuando se lanza la aplicación. Debes seguir escuchando a tus compañeros. ¿Hay algo que no les guste? ¿Algo que puedas mejorar? La retroalimentación constante es clave.</p>
                
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                Hacerlo Bonito y Fácil
                </div>
                <div class="card-body">
                    <p class="card-text">No solo se trata de que la aplicación funcione bien. También quieres que sea atractiva y fácil de usar. Esto hace que estudiar sea más agradable y efectivo.</p>
                
                </div>
            </div>
        </div>
    );
};

export default CardsEstudiante;