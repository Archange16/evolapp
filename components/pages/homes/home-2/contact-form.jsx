import React from 'react';
import Count from '../../common/count';
import bgImage from "../../../../public/assets/img/contact/contact-bg.png";
import image1 from "../../../../public/assets/img/contact/contact.png"; // Je suppose que cette image représente un service
import image2 from "../../../../public/assets/img/contact/contact-2.jpg"; // Image représentant l'expérience ou la qualité du service

const ContactForm = () => {
    return (
        <>
            <div className="contact__one section-padding" style={{backgroundImage: `url(${bgImage.src})`}}>
                <div className="container">
                    <div className="row align-items-end gy-4 justify-content-between">
                        <div className="col-xl-6">
                            <div className="contact__one-title">
                                <span className="subtitle-one">Contactez-nous maintenant</span>
                                <h2>Nous façonnons votre avenir numérique</h2>
                            </div>
                            <form action="#" className="contact__one-form">
                                <div className="contact__one-form-top">
                                    <input type="text" placeholder="Votre Prénom..." />
                                    <input type="text" placeholder="Votre Téléphone..." />
                                </div>
                                <input type="email" placeholder="Votre E-mail..." className="w-100" />
                                <button type="submit" className="btn-two w-100">Envoyer maintenant
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </form>
                        </div>
                        <div className="col-xl-5">
                            <div className="contact__one-right">
                                <div className="row gy-4 align-items-end">
                                    <div className="col-xl-8 col-lg-4 col-md-6 col-sm-6">
                                        <img src={image1.src} alt="Solutions numériques" />
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                                        <div className="contact__one-counter-img">
                                            <img src={image2.src} alt="Expertise et expérience" />
                                        </div>
                                        <div className="contact__one-counter">
                                            <div className="counter-only">
                                                <h3 className="counter"><Count number={10} /></h3>
                                                <h3>+</h3>
                                            </div>
                                            <span>années d'expérience dans les solutions numériques</span>
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
