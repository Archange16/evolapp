"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../common/scroll/scroll-to-top";

const AboutUs = () => {
    return (
      <>
        <SEO pageTitle="À propos de nous" />
        <HeaderOne />
        <BreadCrumb title="À propos de nous" innerTitle="À propos de nous" />
        <AboutMain />
        <FooterOne />        
        <ScrollToTop />
      </>
    );
};

export default AboutUs;