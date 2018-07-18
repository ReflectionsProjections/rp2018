import React, { Component } from 'react'
import { } from 'react-bootstrap'
import styles from './styles.scss'
import Navigation from './navigation/navigation'
import Speakers from './speakers/speakers'
import Sponsors from './sponsors/sponsors'
import Footer from './footer/footer'


class rp2017 extends Component {

    constructor() {
        super()
    }

    render() {
        return(
            <div className="rp2017">
                <Navigation />
                <Speakers />
                <Sponsors />
                <Footer />
            </div>
        )
    }
}

export default rp2017
