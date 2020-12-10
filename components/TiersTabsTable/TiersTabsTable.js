import React, { Component } from 'react';

class TiersTabsTable extends Component {
    render() {
        return (
            <section className="comparisons-area pt-30">


                    <div className="tabs-table table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"><i className="fas fa-trophy color-ffcb2d pr-2"></i>Tiers</th>
                                    <th scope="col"><i className="fas fa-award pr-2"></i>Tier 1</th>
                                    <th scope="col"><i className="fas fa-award pr-2"></i>Tier 2</th>
                                    <th scope="col"><i className="fas fa-award pr-2"></i>Tier 3</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td>Amount (NZO)</td>
                                    <td>50.000</td>
                                    <td>20.000</td>
                                    <td>10.000</td>
                                </tr>
                                <tr>
                                    <td>Nezo Pad 24h early access</td>
                                    <td><i className="fas fa-check color-00a651"></i></td>
                                    <td><i className="fas fa-times color-e63c2f"></i></td>
                                    <td><i className="fas fa-times color-e63c2f"></i></td>
                                </tr>
                                <tr>
                                    <td>Bonus rewards from fees</td>
                                    <td>6%</td>
                                    <td>4%</td>
                                    <td>2%</td>
                                </tr>
                                <tr>
                                    <td>Nezo Dex discount</td>
                                    <td>20%</td>
                                    <td>15%</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Own UI</td>
                                    <td><i className="fas fa-check color-00a651"></i></td>
                                    <td><i className="fas fa-check color-00a651"></i></td>
                                    <td><i className="fas fa-check color-00a651"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                
            </section>
        );
    }
}

export default TiersTabsTable;


