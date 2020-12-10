import React, { Component } from 'react';
import Link from 'next/link';

class InformationArea extends Component {
    render() {
        return (
            <div className="information-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-information-box">
                                <div className="icon">
                                    <i className="flaticon-piggy-bank"></i>
                                </div>
                                <h3>$0.00 / mo</h3>
                                <p>Free account available</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-information-box">
                                <div className="icon">
                                    <i className="flaticon-user"></i>
                                </div>
                                <h3>10 minutes</h3>
                                <p>Apply for account</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-information-box">
                                <div className="icon">
                                    <i className="flaticon-shield"></i>
                                </div>
                                <h3>$100,000</h3>
                                <p>Guarantee on deposits</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-information-box">
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

export default InformationArea;