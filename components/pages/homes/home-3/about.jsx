import image1 from "../../../../public/assets/img/about/about-three.png";
import image2 from "../../../../public/assets/img/about/about-three-2.png";
import image3 from "../../../../public/assets/img/about/about-three-3.png";
import Count from "../../common/count";
import { useI18n } from "@/locales/client";

const AboutThree = () => {
     const t = useI18n ();
    return (
        <div className="about__three section-padding">
            <div className="container">
                <div className="row align-items-center gy-4">
                    <div className="col-xl-6 col-lg-6 col-md-10 col-sm-12">
                        <div className="about__three-content">
                            <span className="subtitle-one">{t("Header.A_propos_de_nous.title")}</span>
                            <h2>{t("Header.A_propos_de_nous.description")}<span className="highlighted-two">{t("Header.A_propos_de_nous.description1")}</span></h2>
                            <p>{t("Header.A_propos_de_nous.description2")}</p>
                            <p>{t("Header.A_propos_de_nous.description3")}</p>
                            <p>{t("Header.A_propos_de_nous.description2")}</p>
                            <div className="about__three-content-service">
                                <div className="about__three-content-service-single">
                                    <i className="fa-solid fa-recycle"></i>
                                    <div className="content">
                                        <h4>{t("Header.A_propos_de_nous.expertise_technique_title")}</h4>
                                        <p>{t("Header.A_propos_de_nous.expertise_technique")}</p>
                                    </div>
                                </div>
                                <div className="about__three-content-service-single">
                                    <i className="fa-solid fa-leaf"></i>
                                    <div className="content">
                                        <h4>{t("Header.A_propos_de_nous.engagement_durable_title")}</h4>
                                        <p>{t("Header.A_propos_de_nous.engagement_durable")}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-9">
                        <div className="about__three-right">
                            <div className="row align-items-center">
                                <div className="about__three-right-counter">
                                    <h4 className="counter">+<Count number={5}/></h4>
                                    <span>{t("Header.A_propos_de_nous.annees_experience")}</span>								
                                </div>
                                <div className="col-xl-6 col-lg-7 col-md-6 col-sm-6">
                                    <div className="about__three-right-image-left-side">
                                        <img src={image1.src} alt="image" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 col-md-5 col-sm-6">
                                    <div className="about__three-right-image">
                                        <img src={image2.src} alt="image" />
                                    </div>
                                    <div className="about__three-right-image">
                                        <img src={image3.src} alt="image" />
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

export default AboutThree;