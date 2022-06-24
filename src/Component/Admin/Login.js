import React, { useState, Component } from "react";
import "../../css/Admin.css";
import axios from "axios";
import swal from "sweetalert";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from "validator";


const Login = () => {
  var answer = window.location.href;
  const answer_array = answer.split("/");

  let history = useHistory();

  const [Email, setEmail] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [Password, setPassword] = useState("");
  const [ErrorPassword, setErrorPassword] = useState("");

  const something = (event) => {
    if (event.keyCode === 13) {
      login();
    }
  };

  function login() {
    var error = false;
    if (validator.isEmail(Email)) {
      setEmailError("");
    } else {
      setEmailError("Please Enter Valid Email Address!");
      error = true;
    }
    if (Password) {
      setErrorPassword("");
    } else {
      setErrorPassword("Please Enter Password");
      error = true;
    }

    if (answer_array[2] == "localhost:3000") {
      var url = "http://localhost/compeletestack/backend/api/login";
    } else {
      var url = "https://compeletestack.justcodenow.com/backend/api/login";
    }

    if (error == false) {
      const fd = new FormData();
      fd.append("vEmail", Email);
      fd.append("vPassword", Password);

      const dataa = axios
        .post(url, fd)
        .then((res) => {
          if (res.data.estatus == "0") {
            var now = new Date().getTime();
            localStorage.setItem("iAdminId", res.data.iAdminId);
            localStorage.setItem("vUserName", res.data.vUserName);
            localStorage.setItem("setupTime", now);

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
              history.push("/admin/");
              window.location.reload(1);
            }, 2000);
          } else {
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
        .catch((error) => {});
    }
  }

  return (
    <>
      <section className="ftco-section">
        <img
          className="img"
          src={process.env.PUBLIC_URL + "/Images/bg.jpg"}
          alt="Image"
        />
        <div className="box">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <h1 className="heading">Login </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-11">
              <div className="login-wrap p-0">
                <form className="signin-form">
                  <div className="form-group">
                    <input
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Email"
                    />
                    <span className="red">{EmailError}</span>
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </div>
                  <div className="form-group">
                    <input
                      id="password-field"
                      onKeyDown={(e) => something(e)}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                    <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                    <span className="red">{ErrorPassword}</span>
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      onClick={login}
                      className="form-control btn btn-primary submit px-3"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
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
      </section>

      {/* Plane Animation  */}

      <div class="track track-1">
        <div class="track-inner">
          <div class="plane-wrapper">
            <div class="plane">
              <div class="plane-tail"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="track track-2">
        <div class="track-inner">
          <div class="plane-wrapper">
            <div class="plane">
              <div class="plane-tail"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
