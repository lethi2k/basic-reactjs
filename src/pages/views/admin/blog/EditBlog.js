import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
  useParams
} from "react-router-dom";
const EditBlog = () => {
  let { id } = useParams();
  const [content, setContent] = useState('');
  const [img, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, watch, errors, setValue } = useForm();
  const [detail, setDetail] = useState({});

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

  const setList = () => {
    axios
      .get("http://127.0.0.1:8000/api/blog/" + id)
      .then(function (response) {
        setDetail(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  const onHandleChange = e => {
    const { name, value } = e.target;
    setDetail({
      ...detail,
      [name]: value
    })
  }
  // const onChangeContent = e => {
  //   const content = e.editor.getData();
  //   setDetail({
  //     content: content
  //   });
  // }

  useEffect(setList, []);
  const onSubmit = data =>
    axios
      .post("http://127.0.0.1:8000/api/blog/update/" + id, data)
      .then(function (response) {
        window.location.pathname = "/admin/blog";
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
              id="name" value={detail.name} onChange={onHandleChange}
              name="name" ref={register({ required: true })}
            />
            {errors.name && <span style={{ color: "red" }} >This name is required</span>}
          </div>

          <div className="form-group">
            <input type="hidden" className="form-control" value={img ? img : detail.img} name="img" ref={register({ required: true })} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Image</label><br />
            <img src={img ? img : detail.img} /><br />
            <input type="file" className="form-control" placeholder="Upload an image" ref={register({ required: true })} onChange={uploadImage} />
            {errors.image && <span style={{ color: "red" }} >The image is required</span>}
          </div>


        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="meta">Mô tả</label>
            <input
              type="text"
              className="form-control"
              id="meta" value={detail.meta} onChange={onHandleChange}
              name="meta" ref={register({ required: true })}
            />
            {errors.meta && <span style={{ color: "red" }} >This meta is required</span>}
          </div>

          <div className="form-group">
            <label htmlFor="meta">Nội dung</label>
            <input type="hidden" className="form-control" id="content" value={content ? content : detail.content} name="content" ref={register({ required: true })} />
            <CKEditor
              editor={ClassicEditor}
              data={detail.content}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log(data);
                setContent(data);
              }}

            />
          </div>
          <div className="form-group">
            <label htmlFor="cate_id">iddm</label>
            <input
              type="text"
              className="form-control"
              id="cate_id" value={detail.cate_id} onChange={onHandleChange}
              name="cate_id" ref={register({ required: true })}
            />
            {errors.cate_id && <span style={{ color: "red" }} >This iddm is required</span>}
          </div>
          <button type="submit" className="btn btn-success">
            Edit Blog
        </button>
        </div>
      </div>
    </form>
  );
};

export default EditBlog;
