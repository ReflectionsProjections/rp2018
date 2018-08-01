import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import styles from './styles.scss'
import Navigation from './navigation/navigation'
import Footer from './footer/footer'
import Form from './form/form'

class Registration extends Component {

    constructor() {
        super()
    }

    render() {
        return(
            <div className="Registration">
            <Jumbotron>
                <img className="header" src="../assets/svg/home_header.svg" />
                <div className="caps">September 17th - 22nd, 2018</div>
            </Jumbotron>
                <Form />
            </div>
        )
    }
}

export default Registration
