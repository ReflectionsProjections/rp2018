import React, { Component } from 'react'
import styles from './styles.scss'

class Scrolldown extends Component {

    constructor() {
        super();
    }

    render() {

        this.scrollTo = (name) => {
            const element = document.getElementById(name);
            element.scrollIntoView();
            const scrolledY = window.scrollY;
            if(scrolledY){
                window.scroll({
                  top: scrolledY - 100,
                  left: 0,
                  behavior: 'smooth',
                });
            }
        };

        return(
            <section id="nav_down">
                <a onClick={() => this.scrollTo('About')}><span></span><span></span><span></span><span></span><span></span></a>
            </section>
        )
    }
}

export default Scrolldown
