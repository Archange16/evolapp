import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import testimonialBg from "../../../../public/assets/img/testimonial/testimonial-2.png";
import quoteIcon from "../../../../public/assets/img/testimonial/testimonial-quote.png";
import Link from "next/link";

const TestimonialTwo = () => {
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
        <>        
        <div className="testimonial__two section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-7 col-lg-6 col-md-7">
                        <div className="testimonial__two-title">
                            <span className="subtitle-one">Praise & Feedback</span>
                            <h2>Customer Experiences</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__two-left" style={{backgroundImage: `url(${testimonialBg.src})`}}></div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__two-right">
                        <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
                            <SwiperSlide>
                                <div className="single-slider">
                                    <div className="single-slider-user">
                                        <div className="single-slider-user-name">
                                            <h4>Nasir Al Shakib</h4>
                                            <span>Content Creator</span>
                                        </div>
                                    </div>
									<p>Their product exceeded his my ro expectationsa  The the quality and attention to  moutstandin an  and it has become an essential active</p>
                                    <div className="single-slider-user-rating mt-30">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star not-rated"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slider">
                                    <div className="single-slider-user">
                                        <div className="single-slider-user-name">
                                            <h4>Devon Lane</h4>
                                            <span>Marketing</span>
                                        </div>
                                    </div>
									<p>Their product exceeded his my ro expectationsa  The the quality and attention to  moutstandin an  and it has become an essential active</p>
                                    <div className="single-slider-user-rating mt-30">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star not-rated"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                            <div className="testimonial__two-right-bottom">
                                <div className="slider-arrow">
                                    <i className="swiper-button-prev fas fa-arrow-left"></i>
                                    <i className="swiper-button-next fas fa-arrow-right"></i>
                                </div>
							<div className="slider-quote">
								<img src={quoteIcon.src} alt="image" />
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

export default TestimonialTwo;