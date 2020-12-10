import React, { Component } from 'react';
import classNames from 'classnames';

const timelineData = [
    {
        title: 'Title',
        date: '1 MAY 2012',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias\n' +
            'cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum\n' +
            'excepturi amet in dolores. Alias, ullam.',
        link: '/about-us',
    },
    {
        title: 'Title',
        date: '1 MAY 2013',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias\n' +
            'cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum\n' +
            'excepturi amet in dolores. Alias, ullam.',
        link: '/about-us',
        image: 'https://picsum.photos/1000/800/?random',
    },
    {
        title: 'Title',
        date: '1 MAY 2014',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias\n' +
            'cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum\n' +
            'excepturi amet in dolores. Alias, ullam.',
        link: '/about-us',
        image: 'https://picsum.photos/1000/800/?random',
    },
    {
        title: 'Title',
        date: '1 MAY 2015',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias\n' +
            'cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum\n' +
            'excepturi amet in dolores. Alias, ullam.',
        link: '/about-us',
    },
    {
        title: 'Title',
        date: '1 MAY 2016',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias\n' +
            'cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum\n' +
            'excepturi amet in dolores. Alias, ullam.',
        link: '/about-us',
    },
    {
        title: 'Title',
        date: '1 MAY 2017',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias\n' +
            'cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum\n' +
            'excepturi amet in dolores. Alias, ullam.',
        link: '/about-us',
        image: 'https://picsum.photos/1000/800/?random',
    },
    {
        title: 'Title',
        date: '1 MAY 2018',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias\n' +
            'cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum\n' +
            'excepturi amet in dolores. Alias, ullam.',
        link: '/about-us',
    },
]

class Timeline extends Component {

    slider = React.createRef();
    isDown = false;
    startX;
    scrollLeft;

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

    componentDidMount() {
        this.slider.addEventListener('mousedown', this.handleMouseDown)
        this.slider.addEventListener('mouseleave', this.handleMouseLeave)
        this.slider.addEventListener('mouseup', this.handleMouseUp)
        this.slider.addEventListener('mousemove', this.handleMouseMove)
    }

    componentWillUnmount() {
        this.slider.removeEventListener('mousedown', this.handleMouseDown);
        this.slider.removeEventListener('mouseleave', this.handleMouseLeave);
        this.slider.removeEventListener('mouseup', this.handleMouseUp);
        this.slider.removeEventListener('mousemove', this.handleMouseMove);
    }

    render() {

        return (
            <div className="services-area ptb-70">
                <div className="container-fluid p-0">
                    <div className="overview-box timeline-box">
                        <div className="container">
                            <div className="section-title">
                                <h2>Timeline Component</h2>
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
                                                                <h2>{title}</h2>
                                                            </div>
                                                            : <h2>{title}</h2>
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
                                                        : <h2>{title}</h2>
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
        )
    }
}

export default Timeline;
