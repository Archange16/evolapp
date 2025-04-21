import image1 from "../../../../public/assets/img/why-choose-us/why-choose-us-four-2.png";
import image2 from "../../../../public/assets/img/why-choose-us/why-choose-us-four.png";

const Choose = () => {
    return (
        <>
        <div className="why-choose-us__four section-padding">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <div className="why-choose-us__four-image">
                            <img src={image1.src} alt="image" className="why-choose-us__four-floating-image animate-y-axis-slider" />
                            <img src={image2.src} alt="image" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-7 col-md-9">
                        <div className="why-choose-us__four-left">
                            <div className="why-choose-us__four-title">
                                <span className="subtitle-one">Why Chose Us</span>
                                <h2>Bantec Your Trusted IT Partner</h2>
                                <p>Our expertise, we ensure your business stays ahead in the digital landscape, driving success and growth together</p>
                                <div className="why-choose-us__four-progress-bar">
                                    <div className="why-choose-us__four-progress-bar-wrapper">
                                        <div className="single-progress-bar">
                                            <span>75%</span>
                                        </div>
                                        <h3>Successful</h3>
                                    </div>
                                    <div className="why-choose-us__four-progress-bar-wrapper">
                                        <div className="single-progress-bar">
                                            <span>85%</span>
                                        </div>
                                        <h3>Branching</h3>
                                    </div>
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

export default Choose;