import React from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Showcase = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Navbar color="black" />
      <div className="showcaseCircle"></div>

      <section className="showcase">
        <div className="container">
          <div
            id={`carouselExampleControls1`}
            class="carousel slide showCarousel"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target={`#carouselExampleIndicators1`}
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target={`#carouselExampleIndicators1`}
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src={process.env.PUBLIC_URL + "Images/ChurchhomeL.png"}
                  class="d-block w-100"
                  alt="Portfolio"
                />
              </div>
              <div class="carousel-item">
                <img
                  src={process.env.PUBLIC_URL + "Images/ChurchhomeS.png"}
                  class="d-block w-100"
                  alt="Portfolio"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target={`#carouselExampleControls1`}
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target={`#carouselExampleControls1`}
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
            </button>
          </div>

          <h1 className="showH1">Churchhome</h1>

          <div className="row descDiv">
            <div className="col-xl-6 col-md-6 col-sm-10">
              <h1>Project Description</h1>
            </div>
            <div className="col-xl-6 col-md-6 col-sm-10">
              <p className="descrip">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deserunt hic, porro minima placeat reiciendis, sunt enim quam
                reprehenderit, tempora ullam explicabo consectetur obcaecati
                fugiat? Voluptatem tempore quidem distinctio est obcaecati,
                ducimus minima veniam et ipsa quos eum suscipit iusto non
                delectus aliquam accusamus animi corrupti id temporibus ad
                eligendi nam!
              </p>
              <button className="storeBtn">App Store</button>
              <button className="storeBtn">Google Play</button>
            </div>
          </div>
          <h1 className="showH1">Feedback</h1>
          <div className="row">
            <div className="col-10 m-auto">
              <div className="feedback">
                <div className="feedBox"></div>
                <div className="feedDiv">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur eius fugiat ipsa voluptate deserunt nesciunt
                    voluptas eligendi optio distinctio necessitatibus assumenda
                    facere numquam eos dignissimos quaerat id nam nisi vitae ad
                    facilis sequi pariatur, consectetur enim maxime.
                    Consequuntur, sequi alias!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="showH1">More Projects</h1>
          <div className="showSlider">
            <Slider {...settings}>
              <div className="imgShow">
                <img
                  className="w-100"
                  src={process.env.PUBLIC_URL + "Images/ChurchhomeL.png"}
                  alt="images"
                />
              </div>
              <div className="imgShow">
                <img
                  className="w-100"
                  src={process.env.PUBLIC_URL + "Images/ChurchhomeL.png"}
                  alt="images"
                />
              </div>
              <div className="imgShow">
                <img
                  className="w-100"
                  src={process.env.PUBLIC_URL + "Images/ChurchhomeL.png"}
                  alt="images"
                />
              </div>
              <div className="imgShow">
                <img
                  className="w-100"
                  src={process.env.PUBLIC_URL + "Images/ChurchhomeL.png"}
                  alt="images"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Showcase;
