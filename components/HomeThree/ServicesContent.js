import React, { Component } from 'react';
import Link from 'next/link';

class ServicesContent extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Service One */}
                <div className="services-area ptb-70 pt-0">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content left-content">
                                    <span className="sub-title">Fast & Easy Online Banking</span>
                                    <h2>Freelancers, entrepreneurs, and sole traders</h2>
                                    <div className="bar"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                                    <ul className="features-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Free plan available
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Full data privacy compliance
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                100% transparent costs
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Commitment-free
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Real-time spending overview
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Debit Mastercard included
                                            </span>
                                        </li>
                                    </ul>

                                    <Link href="#">
                                        <a className="btn btn-primary">Apply Now</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/4.jpg")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Two */}
                <div className="services-area ptb-70 bg-f7fafd">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/5.png")} alt="image" />
                                    <div className="circle-img">
                                        <img src={require("../../images/circle.png")} alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="overview-content">
                                <div className="content">
                                    <span className="sub-title">Top Security</span>
                                    <h2>Smal to medium-sized businesses</h2>
                                    <div className="bar"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                                    <ul className="features-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Easy transfers
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Deposit checks instantly
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                A powerful open API
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Coverage around the world
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Business without borders
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> Affiliates and partnerships
                                            </span>
                                        </li>
                                    </ul>

                                    <Link href="#">
                                        <a className="btn btn-primary">Apply Now</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Three */}
                <div className="services-area ptb-70">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content left-content">
                                    <span className="sub-title">Price Transparency</span>
                                    <h2>Large or enterprise level businesses</h2>
                                    <div className="bar"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                                    <ul className="features-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Corporate Cards
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                International Payments
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Automated accounting
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Request Features
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Premium Support
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Direct Debit
                                            </span>
                                        </li>
                                    </ul>

                                    <Link href="#">
                                        <a className="btn btn-primary">Apply Now</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/6.jpg")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Service Four */}
                <div className="services-area ptb-70 bg-f7fafd">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/7.jpg")} alt="image" />
                                </div>
                            </div>

                            <div className="overview-content">
                                <div className="content">
                                    <span className="sub-title">Automated Accounting</span>
                                    <h2>Save 24 hours per week on accounting</h2>
                                    <div className="bar"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                                    <ul className="features-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Easy transfers
                                            </span>
                                        </li>
                                        <li>
                                            <span><i className="flaticon-check-mark"></i> 
                                            Deposit checks instantly
                                        </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                A powerful open API
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Coverage around the world
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Business without borders
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> Affiliates and partnerships
                                            </span>
                                        </li>
                                    </ul>

                                    <Link href="#">
                                        <a className="btn btn-primary">Apply Now</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ServicesContent;