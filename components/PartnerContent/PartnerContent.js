import React, { Component } from 'react';
import Link from 'next/link';

class PartnerContent extends Component {
    render() {
        return (
            <div className="partner-area ptb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Our trusted partners</h2>
                        <div className="bar"></div>
                        <p>Nezo Finance is open for new partnerships.​</p>
                    </div>

                    <div className="partner-inner ptb-20">
                        <div className="row align-items-center">
                            <div className="single-partner-item">
                                <Link href="https://nezoglobal.com/">                                
                                    <a>
                                        <img src={require("../../images/partner-image/NezoGlobal_sm.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/NezoGlobal.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="https://cryptonics.consulting/">
                                    <a>
                                        <img src={require("../../images/partner-image/Cryptonics_sm.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/Cryptonics.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="https://www.linkedin.com/in/yegor-gusakov-918ab413a/">
                                    <a>
                                        <img src={require("../../images/partner-image/QIT_sm.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/QIT.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/Nezo_default_sm.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/Nezo_default.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            <div className="single-partner-item">
                                <Link href="#">
                                    <a>
                                        <img src={require("../../images/partner-image/Nezo_default_sm.png")} alt="Partner" />
                                        <img src={require("../../images/partner-image/Nezo_default.png")} alt="Partner" />
                                    </a>
                                </Link>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PartnerContent;