import React, { Component } from 'react';
import BlogSidebar from '../BlogTwo/BlogSidebar';
import Link from 'next/link';
import CommentsArea from './CommentsArea';

class SingleBlogContent extends Component {
    render() {
        return (
            <div className="blog-details-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details">
                                <div className="article-image">
                                    <img src={require("../../images/blog-image/single-blog.jpg")} alt="image" />
                                </div>

                                <div className="article-content">
                                    <ul className="entry-meta">
                                        <li>
                                            <i className="far fa-user"></i> 
                                            <a href="#">Admin</a>
                                        </li>
                                        <li>
                                            <i className="far fa-calendar"></i> December 15, 2019
                                        </li>
                                        <li>
                                            <i className="far fa-comment"></i> No Comments
                                        </li>
                                    </ul>
                                 
                                    <h3>The security risks of changing package owners</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>
   
                                    <ul className="wp-block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src={require("../../images/blog-image/1.jpg")} alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src={require("../../images/blog-image/2.jpg")} alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src={require("../../images/blog-image/3.jpg")} alt="image" />
                                            </figure>
                                        </li>
                                    </ul>
 
                                    <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>

                                    <blockquote>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    </blockquote>

                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.</p> 
                                    
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus.</p>

                                    <div className="article-footer">
                                        <div className="article-tags">
                                            <span><i className="fas fa-bookmark"></i></span>

                                            <Link href="#"><a>Fashion</a></Link>, 
                                            <Link href="#"><a>Games</a></Link>, 
                                            <Link href="#"><a>Travel</a></Link>
                                        </div>

                                        <div className="article-share">
                                            <ul className="social">
                                                <li>
                                                    <Link href="#">
                                                        <a target="_blank">
                                                            <i className="fab fa-facebook-f"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a target="_blank">
                                                            <i className="fab fa-twitter"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a target="_blank">
                                                            <i className="fab fa-linkedin-in"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#">
                                                        <a target="_blank">
                                                            <i className="fab fa-instagram"></i>
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Comments area */}
                            <CommentsArea />
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default SingleBlogContent;