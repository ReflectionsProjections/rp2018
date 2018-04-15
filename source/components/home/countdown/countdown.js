import React, { Component } from 'react'
import ReactDOM from 'react-dom';


Number.prototype.pad = function(size) {
    var s = String(this);
    while (s.length < (size || 2)) {s = "0" + s;}
    return s;
}

class Countdown extends Component {
    
    constructor() {
        super();
    }

    componentWillMount(){
      var countDownDate = new Date("Sep 17, 2018 00:00:00").getTime();
        var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).pad(2);
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).pad(2);
            var seconds = Math.floor((distance % (1000 * 60)) / 1000).pad(2);
            document.getElementById("countdown").innerHTML = days + "D  " + hours + "H  "
            + minutes + "M  " + seconds + "S  ";
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").style = "display: none";
            }
        }, 1000);
    }

    render() {
        return(
          <div><span id="countdown">Coming Soon!</span></div>
        )
    }
}

export default Countdown;
