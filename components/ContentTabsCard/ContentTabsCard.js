import React, { Component } from 'react';
import Link from 'next/link';
import TiersTabTable from '../TiersTabsTable/TiersTabsTable'

class ContentTabsCard extends Component {

    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
        <React.Fragment>
            <div className="services-area ptb-50">
                <div className="container-fluid p-0">
                    <div className="overview-box ">
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
                            <div className="about-tab">
                                <h2>Nezo Token</h2>
                                <div className="bar"></div>
                                <p>Nezo Finance runs on its native token, the Nezo Token. Every time NZO Token is spent as a fee, a small amount is burned to keep the system deflationary.
                                    Nezo Finance also uses a buyback scheme to increase the value of each NZO Token.</p>

                                <div className="tab about-list-tab">
                                    {/* Tabs Nav */}
                                    <ul className="tabs">
                                        <li
                                            className="current"
                                            onClick={(e) => this.openTabSection(e, 'tab1')}
                                        >
                                            <span><i className="fas fa-info pr-2"></i>Info</span>
                                        </li>

                                        <li
                                            onClick={(e) => this.openTabSection(e, 'tab2')}
                                        >

                                            <span><i className="fas fa-trophy pr-2"></i>Tiers</span>
                                        </li>

                                        <li
                                            onClick={(e) => this.openTabSection(e, 'tab3')}
                                        >
                                            <span><i className="fas fa-coins pr-2"></i>Utility</span>
                                        </li>
                                    </ul>

                                    {/* Tab content */}
                                    <div className="tab_content">
                                        {/* Tabs item */}
                                        <div id="tab1" className="tabs_item">
                                            <div className="text">
                                                <h3>Nezo Token Distribution</h3>
                                                <span> <p> Total Supply - 20mil NZO </p> </span>
                                            </div>

                                            <ul className="list ptb-30">
                                                <li>
                                                    <i className="fas fa-square color-57689b"></i>
                                                    Public Sale 25% (5m)
                                                </li>
                                                <li>
                                                    <i className="fas fa-square color-8ab0dd"></i>
                                                    Team & Advisors 7.5% (1.5m)
                                                </li>
                                                <li>
                                                    <i className="fas fa-square color-677bb6"></i>
                                                    Marketing & Bounty 10% (2m)
                                                </li>
                                                <li>
                                                    <i className="fas fa-square color-98c2f4"></i>
                                                    Nezo Vault 22.5% (4.5m)
                                                </li>
                                                <li>
                                                    <i className="fas fa-square color-7395c6"></i>
                                                    Development 10% (2m)
                                                </li>
                                                <li>
                                                    <i className="fas fa-square color-b2d6f9"></i>
                                                    Staking Vault 25% (5m)
                                                </li>

                                            </ul>

                                                <div className= "services-area">
                                                    <h6>NZO Contract Address</h6>
                                                    <a className="services-area services-area-pt40 contract-address" href="https://etherscan.io/token/0xc82d0773f4fc9d717a56280ad2c78ea09afcbc09" target="_blank">0xc82d0773f4fc9d717a56280ad2c78ea09afcbc09<i className="fas fa-external-link-alt pl-1"></i></a>
                                                </div>

                                        <div className="btn-mt-0">
                                            <Link href="/token">
                                                <a className="btn btn-med nezo-btn">Discover More</a>
                                            </Link>
                                            </div>
                                        </div>

                                        {/* Tabs item */}
                                        <div id="tab2" className="tabs_item">
                                            <div className="text">
                                                    <h3>Tier holders benefits</h3>
                                                <span><p>Multiple revenue streams</p></span>
                                            </div>

                                            <TiersTabTable />



                                            <div className="btn-mt-0">
                                            <Link href="/token">
                                                <a className="btn btn-med  nezo-btn">Discover More</a>
                                            </Link>
                                            </div>


                                        </div>

                                        {/* Tabs item */}
                                        <div id="tab3" className="tabs_item">
                                            <div className="text">
                                                <h3>Nezo Token utility</h3>
                                                <span><p>Multiple revenue streams</p></span>
                                            </div>

                                            <ul className="list ptb-30">
                                                <li>
                                                    <i className="fas fa-square color-57689b"></i>
                                                    Public Sale 25% (5m)
                                                </li>
                                                <li>
                                                    <i className="fas fa-square color-8ab0dd"></i>
                                                    Team & Advisors 7.5% (1.5m)
                                                </li>
                                                <li>
                                                    <i className="fas fa-square color-677bb6"></i>
                                                    Marketing & Bounty 10% (2m)
                                                </li>
                                                <li>
                                                    <i className="fas fa-square color-98c2f4"></i>
                                                    Nezo Vault 22.5% (4.5m)
                                                </li>
                                                <li>
                                                    <i className="fas fa-square color-7395c6"></i>
                                                    Development 10% (2m)
                                                </li>
                                                <li>
                                                    <i className="fas fa-square color-b2d6f9"></i>
                                                    Staking Vault 25% (5m)
                                                </li>

                                            </ul>




                                            <div className="btn-mt-0">
                                            <Link href="/token">
                                                <a className="btn btn-med nezo-btn">Discover More</a>
                                            </Link>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
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

export default ContentTabsCard;
