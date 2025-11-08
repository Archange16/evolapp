import Link from "next/link";

const WorkProcess = () => {
    return (
        <div className="work-process__two section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-6 col-md-7">
                        <div className="work-process__two-title">
                            <span className="subtitle-one">Notre Processus</span>
                            <h2>Notre Méthodologie de Travail</h2>
                        </div>
                    </div>
                </div>
                <div className="work-process__two-cards">
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>01.</span>
                                <h4>Analyse & Conception</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="flaticon-laptop-1"></i>
                            </div>
                        </div>
                        <p>Nous analysons vos besoins et concevons une solution sur mesure adaptée à vos objectifs et à votre secteur d'activité.</p>
                        <Link href="/services" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
                        <div className="card-arrow-wrapper">
                            <div className="card-arrow-ingredient">
                                <div className="arrow-body"></div>
                                <div className="arrow-head"></div>
                            </div>
                        </div>
                    </div>
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>02.</span>
                                <h4>Développement & Design</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="flaticon-iphone-1"></i>
                            </div>
                        </div>
                        <p>Nous développons votre solution avec les dernières technologies, en alliant performance, design moderne et expérience utilisateur optimale.</p>
                        <Link href="/services" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
                        <div className="card-arrow-wrapper">
                            <div className="card-arrow-ingredient">
                                <div className="arrow-body"></div>
                                <div className="arrow-head"></div>
                            </div>
                        </div>
                    </div>
                    <div className="work-process__two-cards-single">
                        <div className="work-process__two-cards-single-title">
                            <div className="work-process__two-cards-single-title-left">
                                <span>03.</span>
                                <h4>Lancement & Accompagnement</h4>
                            </div>
                            <div className="work-process__two-cards-single-title-right">
                                <i className="flaticon-mobile-data"></i>
                            </div>
                        </div>
                        <p>Nous assurons le déploiement de votre solution, la formation de vos équipes et un accompagnement continu pour garantir votre succès.</p>
                        <Link href="/services" className="btn-three">En savoir plus<i className="fas fa-chevron-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;
