import image from "../../../../public/assets/img/technology-solution/tech-solution-one.png";
import Count from "../../common/count";

const Solution = () => {
    return (
        <>
            <div className="technology-solution__one section-padding">
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-xl-6 col-lg-6 col-md-9">
                            <div className="technology-solution__one-content">
                                <span className="subtitle-one">Tech Solutions</span>
                                <h2>Technology that Drives Business</h2>
                                <p>Streamlining operations to customer experiences, Business across all sectors are cutting-edge technologies</p>
                                <div className="satisfied-customer-counter">
                                    <div className="counter-wrapper">
                                        <h3 className="counter"><Count number={400}/></h3>
                                        <h3>+</h3>
                                    </div>
                                    <span>Satisficed Customers</span>
                                </div>
                            </div> 
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="technology-solution__one-image">
                                <div className="technology-solution__one-image-wrapper">
                                    <img src={image.src} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Solution;