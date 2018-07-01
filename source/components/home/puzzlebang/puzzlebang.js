import React, { Component } from 'react'
import { PageHeader, Grid, Row, Alert, Button } from 'react-bootstrap'
import styles from './styles.scss'
import Navigation from '../navigation/navigation'
import About from '../about/about'


class PuzzleBang extends Component {
    
    constructor() {
        super()
    }
    
    render() {
        return(
            <div className="PuzzleBang">
                <Navigation />
                <About />
            </div>
            )
        }
}

export default PuzzleBang;
