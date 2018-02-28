import React, { Component } from 'react'
import styles from './styles.scss'

class About extends Component {

    constructor() {
        super();

    }

    render() {
        return(
            <div id="About">
                <div className="intro" title="What is Reflections|Projections?">
                    Reflections | Projections is an annual technology conference organized and run by students
                    at the University of Illinois at Urbana-Champaign, drawing students, speakers, and companies from around the world.
                    The week-long event features tech talks via speakers from across the industry and academia, two career fairs, and an array of workshops.
                    Put your wits to the test with our Artificial Intelligence programming competition, MechMania, or our puzzle challenge Puzzlebang!
                    <br /><br />
                    Reflections | Projections is free and open to anyone regardless of age, major, or
                    affiliation with the University of Illinois. Come join a discussion led by some of
                    the brightest minds in the business about the bleeding edge of the tech industry! <br /><br />
                    You do not need to register for Reflections | Projections to attend; however, you
                    must be 18 or older to register, receive food, and receive a free conference t-shirt.
                    If you are interested, feel free to 
                    <a href="https://acmrp.typeform.com/to/Tv3j4W" target="_blank" rel="noopener noreferrer" id="join_us"> register </a> right now!
                    <br /><br />
                </div>
                <div className="data_facts">
                    <div className="data_item">  
                        <div className="num">50+</div>
                        <div>COMPANIES</div>
                    </div>
                    <div className="data_item">
                        <div className="num">1000+</div>
                        <div>ATTENDEES</div>
                    </div>
                    <div className="data_item">
                        <div className="num">40+</div>
                        <div>SPEAKERS</div>
                    </div>
                    <div className="data_item">
                        <div className="num">30+</div>
                        <div>UNIVERSITIES</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
