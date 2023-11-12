const CarouselStudent = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide" 
            style={{ maxWidth: "97%", margin: "auto" }}>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="dark-overlay"></div>
                    <img src="https://dt.pompaction.com/www/images/slides/Mobilisation%20de%20chantier%20-%20%C3%89ch%C3%A9anciers/Wpq7SuIMSvGeID9DIchu_Respect-des-echeanciers.jpg" class="d-block w-100" alt="y la fotoooo" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Crear Prototipos y Probar</h5>
                        <p>En lugar de diseñar todo de una vez, crearías versiones experimentales llamadas prototipos. Luego, estos prototipos se probarían con otros estudiantes para ver si son fáciles de usar y si realmente ayudan en el proceso de estudio.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="dark-overlay"></div>

                    <img src="https://www.gulfcmf.org/files/cache/240cc8235267e1a4fc0dced62f15f709_f18.jpg" class="d-block w-100" alt="y la fotooo" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Comprender a tus Compañeros</h5>
                        <p>Antes de comenzar a diseñar, primero necesitas entender realmente a tus compañeros estudiantes. ¿Qué desafíos enfrentan al estudiar? ¿Cómo prefieren aprender? Esto implica hablar con ellos, realizar encuestas y observar cómo estudian.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="dark-overlay"></div>
                    <img src="https://www.pfsoftware.ca/images/slides/Consulting.jpg" class="d-block w-100" alt="y la fotoooo" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Hacerlo Juntos</h5>
                        <p>No estás solo en este proceso. Puedes involucrar a tus compañeros en el diseño. ¿Qué funciones les gustaría ver? ¿Cómo debería lucir la interfaz para ser más amigable? La colaboración asegura que lo que estás diseñando sea realmente útil para ellos.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="dark-overlay"></div>
                    <img src="https://www.sharpnecdisplays.eu/p/download/v/3888b3c59499222703fb74ebb00c6707/cp/Internet/Shared/SiteContentNew/Landingpages/PublicWeb/NoNews/LEDvsLCDvsLaserProjection/Images/LEDvsLCDvsLaserProjection-9.jpg" class="d-block w-100" alt="y la fotoooo" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Escuchar Siempre</h5>
                        <p>El diseño no termina cuando se lanza la aplicación. Debes seguir escuchando a tus compañeros. ¿Hay algo que no les guste? ¿Algo que puedas mejorar? La retroalimentación constante es clave.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="dark-overlay"></div>
                    <img src="https://www.agence-churchill.fr/wp-content/uploads/2018/11/launch-1020x450.jpg" class="d-block w-100" alt="y la fotoooo" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Motivación y Engagement</h5>
                        <p>El DCU busca no solo facilitar el aprendizaje, sino también hacerlo atractivo. Se incorporan elementos que mantengan la motivación y el compromiso, aprovechando la psicología del usuario para fomentar un ambiente propicio para el aprendizaje.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default CarouselStudent;
