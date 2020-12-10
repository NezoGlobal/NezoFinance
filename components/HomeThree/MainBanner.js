import React, { Component } from 'react';
import Link from 'next/link';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner-section">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12">
                                    <div className="banner-content">
                                        <h1>Easy, fee-free banking for entrepreneurs</h1>
                                        <p>Get the financial tools and insights to start, build, and grow your business.</p>
                                        <Link href="#">
                                            <a className="btn btn-primary">Learn More</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-12">
                                    <div className="money-transfer-form">
                                        <form>
                                            <div className="form-group">
                                                <label>You Send</label>
                                                <div className="money-transfer-field">
                                                    <input type="text" className="form-control" placeholder="1,000" />
                                                    <div className="amount-currency-select">
                                                        <i className="fas fa-chevron-down"></i>
                                                        <select>
                                                            <option>USD</option>
                                                            <option>EUR</option>
                                                            <option>GBP</option>
                                                            <option>BRL</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="currency-info">
                                                <div className="bar"></div>
                                                <span><strong>62.3</strong> Exchange Rate</span>
                                                <span><strong>$4.50</strong> Transition Fees</span>
                                            </div>

                                            <div className="form-group">
                                                <label>Recipient gets</label>
                                                <div className="money-transfer-field">
                                                    <input type="text" className="form-control" placeholder="1,000" />
                                                    <div className="amount-currency-select">
                                                        <i className="fas fa-chevron-down"></i>
                                                        <select>
                                                            <option>USD</option>
                                                            <option>EUR</option>
                                                            <option>GBP</option>
                                                            <option>BRL</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="money-transfer-info">
                                                <span>You could save vs banks <strong>1,010.32 USD</strong></span>
                                            </div>

                                            <button type="submit" className="btn btn-primary">Get Started</button>

                                            <div className="terms-info">
                                                <p>By clicking continue, I agree with <Link href="#"><a>Terms & Policy</a></Link></p>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainBanner;