import React, { Component } from 'react';
import Link from 'next/link';

class JobsApplyAbout extends Component {
    render() {
        return (
            <div className="account-create-area">
                <div className="container account-create-content">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2>Join our growing team of experts</h2>
                            <p>Do you think you have what it takes to bring value to our project?</p>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="create-account">
                            <Link href="/jobs">
                                <a className="btn btn-primary">
                                <i className="fas fa-users pr-2"></i>Join Now</a>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobsApplyAbout;




