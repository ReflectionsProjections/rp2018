import React, { Component } from 'react'
import styles from './styles.scss'


class Scrolldown extends Component {

    constructor() {
        super();
    }

    render() {

        this.scrollTo = (name) => {
            const element = document.getElementById(name);
            var yPosition = element.offsetTop;
            window.scrollTo({
                top: yPosition,
                behavior: "smooth"
            });
        };

        return(
            <section id="nav_down">
                <a onClick={() => this.scrollTo('About')}><span></span><span></span><span></span><span></span><span></span></a>
            </section>
        )
    }
}

export default Scrolldown
