import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import '../src/css/Admin.css';
import About from "./Component/Front/Pages/About";
import Service from "./Component/Front/Pages/Service";
import Careers from "./Component/Front/Pages/Careers";
import Contact from "./Component/Front/Pages/Contact";
import Portfolio from "./Component/Front/Pages/Portfolio";
import Error404 from "./Component/Front/Error404";
import Showcase from "./Component/Front/Pages/Showcase";


const Dashboard = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./Component/Admin/Dashboard")),
      2500
    );
  });
});



const Home = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./Component/Front/Home")),
      2000
    );
  });
});

const Image_content = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./Component/Admin/Image_content/Image_content")),
      1000
    );
  });
});

const Listing = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./Component/Admin/Image_content/Listing")),
      1000
    );
  });
});
const Edit = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./Component/Admin/Image_content/Edit")),
      2000
    );
  });
});

const Login = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(import("./Component/Admin/Login")),
      2000
    );
  });
});





var x = () => {
  return (
    <div className="parentLoader">
      <div class="loader">
        <img src={process.env.PUBLIC_URL + "/Images/loader.gif"} alt="logo" />
      </div>
    </div>
  );
};

function App() {
  var iAdminId = localStorage.getItem("iAdminId");
  var hours = 5;
  var now = new Date().getTime();

  var setupTime = localStorage.getItem("setupTime");
  if (setupTime == null) {
    localStorage.setItem("setupTime", now);
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.removeItem("iAdminId");
      localStorage.removeItem("vUserName");
      localStorage.setItem("setupTime", now);
    }
  }

  return (
    <>
      <Router>
        <Suspense fallback={x()}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={iAdminId ? Dashboard : Login} />
            <Route exact path="/admin/login" component={iAdminId ? Dashboard : Login} />
            <Route exact path="/admin/add" component={iAdminId ? Image_content : Login} />
            <Route exact path="/admin/listing" component={iAdminId ? Listing : Login} />
            <Route exact path="/admin/edit/:id" component={iAdminId ? Edit : Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/showcase" component={Showcase} />
            <Route component={Error404} />
          </Switch>
        </Suspense>
      </Router>


    </>
  );
}

export default App;
