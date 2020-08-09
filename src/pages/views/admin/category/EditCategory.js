import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import {
    useParams
} from "react-router-dom";
const EditCategory = () => {
    let { id } = useParams();
    const { register, handleSubmit, errors } = useForm();
    const [cate, setCate] = useState({});

    const setList = () => {
        axios
            .get("http://127.0.0.1:8000/api/cate/" + id)
            .then(function (response) {
                setCate(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCate({
            ...cate,
            [name]: value
        })
    }
    // const onChangeContent = e => {
    //   const content = e.editor.getData();
    //   setCate({
    //     content: content
    //   });
    // }

    useEffect(setList, []);
    const onSubmit = data =>
        axios
            .post("http://127.0.0.1:8000/api/cate/update/" + id, data)
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
                            id="name" value={cate.name} onChange={onHandleChange}
                            name="name" ref={register({ required: true, pattern: /^[A-Za-z0-9]/ })}
                        />
                        {errors.name && <span style={{ color: "red" }} >This name is required</span>}
                    </div>
                </div>

                <div className="col-sm-6">

                    <button type="submit" className="btn btn-success mt-4">
                        Edit cate
        </button>
                </div>
            </div>
        </form>
    )
}

export default EditCategory
