import React from 'react'
import axios from "axios";
import { useForm } from 'react-hook-form';
const AddCategory = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data =>
        axios
            .post("http://127.0.0.1:8000/api/cate/add/", data)
            .then(function (response) {
                window.location.pathname = "/admin/cate";
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
                            id="name"
                            name="name" ref={register({ required: true })}
                        />
                        {errors.name && <span style={{ color: "red" }} >This name is required</span>}
                    </div>
                </div>

                <div className="col-sm-6">

                    <button type="submit" className="btn btn-success mt-4">
                        Add cate
        </button>
                </div>
            </div>
        </form>
    )
}

export default AddCategory
