import React, { Component } from 'react';
import 'isomorphic-fetch';

class ContactForm extends Component {

    state = {
        submitting: false,
        submitted: false,
        buttonState: '',
        formFields: {
            name: '',
            email: '',
            subject: '',
            phone: '',
            text: ''
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const data = this.state.formFields;
        const respons = fetch('/api/contact', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => {
            console.log(res.data);
            res.status === 200 ? this.setState({ submitted: true }) : ''
            let formFields = Object.assign({}, this.state.formFields);
            formFields.name = '';
            formFields.email = '';
            formFields.phone = '';
            formFields.subject = '';
            formFields.text = '';
            this.setState({formFields});
        });

        console.log('respons', respons)
    }


    nameChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.name = e.target.value;
        this.setState({formFields});
    }

    emailChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.email = e.target.value;
        this.setState({formFields});
    }

    phoneChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.phone = e.target.value;
        this.setState({formFields});
    }

    subjectChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.subject = e.target.value;
        this.setState({formFields});
    }

    textChangeHandler = (e) => {
        let formFields = Object.assign({}, this.state.formFields);
        formFields.text = e.target.value;
        this.setState({formFields});
    }

    onHideSuccess = () => {
        this.setState({submitted: false});
    }

    successMessage = () => {
        if (this.state.submitted){
            return (
                <div className="alert alert-success">
                    <strong>Thank you!</strong> Your message was sent.
                    <button onClick={this.onHideSuccess} type="button" className="close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="contact-form">
                <form
                    id="contactForm"
                    onSubmit={this.onSubmit}
                >
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    required data-error="Please enter your name"
                                    placeholder="Name"
                                    value={this.state.formFields.name}
                                    onChange={this.nameChangeHandler}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    required
                                    data-error="Please enter your email"
                                    placeholder="Email"
                                    value={this.state.formFields.email}
                                    onChange={this.emailChangeHandler}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="phone"
                                    className="form-control"
                                    placeholder="Phone"
                                    value={this.state.formFields.phone}
                                    onChange={this.phoneChangeHandler}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-control"
                                    placeholder="Subject"
                                    value={this.state.formFields.subject}
                                    onChange={this.subjectChangeHandler}
                                />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    className="form-control"
                                    id="message"
                                    cols="30"
                                    rows="6"
                                    required
                                    data-error="Write your message"
                                    placeholder="Your Message"
                                    value={this.state.formFields.text}
                                    onChange={this.textChangeHandler}
                                />
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <button type="submit" className="btn nezo-btn"> <i className="fas fa-paper-plane pr-2"></i>Send Message</button>
                        </div>
                    </div>
                    {this.successMessage()}
                </form>
            </div>
        );
    }
}

export default ContactForm;
