import React from "react";
import Bg5 from '../../../assets/client/img/bg-img/bg-5.jpg';
const Contact = () => {
    return (
        <div>
            <div className="breadcumb_area breadcumb-style-two bg-img" style={{ backgroundImage: 'url(' + Bg5 + ')' }}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="page-title text-center">
                                <h2>Về chúng tôi</h2>
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
                        <div className="page-title text-center col-sm-12 my-5">
                            <h2>Liên hệ với chúng tôi</h2>
                        </div>
                        <div className="col-sm-5">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8638558814596!2d105.74459841540242!3d21.038132792833117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIHRo4buxYyBow6BuaCBGUFQgUG9seXRlY2huaWMgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1596973075030!5m2!1svi!2s" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                        </div>
                        <div className="col-sm-2">

                        </div>
                        <div className="col-sm-5">
                            <p><b>Email :</b> ledinhthi2909@gmail.com</p>
                            <p><b>Số điện thoại :</b> 0986966813</p>
                            <p><b>địa chỉ :</b> 20 lê đức thọ hà nội việt nam</p>
                        </div>

                        {/* Single Blog Area */}
                    </div>
                </div>
            </div>
            {/* end blog */}

        </div>
    )
}


export default Contact
