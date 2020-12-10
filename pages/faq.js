import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/PageBannerContent/PageBannerContent';
import FaqContentArea from '../components/Faq/FaqContentArea';
import HomeContactArea from '../components/HomeContactArea/HomeContactArea';
import Footer from '../components/Layouts/Footer';

class Faq extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="FAQ" pageCaption="Frequently Asked Questions" />
                <FaqContentArea />
                <HomeContactArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Faq;
