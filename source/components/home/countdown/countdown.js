import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery'
import styles from './styles.scss'

Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) {
        s = "0" + s;
    }
    return s;
}

class Countdown extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        var countDownDate = new Date("Sep 17, 2018 12:00:00").getTime();
        var x = setInterval(function () {
            var now = new Date().getTime();
            // Patch to ensure countdown timer doesn't show negative time.
            var distance = Math.max(0, countDownDate - now);
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).pad(2);
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).pad(2);
            var seconds = Math.floor((distance % (1000 * 60)) / 1000).pad(2);
            if ($("#days").text().split(" ")[0] != days) {
                $("#days")
                    .fadeOut(500, "linear", function () {
                        $(this)
                            .text(days)
                            .fadeIn();
                    });
            }
            if ($("#hours").text().split(" ")[0] != hours) {
                $("#hours")
                    .fadeOut(500, "linear", function () {
                        $(this)
                            .text(hours)
                            .fadeIn();
                    });
            }
            if ($("#minutes").text().split(" ")[0] != minutes) {
                $("#minutes")
                    .fadeOut(500, "linear", function () {
                        $(this)
                            .text(minutes)
                            .fadeIn();
                    });
            }
            if ($("#seconds").text().split(" ")[0] != seconds) {
                $("#seconds")
                    .fadeOut(500, "linear", function () {
                        $(this)
                            .text(seconds)
                            .fadeIn();
                    });
            }
            if (distance < 0) {
                clearInterval(x);
                // document.getElementById("countdown").style = "display: none";
            }
        }, 1000);
    }

    render() {
        return (
            <div className="countdown">
                <ul>
                    <li className="time-square">
                        <ul>
                            <li>
                                <div className="bordered">
                                    <div id="days">∞</div>
                                </div>
                            </li>
                            <li>
                                <div id="time-label">DAYS</div>
                            </li>
                        </ul>
                    </li>
                    <li className="time-square">
                        <ul>
                            <li>
                                <div className="bordered">
                                    <div id="hours">∞</div>
                                </div>
                            </li>
                            <li>
                                <div id="time-label">HOURS</div>
                            </li>
                        </ul>
                    </li>
                    <li className="time-square">
                        <ul>
                            <li>
                                <div className="bordered">
                                    <div id="minutes">∞</div>
                                </div>
                            </li>
                            <li>
                                <div id="time-label">MINUTES</div>
                            </li>
                        </ul>
                    </li>
                    <li className="time-square">
                        <ul>
                            <li>
                                <div className="bordered">
                                    <div id="seconds">∞</div>
                                </div>
                            </li>
                            <li>
                                <div id="time-label">SECONDS</div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Countdown;
