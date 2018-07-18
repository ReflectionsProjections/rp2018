import React, { Component } from 'react'
import { } from 'react-bootstrap'
import styles from './styles.scss'
import Navigation from './navigation/navigation'
import Content from './content/content'
import Footer from './footer/footer'


class FAQ extends Component {

    constructor() {
        super()
    }

    render() {
        return(
            <div className="FAQ">
                <Navigation />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default FAQ
