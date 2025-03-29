import image from "../../../../public/assets/img/testimonial/user-pic-2.png";

const TestimonialFive = () => {
    return (
        <>
            <div className="testimonial__four">
                <div className="testimonial__four-card">
                    <div className="testimonial__four-card-profile">
                        <img src={image.src} alt="image" />
                    </div>
                    <h3>Sara Albert</h3>
                    <p>Their professionals demonstrated a deep understanding of our business needs and provided tailored solutions that exceeded our expectations.</p>
                    <div className="testimonial__four-card-rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
            </div>            
        </>
    );
};

export default TestimonialFive;