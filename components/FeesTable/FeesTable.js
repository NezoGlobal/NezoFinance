import React, { Component } from 'react';

class FeesTable extends Component {
    render() {
        return (
            <section className="comparisons-area ptb-20">

                <div className="container ptb-70">
                        <div className="section-title">
                            <h2>Unstaking Fees Distribution</h2>
                            <div className="bar"></div>
                            <p>Details about the distribution of collected fees</p>
                        </div>

                    <div className="fees-table table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"><i className="fas fa-coins pr-2"></i>Amount</th>
                                    <th scope="col"><i className="fas fa-chart-pie pr-2"></i>Distribution details</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <tr>
                                    <td><i className="fas fa-coins color-00a651 pr-2"></i> 40% </td>
                                    <td className="fees"><i className="fas fa-chart-pie color-00a651 pr-2"></i>Is sent to current stake holders in form of additional reward divided according to their stake</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-coins color-00a651 pr-2"></i> 18% </td>
                                    <td className="fees"><i className="fas fa-piggy-bank color-00a651 pr-2"></i>Is sent to the staking vault</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-coins color-00a651 pr-2"></i> 15% </td>
                                    <td className="fees"><i className="fas fa-piggy-bank color-00a651 pr-2"></i>Is sent to Nezo Vault (supporting a further rewarding programme for the stake holders and liquidity providers)</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-coins color-00a651 pr-2"></i> 5%</td>
                                    <td className="fees"><i className="fas fa-fire color-e63c2f pr-2"></i>Is burned</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-coins color-00a651 pr-2"></i> 10%</td>
                                    <td className="fees"><i className="fas fa-sync-alt color-5c629e pr-2"></i>Will be used to buyback Nezo Tokens at the market price and deposit them in the Nezo Vault</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-coins color-00a651 pr-2"></i> 6%</td>
                                    <td className="fees"><i className="fas fa-trophy color-fdc210 pr-2"></i>Will be sent as Bonus Rewards to Tier 1 Top Holders of NZO Token</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-coins color-00a651 pr-2"></i> 4%</td>
                                    <td className="fees"><i className="fas fa-trophy color-fdc210 pr-2"></i>Will be sent as Bonus Rewards to Tier 2 Top Holders of NZO Token</td>
                                </tr>
                                <tr>
                                    <td><i className="fas fa-coins color-00a651 pr-2"></i> 2%</td>
                                    <td className="fees"><i className="fas fa-trophy color-fdc210 pr-2"></i>Will be sent as Bonus Rewards to Tier 3 Top Holders of NZO Token</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeesTable;


