import React, { Component } from 'react';
import axios from 'axios';

class Rates extends Component {
    state = {
        rates: {},
        updateDate: null
    }

    componentDidMount(){
        axios.get('https://api.exchangeratesapi.io/latest?base=USD')
        .then((res) => {
            console.log(res.data.base);
            this.setState({
                rates: res.data.rates,
                updateDate: res.data.date
            })
        });
    }
    render() {
        let { rates, updateDate } = this.state;
        let tablHead = [];
        let tableData = [];
        Object.keys(rates).forEach(function (rate) {
            tablHead.push(rate); // key
            tableData.push(rates[rate])
        });
        return (
            <section className="currency-rates-area pt-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Currency Rates</h2>
                        <div className="bar"></div>
                        <p>Latest Currency Rates Based on <strong>USA</strong></p>
                    </div>
                    <div className="table-responsive currency-rates-table">
                        <table className="table">
                            <thead>
                                <tr>
                                    {
                                        tablHead.length ? tablHead.map((head, i) => (
                                            <th key={i} scope="col">{head}</th>
                                        )) : null
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {
                                        tableData.length ? tableData.map((data, i) => (
                                            <td key={i}>{data.toFixed(3)}</td>
                                        )) : null
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row currency-rates-info">
                        <div className="col-lg-6 col-md-6 col-6">
                            <a href="https://exchangeratesapi.io/" target="_blank">Source</a>
                        </div>

                        <div className="col-lg-6 col-md-6 col-6 text-right">
                            <p>Date: {updateDate}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Rates;