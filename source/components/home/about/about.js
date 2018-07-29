import React, { Component } from 'react'
import styles from './styles.scss'
import { Grid, Row, Col, Thumbnail, PageHeader, Clearfix } from 'react-bootstrap'
import Photos from '../photos/photos';


const attendees = {
    start: 400,
    count: 1400,
    duration: 3000,
    decimals: 0,
    useGroup: true,
    animation: 'up',
};

const university = {
    start: 0,
    count: 30,
    duration: 3000,
    decimals: 0,
    useGroup: true,
    animation: 'up',
};

const sponsor = {
    start: 0,
    count: 19,
    duration: 3000,
    decimals: 0,
    useGroup: true,
    animation: 'up',
};

class About extends Component {

    constructor() {
        super();

    }

    getInitialState() {
        return {
          isFlipped: false
        };
      }

    showBack() {
        this.setState({
            isFlipped: true
        });
    }

    showFront() {
        this.setState({
            isFlipped: false
        });
    }

    handleOnFlip(flipped) {
        if (flipped) {
            this.refs.backButton.getDOMNode().focus();
        }
    }

    handleKeyDown(e) {
        if (this.state.isFlipped && e.keyCode === 27) {
            this.showFront();
        }
    }

    render() {
        return (
            <div id="About">
                <div className="about-grid">
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                </div>
                <Photos/>
            </div>
        );
    }
}

export default About
