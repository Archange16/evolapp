import servicesData from '@/components/data/services-data';
import { useI18n } from '@/locales/client';
import Link from 'next/link';

const ServicesThree = () => {
    const t = useI18n();

    // Array des services avec traduction
    const servicesDataTranslated = [
        {
            id: t("Header.electricalequipement.id"),
            icon: <i className="fa-solid fa-bolt"></i>,
            title: t("Header.electricalequipement.title"),
            des: t("Header.electricalequipement.des"),
        },
        {
            id: t("Header.energiemanament.id"),
            icon: <i className="fa-solid fa-wind"></i>,
            title: t("Header.energiemanament.title"),
            des: t("Header.energiemanament.des"),
        },
        {
            id: t("Header.renewableenergy.id"),
            icon: <i className="fa-solid fa-sun"></i>,
            title: t("Header.renewableenergy.title"),
            des: t("Header.renewableenergy.des"),
        },
        {
            id: t("Header.businessdevelopment.id"),
            icon: <i className="fa-solid fa-chart-line"></i>,
            title: t("Header.businessdevelopment.title"),
            des: t("Header.businessdevelopment.des"),
        },
        {
            id: t("Header.operationmaintenance.id"),
            icon: <i className="fa-solid fa-tools"></i>,
            title: t("Header.operationmaintenance.title"),
            des: t("Header.operationmaintenance.des"),
        },
        {
            id: t("Header.energystorage.id"),
            icon: <i className="fa-solid fa-battery-full"></i>,
            title: t("Header.energystorage.title"),
            des: t("Header.energystorage.des"),
        },
    ];

    return (
        <>
            <div className="services__three section-padding">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9">
                            <div className="services__three-title text-center">
                                <span className="subtitle-one">{t("Header.nosservices.nos_services")}</span>
                                <h2>{t("Header.nosservices.decouvrez_comment")}<span className="highlighted-two">{t("Header.nosservices.et_lenvironnement")}</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center flex-wrap services__three-items">
                        {servicesDataTranslated?.slice(0, 6).map((data, id) => {
                            const words = data.title.split(' ');
                            const firstAndSecondWord = words.slice(0, 3).join(' ');

                            return (
                                <div className="col-lg-4 col-md-6 item" key={id}>
                                    <div className="services__three-single-service">
                                        <div className="services__three-single-service-icon">
                                            {data.icon}
                                        </div>
                                        <div className="services__three-single-service-content">
                                            <h4>{firstAndSecondWord}</h4>
                                            <p>{data.des}</p>
                                            <Link href={`/services/${data.id}`} className="btn-three">{t("Header.nosservices.nos_services")}<i className="fas fa-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesThree;
