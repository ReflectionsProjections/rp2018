import React from "react";
import { render } from "react-dom";
import { HashRouter as Router, Route, BrowserRouter } from "react-router-dom";
// Components
import Home from "./components/home/home";
import Register from "./components/register/register";
import Auth from "./components/auth/auth";
import RegisterStart from "./components/registerStart/registerStart";
import RegisterSuccess from "./components/registerSuccess/registerSuccess";
import PuzzleBang from "./components/puzzlebang/puzzlebang";
import MechMania from "./components/mechmania/mechmania";
import ACMSymposium from "./components/acm_symposium/acm_symposium";
import Dashboard from "./components/dashboard/dashboard";
import DashboardLarge from "./components/dashboard/dashboardLarge";

// Redirects
const SponsorLetter = () => {
  window.location = {process.env.PUBLIC_URL + "/assets/files/sponsor.pdf"};
  return null;
};

const JoshBenaloh = () => {
  window.location = {process.env.PUBLIC_URL + "/assets/files/josh.png"};
  return null;
};

const StartupLetter = () => {
  window.location = {process.env.PUBLIC_URL + "/assets/files/startup.pdf"};
  return null;
};

const CareerFairMap = () => {
  window.location = {process.env.PUBLIC_URL + "/assets/files/career_fair.png"};
  return null;
};

const StartupFairMap = () => {
  window.location = {process.env.PUBLIC_URL + "/assets/files/startup_fair.png"};
  return null;
};

const GiveawayFlyer = () => {
  window.location = {process.env.PUBLIC_URL + "/assets/files/giveaway.pdf"};
  return null;
};

const VolunteerSignup = () => {
  window.location =
    "https://docs.google.com/forms/d/e/1FAIpQLSc0vkipQVsw9VIdaAKCoOsrchrWPm3tOK8SwccchLFa8qeAcg/viewform?usp=sf_link";
  return null;
};

const SymposiumSignup = () => {
  window.location = "https://acmrp.typeform.com/to/fuUghb";
  return null;
};

require("normalize.css");
require("./styles/main.scss");

export default class App extends React.Component {
  render() {
    return <div className="main">Hello World</div>;
  }
}

render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
      <Route path={process.env.PUBLIC_URL + "/sponsor"} component={SponsorLetter} />
      <Route path={process.env.PUBLIC_URL + "/startupsponsor"} component={StartupLetter} />
      <Route path={process.env.PUBLIC_URL + "/giveaway"} component={GiveawayFlyer} />
      <Route path={process.env.PUBLIC_URL + "/joshbenaloh"} component={JoshBenaloh} />

      <Route path={process.env.PUBLIC_URL + "/puzzlebang"} component={PuzzleBang} />
      <Route path={process.env.PUBLIC_URL + "/mechmania"} component={MechMania} />
      <Route path={process.env.PUBLIC_URL + "/symposium"} component={ACMSymposium} />
      <Route path={process.env.PUBLIC_URL + "/volunteer"} component={VolunteerSignup} />
      <Route path={process.env.PUBLIC_URL + "/symposiumregister"} component={SymposiumSignup} />
      <Route path={process.env.PUBLIC_URL + "/dashboard"} component={Dashboard} />
      <Route path={process.env.PUBLIC_URL + "/dashboardlarge"} component={DashboardLarge} />
      <Route path={process.env.PUBLIC_URL + "/career_fair"} component={CareerFairMap} />
      <Route path={process.env.PUBLIC_URL + "/startup_fair"} component={StartupFairMap} />
      <Route path={process.env.PUBLIC_URL + "/home"} component={Home} />

      <Route exact path={process.env.PUBLIC_URL + "/start"} component={RegisterStart} />
      <Route exact path={process.env.PUBLIC_URL + "/registersuccess"} component={RegisterSuccess} />
      <Route exact path={process.env.PUBLIC_URL + "/register"} component={Register} />

      <Route exact path={process.env.PUBLIC_URL + "/auth"} component={Auth} />
    </div>
  </BrowserRouter>,
  document.getElementById("app")
);
