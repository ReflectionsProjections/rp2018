import React, {Component} from 'react'
import styles from './styles.scss'

class Schedule extends Component {

    constructor() {
        super();
        this.state = {
            "scheduleType": "Corporate Events"
        }
        this.toggleSchedule = this
            .toggleSchedule
            .bind(this)
    }

    componentDidMount() {
        this.activeTab = document
            .body
            .querySelector(".active")
    }

    toggleSchedule(event) {
        // Remove the active class from the previous active tab
        this
            .activeTab
            .classList
            .remove("active")
        this.activeTab = event.currentTarget

        // Add the active class to the current active tab
        this
            .activeTab
            .classList
            .add("active")
        this.setState({"scheduleType": this.activeTab.innerHTML})
    }

    render() {
        if (this.state.scheduleType === "Corporate Events") {
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
                                    <h3>Mon, Sep 17</h3>
                                    <li>
                                        <small>12:00p - 1:00p</small>Tech Talk: Granular<span>2405</span>
                                    </li>
                                    <li>
                                        <small>6:00p - 7:00p</small>Tech Talk: Salesforce<span>2405</span>
                                    </li>
                                </ul>
                                <ul>
                                    <h3>Tue, Sep 18</h3>
                                    <li>
                                        <small>10:00a - 4:00p</small>Startup Fair<span>Atrium</span>
                                    </li>
                                    <li>
                                        <small>6:00p - 7:00p</small>Tech Talk: Uber<span>2405</span>
                                    </li>
                                    <li>
                                        <small>7:00p - 8:00p</small>Corporate Social: Flexport<span>2405</span>
                                    </li>
                                </ul>
                                <ul>
                                    <h3>Wed, Sep 19</h3>
                                    <li>
                                        <small>10:00a - 4:00p</small>Career Fair<span>Atrium</span>
                                    </li>
                                    <li>
                                        <small>6:00p - 7:00p</small>Tech Talk: Microsoft<span>2405</span>
                                    </li>
                                    <li>
                                        <small>7:00p - 8:00p</small>Corporate Social: Pinterest<span>2405</span>
                                    </li>
                                </ul>
                                <ul>
                                    <h3>Thu, Sep 20</h3>
                                    <li>
                                        <small>10:00a-4:00p</small>Corporate Day: Rubrik<span>Atrium by ACM</span>
                                    </li>
                                    <li>
                                        <small>12:00p - 1:00p</small>Tech Talk: Quora<span>2405</span>
                                    </li>
                                    <li>
                                        <small>8:00p - 9:00p</small>Corporate Social: Lyft<span>Legends Bar and Grill</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (this.state.scheduleType === "Conference Events") {
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
                                    <h3>Thu, Sep 20</h3>
                                    <li>
                                        <small>4:00p - 5:00p</small>Speaker: Josh Benaloh<span>2405</span>
                                    </li>
                                    <li>
                                        <small>5:00p - 7:00p</small>Experience: Saad Ali<span>2405</span>
                                    </li>
                                    <li>
                                        <small>7:00p</small>Dinner: Noodles & Company<span>Atrium</span><br/>
                                        <center>Sponsored by Zillow Group</center>
                                    </li>
                                </ul>
                                <ul>
                                    <h3>Fri, Sep 21</h3>
                                    <li>
                                        <small>11:00a</small>PuzzleBang Comes to UIUC!<span>Siebel</span><br/>
                                        <center>Sponsored by IMO</center>
                                    </li>
                                    <li>
                                        <small>1:00p - 2:00p</small>Open Source Workshop: Li Li<span>2405</span>
                                    </li>
                                    <li>
                                        <small>2:00p - 4:00p</small>Experience: Forrest Iandola & Sammy Sidhu<span>2405</span>
                                    </li>
                                    <li>
                                        <small>4:00p - 5:00p</small>Speaker: Jay Gambetta<span>2405</span>
                                    </li>
                                    <li>
                                        <small>5:00p - 6:00p</small>Speaker: Romain Paulus<span>2405</span>
                                    </li>
                                    <li>
                                        <small>6:00p - 7:00p</small><b>Keynote </b>Speaker: Marianna Tessel<span>1404</span>
                                    </li>
                                    <li>
                                        <small>7:00p</small>Dinner: Himalayan Chimney<span>Atrium</span>
                                        <center>Sponsored by IMO</center>
                                    </li>
                                    <li>
                                        <small>7:00p</small>MechMania Opening Ceremony<span>1404</span><br/>
                                        <center>Sponsored by DeepScale</center>
                                    </li>
                                    <li>
                                        <small>11:00p</small>Late Night Snack<span>Atrium</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <h3>Sat, Sep 22</h3>
                                    <li>
                                        <small>8:00a</small>Breakfast: Einstein Bros.<span>Atrium</span>
                                        <center>Sponsored by Bayer</center>
                                    </li>
                                    <li>
                                        <small>10:00a - 11:00a</small>Speaker: Siraj Raval<span>2405</span>
                                    </li>
                                    <li>
                                        <small>11:00a - 12:00p</small>Speaker: Bo Li<span>2405</span>
                                    </li>
                                    <li>
                                        <small>12:00p</small>Lunch: Jimmy John's<span>Atrium</span>
                                        <center>Sponsored by DeepScale</center>
                                    </li>
                                    <li>
                                        <small>1:00p - 3:00p</small>Experience: Brian Hoffman<span>2405</span>
                                    </li>
                                    <li>
                                        <small>3:00p - 4:00p</small>Speaker: Jonah Horowitz<span>2405</span>
                                    </li>
                                    <li>
                                        <small>4:00p - 5:00p</small>Speaker: Zack Lipton<span>2405</span>
                                    </li>
                                    <li>
                                        <small>5:00p - 7:00p</small>ACM Symposium<span>2405</span>
                                    </li>
                                    <li>
                                        <small>7:00p</small>Dinner: Papa Del's<span>Atrium</span>
                                        <center>Sponsored by Quora</center>
                                    </li>
                                    <li>
                                        <small>7:30p</small>R|P Closing Ceremony<span>1404</span>
                                    </li>
                                    <li>
                                        <small>9:00p</small>Alumni Social<span>Murphy's Pub</span>
                                    </li>
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
