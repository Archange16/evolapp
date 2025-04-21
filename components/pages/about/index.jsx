"use client"
import SEO from "@/components/data/seo";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import ScrollToTop from "../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";
import FooterTwo from "@/components/layout/footers/footer-two";

const AboutUs = () => {
    return (
      <>
        <SEO pageTitle="À propos de nous" />
        <HeaderTwo />
        <BreadCrumb title="À propos de nous" innerTitle="À propos de nous" />
        <AboutMain />
        <FooterTwo />        
        <ScrollToTop />
      </>
    );
};

export default AboutUs;