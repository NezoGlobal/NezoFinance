import React, { Component } from 'react';
import Link from 'next/link';

class AppDownloadContent extends Component {
    render() {
        return (
            <div className="app-download-area mtb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="app-image">
                                <div className="main-image">
                                    <img src={require("../../images/NezoPad_home.png")} className="wow fadeInLeft" data-wow-delay="0.6s" alt="image" />
                                    
                                </div>

                                <div className="main-mobile-image">
                                    <img src={require("../../images/NezoPad_home.png")} className="wow fadeInUp" data-wow-delay="0.6s" alt="image" />
                                </div>

                                <div className="circle-img">
                                    <img src={require("../../images/circle_sm.png")} alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="app-download-content">
                                <h2>Nezo Pad</h2>
                                <div className="bar"></div>
                                <p>You can run your token sale through a reliable low-cost solution, having full control over your OTC parameters. When a sale is created through Nezo Pad there is no trust involved as the sale smart contract is generated automatically based on the options set by the creator.</p>

                                

                                <p>Top Tier Holders of NZO Token have access to all Nezo Pad sales. Tier 1 Holders of NZO Token will also have an early access (24h) in the pre-sale rounds of incubated projects on Nezo Pad.</p>

                                <div className="btn-box">

                                    <Link href="/coming-soon">
                                        <a className="btn btn-primary">
                                            <i className="fas fa-rocket pr-2"></i>Launch</a>
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


/* <img src={require("../../images/mobile-app2.png")} className="wow fadeInUp" data-wow-delay="0.9s" alt="image" /> */