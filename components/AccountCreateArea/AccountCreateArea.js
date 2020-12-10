import React, { Component } from 'react';
import Link from 'next/link';

class AccountCreateArea extends Component {
    render() {
        return (
            <div className="account-create-area">
                <div className="container account-create-content">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2>Designed with simplicity in mind</h2>
                            <p>Staking will be available soon.</p>
                        </div>

                        <div className="col-lg-4">
                            <div className="create-account">
                                    <Link href="/staking">
                                        <a className="btn nezo-btn">
                                            <i className="fas fa-poll pr-2"></i>View pools</a>
                                    </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountCreateArea;
