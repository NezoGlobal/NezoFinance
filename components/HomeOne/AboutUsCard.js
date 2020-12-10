import React, { Component } from 'react';
import Link from 'next/link';

class AboutUsCard extends Component {
    render() {
        return (
            
            <section className="aboutus-area ptb-70 pt-0">
                <div id="about">
                    <div className="container">
                        <div className="section-title">
                            <h2>About us</h2>
                            <div className="bar"></div>
                                </div>
                                    <div className="container">
                                        <div className="row justify-content-md-center">                                           
                                            <div>
                                                <p>Founded in 2020, Nezo Finance aims to open up the opportunities presented by decentralized
                                                finance to a wider range of individuals. Comprised of experts from different backgrounds—all with
                                                a genuine passion for blockchain—our goal is to help bring this technology closer to global adoption
                                                by providing a platform that allows investors to easily and intuitively access DeFi products, get involved in the 
                                                movement, and find their part in the future of decentralized finance.</p>                                             
                                            </div>
                                        </div>
                                    </div>

                                <div className="container">
                                    <div className="btn-box1">
                                        <Link href="/about-us">
                                            <a className="btn btn-about btn-primary">
                                                <i className="fas fa-book-reader pr-2"></i>View More</a>
                                        </Link>

                                        <Link href="/coming-soon">
                                            <a className="btn btn-about btn-primary">
                                                <i className="fas fa-file-alt pr-2"></i>Whitepaper</a>
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        );
    }
}

export default AboutUsCard;