import React, { Component } from 'react';
import Link from 'next/link';

class OurFeaturesContent extends Component {
    render() {
        return (
            <section className="features-area ptb-70 bg-f7f7f7">
                <div className="container">
                    <div className="section-title">
                        <h2>Your DeFi Hub</h2>
                        <div className="bar"></div>
                        <p>Nezo Finance users can look forward to an easier and faster access to essential DeFi services, all working together under one platform.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-5c629e">
                                     <i className="fas fa-coins"></i>
                                </div>

                                <h3>Simple and secure staking</h3>
                                <p>Nezo Staking is designed to be as simple as possible, backed by a fully secure and audited smart contract.</p>
                            </div>

                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-5c629e">
                                <i className="fas fa-university"></i>
                                </div>

                                <h3>Reliable SAAS solution</h3>
                                <p>Nezo SAAS provides start-ups the benefits of a staking solution without having to build it themselves.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-5c629e">
                                    <i className="fas fa-exchange-alt"></i>
                                </div>

                                <h3>Crypto-backed lending</h3>
                                <p>Nezo Lending matches lenders and borrowers according to their preferred collateralized asset and interest rates.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-5c629e">
                                    <i className="fas fa-chart-bar"></i>
                                </div>

                                <h3>Non-custodial decentralized exchange</h3>
                                <p>Nezo DEX features margin trading, limit orders, and more importantly, faster transactions and lower fees.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-5c629e">
                                    <i className="fas fa-balance-scale"></i>
                                </div>

                                <h3>Time and event-based contracts</h3>
                                <p>Nezo Escrow offers parties a way to securely enter into trustless, fully customizable agreements.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 col-md-6">
                            <div className="single-features-box">
                                <div className="icon bg-5c629e">
                                    <i className="fas fa-rocket"></i>
                                </div>

                                <h3>Low-cost Launchpad</h3>
                                <p>Nezo Pad is a reliable low-cost solution for new projects to open up their token sale rounds to thousands of potential investors.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurFeaturesContent;