import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="#">
                                        <a><img src={require("../../images/nezo-logo-white.png")} alt="logo" /></a>
                                    </Link>
                                    <p>v1.0.0</p>
                                </div>
                                
                                <ul className="social-links">
                                    <li>
                                        <Link href="https://twitter.com/NezoFinance">
                                            <a target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.linkedin.com/company/nezo-finance">
                                            <a target="_blank">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://t.me/Nezo_Finance">
                                            <a target="_blank">
                                                <i className="fab fa-telegram-plane"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://discord.com/channels/755350966559309834/">
                                            <a target="_blank">
                                                <i className="fab fa-discord"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://github.com/NezoGlobal/NezoFinance">
                                            <a target="_blank">
                                                <i className="fab fa-github"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Ecosystem</h3>
                                
                                <ul className="list">
                                    <li>
                                        <Link href="/about-us">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="../#features">
                                            <a>Features</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/staking">
                                            <a>Fees</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>
                                
                                <ul className="list">
                                    <li>
                                        <Link href="/faq">
                                            <a>FAQ's</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/disclaimer">
                                            <a>Disclaimer</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Contact</h3>
                                
                                <ul className="footer-contact-info">
                                    <li>
                                        <span className="mr-1">Location:</span> 
                                        27 Old Gloucester St, London, UK WC1N 3AX
                                    </li>
                                    <li>
                                        <span className="mr-1">Email:</span> 
                                        hello@nezoglobal.com
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="copyright-area">
                        <p>© {currentYear} Nezo Global - All rights Reserved.</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;