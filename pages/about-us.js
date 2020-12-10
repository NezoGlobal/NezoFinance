import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBannerContent from '../components/PageBannerContent/PageBannerContent';
import AboutContent from '../components/AboutUs/AboutContent';
import TeamMember from '../components/AboutUs/TeamMember';
import TeamMemberContent from '../components/Team/TeamMemberContent'
import PartnerContent from '../components/PartnerContent/PartnerContent';
import AppDownloadContent from '../components/HomeOne/AppDownloadContent';
import DownloadBrandingArea from '../components/DownloadBrandingArea/DownloadBrandingArea';
import Footer from '../components/Layouts/Footer';
import JobsApplyAbout from '../components/JobsApplyAbout/JobsApplyAbout';
import EcosystemCardAbout from '../components/EcosystemCardAbout/EcosystemCardAbout';
class AboutUs extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBannerContent pageTitle="About Us" pageCaption="Your decentralized finance hub" />
                <AboutContent />
                <TeamMemberContent />
                <JobsApplyAbout />
                <EcosystemCardAbout />
                <PartnerContent />
                <DownloadBrandingArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default AboutUs;
