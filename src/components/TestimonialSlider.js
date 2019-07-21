import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

class TestimonialSlider extends Component{
    render(){
        const params = {
            slidesPerView : 1,
            loop: true,
            speed: 1000,
            effect: 'fade',
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            renderPagenation: () => (
                <div className="swiper-pagination"></div>
              ),
        }
        let data = [
            {testimonialImage: "1.jpg", testimonialName: "Raphael", testimonialDesignation: "Dealing with Kevin", testimonialText: "I had a great experience working with Kevin at PrintMyBoxes this was my first time designing building Pillow Boxes with my other business. It was great to be able to do everything..."},
            {testimonialImage: "3.jpg", testimonialName: "Marilyn", testimonialDesignation: "Perfectly Design", testimonialText: "Awesom Quality with perfect personalize. Comapny Logo was perfectly printed with alignment as we..."},
            {testimonialImage: "2.jpg", testimonialName: "Roy W. Overly", testimonialDesignation: "Dealing with Alan", testimonialText: "lan is an amazing sale person at printmyboxes. He made sure that we are highly satisfied with our custom soap boxes order....Roy W. Overly"}
        ];

        let DataList = data.map((val, i)=>{
            return(
                <div className="swiper-slide testimonial-slider__single-slide" key={i}>
                    <div className="author">
                        <div className="author__image">
                        <img src={`assets/img/testimonial/${val.testimonialImage}`} alt="" />
                        </div>
                        <div className="author__details">
                        <h4 className="name">{val.testimonialName}</h4>
                        <div className="designation">{val.testimonialDesignation}</div>
                        </div>
                    </div>
                    <div className="content">
                        {val.testimonialText}
                    </div>
                </div>
            )
        });
        
        return(
            <div>
                {/*====================  testimonial slider area ====================*/}
                <div className="testimonial-slider-area testimonial-slider-area-bg section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="testimonial-slider">
                        <div className="testimonial-slider__container-area">
                            <Swiper {...params}>
                                {DataList}
                            </Swiper>
                            <div className="swiper-pagination"></div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====================  End of testimonial slider area  ====================*/}

            </div>
        )
    }
}

export default TestimonialSlider;