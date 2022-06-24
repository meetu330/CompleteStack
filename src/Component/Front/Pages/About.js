import React from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const About = () => {
  const table = [
    {
      num: "01",
      title: "We’re not afraid to tell it like we see it.",
      para: "We believe it’s ok to have an opinion—and share it.",
    },
    {
      num: "02",
      title: "It’s about your customer, not you.",
      para: "Putting your customer first is the best way to add value and help you scale.",
    },
    {
      num: "03",
      title: "Performance matters as much as brand experience.",
      para: "Jumping into a redesign or re-platform to solve your growth challenges isn’t a strategy — it’s a knee-jerk response to more basic issues.",
    },
    {
      num: "04",
      title: "Performance matters as much as brand experience.",
      para: "Jumping into a redesign or re-platform to solve your growth challenges isn’t a strategy — it’s a knee-jerk response to more basic issues.",
    },
    {
      num: "05",
      title: "Performance matters as much as brand experience.",
      para: "Jumping into a redesign or re-platform to solve your growth challenges isn’t a strategy — it’s a knee-jerk response to more basic issues.",
    },
    {
      num: "06",
      title: "Performance matters as much as brand experience.",
      para: "Jumping into a redesign or re-platform to solve your growth challenges isn’t a strategy — it’s a knee-jerk response to more basic issues.",
    },
    {
      num: "07",
      title: "Performance matters as much as brand experience.",
      para: "Jumping into a redesign or re-platform to solve your growth challenges isn’t a strategy — it’s a knee-jerk response to more basic issues.",
    },
    {
      num: "08",
      title: "Performance matters as much as brand experience.",
      para: "Jumping into a redesign or re-platform to solve your growth challenges isn’t a strategy — it’s a knee-jerk response to more basic issues.",
    },
  ];

  const table2 = [
    {
      title: "Scalability",
      para: "Expand or contract your team with 30 days’ notice — at any time.",
    },
    {
      title: "Expertise",
      para: "Access designers, devs, and supporting QAs & PMs with knowledge across platforms.",
    },
    {
      title: "Process",
      para: "We know what works and what doesn’t. We are flexible to adapt to your brand’s style.",
    },
    {
      title: "Learnings",
      para: "Industry-specific learnings from years of quantitative & qualitative CRO testing",
    },
    {
      title: "Direction",
      para: "Industry-leading Creative Directors and Anatta Executives at the helm",
    },
  ];

  return (
    <>
      <Navbar color = "peach" />
      <div className="Aboutcircle"></div>
      <section className="pAbout">
        <div className="min95vh">
          <div className="flex-1">
          <h1 className="playFair">
            CompleteStack has helped 100+ <br /> sustainable DTC brands <br />{" "}
            become market leaders.
          </h1>
          <p className="officeP">
            Success is never achieved overnight. CompleteStack partnerships are
            formed over quarters and years, not weeks or one-off engagements.
          </p>
          <Link to='/service'>
          <button className="consulBtn">
            schedule a consultation <i className="fa fa-arrow-right"></i>
          </button>
          </Link>
          </div>
          <div className="flex-1">
          <img
            className="officeImg"
            src={process.env.PUBLIC_URL + "/Images/office.png"}
            alt="officeImg"
          />
          </div>
        </div>

        <div className="w-100">
          <h1 className="playFair">
            committed to sustainable <br /> brands
          </h1>
          <p className="officeP">
            CompleteStack is highly selective in our partnerships. We focus on
            sustainable companies creating products that are better for people
            and our planet. Everyone wins when they succeed—our mission is to
            maximize their reach and impact.
          </p>
        </div>

        <div className="cusTable min-vh-100">
          <h1 className="playFair princip ">the principles that inform our work</h1>
          <div className="tableContain">
            {table.map((curr) => (
              <div className="actualTab">
                <div>
                  <p className="num">{curr.num}</p>
                </div>
                <div>
                  <h2>{curr.title}</h2>
                  <h6>{curr.para}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="cusTable min-vh-100 ">
          <h1 className="playFair deliv">
            where thought partnership <br /> meets delivery
          </h1>
          <div className="tableContain part">
            {table2.map((curr) => (
              <div className="actualTab2">
                <h1>{curr.title}</h1>
                <p>{curr.para}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cusTable last">
          <h1 className="playFair">Join The Team</h1>
          <p>
            Ready to add fuel to the fire of some of the fastest-growing
            sustainable DTC brands in the world? You may be a good fit for
            Anatta.
          </p>
          <Link to='/careers'>
          <button>View Job Openings <i className="fa fa-chevron-circle-right"></i></button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;