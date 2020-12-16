import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import FeaturedCard from '../components/HomeOne/FeaturedCard';
import ServicesCard from '../components/ServicesCard/ServicesCard';
import OurFeaturesContent from '../components/OurFeaturesContent/OurFeaturesContent';
import PartnerContent from '../components/PartnerContent/PartnerContent';
import AppDownloadContent from '../components/HomeOne/AppDownloadContent';
import AccountCreateArea from '../components/AccountCreateArea/AccountCreateArea';
import Footer from '../components/Layouts/Footer';
import AboutUsCard from '../components/HomeOne/AboutUsCard';
import HomeContactArea from '../components/HomeContactArea/HomeContactArea'
import NezoDex from '../components/NezoDex/NezoDex';
import Timeline from "../components/Timeline/Timeline";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <MainBanner />
                <AboutUsCard />
                <FeaturedCard />
                <Timeline />
                <ServicesCard />
                <AccountCreateArea />
                <OurFeaturesContent />
                <NezoDex />
                <PartnerContent />
                <AppDownloadContent />
                <HomeContactArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;
