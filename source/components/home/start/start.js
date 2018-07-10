import React, { Component } from 'react'
import { Jumbotron, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './styles.scss'
import Countdown from '../countdown/countdown'
import Scrolldown from '../scrolldown/scrolldown'


const popoverBottom = (
    <Popover id="popover-positioned-bottom" style={{backgroundColor: "rgba(43, 92, 93, 0.5)", border: "2px solid #cadea5", borderRadius: 0}}>
        If you are willing to sponsor!
    </Popover>
);

class Start extends Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div className="Start">
                <Jumbotron>
                    <div className="caps">September 17th - 22nd, 2018</div>
                    <Countdown className="counter"/>
                    {/*<div style={{margin: "15px", paddingBottom: "10px", fontSize: "18px"}}>DAYS&nbsp; LEFT</div>*/}
                    <div className="intro"> Interested in sponsoring or attending? </div>
                    <a className="btn" href="mailto:conference-chair@acm.illinois.edu">
                        <button className="contact">CONTACT US
                        </button>
                    </a>
                    <Scrolldown/>
                </Jumbotron>
            </div>
        )
    }
}

export default Start 