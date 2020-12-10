import React, { Component } from 'react';

class HowItWorks extends Component {
    render() {
        return (
            <section className="how-it-works-area ptb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>How It's Works</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <img src={require("../../images/how-it-works-image/1.png")} alt="image" />
                                <h3>1. Register for free</h3>
                                <p>Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <img src={require("../../images/how-it-works-image/2.png")} alt="image" />
                                <h3>2. Choose an amount to send</h3>
                                <p>Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <img src={require("../../images/how-it-works-image/3.png")} alt="image" />
                                <h3>3. Add recipient’s bank details</h3>
                                <p>Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <img src={require("../../images/how-it-works-image/4.png")} alt="image" />
                                <h3>4. Verify your identity</h3>
                                <p>Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <img src={require("../../images/how-it-works-image/5.png")} alt="image" />
                                <h3>5. Pay for your transfer</h3>
                                <p>Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-how-it-works">
                                <img src={require("../../images/how-it-works-image/6.png")} alt="image" />
                                <h3>6. That’s it</h3>
                                <p>Ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel adipiscing aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HowItWorks;