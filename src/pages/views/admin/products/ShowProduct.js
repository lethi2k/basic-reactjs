import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from '../../../../components/Pagination';
const ShowProducts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  // Data
  const initialFormState = { id: null, name_product: '', img: '', price: '', sale_price: '', meta: '', content: '', id_dm: '' }


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

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

  const deleteProduct = (id) => {
    axios
      .delete("http://127.0.0.1:8000/api/product/delete/" + id)
      .then(function (response) {
        setList();
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const deleteProductAll = () => {
    axios
      .delete("http://127.0.0.1:8000/api/product/delete")
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
            <Link to="/admin/add-product" className="btn btn-primary">
              Add Product
            </Link>
          </button>
          <button type="button" className="btn btn-light">
            <button type="button" className="btn btn-block btn-danger" onClick={() => {
              if (
                window.confirm("Delete All product ?")
              ) {
                deleteProductAll();
                alert("Deleted Successfully !")
              }
            }}>Delete all</button>
          </button>

        </div>

        <div className="card">
          <div className="card-header">
            <h3 className="card-title">View table product</h3>
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
                  <th>Ảnh sản phẩm</th>
                  <th>Giá</th>
                  <th>Giảm Giá</th>
                  <th>Hành Động</th>
                  <th>Danh mục</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((product, index) => (
                  <tr key={index}>
                    <th >{product.id}</th>
                    <td>{product.name_product}</td>
                    <td><img src={product.img} width="100px" /></td>
                    <td>{product.price}</td>
                    <td>{product.sale_price}</td>
                    <td>{product.name}</td>
                    <td>
                      <Link to={`edit-product/${product.id}`}>
                        <button type="button" className="btn btn-success mx-3">
                          Edit
                      </button>
                      </Link>

                      <button
                        type="button"
                        onClick={() => {
                          if (
                            window.confirm("Delete product ?")
                          ) {
                            deleteProduct(product.id);
                            alert("Deleted Successfully !")
                          }
                        }}
                        className="btn btn-danger"
                      >
                        Delete
                    </button>
                      <Link to={`product-detail/${product.id}`}>
                        <button type="button" className="btn btn-success mx-3">
                          Detail
                      </button>
                      </Link>

                      {/* <Link
                        type="button"
                        className="btn btn-primary mx-3"
                      >
                        Product detail
                    </Link> */}

                    </td>
                  </tr>
                ))}
              </tbody>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={items.length}
                paginate={paginate}
              />
            </table>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>

  );
};

export default ShowProducts;
