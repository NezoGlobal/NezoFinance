import React, { Component } from 'react';
import Link from 'next/link';

class OurFeaturesStyleTwo extends Component {
    render() {
        return (
            <section className="features-section ptb-70 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Features</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="features-box-list">
                                <div className="row">
                                    <div className="col-lg-12 col-md-6">
                                        <div className="features-box">
                                            <div className="icon">
                                                <i className="flaticon-settings"></i>
                                            </div>
                                            <h3>
                                                <Link href="#">
                                                    <a>Incredible infrastructure</a>
                                                </Link>
                                            </h3>
                                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="features-box">
                                            <div className="icon bg-f78acb">
                                                <i className="flaticon-envelope-of-white-paper"></i>
                                            </div>
                                            <h3>
                                                <Link href="#">
                                                    <a>Email notifications</a>
                                                </Link>
                                            </h3>
                                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="features-box">
                                            <div className="icon bg-cdf1d8">
                                                <i className="flaticon-menu"></i>
                                            </div>
                                            <h3>
                                                <Link href="#">
                                                    <a>Simple dashboard</a>
                                                </Link>
                                            </h3>
                                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-6">
                                        <div className="features-box">
                                            <div className="icon bg-c679e3">
                                                <i className="flaticon-info"></i>
                                            </div>
                                            <h3>
                                                <Link href="#">
                                                    <a>Information retrieval</a>
                                                </Link>
                                            </h3>
                                            <p>Lorem ipsum dolor amet, adipiscing, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="features-image">
                                <img src={require("../../images/features-img1.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurFeaturesStyleTwo;