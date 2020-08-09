import React, { Component } from 'react';
import Product2 from '../../assets/client/img/product-img/product-2.jpg';
import Product3 from '../../assets/client/img/product-img/product-3.jpg';
import Product4 from '../../assets/client/img/product-img/product-4.jpg';
import Product5 from '../../assets/client/img/product-img/product-5.jpg';

export default class ProductsList extends Component {
    render() {
        return (
            <section className="new_arrivals_area section-padding-80 clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading text-center">
                                <h2>Tất cả sản phẩm</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="popular-products-slides owl-carousel">
                                {/* Single Product */}
                                <div className="single-product-wrapper">
                                    {/* Product Image */}
                                    <div className="product-img">
                                        <img src={Product5} alt="" />
                                        {/* Hover Thumb */}
                                        <img className="hover-img" src={Product2} alt="" />
                                        {/* Favourite */}
                                        <div className="product-favourite">
                                            <a href="#" className="favme fa fa-heart" />
                                        </div>
                                    </div>
                                    {/* Product Description */}
                                    <div className="product-description">
                                        <span>topshop</span>
                                        <a href="single-product-details.html">
                                            <h6>Knot Front Mini Dress</h6>
                                        </a>
                                        <p className="product-price">$80.00</p>
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
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
