import React, { Component } from 'react';
import Link from 'next/link';

class FeaturedCard extends Component {
    render() {
        return (
            <div id="features">
            <div className="featured-boxes-area bg-f7f7f7 ptb-100">
                <div className="container">
                <div className="section-title">
                        <h2>Features</h2>
                        <div className="bar"></div>
                        <p>Your decentralized finance hub.</p>
                    </div>
                    <div className="featured-boxes-inner">
                        <div className="row m-0">
                            <div className="col-lg-4 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-5c629e">
                                        <i className="fas fa-coins"></i>
                                    </div>

                                    <h3>NZO Staking</h3>
                                    <p>You can stake your NZO Tokens and earn pre-defined rewards based on the amount staked.</p>
                                    
                                    <Link href="/staking">
                                        <a className="read-more-btn">
                                            <i className="fas fa-coins pr-2"></i>Staking</a>
                                    </Link>
                                    
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-5c629e">
                                        <i className="fas fa-landmark"></i>
                                    </div>

                                    <h3>Nezo SAAS</h3>
                                    <p>Through a fully secure and audited smart contract, various projects can benefit from Nezo Staking Services.</p>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            <i className="far fa-clock pr-2"></i>Coming Soon</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-5c629e">
                                        <i className="fas fa-balance-scale"></i>
                                    </div>

                                    <h3>Nezo Escrow</h3>
                                    <p>P2P time/event-based, safe and secure transfers and payments through an automatically generated smart contract.</p>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            <i className="far fa-clock pr-2"></i>Coming Soon</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-5c629e">
                                        <i className="fas fa-exchange-alt"></i>
                                    </div>

                                    <h3>Nezo Lend</h3>
                                    <p>Investors can provide liquidity to varios pools by delegating their idle assets earn interest and NZO tokens.</p>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            <i className="far fa-clock pr-2"></i>Coming Soon</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-5c629e">
                                        <i className="fas fa-chart-bar"></i>
                                    </div>

                                    <h3>Nezo DEX</h3>
                                    <p>A non-custodial decentralized trading platform for crypto assets. Traders can place buy and sell orders at target prices.</p>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            <i className="far fa-clock pr-2"></i>Coming Soon</a>
                                    </Link>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-sm-6 col-md-6 p-0">
                                <div className="single-featured-box">
                                    <div className="icon color-5c629e">
                                       <i className="fas fa-rocket"></i>
                                    </div>

                                    <h3>Nezo Pad</h3>
                                    <p>You can run your token sale through a reliable low-cost solution, having full control over your OTC parameters.</p>

                                    <Link href="#">
                                        <a className="read-more-btn">
                                            <i className="far fa-clock pr-2"></i>Coming Soon</a>
                                    </Link>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default FeaturedCard;