import React, { Component } from 'react';
import FaqTextContent from './FaqTextContent';
import FaqContactForm from './FaqContactForm';

class FaqContentArea extends Component {
    render() {
        return (
            <div className="faq-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="faq-content">
                                <h2>Here we answer your questions</h2>
                                <div className="bar"></div>
                                <p>You can also get in touch with our team members through our social media chanels.</p>
                                <p>We will update website regulary to keep you informed about the upcoming changes and additions of each feature of Nezo Finance.</p>

                                <div className="faq-image">
                                    <img src={require("../../images/library-v1.png")} alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <FaqTextContent />
                        </div>
                        <div> <p> &nbsp;</p> </div>
                    </div>

                    <FaqContactForm />
                </div>
            </div>
        );
    }
}

export default FaqContentArea;