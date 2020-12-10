import React, { Component } from 'react';
import Link from 'next/link';

class HomeContactArea extends Component {
    render() {
        return (
            <div className="account-create-area">
                <div className="container account-create-content">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2>Want to share your ideas?</h2>
                            <p>If you have an idea, we would love to hear about it.</p>
                        </div>

                        <div className="col-lg-4">
                            <div className="create-account">
                                <Link href="/contact">
                                    <a className="btn nezo-btn">
                                        <i className="fas fa-pencil-alt pr-2"></i>Get in touch</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeContactArea;
