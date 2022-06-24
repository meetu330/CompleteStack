import React from 'react';
import "../../css/home.css";


const Table = (props) => 
{
  var vImage4 = props.vImage4;
  var vImage5 = props.vImage5; 
  return (
    <>
          
      {/* Table  */}

      <section className="tableTxt">
        <h1>
          Rethink the team behind <br />
          <span style={{ fontStyle: "italic" }}>your tech</span>
        </h1>
        <p className="border-left">
          Build a flexible product team with dedicated UX, UI, or developer
          resources backed by 10 years of data-driven results and Anatta
          executives at the helm. Shift, expand, or contract your resources as
          needed.
        </p>

        <div className="table">
          <div className="top">
            <div className="border">
              <h2>Typical Agency</h2>
            </div>
            <div className="border">
              <h2>Project-based</h2>
              <p>APPROACH</p>
            </div>
            <div className="border">
              <h2>Hourly</h2>
              <p>MODEL</p>
            </div>
            <div className='border'>
              <h2>Short-term</h2>
              <p>VIEW</p>
            </div>
          </div>
          <div className="bottom">
            <div className="bottom-logo">
              {" "}
              <img
                src={vImage5}
                alt="Image"
              />{" "}
            </div>
            <div className="bottom-right">
              <h4>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h4>

              <div className="bottomDiv">
                <div className="flex2">
                  <img
                    src={process.env.PUBLIC_URL + "/Images/Icon_3.png"}
                    alt="Image"
                  />
                  <h3>HOLISTIC</h3>
                  <span>Approach</span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
              </div>

              <div className="bottomDiv">
                <div className="flex2">
                  <img
                    src={process.env.PUBLIC_URL + "/Images/Icon_3.png"}
                    alt="Image"
                  />
                  <h3>RETAINER </h3>
                  <span>Model</span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
              </div>

              <div className="bottomDiv">
                <div className="flex2">
                  <img
                    src={process.env.PUBLIC_URL + "/Images/Icon_3.png"}
                    alt="Image"
                  />
                  <h3>LONG-TERM</h3>
                  <span>View</span>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* brand  */}

      <section className=" brand work">
        <div className="workLeft">
          <h1>
            Scaling sustainable{" "}
            <span style={{ fontStyle: "italic" }}>Brands</span>
          </h1>
          <p className="border-left">
            In 2020, our sustainable eCommerce clients grew by 287%. That’s 9x
            the industry average. We’re committed to scaling sustainable brands
            that do right by people and the planet.
          </p>
          <button className="btn serviceBtn">
            LEARN ABOUT US
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>

        <div className="clockImg">
          <img src={vImage4} alt="Image" />
        </div>
      </section>

      {/* mile stone  */}

      <section className="mileStone">
        <div className="outer">
          <h1>
            turn moonshots into <br />
            <span style={{ fontStyle: "italic" }}> milestones</span>
          </h1>
          <div className="inner">
            <img
              src={process.env.PUBLIC_URL + "/Images/Shape-11.png"}
              alt="Image"
            />
            <span>
              Our speciality is helping you scale from one stage in the
              eCommerce lifecycle to the next , shipping your biggest objectives
              to production
            </span>
          </div>
        </div>

        <div className="history">
          <div className="historyDiv">
            <h2>Emerging.</h2>
            <p>Under $10M in online revenue</p>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/Images/Shape-11.png"}
                alt="Image"
              />
            </div>
            <p>
              Emerging brands have at least one acquisition or marketing channel
              and are considered upstarts within their industry.
            </p>
          </div>
          <div className="historyDiv">
            <h2>Growth.</h2>
            <p>Under $10M in online revenue</p>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/Images/Shape-11.png"}
                alt="Image"
              />
            </div>
            <p>
              Emerging brands have at least one acquisition or marketing channel
              and are considered upstarts within their industry.
            </p>
          </div>
          <div className="historyDiv">
            <h2>Established.</h2>
            <p>Under $10M in online revenue</p>
            <div>
              <img
                src={process.env.PUBLIC_URL + "/Images/Shape-11.png"}
                alt="Image"
              />
            </div>
            <p>
              Emerging brands have at least one acquisition or marketing channel
              and are considered upstarts within their industry.
            </p>
          </div>
        </div>
        <div className="button">
          <button className="btn serviceBtn">
            SCHEDULE A CONSULTATION HERE
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </section>


    </>
  )
}

export default Table