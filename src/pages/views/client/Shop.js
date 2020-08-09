import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Img1 from '../../../assets/client/img/product-img/product-1.jpg';
import Img2 from '../../../assets/client/img/product-img/product-2.jpg';
import 'bootstrap/dist/css/bootstrap.css';
const Shop = () => {
    const [items, setItems] = useState([]);
    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/product/index")
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
            .get("http://127.0.0.1:8000/api/cate/index")
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
            {/* ##### Breadcumb Area Start ##### */}
            <div className="breadcumb_area bg-img" style={{ backgroundImage: 'url(img/bg-img/breadcumb.jpg)' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="page-title text-center">
                                <h2>dresses</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ##### Breadcumb Area End ##### */}
            {/* ##### Shop Grid Area Start ##### */}
            <section className="shop_grid_area section-padding-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3">
                            <div className="shop_sidebar_area">
                                {/* ##### Single Widget ##### */}
                                <div className="widget catagory mb-50">
                                    {/* Widget Title */}
                                    <h6 className="widget-title mb-30">Danh Mục</h6>
                                    {/*  Catagories  */}
                                    <div className="catagories-menu">
                                        <ul id="menu-content2" className="menu-content collapse show">
                                            {/* Single Item */}
                                            {cate.map((cate) => (
                                                <li data-toggle="collapse" data-target="#clothing">
                                                    <Link to="">{cate.name}</Link>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9">
                            <div className="shop_grid_product_area">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="product-topbar d-flex align-items-center justify-content-between">
                                            {/* Total Products */}
                                            <div className="total-products">
                                                <small><span>186</span> products found</small>
                                            </div>
                                            {/* Sorting */}
                                            <div className="product-sorting d-flex">
                                                <b>Sort by:</b>
                                                <form action="#" method="get">
                                                    <select name="select" id="sortByselect">
                                                        <option value="value">Highest Rated</option>
                                                        <option value="value">Newest</option>
                                                        <option value="value">Price: $$ - $</option>
                                                        <option value="value">Price: $ - $$</option>
                                                    </select>
                                                    <input type="submit" className="d-none" defaultValue />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="row row-cols-1 row-cols-md-3">
                                        {items.map((product) => (
                                            <div className="col mb-4">
                                                <div className="card h-100">
                                                    <img src={product.img} className="card-img-top" alt="..." />
                                                    <div className="card-body">
                                                        <h5 className="card-title">{product.name_product}</h5><br />
                                                        <div className="col mb-12">

                                                            <h6 className="card-text">{product.meta}</h6>
                                                            <pre className="card-text">{product.price}.Vnđ  còn {product.sale_price}.Vnđ</pre>

                                                        </div>

                                                    </div>

                                                    <div class="card-footer">
                                                        <Link to={`detail/${product.id}`} class="btn btn-primary mx-4" >Chi tiết</Link>
                                                        <Link to="" class="btn btn-success">Giỏ Hàng</Link>
                                                    </div>
                                                </div>
                                            </div>

                                        ))}
                                    </div>


                                </div>
                            </div>


                            {/* Pagination */}
                            <nav aria-label="navigation">
                                <ul className="pagination mt-50 mb-70">
                                    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-left" /></a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">...</a></li>
                                    <li className="page-item"><a className="page-link" href="#">21</a></li>
                                    <li className="page-item"><a className="page-link" href="#"><i className="fa fa-angle-right" /></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* ##### Shop Grid Area End ##### */}
        </div>
    )
}

export default Shop
