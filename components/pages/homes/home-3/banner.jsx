import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import banner1 from "../../../../public/assets/img/banner/banner-three.png";
import banner2 from "../../../../public/assets/img/banner/banner-three-2.png";
import banner3 from "../../../../public/assets/img/banner/banner-three2.png"
import shape from "../../../../public/assets/img/banner/banner-three-shape-overlay.png";
import { useI18n } from '@/locales/client';

const BannerThree = () => {
     const t = useI18n();
  	return (
		<>
        <div className="banner__three">
            <Swiper
                effect= 'fade'
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                    reverseDirection: false,
                }}
                modules={[Autoplay, EffectFade]}
            >
                <SwiperSlide>
                    <div className="banner__three-single-slide" style={{backgroundImage: `url(${banner1.src})`}}>
                        <div className="banner__three-bg-shape-overlay" ></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-10">
                                    <div className="banner__three-content">
                                        <span className="subtitle-one">{t("Header.SwiperSlide.engagement")}</span>
                                        <h2>{t("Header.SwiperSlide.engagement_pratiques")}  <span className="text-bordered">{t("Header.SwiperSlide.dura")}</span>{t("Header.SwiperSlide.bles")}</h2>
                                        <p>{t("Header.SwiperSlide.protection_environnement")}</p>
                                        <Link href="/about" className="btn-two">{t("Header.SwiperSlide.en_savoir_plus")}<i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner__three-single-slide" style={{backgroundImage: `url(${banner2.src})`}}>
                        <div className="banner__three-bg-shape-overlay" ></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-10">
                                    <div className="banner__three-content">
                                        <span className="subtitle-one">{t("Header.SwiperSlide1.title")}</span>
                                        <h2>{t("Header.SwiperSlide1.subtitle")} </h2>
                                        <p>{t("Header.SwiperSlide1.description")}</p>
                                        <Link href="/about" className="btn-two">{t("Header.SwiperSlide1.en_savoir_plus")}<i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner__three-single-slide" style={{backgroundImage: `url(${banner3.src})`}}>
                        <div className="banner__three-bg-shape-overlay" ></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-10">
                                    <div className="banner__three-content">
                                        <span className="subtitle-one">{t("Header.SwiperSlide2.title")}</span>
                                        <h2>{t("Header.SwiperSlide2.subtitle")}</h2>
                                        <p>{t("Header.SwiperSlide2.description")}</p>
                                        <Link href="/about" className="btn-two">{t("Header.SwiperSlide2.en_savoir_plus")}<i className="fas fa-arrow-right"></i></Link>
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

export default BannerThree;