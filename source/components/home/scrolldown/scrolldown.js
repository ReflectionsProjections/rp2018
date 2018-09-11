import React, {Component} from 'react'
import styles from './styles.scss'

class Scrolldown extends Component {

    constructor() {
        super();
    }

    render() {

        this.scrollTo = (name) => {
            const element = document.getElementById(name);
            // Get a cross-platform viewport height
            let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            let vh = h / 100;
            var yPosition = element.offsetTop - (12.5 * vh);
            window.scrollTo({top: yPosition, behavior: "smooth"});
        };

        return (
            <section id="nav_down">
                <a href="#About">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </section>
        )
    }
}

export default Scrolldown
