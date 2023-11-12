import React from "react";
// import {Link} from "react-router-dom";

const CardsEstudiante = () => {
    return (
        <div class="card-group" style={{ height: "auto", margin: 10, padding: 10 }} >
            <div class="card">
                <div class="card-header">
                    Importancia del Diseño Atómico
                </div>
                <div class="card-body">
                    <p class="card-text">Un diseño atómico es crucial para que nuestro código de nuestra aplicación pueda tener buena visibilidad, escalabilidad y flexibilidad. El diseño atómico,
                        creado por Brad Frost y Dave Olsen, es una metodología de diseño que implica cinco bloques de diseño fundamentales, que al juntarse, vuelven el código más fácil de leer y
                        modular. También, permite facilitar las pruebas y mejorar la calidad en general de nuestro programa.
                    </p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                    Elementos y Estructura del Diseño Atómico
                </div>
                <div class="card-body">
                    <p class="card-text"> <b>Atomos:</b> Componentes más básicos, pueden ser botones, inputs, formas, etc. <br />
                        <b>Moléculas:</b> Combinación de átomos para construir algo funcional. <br />
                        <b>Organismos:</b> Combinación de moléculas para crear una sección del interfaz. <br />
                        <b>Plantillas:</b> Grupos de organismos que forman una página. <br />
                        <b>Páginas:</b> Un sistema donde podemos ver muchas plantillas. Esta es nuestra aplicación como producto final.</p>

                </div>
            </div>
        </div>
    );
};

export default CardsEstudiante;