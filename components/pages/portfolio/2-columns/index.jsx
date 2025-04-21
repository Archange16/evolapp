"use client"
import SEO from "@/components/data/seo";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BreadCrumb from "../../common/breadcrumb";
import TwoColumns from "./two-columns";
import FooterOne from "@/components/layout/footers/footer-one";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderTwo from "@/components/layout/headers/header/header-two";

const PortfolioTowColumns = () => {
    return (
        <>
            <SEO pageTitle='Portfolio Grid - 02 Columns' />
            <HeaderTwo />
            <BreadCrumb title="02 Columns" innerTitle="Portfolio Grid" />
            <TwoColumns />        
            <FooterOne />    
            <ScrollToTop />      
        </>
    );
};

export default PortfolioTowColumns;