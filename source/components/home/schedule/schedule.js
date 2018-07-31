import React, { Component } from 'react'
import styles from './styles.scss'

class Schedule extends Component {

    constructor() {
        super();
        this.state = {
            "scheduleType": "Corporate Events",
        }
        this.toggleSchedule = this.toggleSchedule.bind(this)
    }

    componentDidMount() {
        this.activeTab = document.body.querySelector(".active")
    }

    toggleSchedule (event) {
        // Remove the active class from the previous active tab
        this.activeTab.classList.remove("active")
        this.activeTab = event.currentTarget
        
        // Add the active class to the current active tab
        this.activeTab.classList.add("active")
        this.setState({
            "scheduleType": this.activeTab.innerHTML
        })
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
                        <div className="tab-container">
                            <div className="tab tab-1 active" onClick={this.toggleSchedule}>
                                Corporate Events
                            </div>
                            <div className="tab tab-2" onClick={this.toggleSchedule}>
                                Conference Events
                            </div>
                        </div>
                        <div className="content">
                            <div className="col">
                                <ul>
                                    <h4>Mon, Sep 17</h4>
                                    <li><small>12:00p</small>Granular Tech Talk<span>2405</span></li>
                                    <li><small>6:00p</small>Salesforce Tech Talk<span>2405</span></li>
                                    <li><small>7:00p</small>Corporate Social<span>Other</span></li>
                                </ul>
                                <ul>
                                    <h4>Tue, Sep 18</h4>
                                    <li><small>10:00a</small>Startup Fair<span>Atrium</span></li>
                                    <li><small>6:00p</small>Uber Tech Talk<span>2405</span></li>
                                    <li><small>7:00p</small>Corporate Social<span>Other</span></li>
                                </ul>
                                <ul>
                                    <h4>Wed, Sep 19</h4>
                                    <li><small>10:00a</small>Career Fair<span>Atrium</span></li>
                                    <li><small>6:00p</small>Microsoft Tech Talk<span>2405</span></li>
                                    <li><small>7:00p</small>Corporate Social<span>Other</span></li>
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
                            Schedule
                        </h1>
                    </div>
                    <div className="content-container">
                        <div className="tab-container">
                            <div className="tab tab-1 active" onClick={this.toggleSchedule}>
                                Corporate Events
                            </div>
                            <div className="tab tab-2" onClick={this.toggleSchedule}>
                                Conference Events
                            </div>
                        </div>
                        <div className="content">
                            <div className="col">
                                <ul>
                                    <h4>Thu, Sep 20</h4>
                                    <li><small>4:00p</small>Speaker Talk<span>2405</span></li>
                                    <li><small>5:00p</small>Speaker Talk<span>2405</span></li>
                                </ul>
                                <ul>
                                    <h4>Fri, Sep 21</h4>
                                    <li><small>11:00a</small>PuzzleBang<span>2nd Floor Atrium</span></li>
                                    <li><small>1:00p</small>Speaker Talk<span>2405</span></li>
                                    <li><small>1:00p</small>OSS<span>Other</span></li>
                                    <li><small>2:00p</small>Speaker Talk<span>2405</span></li>
                                    <li><small>4:00p</small>Speaker Talk<span>2405</span></li>
                                    <li><small>5:00p</small>Speaker Talk<span>2405</span></li>
                                    <li><small>6:00p</small>Speaker Talk<span>2405</span></li>
                                    <li><small>7:00p</small>Dinner<span>Atrium</span></li>
                                    <li><small>9:00p</small>MechMania Opening<span>1404</span></li>
                                    <li><small>10:00p</small>Start of MechMania<span>1404</span></li>
                                    <li><small>10:00p</small>Speaker Socials<span>Other</span></li>
                                    <li><small>11:00p</small>Late night snack<span>Atrium</span></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <h4>Sat, Sep 22</h4>
                                    <li><small>8:00a</small>Breakfast<span>Atrium</span></li>
                                    <li><small>8:00a</small>PuzzleBang<span>2nd Floor Atrium</span></li>
                                    <li><small>10:00a</small>Speaker Tech Talk<span>2405</span></li>
                                    <li><small>11:00a</small>Speaker Tech Talk<span>2405</span></li>
                                    <li><small>12:00p</small>Lunch<span>Atrium</span></li>
                                    <li><small>1:00p</small>Speaker Tech Talk<span>2405</span></li>
                                    <li><small>3:00p</small>Speaker Tech Talk<span>2405</span></li>
                                    <li><small>3:00p</small>Speaker Tech Talk<span>Other</span></li>
                                    <li><small>4:00p</small>Speaker Tech Talk<span>2405</span></li>
                                    <li><small>5:00p</small>ACM Symposium<span>2405</span></li>
                                    <li><small>7:00p</small>Dinner<span>Atrium</span></li>
                                    <li><small>8:00p</small>Speaker Socials<span>Other</span></li>
                                    <li><small>8:00p</small>PuzzleBang Ends<span>2405</span></li>
                                    <li><small>9:00p</small>MechMania Ends<span>1404</span></li>
                                    <li><small>10:00p</small>MechMania Closing Ceremony<span>1404</span></li>
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