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
                'year': 1995,
                'wikipedia': 'https://en.wikipedia.org/wiki/Steve_Wozniak'
            },
            {
                'name': 'Alexis Ohanian',
                'img': '../assets/img/keynotes/alex.jpg',
                'year': 2009,
                'wikipedia': 'https://en.wikipedia.org/wiki/Alexis_Ohanian'
            },
            {
                'name': 'Brian J. Fox',
                'img': '../assets/img/keynotes/brian.jpg',
                'year': 2017,
                'youtube': 'https://www.youtube.com/watch?v=itBU4F50N8Q',
                'wikipedia': 'https://en.wikipedia.org/wiki/Brian_Fox_(computer_programmer)'
            },
            {
                'name': 'Jay “Saurik” Freeman',
                'img': '../assets/img/keynotes/jay.jpg',
                'year': 2014,
                'wikipedia': 'https://en.wikipedia.org/wiki/Jay_Freeman'
            },
            {
                'name': 'Peter Norvig',
                'img': '../assets/img/keynotes/peter.jpg',
                'year': 2013,
                'wikipedia': 'https://en.wikipedia.org/wiki/Peter_Norvig'
            },
            {
                'name': 'Danielle Feinberg',
                'img': '../assets/img/keynotes/danielle.jpg',
                'year': 2012,
                'wikipedia': 'https://en.wikipedia.org/wiki/Danielle_Feinberg'
            },
            {
                'name': 'Travis Oliphant',
                'img': '../assets/img/keynotes/travis.jpg',
                'year': 2017,
                'youtube': 'https://www.youtube.com/watch?v=_PDvlqbgxCU',
                'wikipedia': 'https://en.wikipedia.org/wiki/Travis_Oliphant'
            },
            {
                'name': 'Anna Patterson',
                'img': '../assets/img/keynotes/anna.jpg',
                'year': 2015,
                'wikipedia': 'https://en.wikipedia.org/wiki/Anna_Patterson'
            },
            {
                'name': 'Robin Walker',
                'img': '../assets/img/keynotes/robin.jpg',
                'year': 2013,
                'wikipedia': 'https://en.wikipedia.org/wiki/Robin_Walker_(game_designer)'
            },
            {
                'name': 'Laura I. Gómez',
                'img': '../assets/img/keynotes/laura.jpg',
                'year': 2016,
                'wikipedia': ''
            },
            {
                'name': 'Basil Alwan',
                'img': '../assets/img/keynotes/basil.jpg',
                'year': 2016,
                'wikipedia': ''
            },
            {
                'name': 'Cassidy Williams',
                'img': '../assets/img/keynotes/cassidy.jpg',
                'year': 2015,
                'wikipedia': ''
            },
            {
                'name': 'Chris Gladwin',
                'img': '../assets/img/keynotes/chris.jpg',
                'year': 2017,
                'wikipedia': ''
            },
            {
                'name': 'Stefano Zacchiroli',
                'img': '../assets/img/keynotes/stefano.jpg',
                'year': 2012,
                'wikipedia': ''
            },
            {
                'name': 'Roy Bhat',
                'img': '../assets/img/keynotes/roy.jpg',
                'year': 2016,
                'wikipedia': ''
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
            var cl = (link != undefined && link != null) ? "#c9e88f" : "#a4b0bc";
            var wikicolor = "#c9e88f"
            if (link) {
                return ( 
                <Col key = { idx } xs = { 12 } lg = { 4 } sm = { 9 } md = { 9 } >
                    <Thumbnail onClick = {(e) => this.handleClick(e, link, idx) } className = "Speakers__card js-speakercard" src = { speaker.img } >
                    <h3 style = {{ color: "white" } } > { speaker.name } </h3> 
                    <h3 style = {{ color: "white" } } > { speaker.year } </h3> 
                    <span className = "glyphicon glyphicon-play-circle" id = "youtube-icon" style = {{ color: cl} }/>  
                    <span className = "glyphicon glyphicon-info-sign" id = "wiki-icon" style = {{ color: wikicolor} }/> 
                    </Thumbnail> 
                </Col>
                )
            } else {
                return ( 
                <Col key = { idx } xs = { 12 } lg = { 4 } sm = { 9 } md = { 9 } >
                    <Thumbnail onClick = {(e) => this.handleClick(e, link, idx) } className = "Speakers__card js-speakercard" src = { speaker.img } >
                    <h3 style = {{ color: "white" } } > { speaker.name } </h3> 
                    <h3 style = {{ color: "white" } } > { speaker.year } </h3>
                    <span className = "glyphicon glyphicon-play-circle" id = "youtube-icon" style = {{ color: cl, opacity: 0 } }/>  
                    <span className = "glyphicon glyphicon-info-sign" id = "wiki-icon" style = {{ color: wikicolor} }/>
                     
 
                    </Thumbnail> 
                </Col>
                )
            }
            
        });

        return ( 
            <div className = "Speakers" id = "Speakers" >
                <PageHeader className = "Speakers__header" > Past Keynote Speakers </PageHeader> 
                <Grid ><Row > { speakerView } </Row> </Grid> 
            </div>
        )
    }
}

export default Speakers