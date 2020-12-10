import React, { Component } from 'react';
import Link from 'next/link';

class BlogCard extends Component {
    render() {
        return (
            <section className="blog-area ptb-70 pb-50">
                <div className="container">
                    <div className="section-title">
                        <h2>The news from our blog</h2>
                        <div className="bar"></div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/blog-image/1.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="blog-post-content">
                                    <ul className="entry-meta">
                                        <li>
                                            <i className="far fa-user"></i>
                                            <Link href="#">
                                                <a>Admin</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="far fa-calendar"></i>
                                            December 15, 2019
                                        </li>
                                    </ul>

                                    <h3>
                                        <Link href="#">
                                            <a>The security risks of changing package owners</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                                    <Link href="#">
                                        <a className="btn btn-primary">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/blog-image/2.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="blog-post-content">
                                    <ul className="entry-meta">
                                        <li>
                                            <i className="far fa-user"></i>
                                            <Link href="#">
                                                <a>Admin</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="far fa-calendar"></i>
                                            December 16, 2019
                                        </li>
                                    </ul>

                                    <h3>
                                        <Link href="#">
                                            <a>Tips to protecting business and family</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                                    <Link href="#">
                                        <a className="btn btn-primary">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="single-blog-post">
                                <div className="blog-image">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/blog-image/3.jpg")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="blog-post-content">
                                    <ul className="entry-meta">
                                        <li>
                                            <i className="far fa-user"></i>
                                            <Link href="#">
                                                <a>Admin</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <i className="far fa-calendar"></i>
                                            December 16, 2019
                                        </li>
                                    </ul>

                                    <h3>
                                        <Link href="#">
                                            <a>Protect your workplace from cyber attacks</a>
                                        </Link>
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna...</p>
                                    <Link href="#">
                                        <a className="btn btn-primary">Read More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogCard;