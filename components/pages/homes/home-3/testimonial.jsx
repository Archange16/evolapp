import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import testimonial from "../../../../public/assets/img/testimonial/testimonial-two.png";
import image from "../../../../public/assets/img/testimonial/testimonial-quote-two.png";

const TestimonialThree = () => {
    const slideControl = {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },			
        autoplay: {
            delay: 4000,
            reverseDirection: false,
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
        }
    };
    return (
        <div className="testimonial__three section-padding pt-0">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 col-sm-11">
                        <div className="testimonial__three-title">
                            <span className="subtitle-one">Témoignages Clients</span>
                            <h2>Optimiser la Performance avec l'Expertise en <span className="highlighted-two">Énergies</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-xl-6">
                        <div className="testimonial__three-left" style={{backgroundImage: `url(${testimonial.src})`}}></div>
                    </div>
                    <div className="col-xl-6">
                        <div className="testimonial__three-right">
                            <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
                                <SwiperSlide>
                                    <div className="testimonial__three-slider">
                                        <div className="swiper-wrapper">
                                            <div className="single-slider">
                                                <div className="single-slider-top">
                                                    <img src={image.src} alt="image" />
                                                    <div className="single-slider-rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star not-rated"></i>
                                                    </div>
                                                </div>
                                                <p></p>
                                                <div className="single-slider-user">
                                                    <div className="single-slider-user-img">
                                                        <img src="assets/img/testimonial/user-pic.png" alt="image" />
                                                    </div>
                                                    <div className="single-slider-user-name">
                                                        <h4>Archange SATHOUD </h4>
                                                        <span>Directeur Général</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial__three-slider">
                                        <div className="swiper-wrapper">
                                            <div className="single-slider">
                                                <div className="single-slider-top">
                                                    <img src={image.src} alt="image" />
                                                    <div className="single-slider-rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star not-rated"></i>
                                                    </div>
                                                </div>
                                                <p>Their product exceeded his my ro expectationsa  The the quality and attention to  moutstandin an  and it has become an essential active</p>
                                                <div className="single-slider-user">
                                                    <div className="single-slider-user-img">
                                                        <img src="assets/img/testimonial/user-pic.png" alt="image" />
                                                    </div>
                                                    <div className="single-slider-user-name">
                                                        <h4>Virguenol NGOT </h4>
                                                        <span>Content Creator</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial__three-slider">
                                        <div className="swiper-wrapper">
                                            <div className="single-slider">
                                                <div className="single-slider-top">
                                                    <img src={image.src} alt="image" />
                                                    <div className="single-slider-rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star not-rated"></i>
                                                    </div>
                                                </div>
                                                <p>Their product exceeded his my ro expectationsa  The the quality and attention to  moutstandin an  and it has become an essential active</p>
                                                <div className="single-slider-user">
                                                    <div className="single-slider-user-img">
                                                        <img src="assets/img/testimonial/user-pic.png" alt="image" />
                                                    </div>
                                                    <div className="single-slider-user-name">
                                                        <h4>François Dupont </h4>
                                                        <span>Content Creator</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            
                            </Swiper>
                            <div className="testimonial__one-right-bottom">
                                <div className="slider-arrow">
                                    <i className="swiper-button-prev fas fa-arrow-left"></i>
                                    <i className="swiper-button-next fas fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialThree;