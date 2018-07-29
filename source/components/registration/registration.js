import React, { Component } from 'react'
import { } from 'react-bootstrap'
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
                <Form />
                <Footer />
            </div>
        )
    }
}

export default Registration
