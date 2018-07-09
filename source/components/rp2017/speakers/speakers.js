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
                'name': 'Siraj Raval',
                'img': '../assets/img/keynotes/siraj.jpg',
                'year': 'YouTuber - Accessible CS education',
                'wikipedia': 'https://twitter.com/sirajraval?lang=en'
            },
            {
                'name': 'Steve Wozniak',
                'img': '../assets/img/keynotes/steve.jpg',
                'year': 'Co-founder of Apple',
                'wikipedia': 'https://en.wikipedia.org/wiki/Steve_Wozniak'
            },
            {
                'name': 'Alexis Ohanian',
                'img': '../assets/img/keynotes/alex.jpg',
                'year': 'Co-founder of Reddit',
                'wikipedia': 'https://en.wikipedia.org/wiki/Alexis_Ohanian'
            },
            {
                'name': 'Brian J. Fox',
                'img': '../assets/img/keynotes/brian.jpg',
                'year': 'Author of GNU Bash Shell',
                'youtube': 'https://www.youtube.com/watch?v=itBU4F50N8Q',
                'wikipedia': 'https://en.wikipedia.org/wiki/Brian_Fox_(computer_programmer)'
            },
            {
                'name': 'Jay “Saurik” Freeman',
                'img': '../assets/img/keynotes/jay.jpg',
                'year': 'Creator of Cydia',
                'wikipedia': 'https://en.wikipedia.org/wiki/Jay_Freeman'
            },
            {
                'name': 'Peter Norvig',
                'img': '../assets/img/keynotes/peter.jpg',
                'year': 'Director of Research at Google Inc.',
                'wikipedia': 'https://en.wikipedia.org/wiki/Peter_Norvig'
            },
            {
                'name': 'Danielle Feinberg',
                'img': '../assets/img/keynotes/danielle.jpg',
                'year': 'Director of Photography at Pixar',
                'wikipedia': 'https://en.wikipedia.org/wiki/Danielle_Feinberg'
            },
            {
                'name': 'Travis Oliphant',
                'img': '../assets/img/keynotes/travis.jpg',
                'year': 'Founder of Anaconda & Creator of NumPy',
                'youtube': 'https://www.youtube.com/watch?v=_PDvlqbgxCU',
                'wikipedia': 'https://en.wikipedia.org/wiki/Travis_Oliphant'
            },
            {
                'name': 'Anna Patterson',
                'img': '../assets/img/keynotes/anna.jpg',
                'year': 'Co-founder of Search Engine Cuil',
                'wikipedia': 'https://en.wikipedia.org/wiki/Anna_Patterson'
            },
            {
                'name': 'Robin Walker',
                'img': '../assets/img/keynotes/robin.jpg',
                'year': 'Co-developer of Team Fortress',
                'wikipedia': 'https://en.wikipedia.org/wiki/Robin_Walker_(game_designer)'
            },
            {
                'name': 'Laura I. Gómez',
                'img': '../assets/img/keynotes/laura.jpg',
                'year': 'Founder and CEO of Atipica Inc.',
                'wikipedia': 'https://www.linkedin.com/in/lauraigomez/'
            },
            {
                'name': 'Basil Alwan',
                'img': '../assets/img/keynotes/basil.jpg',
                'year': 'President of IP/Optical Networks at Nokia',
                'wikipedia': 'https://www.nokia.com/en_int/investors/corporate-governance/group-leadership-team/basil-alwan-president-of-ipoptical-networks'
            },
            {
                'name': 'Cassidy Williams',
                'img': '../assets/img/keynotes/cassidy.jpg',
                'year': 'Head of Amazon Developer Voice Programs',
                'wikipedia': 'https://cassidoo.co/'
            },
            {
                'name': 'Chris Gladwin',
                'img': '../assets/img/keynotes/chris.jpg',
                'year': 'Founder of Cleversafe',
                'wikipedia': 'https://en.wikipedia.org/wiki/Chris_Gladwin_(engineer)'
            },
            {
                'name': 'Stefano Zacchiroli',
                'img': '../assets/img/keynotes/stefano.jpg',
                'year': 'Debian Project Leader',
                'wikipedia': 'https://upsilon.cc/~zack/'
            },
            {
                'name': 'Roy Bahat',
                'img': '../assets/img/keynotes/roy.jpg',
                'year': 'Head of Bloomberg Beta',
                'wikipedia': 'https://www.linkedin.com/in/roybahat/'
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
            var wikilink = speaker.wikipedia;
            var reveal = (link != undefined && link != null) ? "visible" : "hidden";
            const hasLinkColor = "#c9e88f";
            const hasNoLinkColor = "#a4b0bc";
            var cl = (link != undefined && link != null) ? hasLinkColor : hasNoLinkColor;
            var wikicolor = "#c9e88f"
            var cName = (cl == hasLinkColor)? "Speakers__card js-speakercard Speakers__youtube": "Speakers__card js-speakercard";
            if (link) {
                return (
                    <Col key = { idx } xs = { 12 } lg = { 4 } sm = { 6 } md = { 6 }>
                        <Thumbnail className = {cName} src = { speaker.img } >
                        <h3 style = {{ color: "white" } } > { speaker.name } </h3>
                        <h4 style = {{ color: "white" } } > { speaker.year } </h4>
                        <div className="icon-group">
                            <a href= {link} target="_blank" rel="noopener noreferrer">
                                <span className = "glyphicon glyphicon-play-circle" id = "youtube-icon" style = {{ color: cl } }/>
                            </a>
                            <a href= {wikilink} target="_blank" rel="noopener noreferrer">
                                <span className = "glyphicon glyphicon-info-sign" id = "wiki-icon" style = {{ color: wikicolor} }/>
                            </a>
                        </div>
                        </Thumbnail>
                    </Col>
                )
            } else {
                return(
                    <Col key = { idx } xs = { 12 } lg = { 4 } sm = { 6 } md = { 6 }>
                        <Thumbnail className = {cName} src = { speaker.img } >
                        <h3 style = {{ color: "white" } } > { speaker.name } </h3>
                        <h4 style = {{ color: "white" } } > { speaker.year } </h4>
                        <div className="icon-group">
                            <a href= {link} target="_blank" rel="noopener noreferrer">
                                <span className = "glyphicon glyphicon-play-circle" id = "youtube-icon" style = {{ color: cl, opacity: 0 } }/>
                            </a>
                            <a href= {wikilink} target="_blank" rel="noopener noreferrer">
                                <span className = "glyphicon glyphicon-info-sign" id = "wiki-icon" style = {{ color: wikicolor} }/>
                            </a>
                        </div>
                        </Thumbnail>
                    </Col>
                )
            }
        });

        return (
            <div className = "Speakers" id = "Speakers" >
                <PageHeader className = "Speakers__header" > <h2>Past Speakers</h2></PageHeader> 
                <Grid style={{width: "100%"}}><Row> { speakerView } </Row> </Grid>
            </div>
        )
    }
}

export default Speakers
