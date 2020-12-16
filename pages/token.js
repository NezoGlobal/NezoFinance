import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/PageBannerContent/PageBannerContent';
import TokenCard from '../components/TokenCard/TokenCard';
import Footer from '../components/Layouts/Footer';
import TokenFAQArea from '../components/TokenFAQArea/TokenFAQArea';
import TiersCard from '../components/Tiers/TiersCard';

class Token extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Nezo Token (NZO)" pageCaption="All you need to know about it" />
                <TokenCard />
                <TiersCard />
                <TokenFAQArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Token;
