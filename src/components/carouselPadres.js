const CarouselPadres = () => {
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
                        <h5>Diseño Colaborativo</h5>
                        <p>Involucra a los usuarios, clientes y otros stakeholders en el proceso de diseño. La colaboración permite una comprensión más profunda de las expectativas y necesidades de los usuarios.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="dark-overlay"></div>

                    <img src="https://www.gulfcmf.org/files/cache/240cc8235267e1a4fc0dced62f15f709_f18.jpg" class="d-block w-100" alt="y la fotooo" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Accesibilidad y Usabilidad</h5>
                        <p>Prioriza la usabilidad del producto o servicio. Esto implica hacer que la interfaz sea fácil de entender, navegar y utilizar, así como minimizar la posibilidad de errores por parte del usuario.
                            <br />
                            Esto garantiza que el producto o servicio pueda ser utilizado por la mayor cantidad posible de personas.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="dark-overlay"></div>
                    <img src="https://www.pfsoftware.ca/images/slides/Consulting.jpg" class="d-block w-100" alt="y la fotoooo" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Diversidad Inclusiva</h5>
                        <p>Reconoce y aborda la diversidad de los usuarios, incluidos factores como la edad, género, habilidades y antecedentes culturales.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="dark-overlay"></div>
                    <img src="https://www.sharpnecdisplays.eu/p/download/v/3888b3c59499222703fb74ebb00c6707/cp/Internet/Shared/SiteContentNew/Landingpages/PublicWeb/NoNews/LEDvsLCDvsLaserProjection/Images/LEDvsLCDvsLaserProjection-9.jpg" class="d-block w-100" alt="y la fotoooo" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Flexibilidad y Adaptabilidad</h5>
                        <p>Diseña productos y servicios que sean flexibles y se adapten a las diversas formas en que los usuarios pueden interactuar o utilizarlos.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="dark-overlay"></div>
                    <img src="https://www.agence-churchill.fr/wp-content/uploads/2018/11/launch-1020x450.jpg" class="d-block w-100" alt="y la fotoooo" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Estética Atractiva</h5>
                        <p>Si bien la funcionalidad es clave, también se valora la estética atractiva que contribuye a una experiencia de usuario más placentera.</p>
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

export default CarouselPadres;
