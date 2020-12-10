import React, { Component } from 'react';
import Link from 'next/link';

class TokenFAQArea extends Component {
    render() {
        return (
            <div className="account-create-area">
                <div className="container account-create-content">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2>Frequently Asked Questions </h2>
                            <p>Answers to our most commonly asked questions</p>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="create-account">
                                <Link href="/faq">
                                    <a className="btn btn-primary">
                                        <i className="fas fa-question pr-2"></i>View FAQ</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TokenFAQArea;