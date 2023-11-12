import Padre from "./imagenes/man-light-skin-tone.png";
import Estudiante from "./imagenes/man-technologist.png";

import React from "react";
// import {Link} from "react-router-dom";

const CardGroup = () => {
    // return (
    //     <div class="card-group" style={{ height: "auto", margin: 10, padding: 10 }} >

    //         <div class="card border-primary mb-3" style={{ display: "flex", flexDirection: "column", alignItems: "center", }} >
    //             <img src={Estudiante} class="card-img-top" alt="..." style={{ height: "auto", width: "auto", alignItems: "center" }} />
    //             <div class="card-body">
    //                 <h5 class="card-title">Estudiante</h5>
    //                 <p class="card-text">
    //                     Descubre el diseño centrado en el usuario: una forma de diseño que prioriza tu experiencia personal. Para ti,
    //                     estudiante, esto significa herramientas intuitivas y eficientes que se adaptan a tus necesidades académicas.
    //                     Experimenta un mundo donde cada interacción está diseñada para simplificar tu vida y mejorar tu aprendizaje.
    //                     ¡Bienvenido a un enfoque diseñado para potenciar tu éxito estudiantil!
    //                 </p>
    //                 <a href="paginaEstudiante" class="btn btn-primary">
    //                     Soy Estudiante
    //                 </a>
    //             </div>
    //         </div>

    //         <div class="card border-primary mb-3" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
    //             <img src={Padre} class="card-img-top" alt="..." style={{ height: "auto", width: "auto", alignItems: "center" }} />
    //             <div class="card-body">
    //                 <h5 class="card-title">Padre</h5>
    //                 <p class="card-text">
    //                     Explora el diseño centrado en el usuario: una perspectiva de diseño que pone a tu familia en el centro. Desde
    //                     aplicaciones intuitivas hasta interfaces adaptadas a todas las edades, esta filosofía busca simplificar y
    //                     mejorar la vida cotidiana. Descubre un mundo digital diseñado pensando en ti y en los tuyos, haciendo que cada
    //                     interacción sea más fácil y significativa. ¡Bienvenido a una experiencia donde la tecnología trabaja para hacer
    //                     tu vida más simple y agradable para todos!
    //                 </p>
    //                 <a href="paginaPadre" class="btn btn-primary">
    //                     Soy Padre
    //                 </a>
    //             </div>
    //         </div>

    //     </div>
    // );

    return (
        <div className="container" style={{ height: "auto", paddingTop: 50 }} >
            <div className="row">

                {/* Left side */}
                <div className="col-md-4">
                    <div className="card">
                        <h2 class="card-title"> <br /> Diseño Centrado en el Usuario </h2>
                        <p class="card-text">
                            Nos adentramos en el universo del Diseño Centrado en el Usuario, también conocido como el DCU. Aquí, la
                            experiencia del usuario es el punto de encuentro de todo lo que exploramos.
                            <br /> <br />
                            El Diseño Centrado en el Usuario es una
                            filosofía de diseño que prioriza las necesidades, preferencias y experiencias de los usuarios en la creación de
                            productos, servicios y entornos.
                            <br /> <br />
                            Se trata de crear herramientas y entornos que no solo faciliten el aprendizaje, sino que también se ajusten de 
                            manera efectiva a sus necesidades individuales, fomentando así una experiencia educativa más enriquecedora.
                            <br /> <br />
                            Nuestro objetivo es ser tu fuente confiable de información sobre el Diseño Centrado en el Usuario. Explora, aprende
                            y sumérgete en un mundo donde la experiencia del usuario es la prioridad. <br />
                        </p>
                    </div>
                </div>

                {/* Right side */}
                <div className="col-md-8">
                    <div className="row">
                        {/* Top card on the right */}
                        <div class="card border-primary mb-3" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                            <div class="row g-0">
                                <div class="col-md-2">
                                    <img src={Estudiante} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-10">
                                    <div class="card-body">
                                        <h5 class="card-title">Estudiante</h5>
                                        <p class="card-text">
                                            Descubre el diseño centrado en el usuario: una forma de diseño que prioriza tu experiencia personal. Para ti,
                                            estudiante, esto significa herramientas intuitivas y eficientes que se adaptan a tus necesidades académicas.
                                            Experimenta un mundo donde cada interacción está diseñada para simplificar tu vida y mejorar tu aprendizaje.
                                            ¡Bienvenido a un enfoque diseñado para potenciar tu éxito estudiantil!
                                        </p>
                                        <a href="paginaEstudiante" class="btn btn-primary">
                                            Soy Estudiante
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom card on the right */}
                        <div class="card border-primary mb-3" style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                            <div class="row g-0">
                                <div class="col-md-2">
                                    <img src={Padre} class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-10">
                                    <div class="card-body">
                                        <h5 class="card-title">Padre</h5>
                                        <p class="card-text">
                                            Explora el diseño centrado en el usuario: una perspectiva de diseño que pone a tu familia en el centro. Desde
                                            aplicaciones intuitivas hasta interfaces adaptadas a todas las edades, esta filosofía busca simplificar y
                                            mejorar la vida cotidiana. Descubre un mundo digital diseñado pensando en ti y en los tuyos, haciendo que cada
                                            interacción sea más fácil y significativa. ¡Bienvenido a una experiencia donde la tecnología trabaja para hacer
                                            tu vida más simple y agradable para todos!
                                        </p>
                                        <a href="paginaPadre" class="btn btn-primary"> Soy Padre </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardGroup;
