import React, { Component } from 'react';
import BlogCard from './BlogCard';
import BlogSidebar from './BlogSidebar';

class BlogContent extends Component {
    render() {
        return (
            <section className="blog-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <BlogCard />
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogContent;