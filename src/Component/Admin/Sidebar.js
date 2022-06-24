import React from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

function Sidebar() 
{
    var iAdminId = localStorage.getItem('iAdminId');
    var vUserName = localStorage.getItem('vUserName');
    let history = useHistory();

    const logout = () =>
    {
        localStorage.removeItem("iAdminId");
        history.push("/admin/login");
        window.location.reload(1);
    }
  
    if(!iAdminId) 
    {
        history.push("/admin/login");
        window.location.reload(1);
      
    }

  return (
    <>
          <section id="sidebar">
                <Link to='/admin/' >
                  <h2 className="txt">CompleteStack</h2>
                </Link>
              <ul className="side-menu tops">
                  <li className="active">
                        <Link to='/admin/'>
                          <i className='bx bxs-dashboard' ></i>
                          <span className="text">Dashboard</span>
                        </Link>
                  </li>
                  <li>
                      <Link to='/admin/listing'>
                          <i className='bx bxs-shopping-bag-alt' ></i>
                          <span className="text">Image Content</span>
                        </Link>
                  </li>
                  
                  
              </ul>
              <ul className="side-menu">
                  
                  <li>
                      <a className="logout" onClick={logout}>
                      <i class="fa fa-sign-out" aria-hidden="true"></i>
                          <span className="text">Logout</span>
                      </a>
                  </li>
              </ul>
          </section>
          <div className="head-title">
              <div className="left">
                  <h1>Dashboard</h1>
              </div>
              <div onClick={logout} className='logout '>
              <i class="fa fa-sign-out" aria-hidden="true"></i> Logout
              </div>
          </div>
    </>
  )
}

export default Sidebar