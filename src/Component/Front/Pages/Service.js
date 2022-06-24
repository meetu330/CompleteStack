import React from "react";
import Navbar from "../Navbar";
import Footer from "./Footer";
import Svg from "./Svg";

const Service = () => {
  const table = [
    {
      num: "01",
      title: "Start with any 2 dedicated resources:",
      span1: "– UX Designer",
      span2: "– UI Developer",
      span3: "– Backend App Developer",
    },
    {
      num: "02",
      title: "Always supported by:",
      span1: "– Quality Assurance",
      span2: "– Project Manager",
      span3: undefined,
    },
    {
      num: "03",
      title: "Flexible Development:",
      span1: "– Quality Assurance",
      span2: "– Project Manager",
      span3: "– Trusted by Many People",
    },
  ];
  const resource = [
    {
      num: "01",
      title: "User experience design",
      para: "Certified NNG and Baymard designers create stunning user interfaces that are intuitive, on brand, and deliver leading KPIs.",
    },
    {
      num: "02",
      title: "User interface development",
      para: "Shopify Plus and headless eCommerce-experienced developers deliver pixel-perfect HTML, CSS, JavaScript, Vue, or React user interfaces for your store.",
    },
    {
      num: "03",
      title: "Application engineering",
      para: "Gain Shopify Plus-led custom integrations and applications to extend the functionality of your store and integrate with third party providers.",
    },
    {
      num: "04",
      title: "Quality assurance",
      para: "Access user acceptance, automation, and interaction testing expertise in eCommerce to create a bug-free customer experience.",
    },
    {
      num: "05",
      title: "Project Management.",
      para: "Task oriented, PMP certified, and agile scrum masters are ready to direct and organize high-impact projects and feature builds.",
    },
  ];

  const services = [
    {
      img: "Images/ourservices1.png",
      title: "User Experience",
      para1: "- UX Guide",
      para2: "- Poor of Concept",
      para3: "- Sketching Workshop",
      para4: "- LoFis + HiFis",
      span1: "- Clickable Prototypes",
      span2: "- Style Guide",
      span3: "- Media Guide",
    },
    {
      img: "Images/ourservices2.png",
      title: "Performance optimization",
      para1: "- Desktop UX ",
      para2: "- Mobile UX",
      para3: "- Web Page Speed",
      para4: "- Quantitative Reporting & Dashboard",
      span1: "- Qualitative Reporting & Analysis",
      span2: undefined,
      span3: undefined,
    },
    {
      img: "Images/ourservices3.png",
      title: "Replatform",
      para1: "- Discovery ",
      para2: "- Platform choice",
      para3: "- Theme Build",
      para4: "- Data Migration & Validation",
      span1: "-  Apps / Extensions / Plugins",
      span2: "- Systems Integrations",
      span3: "- KPI Id & Tracking",
    },
    {
      img: "Images/ourservices4.png",
      title: "Operation automation",
      para1: "- Supply Chain Management ",
      para2: "- Fulfilment",
      para3: "- Customer Service",
      para4: "- Security",
      span1: "-  Accounting",
      span2: "- Report Generation",
      span3: undefined,
    },
    {
      img: "Images/ourservices1.png",
      title: "Progressive web apps (PWAs)",
      para1: "- Less than 2 second load times ",
      para2: "- Offline Transactions",
      para3: "- Integration with any eCommerce Platform",
      para4: "- Native Icon and Splash Screen",
      span1: "-  Service Workers",
      span2: "- Consistent connectivity",
      span3: "- Headless eCommerce",
    },
  ];

  const roadMap = [
    {
      num: "01",
      title: "Resources",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque laudantium dicta molestias, error voluptate quibusdam?"
    },
    {
      num: "02",
      title: "Project Manager",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque laudantium dicta molestias, error voluptate quibusdam?"
    },
    {
      num: "03",
      title: "Quality Assurance",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque laudantium dicta molestias, error voluptate quibusdam?"
    },
    {
      num: "04",
      title: "Support Team",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque laudantium dicta molestias, error voluptate quibusdam?"
    },
    {
      num: "05",
      title: "Dedication",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque laudantium dicta molestias, error voluptate quibusdam?"
    },
    {
      num: "06",
      title: "Perfection",
      para: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque laudantium dicta molestias, error voluptate quibusdam?"
    },
  ];

  return (
    <>
      <div className="serviceCircle"></div>
      <Navbar color="purple" />

      <section className="servicePage">
        <div className="serviceDiv">
          <div className="mainDiv">
            <h1 className="playFair">
              don't run your business inspite of your website
            </h1>
            <p>
              Use flexible product teams to make your whole customer journey —
              from first impression to checkout — seamless.
            </p>
          </div>
         
          <div className="mainDiv">
            <Svg />
          </div>
        </div>

        <div className="cusTable team">
          <h1 className="playFair ">build your team</h1>
          <div className="tableContain">
            {table.map((curr) => (
              <div className="actualTab">
                <div>
                  <p className="num">{curr.num}</p>
                </div>
                <div>
                  <h2>{curr.title}</h2>
                  <h6>{curr.span1}</h6>
                  <h6>{curr.span2}</h6>
                  <h6>{curr.span3}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="roadMap">
          <div className="road">
            {
              roadMap.map((curr) => (
                <div className="actualRoad ">
              <p className="num">{curr.num}</p>
              <h3>{curr.title}</h3>
              <p>
                {curr.para}
              </p>
            </div>
              ))
            }

            
          </div>
        </div>

        <div className="cusTable resource">
          <h1 className="playFair ">choose your resources</h1>
          <div className="tableContain">
            {resource.map((curr) => (
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

        <div className="ourServices">
          <h1 className="playFair mb-5 mt-5">Our Services</h1>
          {services.map((e) => (
            <div className="actualServices">
              <div className="ourServicesContent">
                <img src={e.img} alt="officeImage" />
              </div>
              <div className="ourServicesContent">
                <h1 className="playFair">{e.title}</h1>
              </div>
              <div className="ourServicesContent">
                <div className="mt-5">
                  <p>{e.para1}</p>
                  <p>{e.para2}</p>
                  <p>{e.para3}</p>
                  <p>{e.para4}</p>
                </div>
              </div>
              <div className="ourServicesContent">
                <div className="mt-5">
                  <p>{e.span1}</p>
                  <p>{e.span2}</p>
                  <p>{e.span3}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Service;
