import React, { Component } from 'react';
import ContentTabsCard from '../ContentTabsCard/ContentTabsCard'

class TokenCard extends Component {
    render() {
        return (
            <React.Fragment>
                

                    {/* Left Image Style */}
                        <div className="services-area ptb-20">
                            <ContentTabsCard />
                        </div>

                {/* Right Image Style */}
                <div className="services-area ptb-70">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content left-content">
                                    <h2>Nezo Staking</h2>
                                    <div className="bar"></div>
                                    <p>Stake holders can stake their NZO Tokens and earn pre-defined rewards based on the amount staked, in a simple and secure way through a fully secure and audited smart contract. Staking through Nezo Finance was designed to be as simple as possible. Staked tokens will reduce the available circulating supply thus increasing the value of each NZO Token based on supply and demand metrics.</p>

                                    <ul className="services-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                Up to 85% ROI
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                4 Staking pools available
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                0% - 15% Unstaking Fee
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                Redistributed Fees
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                Weekly rewards
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                Audited smart contracts
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/Staking_image_sm.png")} alt="image" />
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

export default TokenCard;
