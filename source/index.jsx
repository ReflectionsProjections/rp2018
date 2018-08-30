import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Link} from 'react-router-dom'

// Components
import Home from './components/home/home';
import PuzzleBang from './components/puzzlebang/puzzlebang'
import MechMania from './components/mechmania/mechmania'
import ACMSymposium from './components/acm_symposium/acm_symposium'
import Landing from './components/landing/landing';


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
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/sponsor" component={SponsorLetter} />
            <Route path="/startup" component={StartupLetter} />
            <Route path="/volunteer" component={VolunteerSignup} />
            <Route path="/symposium/register" component={SymposiumSignup} />
            <Route path="/home" component={Home} />
            <Route exact path="/puzzlebang" component={PuzzleBang}/>
            <Route exact path="/mechmania" component={MechMania}/>
            <Route exact path="/symposium" component={ACMSymposium}/>
        </div>
    </Router>,
    document.getElementById('app')
);
