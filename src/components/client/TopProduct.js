import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TopProducts = () => {
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

    return (
        <section className="new_arrivals_area section-padding-80 clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading text-center">
                            <h2>Sản phẩm</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {items.map((product) => (
                        <div className="col-3">
                            <div className="single-product-wrapper">
                                {/* Product Image */}
                                <div className="product-img">
                                    <img src={product.img} alt="" />
                                </div>
                                {/* Product Description */}
                                <div className="product-description">
                                    <a href="single-product-details.html">
                                        <h6>{product.name_product}</h6>
                                    </a>
                                    <p className="product-price">${product.price}</p>
                                    {/* Hover Content */}
                                    <div className="hover-content">
                                        {/* Add to Cart */}
                                        <div className="add-to-cart-btn">
                                            <a href="#" className="btn essence-btn">Add to Cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopProducts;
