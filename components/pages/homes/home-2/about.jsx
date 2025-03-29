import image1 from "../../../../public/assets/img/about/about-two.png";
import image2 from "../../../../public/assets/img/about/about-two-2.png";
import Link from "next/link";

const AboutTwo = () => {
    return (
        <>
            <div className="about__two section-padding">
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-xl-6 col-lg-6">
                            <div className="about__two-left">
                                <div className="row align-items-center">
                                    <div className="col-xl-6 col-lg-7 col-md-6 col-6">
                                        <div className="about__two-left-image-left-side">
                                            <img src={image1.src} alt="image" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-5 col-md-5 col-6">
                                        <div className="about__two-left-right-image">
                                            <img src={image2.src} alt="image" />
                                        </div>
                                        <div className="about__two-left-progressbar">
                                            <div className="about__two-left-progressbar-wrapper">
                                                <div className="about__two-left-progressbar-value">
                                                    <span>75%</span>
                                                </div>
                                                <h4 className="about__two-right-progressbar-title">Daily Activity</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="about__two-content">
                                <span className="subtitle-one">About us</span>
                                <h2>Enabling Success The Education</h2>
                                <p>These services and features can provide a comprehensive range of offerings to cater to various technological needs of your clients.</p>
                                <div className="about__two-content-service">
                                    <div className="service">
                                        <i className="far fa-check-circle"></i>
                                        <span>Powerful data visualization tools</span>
                                    </div>
                                    <div className="service">
                                        <i className="far fa-check-circle"></i>
                                        <span>Technology roadmap development</span>
                                    </div>
                                    <div className="service">
                                        <i className="far fa-check-circle"></i>
                                        <span>Network security and monitoring</span>
                                    </div>
                                </div>
                                <Link href="/about" className="btn-two">Discover More<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutTwo;