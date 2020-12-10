import React, { Component } from 'react';
import Link from 'next/link';


class TiersCard extends Component {
    render() {
        return (

            <div className="pricing-area ptb-70">
                <div className="container">
                    <div className="row justify-content-center">



                    <div className="container">

                    <div className="section-title">
                            <h2>Top 3 Tier Holders</h2>
                            <div className="bar"></div>
                        </div>
                    </div>

                        <div className="col-sm-3 col-sm-3">
                            <div className="tiers-box">

                                <div className="tiers-header">
                                <div className="icon bg-5c629e">
                                     <i className="fas fa-trophy icon bg-00a651"></i>
                                     </div>
                                    <h2>Tier 1</h2>
                                </div>

                                <div className="tiers">
                                    <span className="symbol"></span> 50.000  <span>  (NZO) </span>
                                </div>

                                <ul className="tiers-features">
                                    <li>
                                        Nezo Pad 24h early access
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                        Bonus rewards from fees 6%
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                        Nezo Dex discount 20%
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                        Own UI
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                         More will be added soon
                                        <i className="fas fa-check"></i>
                                    </li>
                                </ul>

                                <div className="buy-btn">
                                    <Link href="https://app.uniswap.org/#/swap?outputCurrency=0xc82d0773f4fc9d717a56280ad2c78ea09afcbc09">
                                        <a target="_blank" className="btn nezo-btn">Buy NZO</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 col-sm-3 offset-lg-0 offset-md-3">
                            <div className="tiers-box">
                                <div className="tiers-header">
                                <div className="icon bg-5c629e">
                                     <i className="fas fa-trophy icon bg-00a651"></i>
                                     </div>
                                    <h2>Tier 2</h2>
                                </div>

                                <div className="tiers">
                                    <span className="symbol"></span> 20.000 <span> (NZO) </span>
                                </div>

                                <ul className="tiers-features">
                                    <li>
                                        Nezo Pad 24h early access
                                        <i className="fas fa-ban"></i>
                                    </li>
                                    <li>
                                        Bonus rewards from fees 6%
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                        Nezo Dex discount 15%
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                        Own UI
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                        More will be added soon
                                        <i className="fas fa-check"></i>
                                    </li>
                                </ul>

                                <div className="buy-btn">
                                    <Link href="https://app.uniswap.org/#/swap?outputCurrency=0xc82d0773f4fc9d717a56280ad2c78ea09afcbc09">
                                        <a target="_blank" className="btn nezo-btn">Buy NZO</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-3 col-sm-3">
                            <div className="tiers-box">
                                <div className="tiers-header">
                                <div className="icon bg-5c629e">
                                     <i className="fas fa-trophy icon bg-00a651"></i>
                                     </div>
                                    <h2>Tier 3</h2>
                                </div>

                                <div className="tiers">
                                    <span className="symbol"></span> 10.000 <span> (NZO) </span>
                                </div>

                                <ul className="tiers-features">
                                    <li>
                                        Nezo Pad 24h early access
                                        <i className="fas fa-ban  icon bg-eb6b3d"></i>
                                    </li>
                                    <li>
                                        Bonus rewards from fees 6%
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                        Nezo Dex discount 10%
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                        Own UI
                                        <i className="fas fa-check"></i>
                                    </li>
                                    <li>
                                        More will be added soon
                                        <i className="fas fa-check"></i>
                                    </li>
                                </ul>

                                <div className="buy-btn">
                                    <Link href="https://app.uniswap.org/#/swap?outputCurrency=0xc82d0773f4fc9d717a56280ad2c78ea09afcbc09">
                                        <a target="_blank" className="btn nezo-btn">Buy NZO</a>
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

export default TiersCard;


/*<li>
Demo List
<i className="fa fa-ban"></i>
</li> */
