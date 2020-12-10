import React, { Component } from 'react';
import Link from 'next/link';

class AppDownloadContent extends Component {
    render() {
        return (
            <div className="app-download-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="app-image">
                                <div className="main-image">
                                    <img src={require("../../images/mobile-app1.png")} className="wow fadeInLeft" data-wow-delay="0.6s" alt="image" />
                                    <img src={require("../../images/mobile-app2.png")} className="wow fadeInUp" data-wow-delay="0.9s" alt="image" />
                                </div>

                                <div className="main-mobile-image">
                                    <img src={require("../../images/main-mobile.png")} className="wow fadeInUp" data-wow-delay="0.6s" alt="image" />
                                </div>

                                <div className="circle-img">
                                    <img src={require("../../images/circle.png")} alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="app-download-content">
                                <h2>You can find all the thing you need to payout</h2>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</p>

                                <div className="btn-box">
                                    <Link href="#">
                                        <a className="app-store-btn">
                                            <i className="flaticon-apple"></i>
                                            Download on
                                            <span>App Store</span>
                                        </a>
                                    </Link>

                                    <Link href="#">
                                        <a className="play-store-btn">
                                            <i className="flaticon-play-store"></i>
                                            Download on
                                            <span>Google play</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppDownloadContent;