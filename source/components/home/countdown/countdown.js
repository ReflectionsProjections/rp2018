import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import AnimationCount from 'react-count-animation';
import 'react-count-animation/dist/count.min.css';


class Countdown extends Component {
    constructor() {
        super();
        this.calDate.bind(this);
    }

    calDate() {
      let oneDay = 24*60*60*1000;
      let secondDate = new Date;
      let firstDate = new Date('September 25, 2018');
      let diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
      return diffDays;
    }

    render() {
        return(
          <span className="exam-div" style={{color: "white"}}>
            <AnimationCount
              start="0"
              count={this.calDate()}
              duration="1000"
              decimals="0"
              useGroup="true"
              animation="roll">
            </AnimationCount>
          </span>
        )
    }
}

export default Countdown;
