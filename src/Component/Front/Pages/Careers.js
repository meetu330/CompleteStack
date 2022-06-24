import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";

const Careers = () => {
  const table = [
    {
      num: "01",
      title: "Paid time off.",
      para: "14 paid leave yearly 7 sick leave yearly 11 public holidays yearly.",
    },
    {
      num: "02",
      title: "5 days Working",
      para: "Only 2nd Saturday Working. Encouragement of flexible timings. Company cultural activities.",
    },
    {
      num: "03",
      title: "Diversity.",
      para: "Opportunity to implement your ideas for the improvement in all around. your voice is being heard.",
    },
    {
      num: "04",
      title: "Growth Opportunity.",
      para: "Expand your skills. Certifications and Learning programs tailored for your roles . Well defined career paths.",
    },
  ];

  const positionArr = [
    {
      sTitle: "User Experience",
      title: "UX Reasearcher",
      location: "Ahmedabad, GJ, IN",
    },
    {
      sTitle: "Web Developer",
      title: "React Developer",
      location: "Ahmedabad, GJ, IN",
    },
    {
      sTitle: "Backend developer",
      title: "PHP Developer",
      location: "Ahmedabad, GJ, IN",
    },
    {
      sTitle: "User Experience",
      title: "UI/UX Designer",
      location: "Ahmedabad, GJ, IN",
    },
  ];

  useEffect(() => {
    var testim = document.getElementById("testim"),
      testimDots = document.querySelectorAll(".dot"),
      testimContent = document.querySelectorAll(".testi"),
      testimLeftArrow = document.getElementById("left-arrow"),
      testimRightArrow = document.getElementById("right-arrow"),
      testimSpeed = 4000,
      currentSlide = 0,
      currentActive = 0,
      testimTimer,
      touchStartPos,
      touchEndPos,
      touchPosDiff,
      ignoreTouch = 30;

    function playSlide(slide) {
      for (var k = 0; k < testimDots.length; k++) {
        testimContent[k].classList.remove("active");
        testimContent[k].classList.remove("inactive");
        testimDots[k].classList.remove("active");
      }

      if (slide < 0) {
        slide = currentSlide = testimContent.length - 1;
      }

      if (slide > testimContent.length - 1) {
        slide = currentSlide = 0;
      }

      if (currentActive != currentSlide) {
        testimContent[currentActive].classList.add("inactive");
      }
      testimContent[slide].classList.add("active");
      testimDots[slide].classList.add("active");

      currentActive = currentSlide;

      clearTimeout(testimTimer);
      testimTimer = setTimeout(function () {
        playSlide((currentSlide += 1));
      }, testimSpeed);
    }

    testimLeftArrow.addEventListener("click", function () {
      playSlide((currentSlide -= 1));
    });

    testimRightArrow.addEventListener("click", function () {
      playSlide((currentSlide += 1));
    });

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function (e) {
      switch (e.keyCode) {
        case 37:
          testimLeftArrow.click();
          break;

        case 39:
          testimRightArrow.click();
          break;

        case 39:
          testimRightArrow.click();
          break;

        default:
          break;
      }
    });

    testim.addEventListener("touchstart", function (e) {
      touchStartPos = e.changedTouches[0].clientX;
    });

    testim.addEventListener("touchend", function (e) {
      touchEndPos = e.changedTouches[0].clientX;

      touchPosDiff = touchStartPos - touchEndPos;

      if (touchPosDiff > 0 + ignoreTouch) {
        testimLeftArrow.click();
      } else if (touchPosDiff < 0 - ignoreTouch) {
        testimRightArrow.click();
      } else {
        return;
      }
    });
  }, []);

  const testimonial = [
    {
      img: "Images/Jitesh.jpg",
      name: "Jitesh Surana",
      para: "The company is the fastest-growing software company in Ahmedabad, India.If you like development and enjoy a lighting fast-moving environment you get all of that here, Constantly working on and doing new things to take the career to the next level.",
      class: "active",
    },
    {
      img: "Images/Bharat.jpg",
      name: "Bharat Suthar",
      para: "I have been working with CompleteStack for almost one and a half years.I have experienced a great working environment during this time period.",
      class: "",
    },
    {
      img: "Images/Himanshu.jpg",
      name: "Himanshu Limbachiya",
      para: "I have a great experience working at Complete Stack. Here I have experienced a good working environment, a friendly environment, all company members are supportive. I have quite a good learning experience",
      class: "",
    },
  ];

  return (
    <>
      <Navbar color="yellow" />
      <div className="Careercircle"></div>
      <section className="career">
        <div className="hero">
          <div className="flex-1">
          
              <h1 className="careerH1 z-2">LIFE AT COMPLETESTACK</h1>
              <p className="z-2">
                At CompleteStack we believe more in investing in our employees, their
                learning makes an impact to organization mission. Team work
                culture where challenges are seen as new learning & our work
                reflect our mission.
              </p>
              <a href="#job" className="z-2">
                <button className="positionBtn z-2">
                  see all open positions <i className="fa fa-angle-right"></i>
                </button>
              </a>
            
          </div>
          <div className="flex-1">
            
            <div className="w-90">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_B2qAl3/data.json"
              background="transparent"
              speed="1"
              // style={{width: '800px', height: '800px',}}
              loop
              autoplay
            ></lottie-player>
            </div>
          </div>
        </div>

        <div className="whoWeAre">
          <div className="left">
            <h1>who we are</h1>
            <p>
              CompleteStack is established in 2014. Just means Precisely and
              code means Program instruction.
            </p>
            <p>
              CompleteStack is Information technology service-based agency and
              we are offering a wide range of web design & development and
              mobile application development solution.
            </p>
            <p>
              Our Mission is Help people to expand their business in digital
              world with modern technology and make life Smooth, smart and fast.
              Our vision is passion to adopt new technologies and work in all
              technology for sustainable growth and human benefits by being more
              innovative each time
            </p>
          </div>
          <div className="rights ">
            <div className="img">
              <img
                src={process.env.PUBLIC_URL + "Images/office2.jpg"}
                alt="officeIMg"
              />
            </div>
          </div>
        </div>

        <div className="whoWeAre">
          <div className="rights justify-content-start">
            <div className="img">
            <img
              src={process.env.PUBLIC_URL + "Images/office3.jpg"}
              alt="officeIMg"
            />
            </div>
          </div>
          <div className="left">
            <h1>your work matters- and your voice is heard</h1>
            <p>
              We’re ambitious team, offers a fun and supportive culture where
              employees bring out the best from each other.
            </p>
            <p>
              In client-facing roles at CompleteStack, you’ll work directly with
              these brands to help them achieve growth, better user experiences,
              and higher conversions.
            </p>
          </div>
        </div>

        <div className="roadMap min-vh-100">
          <h1 className="playFair">employee benefits</h1>
          <div className="road">
            {table.map((curr) => (
              <div className="actualRoad ">
                <p className="num">{curr.num}</p>
                <h3>{curr.title}</h3>
                <p>{curr.para}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="whoWeAre">
          <div className="left">
            <h1>core values</h1>
            <p>
              Our specialty is helping you scale from one stage in the eCommerce
              lifecycle to the next, shipping your biggest objectives to
              production.
            </p>
            <p>
              In client-facing roles at CompleteStack, you’ll work directly with
              these brands to help them achieve growth, better user experiences,
              and higher conversions.
            </p>
          </div>
          <div className="rights">
            <div className="img">
            <img
              src={process.env.PUBLIC_URL + "Images/office5.jpg"}
              alt="officeIMg"
            />
            </div>
            
          </div>
        </div>

        <div className="testiContainer">
          <section id="testim" className="testim">
            <div className="testim-cover">
              <div className="wrap">
                <span
                  id="right-arrow"
                  className="arrow rightss fa fa-chevron-right"
                ></span>
                <span
                  id="left-arrow"
                  className="arrow leftss fa fa-chevron-left "
                ></span>
                <ul id="testim-dots" className="dots">
                  <li className="dot active"></li>

                  <li className="dot"></li>

                  <li className="dot"></li>
                </ul>
                {testimonial.map((curr) => (
                  <div id="testim-content" className="cont">
                    <div className={`${curr.class} testi`}>
                      <div className="img">
                        <img src={curr.img} alt="Employee" />
                      </div>
                      <h2>{curr.name}</h2>
                      <p>{curr.para}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <div className="openPosition">
          <h1 className="playFair" id="job">
            open positions
          </h1>
          {positionArr.map((e) => (
            <div className="position ">
              <div className="posDiv">
                <h5>{e.sTitle}</h5>
                <h2 >{e.title}</h2>
                <h3 className="hide">{e.location}</h3>
              </div>
              <div className="posDiv ">
                <h3 className="h2Hide">{e.location}</h3>
              </div>
              <div className="posDiv">
                <button>
                   Details <i className="fa fa-angle-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Careers;
