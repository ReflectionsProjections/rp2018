import React from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Link, BrowserRouter} from 'react-router-dom'

// Components
import Home from './components/home/home';
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
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/sponsor" component={SponsorLetter} />
            <Route path="/startup" component={StartupLetter} />
            <Route path="/volunteer" component={VolunteerSignup} />
            <Route path="/home" component={Home} />
        </div>
    </BrowserRouter>,
    document.getElementById('app')
);
