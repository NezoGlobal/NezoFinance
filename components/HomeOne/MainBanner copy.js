



import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow'

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                <div className="banner-section">
                    <div className="container">
                        <div className="row m-0 align-items-center">
                            <div className="col-lg-5 col-md-12 p-0">
                                <div className="hero-content">
                                    <h1>Nezo Finance</h1>
                                    <p>The all-in-one DeFi ecosystem with multiple highly demanded features from one interface.</p>
                                    <Link href="#about">
                                        <a className="btn btn-primary">
                                            <i className="fas fa-rocket pr-2"></i>Get started</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12 p-0">
                                <div className="hero-image">
                                    <div className="main-image">
                                        <ReactWOW delay='0.7s' animation='zoomIn'>
                                            <img src={require("../../images/banner-image/1.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW delay='1.3s' animation='fadeInLeft'>
                                            <img src={require("../../images/banner-image/2.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW delay='1s' animation='fadeInUp'>
                                            <img src={require("../../images/banner-image/3.png")} alt="image" />
                                        </ReactWOW>
                                    </div>

                                    <div className="main-mobile-image">
                                        <ReactWOW delay='0.7s' animation='fadeInUp'>
                                            <img src={require("../../images/banner-image/main-pic.png")} alt="image" />
                                        </ReactWOW>
                                    </div>

                                    <div className="circle-image">
                                        <ReactWOW delay='1s' animation='fadeInUp'>
                                            <img src={require("../../images/banner-image/Nezo_Coin.png")} alt="image" />
                                        </ReactWOW>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </React.Fragment>
        );
    }
}

export default MainBanner;