import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow'

class ComingSoon extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                <div className="banner-section-soon">
                    <div className="container">
                        <div className="row m-0 align-items-center">
                            <div className="col-lg-5 col-md-12 p-0">
                                <div className="hero-content">
                                    <h1>This feature will be available soon</h1>
                                    <p>We are currently working on it.</p>
                                    <Link href="/">
                                        <a className="btn btn-primary">
                                            <i className="fas fa-home pr-2"></i>Home</a> 
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-7 col-md-12 p-0">
                                <div className="hero-image">
                                    <div className="main-image">
                                        <ReactWOW delay='0.7s' animation='fadeInUp'>
                                            <img src={require("../../images/banner-image/drone_man_2.png")} alt="image" />
                                        </ReactWOW>
                                    </div>

                                    <div className="main-mobile-image">
                                        <ReactWOW delay='0.7s' animation='fadeInUp'>
                                            <img src={require("../../images/banner-image/coming-soon-img-mobile.png")} alt="image" />
                                        </ReactWOW>
                                    </div>

                                    <div className="drone-image">
                                        <ReactWOW delay='1s' animation='fadeInUp'>
                                            <img src={require("../../images/banner-image/drone_image_1.png")} alt="image" />
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

export default ComingSoon;