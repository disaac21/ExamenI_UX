import React from "react";
// import {Link} from "react-router-dom";

const CardsPadreUno = () => {
    return (
        <div class="card-group" style={{ height: "auto", margin: 10, padding: 10 }} >
            <div class="card">
                <div class="card-header">
                Pensando en Sus Hijos
                </div>
                <div class="card-body">
                    <p class="card-text">Antes de que se diseñe la aplicación, se realiza una investigación profunda sobre las necesidades y preferencias de los niños. ¿Cómo aprenden mejor? ¿Qué les mantiene interesados? Esto garantiza que la aplicación sea realmente útil para ellos.</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                Participación Activa
                </div>
                <div class="card-body">
                    <p class="card-text">Ustedes, como padres, pueden participar en el proceso de diseño. ¿Qué aspectos educativos les gustaría que se cubrieran? ¿Cómo pueden asegurarse de que la aplicación sea segura? La participación activa ayuda a personalizar la aplicación según sus expectativas.</p>
                </div>
            </div>

            <div class="card">
                <div class="card-header">
                Probando Juntos
                </div>
                <div class="card-body">
                    <p class="card-text">Antes de lanzar la aplicación, se realizan pruebas con niños reales para ver si la encuentran divertida y educativa. Esta fase de prueba asegura que la aplicación cumpla con las expectativas y sea segura para su uso.</p>
                
                </div>
            </div>
        </div>
    );
};

export default CardsPadreUno;