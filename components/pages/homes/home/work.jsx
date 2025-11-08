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
                            <h2>Solutions digitales innovantes et performantes</h2>
                        </div>
                    </div>
                    <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
                        <div className="work-process-area__one-content-right">
                            <p>Nous développons pour vous des sites web, applications mobiles, identités visuelles, solutions IA et stratégies marketing digital pour optimiser l'expérience utilisateur et maximiser votre visibilité en ligne.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center gy-4">
                    <div className="col-xl-6">
                        <div className="work-process-area__one-single-work">
                            <span>01</span>
                            <div className="work-process-area__one-single-work-content">
                                <h4>Analyse approfondie de vos besoins</h4>
                                <p>Nous analysons en détail vos besoins, vos objectifs et votre secteur d'activité pour concevoir une solution technologique parfaitement adaptée à votre contexte.</p>
                            </div>
                        </div>
                        <div className="work-process-area__one-single-work">
                            <span>02</span>
                            <div className="work-process-area__one-single-work-content">
                                <h4>Développement de solutions sur mesure</h4>
                                <p>Nous créons des solutions digitales personnalisées, conçues avec soin pour répondre précisément à vos objectifs et vous offrir un avantage concurrentiel.</p>
                            </div>
                        </div>
                        <div className="work-process-area__one-single-work">
                            <span>03</span>
                            <div className="work-process-area__one-single-work-content">
                                <h4>Déploiement et accompagnement continu</h4>
                                <p>Nous assurons le déploiement de vos solutions avec un accompagnement personnalisé et un support continu pour garantir leur performance optimale.</p>
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