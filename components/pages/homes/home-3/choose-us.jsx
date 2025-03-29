import Link from "next/link";
import image1 from "../../../../public/assets/img/why-choose-us/why-chose-us-two.png";

const ChooseUsThree = () => {
    return (
        <>
        <div className="why-choose-us__two section-padding">
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-xl-6 col-lg-6 col-md-9">
                        <div className="why-choose-us__two-content">
                            <span className="subtitle-one">Pourquoi Nous Choisir</span>
                            <h2>Solutions Énergétiques Innovantes et <span className="highlighted-two">Durables</span></h2>
                            <p>HAT se distingue par son expertise dans la gestion des énergies renouvelables et des technologies associées. Nous offrons des solutions sur mesure pour répondre aux besoins énergétiques spécifiques de chaque client, en combinant innovation, performance et respect de l'environnement.</p>
                            <div className="why-choose-us__two-content-service">
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Expertise en Énergies Renouvelables</span>
                                </div>
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Maintenance et Gestion des Équipements</span>
                                </div>
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Consulting en Stratégies Énergétiques</span>
                                </div>
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Gestion Intelligente de l’Énergie</span>
                                </div>
                                <div className="service">
                                    <i className="fas fa-check-circle"></i>
                                    <span>Solutions Durables pour le Traitement des Déchets</span>
                                </div>
                            </div>
                            <Link href="/services" className="btn-one">En savoir plus
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="why-choose-us__two-image">
                            <div className="why-choose-us__two-image-wrapper">
                                <img src={image1.src} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ChooseUsThree;