import Link from 'next/link';
import logo2 from "../../../public/assets/img/logo-2.png";
import Social from '@/components/data/social';

const SideBar = ({ isOpen, setIsOpen }) => {
    return (
        <>
            <div className={`header__area-menubar-right-sidebar-popup ${isOpen ? 'active' : ''}`}>
                <div className="sidebar-close-btn" onClick={() => setIsOpen(false)}>
                    <i className="fal fa-times"></i>
                </div>
                <div className="header__area-menubar-right-sidebar-popup-logo">
                    <Link href='/'>
                        <img className='logo_one' src={logo2.src} alt="logo" />
                    </Link>
                </div>
                <p>Nous proposons des solutions numériques sur mesure pour répondre aux besoins spécifiques des entreprises et des particuliers : sites web, applications, design, marketing digital et IA.</p>

                <div className="header__area-menubar-right-sidebar-popup-contact">
                    <h4 className="mb-30">Contactez-nous</h4>

                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="fal fa-phone-alt icon-animation"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Appelez-nous</span>
                            <h6><Link href="tel:+242061234567">(+212) 06 47 810243</Link></h6>
                        </div>
                    </div>

                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="fal fa-envelope"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Email</span>
                            <h6><Link href="mailto:contact@evolapp.com">contact@evolapp.com</Link></h6>
                        </div>
                    </div>

                    <div className="header__area-menubar-right-sidebar-popup-contact-item">
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-icon">
                            <i className="fal fa-map-marker-alt"></i>
                        </div>
                        <div className="header__area-menubar-right-sidebar-popup-contact-item-content">
                            <span>Adresse</span>
                            <h6><Link href="https://google.com/maps" target="_blank">Maroc, Sidi Ghanem à côté de l'immeuble d'EBF Marrakech</Link></h6>
                        </div>
                    </div>
                </div>

                <div className="header__area-menubar-right-sidebar-popup-social social__icon">
                    <Social />
                </div>
            </div>

            <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default SideBar;
