import React, { Component } from 'react';
import Link from 'next/link';

class BlogSidebar extends Component {
    render() {
        return (
            <div className="widget-area" id="secondary">
                {/* Search form */}
                <div className="widget widget_search">
                    <form className="search-form">
                        <label>
                            <span className="screen-reader-text">Search for:</span>
                            <input type="search" className="search-field" placeholder="Search..." />
                        </label>
                        <button type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                </div>

                {/* Popular posts */}
                <div className="widget widget_luvion_posts_thumb">
                    <h3 className="widget-title">Popular posts</h3>

                    <article className="item">
                        <Link href="#">
                            <a className="thumb">
                                <span className="fullimage cover bg1" role="img"></span>
                            </a>
                        </Link>
                        <div className="info">
                            <time>December 15, 2019</time>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>The security risks of changing package owners</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <a href="#" className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </a>
                        <div className="info">
                            <time>December 16, 2019</time>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>Tips to protecting business and Family</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>

                    <article className="item">
                        <a href="#" className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </a>
                        <div className="info">
                            <time>December 17, 2019</time>
                            <h4 className="title usmall">
                                <Link href="#">
                                    <a>Protect your workplace from cyber attacks</a>
                                </Link>
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>
                </div>

                {/* Recent posts */}
                <div className="widget widget_recent_entries">
                    <h3 className="widget-title">Recent posts</h3>

                    <ul>
                        <li>
                            <Link href="#">
                                <a>The security risks of changing package owners</a>
                            </Link>
                            <span className="post-date">December 15, 2019</span>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Tips to protecting business and Family</a>
                            </Link>
                            <span className="post-date">December 16, 2019</span>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Protect your workplace from cyber attacks</a>
                            </Link>
                            <span className="post-date">December 17, 2019</span>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Business debit Fees to increase in 2019</a>
                            </Link>
                            <span className="post-date">December 18, 2019</span>
                        </li>
                        <li>
                            <Link href="#">
                                <a>10 tips to reduce your card processing costs</a>
                            </Link>
                            <span className="post-date">December 19, 2019</span>
                        </li>
                    </ul>
                </div>

                {/* Categories */}
                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    <ul>
                        <li>
                            <Link href="#">
                                <a>Business <span className="post-count">(05)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Privacy <span className="post-count">(10)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Technology <span className="post-count">(15)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Tips <span className="post-count">(12)</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <a>Uncategorized <span className="post-count">(02)</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Tags */}
                <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>

                    <div className="tagcloud">
                        <Link href="#">
                            <a>IT <span className="tag-link-count">(3)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Luvion <span className="tag-link-count">(3)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Games <span className="tag-link-count">(2)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Fashion <span className="tag-link-count">(2)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Travel <span className="tag-link-count">(1)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Smart <span className="tag-link-count">(1)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Marketing <span className="tag-link-count">(1)</span></a>
                        </Link>
                        <Link href="#">
                            <a>Tips <span className="tag-link-count">(2)</span></a>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogSidebar;