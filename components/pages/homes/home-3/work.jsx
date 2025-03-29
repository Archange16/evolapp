import React from 'react';
import workBg from "../../../../public/assets/img/shape/workprocess-four-shape.png";
import Link from 'next/link';

const Work = () => {
    return (
        <>
            <div className="work-process__four" style={{backgroundImage: `url(${workBg.src})`}}>
                <div className="container">
                    <div className="row align-items-center gy-5">
                        <div className="col-xl-6 col-lg-7">
                            <div className="work-process__four-title">
                                <span className="subtitle-one">Processus de travail</span>
                                <h2>Notre Processus de Travail chez HAT</h2>
                                <p>Découvrez comment chaque étape de notre approche garantit l’efficacité et la réussite de nos projets.</p>
                            </div>
                            <Link href="/contact" className="btn-one">Commencer
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                            <div className="call-us-box">
                                <div className="call-us-box-icon">
                                    <i className="flaticon-telephone-call"></i>
                                </div>
                                <div className="call-us-box-right">
                                    <span>APPELEZ-NOUS</span>
                                    <Link href="tel:+02189340447">+212 89 340 447</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="row gy-5">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
                                    <div className="work-process__four-single-item">
                                        <i className="fas fa-lightbulb"></i>
                                        <h3 className="work-process__four-single-item-number">01</h3>
                                        <h4>Conception de Solutions</h4>
                                        <p>Nous développons des solutions innovantes adaptées aux besoins spécifiques de chaque projet.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
                                    <div className="work-process__four-single-item">
                                        <i className="fas fa-palette"></i>
                                        <h3 className="work-process__four-single-item-number">02</h3>
                                        <h4>Planification et Design</h4>
                                        <p>Nous créons des plans détaillés en respectant les exigences techniques et environnementales.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
                                    <div className="work-process__four-single-item">
                                        <i className="fas fa-cogs"></i>
                                        <h3 className="work-process__four-single-item-number">03</h3>
                                        <h4>Mise en Œuvre</h4>
                                        <p>Nos équipes qualifiées réalisent les installations avec un suivi rigoureux pour garantir leur qualité.</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-8">
                                    <div className="work-process__four-single-item">
                                        <i className="fas fa-check-circle"></i>
                                        <h3 className="work-process__four-single-item-number">04</h3>
                                        <h4>Contrôle et Optimisation</h4>
                                        <p>Nous assurons la performance et la durabilité des installations grâce à des tests et un suivi continu.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;