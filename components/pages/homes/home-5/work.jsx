import workBg from "../../../../public/assets/img/work-process/work-process-bg-2.png";
import arrow1 from "../../../../public/assets/img/work-process/work-process-arrow-1.png";
import arrow2 from "../../../../public/assets/img/work-process/work-process-arrow-2.png";
import arrow3 from "../../../../public/assets/img/work-process/work-process-arrow-1.png";

const WorkAreaFive = () => {
    return (        
        <div className="work-process__three" style={{backgroundImage: `url(${workBg.src})`}}>
            <div className="container">
                <div className="row justify-content-center text-center mb-50">
                    <div className="col-xl-6 col-lg-7 col-md-9">
                        <span className="subtitle-one">Work Process</span>
                        <h2>Workflow Journey</h2>
                    </div>
                </div>
                <div className="work-process__three-card">
                    <div className="work-process__three-card-arrows">
                        <img src={arrow1.src} alt="arrow" className="arrow-1" />
                        <img src={arrow2.src} alt="arrow" className="arrow-2" />
                        <img src={arrow3.src} alt="arrow" className="arrow-3" />
                    </div>
                    <div className="work-process__three-card-single">
                        <h3>01</h3>
                        <h5>Idea Generation</h5>
                        <p>Creativity at this initial stage, we focus on understanding your unique challenge</p>
                    </div>
                    <div className="work-process__three-card-single middle">
                        <h3>02</h3>
                        <h5>Solution Development</h5>
                        <p>Transitioning from ideas to actionable solutions, our experts employ cutting-edge technologies</p>
                    </div>
                    <div className="work-process__three-card-single">
                        <h3>03</h3>
                        <h5>Outcome Delivery</h5>
                        <p>The culmination of our process, outcome delivery, is where plans become reality.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkAreaFive;