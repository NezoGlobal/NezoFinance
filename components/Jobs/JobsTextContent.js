import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
    resetNextUuid
} from 'react-accessible-accordion';

class JobsTextContent extends Component {
    render() {  resetNextUuid();
        return (
            <div className="faq-accordion">
                <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Marketing Experts
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p className="accordion-content">
                            Help us reach a wider audience and manage our social media channels.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Legal Advisors

                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p className="accordion-content">
                                You would know how to navigate through the landscape of the crypto space and be up to date with rules, regulations and laws.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
 
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Security Experts
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p className="accordion-content">
                                You would need to be an expert in digital assets storage, cryptography and online security.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
 
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Web and App Developers
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p className="accordion-content">
                            Front End and Back End Developers with proven skills of building ultra-fast applications. (NodeJs, ReactJs, NextJs, VueJs, Solidity)
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
 
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Blockchain Architects
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p className="accordion-content">
                                You would be responsible for the integration and the interoperability side of our own project within various blockchains. You will also be part of the research team for the development of our blockchain.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Business Manager
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p className="accordion-content">
                                You would be responsible for the integration and the interoperability side of our own project within various blockchains. You will also be part of the research team for the development of our blockchain.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Community Manager
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel>
                            <p className="accordion-content">
                                You would be responsible for the integration and the interoperability side of our own project within various blockchains. You will also be part of the research team for the development of our blockchain.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
 
                </Accordion>
            </div>
        );
    }
}

export default JobsTextContent;