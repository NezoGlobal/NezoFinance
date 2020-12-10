import React, { Component } from 'react';

class TiersInfoTable extends Component {
    render() {
        return (
            <section className="comparisons-area ptb-70 bg-f7fafd">
                <div className="container">
                    <div className="section-title">
                        <h2>Top Tier Holders</h2>
                        <div className="bar"></div>
                        <p>Info about tier holders</p>
                    </div>

                    <div className="comparisons-table table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Staking Info</th>
                                    <th scope="col">Diamond Pool</th>
                                    <th scope="col">Silver Pool</th>
                                    <th scope="col">Bronze Pool</th>
                                    <th scope="col">Standard Pool</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>Pool size</td>
                                    <td>500,000 NZO</td>
                                    <td>1,000,000 NZO</td>
                                    <td>1,000,000 NZO</td>
                                    <td>1,500,000 NZO</td>
                                </tr>
                                <tr>
                                    <td>ROI</td>
                                    <td>85%</td>
                                    <td>60%</td>
                                    <td>40%</td>
                                    <td>30%</td>
                                </tr>
                                <tr>
                                    <td>Maturity period</td>
                                    <td>365 Days</td>
                                    <td>180 Days</td>
                                    <td>90 Days</td>
                                    <td>30 Days</td>
                                </tr>
                                <tr>
                                    <td>Unstaking fee</td>
                                    <td>15%</td>
                                    <td>10%</td>
                                    <td>5%</td>
                                    <td>0%</td>
                                </tr>
                                <tr>
                                    <td>Rewards schedule</td>
                                    <td>Weekly</td>
                                    <td>Weekly</td>
                                    <td>Weekly</td>
                                    <td>Weekly</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}

export default TiersInfoTable;


