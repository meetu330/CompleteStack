import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Sidebar from '../Sidebar'
import axios from 'axios';
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const $ = require('jquery');
$.DataTable = require('datatables.net');

class Listing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            all_data: [],
        };
    }

    async componentDidMount() {
        $('.example').DataTable().destroy();
        setTimeout(function () {
            $('.example').DataTable({
                "pageLength": 50
            });
        }, 1000);

        var answer = window.location.href;
        const answer_array = answer.split('/');
        if (answer_array[2] == 'localhost:3000') {
            var url = 'http://localhost/compeletestack/backend/api/all_image_get';
        }
        else {
            var url = 'https://compeletestack.justcodenow.com/backend/api/all_image_get';
        }

        const response = await fetch(url);
        const data = await response.json();
        this.setState({ all_data: data.data });
    }

    deletedata(e) {

        var answer = window.location.href;
        const answer_array = answer.split('/');
        if (answer_array[2] == 'localhost:3000') {
            var del = 'http://localhost/compeletestack/backend/api/delete';
        }
        else {
            var del = 'https://compeletestack.justcodenow.com/backend/api/delete';
        }

        var iCompletestackId = e.target.id;
        const fd = new FormData();
        fd.append('iCompletestackId', iCompletestackId);
        if (iCompletestackId) {
            const dataa = axios.post(del, fd)
                .then(res => {
                    if (res.data.Status == '0') {
                        toast.success(res.data.message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });

                        setTimeout(function () {
                            window.location.reload(1);
                        }, 1000);
                    }
                    else {
                        toast.error(res.data.message, {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }
                })
                .catch(error => {
                })
        }
    }


    render() {
        var all_data = this.state.all_data;

        return (
            <>
                <Sidebar />
                <section id="content" className="my-4">
                    <main>
                        <div className="main-content" id="panel" >
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-12 col-md-12 col-sm-12">
                                        <div className="card">
                                            <div className="card-header mb-4 border-0">
                                                <div className="row py-2 ">
                                                    <div className="col-11">
                                                        <h3 className="mb-0">Image Content</h3>
                                                    </div>
                                                    <div className="col-1 text-right">
                                                        <Link to='/admin/add'>
                                                            <a className="Btn">Add</a>
                                                        </Link>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                <table id="example" className="table align-items-center table-flush example">
                                                    <thead className="thead-light ">
                                                        <tr>
                                                            <th scope="col">Id</th>
                                                            <th scope="col">Image</th>
                                                            <th scope="col">Title</th>
                                                            <th scope="col">AddedDate</th>
                                                            <th scope="col">Status</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            all_data.map((all_img, index) =>
                                                            (
                                                                <tr>
                                                                    <th>{index + 1}</th>
                                                                    <td><img className="h-101 w-101" src={all_img.vImage} /></td>
                                                                    <td>{all_img.vTitle}</td>
                                                                    <td>{all_img.dtAddedDate}</td>
                                                                    <td><span className="status pending">{all_img.eStatus}</span></td>
                                                                    <td>
                                                                        <Link to={`/admin/edit/${all_img.iCompletestackId}`}>
                                                                        <button className="Btn">Edit</button>
                                                                            &nbsp;&nbsp;&nbsp;
                                                                        </Link>

                                                                        <button id={`${all_img.iCompletestackId}`} className="Btn btn-danger" onClick={this.deletedata}>Delete</button>
                                                                    </td>

                                                                </tr>
                                                            ))
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            <ToastContainer
                                                position="top-right"
                                                autoClose={5000}
                                                hideProgressBar={false}
                                                newestOnTop={false}
                                                closeOnClick
                                                rtl={false}
                                                pauseOnFocusLoss
                                                draggable
                                                pauseOnHover
                                            />

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>



                    </main>

                </section>
                
            </>
        );
    }

}
export default Listing; 