import React from 'react';
import Count from '../../common/count';
import bgImage from "../../../../public/assets/img/contact/contact-bg.png";
import image1 from "../../../../public/assets/img/contact/contact.png";
import image2 from "../../../../public/assets/img/contact/contact-2.jpg";

const ContactForm = () => {
    return (
        <>
            <div className="contact__one section-padding" style={{backgroundImage: `url(${bgImage.src})`}}>
                <div className="container">
                    <div className="row align-items-end gy-4 justify-content-between">
                        <div className="col-xl-6">
                            <div className="contact__one-title">
                                <span className="subtitle-one">Sent Now</span>
                                <h2>Igniting the IT Potential</h2>
                            </div>
                            <form action="#" className="contact__one-form">
                                <div className="contact__one-form-top">
                                    <input type="text" placeholder="First Name..." />
                                    <input type="text" placeholder="Your Phone..." />
                                </div>
                                <input type="email" placeholder="Your E-mail..." className="w-100" />
                                <button type="submit" className="btn-two w-100">Sent Now
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </form>
                        </div>
                        <div className="col-xl-5">
                            <div className="contact__one-right">
                                <div className="row gy-4 align-items-end">
                                    <div className="col-xl-8 col-lg-4 col-md-6 col-sm-6">
                                        <img src={image1.src} alt="image" />
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="contact__one-counter-img">
                                            <img src={image2.src} alt="image" />
                                        </div>
                                        <div className="contact__one-counter">
                                            <div className="counter-only">
                                                <h3 className="counter"><Count number={10}/></h3>
                                                <h3>+</h3>
                                            </div>
                                            <span>years of experiences</span>
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

export default ContactForm;