import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Disclaimer from '../components/Disclaimer/Disclaimer'
import PageBannerContent from '../components/PageBannerContent/PageBannerContent';

class TermsOfUse extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Terms of Use" pageCaption="Nezo Finance by Nezo Global" />
                <Disclaimer />
                <Footer />
            </React.Fragment>
        );
    }
}

export default TermsOfUse;
