import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
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

render(
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/sponsor" component={SponsorLetter} />
            <Route exact path="/startup" component={StartupLetter} />
            <Route exact path="/volunteer" component={VolunteerSignup} />
            <Route exact path="/symposiumregister" component={SymposiumSignup} />
            <Route exact path="/home" component={Home} />

            <Route exact path="/YashaIsNotGettingAJacket" component={RegisterStart}/>
            <Route exact path="/registersuccess" component={RegisterSuccess}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/auth" component={Auth}/>
        </Switch>
    </Router>,
    document.getElementById('app')
);
