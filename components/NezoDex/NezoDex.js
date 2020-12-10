import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow'

class NezoDex extends Component {
    render() {
        return (
            <section className="invoicing-area ptb-70 nezo-dex-mtb-30">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="invoicing-content">
                                <h2>Nezo DEX</h2>
                                <div className="bar"></div>
                                <p>Nezo DEX is a non-custodial decentralized exchange for crypto assets that aggregates liquidity from centralized and decentralized exchanges.</p>
                                <p>The platform will boast fast transactions, low fees, and will allow limit orders and margin trading, among its many other features. More details about Nezo DEX will be revealed closer to its release.</p>
                                    <Link href="/coming-soon">
                                        <a className="btn btn-primary">
                                            <i className="far fa-chart-bar pr-2"></i>Launch</a>
                                    </Link>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="invoicing-image">
                                <div className="main-image">
                                    <ReactWOW delay='0.7s' animation='zoomIn'>
                                        <img src={require("../../images/invoicing-image/exchange_home_sm.png")} alt="image" />
                                    </ReactWOW>
                                </div>

                                <div className="main-mobile-image">
                                    <ReactWOW delay='0.7s' animation='zoomIn'>
                                        <img src={require("../../images/invoicing-image/exchange_home_sm.png")} alt="image" />
                                    </ReactWOW>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default NezoDex;

/*  ========== Coin animation ============
<div className="circle-image">
    <img src={require("../../images/banner-image/Nezo_Coin_sm.png")} alt="image" />
    <img src={require("../../images/banner-image/Nezo_Coin_sm.png")} alt="image" />
</div>
========================================*/