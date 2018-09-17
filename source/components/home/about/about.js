import React, {Component} from 'react'
import styles from './styles.scss'
import {HashLink as Link} from 'react-router-hash-link'
import {
    Grid,
    Row,
    Col,
    Thumbnail,
    PageHeader,
    Clearfix,
    Image
} from 'react-bootstrap'
import Photos from '../photos/photos';

const attendees = {
    start: 400,
    count: 1400,
    duration: 3000,
    decimals: 0,
    useGroup: true,
    animation: 'up'
};

const university = {
    start: 0,
    count: 30,
    duration: 3000,
    decimals: 0,
    useGroup: true,
    animation: 'up'
};

const sponsor = {
    start: 0,
    count: 19,
    duration: 3000,
    decimals: 0,
    useGroup: true,
    animation: 'up'
};

class About extends Component {

    constructor() {
        super();

    }

    getInitialState() {
        return {isFlipped: false};
    }

    showBack() {
        this.setState({isFlipped: true});
    }

    showFront() {
        this.setState({isFlipped: false});
    }

    handleOnFlip(flipped) {
        if (flipped) {
            this
                .refs
                .backButton
                .getDOMNode()
                .focus();
        }
    }

    handleKeyDown(e) {
        if (this.state.isFlipped && e.keyCode === 27) {
            this.showFront();
        }
    }

    render() {
        return (
            <div id="About" className="About">
                <div className="header">
                    <h1>
                        About
                    </h1>
                </div>
                <div className="content">
                    <Row>
                        <Col>
                            <h1 className="about-header-with-underline">What is Reflections | Projections?</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12} className="about-text">
                            <p className="about-text-p">
                                Reflections | Projections is a tech conference organized and run by students at
                                the University of Illinois at Urbana-Champaign.</p>

                            <p className="about-text-p">We draw students, speakers, and companies from
                                around the world. Join us to listen to tech talks from across the industry, to
                                participate in an Artificial Intelligence programming competition in Mechmania,
                                to solve puzzles throughout the conference during PuzzleBang!, and to attend our
                                job and startup fairs.</p>

                            <p className="about-text-p">The conference is free and open to anyone regardless
                                of age, major, job, or affiliation with the University of Illinois. So come join
                                a discussion led by some of the brightest minds in the business about the
                                bleeding edge of the tech industry!
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4} className="text-center">
                            <Image
                                className="about-image"
                                src="../assets/img/about/jobfair.jpg"
                                responsive/>
                            <h3><a href="/career_fair">Career Fair</a></h3>
                            <p>Meet some of the best companies in the country</p>
                        </Col>

                        <Col md={4} className="text-center">
                            <Image
                                className="about-image"
                                src="../assets/img/about/startupfair.jpg"
                                responsive/>
                            <h3><a href="/startup_fair">Startup Fair</a></h3>
                            <p>Interact with hot new startups</p>
                        </Col>

                        <Col md={4} className="text-center">
                            <Image
                                className="about-image"
                                src="../assets/img/about/speakers.jpg"
                                responsive/>
                            <h3><a href="/#Speakers">Speakers</a></h3>
                            <p>Come listen to some of the industry's best minds</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={4} className="text-center">
                            <Image
                                className="about-image"
                                src="../assets/img/about/mechmania.jpg"
                                responsive/>
                            <h3><a href="/mechmania">MechMania</a></h3>
                            <p>Mechmania is our 24 hour AI hackathon that runs from Friday (9/21) - Saturday
                                (9/22). Build your own AI bot to compete. The best part? No prior experience
                                needed. This year’s Mechmania is sponsored by DeepScale!</p>
                        </Col>

                        <Col md={4} className="text-center">
                            <Image
                                className="about-image"
                                src="../assets/img/about/puzzlebang.jpg"
                                responsive/>
                            <h3><a href="/puzzlebang">PuzzleBang</a></h3>
                            <p>Compete in a week-long puzzle contest hosted by two UIUC Alums to win
                                exciting prizes. This year’s PuzzleBang is sponsored by IMO! Be sure to checkout
                                our 2 pop-up escape rooms in Siebel on Saturday, 9/22!</p>
                        </Col>

                        <Col md={4} className="text-center">
                            <Image
                                className="about-image"
                                src="../assets/img/about/symposium.JPG"
                                responsive/>
                            <h3><a href="/symposium">ACM Symposium</a></h3>
                            <p>R|P 2018 is proud to introduce the first-ever installment of the ACM
                                Symposium - a way for ACM chapters across the Midwest to network and interact by
                                showcasing their project and research work.</p>
                        </Col>
                    </Row>
                    <h1 className="about-header">Special Events</h1>
                    <Row>
                        <Col md={4} className="text-center">
                            <Image className="about-image" src="../assets/img/about/alumni.jpg" responsive/>
                            <h3>Alumni Social</h3>
                            <p>Head over to Legends after the ACM Symposium after the closing ceremony to
                                interact and network with alumni, speakers and current students! It’s the
                                perfect social to culminate the conference.</p>
                        </Col>

                        <Col md={4} className="text-center">
                            <Image
                                className="about-image"
                                src="../assets/img/about/experiences.JPG"
                                responsive/>
                            <h3>Experiences</h3>
                            <p>Experiences are hybrid talks/workshops that not only help students learn the
                                state of the art in fields ranging from distributed computing to machine
                                learning but also make them approachable.</p>
                        </Col>

                        <Col md={4} className="text-center">
                            <Image
                                className="about-image"
                                src="../assets/img/about/challenge.JPG"
                                responsive/>
                            <h3><a href="/giveaway">R|P Giveaway Contest</a></h3>
                            <p>Engage with R|P on our various social media platforms, for a chance to win a
                                Nintendo Switch, a Google Home Mini or an Amazon Echo Dot! Follow us on social
                                media (links in footer) to learn more!</p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default About
