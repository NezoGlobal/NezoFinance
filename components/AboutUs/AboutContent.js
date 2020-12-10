import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class AboutContent extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <div className="about-area ptb-50">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                
                                <span>Building quality products</span>
                                <h2>Driven by ambition</h2>
                                
                                <p>Founded in 2020, Nezo Finance aims to open up the opportunities presented by decentralized finance to a wider range of individuals. Comprised of experts from different backgrounds, all with a genuine passion for blockchain, our goal is to help bring this technology closer to global adoption.</p>
                                <p> Nezo Finance platform allows investors to easily and intuitively access DeFi products, get involved in the movement, and find their part in the future of decentralized finance.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                        <div className="app-image ptb-100">
                                <div className="main-image">
                                    <img src={require("../../images/library-v1.png")} className="wow fadeInLeft" data-wow-delay="0.6s" alt="image" />
                                    
                                </div>

                                <div className="main-mobile-image">
                                    <img src={require("../../images/library-v1.png")} className="wow fadeInUp" data-wow-delay="0.6s" alt="image" />
                                </div>

                                <div className="circle-img">
                                    <img src={require("../../images/circle_sm.png")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default AboutContent;

