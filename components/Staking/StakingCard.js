import React, { Component } from 'react';
import Link from 'next/link';
import StakingCardContent from '../Staking/StakingCardContent';

class StakingCard extends Component {
    render() {
        return (       
            
            <div className="pricing-area ptb-70">
                <div className="container">
                    <div className="row">

                    <StakingCardContent />

                    <div className="container">

                    <div className="section-title">
                            <h2>Staking Pools</h2>
                            <div className="bar"></div>
                        </div>
                    </div>

                        <div className="col-sm-3 col-sm-3">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <h3>Standard Pool</h3>
                                    <p>30 Days maturity period</p>
                                </div>

                                <div className="price">
                                    <span className="symbol"></span> 30% <span> ROI </span>
                                </div>
 
                                <ul className="pricing-features">
                                    <li>
                                        Pool size 2mil NZO 
                                        <i className="fas fa-check"></i> 
                                    </li>
                                    <li>
                                        30% ROI 
                                        <i className="fas fa-check"></i> 
                                    </li>
                                    <li>
                                        Maturity period 30 days 
                                        <i className="fas fa-check"></i> 
                                    </li>
                                    <li>
                                        Daily rewards 
                                        <i className="fa fa-check"></i>
                                    </li>
                                    <li>
                                        Unstaking Fee 0% 
                                        <i className="fa fa-check"></i>
                                    </li>

                                </ul>

                                <div className="buy-btn">
                                    <Link href="/coming-soon">
                                        <a className="btn btn-primary">Delegate</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 col-sm-3">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <h3>Bronze Pool</h3>
                                    <p>90 Days maturity period</p>
                                </div>

                                <div className="price">
                                    <span className="symbol"></span> 40% <span> ROI </span>
                                </div>
 
                                <ul className="pricing-features">
                                    <li>
                                        Pool size 1.5mil NZO 
                                        <i className="fas fa-check"></i> 
                                    </li>
                                    <li>
                                        40% ROI
                                        <i className="fas fa-check"></i> 
                                    </li>
                                    <li>
                                        Maturity period 90 days
                                        <i className="fas fa-check"></i> 
                                    </li>
                                    <li>
                                        Daily rewards 
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                        Unstaking Fee 5% 
                                        <i className="fas fa-check"></i>
                                    </li>

                                </ul>

                                <div className="buy-btn">
                                    <Link href="/coming-soon">
                                        <a className="btn btn-primary">Delegate</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 col-sm-3 offset-lg-0 offset-md-3">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <h3>Silver Pool</h3>
                                    <p>180 Days maturity period</p>
                                </div>

                                <div className="price">
                                    <span className="symbol"></span> 60% <span> ROI </span>
                                </div>

                                <ul className="pricing-features">
                                    <li>
                                        Pool size 1mil NZO  
                                        <i className="fas fa-check"></i> 
                                    </li>
                                    <li>
                                        60% ROI 
                                        <i className="fas fa-check"></i> 
                                    </li>
                                    <li>
                                        Maturity period 180 days 
                                        <i className="fas fa-check"></i> 
                                    </li>
                                    <li>
                                        Daily rewards 
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                        Unstaking Fee 10% 
                                        <i className="fas fa-check"></i>
                                    </li>

                                </ul>

                                <div className="buy-btn">
                                    <Link href="/coming-soon">
                                        <a className="btn btn-primary">Delegate</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 col-sm-3">
                            <div className="single-pricing-box active">
                                <div className="pricing-header">
                                    <h3>Diamond Pool</h3>
                                    <p>365 Days maturity period</p>
                                </div>

                                <div className="price">
                                    <span className="symbol"></span> 85% <span>ROI</span>
                                </div>
 
                                <ul className="pricing-features">
                                    <li>
                                        Pool size 500k NZO 
                                        <i className="fas fa-check"></i> 
                                    </li>
                                    <li>
                                        85% ROI
                                        <i className="fas fa-check"></i> 
                                    </li>
                                    <li>
                                        Maturity period 365 days
                                        <i className="fas fa-check"></i> 
                                    </li>
                                    <li>
                                        Daily rewards 
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                        Unstaking Fee 15% 
                                        <i className="fas fa-check"></i>
                                    </li>

                                </ul>

                                <div className="buy-btn">
                                    <Link href="/coming-soon">
                                        <a className="btn btn-primary">Delegate</a>
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

export default StakingCard;


/*<li>
Demo List 
<i className="fa fa-ban"></i>
</li> */