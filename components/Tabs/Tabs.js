import React, { Component } from 'react';

class Tabs extends Component {
    
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
            <section className="tab-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Outstanding Digital Experience</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <div className="bar"></div>
                    </div>

                    <div className="tab schedule-list-tab">
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <span>
                                    <i className="flaticon-analysis"></i>
                                    Real-Time Analytics
                                </span>
                            </li>
                            
                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <span>
                                    <i className="flaticon-optimize"></i>
                                    Pay-Per-Click
                                </span>
                            </li>
                            
                            <li
                                onClick={(e) => this.openTabSection(e, 'tab3')}
                            >
                                <span>
                                    <i className="flaticon-software"></i>
                                    Online Marketing
                                </span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab4')}
                            >
                                <span>
                                    <i className="flaticon-internet"></i>
                                    Email Marketing
                                </span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab5')}
                            >
                                <span>
                                    <i className="flaticon-data"></i>
                                    Social Marketing
                                </span>
                            </li>
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tab-content">
                                            <h3>Real-Time Analytics</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Super Responsive</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>High Security</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Optimal Choice</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="tab-image">
                                            <img src={require("../../images/Staking_image.png")} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tab-content">
                                            <h3>Pay-Per-Click</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Super Responsive</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>High Security</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Optimal Choice</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="tab-image">
                                            <img src={require("../../images/Staking_image.png")} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab3" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tab-content">
                                            <h3>Online Marketing</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Super Responsive</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>High Security</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Optimal Choice</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="tab-image">
                                            <img src={require("../../images/Staking_image.png")} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab4" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tab-content">
                                            <h3>Email Marketing</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Super Responsive</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>High Security</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Optimal Choice</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="tab-image">
                                            <img src={require("../../images/Staking_image.png")} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab5" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="tab-content">
                                            <h3>Social Marketing</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan facilisis.</p>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Super Responsive</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>High Security</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>

                                            <div className="tab-inner-content">
                                                <div className="icon">
                                                    <i className="flaticon-tick"></i>
                                                    <h3>Optimal Choice</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="tab-image">
                                            <img src={require("../../images/Staking_image.png")} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Tabs;