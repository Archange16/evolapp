import Link from "next/link";
import brand1 from "../../../../public/assets/img/brand/brand-1.png";
import brand2 from "../../../../public/assets/img/brand/brand-2.png";
import brand3 from "../../../../public/assets/img/brand/brand-3.png";
import brand4 from "../../../../public/assets/img/brand/brand-4.png";
import brand5 from "../../../../public/assets/img/brand/brand-5.png";
import about1 from "../../../../public/assets/img/about/about-five-1.png";
import about2 from "../../../../public/assets/img/about/about-five-2.png";
import aboutBg from "../../../../public/assets/img/about/about-five-bg.png";

const AboutFive = () => {
    return (
        <>
        <div className="about__five section-padding" style={{backgroundImage: `url(${aboutBg.src})`}}>
            <div className="brand__area mb-120">
                <div className="container">
                    <div className="col-xl-12">
                        <div className="text__slider">
                            <div className="text-slide">
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <img src={brand1.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand2.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand3.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand4.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand5.src} alt="image" />
                                    </div>
                                </div>
                                <div className="sliders scroll">
                                    <div className="brand__area-item">
                                        <img src={brand1.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand2.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand3.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand4.src} alt="image" />
                                    </div>
                                    <div className="brand__area-item">
                                        <img src={brand5.src} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="container">
                <div className="row align-items-center flex-wrap-reverse gy-4">
                    <div className="col-xl-6 col-lg-8">
                        <div className="about__five-image">
                            <div className="about__five-image-wrapper">
                                <img src={about1.src} alt="image" />
                                <img src={about2.src} alt="image" className="image-2 animate-y-axis-slider" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <div className="about__five-content">
                            <span className="subtitle-one">About us</span>
                            <h2>Innovating Solutions for Your Business</h2>
                            <div className="about__five-content-service">
                                <div className="single-service">
                                    <i className="fas fa-check-circle"></i>
                                    <div className="single-service-content">
                                        <h4>Shaping the Digital Future</h4>
                                        <p>Intuitive and user-friendly Customizable themes and layouts Drag-and-drop functionality for ease of use</p>
                                    </div>
                                </div>
                                <div className="single-service">
                                    <i className="fas fa-check-circle"></i>
                                    <div className="single-service-content">
                                        <h4>Shaping the Digital Future</h4>
                                        <p>Intuitive and user-friendly Customizable themes and layouts Drag-and-drop functionality for ease of use</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/about" className="btn-one">Discover More
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutFive;