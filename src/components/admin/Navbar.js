import React from 'react'
import logo from '../../assets/admin/css/dist/img/AdminLTELogo.png';
import imageUser from '../../assets/admin/css/dist/img/user2-160x160.jpg'
import { Link } from "react-router-dom";
const Sliderbar = props => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">MR THI REACTJS</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={imageUser} className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Lê Đình Thi</a>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
                        <li className="nav-item has-treeview menu-open">
                            <a href="#" className="nav-link active">
                                
                                <p>
                                    Bảng điều khiển
                                    
                                </p>
                            </a>
                            <ul className="nav nav-treeview">

                                <li className="nav-item">
                                    <a href="./index2.html" className="nav-link">
                                        
                                        <p>Trang chủ</p>
                                    </a>
                                </li>

                            </ul>
                        </li>

                        <li className="nav-item has-treeview menu-open">
                            <a href="#" className="nav-link active">
                                
                                <p>
                                    Danh mục sản phẩm
                                    
                                </p>
                            </a>
                            <ul className="nav nav-treeview">

                                <li className="nav-item">
                                    <Link to="/admin/cate" className="nav-link">
                                       
                                        <p>Show danh mục</p>
                                    </Link>
                                </li>

                            </ul>
                        </li>

                        <li className="nav-item has-treeview menu-open">
                            <a href="#" className="nav-link active">
                               
                                <p>
                                    Sản phẩm
                                    
                                </p>
                            </a>
                            <ul className="nav nav-treeview">

                                <li className="nav-item">
                                    <Link to={"/admin/product"} className="nav-link">
                                    
                                        <p>show sản Phẩm</p>
                                    </Link>
                                </li>

                            </ul>
                        </li>


                        <li className="nav-item has-treeview menu-open">
                            <a href="#" className="nav-link active">
                               
                                <p>
                                    Danh mục bài viết
                                    
                                </p>
                            </a>
                            <ul className="nav nav-treeview">

                                <li className="nav-item">
                                    <Link to={"/admin/cate-blog"} className="nav-link">
                                    
                                        <p>Show danh mục</p>
                                    </Link>
                                </li>

                            </ul>
                        </li>


                        <li className="nav-item has-treeview menu-open">
                            <Link to={"/admin/blog"} className="nav-link active">
                               
                                <p>
                                    Bài viết
                                    
                                </p>
                            </Link>
                            <ul className="nav nav-treeview">

                                <li className="nav-item">
                                    <Link to={"/admin/blog"} className="nav-link">
                                    
                                        <p>Show bài viết</p>
                                    </Link>
                                </li>

                            </ul>
                        </li>


                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>
    )
}

export default Sliderbar
