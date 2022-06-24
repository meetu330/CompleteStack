import React from "react";
import Navbar from "../Navbar";
import Footer from "./Footer"

const Contact = () => {
  return (
    <>
      <div className="contactCircle"></div>
      <Navbar color="green" />
      <section className="contactUs">
        <div className="leftCon">
          <div>
            <img className="contactImg" src={process.env.PUBLIC_URL + "/Images/contactUs.png"} alt="contact" />
          </div>
          <img className="Earth" src={process.env.PUBLIC_URL + "/Images/Quote.png"} alt="contact" />

        </div>
        <div className="rightCon">
          <h1 className="playFair">Contact Us</h1>
          <div className="inputs">
            <input type="text" placeholder="Name" />
          </div>
          <div className="inputs">
            <input type="email" placeholder="Email" />
          </div>
          <div className="inputs">
            <input type="text" placeholder="Phone Number" />
          </div>
          <div className="inputs">
            <input type="text" placeholder="Message" />
          </div>
          <div className="inputs">
            <button className="contactBtn">Submit</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
