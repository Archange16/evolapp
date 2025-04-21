import Link from 'next/link';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/">Accueil</Link>
                    {/* <ul className="sub-menu">
                        <li><Link href="/">Home 01</Link></li>
                        <li><Link href="/home-two">Home 02</Link></li>
                        <li><Link href="/home-three">Home 03</Link></li>
                        <li><Link href="/home-four">Home 04</Link></li>
                        <li><Link href="/home-five">Home 05</Link></li>
                    </ul> */}
                </li>
                <li className="menu-item-has-children"><Link href="/about">A propos</Link>
                    {/* <ul className="sub-menu">
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/testimonial">Testimonials</Link></li>
                        <li><Link href="/pricing-plan">Pricing Plan</Link></li>
                        <li><Link href="/faq">Faq</Link></li>
                        <li className="menu-item-has-children"><Link href="#">Team<i className="fas fa-angle-right"></i></Link>
                            <ul className="sub-menu">
                                <li><Link href="/team">Team Style 01</Link></li>
                                <li><Link href="/team-two">Team Style 02</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/request-quote">Request Quote</Link></li>
                        <li><Link href="/404">404</Link></li>
                    </ul> */}
                </li>
                <li className="menu-item-has-children"><Link href="/services"> Nos Services</Link>
                   {/*  <ul className="sub-menu">
                        <li><Link href="/services">Services 01</Link></li>
                        <li><Link href="/services-two">Services 02</Link></li>
                        <li><Link href="/services/data-analytics">Services Details</Link></li>
                    </ul> */}
                </li>
                <li className="menu-item-has-children"><Link href="/portfolio/2-columns">Nos Réalisations</Link>
                   {/*  <ul className="sub-menu">
                        <li><Link href="/portfolio/2-columns">2 Columns</Link></li>
                        <li><Link href="/portfolio/3-columns">3 Columns</Link></li>
                        <li><Link href="/portfolio/gateway-integration">Portfolio Details</Link></li>
                    </ul> */}
                </li>
                <li className="menu-item-has-children"><Link href="/blog">Blog </Link>
                    {/* <ul className="sub-menu">
                        <li><Link href="/blog">Blog Grid</Link></li>
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog/ux-ui-designing-the-future-web-design">Blog Details</Link></li>
                    </ul> */}
                </li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;