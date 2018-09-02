import React from 'react';
import {render} from 'react-dom';
// import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import SimpleReactRouter from 'simple-react-router'

// Components
import Home from './components/home/home';
import Landing from './components/landing/landing';
import Register from './components/register/register';
import Auth from './components/auth/auth';
import RegisterStart from './components/registerStart/registerStart';
import RegisterSuccess from './components/registerSuccess/registerSuccess';


// Redirects
const SponsorLetter = () => {
    window.location = '/assets/files/sponsor.pdf';
    return null;
};

const StartupLetter = () => {
    window.location = './assets/files/startup.pdf';
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

export default class Router extends SimpleReactRouter {
    routes(map){
        map('/', Home)
        map('/home', Home)
        map('/auth', Auth)
        map('/register', Register)
        map('/registersuccess', RegisterSuccess)
        map('/YashaIsNotGettingAJacket', RegisterStart)
        map('/volunteer', VolunteerSignup)
        map('/startup', StartupLetter)
        map('/sponsor', SponsorLetter)
        map('/symposiumregister', SymposiumSignup)
    }
}

render(
    <Router/>,
    document.getElementById('app')
);
