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
                'wikipedia': 'https://twitter.com/sirajraval'
            },
            {
                'name': 'Saad Ali',
                'img': '../assets/img/keynotes/saad.jpg',
                'year': 'Senior Software Engineer at Google',
                'wikipedia': 'https://twitter.com/the_saad_ali'
            },
            {
                'name': 'Jay Gambetta',
                'img': '../assets/img/keynotes/jay_g.jpg',
                'year': 'Quantum Computing Researcher at IBM',
                'wikipedia': 'https://en.wikipedia.org/wiki/Jay_Gambetta'
            },
            {
                'name': 'Simon Adler',
                'img': '../assets/img/keynotes/simon.jpg',
                'year': 'Producter at Radiolab',
                'wikipedia': 'https://www.wnycstudios.org/people/simon-adler/'
            },
            {
                'name': 'Brian Hoffman',
                'img': '../assets/img/keynotes/brain_h.jpg',
                'year': 'CEO/Founder OpenBazaar',
                'wikipedia': 'https://twitter.com/brianchoffman'
            },
            {
                'name': 'Forrest Iandola',
                'img': '../assets/img/keynotes/forrest.jpg',
                'year': 'CEO Deepscale.ai',
                'wikipedia': 'https://en.wikipedia.org/wiki/Forrest_Iandola'
            },
            {
                'name': 'Romain Paulus',
                'img': '../assets/img/keynotes/romain.jpg',
                'year': 'Chief ML Scientist at Salesforce',
                'wikipedia': 'https://www.linkedin.com/in/romainpaulus/?locale=en_US'
            },
            {
                'name': 'Zac Lipton',
                'img': '../assets/img/keynotes/zac.jpg',
                'year': 'ML Scientist at Amazon AI Labs, Professor CMU',
                'wikipedia': 'http://zacklipton.com'
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
            if (wikilink) {
                return ( 
                    <Col key = { idx } xs = { 12 } lg = { 4 } sm = { 6 } md = { 6 }>
                        <Thumbnail className = {cName} src = { speaker.img } >
                        <h3 style = {{ color: "white" } } > { speaker.name } </h3> 
                        <h4 style = {{ color: "white" } } > { speaker.year } </h4> 
                        <div className="icon-group">
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
                        </div>
                        </Thumbnail> 
                    </Col>
                )
            }
        });

        return ( 
            <div className = "Speakers" id = "Speakers" >
                <PageHeader className = "Speakers__header" > <h2>Speakers </h2></PageHeader> 
                <Grid style={{width: "100%"}}><Row> { speakerView } </Row> </Grid> 
            </div>
        )
    }
}

export default Speakers
