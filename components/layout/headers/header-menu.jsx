import { useI18n } from '@/locales/client';
import Link from 'next/link';

const MainMenu = () => {

    const t = useI18n();
    return (
        <>
            <ul>
                <li className="menu-item-has-children">
                    <Link href="/">{t("Header.menu.accueil")}</Link>
                </li>
                <li className="menu-item-has-children"><Link href="/about">{t("Header.menu.a_propos_de_nous")} </Link> 
                </li>
                <li className="menu-item-has-children"><Link href="/">{t("Header.menu.services")} </Link>
                </li>
                <li className="menu-item-has-children"><Link href="/">{t("Header.menu.portfolio")} </Link>
                </li>
                <li className="menu-item-has-children"><Link href="/">{t("Header.menu.blog")}</Link>
                </li>
                <li><Link href="/">{t("Header.menu.contactez_nous")}</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;