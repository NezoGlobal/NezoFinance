import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Terms from '../components/Terms/Terms'


class TermsOfUse extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Terms />
                <Footer />
            </React.Fragment>
        );
    }
}

export default TermsOfUse;
