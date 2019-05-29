import React, {Component} from 'react'
import {Jumbotron, Button, OverlayTrigger, Popover} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import styles from './styles.scss'
import Countdown from '../countdown/countdown'
import Scrolldown from '../scrolldown/scrolldown'

const popoverBottom = (
    <Popover
        id="popover-positioned-bottom"
        style={{
        backgroundColor: "rgba(43, 92, 93, 0.5)",
        border: "2px solid #cadea5",
        borderRadius: 0
    }}>
        If you are willing to sponsor!
    </Popover>
);

class Start extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className="Start">
                <Jumbotron>
                    <img className="header" src="{process.env.PUBLIC_URL + "/assets/svg/home_header.svg"}/>
                    <div className="title_sponsor">
                        <h3>Title Sponsor:</h3>
                        <a href="https://microsoft.com/" target="_blank">
                            <img
                                className="title_sponsor_img"
                                src="{process.env.PUBLIC_URL + "/assets/img/sponsors/sponsors2018/jobfair/petabyte/microsoft_full_white.png"}/>
                        </a>
                    </div>

                    <a className="btn" href="/start">
                        <button className="contact">REGISTER
                        </button>
                    </a>
                    <div className="caps">September 17th - 22nd, 2018</div>
                    <Scrolldown/>
                </Jumbotron>
            </div>
        )
    }
}

export default Start
