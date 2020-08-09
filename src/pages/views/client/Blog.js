import React from 'react'
import Bg5 from '../../../assets/client/img/bg-img/bg-5.jpg';
import { Link } from "react-router-dom";
const Blog = () => {
    return (
        <div>
            <div className="breadcumb_area breadcumb-style-two bg-img" style={{ backgroundImage: 'url(' + Bg5 + ')' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="page-title text-center">
                                <h2>Fashion Blog</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* end header */}

            <div className="blog-wrapper section-padding-80">
                <div className="container">
                    <div className="row">
                        {/* Single Blog Area */}
                        <div className="col-12 col-lg-6">
                            <div className="single-blog-area mb-50">
                                <img src="https://chiasemeohay.com/images/cho-ra-doi-nhung-buc-anh-dep-khi-di-du-lich5.jpg" alt="" />
                                {/* Post Title */}
                                <div className="post-title">
                                    <Link to="/blog-detail/1">Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada</Link>
                                </div>
                                {/* Hover Content */}
                                <div className="hover-content">
                                    {/* Post Title */}
                                    <div className="hover-post-title">
                                        <Link to="/blog-detail/1">Vivamus sed nunc in arcu cursus mollis quis et orci. Interdum et malesuada</Link>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis fringilla tortor. Phasellus purus dignissim convallis.</p>
                                    <Link to="/blog-detail/1">Continue reading <i className="fa fa-angle-right" /></Link>
                                </div>
                            </div>
                        </div>
                        {/* Single Blog Area */}
                    </div>
                </div>
            </div>
            {/* end blog */}

        </div>
    )
}


export default Blog
