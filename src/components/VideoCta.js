import React, { Component } from 'react';
import ModalVideo from 'react-modal-video'

class VideoCta extends Component{

    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }
    render(){
        return(
            <div>
                {/*====================  video cta area ====================*/}
                <div className="video-cta-area section-space--inner--120">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="video-cta-content">
                            <h4 className="video-cta-content__small-title">About Us</h4>
                            <h3 className="video-cta-content__title">Excellence in Custom Boxes With Logo</h3>
                            <p className="video-cta-content__text">Who does not like custom packaging boxes with logo? We not only deal in Custom Wholesale Boxes but also in standard boxes with logo. So, what are you waiting for? Be our next partner! We are a premier online printing agency that has built its repute by delivering awesome customer experience and quality services. Irrespective of the client type, our commitment to excellence, adherence to industry’s best practices, belief in innovation, and quality protocols have remained constant. That is why the majority of our clients are repeat customers who come back we are-avail an exciting customer experience. Whether you are looking for direct mailing solution or promotional products, our design and printing teams have the capability and capacity to process your orders as needed. </p>
                            <a href={`${process.env.PUBLIC_URL}/contact-us`} className="ht-btn ht-btn--round">CONTACT US</a>
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 col-md-6">
                            <div className="cta-video-image">
                            <div className="video-popup">
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='YwQElvvwXNE' onClose={() => this.setState({isOpen: false})} />
                                <button onClick={this.openModal}>
                                    <div className="cta-video-image__image">
                                        <img src="assets/img/backgrounds/video-cta.jpg" className="img-fluid" alt="" />
                                    </div>
                                    <div className="cta-video-image__icon">
                                        <i className="ion-ios-play" />
                                    </div>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of video cta area  ====================*/}
            </div>
        )
    }
}


export default VideoCta;