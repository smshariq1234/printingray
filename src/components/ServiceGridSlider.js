import React, {Component} from 'react';
import Swiper from 'react-id-swiper';

class ServiceGridSlider extends Component{
    render(){
        const params = {
            slidesPerView : 3,
            loop: true,
            speed: 1000,
            watchSlidesVisibility: true,
            spaceBetween : 30,
            autoplay: {
                delay: 3000,
            },
            // Responsive breakpoints
            breakpoints: {
                1499:{
                    slidesPerView : 3
                },

                991:{
                    slidesPerView : 2
                },

                767:{
                    slidesPerView : 1

                },

                575:{
                    slidesPerView : 1
                }
            }

        }
        let data = [
            {img: 'service1.jpg', iconName: 'flaticon-002-welding', serviceTitle: 'No die & Plate Charges', serviceExcerpt: '-', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service2.jpg', iconName: 'flaticon-004-walkie-talkie', serviceTitle: 'Quick Turnaround Time', serviceExcerpt: '-', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service3.jpg', iconName: 'flaticon-015-cart', serviceTitle: 'Free Shipping', serviceExcerpt: '-', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service1.jpg', iconName: 'flaticon-010-tank-1', serviceTitle: 'Starting from 50 boxes', serviceExcerpt: '-', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service1.jpg', iconName: 'flaticon-010-tank-1', serviceTitle: 'Custom Size & Style', serviceExcerpt: '-', serviceUrl: 'service-details-left-sidebar'},
            {img: 'service1.jpg', iconName: 'flaticon-010-tank-1', serviceTitle: 'Free Graphic Designing', serviceExcerpt: '-', serviceUrl: 'service-details-left-sidebar'},
        ];

        let DataList = data.map((val, i)=>{
            return(
                <div className="swiper-slide" key={i}>
                    <div className="service-grid-item">
                    <div className="service-grid-item__image">
                        <div className="service-grid-item__image-wrapper">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>
                            <img src={`assets/img/service/${val.img}`} className="img-fluid" alt="" />
                        </a>
                        </div>
                        <div className="icon">
                        <i className={val.iconName} />
                        </div>
                    </div>
                    <div className="service-grid-item__content">
                        <h3 className="title">
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`}>{val.serviceTitle}</a>
                        </h3>
                        <p className="subtitle">{val.serviceExcerpt}</p>
                        <a href={`${process.env.PUBLIC_URL}/${val.serviceUrl}`} className="see-more-link">SEE MORE</a>
                    </div>
                    </div>
                </div>
            )
        });
        return(
            <div>
                {/*====================  service grid slider area ====================*/}
                <div className="service-grid-slider-area section-space--inner--120">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title-area text-center">
                        <h2 className="section-title section-space--bottom--50">More Features <span className="title-icon" /></h2>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="service-slider">
                            <Swiper {...params}>
                                {DataList}
                            </Swiper>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                {/*====================  End of service grid slider area  ====================*/}

            </div>
        )
    }
}


export default ServiceGridSlider;