import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const AddProduct = () => {

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

  const [img, setImage] = useState('');
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();

  const uploadImage = e => {
    const files = e.target.files[0];
    const formData = new FormData();
    formData.append("upload_preset", "react_image");
    formData.append("file", files);
    setLoading(true);
    axios
      .post("https://api.cloudinary.com/v1_1/plasst/image/upload", formData)
      .then(res => setImage(res.data.secure_url))
      .then(setLoading(false))
      .catch(err => console.log(err));
  }

  const onSubmit = data =>
    axios
      .post("http://127.0.0.1:8000/api/product/add/", data)
      .then(function (response) {
        window.location.pathname = "/admin/product";
      })
      .catch(function (error) {
        console.log(error);
      });
  return (
    <form method='POST' onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              className="form-control"
              id="name_product"
              name="name_product" ref={register({ required: true, pattern: /^[A-Za-z0-9]/ })}
            />
            {errors.name_product && <span style={{ color: "red" }} >This name is required</span>}
          </div>

          <div className="form-group">
            <input type="hidden" className="form-control" value={img} name="img" ref={register({ required: true })} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Image</label><br />
            <img src={img} /><br />
            <input type="file" className="form-control" placeholder="Upload an image" ref={register({ required: true })} onChange={uploadImage} />
            {errors.image && <span style={{ color: "red" }} >The image is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="price">Giá</label>
            <input
              type="text"
              className="form-control"
              id="price"
              name="price" ref={register({ required: true, min: 10 })}
            />
            {errors.price && <span style={{ color: "red" }} >The price is required and more than 10 vnd</span>}
          </div>
          <div className="form-group">
            <label htmlFor="sale_price">Giảm giá</label>
            <input
              type="text"
              className="form-control"
              id="sale_price"
              name="sale_price" ref={register({ required: true, min: 10 })}
            />
            {errors.sale_price && <span style={{ color: "red" }} >The sale price is required and more than 10 vnd</span>}
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="meta">Mô tả</label>
            <input
              type="text"
              className="form-control"
              id="meta"
              name="meta" ref={register({ required: true })}
            />
            {errors.meta && <span style={{ color: "red" }} >This meta is required</span>}
          </div>
          {/* 
          <div className="form-group">
            <label htmlFor="meta">Nội dung</label>
            <input
              type="text"
              className="form-control"
              id="content"
              name="content" ref={register({ required: true })}
            />
            {errors.content && <span style={{ color: "red" }} >This content is required</span>}
          </div> */}

          <div className="form-group">
            <input type="hidden" className="form-control" id="content" value={content} name="content" ref={register({ required: true })} />
            <label htmlFor="content">Nội Dung</label>
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </div>
          <div className="form-group">
            <label>Id danh mục</label>
            <select className="form-control" name="id_dm" ref={register}>
              <option value="0">Select danh mục</option>
              {items.map((cate, index) => (
                <option value={cate.id} key={index}>{cate.name}</option>
              ))}
            </select>
            {errors.id_dm && <span style={{ color: "red" }} >This iddm is required</span>}
          </div>
          <button type="submit" className="btn btn-success">
            Add product
        </button>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
