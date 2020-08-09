import React from 'react'
import Bg5 from '../../../assets/client/img/bg-img/bg-7.jpg';
import rp1 from '../../../assets/client/img/bg-img/rp1.jpg';
import rp2 from '../../../assets/client/img/bg-img/rp2.jpg';
import rp3 from '../../../assets/client/img/bg-img/rp3.jpg';
const BlogDetail = () => {
    return (
        <div className="single-blog-wrapper">
            {/* Single Blog Post Thumb */}
            <div className="single-blog-post-thumb">
                <img src={Bg5} alt="" />
            </div>
            {/* Single Blog Content Wrap */}
            <div className="single-blog-content-wrapper d-flex">
                {/* Blog Content */}
                <div className="single-blog--text">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis perferendis rem accusantium ducimus animi nesciunt expedita omnis aut quas molestias!</h2>
                    <p>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin. Praesent at tempus lectus, eleifend blandit felis. Fusce augue arcu, consequat a nisl aliquet, consectetur elementum turpis. Donec iaculis lobortis nisl, et viverra risus imperdiet eu. Etiam mollis posuere elit non sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis arcu a magna sodales venenatis. Integer non diam sit amet magna luctus mollis ac eu nisi. In accumsan tellus ut dapibus blandit.</p>
                    <blockquote>
                        <h6><i className="fa fa-quote-left" aria-hidden="true" /> Quisque sagittis non ex eget vestibulum. Sed nec ultrices dui. Cras et sagittis erat. Maecenas pulvinar, turpis in dictum tincidunt, dolor nibh lacinia lacus.</h6>
                        <span>Liam Neeson</span>
                    </blockquote>
                    <p>Praesent ac magna sed massa euismod congue vitae vitae risus. Nulla lorem augue, mollis non est et, eleifend elementum ante. Nunc id pharetra magna. Praesent vel orci ornare, blandit mi sed, aliquet nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
                {/* Related Blog Post */}
                <div className="related-blog-post">
                    {/* Single Related Blog Post */}
                    <div className="single-related-blog-post">
                        <img src={rp1} alt="" />
                        <a href="#">
                            <h5>Cras lobortis nisl nec libero pulvinar lacinia. Nunc sed ullamcorper massa</h5>
                        </a>
                    </div>
                    {/* Single Related Blog Post */}
                    <div className="single-related-blog-post">
                        <img src={rp2} alt="" />
                        <a href="#">
                            <h5>Fusce tincidunt nulla magna, ac euismod quam viverra id. Fusce eget metus feugiat</h5>
                        </a>
                    </div>
                    {/* Single Related Blog Post */}
                    <div className="single-related-blog-post">
                        <img src={rp3} alt="" />
                        <a href="#">
                            <h5>Etiam leo nibh, consectetur nec orci et, tempus tempus ex</h5>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default BlogDetail
