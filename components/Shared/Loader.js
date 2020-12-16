import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className={`preloader ${this.props.loading ? '' : 'preloader-deactivate'}`}>
                <div className="loader">
                    <div className="shadow"/>
                    <div className="box"/>
                </div>
            </div>
        );
    }
}

export default Loader;
