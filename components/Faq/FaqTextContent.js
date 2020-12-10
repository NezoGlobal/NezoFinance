import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
    resetNextUuid
} from 'react-accessible-accordion';

class FaqTextContent extends Component {
    render() {     resetNextUuid();
        return (
            <div className="faq-accordion">
                <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What is Nezo Finance?
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p className="accordion-content">
                            Nezo Finance is the decentralized finance arm of Nezo Global, that aims to be the go-to, all-in-one ecosystem for DeFi, boasting multiple highly demanded features in one easy-to-use interface.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Nezo Token
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className="accordion-content">
                            <p className="font-weight-bold">1. When will the token be launched?</p>
                            <p>Updates on the NZO launch schedule will be posted on our website and social media channels.</p>

                            <p className="font-weight-bold">2. Where can I use NZO?</p>
                            <p>The NZO Token can be used on Nezo Finance platform, as well as on various
                            partner platforms where the ERC-20 Token standard is accepted.</p>

                            <p className="font-weight-bold">3. What are the benefits of owning NZO?</p>

                            <p>NZO holders can benefit from owning the tokens through various rewards systems
                            which will be put in place upon the launch of each Nezo Finance feature, along with
                            more conventional means of earning through trading, staking or liquidity farming.
                            Top Holders (Tiers 1-3) of the NZO Token will also qualify for additional benefits,
                            such as automatic qualification to pre-sale rounds of incubated projects, discounts
                            on Nezo DEX fees, bonus rewards, and more. Information about the Tier Holders can be
                            found on the Token page.</p>

                            <p className="font-weight-bold">4. Is Nezo Token deflationary?</p>
                            <p>Yes, every time NZO Token is spent as a fee, a small amount is burned to keep the system deflationary.</p>

                            <p className="font-weight-bold">5. Does Nezo Finance use a buyback scheme?</p>
                            <p>Yes, Nezo Finance also uses a buyback scheme from the fees applied to increase the value of each NZO Token and use the purchased tokens to further support various rewards programmes.</p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
 
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Nezo Staking
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className="accordion-content">
                            <p className="font-weight-bold">1. How much will I earn from staking?</p>
                            Users staking NZO Tokens will be able to earn pre-defined rewards based on the
                            amount staked. Rewards will be dependent on different economic factors. More
                            details about the staking rewards are available on the Staking page.
                            <p className="font-weight-bold">2. Can I withdraw my tokens before the maturity period ends? </p>
                            <p> Users may withdraw their staked NZO Tokens at any time before the end of its
                                maturity period by paying an Unstaking Fee. More details about the fees can be found on the Staking page. </p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
 
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Nezo SAAS
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className="accordion-content">
                            <p className="font-weight-bold">1. What is nezo SAAS? </p>
                            <p> Projects using an ERC-20 token standard will be able to use Nezo Finance
                                Staking Services, allowing them to forego the hassle of creating a staking system
                                while they are in the early stages of development. </p>
                            <p className="font-weight-bold">2. How much does it cost to use the service?</p>
                            <p> Projects using Nezo SAAS will pay a percentage of the pool value
                                in ETH or NZO Tokens. More details about fees will be available on Nezo SAAS page. </p>

                            <p> Projects using Nezo SAAS will also benefit from a very secure and smooth UI to access their staking platform.
                                The staking interface will be white-labeled and customised with their own branding.</p>
                                
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Nezo Lending
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className="accordion-content">
                            <p className="font-weight-bold">1. What assets can be used as collateral?</p>

                            <p> Currently, stablecoins such as Dai and USDT can be accepted as collateral
                            assets. More crypto assets will constantly be supported. Updates will be posted on our website and social media channels. </p>
                            <p className="font-weight-bold">2. How much can a lender expect to profit from lending? </p>
                            <p> Lenders will be able to set their own preferred interest rates and collateralization
                                terms for the loans they are offering. Opting to receive the interest paid in NZO Tokens
                                will also allow the lenders to set higher interest rates.
                                Lenders providing liquidity to Nezo Lend will earn not only from their custom interest
                                rate but will also be rewarded with NZO tokens.</p>
                            <p className="font-weight-bold">3. What measures are in place to protect the parties involved? </p>
                            <p> Transactions on Nezo Farm will be done through a fully secure and audited smart contract to ensure
                                full and timely repayment. The health of a volatile collateralized asset is monitored via a Loan-to-Value (LTV) ratio.
                                To protect borrowers, an email alert will be sent to rebalance the
                                LTV when the LTV hits 80%, and liquidates the collateral automatically once the 90%
                                threshold is crossed. </p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
 
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Nezo DEX
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className="accordion-content">
                            <p className="font-weight-bold">1. What is Nezo DEX? </p>
                            <p>Nezo DEX is a non-custodial decentralized exchange for crypto assets that
                                aggregates liquidity from centralized and decentralized exchanges.</p>
                            <p className="font-weight-bold"> 2. What differentiates Nezo DEX from other similar services? </p>
                            <p> The platform will boast fast transactions, low fees, and will allow limit orders and
                                scheduled buy & sell orders, among its many other features. More details about Nezo DEX will be
                                revealed closer to its release. </p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
 
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Nezo Escrow
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className="accordion-content">
                            <p className="font-weight-bold">1. What are the requirements to use Nezo Escrow?</p>
                            <p> Users will only need an Ethereum address to enter in a P2P smart contract agreement using
                                Nezo Escrow. More details about the options availabale on Nezo Escrow will be published on
                                our website prior to its launch. </p>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
 
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Nezo Pad
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <div className="accordion-content">
                                <p className="font-weight-bold">1. What are the requirements to launch a token sale on the platform? </p>
                                <p> Projects looking to hold their token sale on Nezo Pad need to pass basic KYC
                                    requirements in order to protect all parties involved and prevent scams. </p>
                                <p className="font-weight-bold"> 2. Who is qualified to participate in token sales? </p>
                                <p>The minimum amount of NZO Tokens an investor needs in order to qualify for access in token sale
                                    rounds will be determined by the token seller, and it can be between 0 (everyone
                                    has access) and 4999 NZO.</p>
                                <p>Top Holders automatically quallify for access in the sale rounds. Tier 1 holders of NZO Token get
                                    early access (24 hours) to the pre-sale rounds of incubated projects on Nezo Pad. More details about
                                    the Top Tier Holders can be found on the Token page.</p> 
                                <p className="font-weight-bold">3. How can users be notified of upcoming sales?</p>
                                <p> Every project launching their Token Sale through Nezo Pad will benefit from marketing services to further
                                    support their sale through our website and social media channels. The community will find all the sales 
                                    available on the Nezo Pad page and every sale will be officially anounced on our website and social media channels.</p>
                                <p className="font-weight-bold">4. What measures are in place to protect investors participating in the private/public sales? </p>
                                <p> When a sale is created through NezoPad there is no trust involved as the sale smart contract is generated automatically
                                    based on the parameters set by the creator. A soft cap will also be implemented for every token sale which, if not reached, will trigger
                                    the smart contract to return all funds automatically. Furthermore, to prevent investors from being victimized by the unfortunately
                                    common “pump-and-dump” schemes pulled by illegitimate projects, Nezo Pad will have a vesting schedule in place, locking tokens in a
                                    smart contract, and gradually releasing them over a period of time, thus allowing for a more stable token price. </p>
                                    
                                <p> Some parameters will be availabale for projects to use at their own discretion so as an investor involved in a private/public sale
                                you will also have to do your own research before joining a public sale. The most important parameters set by the Sale Creators will
                                be publicly available on the Nezo Pad interface. </p>
                                
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>


                </Accordion>
            </div>
        );
    }
}

export default FaqTextContent;


