import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import parse from 'html-react-parser';
import {
    useParams
} from "react-router-dom";
const ProductDetail = () => {
    let { id } = useParams();
    const [detail, setDetail] = useState({});
    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/product/" + id)
            .then(function (response) {
                setDetail(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    useEffect(setList, []);
    return (
        <div className="col-md-12">
            <div className="box">
                <div className="comtent">
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: '10px' }}>#</th>

                                <th>Nội dung</th>
                                <th>Mô tả</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >{detail.id}</td>
                                <td>{detail.content}</td>
                                <td>{detail.meta}</td>
                                <td> <Link to="/admin/product">
                                    <button type="button" className="btn btn-success mx-3">
                                        Quay lại
                                    </button>
                                </Link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail
