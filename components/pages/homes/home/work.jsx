import workBg from "../../../../public/assets/img/work-process/work-process-bg.png";
import image1 from "../../../../public/assets/img/work-process/work-process-1.png";
import image2 from "../../../../public/assets/img/work-process/work-process-2.png";
import Count from "../../common/count";

const WorkArea = () => {
    return (
        <div className="work-process-area__one section-padding" style={{backgroundImage: `url(${workBg.src})`}}>
            <div className="container">
                <div className="row align-items-end work-process-area__one-title">
                    <div className="col-xl-7 col-lg-7">
                        <div className="work-process-area__one-content-left">
                            <span className="subtitle-one">Processus de travail</span>
                            <h2>Informatique durable et responsable</h2>
                        </div>
                    </div>
                    <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
                        <div className="work-process-area__one-content-right">
                            <p>On développe pour vous un site web, une application mobile, un logo, avec IA et marketing digital pour optimiser l’expérience utilisateur et la visibilité en ligne.
</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center gy-4">
                    <div className="col-xl-6">
                        <div className="work-process-area__one-single-work">
                            <span>01</span>
                            <div className="work-process-area__one-single-work-content">
                                <h4>Évaluer les besoins avec précision</h4>
                                <p>Commencez par comprendre de manière exhaustive les besoins de votre entreprise pour garantir une adéquation parfaite aux solutions technologiques.</p>
                            </div>
                        </div>
                        <div className="work-process-area__one-single-work">
                            <span>02</span>
                            <div className="work-process-area__one-single-work-content">
                                <h4>Développer des solutions personnalisées</h4>
                                <p>Participez à la création de logiciels sur mesure conçus méticuleusement pour s'aligner sur vos objectifs spécifiques.</p>
                            </div>
                        </div>
                        <div className="work-process-area__one-single-work">
                            <span>03</span>
                            <div className="work-process-area__one-single-work-content">
                                <h4>Mise en œuvre et support</h4>
                                <p>Intégrer de manière transparente les nouveaux systèmes dans le cadre avec un support continu pour une optimisation continue.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="work-process-area__one-right-img">
                            <img src={image1.src} alt="image" />
                        </div>
                        <div className="work-process-area__one-right-counter-img">
                            <div className="img-counter">
                                <div className="counter-only">
                                    <h2 className="counter"><Count number={20}/></h2>
                                    <h2>+</h2>
                                </div>
                                <span>années d'expériences</span>
                            </div>
                            <img src={image2.src} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkArea;