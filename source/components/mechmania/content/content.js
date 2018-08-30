import React, { Component } from 'react'
import { Jumbotron, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import QuestionList from './questionList/questionList'
import styles from './styles.scss'
import Carousel from '../mechmania-carousel/carousel';

class Content extends Component {

    constructor() {
        super();
    }
    render() {
        return (
            <div className="Content">
                <div id="header">
                    <h1>
                    MechMania
                    </h1>
                </div>
                <div id="QuestionListContainer">
                    <QuestionList />
                </div>
            </div>
        )
    }
}

export default Content