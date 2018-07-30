import React, { Component } from 'react'
import styles from './styles.scss'

class Schedule extends Component {

    constructor() {
        super();
        this.state = {
            "scheduleType": "Corporate Events"
        }
        this.toggleSchedule = this.toggleSchedule.bind(this)
    }

    toggleSchedule (event) {
        if (this.state.scheduleType === "Corporate Events") {
            this.setState({
                "scheduleType": "Conference Events"
            })
        } else {
            this.setState({
                "scheduleType": "Corporate Events"
            })
        }
    }
 
    render() {
        if(this.state.scheduleType === "Corporate Events") {
            return (
                <div id="Schedule" className="Schedule">
                    <div className="header">
                        <h1>
                            Schedule
                        </h1>
                    </div>
                    <div className="content-container">
                        <div className="switch-container">
                            <label className="switch">
                                <input type="checkbox" onClick={this.toggleSchedule}></input>
                                <span className="slider round"><div className="label">{this.state.scheduleType}</div></span>
                            </label>
                        </div>
                        <div className="content">
                            <div className="col">
                                <ul>
                                    <h4>Thu, Oct 1</h4>
                                    <li><small>4:00p</small>Startup Panel<span>2405</span></li>
                                    <li><small>5:00p</small>Startup Fair<span>Atrium</span></li>
                                    <li><small>8:00p</small>Speaker: Roy Bahat<span>1404</span></li>
                                </ul>
                                <ul>
                                    <h4>Fri, Oct 2</h4>
                                    <li><small>9:00a</small>Breakfast<span>Atrium</span></li>
                                    <li><small>10:00a</small>Job Fair<span>Atrium</span></li>
                                    <li><small>5:00p</small>Speaker: Craig Reynolds<span>1404</span></li>
                                    <li><small>6:00p</small>Dinner/GoDaddy Talk<span>Atrium</span></li>
                                    <li><small>7:00p</small>Speaker: Katherine Scott<span>1404</span></li>
                                    <li><small>8:00p</small>Speaker: Gopal Kakivaya<span>1404</span></li>
                                    <li><small>9:00p</small>Alumni Event</li>
                                    <li><small>9:00p</small>Mechmania Opening<span>1404</span></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <h4>Sat, Oct 3</h4>
                                    <li><small>9:00a</small>Breakfast<span>Atrium</span></li>
                                    <li><small>10:00a</small>Speaker: Jason Tan<span>1404</span></li>
                                    <li><small>11:00a</small>Speaker: Jerry Talton<span>1404</span></li>
                                    <li><small>12:00p</small>Lunch/Microsoft Talk<span>Atrium</span></li>
                                    <li><small>1:00p</small>Speaker: Cassidy Williams<span>1404</span></li>
                                    <li><small>2:00p</small>Speaker: Michael Armbrust<span>1404</span></li>
                                    <li><small>3:00p</small>Speaker: Yisong Yue<span>1404</span></li>
                                    <li><small>4:00p</small>Speaker: Winnie Cheng<span>1404</span></li>
                                    <li><small>5:00p</small>Speaker: Alan Braverman<span>1404</span></li>
                                    <li><small>6:00p</small>Dinner/Palantir Talk<span>Atrium</span></li>
                                    <li><small>7:00p</small>Speaker: Anna Patterson<span>1404</span></li>
                                    <li><small>8:00p</small>Speaker: Greg Baugues<span>1404</span></li>
                                    <li><small>9:00p</small>Puzzlebang! Closing<span>2405</span></li>
                                </ul>
                                <ul>
                                    <h4>Sun, Oct 4</h4>
                                    <li><small>9:00a</small>Breakfast<span>Atrium</span></li>
                                    <li><small>11:30a</small>Lunch<span>Atrium</span></li>
                                    <li><small>12:30p</small>Mechmania Closing<span>1404</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if(this.state.scheduleType === "Conference Events") {
            return (
                <div id="Schedule" className="Schedule">
                    <div className="header">
                        <h1>
                            This is supposed to be a different schedule.
                        </h1>
                    </div>
                    <div className="content-container">
                        <div className="switch-container">
                            <label className="switch">
                                <input type="checkbox" onClick={this.toggleSchedule}></input>
                                <span className="slider round"><div className="label">{this.state.scheduleType}</div></span>
                            </label>
                        </div>
                        <div className="content">
                            <div className="col">
                                <ul>
                                    <h4>Thu, Oct 1</h4>
                                    <li><small>4:00p</small>Startup Panel<span>2405</span></li>
                                    <li><small>5:00p</small>Startup Fair<span>Atrium</span></li>
                                    <li><small>8:00p</small>Speaker: Roy Bahat<span>1404</span></li>
                                </ul>
                                <ul>
                                    <h4>Fri, Oct 2</h4>
                                    <li><small>9:00a</small>Breakfast<span>Atrium</span></li>
                                    <li><small>10:00a</small>Job Fair<span>Atrium</span></li>
                                    <li><small>5:00p</small>Speaker: Craig Reynolds<span>1404</span></li>
                                    <li><small>6:00p</small>Dinner/GoDaddy Talk<span>Atrium</span></li>
                                    <li><small>7:00p</small>Speaker: Katherine Scott<span>1404</span></li>
                                    <li><small>8:00p</small>Speaker: Gopal Kakivaya<span>1404</span></li>
                                    <li><small>9:00p</small>Alumni Event</li>
                                    <li><small>9:00p</small>Mechmania Opening<span>1404</span></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <h4>Sat, Oct 3</h4>
                                    <li><small>9:00a</small>Breakfast<span>Atrium</span></li>
                                    <li><small>10:00a</small>Speaker: Jason Tan<span>1404</span></li>
                                    <li><small>11:00a</small>Speaker: Jerry Talton<span>1404</span></li>
                                    <li><small>12:00p</small>Lunch/Microsoft Talk<span>Atrium</span></li>
                                    <li><small>1:00p</small>Speaker: Cassidy Williams<span>1404</span></li>
                                    <li><small>2:00p</small>Speaker: Michael Armbrust<span>1404</span></li>
                                    <li><small>3:00p</small>Speaker: Yisong Yue<span>1404</span></li>
                                    <li><small>4:00p</small>Speaker: Winnie Cheng<span>1404</span></li>
                                    <li><small>5:00p</small>Speaker: Alan Braverman<span>1404</span></li>
                                    <li><small>6:00p</small>Dinner/Palantir Talk<span>Atrium</span></li>
                                    <li><small>7:00p</small>Speaker: Anna Patterson<span>1404</span></li>
                                    <li><small>8:00p</small>Speaker: Greg Baugues<span>1404</span></li>
                                    <li><small>9:00p</small>Puzzlebang! Closing<span>2405</span></li>
                                </ul>
                                <ul>
                                    <h4>Sun, Oct 4</h4>
                                    <li><small>9:00a</small>Breakfast<span>Atrium</span></li>
                                    <li><small>11:30a</small>Lunch<span>Atrium</span></li>
                                    <li><small>12:30p</small>Mechmania Closing<span>1404</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Schedule