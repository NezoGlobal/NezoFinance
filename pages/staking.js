import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/PageBannerContent/PageBannerContent';
import StakingCard from '../components/Staking/StakingCard';
import TokenFAQArea from '../components/TokenFAQArea/TokenFAQArea';
import Footer from '../components/Layouts/Footer';
import StakingInfoTable from '../components/StakingInfoTable/StakingInfoTable';
import FeesTable from '../components/FeesTable/FeesTable';

class Staking extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Nezo Staking" pageCaption="Earn rewards on your stake." />
                <StakingCard />
                <StakingInfoTable />
                <FeesTable />
                <TokenFAQArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Staking;
