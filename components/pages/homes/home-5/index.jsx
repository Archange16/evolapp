"use client";
import SEO from "@/components/data/seo";
import HeaderFive from "@/components/layout/headers/header/header-five";
import BannerFive from "./banner";
import AboutFive from "./about";
import WorkAreaFive from "./work";
import Solution from "./solution";
import ServicesFive from "./services";
import Choose from "./choose";
import TestimonialFive from "./testimonial";
import BlogFive from "./blog";
import FooterFive from "@/components/layout/footers/footer-five";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const HomeFive = () => {

    return (
        <div>
            <SEO pageTitle='Software Solutions' />
            <HeaderFive />
            <BannerFive />
            <AboutFive />
            <WorkAreaFive />
            <Solution />
            <ServicesFive />
            <Choose />
            <TestimonialFive />
            <BlogFive />
            <FooterFive />
            <ScrollToTop />
        </div>
    );
};

export default HomeFive;