import React, { Component } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import Link from 'next/link';



const data = {
    responsive: true,
    cutoutPercentage: 50,
    maintainAspectRatio: true,
    borderWidth: 1,
    labels: [

      'Public Sale',
      'Team & Advisors',
      'Marketing & Bounty',
      'Development',
      'Staking Vault',
      'Nezo Finance Vault'
  ],
  datasets: [{
    fontSize: 12,


    data: [3500000, 1500000, 2000000, 2000000, 6000000, 3500000],
    borderWidth: 1,
    borderAlign: "center",
    fontFamily:  "Roboto, Sans-serif",
    backgroundColor: [
    '#28a745',
    '#6610f2',
    '#fd7e14',
    '#17a2b8',
    '#ffc107',
    '#20c997',
    ],

    hoverBorderWidth: 5,
    hoverBorderColor: "#28a745",
    hoverBackgroundColor: [
    '#28a745',
    '#28a745',
    '#28a745',
    '#28a745',
    '#28a745',
    '#28a745',
    ]
  }]
  };

  const options = {
    cutoutPercentage: 50,
    responsive: true,
    maintainAspectRatio: true,
    borderWidth: 1,

    tooltips: {
      mode: 'label',
      /*enabled: false,*/
    },

    elements: {
      line: {
        fill: false,
        lineTension: 0
      }
    },

    legend: {
      display: true,
      marginTop: "20",
      padding: "0",
      fontSize: "16",
      position: "bottom",
      fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      onClick: null,

    }
  };


  


class ServicesCard extends Component {
    render() {
        return (
            <React.Fragment>
                {/* Right Image Style */}
                <div className="services-area ptb-50 bg-f7f7f7">
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

                {/* Left Image Style */}
                <div className="services-area ptb-70">
                    <div className="container-fluid p-0">

                        <div className="overview-box">

                            
                            <div className="overview-image">
                                <div className="image">
                                    <img src={require("../../images/Chart-image.png")} alt="image" />
                                        <div className="circle-img">
                                            <img src={require("../../images/circle.png")} alt="image" />
                                    </div>
                                </div>
                            </div>

                            <div className="overview-content">
                                <div className="content">
                                
                                    <h2>Nezo Token</h2>
                                    <div className="bar"></div>
                                    <p>Nezo Finance runs on its native token, the Nezo Token (NZO). Every time NZO Token is spent as a fee, a small amount is burned to keep the system deflationary.
                                        Nezo Finance also uses a buyback scheme to increase the value of each NZO Token. NZO holders can benefit through various rewards systems. Top Holders
                                        (Tiers 1-3) of the NZO Token will also qualify for additional benefits. <a className="list" href="/token">View more</a>
                                    </p>

                                    <ul className="services-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                NZO is stakeable
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                Deflationary through burning
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                Scheduled token buybacks
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
                                                Multi-tiered reward systems
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                Discounts on Nezo DEX
                                            </span>
                                        </li>
                                    </ul>
                                    <div className= "services-area services-area-pt40">
                                        
                                        <h5>NZO Contract Address</h5>
                                        <a className="services-area services-area-pt40 contract-address" href="https://etherscan.io/token/0xc82d0773f4fc9d717a56280ad2c78ea09afcbc09" target="_blank">0xc82d0773f4fc9d717a56280ad2c78ea09afcbc09<i className="fas fa-external-link-alt pl-1"></i></a>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content">
                                    
                                    <h3>Token Information</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>

                                    <ul className="features-list">
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                Corporate Cards
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                International Payments
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                Automated accounting
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                Request Features
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                Premium Support
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className="flaticon-check-mark"></i>
                                                Direct Debit
                                            </span>
                                        </li>
                                    </ul>

                                    <Link href="#">
                                        <a className="btn nezo-btn">Apply Now</a>
                                    </Link>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                
                    
                    

                {/* Right Image Style */}
                <div className="services-area ptb-70 bg-f7f7f7">
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


export default ServicesCard;


/*

    <div className="nezo-content btn">
        <Link href="/token">
            <a className="btn nezo-btn ">
            <i className="fas fa-book-reader pr-2"></i>View More</a>
        </Link>
    </div>
    
*/
