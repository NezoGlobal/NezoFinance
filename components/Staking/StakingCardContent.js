import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import Link from 'next/link';



class StakingCardContent extends Component {
    render() {
        return (
            <React.Fragment>          

                <div className="services-area ptb-110 mb-80">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content left-content">
                                    <h2>Designed with simplicity</h2>
                                    <div className="bar"></div>
                                    <p>Stake holders can stake their NZO Tokens and earn pre-defined rewards based on the amount staked, in a simple and secure way through a fully secure and audited smart contract. Staking through Nezo Finance was designed to be as simple as possible. Staked tokens will reduce the available circulating supply thus increasing the value of each NZO Token based on supply and demand metrics.</p>


                                </div>
                            </div>

                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/staking_img.png")} alt="image" />
                                    <div className="circle-img">
                                        <img src={require("../../images/circle_sm.png")} alt="image" />
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


export default StakingCardContent;