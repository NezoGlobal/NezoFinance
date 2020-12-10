import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import VisibilitySensor from "react-visibility-sensor";

const options = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 0,
    navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>"
    ],
    responsive:{
        0:{
            autoHeight: true,
        },
        768:{
            autoHeight: false,
        }
    }
}

class MainBannerSlider extends Component {

    _isMounted = false;
    state = {
        display:false
    }

    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <React.Fragment>
                {this.state.display ? <OwlCarousel 
                    className="main-banner-slider owl-carousel owl-theme"
                    {...options}
                > 
                    {/* Slider item one */}
                    <div className="banner-slider-item item-bg-one">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content">
                                                <h1 
                                                    className={
                                                        isVisible ? "animated fadeInUp" : ''
                                                    }
                                                >
                                                    Save money in easy secure steps
                                                </h1>

                                                <p 
                                                    className={
                                                        isVisible ? "animated zoomIn" : ''
                                                    }
                                                >
                                                    Get the financial tools and insights to start, build, and grow your business.
                                                </p>

                                                <div 
                                                    className={
                                                        isVisible ? "animated zoomIn" : ''
                                                    }
                                                >
                                                    <Link href="#">
                                                        <a className="btn btn-primary">Get Started</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slider item two */}
                    <div className="banner-slider-item item-bg-two">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content">
                                                <h1 
                                                    className={
                                                        isVisible ? "animated fadeInUp" : ''
                                                    }
                                                >
                                                    Celebrating a decade of powerful banking
                                                </h1>

                                                <p 
                                                    className={
                                                        isVisible ? "animated zoomIn" : ''
                                                    }
                                                >
                                                    Get the financial tools and insights to start, build, and grow your business.
                                                </p>
                                                
                                                <div 
                                                    className={
                                                        isVisible ? "animated zoomIn" : ''
                                                    }
                                                >
                                                    <Link href="#">
                                                        <a className="btn btn-primary">Get Started</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slider item three */}
                    <div className="banner-slider-item item-bg-three">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="main-banner-content">
                                                <h1 
                                                    className={
                                                        isVisible ? "animated fadeInUp" : ''
                                                    }
                                                >
                                                    Easy free banking for entrepreneurs
                                                </h1>

                                                <p 
                                                    className={
                                                        isVisible ? "animated zoomIn" : ''
                                                    }
                                                >
                                                    Get the financial tools and insights to start, build, and grow your business.
                                                </p>
                                            
                                                <div 
                                                    className={
                                                        isVisible ? "animated zoomIn" : ''
                                                    }
                                                >
                                                    <Link href="#">
                                                        <a className="btn btn-primary">Get Started</a>
                                                    </Link>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>            
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </React.Fragment>
        );
    }
}

export default MainBannerSlider;