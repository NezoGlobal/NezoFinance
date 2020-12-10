import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import ComingSoon from '../components/ComingSoon/ComingSoon';

import Footer from '../components/Layouts/Footer';



class ComingSoonPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <ComingSoon />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ComingSoonPage;



