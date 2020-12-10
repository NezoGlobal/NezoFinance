import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/PageBannerContent/PageBannerContent';
import JobsContentArea from '../components/Jobs/JobsContentArea';
import ViewTeamArea from '../components/ViewTeamArea/ViewTeamArea';
import Footer from '../components/Layouts/Footer';

class Jobs extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Jobs" pageCaption="Be part of our team with strong values and the power of purpose to make a real difference." />
                <JobsContentArea />
                <ViewTeamArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Jobs;
