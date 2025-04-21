"use client"
import SEO from '@/components/data/seo';
import BreadCrumb from '../common/breadcrumb';
import RequestQuoteMain from './request-quote';
import ScrollToTop from '../common/scroll/scroll-to-top';
import FooterTwo from '@/components/layout/footers/footer-two';
import HeaderTwo from '@/components/layout/headers/header/header-two';

const RequestQuotePage = () => {
    return (
        <>
            <SEO pageTitle="Demande de devis" />
            <HeaderTwo />
            <BreadCrumb title="Demande de devis" innerTitle="Demande de devis – Solutions numériques sur mesure" />
            <RequestQuoteMain />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default RequestQuotePage;