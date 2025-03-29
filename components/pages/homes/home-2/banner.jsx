import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import banner1 from "../../../../public/assets/img/banner/banner-two.png";
import banner2 from "../../../../public/assets/img/banner/banner-two-2.png";
import banner3 from "../../../../public/assets/img/banner/banner-two-3.png";
import shape1 from "../../../../public/assets/img/shape/banner-two-shape-2.png";
import shape2 from "../../../../public/assets/img/shape/banner-two-shape-3.png";
import shape3 from "../../../../public/assets/img/shape/banner-two-shape-4.png";
import shapeContent from "../../../../public/assets/img/shape/content.png";

const BannerTwo = () => {
  	return (
		<>
			<div className="banner__two">
				<Swiper
					effect= 'fade'
					speed={2000}
					loop={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
						reverseDirection: false,
					}}
					modules={[Autoplay, EffectFade]}
				>
					<SwiperSlide>
						<div className="banner__two-single-slider" style={{backgroundImage: `url(${banner1.src})`}}>
							<div className="banner-two-shape">
								<div className="banner-two-shape-1 shape">
									<img src={shapeContent.src} alt="shape" className="animate-rotate" />
								</div>
								<div className="banner-two-shape-2 shape">
									<img src={shape1.src} alt="image" />
								</div>
								<div className="banner-two-shape-3 shape">
									<img src={shape2.src} alt="image" />
								</div>
								<div className="banner-two-shape-4 shape">
									<img src={shape3.src} alt="image" />
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-xl-5 col-lg-10 col-md-8">
										<div className="banner__two-content">
											<h2>Unlocking Your Digital Potential</h2>
											<p>Our expert team in unlocking your digital potential, empowering business to thrive in the digital</p>
											<Link href="/contact" className="btn-two">Get Started<i className="fas fa-arrow-right"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="banner__two-single-slider" style={{backgroundImage: `url(${banner2.src})`}}>
							<div className="banner-two-shape">
								<div className="banner-two-shape-1 shape">
									<img src={shapeContent.src} alt="shape" className="animate-rotate" />
								</div>
								<div className="banner-two-shape-2 shape">
									<img src={shape1.src} alt="image" />
								</div>
								<div className="banner-two-shape-3 shape">
									<img src={shape2.src} alt="image" />
								</div>
								<div className="banner-two-shape-4 shape">
									<img src={shape3.src} alt="image" />
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-xl-5 col-lg-10 col-md-8">
										<div className="banner__two-content">
											<h2>Pioneering Progress One Algorithm</h2>
											<p>We believe in pushing the boundaries of what's possible. our pioneering spirit drives us to develop algorithms</p>
											<Link href="/contact" className="btn-two">Get Started<i className="fas fa-arrow-right"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="banner__two-single-slider" style={{backgroundImage: `url(${banner3.src})`}}>
							<div className="banner-two-shape">
								<div className="banner-two-shape-1 shape">
									<img src={shapeContent.src} alt="shape" className="animate-rotate" />
								</div>
								<div className="banner-two-shape-2 shape">
									<img src={shape1.src} alt="image" />
								</div>
								<div className="banner-two-shape-3 shape">
									<img src={shape2.src} alt="image" />
								</div>
								<div className="banner-two-shape-4 shape">
									<img src={shape3.src} alt="image" />
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col-xl-5 col-lg-10 col-md-12">
										<div className="banner__two-content">
											<h2>Elevate Your Business with IT Excellence</h2>
											<p>Our comprehensive suite of services is designed to optimize your IT infrastructure, enhance efficiency</p>
											<Link href="/contact" className="btn-two">Get Started<i className="fas fa-arrow-right"></i></Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
            </div>
		</>
	);
};

export default BannerTwo;
