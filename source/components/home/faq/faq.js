import React, {Component} from 'react'
import {Jumbotron, Button, OverlayTrigger, Popover} from 'react-bootstrap'
import QuestionList from './questionList/questionList'
import styles from './styles.scss'

class FAQ extends Component {

    constructor() {
        super();
    }
    render() {
        return (
            <div className="FAQ" id="FAQ">
                <div id="header">
                    <h1>
                        FAQ
                    </h1>
                </div>
                <div id="QuestionListContainer">
                    <QuestionList/>
                </div>
            </div>
        )
    }
}

export default FAQ