import React, { Component } from 'react'
import styles from './styles.scss'

class QuestionList extends Component {

    constructor() {
        super();
    }
    render() {
        const questions = [
            {
                "index": 0,
                "question": "What is Reflections | Projections?",
                "answer": "Reflections | Projections is an annual technology conference organized and run by students at the University of Illinois at Urbana-Champaign, drawing students, speakers, and companies from around the world."
            },
            {
                "index": 1,
                "question": "What can I do?",
                "answer": "The week-long event features tech talks via speakers from across the industry and academia, two career fairs, and an array of workshops. Put your wits to the test with our Artificial Intelligence programming competition, MechMania, or our puzzle challenge Puzzlebang!"
            },
            {
                "index": 2,
                "question": "Who can attend?",
                "answer": "Reflections | Projections is free and open to anyone regardless of age, major, or affiliation with the University of Illinois. Come join a discussion led by some of the brightest minds in the business about the bleeding edge of the tech industry!"
            },
            {
                "index": 3,
                "question": "Interested in writing a blog post?",
                "answer": "Checkout out the README for our repo on GitHub!"
            },
            {
                "index": 4,
                "question": "For more information…",
                "answer": "You can find out more about us on our website! Please feel free to reach out with questions or comments to conference-chair@acm.illinois.edu!"
            }
        ];
        const questionMap = questions.map((element, idx) => {
            return (
                <div key={idx}>
                    <div className={"question " + "question#" + element.index}>{element.question}</div>
                    <div className={"answer " + "answer#" + element.index}>{element.answer}</div>
                </div>
            );
        });
        return (
            <ul>
                {questionMap}
            </ul>
        );
    }
}

export default QuestionList