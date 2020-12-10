import React, { Component } from 'react';
import Link from 'next/link';



class ServicesCard extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Right Image Style */}
                <div className="services-area ptb-100 bg-f7f7f7">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content left-content">
                                    <h2>Nezo Finance Ecosystem</h2>
                                    <div className="bar"></div>
                                    <p>The all-in-one ecosystem designed to be a one-stop solution for all things DeFi. Nezo Finance features services that caters to a wide range of users — from blockchain companies and their stakeholders, traders and investors, lenders and borrowers, and more.</p>

                                    <ul className="services-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Multiple DeFi solutions
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Interconnected features 
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Streamlined interface 
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Optimized for interoperability 
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Multiple income streams
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i> 
                                                Powered by Nezo Token
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/banner-image/Banner_image.png")} alt="image" />
                                    <div className="circle-img">
                                        <img src={require("../../images/circle.png")} alt="image" />
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


export default ServicesCard;