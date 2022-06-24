import React from 'react';
import "../../css/home.css";


const About = (props) => 
{
  var vImage1 = props.data;

  return (
    <>
         {/* ABout  */}

      <section className="about">
        <h2>
          Industry-defining design <br /> and
          <span style={{ fontStyle: "italic" }}> performance</span>
        </h2>

        <p>
          With Anatta, you don’t have to hire full-time developers, QAs, and
          designers to build and maintain a premier eCommerce store. Source
          expert flexible product teams across multiple disciplines —then swap,
          expand, or contract your resources any time.
        </p>
      </section>

      {/* service  */}

      <section className="service">
        <div className="laptopImg">
          <img
            src={vImage1}
            alt="Image"
            className="images"
          />
        </div>
        <div className="right">
          <ul>
            <li className="serviceList">UX design</li>
            <li className="serviceList">Replatform</li>
            <li className="serviceList">UI Development</li>
            <li className="serviceList">Operation Automation</li>
            <li className="serviceList">Application Engineering</li>
            <li className="serviceList">Headless eCommerce</li>
            <li className="serviceList">Performance Optimization</li>
            <li className="serviceList">Progressive web apps (PWA)</li>
          </ul>
          <button className="btn serviceBtn">
            VIEW OUR SERVICE
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </section>
    </>
  )
}

export default About