import React from 'react'
import Navbar from '../../components/admin/Navbar';
import Topbar from '../../components/admin/TopBar';
import Footer from '../../components/admin/Footer';
import '../../assets/admin/css/dist/css/adminlte.min.css';
import '../../assets/admin/css/style.scss';
export default ({ children }) => {
    return (
        <div className="admin-page">
            <Topbar />
            <div id="wrapper">
                <Navbar />
                <div className="content-wrapper">
                    <section class="content">
                        <div id="content">
                            <div className="container-fluid">
                                {children}
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />

            </div>
        </div>
    )
}