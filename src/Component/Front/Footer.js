import React from "react";
import "../../css/home.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* company  */}

      <section className="company">
        <h1>
          10+ year history of <br />
          proven <span style={{ fontStyle: "italic" }}>results</span>
        </h1>
        <div className="img">
          <img
            src={process.env.PUBLIC_URL + "/Images/Shape-11.png"}
            alt="Image"
          />
        </div>
        <p>Complete Stack is the product team behind over 100 brands</p>

        <div className="companyLogo">
          <div className="flex">
            <div className=" comImg">
              <img src={process.env.PUBLIC_URL + "/Images/1.png"} alt="Image" />
            </div>
            <div className=" comImg">
              <img src={process.env.PUBLIC_URL + "/Images/2.png"} alt="Image" />
            </div>
            <div className=" comImg">
              <img src={process.env.PUBLIC_URL + "/Images/3.png"} alt="Image" />
            </div>
            <div className=" comImg">
              <img src={process.env.PUBLIC_URL + "/Images/4.png"} alt="Image" />
            </div>
          </div>
          <div className="flex">
            <div className="comImg">
              <img src={process.env.PUBLIC_URL + "/Images/5.png"} alt="Image" />
            </div>
            <div className="comImg">
              <img src={process.env.PUBLIC_URL + "/Images/6.png"} alt="Image" />
            </div>
            <div className="comImg">
              <img src={process.env.PUBLIC_URL + "/Images/7.png"} alt="Image" />
            </div>
            <div className="comImg">
              <img src={process.env.PUBLIC_URL + "/Images/8.png"} alt="Image" />
            </div>
          </div>
        </div>
      </section>

      {/* footer  */}

      <footer>
        <div>
          <ul>
            <li>
              <Link to="/service"> Services </Link>
            </li>
            <li>
              <Link to="/"> Clients </Link>
            </li>
            <li>
              <Link to="/about"> About</Link>
            </li>
            <li>
              <Link to="/careers"> Career </Link>
            </li>
            <li>
              <Link to="/contact"> Contact </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="blue">USA</li>
            <li className="bold">Virginia</li>
            <li>3930 Persimmon drive, Suit 101, Fairfax, Virginia, 22031,</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="blue">INDIA</li>
            <li className="bold">Ahmedabad</li>
            <li>
              B-509 Titanium city center near Sachin Tower Prahladnagar
              Ahmedabad Gujarat
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="blue">USA</li>
            <li className="bold">+1 774 719 3596</li>
            <li className="blue">India</li>
            <li className="bold">+91 9879 63 7979</li>
            {/* <li className="bold">Los Angeles</li> */}
            {/* <li>8160 lorem ipsum Drive dummy TX 78735</li> */}
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
