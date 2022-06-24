import React, { useState,useEffect } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../../css/Admin.css"

function Dashboard() 
{
    var answer = window.location.href;
    const answer_array = answer.split('/');
    const [Lettest , setLettest] = useState([]);

    if (answer_array[2] == 'localhost:3000') {
        var url = 'http://localhost/compeletestack/backend/api/all_image_get';
    }
    else {
        var url = 'https://compeletestack.justcodenow.com/backend/api/all_image_get';
    }

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setLettest(res.data.data);
            })
            .catch(err => {
                console.log(err);
            })

    }, [])

    console.log(Lettest);

    return (
        <>
            <Sidebar />
            <section id="content">
                <main>
                    <Link to='/admin/listing'>
                        <div className="box-info row">
                            <li className=' cards col-3'>
                                <i className='bx bxs-calendar-check' ></i>
                                <span className="text">
                                    <h3>{Lettest.length}</h3>
                                    <p>Latest Data</p>
                                </span>
                            </li>
                        </div>
                    </Link>


                    <div className="table-data">
                        <div className="order">
                            <div className="head">
                                <h3>Latest Data</h3>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Date Order</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        Lettest.map(function(letdata,index)
                                        {
                                            if(letdata.eStatus=='Inactive')
                                            {
                                                var inactive = 'inactive';
                                            }
                                            if (index < 5)
                                            {
                                                return <tr>
                                                    <td>
                                                        <img src={letdata.vImage} />
                                                        <p>{letdata.vTitle}</p>
                                                    </td>
                                                    <td>{letdata.dtAddedDate}</td>
                                                    <td>
                                                        <span className={` status ${inactive}`}>
                                                            {letdata.eStatus}
                                                        </span>
                                                    </td>
                                                </tr>
                                            }
                                        })
                                    }
                                    
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                       
                    </div>
                </main>

            </section>

        </>
    )
}

export default Dashboard