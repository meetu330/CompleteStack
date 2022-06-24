import React from 'react';
import "../../css/home.css";


const Work = (props) => 
{
  var vImage2 = props.data;
  var vImage3 = props.vImage3;

  return (
    <>
         {/* work  */}

      <section className="work">
        <div className="workLeft">
          <h1>
            Who We work <br />
            <span style={{ fontStyle: "italic", display: "inline-block" }}>
              with
            </span>
          </h1>
          <p className="border-left">
            Rothy’s is a San Francisco-based producer of high-end 3D printed
            seamless shoes. They've grown from 0 to $140MM annually as of the
            end of 2018. Rothy's engaged Anatta from day one, seeking a
            long-term partner to help them scale fast.
          </p>
          <button className="btn serviceBtn">
            READ CASE STUDY
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>

          <div className="partner">
            <div className="partnerDiv">
              <h2>2014</h2>
              <p>PARTNERS SINCE</p>
            </div>
            <div>
              <h2>+10</h2>
              <p>TEAM OF DESIGNERS & ENGINNERS</p>
            </div>
          </div>
        </div>

        <div className="clockImg">
          <img
            src={vImage2}
            alt="Image"
          />
        </div>
      </section>

      {/* work 2  */}

      <section className=" work2 work">
        <div className="clockImg">
          <img
            src={vImage3}
            alt="Image"
          />
        </div>
        <div className="workLeft">
          <p className="border-left">
            Molekule is a science and technology company that designs and
            manufactures air purifiers. Molekule engaged Anatta to transition to
            a headless PWA architecture alongside a complete
          </p>
          <button className="btn serviceBtn" id="service">
            READ CASE STUDY
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
          <div className="partner">
            <div className="partnerDiv">
              <h2>2017</h2>
              <p>PARTNERS SINCE</p>
            </div>
            <div>
              <h2>+3</h2>
              <p>TEAM OF DESIGNERS & ENGINNERS</p>
            </div>
          </div>
        </div>
      </section>
      <div className="button">
        <button className="btn clientBtn ">
          SEE MORE CLIENTS
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        </button>
      </div>

    </>
  )
}

export default Work