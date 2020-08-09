import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Bg5 from '../../../assets/client/img/bg-img/bg-5.jpg';
const Blog = () => {
    const [items, setItems] = useState([]);
    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/blog/index")
            .then(function (response) {
                setItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setList, []);

    const [cate, setCate] = useState([]);
    const setListCate = () => {
        axios
            .get("http://127.0.0.1:8000/api/cate-blog/index")
            .then(function (response) {
                setCate(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    useEffect(setListCate, []);
    return (
        <div>
            <div className="breadcumb_area breadcumb-style-two bg-img" style={{ backgroundImage: 'url(' + Bg5 + ')' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="page-title text-center">
                                <h2>Show danh mục blog</h2>
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
                        {items.map((blog) => (
                            <div className="col-12 col-lg-6">
                                <div className="single-blog-area mb-50">
                                    <img src={blog.img} alt="" />
                                    {/* Post Title */}
                                    <div className="post-title">
                                        <Link to={`blog-detail/${blog.id}`}>{blog.name}</Link>
                                    </div>
                                    {/* Hover Content */}
                                    <div className="hover-content">
                                        {/* Post Title */}
                                        <div className="hover-post-title">
                                            <Link to={`blog-detail/${blog.id}`}>{blog.name}</Link>
                                        </div>
                                        <p>{blog.meta}</p>
                                        <Link to={`blog-detail/${blog.id}`}>Chi tiết blog <i className="fa fa-angle-right" /></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Single Blog Area */}
                    </div>
                </div>
            </div>
            {/* end blog */}

        </div>
    )
}


export default Blog
