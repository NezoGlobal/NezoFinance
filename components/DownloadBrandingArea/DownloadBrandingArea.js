import React, { Component } from 'react';
import Link from 'next/link';

class DownloadBrandingArea extends Component {
    render() {
        return (
            <div id="branding-set">
            <div className="account-create-area">

                    <div className="container account-create-content">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <h2>Nezo Finance branding assets</h2>
                                <p>Includes our logos and other branding samples.</p>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="create-account">
                                    <Link href="https://github.com/NezoGlobal/NezoFinance/raw/master/Branding/Nezo-Finance-Branding-Kit.rar" >
                                        <a target="_blank" className="btn btn-primary"><i className="fas fa-download pr-2"></i>Download</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DownloadBrandingArea;

