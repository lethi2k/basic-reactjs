import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutAdmin from '../pages/layouts/LayoutAdmin';
import LayoutClient from '../pages/layouts/LayoutClient';
import Home from '../pages/views/client/Home';
import Shop from '../pages/views/client/Shop';

import Dashboard from '../pages/views/admin/Dashboard';
//category
import ShowCategories from '../pages/views/admin/category/ShowCategories';
import AddCategory from '../pages/views/admin/category/AddCategory';
import EditCategory from '../pages/views/admin/category/EditCategory';
// product
import ShowProducts from '../pages/views/admin/products/ShowProduct';
import AddProduct from '../pages/views/admin/products/AddProduct';
import EditProduct from '../pages/views/admin/products/EditProduct';
import ProductDetail from '../pages/views/admin/products/ProductDetail';
//cate blog
import ShowCateBlog from '../pages/views/admin/cate-blog/ShowCateBlog';
import AddCateBlog from '../pages/views/admin/cate-blog/AddCateBlog';
import EditCateBlog from '../pages/views/admin/cate-blog/EditCateBlog';

//url blog
import ShowBlog from '../pages/views/admin/blog/ShowBlog';
import AddBlog from '../pages/views/admin/blog/AddBlog';
import EditBlog from '../pages/views/admin/blog/EditBlog';
import BlogDetail from '../pages/views/admin/blog/BlogDetail';

//main
import ProductDetailFr from '../pages/views/client/ProductDetail'
import Blog from '../pages/views/client/Blog';
import BlogDetailFr from '../pages/views/client/BlogDetail';
import Contact from '../pages/views/client/Contact';

const Routers = () => {
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?/:path?/:path?/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            {/* url product */}
                            <Route path='/admin/product' exact>
                                <ShowProducts />
                            </Route>
                            <Route path='/admin/add-product' exact>
                                <AddProduct />
                            </Route>
                            <Route path='/admin/edit-product/:id' exact>
                                <EditProduct />
                            </Route>
                            <Route path='/admin/product-detail/:id' exact>
                                <ProductDetail />
                            </Route>
                            {/* url cate product */}
                            <Route path='/admin/cate' exact>
                                <ShowCategories />
                            </Route>
                            <Route path='/admin/add-cate' exact>
                                <AddCategory />
                            </Route>
                            <Route path='/admin/edit-cate/:id' exact>
                                <EditCategory />
                            </Route>
                            {/* url cate blog */}
                            <Route path='/admin/cate-blog' exact>
                                <ShowCateBlog />
                            </Route>
                            <Route path='/admin/add-cate-blog' exact>
                                <AddCateBlog />
                            </Route>
                            <Route path='/admin/edit-cate-blog/:id' exact>
                                <EditCateBlog />
                            </Route>
                            {/* url blog */}
                            <Route path='/admin/blog' exact>
                                <ShowBlog />
                            </Route>
                            <Route path='/admin/add-blog' exact>
                                <AddBlog />
                            </Route>
                            <Route path='/admin/edit-blog/:id' exact>
                                <EditBlog />
                            </Route>

                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route path="/:path?/:path?/:path?/:path?" exact>
                    <LayoutClient>
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Router path="/shop" exact>
                                <Shop />
                            </Router>
                            <Router path="/detail/:id" exact>
                                <ProductDetailFr />
                            </Router>
                            <Router path="/blog" exact>
                                <Blog />
                            </Router>
                            <Router path="/blog-detail/:id" exact>
                                <BlogDetailFr />
                            </Router>
                            <Router path="/contact" exact>
                                <Contact />
                            </Router>

                        </Switch>
                    </LayoutClient>
                </Route>
            </Switch>
        </Router>
    )
}


export default Routers
