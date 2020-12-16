import React, { Component } from 'react';
import classNames from 'classnames';


const timelineData = [
    {
        title: 'Nezo Prototyping',
        date: 'Q3 2020',
        description: 'Nezo Finance enters into a project concept and research phase. The project architecture is designed followed by the start of individual product development and testing.',
        link: '/about-us',
    },
    {
        title: 'Nezo Marketing',
        date: 'Q4 2020',
        description: 'The marketing phase will include integration with various exchanges and a social media strategy to increase brand awareness across multiple platforms',
        link: '/coming-soon',

    },
    {
        title: 'Nezo Token Sale',
        date: 'Q4 2020',
        description: 'The NZO Token sale will be announced across our social media channels. NZO Token price and other sale related details will be published prior to the sale starting date.',
        link: 'https://app.uniswap.org/#/swap?outputCurrency=0xc82d0773f4fc9d717a56280ad2c78ea09afcbc09',
    },
    {
        title: 'Partnerships & More',
        date: 'Q4 2020',
        description: 'Nezo Finance will continue looking for new partnerships to expand its network. To increase exposure additional marketing programmes will be gradually implemented.',
        link: '/coming-soon',
    },
    {
        title: 'Nezo Staking',
        date: 'Q1 2021',
        description: 'Investors can stake their NZO Tokens and earn pre-defined rewards based on the amount staked, in a simple and secure way through a fully secure and audited smart contract.',
        link: '/staking',
    },
    {
        title: 'Nezo SAAS',
        date: 'Q1 2021',
        description: 'New projects using an ERC-20 Token, will benefit from a reliable staking solution available for their investors, and eliminate the hassle of creating a staking system.',
        link: '/coming-soon',
    },
    {
        title: 'Nezo Escrow',
        date: 'Q1 2021',
        description: 'P2P, time-based and event-based safe and secure token transfers and payments through an automatically generated smart contract.',
        link: '/coming-soon',
    },
    {
        title: 'Nezo Lend',
        date: 'Q2 2021',
        description: 'LPs will be able to delegate their idle assets and earn rewards. Providing liquidity to Nezo Lend will reward liquidity providers not only with an interest but also with NZO Tokens.',
        link: '/coming-soon',
    },
    {
        title: 'Nezo Dex',
        date: 'Q2 2021',
        description: 'A fully decentralized trading platform for crypto assets. Users will be able to place buy and sell orders at target prices. Schedule recurring buy or sell orders over a duration of time.',
        link: '/coming-soon',
    },
    {
        title: 'Nezo Pad',
        date: 'Q3 2021',
        description: 'New projects can run their token sale through a reliable, low-cost solution that will give them full control over their token sale through their own custom OTC parameters.',
        link: '/coming-soon',
    },
    {
        title: 'Nezo Cross-Chain',
        date: 'Q4 2021',
        description: 'All features developed by Nezo Finance will be cross-chain interoperable. Users will be able to use crypto assets from other blockchain networks in the Nezo Finance ecosystem.',
        link: '/coming-soon',
    },
]

class Timeline extends Component {

    slider = React.createRef();
    btnNext = React.createRef();
    btnPrev = React.createRef();
    isDown = false;
    startX;
    scrollLeft;
    mouseIsDown = false;
    mouseIsUp = false;

    handleMouseDown = (e) => {
        this.isDown = true;
        this.slider.classList.add('active');
        this.startX = e.pageX - this.slider.offsetLeft;
        this.scrollLeft = this.slider.scrollLeft;
    }

    handleMouseLeave = () => {
        this.isDown = false;
        this.slider.classList.remove('active');
    }

    handleMouseUp = () => {
        this.isDown = false;
        this.slider.classList.remove('active');
    }

    handleMouseMove = (e) => {
        if (!this.isDown) return;
        e.preventDefault();
        const x = e.pageX - this.slider.offsetLeft;
        const walk = (x - this.startX) * 1.01;  // scroll speed
        this.slider.scrollLeft = this.scrollLeft - walk;
    }

    handleMousePrevDown = () => {
        this.mouseIsUp = true;
        setTimeout(() => {
            if (this.mouseIsUp) {
                this.slider.scrollLeft = this.slider.scrollLeft - 100000;
            }
        }, 400)
    }

    handleMousePrevUp = () => {
        this.mouseIsUp = false
    }


    handleMouseNextDown = () => {
        this.mouseIsDown = true;
        setTimeout(() => {
            if (this.mouseIsDown) {
                this.slider.scrollLeft = this.slider.scrollLeft + 100000;
            }
        }, 400)
    }

    handleMouseNextUp = () => {
        this.mouseIsDown = false
    }

    componentDidMount() {
        this.btnNext.addEventListener('mousedown', this.handleMouseNextDown)
        this.btnNext.addEventListener('mouseup', this.handleMouseNextUp)
        this.btnPrev.addEventListener('mousedown', this.handleMousePrevDown)
        this.btnPrev.addEventListener('mouseup', this.handleMousePrevUp)
        this.slider.addEventListener('mousedown', this.handleMouseDown)
        this.slider.addEventListener('mouseleave', this.handleMouseLeave)
        this.slider.addEventListener('mouseup', this.handleMouseUp)
        this.slider.addEventListener('mousemove', this.handleMouseMove)
    }

    componentWillUnmount() {
        this.btnNext.removeEventListener('mousedown', this.handleMouseNextDown)
        this.btnNext.removeEventListener('mouseup', this.handleMouseNextUp)
        this.btnPrev.removeEventListener('mousedown', this.handleMousePrevDown)
        this.btnPrev.removeEventListener('mouseup', this.handleMousePrevUp)
        this.slider.removeEventListener('mousedown', this.handleMouseDown);
        this.slider.removeEventListener('mouseleave', this.handleMouseLeave);
        this.slider.removeEventListener('mouseup', this.handleMouseUp);
        this.slider.removeEventListener('mousemove', this.handleMouseMove);
    }

    clickNext = () => {
        this.slider.scrollLeft = this.slider.scrollLeft + 1220
    }

    clickPrev = () => {
        if (this.slider.scrollLeft === 0) {
            return
        }
        this.slider.scrollLeft = this.slider.scrollLeft - 1220
    }

    render() {

        return (
            <div id="roadmap">
            <div className="services-area ptb-70 content-bg-four">
                <div className="container-fluid p-0">
                    <div className="overview-box timeline-box ptb-20">
                        <div className="container">
                            <div className="section-title">
                                <h2>Roadmap</h2>
                                <div className="bar"/>
                            </div>
                            <div className="default-timeline">
                                <section id="container" className="timeline">
                                    {timelineData.map((timelineItem, index) => {
                                        const { title, date, description, link, image } = timelineItem

                                        return (

                                                <div className="timeline-item" key={index}>
                                                    <div className="timeline-img" />

                                                    <div className={classNames("timeline-content", image && "timeline-card")}>
                                                        {image
                                                            ? <div className="timeline-img-header" style={{ background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${image}) center center no-repeat`, backgroundSize: 'cover' }}>
                                                                <h3>{title}</h3>
                                                            </div>
                                                            : <h4>{title}</h4>
                                                        }
                                                        <div className="date">{date}</div>
                                                        <p>{description}</p>
                                                        <a className="btn nezo-btn" href={link}>More</a>
                                                    </div>
                                                </div>

                                        )
                                    })}
                                </section>
                            </div>
                            <div className="responsive-timeline">
                                <div className="owl-next" onClick={this.clickNext} ref={elem => this.btnNext = elem}>
                                    <i className="fas fa-chevron-right"/>
                                </div>
                                <div className="owl-prev" onClick={this.clickPrev} ref={elem => this.btnPrev = elem}>
                                    <i className="fas fa-chevron-right"/>
                                </div>
                                <section id="container1" className="timeline-section" ref={elem => this.slider = elem}>
                                    {timelineData.map((timelineItem, index) => {
                                        const { title, date, description, link, image } = timelineItem

                                        return (
                                            <div className={classNames("timeline-item", !image && "timeline-item-pic")} key={index}>
                                                <div className={"timeline-img"}/>

                                                <div className={classNames("timeline-content", image && "timeline-card")}>
                                                    <div className="date">{date}</div>
                                                    {image
                                                        ? <div className={"timeline-img-header"} style={{
                                                            background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4)), url(${image}) center center no-repeat`,
                                                            backgroundSize: 'cover'
                                                        }}>
                                                            <h2>{title}</h2>
                                                        </div>
                                                        : <h4>{title}</h4>
                                                    }
                                                    <div className={image && "txt-wrap"}>
                                                        <p>{description}</p>
                                                        <a className="btn nezo-btn" href={link}>More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Timeline;


/*==============================================

image: 'https://picsum.photos/1000/800/?random',

\n' +
==============================================*/
