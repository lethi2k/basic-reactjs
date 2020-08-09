import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
    useParams
} from "react-router-dom";
const ProductDetail = () => {
    const [prdetail, setPrdetail] = useState({});
    let { id } = useParams();
    console.log(id);
    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/product/" + id)
            .then(function (response) {
                setPrdetail(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    useEffect(setList, []);
    return (
        <section className="single_product_details_area d-flex align-items-center">
            {/* Single Product Thumb */}
            <div className="single_product_thumb clearfix">
                <div className="product_thumbnail_slides owl-carousel owl-theme owl-loaded">
                    <div className="owl-stage-outer">
                        <div className="owl-stage">
                            <div className="owl-item cloned">
                                <img src={prdetail.img} alt="" />
                            </div>
                            <div className="owl-item cloned" >
                                <img src="img/product-img/product-big-3.jpg" alt="" />
                            </div>
                            <div className="owl-item" >
                                <img src="img/product-img/product-big-1.jpg" alt="" />
                            </div>
                            <div className="owl-item active">
                                <img src="img/product-img/product-big-2.jpg" alt="" />
                            </div>
                            <div className="owl-item">
                                <img src="img/product-img/product-big-3.jpg" alt="" />
                            </div>
                            <div className="owl-item cloned">
                                <img src="img/product-img/product-big-1.jpg" alt="" />
                            </div>
                            <div className="owl-item cloned" >
                                <img src="img/product-img/product-big-2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="owl-controls">
                        <div className="owl-nav">
                            <div className="owl-prev">
                                <img src="img/core-img/long-arrow-left.svg" alt="" />
                            </div>
                            <div className="owl-next" >
                                <img src="img/core-img/long-arrow-right.svg" alt="" />
                            </div>
                        </div>
                        <div className="owl-dots" style={{ display: 'none' }} />
                    </div>
                </div>
            </div>
            {/* Single Product Description */}
            <div className="single_product_desc clearfix">
                <span>mango</span>
                <a href="cart.html">
                    <h2>One Shoulder Glitter Midi Dress</h2>
                </a>
                <p className="product-price"><span className="old-price">$65.00</span> $49.00</p>
                <p className="product-desc">Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.</p>
                {/* Form */}
                <form className="cart-form clearfix" method="post">
                    {/* Select Box */}
                    <div className="select-box d-flex mt-50 mb-30">
                        <select name="select" id="productSize" className="mr-5" style={{ display: 'none' }}>
                            <option value="value">Size: XL</option>
                            <option value="value">Size: X</option>
                            <option value="value">Size: M</option>
                            <option value="value">Size: S</option>
                        </select><div className="nice-select mr-5" tabIndex={0}><span className="current">Size: XL</span><ul className="list"><li data-value="value" className="option selected focus">Size: XL</li><li data-value="value" className="option">Size: X</li><li data-value="value" className="option">Size: M</li><li data-value="value" className="option">Size: S</li></ul></div>
                        <select name="select" id="productColor" style={{ display: 'none' }}>
                            <option value="value">Color: Black</option>
                            <option value="value">Color: White</option>
                            <option value="value">Color: Red</option>
                            <option value="value">Color: Purple</option>
                        </select><div className="nice-select" tabIndex={0}><span className="current">Color: Black</span><ul className="list"><li data-value="value" className="option selected">Color: Black</li><li data-value="value" className="option">Color: White</li><li data-value="value" className="option">Color: Red</li><li data-value="value" className="option">Color: Purple</li></ul></div>
                    </div>
                    {/* Cart & Favourite Box */}
                    <div className="cart-fav-box d-flex align-items-center">
                        {/* Cart */}
                        <button type="submit" name="addtocart" value={5} className="btn essence-btn">Add to cart</button>
                        {/* Favourite */}
                        <div className="product-favourite ml-4">
                            <a href="#" className="favme fa fa-heart" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}


export default ProductDetail
