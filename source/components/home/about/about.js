import React, { Component } from 'react'
import { Jumbotron, Button, Tabs, Tab, Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './styles.scss'
import Countdown from '../countdown/countdown'

class About extends Component {

    constructor() {
        super();

    }

    render() {
        return(
            <div id="About" className="About container">

                <Jumbotron>
                    <img className="About__header" src="../assets/svg/home_header.svg" />
                    <p className="caps">September 25th - October 1st, 2018</p>
                    <div className="About__counter"><Countdown></Countdown><span style={{ margin:"5px" }}>days left</span></div>
                    <a href="http://reflectionsprojections.org/signup" ><button>GET STARTED</button></a>
                </Jumbotron>
                <Grid>
                  <Tabs className="About__leftTabs" defaultActiveKey={1} id="uncontrolled-tab-example" >
                      <div title="What is Reflections|Projections?">
                      <span style={{color: "white", fontFamily: "Roboto, sans-serif"}}>Reflections | Projections is an annual technology conference organized and run by students
                      at the University of Illinois at Urbana-Champaign, drawing students, speakers, and companies from around the world.
                      The week-long event features tech talks via speakers from across the industry and academia, two career fairs, and an array of workshops.
                      Put your wits to the test with our Artificial Intelligence programming competition, MechMania, or our puzzle challenge Puzzlebang!
                      <br /><br />
                      Reflections | Projections is free and open to anyone regardless of age, major, or
                      affiliation with the University of Illinois. Come join a discussion led by some of
                      the brightest minds in the business about the bleeding edge of the tech industry! <br /><br />
                      You do not need to register for Reflections | Projections to attend; however, you
                      must be 18 or older to register, receive food, and receive a free conference t-shirt.
                      If you are interested, feel free to join us right now!</span>
                      </div>
                  </Tabs>
                </Grid>
            </div>
        )
    }
}

export default About
