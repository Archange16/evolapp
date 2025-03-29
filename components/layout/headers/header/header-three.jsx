"use client";
import Link from 'next/link';
import MainMenu from '../header-menu';
import { useEffect, useState } from 'react';
import logo1 from "../../../../public/assets/img/logo-1.png";
import logo2 from "../../../../public/assets/img/logo-2.png";
import MobileMenuPopup from '../mobile-menu/menu-area';
import { useI18n } from '@/locales/client';
import { LocaleSelect } from '@/app/[locale]/LocaleSelect';

const HeaderThree = ({variant}) => {
    const [menuSidebar, setMenuSidebar] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
        });
    }, []);

    const t = useI18n()
    return (
        <>
        <div className="top__bar">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-md-7">
                        <div className="top__bar-left">
                            <Link href="tel:(629)555-0129"><i className="fas fa-phone-alt"></i>(+212) 661-996195</Link>
                            <Link href="mailto:info@example.com"><i className="fas fa-envelope"></i>info@example.com</Link>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-5">
                        <div className="top__bar-right">
                        <LocaleSelect/>
                            <Link href="https://www.google.com/maps"><i className="fas fa-map-marker-alt ml-20"></i>{t("Header.adresse")}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className={`header__area ${ variant ? variant : "" } header__sticky three ${isSticky ? "header__sticky-sticky-menu" : ""}`}>
            <div className="container">
                <div className="header__area-menubar">
                    <div className="header__area-menubar-left">
                        <div className="header__area-menubar-left-logo">
                            <Link href="/"><img src={logo1.src} alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="header__area-menubar-center">
                        <div className="header__area-menubar-center-menu">
                            <MainMenu />
                        </div>
                    </div>
                    <div className="header__area-menubar-right">
                        <div className="header__area-menubar-right-box">
                            <div className="header__area-menubar-right-box-btn">
                                <Link className="btn-one" href="/request-quote">{t("Header.bouton")}<i className="fas fa-arrow-right"></i></Link>
                            </div>
                        </div>
                        <div className="header__area-menubar-right-responsive-menu menu__bar">
                            <i className="flaticon-menu-1" onClick={() => setMenuSidebar(true)}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <MobileMenuPopup isOpen={menuSidebar} setIsOpen={setMenuSidebar} popupLogo={logo2} />
        </>
    );
};

export default HeaderThree;