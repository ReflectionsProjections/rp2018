import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import styles from './styles.scss'

Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}

class Countdown extends Component {

    constructor() {
        super();
    }

    componentWillMount() {
        var countDownDate = new Date("Sep 17, 2018 00:00:00").getTime();
        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).pad(2);
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).pad(2);
            var seconds = Math.floor((distance % (1000 * 60)) / 1000).pad(2);
            document.getElementById("days").innerHTML = days + " D ";
            document.getElementById("hours").innerHTML = hours + " H  ";
            document.getElementById("minutes").innerHTML = minutes + " M  ";
            document.getElementById("seconds").innerHTML = seconds + " S ";
            if (distance < 0) {
                clearInterval(x);
                // document.getElementById("countdown").style = "display: none";
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                <div class="countdown">
                    <button id="days" className="bordered" disabled>Coming Soon!</button>
                    <button id="hours" className="bordered" disabled>Coming Soon!</button>
                </div>
                <div class="countdown">
                    <button id="minutes" className="bordered" disabled>Coming Soon!</button>
                    <button id="seconds" className="bordered" disabled>Coming Soon!</button>
                </div>
            </div>
        )
    }
}

export default Countdown;
