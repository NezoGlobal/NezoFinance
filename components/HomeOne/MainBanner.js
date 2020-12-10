/*col-lg-7 col-md-12 p-0 banner image position*/

import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow'


class MainBanner extends Component {


    state = {
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    };

    commingSoonTime = () => {
        let endTime = new Date("December 20, 2020 17:00:00 UTC");
        let endTimeParse = (Date.parse(endTime)) / 1000;
        let now = new Date();
        let nowParse = (Date.parse(now) / 1000);
        let timeLeft = endTimeParse - nowParse;
        let days = Math.floor(timeLeft / 86400); 
        let hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
        this.setState({
            days, hours, minutes, seconds
        });
    }

    componentDidMount(){
        this.myInterval = setInterval(() => { 
            this.commingSoonTime();
        }, 1000);
    };

    componentWillUnmount() {
        clearInterval(this.myInterval);
    };

    onSubmit = e => {
        e.preventDefault();
    };

    render() {
        return (
            <React.Fragment>

                <div className="services-area">
                <div className="banner-section-home">
                    <div className="container-fluid p-0">
                        <div className="overview-box">
                            <div className="overview-content">
                                <div className="content left-content">
                                    <h1>Nezo Finance</h1>
                                    <p>The all-in-one DeFi ecosystem with multiple highly demanded features from one interface.</p>
                                    <Link href="#about">
                                        <a className="btn nezo-btn">
                                            <i className="fas fa-rocket pr-2"></i>Get started</a>
                                    </Link>
                                    <div className='pt-70'>
                                        <h4>Pre-sale starting in:</h4>
                                            <div id="timer">
                                            <div id="days">{this.state.days} <span>Days</span></div>
                                            <div id="hours">{this.state.hours} <span>Hours</span></div>
                                            <div id="minutes">{this.state.minutes} <span>Minutes</span></div>
                                            <div id="seconds">{this.state.seconds} <span>Seconds</span></div>
                                            </div>
                                        
                                    </div>
                                </div>
                            </div>

                                    <div className="overview-image-banner">
                                        <div className="hero-image">
                                        <div className="main-image">
                                        <div className="image">
                                            <img src={require("../../images/banner-image/Banner_image_2.png")} alt="image" />
                                        </div>
                                        </div>
                                            <div className="main-mobile-image">
                                                <ReactWOW delay='0.7s' animation='fadeInUp'>
                                                    <img src={require("../../images/banner-image/Banner_image_mobile.png")} alt="image" />
                                                </ReactWOW>
                                            </div>

                                        <div className="circle-image">
                                            <ReactWOW delay='1s' animation='fadeInUp'>
                                                <img src={require("../../images/banner-image/Nezo_Finance_coin_banner.png")} alt="image" />
                                        </ReactWOW>
                                    
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

export default MainBanner;


