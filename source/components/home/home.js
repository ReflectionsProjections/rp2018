import React, {Component} from 'react'
import styles from './styles.scss'
import Navigation from './navigation/navigation'
import Start from './start/start'
import About from './about/about'
import Speakers from './speakers/speakers'
import Sponsors from './sponsors/sponsors'
import Footer from './footer/footer'
import FAQ from './faq/faq.js'
import Schedule from './schedule/schedule.js'

class Home extends Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="Home">
                <Navigation/>
                <Start/>
                <About/>
                <Schedule/>
                <Speakers/>
                <FAQ/>
                <Sponsors/>
                <Footer/>
            </div>
        )
    }
}

export default Home
