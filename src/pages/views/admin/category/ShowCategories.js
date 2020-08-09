import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ShowCategories = () => {
    const [items, setItems] = useState([]);

    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/cate/index")

            .then(function (response) {
                setItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(setList, []);

    const deleteCate = (id) => {
        axios
            .delete("http://127.0.0.1:8000/api/cate/delete/" + id)
            .then(function (response) {
                setList();
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    const deleteCateAll = () => {
        axios
            .delete("http://127.0.0.1:8000/api/cate/delete/")
            .then(function (response) {
                setList();
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className="row">
            <div className="col-12">
                <div className="d-flex justify-content-end my-3">
                    <button type="button" className="btn btn-light">
                        <Link to="/admin/add-cate" className="btn btn-primary">
                            Add cate
            </Link>
                    </button>
                    <button type="button" className="btn btn-light">
                        <button type="button" class="btn btn-block btn-danger" onClick={() => {
                            if (
                                window.confirm("Delete cate ?")
                            ) {
                                deleteCateAll();
                                alert("Deleted Successfully !")
                            }
                        }}>Delete all</button>
                    </button>

                </div>

                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">View table cate</h3>
                        <div className="card-tools">
                            <div className="input-group input-group-sm" style={{ width: '150px' }}>
                                <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-default"><i className="fas fa-search" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.card-header */}
                    <div className="card-body table-responsive p-0">
                        <table className="table table-hover text-nowrap">
                            <thead>
                                <tr>
                                    <th style={{ width: '10px' }}>#</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Hành Động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((cate, index) => (
                                    <tr key={index}>
                                        <th >{++index}</th>
                                        <td>{cate.name}</td>

                                        <td>
                                            <Link to={`edit-cate/${cate.id}`}>
                                                <button type="button" className="btn btn-success mx-3">
                                                    Edit
                                                </button>
                                            </Link>

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    if (
                                                        window.confirm("Delete cate ?")
                                                    ) {
                                                        deleteCate(cate.id);
                                                        alert("Deleted Successfully !")
                                                    }
                                                }}
                                                className="btn btn-danger"
                                            >
                                                Delete
                                                        </button>

                                            {/* <Link
                        type="button"
                        className="btn btn-primary mx-3"
                      >
                        cate detail
                    </Link> */}

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}
            </div>
        </div>
    )
}

export default ShowCategories
