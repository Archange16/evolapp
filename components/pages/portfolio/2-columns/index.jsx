"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import TwoColumns from "./two-columns";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";
import WhatsappLive from "@/components/layout/footers/whatsappLive";

const PortfolioTowColumns = () => {
    return (
        <>
            <SEO pageTitle='Nos Réalisations' />
            <HeaderTwo />
            <BreadCrumb title="Nos Réalisations" innerTitle="Nos Réalisations" />
            <TwoColumns />        
            <FooterTwo />  
            <WhatsappLive />  
            <ScrollToTop />      
        </>
    );
};

export default PortfolioTowColumns;