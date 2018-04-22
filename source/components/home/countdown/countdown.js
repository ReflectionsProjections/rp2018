import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery'
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
            if($("#days").text().split(" ")[0] != days)
            {
                $("#days").fadeOut(500, "linear", function() {
                    $(this).text(days + " D ").fadeIn();
                });
            }
            else
            {
                $("#days").val(days + " D ");
            }
            if($("#hours").text().split(" ")[0] != hours)
            {
                $("#hours").fadeOut(500, "linear", function() {
                    $(this).text(hours + " H ").fadeIn();
                });
            }
            else
            {
                $("#hours").val(hours + " H ");
            }
            if($("#minutes").text().split(" ")[0] != minutes)
            {
                $("#minutes").fadeOut(500, "linear", function() {
                    $(this).text(minutes + " M ").fadeIn();
                });
            }
            else
            {
                $("#minutes").val(minutes + " M ");
            }
            if($("#seconds").text().split(" ")[0] != seconds)
            {
                $("#seconds").fadeOut(500, "linear", function() {
                    $(this).text(seconds + " S ").fadeIn();
                });
            }
            else
            {
                $("#seconds").val(seconds + " S ");
            }
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
                    <button className="bordered" disabled><span id="days">Coming Soon!</span></button>
                    <button className="bordered" disabled><span id="hours">Coming Soon!</span></button>
                </div>
                <div class="countdown">
                    <button className="bordered" disabled><span id="minutes">Coming Soon!</span></button>
                    <button className="bordered" disabled><span id="seconds">Coming Soon!</span></button>
                </div>
            </div>
        )
    }
}

export default Countdown;
