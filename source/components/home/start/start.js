import React, { Component } from 'react'
import { Jumbotron, Button, Tabs, Tab, Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './styles.scss'
import Countdown from '../countdown/countdown'
import Scrolldown from '../scrolldown/scrolldown'


class Start extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div className="Start">
                <Jumbotron>
                    <img className="header" src="../assets/svg/home_header.svg" />
                    <p className="caps">September 17 - 22th, 2018</p>
                    <div className="counter">
                        <Countdown/>
                        <div style={{margin: "15px", paddingBottom: "10px"}}>DAYS&nbsp; LEFT</div>
                    </div>
                    <a className="btn" href="http://reflectionsprojections.org/signup" target="_blank" rel="noopener noreferrer"><button>REGISTER</button></a>
                    <Scrolldown/>
                </Jumbotron>
            </div>
        )
    }
}

export default Start 
