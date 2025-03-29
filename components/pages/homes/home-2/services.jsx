import servicesData from '@/components/data/services-data';
import Link from 'next/link';

const ServicesTwo = () => {
    return (
        <>
            <div className="services__two section-padding">
                <div className="container"> 
                    <div className="row justify-content-center text-center">
                        <div className="col-xl-6">
                            <div className="services__two-title">
                                <span className="subtitle-one">Latest Service</span>
                                <h2>Unleash the power of technology</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        {servicesData?.map((data, id) => {
                            return (
                                <div className="col-xl-4 col-lg-4 col-md-6" key={id}>
                                    <div className="services__two-single-service">
                                        <div className="services__two-single-service-icon">
                                            {data.icon}
                                        </div>
                                        <div className="services__two-single-service-content">
                                            <h4>{data.title}</h4>
                                            <Link href={`/services/${data.id}`} className="btn-three">read more<i className="fas fa-chevron-right"></i></Link>
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

export default ServicesTwo;