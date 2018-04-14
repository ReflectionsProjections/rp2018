import React, { Component } from 'react'
import styles from './styles.scss'
import { Grid, Row, Col, Thumbnail, PageHeader, Clearfix } from 'react-bootstrap'
import FlipCard from 'react-flipcard';
import AnimationCount from 'react-count-animation';
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
                        <FlipCard>
                            <div className="title">What is Reflections | Projections?</div>
                            <div className="descrip">
                            Reflections | Projections is an annual technology conference organized and run by students
                            at the University of Illinois at Urbana-Champaign, drawing students, speakers, and companies from around the world.
                            </div>
                        </FlipCard>
                    </div>
                    <div className="col">
                        <FlipCard>
                            <div className="title">What can I do?</div>
                            <div className="descrip">
                            The week-long event features tech talks via speakers from across the industry and academia, two career fairs, and an array of workshops.
                            Put your wits to the test with our Artificial Intelligence programming competition, MechMania, or our puzzle challenge Puzzlebang!
                            </div>
                        </FlipCard>                    
                    </div>
                    <div className="col">
                        <FlipCard>
                            <div className="title">Who can attend?</div>
                            <div className="descrip">
                            Reflections | Projections is free and open to anyone regardless of age, major, or
                            affiliation with the University of Illinois. Come join a discussion led by some of
                            the brightest minds in the business about the bleeding edge of the tech industry! 
                            </div>
                        </FlipCard>    
                    </div>
                </div>
                <Photos/>
            </div>
        );
    }
}

export default About