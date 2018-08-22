import React, { Component } from 'react'
import styles from './styles.scss'

class QuestionList extends Component {

    constructor() {
        super();
    }
    render() {
        const description = "Reflections | Projections 2018 is proud to introduce the first ever ACM Symposium at the University of Illinois at Urbana-Champaign as a part of the 24th installment of the conference.";

        const questions = [
            {
                "index": 0,
                "question": "What is the ACM Symposium?",
                "answer": ["The ACM Symposium is a platform for students to come together and share their research work (through research papers or poster presentations) or their individual/SIG projects (through live demos)."]
            },
            {
                "index": 1,
                "question": "What is the motivation behind the ACM Symposium?",
                "answer": ["The ACM Symposium is a way for us to return to our roots! R|P originated as the Midwestern ACM Chapter Conference back in 1995 and this year we are aiming to bring all our neighboring midwestern chapters together to facilitate collaboration and conversation. All our chapters are doing incredible research and building really cool projects and we would be remiss if we couldn't shine a spotlight on it. Thus our tagline: ", <b>Industry meets Academia</b>,"!"]
            },
            {
                "index": 2,
                "question": "Why should I attend?",
                "answer": "Well, for one, this is a great opportunity for our chapters to network, exchange ideas, learn and support one another! Second, your work gets more visibility. With an audience consisting of fellow ACM chapter members, students attending from 10+ midwestern universities, professors and researchers of UIUC themselves and other conference attendees and speakers, who knows what opportunities might present themselves?"
            },
            {
                "index": 3,
                "question": "What am I allowed to showcase?",
                "answer": "SIG/ACM projects, individual/group projects or research, open source projects or contributions and anything in-between would be awesome to have at our project fair."
            },
            {
                "index": 4,
                "question": "What does R|P provide?",
                "answer": "The booths, charging outlets, food and visibility!"
            },
            {
                "index": 5,
                "question": "When and Where?",
                "answer": "Date: Saturday, September 22nd, 2018, Time: 4 - 6 PM, Location: Thomas M Siebel Center, University of Illinois at Urbana-Champaign"
            },
            {
                "index": 6,
                "question": "This sounds amazing! How do I sign up?",
                "answer": ["The ACM Symposium invites members from ACM Chapters (or your University’s equivalent organizations) to the ACM Symposium. If your ACM Chapter is interested in registering and/or attending please reach out with questions or ideas to ", <a href='mailto:conference-chair@acm.illinois.edu' target='_blank'>conference-chair@acm.illinois.edu</a>, ". The official registration form for the Symposium is coming soon to our website! We look forward to seeing you at R|P 2018!"]
            }
        ];
        const questionMap = questions.map((element, idx) => {
            return (
                <div key={idx}>
                    <div className={"question__sym " + "question#" + element.index}>{element.question}</div>
                    <div className={"answer__sym " + "answer#" + element.index}>{element.answer}</div>
                </div>
            );
        });
        return (
            <div>
            <div className="answer__sym">{description}</div>
            <ul>
                {questionMap}
            </ul>
            </div>
        );
    }
}

export default QuestionList
