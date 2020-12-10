import React, { Component } from 'react';
import JobsTextContent from './JobsTextContent';
import JobsContactForm from './JobsContactForm';

class JobsContentArea extends Component {
    render() {
        return (
            <div className="faq-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-12">
                            <div className="faq-content">
                                <h2>Join our team</h2>
                                <div className="bar"></div>
                                <p>We are constantly looking to expand our team with driven and talented people from all over the world.</p>
                                <p>If you are a freelancer looking for new opportunities, or a small company looking for partnerships, we are open to building solid and valuable partnerships. You can send us your proposal to partners@nezofinance.com and one of our team members will get in touch with you shortly.</p>

                                <div className="faq-image">
                                    <img src={require("../../images/Jobs_image.png")} alt="image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <JobsTextContent />
                        </div>
                        <div> <p> &nbsp;</p> </div>
                    </div>

                    <JobsContactForm />
                </div>
            </div>
        );
    }
}

export default JobsContentArea;