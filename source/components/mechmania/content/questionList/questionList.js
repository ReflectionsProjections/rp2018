import React, { Component } from 'react'
import nl2br from 'react-newline-to-break'
import styles from './styles.scss'

class QuestionList extends Component {

    constructor() {
        super();
    }
    render() {
        const questions = [
            {
                "index": 0,
                "question": "What is MechMania?",
                "answer": ["MechMania is a 24-hour programming contest in which teams of students from various schools compete to create an AI capable of playing (and winning) a strategy game we have developed for the event. The competition will begin with the opening ceremony and announcement of the game on Friday, September 21st after which the programming component will commence immediately. The competition will conclude with the closing ceremony and awards presentation on Saturday, September 22nd after running for 24 hours.",<br/>, <br/> ,"Register for MechMania", <a href="https://acmrp.typeform.com/to/MR6XmN" target="_blank"> here</a>,"! You must be registered for Reflections | Projections to compete in MechMania."]
            },
            {
                "index": 1,
                "question": "Who's eligible?",
                "answer": nl2br("We accept teams of up to four students. Our student competition accepts up to forty teams and pits them against each other in one final battle. Teams do not need to be comprised of all students from the same school, but all participants must be actively enrolled in a college or university.")
            },
            {
                "index": 2,
                "question": "What you need to know",
                "answer": "All members should be proficient in the programming language their team intends to use. The API will use JSON messages passed over HTTP, so we recommend having knowledge of a JSON library in your chosen language."
            },
            {
                "index": 3,
                "question": "What you need not know",
                "answer": "No prior knowledge of any specific languages are required. You won't need a background in artificial intelligence—in previous years, many teams without an AI background have competed and done well, or even won. You also shouldn't need knowledge of network programming beyond HTTP requests."
            },
            {
                "index": 4,
                "question": "What you can bring",
                "answer": "You can bring any reference manual(s) you wish, whether it be the Art of Computer Programming or the Art of War. But absolutely no outside code. You may, however, bring non-code items like rc files, build scripts, notes, etc. Competitors are required to bring their own laptops, though the code you write must be capable of running on our systems."
            },
            {
                "index": 5,
                "question": "What you'll do",
                "answer": "By either starting from scratch or using our provided sample clients, you will build an artificial intelligence client to play a strategy game of our design. Our API will provide you information about the current state of the game, as well as allow you to send commands to play it. You may find previous competition sites useful to get an idea of how MechMania operates."
            },
        ];
        const questionMap = questions.map((element, idx) => {
            return (
                <div key={idx}>
                    <div className={"question__mm " + "question#" + element.index}>{element.question}</div>
                    <div className={"answer__mm " + "answer#" + element.index}>{element.answer}</div>
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
