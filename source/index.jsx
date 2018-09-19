import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom'
import {browserHistory} from 'react-router';
// Components
import Home from './components/home/home';
import Landing from './components/landing/landing';
import Register from './components/register/register';
import Auth from './components/auth/auth';
import RegisterStart from './components/registerStart/registerStart';
import RegisterSuccess from './components/registerSuccess/registerSuccess';
import PuzzleBang from './components/puzzlebang/puzzlebang';
import MechMania from './components/mechmania/mechmania';
import ACMSymposium from './components/acm_symposium/acm_symposium';
import Dashboard from './components/dashboard/dashboard';
import DashboardLarge from './components/dashboard/dashboardLarge';

// Redirects
const SponsorLetter = () => {
    window.location = '/assets/files/sponsor.pdf';
    return null;
};

const JoshBenaloh = () => {
    window.location = '/assets/files/josh.png';
    return null;
};

const StartupLetter = () => {
    window.location = './assets/files/startup.pdf';
    return null;
};

const CareerFairMap = () => {
    window.location = '/assets/files/career_fair.png';
    return null;
};

const StartupFairMap = () => {
    window.location = '/assets/files/startup_fair.png';
    return null;
};

const GiveawayFlyer = () => {
    window.location = './assets/files/giveaway.pdf';
    return null;
};

const VolunteerSignup = () => {
    window.location = 'https://docs.google.com/forms/d/e/1FAIpQLSc0vkipQVsw9VIdaAKCoOsrchrWPm3tOK8SwccchLFa8qeAcg/viewform?usp=sf_link';
    return null;
};

const SymposiumSignup = () => {
    window.location = 'https://acmrp.typeform.com/to/fuUghb';
    return null;
};

require('normalize.css');
require('./styles/main.scss');

class App extends React.Component {
    render () {
        return(
            <div className="main">Hello World</div>
        )
    }
}

render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/sponsor" component={SponsorLetter} />
            <Route path="/startupsponsor" component={StartupLetter} />
            <Route path="/giveaway" component={GiveawayFlyer} />
            <Route path="/joshbenaloh" component={JoshBenaloh} />


            <Route path="/puzzlebang" component={PuzzleBang} />
            <Route path="/mechmania" component={MechMania} />
            <Route path="/symposium" component={ACMSymposium} />
            <Route path="/volunteer" component={VolunteerSignup} />
            <Route path="/symposiumregister" component={SymposiumSignup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/dashboardlarge" component={DashboardLarge} />
            <Route path="/career_fair" component={CareerFairMap} />
            <Route path="/startup_fair" component={StartupFairMap} />
            <Route path="/home" component={Home} />

            <Route exact path="/start" component={RegisterStart}/>
            <Route exact path="/registersuccess" component={RegisterSuccess}/>
            <Route exact path="/register" component={Register}/>
          
            <Route exact path="/auth" component={Auth}/>

        </div>
    </BrowserRouter>,
    document.getElementById('app')
);
