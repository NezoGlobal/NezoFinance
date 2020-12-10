import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/PageBannerContent/PageBannerContent';
import TeamMemberContent from '../components/Team/TeamMemberContent';
import JobsApplyArea from '../components/JobsApplyArea/JobsApplyArea';
import Footer from '../components/Layouts/Footer';

class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="Team" pageCaption="Meet our team" />
                <TeamMemberContent />
                <JobsApplyArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Team;
