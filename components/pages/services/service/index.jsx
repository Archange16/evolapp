"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./services";
import WorkArea from "../../homes/home/work";
import Testimonial from "../../homes/home/testimonial";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";
import WhatsappLive from "@/components/layout/footers/whatsappLive";

const ServicePage = () => {
    return (
        <>

            <SEO pageTitle="Nos Services" />
            <HeaderTwo />
            <BreadCrumb title="Nos Services" innerTitle="Nos Services" />
            <ServicesMain />
            <WorkArea />
            <Testimonial />
            <FooterTwo />
            <WhatsappLive />
            <ScrollToTop />
        </>
    );
};

export default ServicePage;