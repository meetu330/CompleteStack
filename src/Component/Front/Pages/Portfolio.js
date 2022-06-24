import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import "animate.css";

const Portfolio = () => {
  const [filter, setfilter] = useState({
    web: true,
    android: true,
    ios: true,
  });

  const services = [
    {
      img: "Images/ChurchhomeL.png",
      title: "Churchhome ",
      since: "4 months",
      teamNum: "+5",
      teamDesc:
        "designers, UI engineers, App engineers, project manager, quality assurance",
      description:
        "We have designed a faith practice for modern life. Take just five minutes of each day for a Guided Prayer experience. If you do this, we truly believe it will transform your life, day by day, minute by minute",
      img2: "Images/ChurchhomeS.png",
      key: 1,
      class: "android",
      classes: filter.android
        ? "animate__fadeInUp"
        : " animate__fadeInUp d-none ",
    },
    {
      img: "Images/EmealL.png",
      title: "E Meals Meal Planning Recipes ",
      since: "6 months",
      teamNum: "+4",
      teamDesc:
        "designers, UI engineers, App engineers, project manager, quality assurance",
      description:
        "eMeals is the quickest way for busy families to get dinnertime solved. With 15 different meal and diet plans there is sure to be enough recipe inspiration to please even the pickiest eater. Save time by sending your customizable shopping list ingredients to one of our online grocery delivery or pickup partners.",
      img2: "Images/EmealS.png",
      key: 2,
      class: "android",
      classes: filter.android
        ? "animate__fadeInUp"
        : " animate__fadeInUp d-none ",
    },
    {
      img: "Images/TATATUL.png",
      title: "TATATU",
      since: "9 months",
      teamNum: "+7",
      teamDesc:
        "Designers, UI engineers, App engineers, project manager, quality assurance",
      description:
        "TaTaTu is the first social media app that rewards you for viewing content and for your social media activities. You can watch videocontent, post your photos ,videos and earn even more TTU Coins when someone likes, comments, views or shares your post or receive a call or message from a friend.",
      img2: "Images/TATATUS.png",
      key: 3,
      class: "android",
      classes: filter.web ? "animate__fadeInUp" : " animate__fadeInUp d-none ",
    },
    {
      img: "Images/BOOKL.png",
      title: " Khabri Studio",
      since: "15 months",
      teamNum: "+6",
      teamDesc:
        "designers, UI engineers, App engineers, project manager, quality assurance",
      description:
        "Khabri Studio is the easiest way to create and manage your Audio Channel. It's the only app that lets you record high-quality content in your local language, with background music, a variety of transitions, and sound effects as per the mood of the content. You can create your own channel on Khabri Studio and start recording your voice. You can also upload your audio file to start with it and it’s 100% free!",
      img2: "Images/BOOKS.png",
      key: 5,
      class: "web",
      classes: filter.web ? "animate__fadeInUp" : " animate__fadeInUp d-none ",
    },
    {
      img: "Images/AklyL.png",
      title: "Akly",
      since: "4 months",
      teamNum: "+5",
      teamDesc:
        "designers, UI engineers, App engineers, project manager, quality assurance",
      description:
        "Order from healthylicious restaurants and get the food you love delivered to your doorstep. Choose from on-demand meals or subscribe to ready made plans to achieve your goals.We have curated the healthiest and tastiest menus from restaurants. Who says fast food cannot be healthy? We promise freshly cooked and speedily delivered meals. Whether you want to lose weight, gain muscle or just have the convenience of regular deliveries for a period of time",
      img2: "Images/AklyS.png",
      key: 4,
      class: "web",
      classes: filter.ios ? "animate__fadeInUp" : " animate__fadeInUp d-none ",
    },
  ];
  const clients = [
    {
      img: "Images/1.png",
    },
    {
      img: "Images/2.png",
    },
    {
      img: "Images/3.png",
    },
    {
      img: "Images/4.png",
    },
    {
      img: "Images/5.png",
    },
    {
      img: "Images/6.png",
    },
    {
      img: "Images/7.png",
    },
    {
      img: "Images/8.png",
    },
    {
      img: "Images/2.png",
    },
    {
      img: "Images/1.png",
    },
    {
      img: "Images/3.png",
    },
    {
      img: "Images/5.png",
    },
  ];
  const all = () => {
    setfilter({ ...filter, android: true, web: true, ios: true });
  };
  const web = () => {
    setfilter({ ...filter, android: false, web: true, ios: false });
  };
  const android = () => {
    setfilter({ ...filter, android: true, web: false, ios: false });
  };
  const ios = () => {
    setfilter({ ...filter, android: false, web: false, ios: true });
  };
  return (
    <>
      <Navbar color="brown" />
      <div className="portfolioCircle"></div>

      <section className="portfolioSection">
        <h1 className="port playFair">
          In 2021, CompleteStack clients grew by 63%. That’s 7x industry
          average.
        </h1>
        <div className="ourServicesP container">
          <div className="portfolioWrapper">
            <div className="row projects">
              <div className="col-xl-6 col-md-4 col-sm-8 col-6">
                <h1 className=" projH1">Our Projects</h1>
              </div>
              <div className="col-xl-6 col-md-7 col-sm-8 col-6 filter">
                <button onClick={all}>All</button>
                <button onClick={web}>Web</button>
                <button onClick={android}>Android</button>
                <button onClick={ios}>IOS</button>
              </div>
            </div>
            {services.map((e) => (
              
              <div className={`row gradient animate__animated ${e.classes} `}>
                <Link to="/showcase" style={{display : "contents"}}>
                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-8 white">
                  <div className="portLeft">
                    <div
                      id={`carouselExampleControls${e.key}`}
                      class="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target={`#carouselExampleIndicators${e.key}`}
                          data-bs-slide-to="0"
                          class="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target={`#carouselExampleIndicators${e.key}`}
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                      </div>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img
                            src={e.img}
                            class="d-block w-100"
                            alt="Portfolio"
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            src={e.img2}
                            class="d-block w-100"
                            alt="Portfolio"
                          />
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target={`#carouselExampleControls${e.key}`}
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
                        data-bs-target={`#carouselExampleControls${e.key}`}
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                      </button>
                    </div>
                  </div>
                </div>
                </Link>
                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-10 col-8 white">
                  <div className="rightPort">
                    <h1 className="partner">{e.title}</h1>
                    <h6>Duration : {e.since}</h6>
                    <h3>{e.description}</h3>
                    <h2>
                      Team strength : <span>{e.teamNum}</span>
                    </h2>
                    <p>({e.teamDesc}) </p>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        </div>

        <div className="iconWrapper">
          <h1 className="playFair mb-5">some of our past clients</h1>
          <div className="client row">
            {clients.map((curr) => (
              <div className=" col-xl-3 col-lg-4 col-md-4 col-5  bord">
                <div className="clientDiv">
                  <img src={curr.img} alt="Client" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;
