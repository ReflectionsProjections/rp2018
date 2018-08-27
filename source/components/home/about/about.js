import React, { Component } from 'react'
import styles from './styles.scss'
import { Grid, Row, Col, Thumbnail, PageHeader, Clearfix, Image } from 'react-bootstrap'
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
                <Row>
                    <Col md={12}>
                        <h1 className="about-header">What is Reflections | Projections?</h1>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <p className="about-text"> Reflections | Projections is a tech conference organized and run by students at the University of Illinois at Urbana-Champaign.

We draw students, speakers, and companies from around the world. Join us to listen to tech talks from across the industry, to participate in an Artificial Intelligence programming competition in Mechmania, to solve puzzles throughout the conference during PuzzleBang!, and to attend our job and startup fairs.

The conference is free and open to anyone regardless of age, major, job, or affiliation with the University of Illinois. So come join a discussion led by some of the brightest minds in the business about the bleeding edge of the tech industry!
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col md={4} className="text-center">
                        <Image className="about-image" src="../assets/img/about/jobfair.jpg" responsive/>
                        <h3>Job Fair</h3>
                        <p>Meet some of the best companies in the country</p>
                    </Col>

                    <Col md={4} className="text-center">
                        <Image className="about-image" src="../assets/img/about/startupfair.jpg" responsive/>
                        <h3>Startup Fair</h3>
                        <p>Interact with hot new startups</p>
                    </Col>

                    <Col md={4} className="text-center">
                        <Image className="about-image" src="../assets/img/about/speakers.jpg" responsive/>
                        <h3>Speakers</h3>
                        <p>Come listen to some of the industry's best</p>
                    </Col>
                </Row>

                <Row>
                    <Col md={4} className="text-center">
                        <Image className="about-image" src="../assets/img/about/mechmania.jpg" responsive/>
                        <h3>Mech Mania</h3>
                        <p>Compete for glory in this AI Hackathon</p>
                    </Col>

                    <Col md={4} className="text-center">
                        <Image className="about-image" src="../assets/img/about/puzzlebang.jpg" responsive/>
                        <h3>Puzzle Bang</h3>
                        <p>Challenge your mind with puzzles</p>
                    </Col>

                    <Col md={4} className="text-center">
                        <Image className="about-image" src="../assets/img/about/alumni.jpg" responsive/>
                        <h3>ACM Symposium</h3>
                        <p>More info coming soon</p>
                    </Col>
                </Row>
                <Photos/>
            </div>
        );
    }
}

export default About