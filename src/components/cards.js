import Padre from "./imagenes/man-light-skin-tone.png";
import Estudiante from "./imagenes/man-technologist.png";

const CardGroup = () => {
    return (
        <div
            class="card-group"
            style={{height: "95vh", margin: 20, padding: 20}}
        >
            <div
                class="card border-primary mb-3"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <img
                    src={Estudiante}
                    class="card-img-top"
                    alt="..."
                    style={{
                        height: "auto",
                        width: "auto",
                        alignItems: "center",
                    }}
                />
                <div class="card-body">
                    <h5 class="card-title">Estudiante</h5>
                    <p class="card-text">
                        Descubre el diseño centrado en el usuario: una forma de
                        diseño que prioriza tu experiencia personal. Para ti,
                        estudiante, esto significa herramientas intuitivas y
                        eficientes que se adaptan a tus necesidades académicas.
                        Experimenta un mundo donde cada interacción está
                        diseñada para simplificar tu vida y mejorar tu
                        aprendizaje. ¡Bienvenido a un enfoque diseñado para
                        potenciar tu éxito estudiantil!
                    </p>
                    <a href="#" class="btn btn-primary">
                        Soy Estudiante
                    </a>
                </div>
            </div>
            <div
                class="card border-primary mb-3"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <img
                    src={Padre}
                    class="card-img-top"
                    alt="..."
                    style={{
                        height: "auto",
                        width: "auto",
                        alignItems: "center",
                    }}
                />
                <div class="card-body">
                    <h5 class="card-title">Padre</h5>
                    <p class="card-text">
                        Explora el diseño centrado en el usuario: una
                        perspectiva de diseño que pone a tu familia en el
                        centro. Desde aplicaciones intuitivas hasta interfaces
                        adaptadas a todas las edades, esta filosofía busca
                        simplificar y mejorar la vida cotidiana. Descubre un
                        mundo digital diseñado pensando en ti y en los tuyos,
                        haciendo que cada interacción sea más fácil y
                        significativa. ¡Bienvenido a una experiencia donde la
                        tecnología trabaja para hacer tu vida más simple y
                        agradable para todos!
                    </p>
                    <a href="#" class="btn btn-primary">
                        Soy Padre
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardGroup;
