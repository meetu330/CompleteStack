import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../css/home.css";

const Navbar = (props) => {
  useEffect(() => {
    const Open = document.getElementById("bar");
    const Close = document.getElementById("close");
    const navbar = document.querySelector(".nav");

    Open.addEventListener("click", () => {
      navbar.classList.remove("hidden");
    });

    Close.addEventListener("click", () => {
      navbar.classList.add("hidden");
    });
  }, []);

  return (
    <>
      <nav className={`navbar ${props.color}`}>
        <div className="logo">
          <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/Images/Logo.png"}
            alt="logo"
            className="images"
          />
          </Link>
          <button className=" btn hamburgerBar" id="bar">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
        </div>
        <div className="nav hidden">
          <button className="btn closeBtn" id="close">
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
          <li>
            <NavLink exact={true} activeClassName="isActive" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="isActive" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="isActive" to="/service">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="isActive" to="/careers">
              Career
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="isActive" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="isActive" to="/contact">
              Contact
            </NavLink>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
