import React, { useState, useEffect } from "react";
import "../../css/home.css";
import About from "./About";
import Work from "./Work";
import Table from "./Table";
import Footer from "./Footer";
import axios from "axios";
import Navbar from "./Navbar";
import "animate.css";

const Home = () => {
  const [vImage, setvImage] = useState();
  const [vImage1, setvImage1] = useState();
  const [vImage2, setvImage2] = useState();
  const [vImage3, setvImage3] = useState();
  const [vImage4, setvImage4] = useState();
  const [vImage5, setvImage5] = useState();
  const [pop, setPop] = useState(false);

  var answer = window.location.href;
  const answer_array = answer.split("/");
  if (answer_array[2] == "localhost:3000") {
    var urls = `http://localhost/compeletestack/backend/api/all_image_get`;
  } else {
    var urls = `https://compeletestack.justcodenow.com/backend/api/all_image_get`;
  }

  useEffect(() => {
    axios
      .get(urls)
      .then((res) => {
        setvImage(res.data.singledata.vImage);
        setvImage1(res.data.singledata.vImage1);
        setvImage2(res.data.singledata.vImage2);
        setvImage3(res.data.singledata.vImage3);
        setvImage4(res.data.singledata.vImage4);
        setvImage5(res.data.singledata.vImage5);
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      setPop(true);
    }, 5000);
  }, []);
  const popModal = () => {
    setPop(false);
  };

  return (
    <>
      <div className="homeCircle"></div>
      <Navbar image={vImage5} />
      <section className="hero">
        <div className="imgDiv">
          <img src={vImage} alt="Image" className="images" />
        </div>
        <div className="redTxt">
          <h1>
            For Fast-growing <br /> sustainable DTC brands that
            <span>don’t take shortcuts</span>
          </h1>
        </div>
        <div className="aquaTxt">
          <h3>
            Meet Your flexible Product team . Easily Scalable . We’re Looking to
            help more
          </h3>
          <h3>
            <span className="aqua">$25M+</span> Sustainable brands scale over
            <span className="aqua">$100M</span>
          </h3>
        </div>
      </section>
      <About data={vImage1} />
      <Work data={vImage2} vImage3={vImage3} />
      <Table vImage4={vImage4} vImage5={vImage5} />
      <Footer />

      <div
        className={`popup animate__animated ${pop ? "show animate__fadeInUp" : "d-none"
          }`}
      >
        <div className="pop">
          <i className="fa fa-close" onClick={popModal}></i>
          <h1>UX Ideas Straight to Your Inbox</h1>
          <p>
            You'll never run out of ideas when you subscribe to our emails.{" "}
          </p>
          <div>
            {" "}
            <input type="text" className="d-block" placeholder="Name" />
          </div>
          <div>
            <input
              type="email"
              name="mail"
              placeholder="Email"
              className="d-block"
            />
          </div>
          <button className="sign" onClick={popModal}>
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
