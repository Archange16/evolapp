"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import ServicesSingleMain from "./services-single";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";
import WhatsappLive from "@/components/layout/footers/whatsappLive";

const ServicesSingle = ({serviceDetails}) => {
    const words = serviceDetails.title.split(' ');
    const firstAndSecondWord = words.slice(0, 6).join(' ');
    return (
        <>
            <SEO pageTitle={serviceDetails?.title} />            
            <HeaderTwo />
            <BreadCrumb title={firstAndSecondWord} innerTitle={serviceDetails?.title} />
            <ServicesSingleMain firstAndSecondWord={firstAndSecondWord}/>
            <FooterTwo />
            <WhatsappLive />
            <ScrollToTop />
        </>
    );
};

export default ServicesSingle;