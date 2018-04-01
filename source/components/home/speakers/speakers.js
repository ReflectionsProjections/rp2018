import React, { Component } from 'react'
import { Grid, Row, Col, Thumbnail, PageHeader } from 'react-bootstrap'

import styles from './styles.scss'

class Speakers extends Component {

    constructor() {
        super()
    }

    render() {

        const speakerList = [
            // Keynotes
            {
                'name': 'Steve Wozniak',
                'img': '../assets/img/keynotes/steve.jpg',
                'year': 'Co-founder of Apple'
            },
            {
                'name': 'Alexis Ohanian',
                'img': '../assets/img/keynotes/alex.jpg',
                'year': 'Co-founder and Executive Chairman of Reddit'
            },
            {
                'name': 'Brian J. Fox',
                'img': '../assets/img/keynotes/brian.jpg',
                'year': 'Author of GNU Bash shell',
                'youtube': 'https://www.youtube.com/watch?v=itBU4F50N8Q',
            },
            {
                'name': 'Jay “Saurik” Freeman',
                'img': '../assets/img/keynotes/jay.jpg',
                'year': 'Creator of Cydia'
            },
            {
                'name': 'Peter Norvig',
                'img': '../assets/img/keynotes/peter.jpg',
                'year': 'Director of research at Google Inc.'
            },
            {
                'name': 'Danielle Feinberg',
                'img': '../assets/img/keynotes/danielle.jpg',
                'year': 'Director of Photography for Lighting at Pixar'
            },
            {
                'name': 'Travis Oliphant',
                'img': '../assets/img/keynotes/travis.jpg',
                'year': 'Founder of Anaconda and primary creator of NumPy',
                'youtube': 'https://www.youtube.com/watch?v=_PDvlqbgxCU'
            },
            {
                'name': 'Anna Patterson',
                'img': '../assets/img/keynotes/anna.jpg',
                'year': 'Co-founder of search engine Cuil'
            },
            {
                'name': 'Robin Walker',
                'img': '../assets/img/keynotes/robin.jpg',
                'year': 'Co-developer of Team Fortress'
            },
            {
                'name': 'Laura I. Gómez',
                'img': '../assets/img/keynotes/laura.jpg',
                'year': 'Founder and CEO of Atipica Inc.'
            },
            {
                'name': 'Basil Alwan',
                'img': '../assets/img/keynotes/basil.jpg',
                'year': 'President of IP/Optical Networks at Nokia'
            },
            {
                'name': 'Cassidy Williams',
                'img': '../assets/img/keynotes/cassidy.jpg',
                'year': 'Head of Developer Voice Programs at Amazon'
            },
            {
                'name': 'Chris Gladwin',
                'img': '../assets/img/keynotes/chris.jpg',
                'year': 'Founder of Cleversafe'
            },
            {
                'name': 'Stefano Zacchiroli',
                'img': '../assets/img/keynotes/stefano.jpg',
                'year': 'Debian Project Leader'
            },
            {
                'name': 'Roy Bhat',
                'img': '../assets/img/keynotes/roy.jpg',
                'year': 2016
            }
        ];


        this.handleClick = (evt, url, id) => {
            if (url != null && url != undefined) {
                window.open(url, '_blank');
            }
        };

        const speakerView = speakerList.map((speaker, idx) => {
            let hex = "";
            switch (speaker.track) {
                case 'data':
                    hex = "#02B2CA";
                    break;
                case 'hci':
                    hex = "#85C494"
                    break;
                case 'security':
                    hex = "#EC7F48"
                    break;
                case 'systems':
                    hex = "#E4222B"
                    break;
                case 'keynote':
                    hex = "#9a6fb0"
                    break;

            }
            var hexStr = "6px solid " + hex;
            var link = speaker.youtube;
            var reveal = (link != undefined && link != null) ? "visible" : "hidden";
            //hasLinkColor - Color of glyphicon link if the speaker's card DOES LINK to a YouTube video
            const hasLinkColor = "#c9e88f";
            //hasNoLinkColor - Color of glyphicon link if the speaker's card DOES NOT LINK to a YouTube video
            const hasNoLinkColor = "#a4b0bc";
            var cl = (link != undefined && link != null) ? hasLinkColor : hasNoLinkColor;
            var cName = (cl == hasLinkColor)? "Speakers__card js-speakercard Speakers__youtube": "Speakers__card js-speakercard";
            return ( 
                <Col key = { idx } xs = { 12 } lg = { 4 } sm = { 9 } md = { 9 } >
                    <Thumbnail onClick = {(e) => this.handleClick(e, link, idx) } className = {cName} src = { speaker.img } >
                    <h3 style = {{ color: "white" } } > { speaker.name } </h3> 
                    <h3 style = {{ color: "white" } } > { speaker.year } </h3> 
                    <span className = "glyphicon glyphicon-play-circle" id = "youtube-icon" style = {{ color: cl } }/>  
                    </Thumbnail> 
                </Col>
            )
        });

        return ( 
            <div className = "Speakers" id = "Speakers" >
                <PageHeader className = "Speakers__header" > <h2>Past Speakers </h2></PageHeader> 
                <Grid ><Row > { speakerView } </Row> </Grid> 
            </div>
        )
    }
}

export default Speakers
